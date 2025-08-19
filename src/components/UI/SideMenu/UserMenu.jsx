import React from "react";

import inbox from "@/assets/icons/inbox.svg";
import logOut from "@/assets/icons/log-out.svg";
import profile from "@/assets/icons/profile.svg";
import settings from "@/assets/icons/settings.svg";
import support from "@/assets/icons/support.svg";

export const UserMenu = ({
  isOpen,
  onClose,
  username = "Administrator 1",
  onLogout,
}) => {
  if (!isOpen) return null;

  const menuItems = [
    {
      id: 1,
      icon: profile,
      label: "Profile",
      action: () => console.log("Profile clicked"),
    },
    {
      id: 2,
      icon: inbox,
      label: "Inbox",
      action: () => console.log("Inbox clicked"),
    },
    {
      id: 3,
      icon: support,
      label: "Support",
      action: () => console.log("Support clicked"),
    },
    {
      id: 4,
      icon: settings,
      label: "Settings",
      action: () => console.log("Settings clicked"),
    },
  ];

  return (
    <>
      {/* Overlay */}
      <div className="side-menu-overlay" onClick={onClose}></div>

      {/* User Menu */}
      <div className={`side-menu user-menu ${isOpen ? "open" : ""} right`}>
        <div className="side-menu-header">
          <h3>{username}</h3>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="side-menu-content">
          <div className="user-menu-items">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="user-menu-item"
                onClick={item.action}
              >
                <span className="menu-icon">
                  <img src={item.icon} alt={item.label} />
                </span>
                <span className="menu-label">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="user-menu-footer">
            <div className="user-menu-item logout-item" onClick={onLogout}>
              <img src={logOut} alt="log-out" />
              <span className="menu-label">Log out</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
