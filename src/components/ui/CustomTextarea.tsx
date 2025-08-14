import React, {
  type FocusEventHandler,
  forwardRef,
  useState
} from 'react';

import { Input } from '../../link/antLink';

const { TextArea } = Input;

interface Props {
  className?: string;
  placeholder?: string;
  rows?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus?: FocusEventHandler<HTMLTextAreaElement>;
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
  regex?: RegExp;
}

const CustomTextarea = forwardRef<HTMLTextAreaElement, Props>(({
  className,
  placeholder,
  rows = 4,
  value,
  onChange,
  onFocus,
  onBlur,
  regex,
}, ref) => {
  const [hasError, setHasError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (regex && !regex.test(newValue)) {
      setHasError(true);
    } else {
      setHasError(false);
    }
    onChange?.(e);
  };

  const handleBlur: FocusEventHandler<HTMLTextAreaElement> = (e) => {
    if (regex && !regex.test(e.target.value)) {
      setHasError(true);
    } else {
      setHasError(false);
    }
    onBlur?.(e);
  };

  return (
    <TextArea
      ref={ref}
      className={className}
      placeholder={placeholder}
      rows={rows}
      value={value}
      onChange={handleChange}
      onFocus={onFocus}
      onBlur={handleBlur}
      status={hasError ? 'error' : ''}
    />
  );
});

export default CustomTextarea;
