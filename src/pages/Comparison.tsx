import React, { useState } from 'react';
import { Breadcrumb, Select, Radio, Button, Space, Typography } from 'antd';
import { ShoppingCartOutlined, HeartFilled, HeartOutlined } from '@ant-design/icons';
import { images } from '../assets/images';

const { Option } = Select;
const { Text, Title } = Typography;

const Comparison: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('Шуруповерты');
  const [radioValue, setRadioValue] = useState('different');

  const [liked1, setLiked1] = useState(false);
  const [liked2, setLiked2] = useState(false);
  const [liked3, setLiked3] = useState(false);

  return (
    <div className="p-6 mt-4">
      <Breadcrumb className="mb-6">
        <Breadcrumb.Item>Стройоптторг</Breadcrumb.Item>
        <Breadcrumb.Item className="text-gray-400">Сравнение</Breadcrumb.Item>
      </Breadcrumb>

      <h2 className="text-3xl font-bold mb-6">Сравнение</h2>

      <div className="w-full max-w-xs mb-6">
        <Select
          value={selectedOption}
          onChange={setSelectedOption}
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="flex flex-col items-center p-4 bg-white rounded-xl w-80 ">
          <div className="h-40 flex items-center justify-center">
            <img
              src={images.Сравнение1}
              alt="Product 1"
              className="h-40 object-contain"
            />
          </div>
          <div className="flex flex-col gap-2 mt-4 w-full">
            <Text type="secondary">Перфоратор универсальный</Text>
            <Title level={5} className="m-0">Wander X645-46 GF 1450W</Title>
            <Space size={4} align="baseline">
              <Text delete className="text-gray-500">15 999 ₽</Text>
              <Title level={4} className="m-0 text-red-500">12 789 ₽</Title>
            </Space>
            <div className="flex justify-between items-center mt-2 gap-2">
              <Button
                type="primary"
                icon={<ShoppingCartOutlined />}
                className="flex-1 mr-2"
              >
                Купить
              </Button>
              <button onClick={() => setLiked1(!liked1)} className="border border-gray-200 rounded-md p-1 text-2xl focus:outline-none">
                <span className={ `${liked1 ?  'flex align-center justify-center  text-red-500 animate-ping-short' : 'flex align-center justify-center text-gray-400'}`}>
           {liked1 ? (
  <HeartFilled className="text-lg " />
) : (
  <HeartOutlined className="text-lg" />
)}

                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center p-4 bg-white rounded-xl w-80 ">
          <div className="h-40 flex items-center justify-center">
            <img
              src={images.Сравнение1}
              alt="Product 2"
              className="h-40 object-contain"
            />
          </div>
          <div className="flex flex-col gap-2 mt-4 w-full">
            <Text type="secondary">Перфоратор универсальный</Text>
            <Title level={5} className="m-0">Wander X645-46 GF 1450W</Title>
            <Space size={4} align="baseline">
              <Text delete className="text-gray-500">15 999 ₽</Text>
              <Title level={4} className="m-0 text-red-500">12 789 ₽</Title>
            </Space>
            <div className="flex justify-between items-center mt-2">
              <Button
                type="primary"
                icon={<ShoppingCartOutlined />}
                className="flex-1 mr-2"
              >
                Купить
              </Button>
            <button onClick={() => setLiked2(!liked2)} className="border border-gray-200 rounded-md p-1 text-2xl focus:outline-none">
                <span className={ `${liked2 ?  'flex align-center justify-center  text-red-500 animate-ping-short' : 'flex align-center justify-center text-gray-400'}`}>
           {liked2 ? (
  <HeartFilled className="text-lg " />
) : (
  <HeartOutlined className="text-lg" />
)}

                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center p-4 bg-white rounded-xl w-80 ">
          <div className="h-40 flex items-center justify-center">
            <img
              src={images.Сравнение1}
              alt="Product 3"
              className="h-40 object-contain"
            />
          </div>
          <div className="flex flex-col gap-2 mt-4 w-full">
            <Text type="secondary">Перфоратор универсальный</Text>
            <Title level={5} className="m-0">Wander X645-46 GF 1450W</Title>
            <Space size={4} align="baseline">
              <Text delete className="text-gray-500">15 999 ₽</Text>
              <Title level={4} className="m-0 text-red-500">12 789 ₽</Title>
            </Space>
            <div className="flex justify-between items-center mt-2">
              <Button
                type="primary"
                icon={<ShoppingCartOutlined />}
                className="flex-1 mr-2"
              >
                Купить
              </Button>
              <button onClick={() => setLiked3(!liked3)} className="border border-gray-200 rounded-md p-1 text-2xl focus:outline-none">
                <span className={ `${liked3 ?  'flex align-center justify-center  text-red-500 animate-ping-short' : 'flex align-center justify-center text-gray-400'}`}>
           {liked3 ? (
  <HeartFilled className="text-lg " />
) : (
  <HeartOutlined className="text-lg" />
)}

                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
