import React from "react";
import { Tag } from "antd";
import { CheckCircleOutlined, ExclamationCircleOutlined } from "@ant-design/icons";

type Status = "success" | "warning" | "error" | "default";

interface LabelProps {
  text: string;
  color?: string; // Ant Design ranglari yoki custom ranglar
  iconType?: Status;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ text, color = "default", iconType, className }) => {
  const getIcon = () => {
    switch (iconType) {
      case "success":
        return <CheckCircleOutlined />;
      case "warning":
      case "error":
        return <ExclamationCircleOutlined />;
      default:
        return null;
    }
  };

  return (
    <Tag color={color} className={className}>
      {iconType && getIcon()} {text}
    </Tag>
  );
};

export default Label;
