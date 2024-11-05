import {
  Layout,
  Form,
  Input,
  Checkbox,
  Button,
  Typography,
  Radio,
  Space,
} from "antd";
import { Link } from "react-router-dom";

import banner from "../../assets/login-banner.png";

import "./register.css";

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

export const Register = () => {
  return (
    <Content className="register-container">
      <Content className="register-left-content">
        <img src={banner} alt="register banner" />
      </Content>
      <Content className="register-right-content">
        <Text className="register-text">Create an Account</Text>
        <Text className="register-login-text">
          Already have an account?
          <Link to="/login">Login</Link>
        </Text>
        <Form
          className="register-form"
          name="register-form"
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
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
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
          <Form.Item name="userType">
            <Radio.Group defaultValue="customer">
              <Space direction="vertical">
                <Radio value="customer">I am a customer</Radio>
                <Radio value="vendor">I am a vendor</Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="termsAndPolicy" valuePropName="checked">
            <Checkbox>I agree to Terms & Policy.</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
        <Text className="register-note-text">
          <b>Note: </b> Your personal data will be used to support your
          experience throughout this website, to manage access to your account,
          and for other purposes described in our privacy policy
        </Text>
      </Content>
    </Content>
  );
};
