import React from 'react'
import { Input } from 'antd'

interface Props {
  type: string;
  className?: string;
}

const CustomInput: React.FC<Props> = ({ type, className }) => {
  return (
    <Input type={type} className={className} />
  );
};

export default CustomInput;
