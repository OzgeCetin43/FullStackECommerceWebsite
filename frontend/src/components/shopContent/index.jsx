import { useState } from "react";
import {
  Layout,
  Select,
  Typography,
  Row,
  Col,
  Pagination,
  Divider,
  Button,
} from "antd";
import { IoMenu } from "react-icons/io5";
import { FiGrid } from "react-icons/fi";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { TbGrid4X4 } from "react-icons/tb";

import banner from "../../assets/shop-content-banner.jpg";
import product1 from "../../assets/listing-product-1.webp";
import product2 from "../../assets/listing-product-2.webp";
import product3 from "../../assets/listing-product-3.webp";
import product4 from "../../assets/listing-product-4.webp";
import product5 from "../../assets/listing-product-5.webp";
import product6 from "../../assets/listing-product-6.webp";
import product7 from "../../assets/listing-product-7.webp";
import product8 from "../../assets/listing-product-8.webp";
import shopBanner1 from "../../assets/shop-banner-1.png";
import shopBanner2 from "../../assets/shop-banner-2.png";
import shopBanner3 from "../../assets/shop-banner-3.png";

import { ShopListingCard } from "../shopListingCard";
import { FooterMenu } from "../footerMenu";

import "./shop-content.css";

const { Content } = Layout;
const { Text } = Typography;

