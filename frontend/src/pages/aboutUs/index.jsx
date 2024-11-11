import { Layout, Typography } from "antd";

import banner from "../../assets/about-us-banner.jpg";

import { FooterContact, Services, Newsletter } from "../../components";

import "./about-us.css";

const { Content } = Layout;
const { Text } = Typography;

export const AboutUs = () => {
  return (
    <Content className="about-us-container">
      <Content className="about-us-our-story-content">
        <Content className="about-us-our-story-image-content">
          <img src={banner} alt="banner" />
        </Content>
        <Content className="about-us-our-story-text-content">
          <Text className="about-us-title-text">About Us</Text>
          <Text className="about-us-description-text">
            Welcome to Bacola – Your trusted online grocery destination, where
            convenience meets quality. We’ve reimagined how you shop for food,
            household items, and everyday essentials, offering an easy,
            efficient, and reliable way to stock your pantry without ever
            leaving your home. Whether you're looking for fresh produce, organic
            options, pantry staples, or gourmet treats, Bacola makes online
            grocery shopping simple and enjoyable.
          </Text>
          <Text className="about-us-our-story-title-text">Our Story</Text>
          <Text className="about-us-our-story-text">
            Founded with the idea of transforming how people shop for groceries,
            Bacola was created to bring the best local and global food products
            to your doorstep. We understand that busy lives often make grocery
            shopping a chore. That's why we set out to create an online grocery
            experience that not only saves you time but also offers quality,
            variety, and value.
          </Text>
          <Text className="about-us-our-story-text">
            Since launching, Bacola has become a trusted name in online grocery
            shopping. We’ve grown rapidly, gaining loyal customers who
            appreciate the convenience, great pricing, and extensive selection
            we offer. Our team is passionate about bringing fresh, quality
            ingredients from local suppliers and global brands, ensuring that
            you have access to the best grocery items at your fingertips.
          </Text>
          <Text className="about-us-our-story-title-text">Our Mission</Text>
          <Text className="about-us-our-story-text">
            At Bacola, our mission is to provide an easy and convenient way for
            customers to shop for groceries while offering a seamless online
            experience. We aim to be your go-to grocery store—delivering
            everything you need, from everyday basics to hard-to-find specialty
            items, all with just a few clicks.
          </Text>
          <Text className="about-us-our-story-text">
            We believe that high-quality food should be accessible to everyone,
            and we strive to offer an affordable shopping experience, without
            compromising on freshness or taste. Whether you’re looking to plan
            your weekly meals, stock up on household essentials, or discover new
            products, we’re here to simplify your shopping and enrich your daily
            life.
          </Text>
        </Content>
      </Content>
      <FooterContact />
      <Services />
      <Newsletter />
    </Content>
  );
};
