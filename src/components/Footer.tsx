import React from 'react';
import { Button } from 'antd';
import {images} from "../assets/images";
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-10 px-4 sm:px-8 md:px-16">
   <div className="flex flex-col md:flex-row items-center justify-between w-full py-4 md:py-6 border-b border-gray-200 gap-4 md:gap-0">
  {/* Logo and Company Name - Left Side */}
  <div className="flex items-center gap-3">
    <img 
      src={images.logo2} 
      alt="Стройоптторг Logo" 
      className="w-12 h-12 md:w-14 md:h-14 object-contain" 
    />
    <span className="text-base font-semibold whitespace-nowrap">
      ООО «Стройоптторг»
    </span>
  </div>

  {/* Middle Section - Company Info */}
  <div className="order-last md:order-none flex flex-col sm:flex-row gap-3 md:gap-4 text-sm text-gray-600 text-center md:text-left">
    <p className="whitespace-nowrap">ИНН: 0901051787</p>
    <p className="whitespace-nowrap">КПП: 090101001</p>
    <p className="whitespace-nowrap">
      Email:{" "}
      <a 
        href="mailto:info@stroitoptorg.ru" 
        className="text-blue-600 hover:underline"
      >
        info@stroitoptorg.ru
      </a>
    </p>
  </div>

  {/* Right Side - Phone Number (vertical layout) */}
  <div className="flex flex-col items-end">
    <p className="text-lg font-semibold text-black whitespace-nowrap">
      8 800 444 00 65
    </p>
    <p className="text-xs md:text-sm text-gray-500 whitespace-nowrap">
      Ежедневно, с 8:00 до 18:00
    </p>
  </div>
</div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 py-10 border-b border-gray-300 text-sm">
        <div>
          <h4 className="font-semibold mb-3">Информация</h4>
          <ul className="space-y-1">
            <li><a href="#">О компании</a></li>
            <li><a href="#">Оплата</a></li>
            <li><a href="#">Доставка</a></li>
            <li><a href="#">Возврат</a></li>
            <li><a href="#">Отзывы</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 invisible sm:visible">.</h4>
          <ul className="space-y-1">
            <li><a href="#">Вопрос-ответ</a></li>
            <li><a href="#">Новости</a></li>
            <li><a href="#">Контакты</a></li>
            <li><a href="#">Вход / Регистрация</a></li>
            <li><a href="#">Все акции</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Каталог</h4>
          <ul className="space-y-1">
            <li><a href="#">Общестроительные материалы</a></li>
            <li><a href="#">Все для сауны и бани</a></li>
            <li><a href="#">Инструмент</a></li>
            <li><a href="#">Отделочные материалы</a></li>
            <li><a href="#">Товары для дома, сада и огорода</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 invisible sm:visible">.</h4>
          <ul className="space-y-1">
            <li><a href="#">Электротовары</a></li>
            <li><a href="#">Сантехника</a></li>
            <li><a href="#">Столярные изделия</a></li>
            <li><a href="#">Спецодежда и средства защиты</a></li>
            <li><a href="#">Метизы, такелаж и скобяные изделия</a></li>
          </ul>
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

        <div className="w-full max-w-md flex items-center gap-2">
          <p className=" text-[15px] ">Подпишитесь на рассылкуи будьте в курсе!</p>
          <input
            type="email"
            placeholder="Ваш email"
            className="flex-1 px-4  py-2 border border-gray-300 rounded focus:outline-none"
          />
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">→</button>
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
  );
};

export default Footer;
