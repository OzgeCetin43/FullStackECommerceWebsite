import { Layout, Typography } from "antd";
import { FaPhoneVolume } from "react-icons/fa6";

import googlePlay from "../../assets/google-play.webp";
import appStore from "../../assets/app-store.webp";

import "./footer-contact.css";

const { Content } = Layout;
const { Text } = Typography;

export const FooterContact = () => {
  return (
    <Content className="footer-contact-content">
      <Content className="footer-contact-left-content">
        <FaPhoneVolume />
        <Content className="footer-contact-info-content">
          <Text className="footer-contact-phone-text">+90 123 456 78 90</Text>
          <Text className="footer-contact-working-hour-text">
            Working 09:00 - 23:00
          </Text>
        </Content>
      </Content>
      <Content className="footer-contact-right-content">
        <Content className="footer-contact-info-content">
          <Text className="footer-contact-download-text">
            Download App on Mobile
          </Text>
          <Text className="footer-contact-discount-text">
            15% discount on your first purchase
          </Text>
        </Content>
        <Content className="footer-contact-social-media-content">
          <img src={googlePlay} alt="google play" />
          <img src={appStore} alt="app store" />
        </Content>
      </Content>
    </Content>
  );
};
