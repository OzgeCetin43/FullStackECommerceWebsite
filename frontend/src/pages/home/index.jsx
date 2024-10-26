import { Layout } from "antd";

import {
  SecureDeliveryBanner,
  Slider,
  SpecialOffer,
  SpecialOfferProductList,
} from "../../components";

import "./home.css";

const { Content } = Layout;

export const Home = () => {
  return (
    <Content className="home-container">
      <SecureDeliveryBanner />
      <Slider />
      <SpecialOffer />
      <SpecialOfferProductList />
    </Content>
  );
};
