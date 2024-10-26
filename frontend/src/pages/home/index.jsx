import { Layout } from "antd";

import {
  Categories,
  FooterMenu,
  Newsletter,
  SecureDeliveryBanner,
  Services,
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
      <Categories />
      <SpecialOffer />
      <SpecialOfferProductList />
      <Newsletter />
      <Services />
      <FooterMenu />
    </Content>
  );
};
