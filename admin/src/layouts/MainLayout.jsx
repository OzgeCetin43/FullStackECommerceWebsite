import { useState } from "react";
import { Layout } from "antd";

import { MainFooter, MainHeader, Sidebar } from "../components";
import Routers from "../routers/Routers";

import "./main-layout.css";

const { Content } = Layout;

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Layout>
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <Layout
        className="main-layout"
        style={
          !isSidebarOpen
            ? { width: "calc(100% - 200px)", paddingLeft: "200px" }
            : { width: "calc(100% - 80px)", paddingLeft: "80px" }
        }
      >
        <MainHeader
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Content className="main-layout-content">
          <Routers />
        </Content>
        <MainFooter />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
