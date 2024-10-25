import { Layout } from "antd";

import { SecureDeliveryBanner, Slider, SpecialOffer } from "../../components";

import "./home.css";

const { Content } = Layout;

export const Home = () => {
  return (
    <Content className="home-container">
      <SecureDeliveryBanner />
      <Slider />
      <SpecialOffer />
    </Content>
  );
};
