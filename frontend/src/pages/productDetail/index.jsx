import { useState } from "react";
import { useParams } from "react-router-dom";
import { Layout, Card, Typography, Rate, Divider, Button, Tabs } from "antd";
import { FaTruckFast, FaSackDollar } from "react-icons/fa6";
import { LuMilk } from "react-icons/lu";

import {
  Categories,
  Newsletter,
  SpecialOffer,
  SpecialOfferProductList,
} from "../../components";

import { listingData } from "../../assets/data/listingData";

import "./product-detail.css";

const { Content } = Layout;
const { Text } = Typography;

export const ProductDetail = () => {
  const [count, setCount] = useState(0);

  const { id } = useParams();
  const data = listingData.filter((item) => item.id === Number(id))[0];

  const tabs = [
    {
      key: 1,
      label: "Description",
      children: (
        <Content className="product-detail-tab-addition-information-content">
          <Text className="product-detail-tab-description-text">
            {data?.description}
          </Text>
          <Text className="product-detail-tab-description-text">
            {data?.infoDetail}
          </Text>
        </Content>
      ),
    },
    {
      key: 2,
      label: "Additional Information",
      children: (
        <Content className="product-detail-tab-addition-information-content">
          {data?.info?.map((item, index) => (
            <Text
              key={index}
              className="product-detail-additional-information-text"
            >
              {item}
            </Text>
          ))}
        </Content>
      ),
    },
  ];

  const incrementCountHandler = () => setCount((prev) => prev + 1);

  const decrementCountHandler = () =>
    setCount((prev) => (prev !== 0 ? prev - 1 : prev));

  return (
    <Content className="product-detail-main-container">
      <SpecialOffer />
      <Card className="product-detail-main-card">
        <Text className="product-detail-main-name">{data?.name}</Text>
        <Content className="product-detail-header-content">
          {data?.brand && (
            <>
              <Text className="product-detail-main-brand-text">
                Brands: <b>{data?.brand}</b>
              </Text>
              <Divider type="vertical" />
            </>
          )}
          <Rate
            disabled
            defaultValue={data?.rate}
            className="product-detail-main-rate"
          />
          <Divider type="vertical" />
          <Text className="product-detail-main-sku-text">
            SKU: <b>{data?.sku}</b>
          </Text>
        </Content>
        <Divider className="product-detail-header-divider" />
        <Content className="product-detail-body-content">
          <Content className="product-detail-body-left-content">
            {data?.rate && (
              <Text className="product-detail-main-percentage-text">
                {data?.rate}%
              </Text>
            )}
            {data?.label && (
              <Text
                className={`product-detail-main-label-text ${
                  data?.label === "Organic"
                    ? "organic-label"
                    : "recommended-label"
                }`}
              >
                {data?.label}
              </Text>
            )}
            <img src={data?.image} alt={data?.name} />
          </Content>
          <Content className="product-detail-body-center-content">
            <Content className="product-detail-price-content">
              {data?.oldPrice && (
                <Text className="product-detail-main-old-price-text">
                  ${data?.oldPrice}
                </Text>
              )}
              {data?.newPrice && (
                <Text className="product-detail-main-new-price-text">
                  ${data?.newPrice}
                </Text>
              )}
              {data?.minPrice && data?.maxPrice && (
                <Text className="product-detail-main-price-range-text">
                  ${data?.minPrice} - ${data?.maxPrice}
                </Text>
              )}
            </Content>
            <Text className="product-detail-main-in-stock-text">In Stock</Text>
            <Text className="product-detail-main-description-text">
              {data?.description}
            </Text>
            <Content className="product-detail-add-to-cart-counter-content">
              <Button
                className="product-add-to-cart-counter-button"
                onClick={decrementCountHandler}
              >
                -
              </Button>
              <Text>{count}</Text>
              <Button
                className="product-add-to-cart-counter-button"
                onClick={incrementCountHandler}
              >
                +
              </Button>
              <Button className="product-add-to-cart-button">
                Add to Cart
              </Button>
            </Content>
            <Divider className="product-detail-body-divider" />
            <Text className="product-detail-main-category-text">
              Category: <b>{data?.category}</b>
            </Text>
          </Content>
          <Content className="product-detail-body-right-content">
            <Text className="product-detail-covid-19-text">
              Covid-19 Info: We keep delivering.
            </Text>
            <Content className="product-detail-info-content">
              <Text className="product-detail-info-text">
                <FaTruckFast /> Free Shipping apply to all orders over $100.
              </Text>
              <Text className="product-detail-info-text">
                <LuMilk /> Guranteed 100% Organic from natural farmas.
              </Text>
              <Text className="product-detail-info-text">
                <FaSackDollar /> Day Returns if you change your mind.
              </Text>
            </Content>
          </Content>
        </Content>
      </Card>
      <Card className="product-detail-second-card">
        <Tabs defaultActiveKey="1" items={tabs} />
      </Card>
      <Categories />
      <SpecialOfferProductList />
      <Newsletter />
    </Content>
  );
};
