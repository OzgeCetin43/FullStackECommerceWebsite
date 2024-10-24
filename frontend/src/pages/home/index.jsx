import { Layout } from "antd";

import { Slider } from "../../components/slider";

import "./home.css";

const { Content } = Layout;

export const Home = () => {
  return (
    <Content className="home-container">
      <Slider />
    </Content>
  );
};
