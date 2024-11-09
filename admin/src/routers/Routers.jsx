import { Routes, Route } from "react-router-dom";
import { SalesAnalytics } from "../pages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<SalesAnalytics />} />
    </Routes>
  );
};

export default Routers;
