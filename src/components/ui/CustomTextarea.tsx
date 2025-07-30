import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

interface Props {
  className?: string;
  placeholder?: string;
  rows?: number;
}

const CustomTextarea: React.FC<Props> = ({ className, placeholder, rows = 4 }) => {
  return (
    <TextArea className={className} placeholder={placeholder} rows={rows} />
  );
};

export default CustomTextarea;
