"use client";

import React from "react";
import styles from "./NotificationsDropdown.module.css";
import { FiBell } from "react-icons/fi";

export default function NotificationsDropdown({
  trigger = null,
  notifications = [],           // array of { id, title, time? }
  onNotificationClick = () => {},
}) {
  const clonedTrigger = React.isValidElement(trigger)
    ? React.cloneElement(trigger)
    : null;

  return (
    <div className={styles.dropdown}>
      {clonedTrigger}

      <div className={styles.menu}>
        <div className={styles.menuHeader}>Notifications</div>

        {notifications.length === 0 ? (
          <div className={styles.emptyState}>
            <FiBell className={styles.bellIcon} />
            <span className={styles.emptyText}>
              You do not have any notifications.
            </span>
          </div>
        ) : (
          <div className={styles.itemsContainer}>
            {notifications.map((notif, idx) => (
              <React.Fragment key={notif.id ?? idx}>
                <button
                  className={styles.notificationItem}
                  onClick={() => onNotificationClick(notif)}
                >
                  <div className={styles.notificationContent}>
                    <span className={styles.notificationText}>
                      {notif.title}
                    </span>
                    {notif.time && (
                      <span className={styles.notificationTime}>
                        {notif.time}
                      </span>
                    )}
                  </div>
                </button>
                {idx < notifications.length - 1 && (
                  <div className={styles.notificationDivider} />
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
