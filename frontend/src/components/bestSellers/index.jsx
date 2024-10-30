import { Layout, Typography, Button, Row, Col, Card, Rate } from "antd";
import { FaLongArrowAltRight } from "react-icons/fa";

import product1 from "../../assets/best-seller-1.webp";
import product2 from "../../assets/best-seller-2.webp";
import product3 from "../../assets/best-seller-3.webp";
import product4 from "../../assets/best-seller-4.webp";
import product5 from "../../assets/best-seller-5.webp";
import product6 from "../../assets/best-seller-6.webp";
import product7 from "../../assets/best-seller-7.webp";
import product8 from "../../assets/best-seller-8.webp";
import banner from "../../assets/best-seller-banner.jpg";

import { BestSellersItem } from "../bestSellersItem";

import "./best-sellers.css";

const { Content } = Layout;
const { Text } = Typography;

const bestSellersData = [
  {
    id: 1,
    image: product1,
    name: "All Natural Italian-Style Chicken Meatballs",
    label: "Recommended",
    percentage: 23,
    rate: 4,
    oldPrice: 9.35,
    newPrice: 7.25,
    reviewerCount: 203,
  },
  {
    id: 2,
    image: product2,
    name: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    percentage: 24,
    rate: 3,
    oldPrice: 4.29,
    newPrice: 3.29,
    reviewerCount: 736,
  },
  {
    id: 3,
    image: product3,
    name: "Field Roast Chao Cheese Creamy Original",
    label: "Organic",
    percentage: 19,
    rate: 5,
    oldPrice: 24.0,
    newPrice: 19.5,
    reviewerCount: 892,
  },
  {
    id: 4,
    image: product4,
    name: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    rate: 5,
    minPrice: 7.25,
    maxPrice: 49.99,
    reviewerCount: 1056,
  },
  {
    id: 5,
    image: product5,
    name: "Blue Diamond Almonds Lightly Salted",
    label: "Organic",
    percentage: 10,
    rate: 3,
    oldPrice: 11.68,
    newPrice: 10.58,
    reviewerCount: 564,
  },
  {
    id: 6,
    image: product6,
    name: "Blueberries – 1 Pint Package",
    percentage: 12,
    rate: 3,
    oldPrice: 4.49,
    newPrice: 3.99,
    reviewerCount: 496,
  },
  {
    id: 7,
    image: product7,
    name: "Fresh Organic Broccoli Crowns (1kg)",
    label: "Organic",
    percentage: 29,
    rate: 4,
    oldPrice: 6.77,
    newPrice: 4.85,
    reviewerCount: 269,
  },
  {
    id: 8,
    image: product8,
    name: "Chobani Complete Vanilla Greek Yogurt (1kg)",
    label: "Recommended",
    percentage: 19,
    rate: 5,
    oldPrice: 5.49,
    newPrice: 4.49,
    reviewerCount: 791,
  },
];

export const BestSellers = () => {
  return (
    <Content className="best-sellers-content">
      <Content className="best-sellers-header-content">
        <Content className="best-sellers-header-left-content">
          <Text className="best-sellers-title">Best Sellers</Text>
          <Text className="best-sellers-description">
            Do not miss the current offers until the end of month.
          </Text>
        </Content>
        <Content className="best-sellers-header-right-content">
          <Button
            className="best-sellers-view-all-button"
            icon={<FaLongArrowAltRight />}
            iconPosition="end"
          >
            View All
          </Button>
        </Content>
      </Content>
      <Content className="best-sellers-body-content">
        <Row gutter={[0, 0]} className="best-sellers-main-row">
          <Col span={8}>
            <Row gutter={[0, 0]}>
              {bestSellersData.slice(0, 2).map((item) => (
                <Col span={12} key={item.id}>
                  <BestSellersItem item={item} />
                </Col>
              ))}
            </Row>
            <Row gutter={[0, 0]}>
              {bestSellersData.slice(2, 4).map((item) => (
                <Col span={12} key={item.id}>
                  <BestSellersItem item={item} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col span={8} className="best-sellers-banner-col">
            <img src={banner} alt="banner" className="best-sellers-banner" />
            <Content className="best-sellers-banner-info-content">
              <Text className="best-sellers-banner-subtitle-text">
                delicious
              </Text>
              <Text className="best-sellers-banner-title">
                The freshest of <span>all products</span>
              </Text>
              <Text className="best-sellers-banner-text">Just in Bacola</Text>
            </Content>
          </Col>
          <Col span={8}>
            <Row gutter={[0, 0]}>
              {bestSellersData.slice(4, 6).map((item) => (
                <Col span={12} key={item.id}>
                  <BestSellersItem item={item} />
                </Col>
              ))}
            </Row>
            <Row gutter={[0, 0]}>
              {bestSellersData.slice(6, 8).map((item) => (
                <Col span={12} key={item.id}>
                  <BestSellersItem item={item} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Content>
    </Content>
  );
};
