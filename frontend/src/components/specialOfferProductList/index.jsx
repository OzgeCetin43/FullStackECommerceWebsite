import {
  Button,
  Card,
  Col,
  Layout,
  Progress,
  Rate,
  Row,
  Typography,
} from "antd";
import { LuExpand } from "react-icons/lu";
import { FaHeart } from "react-icons/fa6";

import product1 from "../../assets/special-offer-product-1.webp";
import product2 from "../../assets/special-offer-product-2.webp";
import product3 from "../../assets/special-offer-product-3.webp";
import product4 from "../../assets/special-offer-product-4.webp";
import product5 from "../../assets/special-offer-product-5.webp";

import "./special-offer-product-list.css";

const { Content } = Layout;
const { Text } = Typography;

const productList = [
  {
    id: 1,
    image: product1,
    oldPrice: 24.0,
    newPrice: 19.5,
    name: "Field Roast Chao Cheese Creamy Original",
    rate: 4,
    availableStock: 66,
    percentage: 19,
    label: "Organic",
  },
  {
    id: 2,
    image: product2,
    oldPrice: 5.49,
    newPrice: 4.49,
    name: "Chobani Complete Vanilla Greek Yogurt (1kg)",
    rate: 3,
    availableStock: 46,
    percentage: 19,
    label: "Recommended",
  },
  {
    id: 3,
    image: product3,
    oldPrice: 32.49,
    newPrice: 27.49,
    name: "Encore Seafoods Stuffed Alaskan Salmon",
    rate: 5,
    availableStock: 32,
    percentage: 16,
  },
  {
    id: 4,
    image: product4,
    oldPrice: 6.48,
    newPrice: 3.48,
    name: "Haagen-Dazs Caramel Cone Ice Cream",
    rate: 2,
    availableStock: 27,
    percentage: 47,
  },
  {
    id: 5,
    image: product5,
    oldPrice: 13.99,
    newPrice: 11.99,
    name: "Nestle Original Coffee-Mate Coffee Creamer",
    rate: 3,
    availableStock: 58,
    percentage: 15,
  },
];

export const SpecialOfferProductList = () => {
  return (
    <Content className="product-list-content">
      <Row gutter={[0, 0]} className="product-list-row">
        {productList.map((item) => (
          <Col span={4} key={item.id} className="product-list-column">
            <Card className="product-list-card">
              <Text className="product-list-percentage-text">
                {item.percentage}%
              </Text>
              {item?.label && (
                <Text
                  className={`product-list-label-text ${item?.label === "Organic" ? "organic-label" : "recommended-label"}`}
                >
                  {item?.label}
                </Text>
              )}
              <Content className="product-list-action-content">
                <Button className="product-list-action-button">
                  <LuExpand />
                </Button>
                <Button className="product-list-action-button">
                  <FaHeart />
                </Button>
              </Content>
              <img src={item.image} alt={item.name} />
              <Content className="product-list-price-content">
                <Text className="product-list-old-price">
                  ${item.oldPrice.toFixed(2)}
                </Text>
                <Text className="product-list-new-price">
                  ${item.newPrice.toFixed(2)}
                </Text>
              </Content>
              <Text className="product-list-name">{item.name}</Text>
              <Text className="product-list-in-stock-text">In Stock</Text>
              <Content className="product-list-rate-content">
                <Rate disabled defaultValue={item.rate} />
                <Text className="product-list-rate-text">({item.rate})</Text>
              </Content>
              <Content className="product-list-progress-content">
                <Progress percent={item.availableStock} showInfo={false} />
                <Text className="product-list-available-stock-text">
                  the available products : <span>{item.availableStock}</span>
                </Text>
              </Content>
              <Button className="product-list-add-cart-button">
                Add to Cart
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </Content>
  );
};
