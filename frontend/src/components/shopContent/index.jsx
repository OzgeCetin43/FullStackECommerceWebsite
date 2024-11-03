import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Layout,
  Select,
  Typography,
  Row,
  Col,
  Pagination,
  Divider,
  Button,
} from "antd";
import { IoMenu } from "react-icons/io5";
import { FiGrid } from "react-icons/fi";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { TbGrid4X4 } from "react-icons/tb";

import banner from "../../assets/shop-content-banner.jpg";
import shopBanner1 from "../../assets/shop-banner-1.png";
import shopBanner2 from "../../assets/shop-banner-2.png";
import shopBanner3 from "../../assets/shop-banner-3.png";

import { ShopListingCard } from "../shopListingCard";
import { FooterMenu } from "../footerMenu";

import { listingData } from "../../assets/data/listingData";

import "./shop-content.css";

const { Content } = Layout;
const { Text } = Typography;

export const ShopContent = () => {
  const [gridView, setGridView] = useState("four");
  const [selectedItem, setSelectedItem] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (selectedItem) navigate(`/products/${selectedItem}`);
  }, [selectedItem]);

  return (
    <Content className="shop-main-content">
      <Content className="shop-content">
        <Content className="shop-banner-content">
          <img src={banner} alt="banner" />
          <Content className="shop-banner-info-content">
            <Text className="shop-banner-subtitle-text">
              Organic Meals Prepared
            </Text>
            <Text className="shop-banner-title-text">
              Delivered to <span>your Home</span>
            </Text>
            <Text className="shop-banner-description-text">
              Fully prepared & delivered nationwide.
            </Text>
          </Content>
        </Content>
        <Content className="shop-listing-content">
          <Content className="shop-listing-header-content">
            <Content className="shop-listing-grid-category-content">
              <IoMenu
                onClick={() => setGridView("one")}
                className={gridView === "one" ? "active-grid-view" : ""}
              />
              <FiGrid
                onClick={() => setGridView("two")}
                className={gridView === "two" ? "active-grid-view" : ""}
              />
              <BsGrid3X3GapFill
                onClick={() => setGridView("three")}
                className={gridView === "three" ? "active-grid-view" : ""}
              />
              <TbGrid4X4
                onClick={() => setGridView("four")}
                className={gridView === "four" ? "active-grid-view" : ""}
              />
            </Content>
            <Content className="shop-listing-show-by-content">
              <Text className="shop-listing-show-text">Show:</Text>
              <Select
                options={[
                  { label: 12, value: 12 },
                  { label: 24, value: 24 },
                  { label: 36, value: 36 },
                  { label: 48, value: 48 },
                ]}
                defaultValue={12}
                className="shop-listing-show-by-select"
              />
            </Content>
          </Content>
        </Content>
        {gridView === "four"
          ? Array.from(
              { length: Math.round(listingData.length / 4) },
              (_, i) => i
            ).map((i) => (
              <Row gutter={[0, 0]} key={i}>
                {listingData.slice(i * 4, (i + 1) * 4).map((item) => (
                  <Col span={6} key={item.name}>
                    <ShopListingCard
                      item={item}
                      onClick={() => setSelectedItem(item.id)}
                    />
                  </Col>
                ))}
              </Row>
            ))
          : gridView === "three"
            ? Array.from(
                { length: Math.round(listingData.length / 3) },
                (_, i) => i
              ).map((i) => (
                <Row gutter={[0, 0]} key={i}>
                  {listingData.slice(i * 3, (i + 1) * 3).map((item) => (
                    <Col span={8} key={item.name}>
                      <ShopListingCard
                        item={item}
                        onClick={() => setSelectedItem(item.id)}
                      />
                    </Col>
                  ))}
                </Row>
              ))
            : gridView === "two"
              ? Array.from(
                  { length: Math.round(listingData.length / 2) },
                  (_, i) => i
                ).map((i) => (
                  <Row gutter={[0, 0]} key={i}>
                    {listingData.slice(i * 2, (i + 1) * 2).map((item) => (
                      <Col span={12} key={item.name}>
                        <ShopListingCard
                          item={item}
                          className={gridView}
                          onClick={() => setSelectedItem(item.id)}
                        />
                      </Col>
                    ))}
                  </Row>
                ))
              : listingData.map((item) => (
                  <Row gutter={[0, 0]} key={item.id}>
                    <Col span={24}>
                      <ShopListingCard
                        item={item}
                        className={gridView}
                        onClick={() => setSelectedItem(item.id)}
                      />
                    </Col>
                  </Row>
                ))}
      </Content>
      <Pagination
        align="center"
        defaultCurrent={1}
        total={50}
        className="shop-listing-pagination"
      />
      <Content className="shop-bottom-banner-content">
        <Content className="shop-banner-item-content">
          <Text className="shop-bottom-banner-text">
            Everyday Fresh & Clean with Our Products
          </Text>
          <Button className="shop-banner-shop-now-button">Shop Now</Button>
          <img src={shopBanner1} alt="shop banner" />
        </Content>
        <Content className="shop-banner-item-content">
          <Text className="shop-bottom-banner-text">
            Make your Breakfast Healthy and Easy
          </Text>
          <Button className="shop-banner-shop-now-button">Shop Now</Button>
          <img src={shopBanner2} alt="shop banner" />
        </Content>
        <Content className="shop-banner-item-content">
          <Text className="shop-bottom-banner-text">
            The best Organic Products Online
          </Text>
          <Button className="shop-banner-shop-now-button">Shop Now</Button>
          <img src={shopBanner3} alt="shop banner" />
        </Content>
      </Content>
      <Divider />
      <FooterMenu />
    </Content>
  );
};
