import { Button, Layout, Typography } from "antd";

import banner1 from "../../assets/banner-1.webp";
import banner2 from "../../assets/banner-2.webp";

import "./home-banners.css";

const { Content } = Layout;
const { Text } = Typography;

const banners = [
  {
    id: 1,
    image: banner1,
    rate: 20,
    title: "Gerthesim Tend Inder Prosur",
    price: 7.99,
  },
  {
    id: 2,
    image: banner2,
    rate: 17,
    title: "Gerthesim Tend Inder Prosur",
    price: 6.45,
  },
];

export const HomeBanners = () => {
  return (
    <Content className="home-banners-content">
      {banners.map((banner) => (
        <Content key={banner.id} className="home-banner-content">
          <img src={banner.image} alt={banner.title} />
          <Content className="home-banner-text-content">
            <Text className="banner-offer-text">
              Exclusive Offer <span>-{banner.rate}% Off</span>
            </Text>
            <Text className="banner-title-text">{banner.title}</Text>
            <Text className="banner-text">Only this week. Don't miss...</Text>
            <Text className="banner-price-text">
              from <span>${banner.price}</span>
            </Text>
            <Button className="banner-shop-now-button">Shop Now</Button>
          </Content>
        </Content>
      ))}
    </Content>
  );
};
