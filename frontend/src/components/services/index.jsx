import { Layout, List, Divider, Typography } from "antd";
import { LuMilk, LuBadgePercent } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { CiBadgeDollar } from "react-icons/ci";

import "./services.css";

const { Content } = Layout;
const { Text } = Typography;

const dataSource = [
  {
    id: 1,
    icon: LuMilk,
    text: "Everyday fresh products",
  },
  {
    id: 2,
    icon: TbTruckDelivery,
    text: "Free delivery for order over $70",
  },
  {
    id: 3,
    icon: LuBadgePercent,
    text: "Daily Mega Discounts",
  },
  {
    id: 4,
    icon: CiBadgeDollar,
    text: "Best price on the market",
  },
];

export const Services = () => {
  return (
    <Content className="services-content">
      <List
        itemLayout="horizontal"
        grid={{ gutter: 16 }}
        dataSource={dataSource}
        renderItem={(item, index) => {
          const Icon = item.icon;
          return (
            <List.Item className="services-list-item">
              <Icon />
              <Text className="services-list-item-text">{item.text}</Text>
              {index < dataSource.length - 1 && (
                <Divider
                  type="vertical"
                  className="services-list-item-divider"
                />
              )}
            </List.Item>
          );
        }}
        className="services-list"
      />
      <Divider className="services-main-divider" />
    </Content>
  );
};
