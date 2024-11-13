import { Link } from "react-router-dom";
import { Layout, Tabs, Typography } from "antd";

import {
  FooterContact,
  FooterMenu,
  MyAccountAddress,
  MyAccountOrders,
  MyAccountTrackOrder,
  SpecialOffer,
  SpecialOfferProductList,
} from "../../components";

import "./my-account.css";

const { Content } = Layout;

const items = [
  {
    key: "orders",
    label: "Orders",
    children: <MyAccountOrders />,
  },
  {
    key: "track-your-order",
    label: "Track Your Order",
    children: <MyAccountTrackOrder />,
  },
  {
    key: "my-address",
    label: "My Address",
    children: <MyAccountAddress />,
  },
  {
    key: "account-details",
    label: "Account Details",
    children: "Content of Tab Pane 4",
  },
  {
    key: "logout",
    label: <Link to="/login">Logout</Link>,
  },
];

export const MyAccount = () => {
  return (
    <Content className="my-account-container">
      <Tabs tabPosition="left" items={items} className="my-account-tabs" />
      <SpecialOffer />
      <SpecialOfferProductList />
      <FooterContact />
      <FooterMenu />
    </Content>
  );
};
