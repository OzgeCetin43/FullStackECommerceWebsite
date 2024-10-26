import { Row, Col, List, Typography } from "antd";
import { Link } from "react-router-dom";

import "./footer-menu.css";

const { Text } = Typography;

const footerMenuItems = [
  {
    id: 1,
    title: "FRUIT & VEGETABLES",
    children: [
      {
        id: 2,
        text: "Fresh Vegetables",
        to: "/fresh-vegetables",
      },
      {
        id: 3,
        text: "Herbs & Seasonings",
        to: "/herbs-and-seasonings",
      },
      {
        id: 4,
        text: "Fresh Fruits",
        to: "/fresh-fruits",
      },
      {
        id: 5,
        text: "Cuts & Sprouts",
        to: "/cuts-and-sprouts",
      },
      {
        id: 6,
        text: "Exotic Fruits & Veggies",
        to: "/exotic-fruits-and-veggies",
      },
      {
        id: 7,
        text: "Packaged Produce",
        to: "/packaged-produce",
      },
      {
        id: 8,
        text: "Party Trays",
        to: "/party-trays",
      },
    ],
  },
  {
    id: 9,
    title: "Breakfast & Dairy",
    children: [
      {
        id: 10,
        text: "Milk & Flavoured Milk",
        to: "/milk-and-flavoured-milk",
      },
      {
        id: 11,
        text: "Butter & Margarine",
        to: "/butter-and-margarine",
      },
      {
        id: 12,
        text: "Cheese",
        to: "/cheese",
      },
      {
        id: 13,
        text: "Eggs Substitutes",
        to: "/eggs-substitutes",
      },
      {
        id: 14,
        text: "Honey",
        to: "/honey",
      },
      {
        id: 15,
        text: "Marmalades",
        to: "/marmalades",
      },
      {
        id: 16,
        text: "Sour Cream & Dips",
        to: "/sour-cream-and-dips",
      },
      {
        id: 17,
        text: "Yogurt",
        to: "/yogurt",
      },
    ],
  },
  {
    id: 18,
    title: "Meat & Seafood",
    children: [
      {
        id: 19,
        text: "Breakfast Sausage",
        to: "/breakfast-sausage",
      },
      {
        id: 20,
        text: "Dinner Sausage",
        to: "/dinner-sausage",
      },
      {
        id: 21,
        text: "Beef",
        to: "/beef",
      },
      {
        id: 22,
        text: "Chicken",
        to: "/chicken",
      },
      {
        id: 23,
        text: "Sliced Deli Meat",
        to: "/sliced-deli-meat",
      },
      {
        id: 24,
        text: "Shrimp",
        to: "/shrimp",
      },
      {
        id: 25,
        text: "Wild Caught Fillets",
        to: "/wild-caught-fillets",
      },
      {
        id: 26,
        text: "Crab & Shellfish",
        to: "/crab-and-shellfish",
      },
      {
        id: 27,
        text: "Farm Raised Fillets",
        to: "/farm-raised-fillets",
      },
    ],
  },
  {
    id: 28,
    title: "Beverages",
    children: [
      {
        id: 29,
        text: "Water",
        to: "/water",
      },
      {
        id: 30,
        text: "Sparkling Water",
        to: "/sparkling-water",
      },
      {
        id: 31,
        text: "Soda & Pop",
        to: "/soda-and-pop",
      },
      {
        id: 32,
        text: "Coffee",
        to: "/coffee",
      },
      {
        id: 33,
        text: "Milk & Plant-Based Milk",
        to: "/milk-and-plant-based-milk",
      },
      {
        id: 34,
        text: "Tea & Kombucha",
        to: "/tea-and-kombucha",
      },
      {
        id: 35,
        text: "Drink Boxes & Pouches",
        to: "/drink-boxes-and-pouches",
      },
      {
        id: 36,
        text: "Craft Beer",
        to: "/craft-beer",
      },
      {
        id: 37,
        text: "Wine",
        to: "/wine",
      },
    ],
  },
  {
    id: 38,
    title: "Breads & Bakery",
    children: [
      {
        id: 39,
        text: "Milk & Flavoured Milk",
        to: "/milk-and-flavoured-milk",
      },
      {
        id: 40,
        text: "Butter & Margarine",
        to: "/butter-and-margarine",
      },
      {
        id: 41,
        text: "Cheese",
        to: "/cheese",
      },
      {
        id: 42,
        text: "Eggs Substitutes",
        to: "/eggs-substitutes",
      },
      {
        id: 43,
        text: "Honey",
        to: "/honey",
      },
      {
        id: 44,
        text: "Marmalades",
        to: "/marmalades",
      },
      {
        id: 45,
        text: "Sour Cream & Dips",
        to: "/sour-cream-and-dips",
      },
      {
        id: 46,
        text: "Yogurt",
        to: "/yogurt",
      },
    ],
  },
];

export const FooterMenu = () => {
  return (
    <Row gutter={[12, 12]} className="footer-menu-row">
      {footerMenuItems.map((item) => (
        <Col key={item.id} className="footer-menu-col">
          <Text className="footer-menu-item-title-text">{item.title}</Text>
          <List
            className="footer-menu-list"
            dataSource={item.children}
            renderItem={(i) => (
              <List.Item className="footer-menu-list-item">
                <Text className="footer-menu-link-text">
                  <Link to={i.to}>{i.text}</Link>
                </Text>
              </List.Item>
            )}
          />
        </Col>
      ))}
    </Row>
  );
};
