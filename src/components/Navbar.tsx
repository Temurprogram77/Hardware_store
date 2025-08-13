import { Link } from "../link/links";
import { images } from "../assets/images";
import { useModal } from "../context/ModalContext";
import { useSidebar } from "../context/SideBarContext";
import { motion, AnimatePresence } from "../link/motionLink";
import { useEffect, useState } from "react";
import { useHeart } from "../context/HeartClickedContext";
import { useCompare } from "../context/CompareContext";
import { sideBar } from "../data/data";
import { useSidebar2 } from "../context/SidebarContext2";
import ModalComponent from "./ModalComponent";

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

const Navbar: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { modalOpenModal, openModal, closeModal, isOpen } = useModal();
  const { likedItems } = useHeart();
  const { comparedItems } = useCompare();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [rotate, setRotate] = useState(false);
  {
    useEffect(() => {
      if (!isOpen) return;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          closeModal();
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }, [isOpen, closeModal]);
  }

  const handleItemClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
    setRotate(!rotate);
  };
  const comparedCount = Object.keys(comparedItems).filter(
    (id) => comparedItems[id]
  ).length;

  const likedCount = Object.values(likedItems).filter(Boolean).length;
  const { sideBarIsOpen, toggleSidebar } = useSidebar();
  const { sideBarIsOpen2, toggleSidebar2 } = useSidebar2();
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
                to="/faq"
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

      <ModalComponent />

      <>
        <div
          onClick={closeModal}
          className={`${
            isOpen ? "visible opacity-100" : "invisible opacity-0"
          } duration-200 w-full h-full bg-[#000000be] fixed z-3 top-0 left-0`}
        ></div>
        <div
          className={`${
            isOpen ? "left-0" : "-left-full"
          } duration-200 w-[90%] h-full p-4 bg-[#fff] fixed z-3 top-0`}
        >
          <h2 className="text-[18px] !font-semibold">Меню</h2>
          <div
            onClick={closeModal}
            className="absolute right-4 top-4 rounded-md bg-[#F2F6FC] p-2"
          >
            <img src={close} alt="close" />
          </div>
          <Link onClick={closeModal} to={"/deals"}>
            <div className="py-4 border-t border-[#EBEEF0]">
              <p className="!m-0 flex items-center gap-3 hover:text-[#186fd4]">
                <img src={gift} className="w-[25px]" alt="gift" /> Все акции
              </p>
            </div>
          </Link>
          <Link onClick={closeModal} to={"/about"}>
            <div className="py-4 border-t border-[#EBEEF0]">
              <p className="!m-0 flex items-center gap-3 hover:text-[#186fd4]">
                О компании
              </p>
            </div>
          </Link>
          <Link onClick={closeModal} to={"/payment"}>
            <div className="py-4 border-t border-[#EBEEF0]">
              <p className="!m-0 flex items-center gap-3 hover:text-[#186fd4]">
                Оплата
              </p>
            </div>
          </Link>
          <Link onClick={closeModal} to={"/delivery"}>
            <div className="py-4 border-t border-[#EBEEF0]">
              <p className="!m-0 flex items-center gap-3 hover:text-[#186fd4]">
                Доставка
              </p>
            </div>
          </Link>
          <Link onClick={closeModal} to={"/return"}>
            <div className="py-4 border-t border-[#EBEEF0]">
              <p className="!m-0 flex items-center gap-3 hover:text-[#186fd4]">
                Возврат
              </p>
            </div>
          </Link>
          <Link onClick={closeModal} to={"/reviews"}>
            <div className="py-4 border-t border-[#EBEEF0]">
              <p className="!m-0 flex items-center gap-3 hover:text-[#186fd4]">
                Отзывы
              </p>
            </div>
          </Link>
          <Link onClick={closeModal} to={"/faq"}>
            <div className="py-4 border-t border-[#EBEEF0]">
              <p className="!m-0 flex items-center gap-3 hover:text-[#186fd4]">
                Вопрос-ответ
              </p>
            </div>
          </Link>
          <Link onClick={closeModal} to={"/blog"}>
            <div className="py-4 border-t border-[#EBEEF0]">
              <p className="!m-0 flex items-center gap-3 hover:text-[#186fd4]">
                Новости
              </p>
            </div>
          </Link>
          <Link onClick={closeModal} to={"/contacts"}>
            <div className="py-4 border-t border-b border-[#EBEEF0]">
              <p className="!m-0 flex items-center gap-3 hover:text-[#186fd4]">
                Контакты
              </p>
            </div>
          </Link>
          <div className="flex justify-between items-center my-6">
            <p className="!m-0">8 800 444 00 65</p>
            <div
              onClick={() => {
                modalOpenModal();
                closeModal();
              }}
              className="py-2 px-4 rounded-sm font-semibold text-[#2A5E8D] bg-[#F2F6FC]"
            >
              Заказать звонок
            </div>
          </div>
          <div className="text-center my-2 text-[#4E5760]">
            Ежедневно, с 8:00 до 18:00
          </div>
        </div>
      </>

      <div className="relative">
        <div className="flex flex-wrap items-center justify-between py-4 max-w-[1460px] 2xl:mx-auto mx-3 gap-4">
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src={Logo}
                alt="Logo"
                className="h-9 md:h-10 xl:w-40 2xl:w-40 object-contain"
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

            <div className="cursor-pointer flex flex-1 p-[3px] rounded-md bg-[#186fd4]">
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
            <Link to="/deals">
              <div className="hidden sm:flex flex-col items-center gap-1 cursor-pointer hover:text-[#186fd4] transition">
                <img
                  src={gift}
                  alt="gift"
                  className="md:w-[24px] md:h-[18px] w-[30px] h-[25px]"
                />
                <p className="text-[12px] !m-0 font-medium">Все акции</p>
              </div>
            </Link>

            <Link to="/auth">
              <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#186fd4] transition">
                <img
                  src={user}
                  alt="user"
                  className="md:w-[24px] md:h-[18px] w-[30px] h-[25px]"
                />
                <p className="hidden !m-0 sm:block text-[12px] font-medium">
                  Войти
                </p>
              </div>
            </Link>

            <Link to="/comparison">
              <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#186fd4] transition">
                <div className="relative">
                  <img
                    src={compare}
                    className="md:w-[24px] md:h-[18px] w-[30px] h-[25px]"
                    alt="compare"
                  />
                  {comparedCount > 0 && (
                    <span className="absolute -top-4 -right-4 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {comparedCount}
                    </span>
                  )}
                </div>
                <p className="hidden !m-0 sm:block text-[12px] font-medium">
                  Сравнение
                </p>
              </div>
            </Link>

            <Link to="/featured-products">
              <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#186fd4] transition">
                <div className="relative rounded-md ">
                  <img
                    src={heart}
                    className="md:w-[24px] md:h-[18px] w-[30px] h-[25px]"
                    alt="wishlist"
                  />
                  {likedCount > 0 && (
                    <span className="absolute -top-4 -right-4 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {likedCount}
                    </span>
                  )}
                </div>
                <p className="hidden !m-0 sm:block text-[12px] font-medium">
                  Избранное
                </p>
              </div>
            </Link>

            <Link to="/basket">
              <div className="flex flex-col items-center gap-1 cursor-pointer hover:text-[#186fd4] transition">
                <img
                  src={basket}
                  alt="basket"
                  className="md:w-[24px] md:h-[18px] w-[30px] h-[25px]"
                />
                <p className="hidden !m-0 sm:block text-[12px] font-medium">
                  Корзина
                </p>
              </div>
            </Link>
          </div>
        </div>
        {sideBarIsOpen && (
          <div className="absolute z-20 top-full py-8 w-full bg-[#f9fafb] duration-200 opacity-100 visible">
            <div className="max-w-[1460px] mx-auto">
              <div className="w-[330px] rounded-md bg-white">
                <div className="relative">
                  {sideBar.map((item, index) => (
                    <div
                      key={index}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="relative group"
                    >
                      <Link to="/catalog">
                        <div
                          onClick={toggleSidebar}
                          className="overflow-hidden arrow-svg cursor-pointer flex items-center justify-between hover:fill-white hover:text-white border-b border-[#0000002c] py-5 px-5 hover:bg-[#186fd4]"
                        >
                          <p className="!m-0 text-[12px] uppercase font-semibold">
                            {item.name}
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="5"
                            height="8"
                            viewBox="0 0 5 8"
                            fill="#919AA3"
                          >
                            <path d="M4.35355 4.35355C4.54882 4.15829 4.54882 3.84171 4.35355 3.64645L1.17157 0.464466C0.976311 0.269204 0.659728 0.269204 0.464466 0.464466C0.269204 0.659728 0.269204 0.976311 0.464466 1.17157L3.29289 4L0.464466 6.82843C0.269204 7.02369 0.269204 7.34027 0.464466 7.53553C0.659728 7.7308 0.976311 7.7308 1.17157 7.53553L4.35355 4.35355ZM3 4.5H4V3.5H3V4.5Z"></path>
                          </svg>
                        </div>
                      </Link>

                      <div
                        className={`absolute left-full top-0 ml-2 p-5 w-[350px] bg-white shadow-lg rounded-md z-20 transition-opacity duration-300 ${
                          hoveredIndex === index
                            ? "opacity-100 visible"
                            : "opacity-0 invisible"
                        }`}
                      >
                        {item.obj?.map((child, i) => (
                          <p
                            key={i}
                            className="text-[15px] hover:text-[#186fd4] duration-300 cursor-pointer py-3"
                          >
                            <Link to="/catalog" onClick={toggleSidebar}>
                              {Array.isArray(child)
                                ? child.join(", ")
                                : typeof child === "object" && "obj" in child
                                ? child.obj.flat().join(", ")
                                : String(child)}
                            </Link>
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {sideBarIsOpen2 ? (
        <div
          onClick={toggleSidebar2}
          className="bg-[#000000c1] fixed top-0 left-0 w-full h-full z-10"
        ></div>
      ) : (
        ""
      )}

      <div
        className={`fixed z-20 top-0 -left-full ${
          sideBarIsOpen2 && "left-0"
        } py-8 w-[80%] bg-[#f9fafb] duration-200 opacity-100 visible`}
      >
        <div className="max-w-full mx-auto">
          <div
            onClick={toggleSidebar2}
            className="absolute w-[20px] z-[10000] top-4 right-4 cursor-pointer"
          >
            <img src={close} className="w-[30px]" alt="close" />
          </div>
          <div className="w-[100%] h-full rounded-md bg-white max-h-screen overflow-y-auto relative pb-8 pt-4">
            {sideBar.map((item, index) => (
              <div key={index} className="border-b border-[#0000002c]">
                <div
                  onClick={() => handleItemClick(index)}
                  className="cursor-pointer flex items-center justify-between py-5 px-6 hover:bg-[#186fd4] hover:text-white duration-300"
                >
                  <p className="!m-0 text-[12px] uppercase font-semibold">
                    {item.name}
                  </p>
                  <div
                    className={`w-[10px] h-[10px] flex items-center ${
                      rotate ? "rotate-90" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 5 8"
                      fill="#919AA3"
                    >
                      <path d="M4.35355 4.35355C4.54882 4.15829 4.54882 3.84171 4.35355 3.64645L1.17157 0.464466C0.976311 0.269204 0.659728 0.269204 0.464466 0.464466C0.269204 0.659728 0.269204 0.976311 0.464466 1.17157L3.29289 4L0.464466 6.82843C0.269204 7.02369 0.269204 7.34027 0.464466 7.53553C0.659728 7.7308 0.976311 7.7308 1.17157 7.53553L4.35355 4.35355ZM3 4.5H4V3.5H3V4.5Z"></path>
                    </svg>
                  </div>
                </div>

                {/* Dropdown content */}
                {activeIndex === index && (
                  <div className="pl-5 pr-3 py-2 max-h-[300px] bg-[#dfdfdf99] overflow-y-auto transition-all duration-300">
                    {item.obj?.map((child: any, i: number) => (
                      <Link
                        key={i}
                        to="/catalog"
                        className="w-full"
                        onClick={() => {
                          handleItemClick(index);
                          toggleSidebar2();
                        }}
                      >
                        <p className="text-[15px] w-full hover:text-[#186fd4] cursor-pointer py-2">
                          {Array.isArray(child)
                            ? child.join(", ")
                            : typeof child === "object" && "obj" in child
                            ? child.obj.flat().join(", ")
                            : String(child)}
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-[1460px] flex lg:hidden items-center gap-2 xl:mx-auto mx-3">
        <div
          onClick={toggleSidebar2}
          className="bg-[#186fd4] hover:bg-black duration-200 cursor-pointer rounded-md pl-4 pr-8 py-3.5 text-white flex items-center gap-3 uppercase text-[12px] font-semibold"
        >
          <img src={burger} alt="burger" />
          Каталог
        </div>
        <div className="w-full flex p-[3px] rounded-md bg-[#186fd4]">
          <input
            className="w-full bg-white px-3 py-2 rounded-sm outline-none text-[13px] placeholder:text-[13px]"
            type="text"
            placeholder="Поиск..."
          />
          <div className="cursor-pointer flex items-center md:px-4 px-3">
            <img src={search} alt="search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
