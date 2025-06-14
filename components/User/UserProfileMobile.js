
import styles from './components/Settings/ProfileSettings.module.css';
import ProfileSettingsTitle from './components/Settings/components/Title/ProfileSettingsTitle'
import AvatarAndUpload from './components/Settings/components/AvatarAndUpload'
import UserInputs from './components/Settings/components/UserInputs';



// src/components/User/components/Settings/ProfileSettings.jsx

import React, { useState, useEffect } from 'react';

import API from './../../lib/api';
import {
  getAccessToken,
  refreshAccessToken,
  clearTokens
} from './../../pages/api/auth';
import { useRouter } from 'next/router';

export default function ProfileSettings() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // Profile state: email, username, bio, avatar_url
  const [profile, setProfile] = useState({
    email: '',
    username: '',
    bio: '',
    avatar_url: null
  });

  // Keep track of newly selected avatar file
  const [avatarFile, setAvatarFile] = useState(null);

  // 1) On mount, load profile from /me/
  useEffect(() => {
    let isMounted = true;

    async function loadProfile() {
      const token = getAccessToken();
      if (!token) {
        clearTokens();
        router.push('/');
        return;
      }
      // Ensure Axios has the header:
      if (!API.defaults.headers.common['Authorization']) {
        console.warn('Axios missing Authorization header');
        clearTokens();
        router.push('/');
        return;
      }
      try {
        const res = await API.get('auth/me/'); 
        if (!isMounted) return;
        setProfile({
          email: res.data.email,
          username: res.data.username,
          bio: res.data.bio || '',
          avatar_url: res.data.avatar_url
        });
      } catch (err) {
        const status = err.response?.status;
        const code = err.response?.data?.code;
        if (status === 401 && code === 'token_not_valid') {
          try {
            const newAccess = await refreshAccessToken();
            // retry with new token
            const retryRes = await API.get('auth/me/');
            if (!isMounted) return;
            setProfile({
              email: retryRes.data.email,
              username: retryRes.data.username,
              bio: retryRes.data.bio || '',
              avatar_url: retryRes.data.avatar_url
            });
          } catch {
            clearTokens();
            router.push('/');
            return;
          }
        } else {
          console.error('Failed to load profile:', err.response || err);
          clearTokens();
          router.push('/');
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

  // 2) Handler to update any text field in profile (email, username, bio)
  function handleFieldChange(fieldName, newValue) {
    setProfile((prev) => ({
      ...prev,
      [fieldName]: newValue
    }));
  }

  // 3) Handler to capture new avatarFile
  function handleAvatarFileChange(file) {
    setAvatarFile(file);
    // Preview immediately (optional):
    setProfile((prev) => ({
      ...prev,
      avatar_url: URL.createObjectURL(file)
    }));
  }

  // 4) Save button handler → assemble FormData and patch
  async function handleSave() {
    const token = getAccessToken();
    if (!token) {
      clearTokens();
      return router.push('/');
    }
    if (!API.defaults.headers.common['Authorization']) {
      clearTokens();
      return router.push('/');
    }
  
    try {
      // 1) If no avatarFile was selected, send a JSON patch:
      if (!avatarFile) {
        await API.patch(
          'auth/me/',
          {
            email: profile.email,
            username: profile.username,
            bio: profile.bio
          }
        );
        alert('Profile updated successfully!');
        return;
      }
  
      // 2) If there _is_ an avatarFile, do two requests:
      //    a) First, update email/username/bio via JSON
      await API.patch(
        'auth/me/',
        {
          email: profile.email,
          username: profile.username,
          bio: profile.bio
        }
      );
  
      //    b) Then upload the avatar via FormData to a separate endpoint
      //       (e.g. /matching/api/me/avatar/ or however your backend expects it)
      const uploadData = new FormData();
      uploadData.append('avatar', avatarFile);
  
      // If your DRF view for avatar is at /matching/api/me/avatar/, for instance:
      await API.patch('me/avatar/', uploadData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      alert('Profile and avatar updated successfully!');
    } catch (err) {
      const status = err.response?.status;
      const code = err.response?.data?.code;
      if (status === 401 && code === 'token_not_valid') {
        try {
          await refreshAccessToken();
          return handleSave(); // retry
        } catch {
          clearTokens();
          return router.push('/');
        }
      } else {
        console.error('Failed to update:', err.response || err);
        alert('Error updating profile.');
      }
    }
  }
  
  if (loading) return <div>Loading profile…</div>;

  return (
    <div className={styles.container}>
      <ProfileSettingsTitle/>
      {/* AvatarAndUpload: shows current avatar_url and lets user pick a new file */}
      <AvatarAndUpload
        avatarUrl={profile.avatar_url}
        onFileChange={handleAvatarFileChange}
      />

      {/* UserInputsAndSaveButton: shows text inputs + save button */}
      <UserInputs
        email={profile.email}
        username={profile.username}
        bio={profile.bio}
        onFieldChange={handleFieldChange}
        onSave={handleSave}
      />
    </div>
  );
}
