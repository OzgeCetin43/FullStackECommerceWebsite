import { Layout } from "antd";

import { ShopContent, ShopSidebar } from "../../components";

import "./shop.css";

const { Content } = Layout;

export const Shop = () => {
  return (
    <Content className="shop-container">
      <ShopSidebar />
      <ShopContent />
    </Content>
  );
};