const listingData = [
  {
    id: 1,
    percentage: 23,
    image: product1,
    name: "All Natural Italian-Style Chicken Meatballs",
    rate: 4,
    label: "Recommended",
    oldPrice: 9.35,
    newPrice: 7.25,
    brand: "Welch's",
    sku: "ZU49VOR",
    description:
      "These all-natural Italian-style chicken meatballs are made from high-quality ground chicken, seasoned with a blend of traditional Italian herbs and spices. They offer a delicious and healthy alternative to traditional beef or pork meatballs, perfect for various dishes like pasta, subs, or as an appetizer.",
    info: [
      "Calories: Approximately 150",
      "Protein: 20g",
      "Fat: 7g",
      "Carbohydrates: 2g",
      "Sodium: 300mg",
    ],
    infoDetail:
      "Contains chicken and may contain traces of dairy. Check for specific allergens based on production methods. If you're looking for something specific or have questions about the product, let me know!",
    category: "Meats & Seafood",
  },
  {
    id: 2,
    percentage: 24,
    image: product2,
    name: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    rate: 3,
    oldPrice: 4.29,
    newPrice: 3.29,
    brand: "Frito Lay, Oreo, Welch's",
    sku: "BE4CURT",
    description:
      "Angie's Boomchickapop Sweet & Salty Kettle Corn is a delightful snack that combines the perfect balance of sweet and salty flavors. Made from non-GMO popcorn, this kettle corn is air-popped and lightly coated in a blend of sugar and sea salt for a delicious treat that’s perfect for any occasion.",
    info: [
      "Calories: Approximately 130",
      "Total Fat: 6g",
      "Saturated Fat: 0.5g",
      "Sodium: 90mg",
      "Total Carbohydrates: 18g",
      "Sugars: 6g",
      "Protein: 2g",
    ],
    infoDetail:
      "Contains popcorn. Made in a facility that processes other products, so check packaging for specific allergen information. If you need more specific details or have questions, feel free to ask!",
    category: "Biscuits & Snacks",
  },
  {
    id: 3,
    percentage: 19,
    image: product3,
    name: "Field Roast Chao Cheese Creamy Original",
    rate: 5,
    label: "Organic",
    oldPrice: 24.0,
    newPrice: 19.5,
    sku: "F95MK",
    description:
      "Field Roast Chao Cheese Creamy Original is a dairy-free cheese alternative made from a base of coconut oil and fermented tofu. It offers a rich, creamy texture and a mild, savory flavor, making it an excellent addition to various dishes, from sandwiches to pasta and pizzas.",
    info: [
      "Calories: Approximately 90",
      "Total Fat: 8g",
      "Saturated Fat: 7g",
      "Sodium: 150mg",
      "Total Carbohydrates: 3g",
      "Protein: 1g",
    ],
    infoDetail:
      "Contains soy (from tofu) and coconut. Check packaging for specific allergen information.",
    category: "Grocery & Staples",
  },
  {
    id: 4,
    image: product4,
    name: "Foster Farms Takeout Crispy Classic Buffalo Wings",
    rate: 5,
    minPrice: 7.25,
    maxPrice: 49.99,
    sku: "DTL124",
    description:
      "Foster Farms Takeout Crispy Classic Buffalo Wings are deliciously seasoned chicken wings that deliver bold Buffalo flavor with a crispy texture. Perfect for game days, parties, or casual meals, these wings are pre-cooked and can be easily heated for a quick and satisfying dish.",
    info: [
      "Calories: Approximately 240",
      "Total Fat: 15g",
      "Saturated Fat: 4g",
      "Sodium: 680mg",
      "Total Carbohydrates: 9g",
      "Protein: 16g",
    ],
    infoDetail:
      "Contains chicken and may include allergens like wheat and soy. Always check the packaging for specific allergen details. If you have any other questions or need more information, just let me know!",
    category: "Meats & Seafood",
  },
  {
    id: 5,
    percentage: 10,
    image: product5,
    name: "Blue Diamond Almonds Lightly Salted",
    rate: 2,
    label: "Organic",
    oldPrice: 11.68,
    newPrice: 10.58,
    brand: "Oreo, Quaker, Welch's",
    sku: "UCB59",
    description:
      "Blue Diamond Almonds Lightly Salted are premium, roasted almonds sprinkled with just the right amount of sea salt. These nuts offer a satisfying crunch and a delicious balance of nutty flavor and subtle saltiness, making them an ideal snack for any time of day.",
    info: [
      "Calories: Approximately 160",
      "Total Fat: 14g",
      "Saturated Fat: 1g",
      "Sodium: 115mg",
      "Total Carbohydrates: 6g",
      "Dietary Fiber: 3g",
      "Protein: 6g",
    ],
    infoDetail:
      "Contains almonds. Processed in a facility that may handle other nuts and allergens. Check packaging for specific allergen details. If you need more specific information or have additional questions, feel free to ask!",
    category: "Grocery & Staples",
  },
  {
    id: 6,
    percentage: 12,
    image: product6,
    name: "Blueberries – 1 Pint Package",
    rate: 4,
    oldPrice: 4.49,
    newPrice: 3.99,
    brand: "Quaker",
    sku: "IKSA764",
    description:
      "Fresh blueberries in a 1-pint package are a delicious and nutritious fruit option. These small, round berries are known for their vibrant blue color, sweet-tart flavor, and numerous health benefits, making them a popular choice for snacking, baking, or adding to various dishes.",
    info: [
      "Calories: Approximately 84",
      "Total Fat: 0.5g",
      "Sodium: 1mg",
      "Total Carbohydrates: 21g",
      "Sugars: 15g",
      "Protein: 1g",
    ],
    infoDetail:
      "Typically allergen-free, but always check for potential cross-contamination depending on the supplier. If you have specific questions or need more information, feel free to ask!",
    category: "Breakfast & Dairy",
  },
  {
    id: 7,
    percentage: 29,
    image: product7,
    name: "Fresh Organic Broccoli Crowns (1kg)",
    rate: 3,
    label: "Organic",
    oldPrice: 6.77,
    newPrice: 4.85,
    sku: "ERE398",
    description:
      "Fresh Organic Broccoli Crowns are the flowering tops of the broccoli plant, known for their vibrant green color and nutrient-rich profile. These crowns are harvested at peak freshness and are a versatile vegetable that can be enjoyed raw, steamed, roasted, or added to various dishes.",
    info: [
      "Calories: Approximately 31",
      "Total Fat: 0.4g",
      "Sodium: 64mg",
      "Total Carbohydrates: 6g",
      "Dietary Fiber: 2.4g",
      "Sugars: 1.5g",
      "Protein: 2.5g",
    ],
    infoDetail:
      "Generally allergen-free. Always check for cross-contamination based on handling practices. If you have specific questions or need more information, feel free to ask!",
    category: "Fruits & Vegetables",
  },
  {
    id: 8,
    percentage: 199,
    image: product8,
    name: "Chobani Complete Vanilla Greek Yogurt (1kg)",
    rate: 5,
    label: "Recommended",
    oldPrice: 5.49,
    newPrice: 4.49,
    sku: "ML76AP",
    description:
      "Chobani Complete Vanilla Greek Yogurt is a creamy, rich yogurt made from high-quality ingredients, perfect for those looking for a nutritious snack or a versatile ingredient in various recipes. It’s packed with protein and features a delightful vanilla flavor, making it a delicious choice for breakfast or as a snack.",
    info: [
      "Calories: Approximately 130",
      "Total Fat: 4g",
      "Saturated Fat: 2.5g",
      "Protein: 20g",
      "Total Carbohydrates: 12g",
      "Sodium: 500mg",
      "Sugars: 5g (includes naturally occurring sugars)",
    ],
    infoDetail:
      "Contains milk. Check packaging for specific allergen details. If you have more questions or need additional information, feel free to ask!",
    category: "Breakfast & Dairy",
  },
];

