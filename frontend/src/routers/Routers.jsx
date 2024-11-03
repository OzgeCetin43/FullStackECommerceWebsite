import { Routes, Route } from "react-router-dom";

import { Home, Login, Shop } from "../pages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Routers;
