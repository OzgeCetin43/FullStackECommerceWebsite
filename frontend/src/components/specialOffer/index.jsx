import { useState, useRef, useEffect } from "react";
import { Card, Layout, Typography } from "antd";

import "./special-offer.css";

const { Content } = Layout;
const { Text } = Typography;

export const SpecialOffer = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("Feb 30, 2025 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = countDownDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      if (diff < 0) {
        clearInterval(interval);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();

    return () => clearInterval(interval);
  }, []);

  return (
    <Content className="special-offer-content">
      <Content className="special-offer-left-content">
        <Text className="special-offer-title">
          Special Offers <span>of the week!</span>
        </Text>
        <Text className="special-offer-text">
          Grab this deal while it lasts! Stock up on these delicious organic
          avocados and elevate your meals. Visit our store or order online to
          take advantage of this limited-time offer!
        </Text>
      </Content>
      <Content className="special-offer-right-content">
        <Card className="countdown-card">
          {days} <Text className="countdown-text">Days</Text>
        </Card>
        <span className="countdown-separator">:</span>
        <Card className="countdown-card">
          {hours <= 9 ? `0${hours}` : hours}{" "}
          <Text className="countdown-text">Hours</Text>
        </Card>
        <span className="countdown-separator">:</span>
        <Card className="countdown-card">
          {minutes} <Text className="countdown-text">Minutes</Text>
        </Card>
        <span className="countdown-separator">:</span>
        <Card className="countdown-card">
          {seconds} <Text className="countdown-text">Seconds</Text>
        </Card>
      </Content>
    </Content>
  );
};
