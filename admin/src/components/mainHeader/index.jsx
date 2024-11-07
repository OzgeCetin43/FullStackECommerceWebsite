import { Button, Layout, Input } from "antd";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

import "./main-header.css";

const { Header, Content } = Layout;

export const MainHeader = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <Header className={isSidebarOpen ? "header-full" : "header"}>
      <Content className="header-left-content">
        <Button
          type="text"
          icon={isSidebarOpen ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          className="header-toggle-button"
        />
        <Content className="header-search-content">
          <Input placeholder="Search..." />
          <Button className="header-search-button">Search</Button>
        </Content>
      </Content>
      <Content className="header-right-content"></Content>
    </Header>
  );
};
