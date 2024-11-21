import { Link } from "react-router-dom";
import {
  Layout,
  Typography,
  Table,
  Card,
  Divider,
  Button,
  Progress,
  Input,
} from "antd";
import { ImCross } from "react-icons/im";

import product1 from "../../assets/listing-product-1.webp";
import product2 from "../../assets/listing-product-2.webp";
import product3 from "../../assets/listing-product-3.webp";

import {
  SecureDeliveryBanner,
  Services,
  Newsletter,
  FooterMenu,
  FooterContact,
} from "../../components";

import "./cart.css";

const { Content } = Layout;
const { Text } = Typography;

const cartData = [
  {
    id: 1,
    image: product1,
    name: "All Natural Italian-Style Chicken Meatballs",
    price: 7.25,
  },
  {
    id: 2,
    image: product2,
    name: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    price: 3.29,
  },
  {
    id: 3,
    image: product3,
    name: "Field Roast Chao Cheese Creamy Original",
    price: 19.5,
  },
];

const columns = [
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (image) => <img src={image} alt="product in cart" />,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (_, record) => (
      <Link to={`/products/${record.id}`}>{record.name}</Link>
    ),
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (price) => (
      <Text className="cart-item-price-text">${price.toFixed(2)}</Text>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: () => <ImCross />,
  },
];

export const Cart = () => {
  return (
    <Content className="cart-main-container">
      <SecureDeliveryBanner />
      <Content className="cart-content">
        <Content className="cart-table-content">
          <Card>
            <Text className="cart-free-shipping-text">
              Add <span>$19.96</span> to cart and get free shipping!
            </Text>
            <Text className="cart-product-count-text">
              There are <span>3</span> products in your cart.
            </Text>
            <Progress percent={70} strokeColor="#d51243" />
          </Card>
          <Table
            columns={columns}
            bordered
            dataSource={cartData}
            className="cart-table"
          />
        </Content>
        <Card className="cart-totals-card">
          <Text className="cart-totals-text">Cart Totals</Text>
          <Divider className="cart-divider" />
          <Content className="cart-text-content">
            <Text className="cart-subtotal-text">Subtotal</Text>
            <Text className="cart-subtotal-price-text">$30.04</Text>
          </Content>
          <Divider className="cart-divider" />
          <Content className="cart-text-content">
            <Text className="cart-shipping-text">Shipping</Text>
            <Text className="cart-shipping-price-text">$5.00</Text>
          </Content>
          <Divider className="cart-divider" />
          <Content className="cart-text-content">
            <Text className="cart-total-text">Total</Text>
            <Text className="cart-total-price-text">$35.04</Text>
          </Content>
          <Divider className="cart-divider" />
          <Content className="cart-apply-coupon-content">
            <Input className="cart-coupon-input" />
            <Button className="cart-apply-coupon-button">Apply Coupon</Button>
          </Content>
          <Button className="cart-checkout-button">Proceed to checkout</Button>
        </Card>
      </Content>
      <Services />
      <Newsletter />
      <Divider />
      <FooterMenu />
      <FooterContact />
    </Content>
  );
};
