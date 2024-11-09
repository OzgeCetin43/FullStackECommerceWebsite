import { Layout, Typography } from "antd";
import { IoDiamond } from "react-icons/io5";
import { GiExpense } from "react-icons/gi";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

import logo from "../../assets/logo-full.webp";
import totalBalanceBanner from "../../assets/total-balance-banner.webp";

import "./sales-analytics-retail.css";

const { Content } = Layout;
const { Text } = Typography;

const retailData = [
  {
    id: 1,
    icon: <IoDiamond />,
    color: "#00BA9D",
    price: 15.412,
    type: "Income",
    rate: 45.21,
  },
  {
    id: 2,
    icon: <GiExpense />,
    color: "#FF5470",
    price: 53.487,
    type: "Expense",
    rate: -12,
  },
  {
    id: 3,
    icon: <MdOutlineZoomOutMap />,
    color: "#035ECF",
    count: 5.412,
    type: "New Orders",
    rate: 14.36,
  },
];

export const SalesAnalyticsRetail = () => {
  return (
    <Content className="sales-analytics-retail-content">
      <Content className="sales-analytics-retail-left-content">
        <img src={logo} alt="logo" />
        <Content className="sales-analytics-retail-detail-info">
          <Text className="sales-analytics-brand-text">Bacola - Retail</Text>
          <Text className="sales-analytics-description-text">
            At Bacola, we believe shopping should be effortless, enjoyable, and
            affordable. Whether you're looking for the latest gadgets, trendy
            fashion, home essentials, or beauty products, we've got you covered
            with our wide selection of high-quality items, all available at
            unbeatable prices.
          </Text>
          <Content className="sales-analytics-retail-items-content">
            <Text className="sales-analytics-average-rate-text">
              Average Rate {new Date().getFullYear()}
            </Text>
            {retailData.map((item) => (
              <Content
                key={item.id}
                className="sales-analytics-retail-item-content"
              >
                <Content
                  className="sales-analytics-retail-icon-content"
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </Content>
                <Content className="sales-analytics-retail-item-info-content">
                  <Text className="sales-analytics-retail-price-text">
                    {item?.price && "$"}
                    {item?.price || item?.count}
                  </Text>
                  <Text className="sales-analytics-retail-type-text">
                    {item.type}
                  </Text>
                  <Text
                    className={
                      item.rate > 0
                        ? "increase-rate-text"
                        : "decrease-rate-text"
                    }
                  >
                    {item.rate > 0 ? (
                      <TiArrowSortedUp />
                    ) : (
                      <TiArrowSortedDown />
                    )}
                    {item.rate > 0 && "+"}
                    {item.rate}%
                  </Text>
                </Content>
              </Content>
            ))}
          </Content>
        </Content>
      </Content>
      <Content className="sales-analytics-retail-right-content">
        <img src={totalBalanceBanner} alt="total balance banner" />
        <Text className="sales-analytics-total-balance-text">
          $476.3K Total Balance
        </Text>
      </Content>
    </Content>
  );
};
