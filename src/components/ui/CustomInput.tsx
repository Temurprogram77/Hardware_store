import React, {
  type FocusEventHandler,
  type Ref,
  forwardRef,
  useState
} from 'react';

import {
  Input,
  type InputRef
} from '../../link/antLink';

interface Props {
  type: string;
  className?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  regex?: RegExp;
}

const CustomInput = forwardRef<InputRef, Props>(({
  type,
  className,
  placeholder,
  onChange,
  value,
  onFocus,
  onBlur,
  regex,
}, ref) => {

  const [hasError, setHasError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (regex && !regex.test(newValue)) {
      setHasError(true);
    } else {
      setHasError(false);
    }
    onChange?.(e);
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    if (regex && !regex.test(e.target.value)) {
      setHasError(true);
    } else {
      setHasError(false);
    }
    onBlur?.(e);
  };

  return (
    <Input
      type={type}
      ref={ref}
      className={className}
      placeholder={placeholder}
      onFocus={onFocus}
      onChange={handleChange}
      value={value}
      onBlur={handleBlur}
      status={hasError ? 'error' : ''}
    />
  );
});

export default CustomInput;
