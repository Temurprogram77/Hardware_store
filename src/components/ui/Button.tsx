import React from 'react'
import { Button } from 'antd'

interface Props {
  type:'primary' | 'default' | 'dashed' | 'link' | 'text',
  className?: string,
  text:string
}

const CustomButton: React.FC<Props> = ({ type, className,text }) => {
  return (
    <Button type={type} className={className}>{text}</Button>
  );
};

export default CustomButton;
