import { Link } from "react-router-dom";
import { Layout, Typography, Table, Button } from "antd";

import product1 from "../../assets/listing-product-1.webp";
import product2 from "../../assets/listing-product-2.webp";
import product3 from "../../assets/listing-product-3.webp";

import {
  Categories,
  Newsletter,
  FooterMenu,
  FooterContact,
} from "../../components";

import "./wishlist.css";

const { Content } = Layout;
const { Text } = Typography;

const columns = [
  {
    title: "Image",
    dataIndex: "image",
    render: (image) => (
      <img
        src={image}
        alt="product in wishlist"
        className="wishlist-product-image"
      />
    ),
  },
  {
    title: "Product Name",
    dataIndex: "productName",
    render: (_, record) => (
      <Link to={`/products/${record.key}`}>{record.productName}</Link>
    ),
  },
  {
    title: "Price",
    dataIndex: "price",
    render: (price) => <Text>${price.toFixed(2)}</Text>,
  },
  {
    title: "Date Added",
    dataIndex: "date",
  },
  {
    title: "Stock Status",
    dataIndex: "status",
    render: (status) => <Text className="wishlist-status-text">{status}</Text>,
  },
  {
    title: "",
    key: "action",
    render: () => (
      <Button className="wishlist-add-to-cart-button">Add to Cart</Button>
    ),
  },
];

const dataSource = [
  {
    key: 1,
    image: product1,
    productName: "All Natural Italian-Style Chicken Meatballs",
    price: 7.25,
    date: "Nov 12, 2024",
    status: "In Stock",
    description:
      "These all-natural Italian-style chicken meatballs are made from high-quality ground chicken, seasoned with a blend of traditional Italian herbs and spices. They offer a delicious and healthy alternative to traditional beef or pork meatballs, perfect for various dishes like pasta, subs, or as an appetizer.",
  },
  {
    key: 2,
    image: product2,
    productName: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    price: 3.29,
    date: "Oct 19, 2024",
    status: "In Stock",
    description:
      "Angie's Boomchickapop Sweet & Salty Kettle Corn is a delightful snack that combines the perfect balance of sweet and salty flavors. Made from non-GMO popcorn, this kettle corn is air-popped and lightly coated in a blend of sugar and sea salt for a delicious treat that’s perfect for any occasion.",
  },
  {
    key: 3,
    image: product3,
    productName: "Field Roast Chao Cheese Creamy Original",
    price: 19.5,
    date: "Sep 25, 2024",
    status: "In Stock",
    description:
      "Field Roast Chao Cheese Creamy Original is a dairy-free cheese alternative made from a base of coconut oil and fermented tofu. It offers a rich, creamy texture and a mild, savory flavor, making it an excellent addition to various dishes, from sandwiches to pasta and pizzas.",
  },
];

export const Wishlist = () => {
  return (
    <Content className="wishlist-main-container">
      <Content className="wishlist-content">
        <Text className="wishlist-title-text">Wishlist</Text>
        <Table
          bordered
          rowSelection
          expandable={{
            expandedRowRender: (record) => (
              <Text className="wishlist-description-text">
                {record.description}
              </Text>
            ),
            rowExpandable: () => true,
          }}
          columns={columns}
          dataSource={dataSource}
          className="wishlist-table"
        />
      </Content>
      <Categories />
      <Newsletter />
      <FooterContact />
      <FooterMenu />
    </Content>
  );
};
