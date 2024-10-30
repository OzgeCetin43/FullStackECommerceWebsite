import { Routes, Route } from "react-router-dom";

import { Home, Shop } from "../pages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
};

export default Routers;
