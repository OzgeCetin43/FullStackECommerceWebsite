import { Layout, Typography } from "antd";

import "./main-footer.css";

const { Footer } = Layout;
const { Text } = Typography;

export const MainFooter = () => {
  return (
    <Footer className="main-footer">
      <Text className="footer-copyright-text">
        &copy; Copyright {new Date().getFullYear()}
      </Text>
    </Footer>
  );
};
