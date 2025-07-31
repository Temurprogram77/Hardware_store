import React from 'react'
import { Input } from 'antd'

interface Props {
  type: string,
  className?: string,
  placeholder?:string
}

const CustomInput: React.FC<Props> = ({ type, className,placeholder }) => {
  return (
    <Input type={type} className={className} placeholder={placeholder} />
  );
};

export default CustomInput;
