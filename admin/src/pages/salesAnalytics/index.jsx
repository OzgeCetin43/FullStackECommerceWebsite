import { Layout, Typography } from "antd";

import "./sales-analytics.css";

const { Content } = Layout;
const { Text } = Typography;

export const SalesAnalytics = () => {
  return (
    <Content className="sales-analytics-container">
      <Text>Sales Analytics</Text>
    </Content>
  );
};
