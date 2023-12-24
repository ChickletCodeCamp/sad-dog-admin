import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import { routerPath } from "../models/routerModel";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routerPath.login.toString()} element={<Login />} />
      <Route path={routerPath.home.toString()} element={<Login />} />
      {/* Add more routes here */}
      {/* <Route path="/another-page" element={<AnotherPage />} /> */}
    </Routes>
  );
};

export default AppRoutes;
