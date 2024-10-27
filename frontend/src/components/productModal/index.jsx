import { useState } from "react";
import { Modal, Rate, Layout, Typography, Divider, Button } from "antd";

import "./product-modal.css";

const { Content } = Layout;
const { Text } = Typography;

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
            {activeProduct.reviewerCount} Reviews
          </Text>
        </Content>
        <Divider type="vertical" className="product-modal-divider" />
        <Content className="product-detail-header-right-content">
          <Text className="product-detail-sku-text">
            SKU: <span>{activeProduct.sku}</span>
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
          <Text className="product-detail-text">{activeProduct.text}</Text>
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
          <Divider className="product-modal-main-divider" />
          <Text className="product-category-text">
            Category: <span>{activeProduct.category}</span>
          </Text>
        </Content>
      </Content>
    </Modal>
  );
};
