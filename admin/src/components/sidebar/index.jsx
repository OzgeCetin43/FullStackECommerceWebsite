import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { RxDotFilled } from "react-icons/rx";
import { MdCategory } from "react-icons/md";
import { BiSolidPackage } from "react-icons/bi";
import { IoMdCart } from "react-icons/io";
import { FaChartPie } from "react-icons/fa";
import { IoStarHalfOutline } from "react-icons/io5";
import { PiUsersThreeFill, PiContactlessPaymentBold } from "react-icons/pi";
import { SiPowerpages } from "react-icons/si";

import logo from "../../assets/logo.webp";

import "./sidebar.css";

const { Sider, Content } = Layout;

const menuItems = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <TbLayoutDashboardFilled />,
    children: [
      {
        key: "sales-analytics",
        label: <Link to="/">Sales Analytics</Link>,
        icon: <RxDotFilled />,
      },
      {
        key: "seller-list",
        label: <Link to="/seller-list">Seller List</Link>,
        icon: <RxDotFilled />,
      },
      {
        key: "revenue-by-period",
        label: <Link to="/revenue-by-period">Revenue by Period</Link>,
        icon: <RxDotFilled />,
      },
    ],
  },
  {
    key: "categories",
    label: "Categories",
    icon: <MdCategory />,
    children: [
      {
        key: "category-list",
        label: <Link to="/category-list">Category List</Link>,
        icon: <RxDotFilled />,
      },
      {
        key: "category-create",
        label: <Link to="/category-create">Category Create</Link>,
        icon: <RxDotFilled />,
      },
    ],
  },
  {
    key: "products",
    label: "Products",
    icon: <BiSolidPackage />,
    children: [
      {
        key: "top-products",
        label: <Link to="/top-products">Top Products</Link>,
        icon: <RxDotFilled />,
      },
      {
        key: "product-list",
        label: <Link to="/product-list">Product List</Link>,
        icon: <RxDotFilled />,
      },
      {
        key: "product-create",
        label: <Link to="/product-create">Product Create</Link>,
        icon: <RxDotFilled />,
      },
      {
        key: "banners",
        label: <Link to="/banners">Banners</Link>,
        icon: <RxDotFilled />,
      },
    ],
  },
  {
    key: "orders",
    label: <Link to="/orders">Orders</Link>,
    icon: <IoMdCart />,
  },
  {
    key: "statistics",
    label: <Link to="/statistics">Statistics</Link>,
    icon: <FaChartPie />,
  },
  {
    key: "reviews",
    label: <Link to="/reviews">Reviews</Link>,
    icon: <IoStarHalfOutline />,
  },
  {
    key: "customers",
    label: <Link to="/customers">Customers</Link>,
    icon: <PiUsersThreeFill />,
  },
  {
    key: "transactions",
    label: <Link to="/transactions">Dashboard</Link>,
    icon: <PiContactlessPaymentBold />,
  },
  {
    key: "pages",
    label: "Pages",
    icon: <SiPowerpages />,
    children: [
      {
        key: "login",
        label: <Link to="/login">Login</Link>,
        icon: <RxDotFilled />,
      },
      {
        key: "page-404",
        label: <Link to="/page-404">Page 404</Link>,
        icon: <RxDotFilled />,
      },
    ],
  },
];

export const Sidebar = ({ isSidebarOpen }) => {
  const [activeItem, setActiveItem] = useState("sales-analytics");

  const handleMenuClick = (e) => setActiveItem(e.key);

  return (
    <Sider
      className="sidebar"
      trigger={null}
      collapsible
      collapsed={isSidebarOpen}
    >
      <Content className="sidebar-logo-content">
        <img src={logo} alt="logo" className="sidebar-logo" />
      </Content>
      <Menu
        mode="inline"
        defaultSelectedKeys={["sales-analytics"]}
        selectedKeys={[activeItem]}
        items={menuItems}
        onClick={handleMenuClick}
        className="sidebar-menu"
      />
    </Sider>
  );
};
