import { useState } from "react";
import { Button, Layout, Typography } from "antd";

import "./slider.css";

import sliderImg1 from "../../assets/slider-image-1.jpg";
import sliderImg2 from "../../assets/slider-image-2.webp";
import sliderImg3 from "../../assets/slider-image-3.webp";

const sliderData = [
  {
    id: 1,
    offRate: 20,
    title: "A different kind of grocery store",
    price: 7.99,
    img: sliderImg1,
  },
  {
    id: 2,
    offRate: 40,
    title: "Quality freshness guaranteed!",
    price: 14.35,
    img: sliderImg2,
  },
  {
    id: 3,
    offRate: 20,
    title: "Having the best quality products",
    price: 5.45,
    img: sliderImg3,
  },
];

const { Content } = Layout;
const { Text, Title } = Typography;

export const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Content>
      <Content className="slider-container">
        <img
          src={sliderData[activeIndex].img}
          alt={sliderData[activeIndex].title}
        />
        <Content className="slider-info-content">
          <Text className="slider-offer-text">
            Exclusive Offer <span>-{sliderData[activeIndex].offRate}% Off</span>
          </Text>
          <Title className="slider-title">
            {sliderData[activeIndex].title}
          </Title>
          <Text>Only this week. Don't miss...</Text>
          <Text className="slider-price">
            from <span>${sliderData[activeIndex].price}</span>
          </Text>
          <Button className="slider-shop-button">Shop Now</Button>
          <Content className="slider-action-container">
            <div
              className={
                activeIndex === 0
                  ? "slider-action-button active-slider"
                  : "slider-action-button"
              }
              onClick={() => setActiveIndex(0)}
            />
            <div
              className={
                activeIndex === 1
                  ? "slider-action-button active-slider"
                  : "slider-action-button"
              }
              onClick={() => setActiveIndex(1)}
            />
            <div
              className={
                activeIndex === 2
                  ? "slider-action-button active-slider"
                  : "slider-action-button"
              }
              onClick={() => setActiveIndex(2)}
            />
          </Content>
        </Content>
      </Content>
    </Content>
  );
};
