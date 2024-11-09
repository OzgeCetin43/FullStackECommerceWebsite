import { Layout, Typography, Card } from "antd";

import "./sales-analytics.css";
import { SalesAnalyticsRetail } from "../../components";

const { Content } = Layout;
const { Text } = Typography;

export const SalesAnalytics = () => {
  const today = new Date();
  return (
    <Content className="sales-analytics-container">
      <Content className="sales-analytics-title-content">
        <Text className="sales-analytics-title-text">Sales Analytics</Text>
        <Text className="sales-analytics-today-text">
          {today.toDateString()}, {today.toLocaleTimeString()}
        </Text>
      </Content>
      <SalesAnalyticsRetail />
    </Content>
  );
};