export const ShopContent = () => {
  const [gridView, setGridView] = useState("four");

  return (
    <Content className="shop-main-content">
      <Content className="shop-content">
        <Content className="shop-banner-content">
          <img src={banner} alt="banner" />
          <Content className="shop-banner-info-content">
            <Text className="shop-banner-subtitle-text">
              Organic Meals Prepared
            </Text>
            <Text className="shop-banner-title-text">
              Delivered to <span>your Home</span>
            </Text>
            <Text className="shop-banner-description-text">
              Fully prepared & delivered nationwide.
            </Text>
          </Content>
        </Content>
        <Content className="shop-listing-content">
          <Content className="shop-listing-header-content">
            <Content className="shop-listing-grid-category-content">
              <IoMenu
                onClick={() => setGridView("one")}
                className={gridView === "one" ? "active-grid-view" : ""}
              />
              <FiGrid
                onClick={() => setGridView("two")}
                className={gridView === "two" ? "active-grid-view" : ""}
              />
              <BsGrid3X3GapFill
                onClick={() => setGridView("three")}
                className={gridView === "three" ? "active-grid-view" : ""}
              />
              <TbGrid4X4
                onClick={() => setGridView("four")}
                className={gridView === "four" ? "active-grid-view" : ""}
              />
            </Content>
            <Content className="shop-listing-show-by-content">
              <Text className="shop-listing-show-text">Show:</Text>
              <Select
                options={[
                  { label: 12, value: 12 },
                  { label: 24, value: 24 },
                  { label: 36, value: 36 },
                  { label: 48, value: 48 },
                ]}
                defaultValue={12}
                className="shop-listing-show-by-select"
              />
            </Content>
          </Content>
        </Content>
        {gridView === "four"
          ? Array.from(
              { length: Math.round(listingData.length / 4) },
              (_, i) => i
            ).map((i) => (
              <Row gutter={[0, 0]} key={i}>
                {listingData.slice(i * 4, (i + 1) * 4).map((item) => (
                  <Col span={6} key={item.name}>
                    <ShopListingCard item={item} />
                  </Col>
                ))}
              </Row>
            ))
          : gridView === "three"
            ? Array.from(
                { length: Math.round(listingData.length / 3) },
                (_, i) => i
              ).map((i) => (
                <Row gutter={[0, 0]} key={i}>
                  {listingData.slice(i * 3, (i + 1) * 3).map((item) => (
                    <Col span={8} key={item.name}>
                      <ShopListingCard item={item} />
                    </Col>
                  ))}
                </Row>
              ))
            : gridView === "two"
              ? Array.from(
                  { length: Math.round(listingData.length / 2) },
                  (_, i) => i
                ).map((i) => (
                  <Row gutter={[0, 0]} key={i}>
                    {listingData.slice(i * 2, (i + 1) * 2).map((item) => (
                      <Col span={12} key={item.name}>
                        <ShopListingCard item={item} className={gridView} />
                      </Col>
                    ))}
                  </Row>
                ))
              : listingData.map((item) => (
                  <Row gutter={[0, 0]} key={item.id}>
                    <Col span={24}>
                      <ShopListingCard item={item} className={gridView} />
                    </Col>
                  </Row>
                ))}
      </Content>
      <Pagination
        align="center"
        defaultCurrent={1}
        total={50}
        className="shop-listing-pagination"
      />
      <Content className="shop-bottom-banner-content">
        <Content className="shop-banner-item-content">
          <Text className="shop-bottom-banner-text">
            Everyday Fresh & Clean with Our Products
          </Text>
          <Button className="shop-banner-shop-now-button">Shop Now</Button>
          <img src={shopBanner1} alt="shop banner" />
        </Content>
        <Content className="shop-banner-item-content">
          <Text className="shop-bottom-banner-text">
            Make your Breakfast Healthy and Easy
          </Text>
          <Button className="shop-banner-shop-now-button">Shop Now</Button>
          <img src={shopBanner2} alt="shop banner" />
        </Content>
        <Content className="shop-banner-item-content">
          <Text className="shop-bottom-banner-text">
            The best Organic Products Online
          </Text>
          <Button className="shop-banner-shop-now-button">Shop Now</Button>
          <img src={shopBanner3} alt="shop banner" />
        </Content>
      </Content>
      <Divider />
      <FooterMenu />
    </Content>
  );
};
