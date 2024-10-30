import { Card, Layout, Typography, Rate, Button } from "antd";

import "./best-sellers-item.css";

const { Content } = Layout;
const { Text } = Typography;

export const BestSellersItem = ({ item }) => {
  return (
    <Card className="best-sellers-card">
      {item?.percentage && (
        <Text className="best-sellers-percentage-text">
          {item?.percentage}%
        </Text>
      )}
      {item?.label && (
        <Text
          className={`best-sellers-label-text ${
            item?.label === "Organic" ? "organic-label" : "recommended-label"
          }`}
        >
          {item?.label}
        </Text>
      )}
      <img src={item.image} alt={item.name} />
      <Text className="best-sellers-name-text">{item.name}</Text>
      <Text className="best-sellers-in-stock-text">In Stock</Text>
      <Content className="best-sellers-rate-content">
        <Rate disabled defaultValue={item.rate} />
        <Text className="best-sellers-reviewer-count-text">
          ({item.reviewerCount})
        </Text>
      </Content>
      <Content className="best-sellers-price-content">
        {item?.oldPrice && (
          <Text className="best-sellers-old-price-text">
            ${item.oldPrice.toFixed(2)}
          </Text>
        )}
        {item?.newPrice && (
          <Text className="best-sellers-new-price-text">
            ${item.newPrice.toFixed(2)}
          </Text>
        )}
        {item?.minPrice && item?.maxPrice && (
          <Text className="best-sellers-price-range-text">
            ${item?.minPrice} - ${item?.maxPrice}
          </Text>
        )}
      </Content>
      <Button className="best-sellers-add-to-cart-button">Add to Cart</Button>
    </Card>
  );
};
