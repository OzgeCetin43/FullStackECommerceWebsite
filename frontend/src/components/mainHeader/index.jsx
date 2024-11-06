import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Typography, Flex, Menu, Button, Input, Divider } from "antd";
import { Link } from "react-router-dom";
import { SiSecurityscorecard } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import { FaSearch, FaUser } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";

import { CountryModal } from "../countryModal";

import logo from "../../assets/logo.webp";

import "./main-header.css";

const { Text } = Typography;

const { Header, Content } = Layout;

const menuItems = [
  {
    label: <Link to="/about-us">About Us</Link>,
    key: "about-us",
  },
  {
    label: <Link to="/my-account">My Account</Link>,
    key: "my-account",
  },
  {
    label: <Link to="/wishlist">Wishlist</Link>,
    key: "wishlist",
  },
  {
    label: <Link to="/order-tracking">Order Tracking</Link>,
    key: "order-tracking",
  },
];

const mainMenuItems = [
  {
    label: <Link to="/">Home</Link>,
    key: "home",
  },
  {
    label: <Link to="/shop">Shop</Link>,
    key: "shop",
  },
  {
    label: <Link to="/meats-and-seafood">Meats & Seafood</Link>,
    key: "meats-and-seafood",
  },
  {
    label: <Link to="/bakery">Bakery</Link>,
    key: "bakery",
  },
  {
    label: <Link to="/beverages">Beverages</Link>,
    key: "beverages",
  },
  {
    label: <Link to="/blog">Blog</Link>,
    key: "blog",
  },
  {
    label: <Link to="/contact">Contact</Link>,
    key: "contact",
  },
];

const allCategoriesMenuItems = [
  {
    label: <Link to="/fruits-and-vegetables">Fruits & Vegetables</Link>,
    key: "fruits-and-vegetables",
    children: [
      {
        label: <Link to="/cuts-and-sprouts">Cuts & Sprouts</Link>,
        key: "cuts-and-sprouts",
      },
      {
        label: (
          <Link to="/exotic-fruits-and-veggies">Exotic Fruits & Veggies</Link>
        ),
        key: "exotic-fruits-and-veggies",
      },
      {
        label: <Link to="/fresh-fruits">Fresh Fruits</Link>,
        key: "fresh-fruits",
      },
      {
        label: <Link to="/fresh-vegetables">Fresh Vegetables</Link>,
        key: "fresh-vegetables",
      },
      {
        label: <Link to="/herbs-and-seasonings">Herbs & Seasonings</Link>,
        key: "herbs-and-seasonings",
      },
      {
        label: <Link to="/packed-produce">Packed Produce</Link>,
        key: "packed-produce",
      },
      {
        label: <Link to="/party-trays">Party Trays</Link>,
        key: "party-trays",
      },
    ],
  },
  {
    label: <Link to="/meats-and-seafood">Meats & Seafood</Link>,
    key: "meats-and-seafood",
  },
  {
    label: <Link to="/breakfast-and-dairy">Breakfast & Dairy</Link>,
    key: "breakfast-and-dairy",
  },
  {
    label: <Link to="/beverages">Beverages</Link>,
    key: "beverages",
    children: [
      {
        label: <Link to="/coffee">Coffee</Link>,
        key: "coffee",
      },
      {
        label: <Link to="/craft-beer">Craft Beer</Link>,
        key: "craft-beer",
      },
      {
        label: <Link to="/drink-boxes-and-pouches">Drink Boxes & Pouches</Link>,
        key: "drink-boxes-and-pouches",
      },
      {
        label: (
          <Link to="/milk-and-plant-based-milk">Milk & Plant-based Milk</Link>
        ),
        key: "milk-and-plant-based-milk",
      },
      {
        label: <Link to="/soda-and-pop">Soda & Pop</Link>,
        key: "soda-and-pop",
      },
      {
        label: <Link to="/sparkling-water">Sparkling Water</Link>,
        key: "sparkling-water",
      },
      {
        label: <Link to="/tea-and-kombucha">Tea & Kombucha</Link>,
        key: "tea-and-kombucha",
      },
      {
        label: <Link to="/water">Water</Link>,
        key: "water",
      },
      {
        label: <Link to="/wine">Wine</Link>,
        key: "wine",
      },
    ],
  },
  {
    label: <Link to="/breads-and-bakery">Breads & Bakery</Link>,
    key: "breads-and-bakery",
  },
  {
    label: <Link to="/frozen-foods">Frozen Foods</Link>,
    key: "frozen-foods",
  },
  {
    label: <Link to="/biscuits-and-snacks">Biscuits & Snacks</Link>,
    key: "biscuits-and-snacks",
  },
  {
    label: <Link to="/grocery-and-staples">Grocery & Staples</Link>,
    key: "grocery-and-staples",
  },
];

