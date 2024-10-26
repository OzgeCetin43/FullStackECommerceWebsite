import { Layout } from "antd";

import {
  Categories,
  FooterMenu,
  HomeBanners,
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
      <HomeBanners />
      <Newsletter />
      <Services />
      <FooterMenu />
    </Content>
  );
};
