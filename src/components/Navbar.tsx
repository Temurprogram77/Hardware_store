import { Link } from "react-router-dom";
import { images } from "../assets/images";

const { Logo, burger, search, user, compare, basket, heart, gift } = images;
const Navbar = () => {
  return (
    <div className="">
      <div className="border-b border-[#ebeef0]">
        <div className="flex flex-col max-w-[1460px] xl:mx-auto mx-3">
          <div className="flex justify-between py-2">
            <div className="flex items-center gap-5">
              <Link
                className="hover:text-[#186fd4] w-fit h-fit text-[12px]"
                to={"/about"}
              >
                О компании
              </Link>
              <Link
                className="hover:text-[#186fd4] w-fit h-fit text-[12px]"
                to={"/payment"}
              >
                Способы оплаты
              </Link>
              <Link
                className="hover:text-[#186fd4] w-fit h-fit text-[12px]"
                to={"/delivery"}
              >
                Доставка
              </Link>
              <Link
                className="hover:text-[#186fd4] w-fit h-fit text-[12px]"
                to={"/return"}
              >
                Возврат
              </Link>
              <Link
                className="hover:text-[#186fd4] w-fit h-fit text-[12px]"
                to={"/reviews"}
              >
                Отзывы
              </Link>
              <Link
                className="hover:text-[#186fd4] w-fit h-fit text-[12px]"
                to={"/q-and-a"}
              >
                Вопрос-ответ
              </Link>
              <Link
                className="hover:text-[#186fd4] w-fit h-fit text-[12px]"
                to={"/blog"}
              >
                Блог
              </Link>
              <Link
                className="hover:text-[#186fd4] w-fit h-fit text-[12px]"
                to={"/contacts"}
              >
                Контакты
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <p className="!m-0 text-[12px] font-medium">
                Ежедневно, с 8:00 до 18:00
              </p>
              <a
                href="#"
                className="text-[14px] font-semibold hover:text-[#186fd4]"
              >
                8 800 444 00 65
              </a>
              <div className="bg-[#f2f6fc] text-[#2a5e8d] duration-150 hover:bg-black hover:text-white rounded-sm cursor-pointer py-2.5 px-3 text-[11px] uppercase font-bold">
                Заказать звонок
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between py-6 max-w-[1460px] xl:mx-auto mx-3">
        <img src={Logo} alt="Logo" className="h-10" />
        <div className="bg-[#186fd4] hover:bg-black duration-200 cursor-pointer rounded-md px-5 py-4 text-white flex items-center gap-3 uppercase text-[12px] font-semibold">
          <img src={burger} alt="" />
          Каталог
        </div>
        <div className="flex p-[3px] rounded-md bg-[#186fd4]">
          <input
            className="bg-white w-[600px] px-3 rounded-sm outline-none text-[13px] placeholder:text-[13px]"
            type="text"
            placeholder="Найти среди 50000 товаров. Например: Дрель Bosch"
          />
          <div className="flex items-center px-4">
            <img src={search} alt="" />
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center gap-1 duration-200 cursor-pointer hover:text-[#186fd4]">
            <img src={gift} alt="gift" />
            <p className="!m-0 text-[12px] font-medium">Все акции</p>
          </div>
          <div className="flex flex-col items-center gap-1 duration-200 cursor-pointer hover:text-[#186fd4]">
            <img src={user} alt="user" />
            <p className="!m-0 text-[12px] font-medium">Войти</p>
          </div>
          <div className="flex flex-col items-center gap-1 duration-200 cursor-pointer hover:text-[#186fd4]">
            <img src={compare} alt="compare" />
            <p className="!m-0 text-[12px] font-medium">Сравнение</p>
          </div>
          <div className="flex flex-col items-center gap-1 duration-200 cursor-pointer hover:text-[#186fd4]">
            <img src={heart} alt="heart" />
            <p className="!m-0 text-[12px] font-medium">Избранное</p>
          </div>
          <div className="flex flex-col items-center gap-1 duration-200 cursor-pointer hover:text-[#186fd4]">
            <img src={basket} alt="basket" />
            <p className="!m-0 text-[12px] font-medium">Корзина</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
