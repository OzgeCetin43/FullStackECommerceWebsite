import { Layout } from "antd";

import { SecureDeliveryBanner, Slider } from "../../components";

import "./home.css";

const { Content } = Layout;

export const Home = () => {
  return (
    <Content className="home-container">
      <Slider />
      <SecureDeliveryBanner />
    </Content>
  );
};
