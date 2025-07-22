import React, { useState } from 'react';
import { Breadcrumb, Select, Radio } from 'antd';

const { Option } = Select;

const Comparison: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('Шуруповерты');
  const [radioValue, setRadioValue] = useState('different');

  return (
    <div className="p-4 sm:p-6 md:p-10 lg:p-10 mt-4">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-6">
        <Breadcrumb.Item>
          <span className="text-black">Стройоптторг</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <span className="text-gray-400">Сравнение</span>
        </Breadcrumb.Item>
      </Breadcrumb>

      {/* Title */}
      <h2 className="text-3xl font-bold text-black sm:text-4xl mb-6">
        Сравнение
      </h2>

      {/* Select + Radio filter */}
      <div className="w-full max-w-xs">
        <Select
          value={selectedOption}
          onChange={(value) => setSelectedOption(value)}
          style={{ width: '100%', marginBottom: 16 }}
        >
          <Option value="Шуруповерты">Шуруповерты</Option>
          <Option value="Дрели">Дрели</Option>
          <Option value="Перфораторы">Перфораторы</Option>
        </Select>

        <Radio.Group
          onChange={(e) => setRadioValue(e.target.value)}
          value={radioValue}
          style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
        >
          <Radio value="all">Все характеристики</Radio>
          <Radio value="different">Только различия</Radio>
        </Radio.Group>
      </div>
    </div>
  );
};

export default Comparison;
