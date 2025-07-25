import { Link } from "react-router-dom";
import { images } from "../assets/images";
import { useModal } from "../context/ModalContext";
import { useSidebar } from "../context/SideBarContext";
import { motion, AnimatePresence } from "framer-motion";

const {
  Logo,
  burger,
  search,
  user,
  compare,
  basket,
  heart,
  gift,
  menu,
  close,
  closeSidebar,
} = images;

const sideBar = [
  {
    name: "Вентиляция",
    obj: ["Вентиляторы", "Воздуховоды", "Люки и дверцы"],
  },
  {
    name: "Водо-газоснабжение",
    obj: [
      "Баки для воды",
      "Водосчетчики",
      "Газовые счетчики",
      "Запорная арматура и доборные элементы",

      "Канализационные трубы и фитинги",

      "Манометры",
      "Насосы",

      "Поплавки для ёмкости",
      "Станции водоснабжения",
      "Термометры",
      "Трубы полиэтиленовые вода,газ",
      "Фитинги полиэтиленовые вода,газ",
      {
        obj: [
          [
            "Асбокартон",
            "Вентиля",
            "Вставки диэлектрические",
            "Группа безопасности, редуктора давления ",
            "Заглушки запорные",
            "Задвижки, затворы ",
            "Запорная арматура прочие Клапаны ",
            "КТЗ Клапаны обратные",
            " Клапаны радиаторные",
            "Компенсаторы",
            "Контргайки",
            "Краны",
            "Лён",
            "Лента-фум",
            " Муфты",
            "Нить",
            "Отводы",
            "Паронит",
            "Переходы",
            "Подводка",
            "Прокладки рез. и поронит ",
            "Резьбы",
            "Сантехгель",
            "Сгоны",
            "Тройники",
            "Удлинители",
            "Фильтры чугунные ",
            "Фланцы",
            "Хомуты",
            "Штуцеры",
            "Эл.соединение Энергофлекс",
          ],
          ["Канализационные трубы ", "Фитинги для канализационных труб"],
          [
            "Блоки автоматики",
            "Насосы вибрационные",
            "Насосы дренажные",
            "Насосы канализационные",
            "Насосы поверхностные",
            "Насосы скважинные",
            "Насосы фекальные",
            "Насосы циркуляционные",
          ],
        ],
      },
    ],
  },
  {
    name: "Всё для сауны и бани",
    obj: [
      "Аксессуары для бани",
      "Двери, окна и бондарные изделия",
      "Комплектующие к дымоходам",
      "Печи банные",
    ],
  },
  {
    name: "Инструмент",
    obj: [
      "Ручной инструмент",
      "Строительное оборудование",
      "Штукатурно-отделочные инструменты",
      "Электроинструмент",
    ],
  },
  {
    name: "Листовой материал",
    obj: [
      "Ручной инструмент",
      "Строительное оборудование",
      "Штукатурно-отделочные инструменты",
      "Электроинструмент",
    ],
  },
  {
    name: "Метизные,такелажные и скобяные изделия",
    obj: [
      "Ручной инструмент",
      "Строительное оборудование",
      "Штукатурно-отделочные инструменты",
      "Электроинструмент",
    ],
  }
];

