import React, { type Ref } from 'react'
import { Input, type InputRef } from 'antd'

interface Props {
  type: string,
  className?: string,
  placeholder?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string | number
  ref?: Ref<InputRef>
}

const CustomInput: React.FC<Props> = ({ type, className, placeholder, onChange, value, ref }) => {
  return (
    <Input type={type} ref={ref} className={className} placeholder={placeholder} onChange={onChange} value={value} />
  );
};

export default CustomInput;
