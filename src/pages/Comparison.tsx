import React, { useState } from 'react';
import { Breadcrumb, Select, Radio, Button, Space, Typography } from 'antd';
import { ShoppingCartOutlined, HeartFilled, HeartOutlined } from '@ant-design/icons';
import { images } from '../assets/images';

const { Option } = Select;
const { Text, Title } = Typography;

const data = [
  ['Тип товара', 'Дрель-шуруповерт', 'Дрель-шуруповерт', 'Дрель-шуруповерт'],
  ['Бренд', 'РЕСАНТА', 'BOSCH', 'РЕСАНТА'],
  ['Назначение инструмента', 'профессиональный', 'бытовой', 'профессиональный'],
  ['Крутящий момент макс. (Н/м)', '2', '3', '2'],
  ['Емкость аккумуляторной батареи (А/ч)', '60', '80', '60'],
  ['Напряжение аккумулятора (В)', '24', '22', '24'],
  ['Цвет', 'серый', 'черный', 'серый'],
  ['Диаметр патрона мин. (мм)', '0,8', '0,6', '0,8'],
  ['Скорость вращения I (об/мин)', '10', '12', '10'],
  ['Скорость вращения II (об/мин)', '1400', '1800', '1400'],
  ['Диаметр сверления дерева макс. (мм)', '30', '22', '30'],
  ['Диаметр сверления металла макс. (мм)', '12', '12', '12'],
  ['Тип двигателя', 'щеточный', 'щеточный', 'щеточный'],
  ['Вес (кг)', '2,58', '1,72', '2,58'],
];

const Comparison: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('Шуруповерты');
  const [radioValue, setRadioValue] = useState('different');
  const [liked1, setLiked1] = useState(false);
  const [liked2, setLiked2] = useState(false);
  const [liked3, setLiked3] = useState(false);

  const products = [
    {
      image: images.Comparison1,
      title: 'Wander X645-46 GF 1450W',
      priceOld: '15 999 ₽',
      priceNew: '12 789 ₽',
      liked: liked1,
      setLiked: setLiked1,
    },
    {
      image: images.Comparison2,
      title: 'Wander X645-46 GF 1450W',
      priceOld: '15 999 ₽',
      priceNew: '12 789 ₽',
      liked: liked2,
      setLiked: setLiked2,
    },
    {
      image: images.Comparison3,
      title: 'Wander X645-46 GF 1450W',
      priceOld: '15 999 ₽',
      priceNew: '12 789 ₽',
      liked: liked3,
      setLiked: setLiked3,
    },
  ];

  const ProductCard = (product: any, index: number) => (
    <div key={index} className="flex flex-col items-center  p-4 rounded-xl w-72 bg-white shadow">
      <div className="h-40 flex items-center justify-center">
        <img src={product.image} alt={`Product ${index + 1}`} className="h-40 object-contain" />
      </div>
      <div className="flex flex-col gap-2 mt-4 w-full">
        <Title level={5} className="m-0">{product.title}</Title>
        <Space size={4} align="baseline">
          <Text delete className="text-gray-500">{product.priceOld}</Text>
          <Title level={4} className="m-0 text-red-500">{product.priceNew}</Title>
        </Space>
        <div className="flex justify-between items-center mt-2 gap-2">
          <Button
            type="primary"
            icon={<ShoppingCartOutlined />}
            className="flex-1 mr-2"
          >
            Подробнее
          </Button>
          <button
            onClick={() => product.setLiked(!product.liked)}
            className="border border-gray-200 rounded-md p-1 text-2xl focus:outline-none"
          >
            <span className={`${product.liked ? 'text-red-500 animate-ping-short' : 'text-gray-400'}`}>
              {product.liked ? <HeartFilled className="text-lg" /> : <HeartOutlined className="text-lg" />}
            </span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-[1460px] mx-auto  py-6">
  {/* Breadcrumb */}
  <div className="mb-8">
    <Breadcrumb>
      <Breadcrumb.Item>Стройоптторг</Breadcrumb.Item>
      <Breadcrumb.Item>Сравнение</Breadcrumb.Item>
    </Breadcrumb>
    <h2 className="text-3xl font-bold mt-2">Сравнение</h2>
  </div>

  {/* Filters */}
       <div className="flex !flex-col  sm:flex-row max-sm:items-center gap-4 mb-8">
        <Select
          value={selectedOption}
          onChange={setSelectedOption}
          style={{ width: 200 }}
        >
          <Option value="Шуруповерты">Шуруповерты</Option>
          <Option value="Дрели">Дрели</Option>
          <Option value="Перфораторы">Перфораторы</Option>
        </Select>

        <Radio.Group
          onChange={(e) => setRadioValue(e.target.value)}
          value={radioValue}
        >
          <Radio value="all">Все характеристики</Radio>
          <br />
          <Radio value="different">Только различия</Radio>
        </Radio.Group>
      </div>


  <div className="w-full overflow-x-auto mb-10">
    <div className="flex gap-4 sm:justify-center sm:ml-120 flex-nowrap sm:flex-wrap">
      {products.map((p, i) => ProductCard(p, i))}
    </div>
  </div>

  <div className="overflow-x-auto">
    <table className="min-w-full text-sm text-left text-gray-700 bg-white border border-gray-200 rounded-lg">
      <thead className="bg-gray-100 font-semibold">
        <tr>
          {data[0].map((header, idx) => (
            <th key={idx} className="px-4 py-3 border border-gray-200 whitespace-nowrap">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.slice(1).map((row, rowIndex) => (
          <tr key={rowIndex} className="hover:bg-gray-50 transition">
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="px-4 py-3 border border-gray-200 whitespace-nowrap">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

  );
};

export default Comparison;
