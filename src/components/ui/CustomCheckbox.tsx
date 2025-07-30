import React from 'react';
import { Checkbox } from 'antd';

interface Props {
  name:string
}

const CustomCheckbox: React.FC<Props> = ({ name}) => {
  return (
    <Checkbox>
        {name}
    </Checkbox>
  );
};

export default CustomCheckbox;
