import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import { Route, Routes } from "react-router-dom";

import Layout from "@/components/Layout";

import AdminsPage from "./pages/AdminsPage";
import AllGamesPage from "./pages/AllGamesPage";
import ErrorPage from "./pages/ErrorPage";
import GamePage from "./pages/GamePage";
import SubAdminsPage from "./pages/SubAdminsPage";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/listgames" element={<AllGamesPage />} />
        <Route path="/listgames/game/:id" element={<GamePage />} />
        <Route path="/listadmins" element={<AdminsPage />} />
        <Route path="/listsubadmins" element={<SubAdminsPage />} />
        <Route path="/listusers" element={<UsersPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
