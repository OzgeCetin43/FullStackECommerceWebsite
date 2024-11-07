import { useState } from "react";
import { Layout } from "antd";

import { MainHeader, Sidebar } from "../components";

const { Content } = Layout;

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Layout>
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <Layout>
        <MainHeader
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Content>Content</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
