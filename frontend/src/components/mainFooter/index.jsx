import { Layout, Typography } from "antd";

import payment from "../../assets/payment.png";

import "./main-footer.css";

const { Footer } = Layout;
const { Text } = Typography;

export const MainFooter = () => {
  return (
    <Footer className="main-footer">
      <Text>&copy; Copyright {new Date().getFullYear()}</Text>
      <img src={payment} alt="payment" />
    </Footer>
  );
};
