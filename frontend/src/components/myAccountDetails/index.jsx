import { Layout, Typography, Form, Row, Col, Input, Button } from "antd";

import "./my-account-details.css";

const { Content } = Layout;
const { Text } = Typography;

export const MyAccountDetails = () => {
  return (
    <Content className="my-account-details-content">
      <Text className="my-account-details-title-text">Account Details</Text>
      <Form
        layout="vertical"
        name="my-account-details-form"
        className="my-account-details-form"
        autoComplete="off"
      >
        <Row gutter={[12, 12]}>
          <Col span={12}>
            <Form.Item
              label="First Name"
              name="firstName"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[12, 12]}>
          <Col span={12}>
            <Form.Item
              label="Display Name"
              name="displayName"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Email Address"
              name="emailAddress"
              rules={[{ required: true }]}
            >
              <Input type="email" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[12, 12]}>
          <Col span={8}>
            <Form.Item
              label="Current Password"
              name="currentPassword"
              rules={[{ required: true }]}
            >
              <Input type="password" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="New Password"
              name="newPassword"
              rules={[{ required: true }]}
            >
              <Input type="password" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              rules={[{ required: true }]}
            >
              <Input type="password" />
            </Form.Item>
          </Col>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="my-account-details-button"
            >
              Save Changes
            </Button>
          </Form.Item>
        </Row>
      </Form>
    </Content>
  );
};