const Navbar: React.FC = () => {
  const {
    modalIsOpen,
    modalOpenModal,
    modalCloseModal,
    openModal,
    closeModal,
    isOpen,
  } = useModal();
  const { sideBarIsOpen, toggleSidebar } = useSidebar();
  return (
    <div className="xl:m-0 mb-5">
      <div className="border-b border-[#ebeef0]">
        <div className="flex flex-col max-w-[1460px] 2xl:mx-auto mx-3">
          <div className="flex justify-between py-2">
            <div className="lg:flex hidden items-center gap-5">
              <Link
                className="hover:text-[#186fd4] w-fit h-fit text-[12px]"
                to="/about"
              >
                О компании
              </Link>
              <Link
                className="hover:text-[#186fd4] w-fit h-fit text-[12px]"
                to="/payment"
              >
                Способы оплаты
              </Link>
              <Link
                className="hover:text-[#186fd4] w-fit h-fit text-[12px]"
                to="/delivery"
              >
                Доставка
              </Link>
              <Link
                className="hover:text-[#186fd4] w-fit h-fit text-[12px]"
                to="/return"
              >
                Возврат
              </Link>
              <Link
                className="hover:text-[#186fd4] w-fit h-fit text-[12px]"
                to="/reviews"
              >
                Отзывы
              </Link>
              <Link
                className="hover:text-[#186fd4] w-fit h-fit text-[12px]"
                to="/q-and-a"
              >
                Вопрос-ответ
              </Link>
              <Link
                className="hover:text-[#186fd4] w-fit h-fit text-[12px]"
                to="/blog"
              >
                Блог
              </Link>
              <Link
                className="hover:text-[#186fd4] w-fit h-fit text-[12px]"
                to="/contacts"
              >
                Контакты
              </Link>
            </div>
            <div
              className="lg:hidden flex items-center gap-3"
              onClick={openModal}
            >
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
              <div
                onClick={modalOpenModal}
                className="bg-[#f2f6fc] text-[#2a5e8d] duration-150 hover:bg-black hover:text-white rounded-sm cursor-pointer py-2.5 px-3 sm:text-[11px] text-[12px] uppercase font-bold"
              >
                Заказать звонок
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalIsOpen ? (
        <>
          <div
            onClick={modalCloseModal}
            className="w-full h-full bg-[#011120cc] fixed z-2 top-0 left-0"
          ></div>
          <img src={close} alt="close" className="fixed z-20 top-6 right-6" />
          <div className="flex flex-col w-[600px] bg-[#fff] p-8 rounded-xl z-2 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-[30px] !font-semibold text-center">
              Заказать обратный звонок
            </h2>
            <label htmlFor="inp1">Ваше имя *:</label>
            <input
              id="inp1"
              type="text"
              className="px-3 py-4 rounded-md text-[12px] placeholder:text-[13px] !font-medium text-[#2c333d] placeholder:text-[#2c333d] border-1 border-[#ebeef0] lg:w-full"
              placeholder="Как к вам обращаться?"
            />
            <label htmlFor="inp2">Номер телефона </label>
            <input
              id="inp2"
              type="text"
              className="px-3 py-4 rounded-md text-[12px] placeholder:text-[13px] !font-medium text-[#2c333d] placeholder:text-[#2c333d] border-1 border-[#ebeef0] lg:w-full"
              placeholder="+7 (___) ___-__-__"
            />
          </div>
        </>
      ) : (
        ""
      )}

      {isOpen ? (
        <>
          <div
            onClick={closeModal}
            className="w-full h-full bg-[#000000be] fixed z-2 top-0 left-0"
          ></div>
          <div className="w-[90%] h-full p-4 bg-[#fff] fixed z-2 top-0 left-0">
            <h2 className="text-[18px] !font-semibold">Меню</h2>
            <div
              onClick={closeModal}
              className="absolute right-4 top-4 rounded-md bg-[#F2F6FC] p-2"
            >
              <img src={close} alt="close" />
            </div>
            <Link to={"/stock"}>
              <div className="py-4 border-t border-[#EBEEF0]">
                <p className="!m-0 flex items-center gap-3 hover:text-[#186fd4]">
                  <img src={gift} className="w-[25px]" alt="gift" /> Все акции
                </p>
              </div>
            </Link>
            <Link to={"/about"}>
              <div className="py-4 border-t border-[#EBEEF0]">
                <p className="!m-0 flex items-center gap-3 hover:text-[#186fd4]">
                  О компании
                </p>
              </div>
            </Link>
            <Link to={"/payment"}>
              <div className="py-4 border-t border-[#EBEEF0]">
                <p className="!m-0 flex items-center gap-3 hover:text-[#186fd4]">
                  Оплата
                </p>
              </div>
            </Link>
            <Link to={"/delivery"}>
              <div className="py-4 border-t border-[#EBEEF0]">
                <p className="!m-0 flex items-center gap-3 hover:text-[#186fd4]">
                  Доставка
                </p>
              </div>
            </Link>
            <Link to={"/return"}>
              <div className="py-4 border-t border-[#EBEEF0]">
                <p className="!m-0 flex items-center gap-3 hover:text-[#186fd4]">
                  Возврат
                </p>
              </div>
            </Link>
            <Link to={"/reviews"}>
              <div className="py-4 border-t border-[#EBEEF0]">
                <p className="!m-0 flex items-center gap-3 hover:text-[#186fd4]">
                  Отзывы
                </p>
              </div>
            </Link>
            <Link to={"/q-and-a"}>
              <div className="py-4 border-t border-[#EBEEF0]">
                <p className="!m-0 flex items-center gap-3 hover:text-[#186fd4]">
                  Вопрос-ответ
                </p>
              </div>
            </Link>
            <Link to={"/blog"}>
              <div className="py-4 border-t border-[#EBEEF0]">
                <p className="!m-0 flex items-center gap-3 hover:text-[#186fd4]">
                  Новости
                </p>
              </div>
            </Link>
            <Link to={"/contacts"}>
              <div className="py-4 border-t border-b border-[#EBEEF0]">
                <p className="!m-0 flex items-center gap-3 hover:text-[#186fd4]">
                  Контакты
                </p>
              </div>
            </Link>
            <div className="flex justify-between items-center my-6">
              <p className="!m-0">8 800 444 00 65</p>
              <div className="py-2 px-4 rounded-sm font-semibold text-[#2A5E8D] bg-[#F2F6FC]">
                Заказать звонок
              </div>
            </div>
            <div className="text-center my-2 text-[#4E5760]">
              Ежедневно, с 8:00 до 18:00
            </div>
          </div>
        </>
      ) : (
        ""
      )}

      <div className="relative">
        <div className="flex flex-wrap items-center justify-between py-4 max-w-[1460px] 2xl:mx-auto mx-3 gap-4">
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src={Logo}
                alt="Logo"
                className="h-8 md:h-10 xl:w-40 2xl:w-40 object-contain"
              />
            </Link>
          </div>

          <div className="flex-1 min-w-[300px] md:min-w-[500px] lg:flex lg:gap-6 hidden">
            <motion.div
              onClick={toggleSidebar}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`${
                sideBarIsOpen ? "bg-black" : "bg-[#186fd4]"
              } hover:bg-black duration-200 cursor-pointer rounded-md px-4 py-3 text-white flex items-center gap-2 uppercase text-[12px] font-semibold`}
            >
              <AnimatePresence mode="wait">
                {sideBarIsOpen ? (
                  <motion.img
                    key="close"
                    src={closeSidebar}
                    alt="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                    className="w-4 h-4"
                  />
                ) : (
                  <motion.img
                    key="burger"
                    src={burger}
                    alt="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                    className="w-4 h-2"
                  />
                )}
              </AnimatePresence>
              Каталог
            </motion.div>

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
            <Link to="/stock">
              <div className="hidden sm:flex flex-col items-center gap-1 cursor-pointer hover:text-[#186fd4] transition">
                <img src={gift} alt="gift" className="w-5 h-4" />
                <p className="text-[12px] !m-0 font-medium">Все акции</p>
              </div>
            </Link>

            <Link to="/my-account">
              <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#186fd4] transition">
                <img src={user} alt="user" className="w-5 h-4" />
                <p className="hidden !m-0 sm:block text-[12px] font-medium">
                  Войти
                </p>
              </div>
            </Link>

            <Link to="/comparison">
              <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#186fd4] transition">
                <img src={compare} alt="compare" className="w-5 h-4" />
                <p className="hidden !m-0 sm:block text-[12px] font-medium">
                  Сравнение
                </p>
              </div>
            </Link>

            <Link to="/featured-products">
              <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#186fd4] transition">
                <img src={heart} alt="heart" className="w-5 h-4" />
                <p className="hidden !m-0 sm:block text-[12px] font-medium">
                  Избранное
                </p>
              </div>
            </Link>

            <Link to="/basket">
              <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#186fd4] transition">
                <img src={basket} alt="basket" className="w-5 h-4" />
                <p className="hidden !m-0 sm:block text-[12px] font-medium">
                  Корзина
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div
          className={`absolute z-20 top-full py-2 w-full bg-[#f9fafb] opacity-0 invisible duration-200 ${
            sideBarIsOpen && "visible opacity-100"
          }`}
        >
          <div className="max-w-[1460px] mx-auto ">
            <div className="w-[200px] p-3 rounded-xl bg-white">
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1460px] flex lg:hidden items-center gap-2 xl:mx-auto mx-3">
        <div className="bg-[#186fd4] hover:bg-black duration-200 cursor-pointer rounded-md pl-4 pr-8 py-3.5 text-white flex items-center gap-3 uppercase text-[12px] font-semibold">
          <img src={burger} alt="burger" />
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
