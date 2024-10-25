import { Button, Layout, Typography } from "antd";

import "./secure-delivery-banner.css";

const { Content } = Layout;
const { Text } = Typography;

export const SecureDeliveryBanner = () => {
  return (
    <Content className="secure-delivery-banner-content">
      <Text className="secure-delivery-text">
        <b>100% Secure delivery</b> without contacting the courier
      </Text>
      <Button className="secure-delivery-shop-button">Shop Now</Button>
    </Content>
  );
};
