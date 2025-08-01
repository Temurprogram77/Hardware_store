import React from 'react'
import { Input } from 'antd'

interface Props {
  type: string,
  className?: string,
  placeholder?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string | number
}

const CustomInput: React.FC<Props> = ({ type, className, placeholder, onChange, value }) => {
  return (
    <Input type={type} className={className} placeholder={placeholder} onChange={onChange} value={value} />
  );
};

export default CustomInput;
