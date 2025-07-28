import React from 'react';
import {
  Select,
  Radio,
  Input,
  Checkbox,
  Button,
} from 'antd';
import { Link } from 'react-router-dom';
import { images } from '../assets/images';

const { Option } = Select;

const products = [
  {
    image: images.Comparison1,
    name: "Мато A",
    description: "Wander X645-46 GF 1450W",
    article: "XJ89YHGO",
    price: 7899
  },
  {
    image: images.Comparison2,
    name: "Мато B",
    description: "Hammer ZX-2000 Power",
    article: "JK77ZZQW",
    price: 20000
  },
  {
    image: images.Comparison3,
    name: "Мато C",
    description: "Bosch Proline Ultra",
    article: "GH55KLMN",
    price: 4756
  },
  {
    image: images.Comparison1,
    name: "Мато D",
    description: "Makita SpeedMaster",
    article: "TR44YUOP",
    price: 20000
  }
];

const Ordering: React.FC = () => {
  const total = products.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="min-h-screen bg-white p-4 md:p-10 flex flex-col lg:flex-row gap-10">
      {/* LEFT SIDE */}
      <div className="w-full lg:w-2/3 space-y-8">
        <div className="text-right text-sm">
          Уже есть аккаунт? <Link to="/my-account" className="text-blue-600">Войти</Link>
        </div>

        {/* DELIVERY */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 space-y-6">
          <h2 className="text-xl font-semibold">Доставка</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select defaultValue="Черкесский" className="w-full">
              <Option value="Черкесский">Городской округ Черкесский</Option>
            </Select>
            <Select defaultValue="Черкесск" className="w-full">
              <Option value="Черкесск">Черкесск</Option>
            </Select>
          </div>

          <Radio.Group defaultValue="pickup" className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <Radio.Button value="pickup" className="border p-4 rounded-md text-left h-full">
              <div className="font-medium mb-1">Самовывоз</div>
              <p className="text-sm text-gray-600">К вашему приезду заказ будет скомплектован и готов к выдаче.</p>
              <p className="text-sm text-gray-500 mt-1">г. Черкесск, ул. Октябрьская, д.301</p>
            </Radio.Button>
            <Radio.Button value="shop" className="border p-4 rounded-md text-left h-full">
              <div className="font-medium mb-1">Доставка магазина</div>
              <p className="text-sm text-gray-600">Если вам нужна будет доставка к определенному времени, то укажите это в поле для комментариев к заказу.</p>
            </Radio.Button>
            <Radio.Button value="cdek" className="border p-4 rounded-md text-left h-full">
              <div className="font-medium mb-1">СДЭК</div>
              <p className="text-sm text-gray-600">Доставка через сервис СДЭК до ПВЗ или курьером до двери.</p>
            </Radio.Button>
          </Radio.Group>
        </div>

        {/* PAYMENT */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 space-y-6">
          <h2 className="text-xl font-semibold">Оплата</h2>

          <Radio.Group defaultValue="card" className="space-y-2 flex flex-col">
            <Radio value="card">Картой на сайте</Radio>
            <Radio value="cash">Оплата в кассе</Radio>
            <Radio value="otp">
              Кредит от ОТП банка <a href="#" className="text-blue-600">Условия предоставления</a>
            </Radio>
            <Radio value="sber">
              Покупай со Сбером <a href="#" className="text-blue-600">Условия предоставления</a>
            </Radio>
          </Radio.Group>

          <div className="bg-gray-100 p-4 rounded text-sm text-gray-700">
            Есть промокод? <a href="#" className="text-blue-600 font-medium">Нажмите здесь, чтобы ввести его</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <Input placeholder="Ваше имя *" required />
            <Input placeholder="Фамилия *" required />
            <Input placeholder="Название компании" className="md:col-span-2" />
            <Input placeholder="Email *" />
            <Input placeholder="Номер телефона *" />
          </div>

          <Checkbox className="pt-4">Создать аккаунт</Checkbox>
          <Input.TextArea placeholder="Комментарий к заказу" rows={3} />
        </div>
      </div>

      {/* RIGHT SIDE: ORDER SUMMARY */}
      <div className="w-full lg:w-1/3">
        <div className="bg-white p-6 rounded-xl border border-gray-200 space-y-6">
          <h2 className="text-lg font-semibold">Ваш заказ</h2>

          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
            {products.map((product, idx) => (
              <div key={idx} className="flex justify-between items-start border-b pb-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-14 h-14 object-contain"
                />
                <div className="flex-1 px-3">
                  <div className="font-medium text-sm leading-tight">{product.name}</div>
                  <div className="text-xs text-gray-500">{product.description}</div>
                  <div className="text-xs text-gray-400">Артикул: {product.article}</div>
                </div>
                <div className="font-semibold whitespace-nowrap">
                  {product.price.toLocaleString()} ₽
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Сумма</span>
              <span className="font-semibold">{total.toLocaleString()} ₽</span>
            </div>
            <div className="flex justify-between">
              <span>Доставка</span>
              <span className="font-semibold">0 ₽</span>
            </div>
            <div className="flex justify-between text-base font-bold">
              <span>Итого</span>
              <span>{total.toLocaleString()} ₽</span>
            </div>
          </div>

          <Checkbox>
            Согласен с обработкой персональных данных в соответствии с политикой конфиденциальности
          </Checkbox>

          <Button type="primary" block size="large" className="mt-4">
            Оформить заказ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Ordering;
