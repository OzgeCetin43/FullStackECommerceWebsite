import { useState } from "react";
import { Modal, Rate, Layout, Typography, Divider, Button } from "antd";

import "./product-modal.css";

const { Content } = Layout;
const { Text } = Typography;

function generateRandomSKU(length = 5) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

export const ProductModal = ({ activeProduct, ...rest }) => {
  const [count, setCount] = useState(1);

  const incrementCountHandler = () => setCount((prev) => prev + 1);

  const decrementCountHandler = () => setCount((prev) => prev - 1);

  return (
    <Modal title={activeProduct.name} {...rest} width={1000}>
      <Content className="product-detail-header-content">
        <Content className="product-detail-header-left-content">
          <Rate disabled defaultValue={activeProduct.rate} />
          <Text className="product-modal-rate">
            {Math.floor(Math.random() * 1000)} Reviews
          </Text>
        </Content>
        <Content type="vertical" className="product-modal-content" />
        <Content className="product-detail-header-right-content">
          <Text className="product-detail-sku-text">
            SKU: <span>{generateRandomSKU()}</span>
          </Text>
        </Content>
      </Content>
      <Divider className="product-modal-main-divider" />
      <Content className="product-detail-body-content">
        <Content className="product-detail-body-left-content">
          <Text className="product-detail-percentage-text">
            {activeProduct.percentage}%
          </Text>
          {activeProduct?.label && (
            <Text
              className={`product-list-label-text ${activeProduct?.label === "Organic" ? "organic-label" : "recommended-label"}`}
            >
              {activeProduct.label}
            </Text>
          )}
          <img src={activeProduct.image} alt={activeProduct.name} />
        </Content>
        <Content className="product-detail-body-right-content">
          <Content className="product-detail-price-content">
            <Text className="product-old-price-text">
              ${activeProduct.oldPrice.toFixed(2)}
            </Text>
            <Text className="product-new-price-text">
              ${activeProduct.newPrice.toFixed(2)}
            </Text>
          </Content>
          <Text className="product-in-stock-text">In Stock</Text>
          <Text className="product-detail-text">
            Our <span>{activeProduct.name}</span> are a nutrient powerhouse,
            packed with fiber, protein, and omega-3 fatty acids. These tiny
            seeds are perfect for adding to smoothies, yogurt, or oatmeal,
            providing a delightful crunch and a health boost. Grown sustainably,
            our chia seeds are free from pesticides and GMOs, making them a
            wholesome choice for your pantry.
          </Text>
          <Content className="product-add-to-cart-counter-content">
            <Button
              className="product-add-to-cart-counter-button"
              onClick={decrementCountHandler}
            >
              -
            </Button>
            <Text>{count}</Text>
            <Button
              className="product-add-to-cart-counter-button"
              onClick={incrementCountHandler}
            >
              +
            </Button>
            <Button className="product-add-to-cart-button">Add to Cart</Button>
          </Content>
        </Content>
      </Content>
    </Modal>
  );
};
