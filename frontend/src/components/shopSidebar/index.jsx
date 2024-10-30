import { Fragment, useState } from "react";
import { Layout, Typography, Checkbox } from "antd";

import banner from "../../assets/sidebar-banner.gif";

import "./shop-sidebar.css";

const { Sider, Content } = Layout;
const { Text } = Typography;

const CheckboxGroup = Checkbox.Group;

const productCategoriesData = [
  {
    id: 1,
    name: "Beverages",
    type: "beverages",
    children: [
      {
        id: 2,
        name: "Coffee",
        type: "coffee",
      },
      {
        id: 3,
        name: "Craft Beer",
        type: "craft-beer",
      },
      {
        id: 4,
        name: "Drink Boxes & Pouches",
        type: "drink-boxes-and-pouches",
      },
      {
        id: 5,
        name: "Milk & Plant-Based Milk",
        type: "milk-and-plant-based-milk",
      },
      {
        id: 6,
        name: "Soda & Pop",
        type: "soda-and-pop",
      },
      {
        id: 7,
        name: "Sparkling Water",
        type: "sparkling-water",
      },
      {
        id: 8,
        name: "Tea & Kombucha",
        type: "tea-and-kombucha",
      },
      {
        id: 9,
        name: "Water",
        type: "water",
      },
      {
        id: 10,
        name: "Wine",
        type: "wine",
      },
    ],
  },
  {
    id: 11,
    name: "Biscuits & Snacks",
    type: "biscuits-and-snacks",
  },
  {
    id: 12,
    name: "Breads & Bakery",
    type: "breads-and-bakery",
    children: [
      {
        id: 13,
        name: "Buns & Rolls",
        type: "buns-and-rolls",
      },
      {
        id: 14,
        name: "Cakes & Cupcakes",
        type: "cakes-and-cupcakes",
      },
      {
        id: 15,
        name: "Cookies & Brownies",
        type: "cookies-and-brownies",
      },
      {
        id: 16,
        name: "Donuts & Muffins",
        type: "donuts-and-muffins",
      },
      {
        id: 17,
        name: "Order Specialty Cakes",
        type: "order-specialty-cakes",
      },
      {
        id: 18,
        name: "Packaged Breads",
        type: "packaged-breads",
      },
    ],
  },
  {
    id: 19,
    name: "Breakfast & Dairy",
    type: "breakfast-and-dairy",
    children: [
      {
        id: 20,
        name: "Butter & Margarine",
        type: "butter-and-margarine",
      },
      {
        id: 21,
        name: "Cheese",
        type: "cheese",
      },
      {
        id: 22,
        name: "Eggs Substitutes",
        type: "eggs-substitutes",
      },
      {
        id: 23,
        name: "Honey",
        type: "honey",
      },
      {
        id: 24,
        name: "Marmalades",
        type: "marmalades",
      },
      {
        id: 25,
        name: "Milk & Flavoured Milk",
        type: "milk-and-flavoured-milk",
      },
      {
        id: 26,
        name: "Sour Cream & Dips",
        type: "sour-cream-and-dips",
      },
      {
        id: 27,
        name: "Yogurt",
        type: "yogurt",
      },
    ],
  },
  {
    id: 28,
    name: "Frozen Foods",
    type: "frozen-foods",
  },
  {
    id: 29,
    name: "Fruits & Vegetables",
    type: "fruits-and-vegetables",
    children: [
      {
        id: 30,
        name: "Cuts & Sprouts",
        type: "cuts-and-sprouts",
      },
      {
        id: 31,
        name: "Exotic Fruits & Veggies",
        type: "exotic-fruits-and-veggies",
      },
      {
        id: 32,
        name: "Fresh Fruits",
        type: "fresh-fruits",
      },
      {
        id: 33,
        name: "Fresh Vegetables",
        type: "fresh-vegetables",
      },
      {
        id: 34,
        name: "Herbs & Seasonings",
        type: "herbs-and-seasonings",
      },
      {
        id: 35,
        name: "Packaged Produce",
        type: "packaged-produce",
      },
      {
        id: 36,
        name: "Party Trays",
        type: "party-trays",
      },
    ],
  },
  {
    id: 37,
    name: "Grocery & Staples",
    type: "grocery-and-staples",
  },
  {
    id: 38,
    name: "Household Needs",
    type: "household-needs",
  },
  {
    id: 39,
    name: "Meats & Seafood",
    type: "meats-and-seafood",
    children: [
      {
        id: 40,
        name: "Beef",
        type: "beef",
      },
      {
        id: 41,
        name: "Breakfast Sausage",
        type: "breakfast-sausage",
      },
      {
        id: 42,
        name: "Chicken",
        type: "chicken",
      },
      {
        id: 43,
        name: "Crab & Shellfish",
        type: "crab-and-shellfish",
      },
      {
        id: 44,
        name: "Dinner Sausage",
        type: "dinner-sausage",
      },
      {
        id: 45,
        name: "Farm Raised Fillets",
        type: "farm-raised-fillets",
      },
      {
        id: 46,
        name: "Shrimp",
        type: "shrimp",
      },
      {
        id: 47,
        name: "Sliced Deli Meat",
        type: "sliced-deli-meat",
      },
      {
        id: 48,
        name: "Wild Caught Fillets",
        type: "wild-caught-fillets",
      },
    ],
  },
];

export const ShopSidebar = () => {
  return (
    <Sider className="shop-sidebar">
      <Text className="shop-sidebar-title">Product Categories</Text>
      <Content className="product-categories-content">
        {productCategoriesData.map((category) => (
          <Fragment key={category.id}>
            <Checkbox className="product-category-checkbox">
              {category.name}
            </Checkbox>
            {category?.children && (
              <CheckboxGroup
                className="product-category-checkbox-group"
                options={category?.children?.map((item) => item.name)}
              />
            )}
          </Fragment>
        ))}
      </Content>
      <Content className="shop-sidebar-banner-content">
        <img src={banner} alt="banner" />
      </Content>
    </Sider>
  );
};