const allCategoriesSpecialMenuItems = [
  {
    label: <Link to="/value-of-the-day">Value of the Day</Link>,
    key: "value-of-the-day",
  },
  {
    label: <Link to="/top-1000-offers">Top 1000 Offers</Link>,
    key: "top-1000-offers",
  },
  {
    label: <Link to="/new-arrivals">New Arrivals</Link>,
    key: "new-arrivals",
  },
];

export const MainHeader = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [isCountryModalOpen, setIsCountryModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isAllCategoriesMenuOpen, setIsAllCategoriesMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleMenuClick = (e) => setActiveItem(e.key);

  const countryModalOkHandler = () => setIsCountryModalOpen(false);

  const countryModalCancelHandler = () => setIsCountryModalOpen(false);

  return (
    <>
      <Content className="main-header-top">
        <Text className="main-header-top-text">
          Due to the <b>COVID 19</b> epidemic, orders may be processed with a
          slight delay
        </Text>
      </Content>
      <Header className="main-header">
        <Flex>
          <Menu
            onClick={handleMenuClick}
            selectedKeys={[activeItem]}
            mode="horizontal"
            items={menuItems}
            className="main-header-menu"
          />
          <Content className="main-header-content-middle">
            <SiSecurityscorecard />
            <Text>100% Secure delivery without contacting the courier</Text>
          </Content>
          <Content className="main-header-content-right">
            <Text>
              Need help? Call Us: <em>+90 123 456 78 90</em>
            </Text>
          </Content>
        </Flex>
        <Flex className="main-header-info-container" gap="2rem">
          <Content className="header-logo-content">
            <img src={logo} alt="logo" className="header-logo" />
            <Text className="header-logo-text">
              Online Grocery Shopping Center
            </Text>
          </Content>
          <Button
            className="header-location-button"
            icon={<IoIosArrowDown />}
            iconPosition="end"
            onClick={() => setIsCountryModalOpen(true)}
          >
            <Content className="header-location-content">
              <Text className="header-location-placeholder-text">
                Your Location
              </Text>
              <Text className="header-location-text">
                {selectedCountry?.length > 20
                  ? selectedCountry?.slice(0, 20) + "..."
                  : selectedCountry || "Select a Location"}
              </Text>
            </Content>
          </Button>
          <Content className="header-search-content">
            <Input
              className="header-search-input"
              placeholder="Search for products..."
            />
            <Button shape="circle" icon={<FaSearch />} />
          </Content>
          <Flex gap="1rem">
            <Content className="header-user-content">
              <Button
                className="header-user-button"
                shape="circle"
                icon={<FaUser />}
                onClick={() => navigate("/login")}
              />
            </Content>
            <Content className="header-price-content">
              <Text>$0.00</Text>
            </Content>
            <Content className="header-cart-content">
              <Button
                className="header-cart-button"
                shape="circle"
                icon={<IoBagHandleSharp />}
                onClick={() => navigate("/cart")}
              />
              <Text className="header-cart-badge">0</Text>
            </Content>
          </Flex>
        </Flex>
        <Content className="header-bottom-content">
          <Flex className="main-header-bottom-container">
            <Content className="header-categories-info-content">
              <Button
                className="header-all-categories-button"
                icon={<TiThMenu />}
                onClick={() => setIsAllCategoriesMenuOpen((prev) => !prev)}
              >
                All Categories
              </Button>
              <Text className="header-total-products-count-text">
                Total 63 Products
              </Text>
              {isAllCategoriesMenuOpen && (
                <Content className="all-categories-menu-content">
                  <Menu
                    onClick={handleMenuClick}
                    selectedKeys={[activeItem]}
                    mode="vertical"
                    items={allCategoriesMenuItems}
                  />
                  <Divider className="menu-divider" />
                  <Menu
                    onClick={handleMenuClick}
                    selectedKeys={[activeItem]}
                    mode="vertical"
                    items={allCategoriesSpecialMenuItems}
                  />
                </Content>
              )}
            </Content>
            <Menu
              onClick={handleMenuClick}
              selectedKeys={[activeItem]}
              mode="horizontal"
              items={mainMenuItems}
              className="header-main-menu"
            />
          </Flex>
        </Content>
      </Header>
      <CountryModal
        title="Choose your Delivery Location"
        open={isCountryModalOpen}
        onOk={countryModalOkHandler}
        onCancel={countryModalCancelHandler}
        setSelectedCountry={setSelectedCountry}
        selectedCountry={selectedCountry}
      >
        <Text>
          Enter your address and we will specify the offer for your area.
        </Text>
      </CountryModal>
    </>
  );
};
