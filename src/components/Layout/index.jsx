import { Outlet, useLocation } from "react-router-dom";

import bgMain from "@/assets/bg/bg.png";

import { Aside } from "../Aside";
import { Header } from "../Header";

export default function Layout() {
  const { pathname } = useLocation();

  const showAside =
    pathname === "/" ||
    pathname === "/listgames" ||
    pathname.includes("/game/") ||
    pathname === "/listadmins" ||
    pathname === "/listsubadmins" ||
    pathname === "/listusers" ||
    pathname === "/approved" ||
    pathname === "/disapproved" ;

  return (
    <div
      className="layout"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <div style={{ display: "flex", flex: 1, minHeight: 0 }}>
        {showAside && <Aside />}
        <main
          style={{
            flex: 1,
            paddingLeft: "20px",
            overflow: "auto",
            backgroundImage: `url(${bgMain})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
