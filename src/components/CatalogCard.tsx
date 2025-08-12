import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { data } from "../data/data";
import { motion, AnimatePresence } from "../link/motionLink";
import { Link } from "../link/links";
import { useHeart } from "../context/HeartClickedContext";
import { images } from "../assets/images";
import { useCompare } from "../context/CompareContext";
import { FaCheck } from "react-icons/fa";
import { useCart } from "../context/CartContext";
const { cartt, compare, arrow } = images;

const CatalogCard = () => {
  const { addToCart, cartItems } = useCart();
  const { likedItems, toggleHeart } = useHeart();
  const { comparedItems, toggleCompare } = useCompare();
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex justify-between items-center my-3">
          <div className="flex md:w-auto w-full md:m-0 mx-4 justify-between items-center gap-3">
            <p className="!m-0">Сортировка:</p>
            <select
              className="border-[#DFE0E2] border outline-none px-4 py-2.5 rounded-md"
              id=""
            >
              <option value="">Цена по убыванию</option>
            </select>
          </div>
          <div className="md:flex 2xl:m-0 mx-4 hidden items-center gap-3">
            <p className="!m-0">Показывать по:</p>
            <div className="w-[40px] h-[40px] cursor-pointer flex items-center justify-center rounded-md border-1 border-[#EEEEEE]">
              9
            </div>
            <div className="w-[40px] h-[40px] cursor-pointer flex items-center justify-center rounded-md border-1 border-[#EEEEEE]">
              12
            </div>
            <div className="w-[40px] h-[40px] cursor-pointer flex items-center justify-center rounded-md border-1 border-[#F6F8FB] bg-[#F6F8FB] text-[#186FD4]">
              18
            </div>
            <div className="w-[40px] h-[40px] cursor-pointer flex items-center justify-center rounded-md border-1 border-[#EEEEEE]">
              24
            </div>
          </div>
        </div>
        <div className="w-full md:px-0 px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-6 sm:gap-3 gap-2">
          {data.map((item, index) => {
            const isCompared = comparedItems[item.id];
            const isInCart = cartItems.some(
              (cartItem) => cartItem.id === item.id
            );

            return (
              <div key={index} className="cursor-pointer p-4 rounded shadow">
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-50 mb-2"
                  />
                </Link>
                <p className="text-xs text-gray-500 md:text-[12px] text-[10px]">
                  {item.item}
                </p>
                <Link to={`/product/${item.id}`}>
                  <h3 className="font-semibold md:text-[16px] text-[14px] hover:text-[#186FD4] duration-200">
                    {item.title}
                  </h3>
                </Link>

                <div className="flex items-center gap-2">
                  <span className="line-through text-gray-400 md:text-[13px] text-[10px]">
                    {item.oldMoney}
                  </span>
                  <span className="text-[#003B73] font-bold md:text-[16px] text-[13px]">
                    {item.newMoney}
                  </span>
                  <p className="!m-0 bg-[#1B9665] text-white pb-1 pt-1.5 px-2 text-[10px] font-semibold rounded-md">
                    {item.sale}
                  </p>
                </div>

                <div className="mt-3 md:gap-0 gap-1 flex items-center justify-between">
                  <div
                    onClick={() => addToCart(item)}
                    className={` flex gap-3 duration-200 w-fit md:px-5 px-2 md:py-2.5 py-2 rounded-md 
    ${
      isInCart
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-[#186FD4] hover:bg-[#000] text-white cursor-pointer"
    }`}
                  >
                    {isInCart ? (
                      <span>Добавлено</span>
                    ) : (
                      <>
                        <img
                          src={cartt}
                          alt="cart"
                          className="sm:block hidden"
                        />
                        <span>Купить</span>
                      </>
                    )}
                  </div>

                  <div className="flex items-center md:gap-2 gap-1">
                    <div
                      onClick={() => toggleHeart({ ...item, id: String(item.id) })}
                      className="hover:border-[#186FD4] flex items-center duration-500 border-2 px-2 py-2 rounded-md border-[#F3F4F5]"
                    >
                      <span
                        className={`h-[17px] ${
                          likedItems
                            ? "text-blue-500 animate-ping-short"
                            : "text-gray-400"
                        }`}
                      >
                        {likedItems[item.id] ? (
                          <HeartFilled size={24} />
                        ) : (
                          <HeartOutlined size={24} />
                        )}
                      </span>
                    </div>

                    <motion.div
                      onClick={() => toggleCompare(item.id.toString())}
                      className="hover:border-[#186FD4] duration-500 border-2 px-2 md:py-2 py-2 rounded-md border-[#F3F4F5] cursor-pointer"
                      whileTap={{ scale: 0.9 }}
                    >
                      <AnimatePresence mode="wait">
                        {isCompared ? (
                          <motion.div
                            key="checked"
                            initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                            transition={{ duration: 0.1 }}
                          >
                            <FaCheck className="text-blue-600 w-[20px] h-[18px]" />
                          </motion.div>
                        ) : (
                          <motion.img
                            key="compare"
                            src={compare}
                            alt="compare"
                            initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.5, rotate: -90 }}
                            transition={{ duration: 0.3 }}
                            className="w-[20px] h-[18px]"
                          />
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex sm:gap-4 gap-2 items-center w-fit md:mx-auto mx-3 my-10">
          <div className="cursor-pointer py-3.5 px-4 flex items-center gap-3 rounded-md border border-[#DFDFDF]">
            <img className="md:w-[20px] w-[15px]" src={arrow} alt="arrow" />
            <p className="!m-0 text-[12px] font-semibold">Назад</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-black cursor-pointer text-white px-4 py-3 rounded-md">
              1
            </div>
            <div className="border cursor-pointer duration-200 hover:bg-black hover:text-white border-[#DFDFDF] px-4 py-3 rounded-md">
              2
            </div>
            <div className="border cursor-pointer duration-200 hover:bg-black hover:text-white border-[#DFDFDF] px-4 py-3 rounded-md">
              3
            </div>
            <div className="md:block hidden border cursor-pointer duration-200 hover:bg-black hover:text-white border-[#DFDFDF] px-4 py-3 rounded-md">
              4
            </div>
            <div className="md:block hidden border cursor-pointer duration-200 hover:bg-black hover:text-white border-[#DFDFDF] px-4 py-3 rounded-md">
              5
            </div>
            <div className="md:block hidden border cursor-pointer duration-200 hover:bg-black hover:text-white border-[#DFDFDF] px-4 py-3 rounded-md">
              ...
            </div>
            <div className="md:block hidden border cursor-pointer duration-200 hover:bg-black hover:text-white border-[#DFDFDF] px-4 py-3 rounded-md">
              231
            </div>
          </div>
          <div className="cursor-pointer py-3.5 px-4 flex items-center gap-3 rounded-md border border-[#DFDFDF]">
            <p className="!m-0 text-[12px] font-semibold">Далее</p>
            <img
              className="md:w-[20px] w-[15px] rotate-[180deg]"
              src={arrow}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 2xl:mx-auto mx-3">
          <h2 className="text-[26px] !font-semibold">
            Купить электроинструмент
          </h2>
          <p className="text-[#2C333D] !font-medium">
            Здесь вы найдете самый широкий выбор высококачественных
            электроинструментов для любых задач. Независимо от того, являетесь
            ли вы профессиональным мастером или занимаетесь ремонтами и
            строительством в домашних условиях, у нас есть все необходимое,
            чтобы сделать вашу работу эффективной и комфортной.{" "}
          </p>
          <p className="text-[#2C333D] !font-medium">
            У нас представлены электроинструменты от ведущих мировых
            производителей, гарантирующие надежность, долгий срок службы и
            безупречное качество. В категории "Электроинструмент" вы найдете
            широкий ассортимент:
          </p>
          <p className="text-[#2C333D] !font-medium">
            <span className="text-[#EE0906]">•</span>{" "}
            <span className="font-semibold">Дрели и Шуруповерты:</span> От
            мощных перфораторов для бурения бетона до удобных шуруповертов для
            быстрой и точной забивки и вывинчивания винтов. Все инструменты
            обладают разными скоростями, настройками и функциями для наилучшего
            результата.
          </p>
          <p className="text-[#2C333D] !font-medium">
            <span className="text-[#EE0906]">•</span>{" "}
            <span className="font-semibold">Пилы и Фрезеры:</span> Выбор пил и
            фрезеров позволит вам точно резать и обрабатывать различные
            материалы, будь то древесина, пластик или металл. Продуманные
            дизайны и системы пылеудаления обеспечивают чистоту рабочей зоны.
          </p>
          <p className="text-[#2C333D] !font-medium">
            <span className="text-[#EE0906]">•</span>{" "}
            <span className="font-semibold">Лобзики и Торцовочные Пилы:</span>{" "}
            Для максимально точной резки по контурам и наклонам, а также для
            продольной резки длинных материалов, таких как доски или трубы.
          </p>
          <p className="text-[#2C333D] !font-medium">
            <span className="text-[#EE0906]">•</span>{" "}
            <span className="font-semibold">Шлифовальные машины:</span> От
            шлифования поверхности перед покраской до полировки, наши
            инструменты позволят вам добиться гладкой и равномерной отделки.
          </p>
          <p className="text-[#2C333D] !font-medium">
            <span className="text-[#EE0906]">•</span>{" "}
            <span className="font-semibold">Сварочные аппараты:</span> Для
            профессиональных сварщиков и тех, кто нуждается в точной и надежной
            сварке различных материалов.
          </p>
          <p className="text-[#2C333D] !font-medium">
            <span className="text-[#EE0906]">•</span>{" "}
            <span className="font-semibold">Измерительные Приборы:</span>{" "}
            Широкий выбор лазерных дальномеров, электронных угломеров и других
            инструментов для точных измерений и маркировки.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CatalogCard;
