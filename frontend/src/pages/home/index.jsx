import { Layout } from "antd";

import {
  BestSellers,
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
      <BestSellers />
      <HomeBanners />
      <Newsletter />
      <Services />
      <FooterMenu />
    </Content>
  );
};
