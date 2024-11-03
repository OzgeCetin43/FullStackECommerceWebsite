import { Routes, Route } from "react-router-dom";

import { Home, Login, ProductDetail, Shop } from "../pages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products/:id" element={<ProductDetail />} />
    </Routes>
  );
};

export default Routers;
