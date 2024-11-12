import { Typography, Table, Tag } from "antd";

import "./my-account-orders.css";

const { Text } = Typography;

const columns = [
  {
    title: "Order #",
    dataIndex: "order",
    key: "order",
    render: (text) => <Text>{text}</Text>,
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Items",
    dataIndex: "items",
    key: "items",
    render: (count) => <Text>{count} items</Text>,
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (status) => (
      <Tag color={status === "Processing" ? "volcano" : "green"} key={status}>
        {status.toUpperCase()}
      </Tag>
    ),
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
    render: (total) => <Text>${total.toFixed(2)}</Text>,
  },
];

const dataSource = [
  {
    key: "1",
    order: "#2468",
    date: "March 12, 2024",
    status: "Processing",
    items: 2,
    total: 125.0,
  },
  {
    key: "2",
    order: "#2357",
    date: "Feb 26, 2024",
    status: "Completed",
    items: 5,
    total: 364.0,
  },
  {
    key: "3",
    order: "#2266",
    date: "Nov 11, 2023",
    status: "Completed",
    items: 3,
    total: 280.0,
  },
];

export const MyAccountOrders = () => {
  return (
    <Table
      bordered
      columns={columns}
      dataSource={dataSource}
      className="my-account-orders-table"
    />
  );
};
