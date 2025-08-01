import { Breadcrumb, Button, Tooltip, Input } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Basket = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Перфоратор универсальный Wander X645-46 GF 1450W',
      price: 7899,
      quantity: 1,
      article: 'Х.089YHGO',
    },
    {
      id: 2,
      name: 'Перфоратор универсальный Wander X645-46 GF 1450W',
      price: 10899,
      quantity: 1,
      article: 'Х.089YHGO',
    },
    {
      id: 3,
      name: 'Перфоратор универсальный Wander X645-46 GF 1450W',
      price: 4756,
      quantity: 1,
      article: 'Х.089YHGO',
    },
  ]);

  const increaseQuantity = (id: number) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id: number) => {
    setCartItems(cartItems.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const currentCartValue = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const thresholds = [
    { amount: 3000, discount: 5 },
    { amount: 7000, discount: 10 },
    { amount: 20000, discount: 15 },
  ];

  const nextThreshold = thresholds.find(t => currentCartValue < t.amount);
  const amountNeeded = nextThreshold ? nextThreshold.amount - currentCartValue : 0;
  const nextDiscount = nextThreshold ? nextThreshold.discount : 0;
  const currentDiscount = thresholds
    .filter(t => currentCartValue >= t.amount)
    .reduce((max, t) => Math.max(max, t.discount), 0);

  const discountedTotal = currentCartValue - (currentCartValue * currentDiscount) / 100;

  return (
    <div className="max-w-[1460px] mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Breadcrumb>
          <Breadcrumb.Item>Стройоптторг</Breadcrumb.Item>
          <Breadcrumb.Item>Корзина товаров</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">Корзина товаров</h2>
      </div>

      {/* Grid: Tovarlar + Итог */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Block */}
        <div className="md:col-span-2">
          {/* Discount Info */}
          <div className="mb-6 p-4 border border-gray-200 rounded-xl bg-white shadow-sm">
            <p>Ваша скидка от суммы заказа: {((currentCartValue * currentDiscount) / 100).toLocaleString('ru-RU')} ₽</p>
            <div className="bg-gray-200 rounded-full h-3 mt-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-500 to-blue-400 h-full rounded-full"
                style={{ width: `${Math.min(currentCartValue / 20000 * 100, 100)}%` }}
              ></div>
            </div>
            {nextThreshold && (
              <p className="py-4 text-sm">
                Добавьте товаров на {amountNeeded.toLocaleString('ru-RU')} ₽ и получите скидку {nextDiscount}%{" "}
                <Tooltip
                  title={
                    <div className="text-white text-sm max-w-[360px]">
                      <p className="font-medium mb-1">Скидки по порогам:</p>
                      <ul>
                        {thresholds.map((t, idx) => (
                          <li key={idx}>
                            от {t.amount.toLocaleString('ru-RU')} ₽ — <b>-{t.discount}%</b>
                          </li>
                        ))}
                      </ul>
                    </div>
                  }
                  placement="top"
                  overlayInnerStyle={{ padding: 12, backgroundColor: '#1f2937', borderRadius: 8 }}
                >
                  <span className="ml-4 text-[#117fe3] hover:text-white bg-[#f6f8fb] hover:bg-[#011120] px-2 py-1 rounded cursor-pointer">
                    Информация о скидках
                  </span>
                </Tooltip>
              </p>
            )}
          </div>

          {/* Products Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b font-semibold text-sm">
              <div className="col-span-5">ТОВАР</div>
              <div className="col-span-2 text-center">ЦЕНА</div>
              <div className="col-span-2 text-center">КОЛ-ВО</div>
              <div className="col-span-2 text-center">СУММА</div>
              <div className="col-span-1"></div>
            </div>

            {cartItems.map((item) => (
              <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-b text-sm">
                <div className="md:col-span-5">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-500 text-xs">Артикул: {item.article}</p>
                </div>

                <div className="md:col-span-2 text-center">
                  <span className="block md:hidden font-semibold">Цена:</span>
                  {item.price.toLocaleString('ru-RU')} ₽
                </div>

                <div className="md:col-span-2 text-center">
                  <span className="block md:hidden font-semibold mb-1">Кол-во:</span>
                  <div className="flex md:flex-row flex-col gap-1 items-center justify-center">
                    <button
                      className="w-8 h-8 rounded-full bg-gray-300   flex items-center justify-center"
                      onClick={() => decreaseQuantity(item.id)}
                    >-</button>
                    <span className="w-10 h-8 flex items-center justify-center font-medium">{item.quantity}</span>
                    <button
                      className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center"
                      onClick={() => increaseQuantity(item.id)}
                    >+</button>
                  </div>
                </div>

                <div className="md:col-span-2 text-center font-semibold">
                  <span className="block md:hidden font-semibold">Сумма:</span>
                  {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                </div>

                <div className="md:col-span-1 flex justify-end items-start">
                  <button
                    className="text-gray-400 hover:text-red-500"
                    onClick={() => removeItem(item.id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}

            <div className="p-4 flex justify-end border-t font-semibold">
              Итого: {currentCartValue.toLocaleString('ru-RU')} ₽
            </div>
          </div>
        </div>

        {/* Right: Итог */}
        <div className="w-full md:w-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 w-full">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Итого</h3>

            <div className="flex justify-between mb-2 text-sm text-gray-600">
              <span>Скидка по промокоду</span>
              <span>0 ₽</span>
            </div>

            <div className="flex justify-between mb-3 text-sm text-gray-600">
              <span>Скидка от суммы</span>
              <span>{((currentCartValue * currentDiscount) / 100).toLocaleString('ru-RU')} ₽</span>
            </div>

            <div className="flex justify-between items-center py-3 border-t border-b border-gray-200 mb-4">
              <span className="font-semibold">Сумма</span>
              <span className="text-[#003b73] text-xl font-bold">{discountedTotal.toLocaleString('ru-RU')} ₽</span>
            </div>

           <div className='mb-4'> <Input placeholder="Промокод" size="large" className=" rounded" /></div>
           <div className='mb-2'>
            <Button
              type="default"
              className="bg-[#f6f8fb]  hover:bg-gray-100 text-gray-800 w-full py-2 mb-3"
            >
              Применить промокод
            </Button>
           </div>
            
          <Link to="/checkout">
  <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
    ПЕРЕЙТИ К ОФОРМЛЕНИЮ
  </button>
</Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
