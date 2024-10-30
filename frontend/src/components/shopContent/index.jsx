import { Layout, Typography } from "antd";

import banner from "../../assets/shop-content-banner.jpg";

import "./shop-content.css";

const { Content } = Layout;
const { Text } = Typography;

export const ShopContent = () => {
  return (
    <Content className="shop-content">
      <Content className="shop-banner-content">
        <img src={banner} alt="banner" />
        <Content className="shop-banner-info-content">
          <Text className="shop-banner-subtitle-text">
            Organic Meals Prepared
          </Text>
          <Text className="shop-banner-title-text">
            Delivered to <span>your Home</span>
          </Text>
          <Text className="shop-banner-description-text">
            Fully prepared & delivered nationwide.
          </Text>
        </Content>
      </Content>
    </Content>
  );
};
