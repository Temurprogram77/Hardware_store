import React, { type ReactNode } from 'react'
import { Button } from 'antd'

interface Props {
  type: 'primary' | 'default' | 'dashed' | 'link' | 'text',
  className?: string,
  text: string,
  children?: ReactNode,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const CustomButton: React.FC<Props> = ({ type, className, text, children, onClick }) => {
  return (
    <Button type={type} onClick={onClick} className={className}>{text}{children}</Button>
  );
};

export default CustomButton;
