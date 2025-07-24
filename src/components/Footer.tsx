import React from 'react';
import { Button } from 'antd';
import {images} from "../assets/images";
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { IoSend } from "react-icons/io5";
const footer: React.FC = () => {
  return (
  <div className="bg-gray-100">
  <footer className=" text-gray-700 pt-10 px-4 sm:px-8 md:px-16 container mx-auto lg:px-8">
   <div className="flex flex-col md:flex-row items-center justify-between w-full py-4 md:py-6 border-b border-gray-200 gap-4 md:gap-0">
  {/* Logo and Company Name - Left Side */}
  <div className="flex items-center gap-3">
<img 
  src={images.logo2} 
  alt="Стройоптторг Logo" 
  className="md:w-[200px] md:h-[40px] object-contain max-w-none"
/>



    <span className="text-sm font-semibold whitespace-nowrap">
      ООО «Стройоптторг»
    </span>
  </div>

  <div className="order-last md:order-none flex flex-col   sm:flex-row gap-3 md:gap-4 text-sm text-gray-600 text-center md:text-left">
    <p className="whitespace-nowrap sm:flex hidden relative -left-10">ИНН: 0901051787 <br />
      ОГРН: 117090000000
    </p>
    
    <p className=" relative -right-27">
      Email:{" "} <br />
      <a 
        href="mailto:info@stroitoptorg.ru" 
        className="text-blue-600 hover:underline"
      >
        info@stroitoptorg.ru
      </a>
    </p>
  </div>

  <div className="flex flex-col items-end">
    <p className="text-sm font-semibold text-black whitespace-nowrap relative -right-20">
   <span className='hover:text-blue-600'>8 800 444 00 65 </span>
  <br />
  <span className='text-xs md:text-sm text-gray-500 whitespace-nowrap'>Ежедневно, с 8:00 до 18:00</span>

    </p>
  </div>
  <div>
<Button type="default" className='hover:bg-red-600'  danger>
  ЗАКАЗАТЬ ЗВОНОК
</Button>

  </div>
</div>

  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-gray-100 text-gray-800 border-t border-gray-300 py-10 px-4">
        {/* Column 1 - Информация */}
      {/* Column 1 - Информация */}
<div>
  <h3 className="text-lg font-semibold mb-4">Информация</h3>
  <ul className="space-y-2 text-sm">
    <li>О компании</li>
    <li>Как купить</li>
    <li>Способы оплаты</li>
    <li>Доставка</li>
    <li>Возврат</li>
    <li>Отзывы</li>
    <li>Юридическим лицам</li>
  </ul>
  <hr className="border-t border-gray-300 my-4" />
</div>

{/* Column 2 */}
<div>
  <h3 className="text-lg font-semibold mb-4 invisible lg:visible">&nbsp;</h3>
  <ul className="space-y-2 text-sm">
    <li>Карта сайта</li>
    <li>Вопрос-ответ</li>
    <li>Блог</li>
    <li>Контакты</li>
    <li>Вход \ Регистрация</li>
    <li>Все акции</li>
  </ul>
  <hr className="border-t border-gray-300 my-4" />
</div>

{/* Column 3 - Каталог */}
<div>
  <h3 className="text-lg font-semibold mb-4">Каталог</h3>
  <ul className="space-y-2 text-sm">
    <li>Инструмент</li>
    <li>Товары для дома, сада и огорода</li>
    <li>Метизные, такелажные и скобяные изделия</li>
    <li>Сантехника</li>
  </ul>
  <hr className="border-t border-gray-300 my-4" />
</div>

{/* Column 4 */}
<div>
  <h3 className="text-lg font-semibold mb-4 invisible lg:visible">&nbsp;</h3>
  <ul className="space-y-2 text-sm">
    <li>Спецодежда и средства индивидуальной и пожарной защиты</li>
    <li>Столярные изделия</li>
    <li>Всё для сауны и бани</li>
    <li>Общестроительные материалы</li>
    <li>Электротовары</li>
    <li>Водо-газоснабжение, отопление, вентиляция</li>
  </ul>
  <hr className="border-t border-gray-300 my-4" />
</div>
</div>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-8 gap-8">
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-sm grayscale contrast-0 ">Мы принимаем <br /> к оплате:</span>
          <div className='flex items-center gap-7 relative left-'>
          <img src={images.visa} alt="Visa" className="w-13 grayscale contrast-0 cursor-pointer hover: transition duration-300" />
          <img src={images.v} alt="MasterCard" className="w-13 grayscale contrast-0" />
          <img src={images.mir} alt="MIR" className="w-13 grayscale contrast-0" />
          <img src={images.xalva} alt="Halva" className="w-13 grayscale contrast-0" />
          <img src={images.tinkoff} alt="Tinkoff" className="w-13 grayscale contrast-0" />
          </div>
        </div>

        <div className="w-full max-w-xl flex items-center justify-center gap-2">
          <p className="w-[350px] text-[15px] ">Подпишитесь на рассылкуи будьте в курсе!</p>
 <div className="relative w-full max-w-md">
      <Input
        className="w-full h-12 pr-12 pl-4 py-2 border border-gray-300 rounded-lg hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
        placeholder="Ваш email"
      />
      <button
        type="submit"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-500 hover:text-blue-700"
      >
        <IoSend size={20} />
      </button>
    </div>

        </div>
      </div>

      <div className="text-center text-xs text-gray-500 border-t border-gray-200 pt-6 pb-10">
        <p>
          © 2003–2023 Интернет-магазин ООО «Стройоптторг» — р/с 40702810360000102415
        </p>
        <p>
          в Ставропольское отделение №5230 ПАО Сбербанк, БИК 040702615
        </p>
        <p className="mt-2">
          <a href="#" className="text-gray-600 hover:text-blue-600">Политика конфиденциальности</a>
        </p>
      </div>
    </footer>
    </div>
  );
};

export default footer;
