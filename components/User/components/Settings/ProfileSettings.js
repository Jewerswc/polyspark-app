// src/components/User/components/Settings/ProfileSettings.jsx

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import API from './../../../../lib/api';
import {
  getAccessToken,
  refreshAccessToken,
  clearTokens
} from './../../../../pages/api/auth';

import styles from './ProfileSettings.module.css';
import ProfileSettingsTitle from './components/Title/ProfileSettingsTitle';
import AvatarAndUpload from './components/AvatarAndUpload';
import UserInputs from './components/UserInputs';

export default function ProfileSettings() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // ------------- Profile state -------------
  // The “live” form values:
  const [profile, setProfile] = useState({
    email: '',
    username: '',
    bio: '',
    avatar_url: null
  });

  // A copy of what came back from the server on first load.
  // We’ll compare against this to see if anything actually changed.
  const [originalProfile, setOriginalProfile] = useState({
    email: '',
    username: '',
    bio: '',
    avatar_url: null
  });

  // Since “username” comparison should ignore trailing spaces,
  // we also keep the raw “originalUsername” for trimming logic.
  const [originalUsername, setOriginalUsername] = useState('');

  // If the user picks a NEW avatar file, we store it here.
  // Until they click “Save,” avatarFile !== null ⇒ dirty.
  const [avatarFile, setAvatarFile] = useState(null);

  // ------------- Username availability state -------------
  const [isChecking, setIsChecking] = useState(false);
  const [isAvailable, setIsAvailable] = useState(null); // null = not checked yet
  const [checkError, setCheckError] = useState('');

  // 1) On mount, load “me/” and initialize both profile & originalProfile:
  useEffect(() => {
    let isMounted = true;

    async function loadProfile() {
      const token = getAccessToken();
      if (!token) {
        clearTokens();
        router.push('/login');
        return;
      }
      if (!API.defaults.headers.common['Authorization']) {
        clearTokens();
        router.push('/login');
        return;
      }

      try {
        const res = await API.get('me/');
        if (!isMounted) return;

        // Build an object that matches our `profile` shape:
        const fetched = {
          email: res.data.email,
          username: res.data.username,
          bio: res.data.bio || '',
          avatar_url: res.data.avatar_url
        };

        setProfile(fetched);
        setOriginalProfile(fetched);
        setOriginalUsername(res.data.username);
        setIsAvailable(true); // original username is “available” by definition

      } catch (err) {
        const status = err.response?.status;
        const code = err.response?.data?.code;
        if (status === 401 && code === 'token_not_valid') {
          try {
            await refreshAccessToken();
            const retryRes = await API.get('me/');
            if (!isMounted) return;

            const fetched = {
              email: retryRes.data.email,
              username: retryRes.data.username,
              bio: retryRes.data.bio || '',
              avatar_url: retryRes.data.avatar_url
            };

            setProfile(fetched);
            setOriginalProfile(fetched);
            setOriginalUsername(retryRes.data.username);
            setIsAvailable(true);
          } catch {
            clearTokens();
            router.push('/login');
            return;
          }
        } else {
          console.error('Failed to load profile:', err.response || err);
          clearTokens();
          router.push('/login');
          return;
        }
      }

      if (isMounted) setLoading(false);
    }

    loadProfile();
    return () => {
      isMounted = false;
    };
  }, [router]);

  // 2) Handler to update any text field in profile (email, username, bio).
  // We no longer set “isDirty” here; instead, we’ll compute `hasChanges` below.
  function handleFieldChange(fieldName, newValue) {
    if (fieldName === 'username') {
      setIsAvailable(null);
      setCheckError('');
    }

    setProfile((prev) => ({
      ...prev,
      [fieldName]: newValue
    }));
  }

  // 3) Handler to capture new avatarFile from the file‐picker component:
  function handleAvatarFileChange(file) {
    setAvatarFile(file);
    // Immediately show a preview:
    setProfile((prev) => ({
      ...prev,
      avatar_url: URL.createObjectURL(file)
    }));
  }

  // 4) When the username input “blurs,” fire off a check‐username call:
  async function checkUsername() {
    const candidate = profile.username.trim();
    if (!candidate) {
      setIsAvailable(null);
      return;
    }
    if (candidate === originalUsername) {
      // If they erased back to exactly what it was originally (no net change):
      setIsAvailable(true);
      setCheckError('');
      return;
    }

    setIsChecking(true);
    setCheckError('');
    try {
      const res = await API.get('check-username/', {
        params: { username: candidate }
      });
      setIsAvailable(res.data.available);
    } catch (err) {
      console.error('Error checking username:', err);
      setCheckError('Unable to verify availability.');
      setIsAvailable(null);
    } finally {
      setIsChecking(false);
    }
  }

  // 5) Save button handler: patch “me/” (plus avatar if present).
  async function handleSave() {
    // Don’t let them save if username is explicitly taken:
    if (isAvailable === false) {
      alert('That username is already taken. Please choose another one.');
      return;
    }

    const token = getAccessToken();
    if (!token) {
      clearTokens();
      return router.push('/login');
    }
    if (!API.defaults.headers.common['Authorization']) {
      clearTokens();
      return router.push('/login');
    }

    try {
      // If user didn’t pick a new avatar file, just do a JSON patch:
      if (!avatarFile) {
        await API.patch('me/', {
          email: profile.email,
          username: profile.username.trim(),
          bio: profile.bio
        });
        alert('Profile updated successfully!');

        // Reset our “originalProfile” to match the newly saved values:
        const updated = {
          email: profile.email,
          username: profile.username.trim(),
          bio: profile.bio,
          avatar_url: profile.avatar_url
        };
        setOriginalProfile(updated);
        setOriginalUsername(profile.username.trim());
        // avatarFile is still null, so “hasChanges” will recalc to false
        return;
      }

      // Otherwise, user picked a new avatarFile → do two requests:
      // a) JSON patch for email/username/bio
      await API.patch('me/', {
        email: profile.email,
        username: profile.username.trim(),
        bio: profile.bio
      });

      // b) Then upload avatar via multipart/form-data:
      const uploadData = new FormData();
      uploadData.append('avatar', avatarFile);

      await API.patch('me/avatar/', uploadData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      alert('Profile and avatar updated successfully!');

      // Reset originalProfile to match what’s now on the server:
      const updated = {
        email: profile.email,
        username: profile.username.trim(),
        bio: profile.bio,
        avatar_url: profile.avatar_url
      };
      setOriginalProfile(updated);
      setOriginalUsername(profile.username.trim());
      // Clear avatarFile (so hasChanges will ignore it)
      setAvatarFile(null);

    } catch (err) {
      const status = err.response?.status;
      const code = err.response?.data?.code;
      if (status === 401 && code === 'token_not_valid') {
        try {
          await refreshAccessToken();
          return handleSave(); // retry once
        } catch {
          clearTokens();
          return router.push('/login');
        }
      } else {
        console.error('Failed to update:', err.response || err);
        alert('Error updating profile.');
      }
    }
  }

  if (loading) return <div>Loading profile…</div>;

  //
  // ─── COMPUTE “HAS CHANGES?” ───────────────────────────────────────────────
  //
  // If ANY of these conditions are true, we consider the form “dirty,” i.e. ENABLE Save.
  const hasChanges =
    avatarFile !== null ||
    profile.email !== originalProfile.email ||
    profile.username.trim() !== originalProfile.username ||
    profile.bio !== originalProfile.bio;

  return (
    <div className={styles.container}>
      <ProfileSettingsTitle />

      {/* Avatar & upload */}
      <AvatarAndUpload
        avatarUrl={profile.avatar_url}
        onFileChange={handleAvatarFileChange}
      />

      {/*
        Pass down all the props required for:
          1) “username availability” UI
          2) “hasChanges” → disables/enables SaveChangesButton
      */}
      <UserInputs
        email={profile.email}
        username={profile.username}
        bio={profile.bio}
        onFieldChange={handleFieldChange}
        onSave={handleSave}

        // Username availability:
        onUsernameBlur={checkUsername}
        isChecking={isChecking}
        isAvailable={isAvailable}
        checkError={checkError}

        // Derived “form is dirty” flag:
        isDirty={hasChanges}
      />
    </div>
  );
}
