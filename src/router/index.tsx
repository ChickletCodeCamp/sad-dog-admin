import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute"; // 確保路徑正確
import Login from "../pages/Login/Login";
import Page from "../pages/";
import { routerPath } from "../models/routerModel";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routerPath.login.toString()} element={<Login />} />
      <Route
        path={routerPath.home.toString()}
        element={
          <ProtectedRoute>
            <Page />
          </ProtectedRoute>
        }
      />
      {/* Add more protected routes here */}
    </Routes>
  );
};

export default AppRoutes;
