import { useState } from "react";
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
import productDetail1 from "../../assets/special-offer-product-3-detail-1.webp";
import productDetail2 from "../../assets/special-offer-product-4-detail-1.webp";
import productDetail3 from "../../assets/special-offer-product-4-detail-2.webp";
import productDetail4 from "../../assets/special-offer-product-5-detail-1.webp";
import productDetail5 from "../../assets/special-offer-product-5-detail-2.webp";

import { ProductModal } from "../productModal";

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
    text: "Indulge in the creamy, delicious flavor of Field Roast Chao Cheese Creamy Original. This dairy-free cheese is made from a blend of coconut oil and fermented tofu, offering a rich and satisfying taste that melts beautifully. Perfect for sandwiches, burgers, or as a topping for your favorite dishes, Chao Cheese is a versatile alternative for cheese lovers and those seeking plant-based options. Enjoy a guilt-free indulgence that’s rich in flavor without compromising your dietary choices.",
    reviewerCount: 968,
    sku: "F95MK",
    category: "Grocery & Staples",
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
    text: "Enjoy the rich and creamy taste of Chobani Complete Vanilla Greek Yogurt. Made with high-quality ingredients and no added sugars, this yogurt is packed with 20 grams of protein per serving, making it an excellent choice for a nutritious snack or breakfast. The delightful vanilla flavor enhances your favorite recipes, whether you’re blending it into smoothies, dolloping it on pancakes, or enjoying it straight from the tub. With probiotics for digestive health, this yogurt supports your wellness journey.",
    reviewerCount: 736,
    sku: "ML76AP",
    category: "Breakfast & Dairy",
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
    text: "Indulge in the gourmet flavor of Encore Seafoods Stuffed Alaskan Salmon. This premium salmon fillet is carefully stuffed with a delightful blend of crab meat, herbs, and spices, creating a savory dish that’s perfect for any occasion. Sourced from the pristine waters of Alaska, our salmon is rich in omega-3 fatty acids and delivers a buttery texture that melts in your mouth. Ideal for a quick weeknight dinner or an impressive dish for guests, simply bake or grill for a restaurant-quality experience at home.",
    reviewerCount: 120,
    sku: "A9UKLA7",
    category: "Meats & Seafood",
    detailImages: [{ id: 6, image: productDetail1 }],
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
    text: "Savor the rich and indulgent flavor of Haagen-Dazs Caramel Cone Ice Cream. This luxurious ice cream is crafted with the finest ingredients, featuring a creamy caramel base swirled with crunchy bits of cone and ribbons of delectable caramel sauce. Each spoonful offers a delightful mix of textures and flavors, making it the perfect treat for any occasion. Whether enjoyed on its own or as a topping for desserts, this ice cream is a true celebration of taste.",
    reviewerCount: 229,
    sku: "UKSA79",
    category: "Frozen Foods",
    detailImages: [
      { id: 7, image: productDetail2 },
      { id: 8, image: productDetail3 },
    ],
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
    text: "Enhance your morning coffee experience with Nestle Original Coffee-Mate Coffee Creamer. This non-dairy creamer is crafted to deliver a rich and creamy taste that perfectly complements your favorite coffee. With a smooth texture and a hint of sweetness, it transforms your cup into a delightful treat without the need for milk or cream. Ideal for those who prefer a lactose-free option, Coffee-Mate Original adds that perfect touch of indulgence to your daily brew.",
    reviewerCount: 975,
    sku: "SOBFA7",
    category: "Breakfast & Dairy",
    detailImages: [
      { id: 9, image: productDetail4 },
      { id: 10, image: productDetail5 },
    ],
  },
];

export const SpecialOfferProductList = () => {
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState();

  const modalOkHandler = () => setIsProductModalOpen(false);

  const modalCancelHandler = () => setIsProductModalOpen(false);

  const showProductDetailHandler = (item) => {
    setIsProductModalOpen(true);
    setActiveProduct(item);
  };

  return (
    <>
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
                  <Button
                    className="product-list-action-button"
                    onClick={() => showProductDetailHandler(item)}
                  >
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
      {isProductModalOpen && (
        <ProductModal
          open={isProductModalOpen}
          onOk={modalOkHandler}
          onCancel={modalCancelHandler}
          activeProduct={activeProduct}
        />
      )}
    </>
  );
};
