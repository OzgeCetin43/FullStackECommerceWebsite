import { Layout, Form, Input, Checkbox, Button, Typography } from "antd";
import { Link } from "react-router-dom";

import banner from "../../assets/login-banner.png";

import "./login.css";

const { Content } = Layout;
const { Text } = Typography;

function generateSecurityCode(length = 4) {
  const characters = "0123456789";
  let code = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters[randomIndex];
  }

  return code;
}

export const Login = () => {
  return (
    <Content className="login-container">
      <Content className="login-left-content">
        <img src={banner} alt="login banner" />
      </Content>
      <Content className="login-right-content">
        <Text className="login-text">Login</Text>
        <Text className="login-create-account-text">
          Don't have an account?
          <Link to="/register">Create here</Link>
        </Text>
        <Form
          className="login-form"
          name="login-form"
          layout="vertical"
          autoComplete="off"
        >
          <Form.Item
            label="User Name or Email"
            name="usernameOrEmail"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true }]}
          >
            <Input type="password" />
          </Form.Item>
          <Content className="security-code-content">
            <Form.Item
              label="Security Code"
              name="securityCode"
              rules={[{ required: true }]}
              className="security-code-form-item"
            >
              <Input />
            </Form.Item>
            <Content className="security-code-area">
              {generateSecurityCode()}
            </Content>
          </Content>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Content>
    </Content>
  );
};
