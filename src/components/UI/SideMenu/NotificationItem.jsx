import React from "react";

export const NotificationItem = ({
  message,
  time,
  isUnread = false,
  onClick,
  avatar,
  username,
}) => {
  return (
    <div className="notification-item" onClick={onClick}>
      <div className="notification-avatar">
        {avatar ? (
          <img src={avatar} alt={username || "User"} />
        ) : (
          <div className="avatar-placeholder">
            {username ? username.charAt(0).toUpperCase() : "U"}
          </div>
        )}
      </div>
      <div className="notification-content">
        <div className="notification-text">
          <p>{message}</p>
          <span>{time}</span>
        </div>
        {isUnread && <div className="notification-dot"></div>}
      </div>
    </div>
  );
};
