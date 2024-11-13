import { Layout, Typography, Card } from "antd";

import "./my-account-address.css";

const { Content } = Layout;
const { Text } = Typography;

export const MyAccountAddress = () => {
  return (
    <Content className="my-account-address-content">
      <Card className="my-account-address-billing-card">
        <Text className="my-account-address-billing-title-text">
          Billing Address
        </Text>
        <Text className="my-account-address-billing-description-text">
          3522 Interstate 75 Business Spur, Sault Ste. Marie, MI 49783
        </Text>
        <Text className="my-account-address-billing-city-text">New York</Text>
      </Card>
      <Card className="my-account-address-shipping-card">
        <Text className="my-account-address-shipping-title-text">
          Shipping Address
        </Text>
        <Text className="my-account-address-shipping-description-text">
          4299 Express Lane Sarasota, FL 34249 USA
        </Text>
        <Text className="my-account-address-shipping-city-text">Sarasota</Text>
        <Text className="my-account-address-shipping-phone-text">
          Phone: <b>+90 123 456 78 90</b>
        </Text>
      </Card>
    </Content>
  );
};
