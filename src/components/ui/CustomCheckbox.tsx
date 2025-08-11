import React, { type ReactNode } from 'react';
import { Checkbox } from '../../link/antLink';

interface Props {
  name: string
  children?: ReactNode
}

const CustomCheckbox: React.FC<Props> = ({ name, children, }) => {
  return (
    <Checkbox >
      {name}
      {children}
    </Checkbox>
  );
};

export default CustomCheckbox;
