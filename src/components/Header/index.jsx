import { useState } from "react";

import { notifications } from "@/mocks/notifications";
import { useLocation, useNavigate } from "react-router-dom";

import logo from "@/assets/icons/logo.svg";
import notification from "@/assets/icons/notification.svg";
import search from "@/assets/icons/search.svg";
import user from "@/assets/images/user.jpg";

import { Input } from "../UI/Input";
import { SideMenu } from "../UI/SideMenu";
import { NotificationItem } from "../UI/SideMenu/NotificationItem";
import { UserMenu } from "../UI/SideMenu/UserMenu";
import "./style.css";

export const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const headerFunc =
    pathname === "/" ||
    pathname === "/listgames" ||
    pathname.includes("/game/") ||
    pathname === "/listadmins" ||
    pathname === "/listsubadmins" ||
    pathname === "/listusers" ||
    pathname === "/approved" ||
    pathname === "/disapproved";

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
    if (isUserMenuOpen) setIsUserMenuOpen(false);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
    if (isSideMenuOpen) setIsSideMenuOpen(false);
  };

  const closeSideMenu = () => {
    setIsSideMenuOpen(false);
  };

  const closeUserMenu = () => {
    setIsUserMenuOpen(false);
  };

  const handleLogout = () => {
    // Add logout logic here
    console.log("Logout clicked");
    closeUserMenu();
    navigate("/");
  };

  return (
    <>
      <header>
        {!headerFunc ? (
          <div className="logo-text">
            <img src={logo} alt="logo" />
            <span>GameGPT</span>
          </div>
        ) : (
          <div className="headerfunc-wrapper">
            <div className="left-header">
              <div className="logo-text" onClick={() => navigate("/")}>
                <img src={logo} alt="logo" />
                <span>GameGPT</span>
              </div>
              <Input
                type="text"
                id="search"
                name="search"
                placeholder="Search"
                img={search}
                style={{
                  width: 334,
                }}
              />
            </div>
            <div className="user-wrapper">
              <img
                src={notification}
                alt="notification"
                className="notification"
                onClick={toggleSideMenu}
              />
              <div className="user-info" onClick={toggleUserMenu}>
                <img src={user} alt="user" className="user-logo" />
                <div>
                  <p>Username</p>
                  <span>admin</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <SideMenu
        isOpen={isSideMenuOpen}
        onClose={closeSideMenu}
        title={`Notifications (${notifications.length})`}
      >
        {notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            message={notification.message}
            time={notification.time}
            isUnread={notification.isUnread}
            username={notification.username}
            avatar={notification.avatar}
          />
        ))}
      </SideMenu>

      <UserMenu
        isOpen={isUserMenuOpen}
        onClose={closeUserMenu}
        username="Administrator"
        onLogout={handleLogout}
      />
    </>
  );
};
