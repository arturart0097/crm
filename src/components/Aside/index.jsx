import React from "react";

import { Link, NavLink, useLocation } from "react-router-dom";

import logo from "@/assets/icons/logo.svg";

import "./style.css";

export const Aside = ({
  brandName = "GameGPT",
  brandLogo = logo,
  extraIcon = null,
  sections,
  activeSectionLabel,
  onItemClick,
  className = "",
  style,
}) => {
  const { pathname } = useLocation();

  const defaultSections = [
    { label: "Dashboard", to: "/home" },
    {
      label: "Games",
      children: [
        { label: "All games", to: "/listgames" },
        { label: "Approved" },
        { label: "Disapproved" },
      ],
    },
    {
      label: "Users",
      children: [
        { label: "Admin", to: "/listadmins" },
        { label: "Subadmins", to: "/listsubadmins" },
        { label: "Users", to: "/listusers" },
      ],
    },
    { label: "Support" },
    { label: "Settings" },
    { label: "Logs / change history" },
  ];

  const items = sections && sections.length ? sections : defaultSections;

  const handleClick = (item) => {
    if (onItemClick) onItemClick(item);
  };

  const isSectionActive = (section) => {
    if (activeSectionLabel === section.label) return true;
    if (!section.children || section.children.length === 0) return false;
    return section.children.some(
      (child) => child.to && pathname.startsWith(child.to),
    );
  };

  return (
    <aside className={`aside ${className}`} style={style}>
      <nav className="aside-nav">
        {items.map((section, idx) => (
          <div className="aside-section" key={`${section.label}-${idx}`}>
            <div>
              <Link
                to={section.to}
                className={`aside-section-title ${isSectionActive(section) ? "active" : ""}`}
              >
                {section.label}
              </Link>
            </div>
            {section.children && section.children.length > 0 && (
              <ul className="aside-subitems">
                {section.children.map((child, cIdx) => (
                  <li
                    key={`${section.label}-${child.label}-${cIdx}`}
                    className={`aside-subitem ${child.to && pathname.startsWith(child.to) ? "active" : ""}`}
                    onClick={() => handleClick(child)}
                  >
                    {child.to ? (
                      <Link
                        to={child.to}
                        className={`aside-subitem ${child.to && pathname.startsWith(child.to) ? "active" : ""}`}
                      >
                        {child.label}
                      </Link>
                    ) : (
                      child.label
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>

      <div className="aside-gradient" />
    </aside>
  );
};
