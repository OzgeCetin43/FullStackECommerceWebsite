import { Row, Col, Typography } from "antd";

import category1 from "../../assets/category-1.webp";
import category2 from "../../assets/category-2.webp";
import category3 from "../../assets/category-3.webp";
import category4 from "../../assets/category-4.webp";
import category5 from "../../assets/category-5.webp";
import category6 from "../../assets/category-6.webp";
import category7 from "../../assets/category-7.webp";
import category8 from "../../assets/category-8.webp";
import category9 from "../../assets/category-9.webp";

import "./categories.css";

const { Text } = Typography;

const categoryBigData = {
  id: 1,
  image: category1,
  name: "Beverages",
  count: 11,
};

const categorySmallData = [
  {
    id: 2,
    image: category2,
    name: "Biscuits & Snacks",
    count: 6,
  },
  {
    id: 3,
    image: category3,
    name: "Breads & Bakery",
    count: 6,
  },
  {
    id: 4,
    image: category4,
    name: "Breakfast & Dairy",
    count: 8,
  },
  {
    id: 5,
    image: category5,
    name: "Frozen Foods",
    count: 7,
  },
  {
    id: 6,
    image: category6,
    name: "Fruits & Vegetables",
    count: 12,
  },
  {
    id: 7,
    image: category7,
    name: "Grocery & Staples",
    count: 7,
  },
  {
    id: 8,
    image: category8,
    name: "Household Needs",
    count: 1,
  },
  {
    id: 9,
    image: category9,
    name: "Meats & Seafood",
    count: 5,
  },
];

export const Categories = () => {
  return (
    <Row gutter={[0, 0]} className="categories-row">
      <Col span={8} className="categories-col">
        <img src={categoryBigData.image} alt={categoryBigData.name} />
        <Text className="categories-name">{categoryBigData.name}</Text>
        <Text className="categories-count">{categoryBigData.count} Items</Text>
      </Col>
      <Col span={16}>
        <Row gutter={[0, 0]}>
          {categorySmallData.slice(0, 4).map((item) => (
            <Col span={6} key={item.id} className="categories-col">
              <img src={item.image} alt={item.name} />
              <Text className="categories-name">{item.name}</Text>
              <Text className="categories-count">{item.count} Items</Text>
            </Col>
          ))}
        </Row>
        <Row gutter={[0, 0]}>
          {categorySmallData.slice(4, 8).map((item) => (
            <Col span={6} key={item.id} className="categories-col">
              <img src={item.image} alt={item.name} />
              <Text className="categories-name">{item.name}</Text>
              <Text className="categories-count">{item.count} Items</Text>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};
