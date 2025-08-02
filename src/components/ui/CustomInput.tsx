import React,
{
  type FocusEventHandler,
  type Ref
} from 'react'

import {
  Input,
  type InputRef
} from 'antd'

interface Props {
  type: string,
  className?: string,
  placeholder?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string | number
  ref?: Ref<InputRef>
  onFocus?: FocusEventHandler<HTMLInputElement>
}

const CustomInput: React.FC<Props> = (
  {
    type,
    className,
    placeholder,
    onChange,
    value,
    ref,
    onFocus
  }
) => {

  return (
    <Input
      type={type}
      ref={ref}
      className={className}
      placeholder={placeholder}
      onFocus={onFocus}
      onChange={onChange}
      value={value}
    />
  );
};

export default CustomInput;
