import { Link } from "react-router-dom";
import { images } from "../assets/images";

const { Logo, burger, search, user, compare, basket, heart, gift, menu } =
  images;
const Navbar = () => {
  return (
    <div className="xl:m-0 mb-5">
      <div className="border-b border-[#ebeef0]">
        <div className="flex flex-col max-w-[1460px] 2xl:mx-auto mx-3">
          <div className="flex justify-between py-2">
            <div className="lg:flex hidden items-center gap-5">
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
            <div className="lg:hidden flex items-center gap-3">
              <img src={menu} alt="menu" className="w-[20px]" />
              <p className="!m-0 sm:flex hidden">Меню</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="!m-0 sm:flex hidden text-[12px] font-medium">
                Ежедневно, с 8:00 до 18:00
              </p>
              <a
                href="#"
                className="sm:text-[14px] text-[16px] font-semibold hover:text-[#186fd4]"
              >
                8 800 444 00 65
              </a>
              <div className="bg-[#f2f6fc] text-[#2a5e8d] duration-150 hover:bg-black hover:text-white rounded-sm cursor-pointer py-2.5 px-3 sm:text-[11px] text-[12px] uppercase font-bold">
                Заказать звонок
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between py-4 max-w-[1460px] 2xl:mx-auto mx-3 gap-4">
        <div className="flex-shrink-0">
          <img
            src={Logo}
            alt="Logo"
            className="h-8 md:h-10 xl:w-40 2xl:w-40 object-contain"
          />
        </div>

        <div className="flex-1 min-w-[300px] md:min-w-[500px] lg:flex lg:gap-6 hidden">
          <div className="bg-[#186fd4] hover:bg-black duration-200 cursor-pointer rounded-md px-4 py-3 text-white flex items-center gap-2 uppercase text-[12px] font-semibold">
            <img src={burger} alt="menu" className="w-4 h-4" />
            Каталог
          </div>

          <div className="flex flex-1 p-[3px] rounded-md bg-[#186fd4]">
            <input
              type="text"
              placeholder="Найти среди 50000 товаров. Например: Дрель Bosch"
              className="bg-white w-full px-3 py-2 rounded-sm outline-none text-[13px] placeholder:text-[13px]"
            />
            <div className="flex items-center px-4">
              <img src={search} alt="search" className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          <div className="hidden sm:flex flex-col items-center gap-1 cursor-pointer hover:text-[#186fd4] transition">
            <img src={gift} alt="gift" className="w-5 h-4" />
           <Link to={'/stock'}> <p className="text-[12px] !m-0 font-medium">Все акции</p></Link>
          </div>

          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#186fd4] transition">
            <img src={user} alt="user" className="w-5 h-4" />
            <p className="hidden !m-0 sm:block text-[12px] font-medium">Войти</p>
          </div>

          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#186fd4] transition">
            <img src={compare} alt="compare" className="w-5 h-4" />
            <p className="hidden !m-0 sm:block text-[12px] font-medium">Сравнение</p>
          </div>

          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#186fd4] transition">
            <img src={heart} alt="heart" className="w-5 h-4" />
            <p className="hidden !m-0 sm:block text-[12px] font-medium">Избранное</p>
          </div>

          <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#186fd4] transition">
            <img src={basket} alt="basket" className="w-5 h-4" />
            <p className="hidden !m-0 sm:block text-[12px] font-medium">Корзина</p>
          </div>
        </div>
      </div>
      <div className="max-w-[1460px] flex lg:hidden items-center gap-2 xl:mx-auto mx-3">
        <div className=" bg-[#186fd4] hover:bg-black duration-200 cursor-pointer rounded-md pl-4 pr-8 py-3.5 text-white flex items-center gap-3 uppercase text-[12px] font-semibold">
          <img src={burger} alt="" />
          Каталог
        </div>
        <div className="w-full flex p-[3px] rounded-md bg-[#186fd4]">
          <input
            className="w-full bg-white px-3 py-2 rounded-sm outline-none text-[13px] placeholder:text-[13px]"
            type="text"
            placeholder="Поиск..."
          />
          <div className="flex items-center md:px-4 px-3">
            <img src={search} alt="search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
