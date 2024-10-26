import { Layout, Typography, Input, Button } from "antd";

import coupon from "../../assets/coupon.webp";

import "./newsletter.css";

const { Content } = Layout;
const { Text } = Typography;

export const Newsletter = () => {
  return (
    <Content className="newsletter-content">
      <Content className="newsletter-left-content">
        <Text className="newsletter-subtitle-text">
          $20 discount for your first order
        </Text>
        <Text className="newsletter-title-text">
          Join our newsletter and get...
        </Text>
        <Text className="newsletter-description-text">
          Join our email subscription now to get updates on promotions and
          coupons.
        </Text>
        <Content className="newsletter-input-content">
          <Input
            type="email"
            placeholder="Your email address"
            className="newsletter-input"
          />
          <Button className="newsletter-subscribe-button">Subscribe</Button>
        </Content>
      </Content>
      <Content className="newsletter-right-content">
        <img src={coupon} alt="coupon" />
      </Content>
    </Content>
  );
};
