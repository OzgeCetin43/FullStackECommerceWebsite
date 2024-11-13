import { Layout, Typography, Form, Input, Button } from "antd";

import "./my-account-track-order.css";

const { Content } = Layout;
const { Text } = Typography;

export const MyAccountTrackOrder = () => {
  return (
    <Content className="my-account-track-order-content">
      <Text className="my-account-track-order-title-text">Orders Tracking</Text>
      <Text className="my-account-track-order-description-text">
        To track your order please enter your Order ID in the box below and
        press "Track" button. This was given to you on your receipt and in the
        confirmation email you should have received.
      </Text>
      <Form
        layout="vertical"
        name="my-account-track-order-form"
        className="my-account-track-order-form"
        autoComplete="off"
      >
        <Form.Item label="Order ID" name="orderId" rules={[{ required: true }]}>
          <Input placeholder="Found in your order confirmation email" />
        </Form.Item>
        <Form.Item
          label="Billing Email"
          name="billingEmail"
          rules={[{ required: true }]}
        >
          <Input placeholder="Email you used during checkout" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" className="my-account-track-order-button">
            Track
          </Button>
        </Form.Item>
      </Form>
    </Content>
  );
};
