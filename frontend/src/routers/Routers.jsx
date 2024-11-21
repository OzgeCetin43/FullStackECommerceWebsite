import { Routes, Route } from "react-router-dom";

import {
  AboutUs,
  Cart,
  Home,
  Login,
  MyAccount,
  ProductDetail,
  Register,
  Shop,
  Wishlist,
} from "../pages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/my-account" element={<MyAccount />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Routers;
