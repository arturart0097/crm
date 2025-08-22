import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import { usePrivy } from "@privy-io/react-auth";
import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "@/components/Layout";

import AdminsPage from "./pages/AdminsPage";
import AllGamesPage from "./pages/AllGamesPage";
import ErrorPage from "./pages/ErrorPage";
import GamePage from "./pages/GamePage";
import SubAdminsPage from "./pages/SubAdminsPage";
import UsersPage from "./pages/UsersPage";

function ProtectedRoute({ children }) {
  const { authenticated } = usePrivy();
  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route index element={<LoginPage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route
          index
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/listgames"
          element={
            <ProtectedRoute>
              <AllGamesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/listgames/game/:id"
          element={
            <ProtectedRoute>
              <GamePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/listadmins"
          element={
            <ProtectedRoute>
              <AdminsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/listsubadmins"
          element={
            <ProtectedRoute>
              <SubAdminsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/listusers"
          element={
            <ProtectedRoute>
              <UsersPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
