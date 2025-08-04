import React from "react";

interface LabelProps {
  text: string;
  required?: boolean;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ text, required = false, className }) => {
  return (
    <label className={`text-sm font-medium text-black ${className}`}>
      {text}
      {required && <span className="text-red-500 mr-1">*</span>}:
      {required && <span className="text-red-500 mr-1">*</span>}
      {text}
    </label>
  );
};

export default Label;
