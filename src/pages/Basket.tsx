import { Breadcrumb, Button,  Tooltip, Input  } from 'antd';
import { useState } from 'react';
import {  } from 'antd';

const Basket = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Перфоратор универсальный Wander X645-46 GF 1450W',
      price: 7899,
      quantity: 1,
      article: 'Х.089YHGO'
    },
    {
      id: 2,
      name: 'Перфоратор универсальный Wander X645-46 GF 1450W',
      price: 10899,
      quantity: 1,
      article: 'Х.089YHGO'
    },
    {
      id: 3,
      name: 'Перфоратор универсальный Wander X645-46 GF 1450W',
      price: 4756,
      quantity: 1,
      article: 'Х.089YHGO'
    },
    {
      id: 4,
      name: 'Перфоратор универсальный Wander X645-46 GF 1450W',
      price: 10899,
      quantity: 1,
      article: 'Х.089YHGO'
    }
  ]);

  // Miqdorni oshirish funksiyasi
  const increaseQuantity = (id: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Miqdorni kamaytirish funksiyasi
  const decreaseQuantity = (id: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  // Mahsulotni o'chirish funksiyasi
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Umumiy summani hisoblash
  const currentCartValue = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Chegirma ma'lumotlari
  const thresholds = [
    { amount: 3000, discount: 5 },
    { amount: 7000, discount: 10 },
    { amount: 20000, discount: 15 },
  ];

  // Chegirma hisoblash
  const nextThreshold = thresholds.find(t => currentCartValue < t.amount);
  const amountNeeded = nextThreshold ? nextThreshold.amount - currentCartValue : 0;
  const nextDiscount = nextThreshold ? nextThreshold.discount : 0;
  const currentDiscount = thresholds
    .filter(t => currentCartValue >= t.amount)
    .reduce((max, t) => Math.max(max, t.discount), 0);

  return (
    <div className="max-w-[1460px] mx-auto py-6 px-4">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Breadcrumb>
          <Breadcrumb.Item>Стройоптторг</Breadcrumb.Item>
          <Breadcrumb.Item>Корзина товаров</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="text-3xl font-bold mt-2">Корзина товаров</h2>
      </div>

      {/* Chegirma bloki */}
      <div className="w-[1000px] -ml-0  mx-auto my-5 p-5 border border-gray-200 rounded-xl bg-white shadow-sm">
    <p>Ваша скидка от суммы заказа: 320 ₽</p>
    <div className="w-[950px] bg-gray-200 rounded-full h-3 overflow-hidden">
  <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-full rounded-full w-[80%]" ></div>
</div>


<p className="py-6">
  Добавьте в корзину товаров на {amountNeeded.toLocaleString('ru-RU')} ₽ и получите скидку {nextDiscount}%{" "}
<Tooltip
  title={
    <div className="text-white text-sm max-w-[360px]">
      <p className="font-medium mb-1">Сейчас у нас действуют следующие пороги:</p>
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center gap-1">
          <span className="font-semibold">от 3 000 ₽</span>
          <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded">-5%</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="font-semibold">от 7 000 ₽</span>
          <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded">-10%</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="font-semibold">от 20 000 ₽</span>
          <span className="bg-pink-500 text-white text-xs px-2 py-0.5 rounded">-15%</span>
        </div>
      </div>
    </div>
  }
  placement="top"
  overlayInnerStyle={{
    padding: 12,
    backgroundColor: '#1f2937',
    borderRadius: 8,
  }}
>
  <span className="ml-10 bg-[#f6f8fb] hover:bg-[#011120] hover:text-white text-[#117fe3] px-2 py-1 rounded cursor-pointer">
    Информация о скидках от суммы корзины
  </span>
</Tooltip>


  
</p>

      </div>

      {/* Mahsulotlar jadvali */}
      <div className="bg-white w-[1000px] rounded-lg shadow overflow-hidden mt-8">
        <div className="grid grid-cols-12 gap-4 p-4 border-b font-semibold">
          <div className="col-span-5">ТОВАР</div>
          <div className="col-span-2 text-center">ЦЕНА</div>
          <div className="col-span-2 text-center">КОЛИЧЕСТВО</div>
          <div className="col-span-2 text-center">СУММА</div>
          <div className="col-span-1"></div>
        </div>

        {cartItems.map((item) => (
          <div key={item.id} className="grid grid-cols-12 gap-4 p-4 border-b">
            <div className="col-span-5">
              <p className="font-medium">{item.name}</p>
              <p className="text-gray-500 text-sm">Артикул: {item.article}</p>
            </div>
            <div className="col-span-2 text-center">
              {item.price.toLocaleString('ru-RU')} ₽
            </div>
            <div className="col-span-2  text-center">
              <div className="flex gap-1     items-center justify-center">
                <div className='hover:text-white'>
                     <button 
                  className="w-15 h-8  rounded-full flex items-center justify-center  bg-gray-300 hover:bg-[#011120] "
                  onClick={() => decreaseQuantity(item.id)}
                >
                  -
                </button>
                </div>
             
                <span className="w-10 h-8  flex items-center justify-center">
                  {item.quantity}
                </span>
                <div className='hover:text-white '> 
                 <button 
                  className="w-15 h-8  rounded-full flex items-center justify-center hover:bg-[#011120] bg-gray-300"
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>
                </div>
               
              </div>
            </div>
            <div className="col-span-2 text-center font-medium">
              {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
            </div>
            <div className="col-span-1 flex justify-end">
              <button 
                className="text-gray-400 hover:text-red-500"
                onClick={() => removeItem(item.id)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        ))}

        {/* Umumiy summa */}
        <div className="p-4 flex justify-end border-t">
          <div className="text-lg font-semibold">
            Итого: {currentCartValue.toLocaleString('ru-RU')} ₽
          </div>
        </div>
      </div>
      
<div className="max-w-md mx-auto bg-white  rounded-2xl shadow-lg p-6 border border-gray-200">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Итого</h3>
      
      <div className="flex justify-between mb-3">
        <span className="text-gray-600">Скидка по промокоду</span>
        <span>0</span>
      </div>
      
      <div className="flex justify-between mb-3">
        <span className="text-gray-600">Скидка от суммы заказа</span>
        <span>320 ₽</span>
      </div>
      
      <div className="flex justify-between items-center mb-6 py-3 border-t border-b border-gray-200">
        <span className="font-semibold">Сумма</span>
        <span className="text-[#003b73] text-xl font-bold">6 080 ₽</span>
      </div>
      
      <div className="mb-4">
        <Input 
          size="large" 
          placeholder="Промокод" 
          className="mb-2"
        />
        
      </div>
     <div className="flex flex-col gap-4"> {/* Tugmalar orasida 1rem (16px) joy */}
  <Button type='default' className='bg-[#f6f8fb] text-center w-full py-3 '>
    Применить промокод
  </Button>
  <button className="w-full py-3 bg-blue-600 hover:bg-black rounded-lg transition">
    <span className='text-white'>ПЕРЕЙТИ К ОФОРМЛЕНИЮ</span>
  </button>
</div>
    </div>
    </div>
  );
};

export default Basket;  