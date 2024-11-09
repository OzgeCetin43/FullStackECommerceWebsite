import { useState } from "react";
import { Button, Layout, Typography, Divider } from "antd";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";
import { IoMdChatboxes } from "react-icons/io";

import notification1 from "../../assets/notification-1.webp";
import notification2 from "../../assets/notification-2.webp";
import notification3 from "../../assets/notification-3.webp";
import chat1 from "../../assets/chat-1.webp";
import chat2 from "../../assets/chat-2.webp";
import chat3 from "../../assets/chat-3.webp";

import "./main-header.css";

const { Header, Content } = Layout;
const { Text } = Typography;

const notificationData = [
  {
    id: 1,
    image: notification1,
    name: "J. Davidson",
    text: "joined to discount program",
    time: "7 hours ago",
    type: "Offers",
  },
  {
    id: 2,
    image: notification2,
    name: "Helen Miller",
    text: "sent a request for refund",
    time: "12 hours ago",
    type: "Electronics",
  },
  {
    id: 3,
    image: notification3,
    name: "Victor Stevens",
    text: "started following you",
    time: "14 hours ago",
    type: "Subscriptions",
  },
];

const chatData = [
  {
    id: 1,
    image: chat1,
    name: "Janae Kshlerin",
    time: "an hour ago",
    specificTime: "1.35 PM",
    text: "Hey! How’s it going today?",
  },
  {
    id: 2,
    image: chat2,
    name: "Kennedi McClure",
    time: "16 hours ago",
    specificTime: "10.35 PM",
    text: "I’m struggling with a project. Can you help?",
  },
  {
    id: 3,
    image: chat3,
    name: "Sabina Runolfsdottir",
    time: "11 days ago",
    specificTime: "9:33 PM",
    text: "Can you recommend a good book to read?",
  },
];

export const MainHeader = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <Header className="header">
      <Content className="header-left-content">
        <Button
          type="text"
          icon={isSidebarOpen ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          className="header-toggle-button"
        />
        <Button className="header-search-button">
          <FaSearch />
        </Button>
      </Content>
      <Content className="header-right-content">
        <Content className="header-notification-content">
          <Button
            className="header-notification-button"
            onClick={() => {
              setIsNotificationOpen((prev) => !prev);
              setIsChatOpen(false);
            }}
          >
            <FaBell />
            <Text className="header-notification-badge-text">3</Text>
          </Button>
          {isNotificationOpen && (
            <Content className="header-notification-detail-content">
              <Text className="header-notification-title-text">
                Notifications
              </Text>
              {notificationData.map((notification) => (
                <Content
                  key={notification.id}
                  className="header-notification-item-content"
                >
                  <img src={notification.image} alt="" />
                  <Content className="header-notification-item-info-content">
                    <Text className="header-notification-user-name-text">
                      {notification.name}
                    </Text>
                    <Text className="header-notification-text">
                      {notification.text}
                    </Text>
                    <Content className="header-notification-detail-info-content">
                      <Text className="header-notification-time-text">
                        {notification.time}
                      </Text>
                      <Divider type="vertical" />
                      <Text className="header-notification-type-text">
                        {notification.type}
                      </Text>
                    </Content>
                    <Content className="header-notification-action-content">
                      <Button className="header-accept-button">Accept</Button>
                      <Button className="header-decline-button">Decline</Button>
                    </Content>
                  </Content>
                </Content>
              ))}
              <Button className="header-show-all-button">Show All</Button>
            </Content>
          )}
        </Content>
        <Content className="header-chat-content">
          <Button
            className="header-chat-button"
            onClick={() => {
              setIsChatOpen((prev) => !prev);
              setIsNotificationOpen(false);
            }}
          >
            <IoMdChatboxes />
            <Text className="header-chat-badge-text">3</Text>
          </Button>
          {isChatOpen && (
            <Content className="header-chat-detail-content">
              <Text className="header-chat-title-text">Messages</Text>
              {chatData.map((chat) => (
                <Content key={chat.id} className="header-chat-item-content">
                  <img src={chat.image} alt="" />
                  <Content className="header-chat-item-info-content">
                    <Text className="header-chat-user-name-text">
                      {chat.name}
                    </Text>
                    <Content className="header-chat-detail-info-content">
                      <Text className="header-chat-time-text">{chat.time}</Text>
                      <Divider type="vertical" />
                      <Text className="header-chat-specific-time-text">
                        at {chat.specificTime}
                      </Text>
                    </Content>
                    <Text className="header-chat-text">{chat.text}</Text>
                  </Content>
                </Content>
              ))}
              <Button className="header-show-all-button">Show All</Button>
            </Content>
          )}
        </Content>
        <Content className="header-profile-content">
          <Button className="header-profile-button">
            <FaUser />
            <Text className="header-profile-badge-text" />
          </Button>
        </Content>
      </Content>
    </Header>
  );
};
