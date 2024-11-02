import { Layout, Card, Typography, Rate, Button } from "antd";

import "./shop-listing-card.css";

const { Content } = Layout;
const { Text } = Typography;

export const ShopListingCard = ({ item, className }) => {
  return (
    <Card className={`shop-listing-card ${className}`}>
      <Content className="shop-listing-card-content">
        {item?.percentage && (
          <Text className="shop-listing-percentage-text">
            {item?.percentage}%
          </Text>
        )}
        {item?.label && (
          <Text
            className={`shop-listing-label-text ${item?.label === "Organic" ? "organic-label" : "recommended-label"}`}
          >
            {item?.label}
          </Text>
        )}
        <img src={item.image} alt="" />
      </Content>
      <Content className="shop-listing-card-content">
        <Text className="shop-listing-product-name-text">{item.name}</Text>
        <Text className="shop-listing-in-stock-text">In Stock</Text>
        <Rate disabled defaultValue={item.rate} className="shop-listing-rate" />
        <Content className="shop-listing-price-content">
          {item?.oldPrice && (
            <Text className="shop-listing-old-price">${item?.oldPrice}</Text>
          )}
          {item?.newPrice && (
            <Text className="shop-listing-new-price">${item?.newPrice}</Text>
          )}
          {item?.minPrice && item?.maxPrice && (
            <Text className="shop-listing-price-range">
              ${item?.minPrice} - ${item?.maxPrice}
            </Text>
          )}
        </Content>
        <Button className="shop-listing-add-to-cart-button">Add to Cart</Button>
      </Content>
    </Card>
  );
};
