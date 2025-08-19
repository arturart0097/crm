import React from "react";

import "./style.css";

export const SideMenu = ({
  isOpen,
  onClose,
  title = "Menu",
  children,
  width = "400px",
  position = "right",
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="side-menu-overlay" onClick={onClose}></div>

      {/* Side Menu */}
      <div
        className={`side-menu ${isOpen ? "open" : ""} ${position}`}
        style={{ width }}
      >
        <div className="side-menu-header">
          <h3>{title}</h3>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="side-menu-content">{children}</div>
      </div>
    </>
  );
};
