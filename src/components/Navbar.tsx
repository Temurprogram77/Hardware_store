import { Link } from "react-router-dom";
import { images } from '../assets/images';

const { Logo } = images;
const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-between py-2 w-[1460px] mx-auto">
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
          <p className="text-[12px] font-medium">Ежедневно, с 8:00 до 18:00</p>
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
      <img src={Logo} alt="Logo" className="h-10" />
      <div className="flex justify-between"></div>
    </div>
  );
};

export default Navbar;
