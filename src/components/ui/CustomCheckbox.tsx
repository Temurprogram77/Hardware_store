import React, { type ReactNode } from 'react';
import { Checkbox, type CheckboxChangeEvent } from 'antd';

interface Props {
  name: string
  checked?: boolean
  onChange?: (e: CheckboxChangeEvent) => void,
  children?: ReactNode
}

const CustomCheckbox: React.FC<Props> = ({ name, children, checked, onChange }) => {
  return (
    <Checkbox checked={checked} onChange={onChange}>
      {name}
      {children}
    </Checkbox>
  );
};

export default CustomCheckbox;
