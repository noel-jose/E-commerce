import React, { useEffect } from "react";
import "./Notification.scss";

const Notification = ({ text }) => {
  return <span className="notification">{text} </span>;
};

export default Notification;
