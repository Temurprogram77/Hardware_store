import { data } from "../data/data";
import { images } from "../assets/images";
import { useEffect, useState } from "react";
import { Image } from "../link/antLink";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { useHeart } from "../context/HeartClickedContext";
import { useParams } from "../link/motionLink";
import Names from "../components/ui/Names";
import { motion, AnimatePresence } from "../link/motionLink";
import { useCompare } from "../context/CompareContext";
import { FaCheck } from "react-icons/fa";

const { Vector10, Vector9, Vector8, Vector7, compare } = images;

const imgData = data.slice(0, 5).map((item) => ({ image: item.image }));

const ProductCard = () => {
  const { id } = useParams<{ id: string }>();
  const { likedItems, toggleHeart } = useHeart();
  const product = data.find((item) => item.id === Number(id));
  // const [part, setPart] = useState(true);
  const [selectedImage, setSelectedImage] = useState(product?.image);
  const { comparedItems, toggleCompare } = useCompare();
  if (!product) return null;

  const productId = String(product.id);
  const isCompared = Array.isArray(comparedItems)
    ? comparedItems.includes(productId)
    : false;

  const [imgWidth, setImgWidth] = useState(400);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setImgWidth(300);
      } else if (window.innerWidth <= 768) {
        setImgWidth(360);
      } else {
        setImgWidth(400);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!product) {
    return <div className="text-center text-red-500">Mahsulot topilmadi</div>;
  }

  return (
    <div className="max-w-[1460px] 2xl:mx-auto mx-3 py-8">
      <Names
        name="Электроинструмент"
        link="/catalog"
        name2={product.title}
        link2="/product/"
      />
      <div className="2xl:mx-0">
        <h2 className="md:text-[22px] text-[20px] !font-semibold">
          {product.title}
        </h2>
        <div className="flex justify-between">
          <div className="w-full md:flex-row flex-col flex justify-between items-center 2xl:gap-12 lg:gap-8 gap-4">
            <div className="flex lg:flex-row flex-col-reverse gap-5 ">
              <div className="md:mx-0 sm:mx-5 mx-2 h-full flex lg:flex-col flex-row lg:gap-2 gap-4 lg:justify-start justify-between">
                {imgData.map((item, index) => (
                  <div
                    key={index}
                    className="cursor-pointer md:w-[80px] w-[60px] h-[55px] md:h-[60px] flex items-center justify-center"
                    onClick={() => setSelectedImage(item.image)}
                  >
                    <img
                      src={item.image}
                      className="md:w-[70px] w-[60px] h-[55px] md:h-[60px] rounded"
                      alt="img"
                    />
                  </div>
                ))}
              </div>

              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="2xl:w-[550px] flex items-center justify-center h-full mx-4"
              >
                <Image
                  src={selectedImage}
                  alt="img"
                  width={imgWidth}
                  style={{ maxWidth: "1000px", borderRadius: "8px" }}
                  preview={{
                    mask: "Ko‘rish",
                    style: { width: "1000px", maxWidth: "2000px" },
                  }}
                />
              </motion.div>
            </div>
            <div className="flex lg:flex-row flex-col-reverse md:w-auto w-full lg:gap-16 md:gap-10 gap-6">
              <div className="md:w-[350px] w-full h-full flex items-start">
                <div className="w-full border-3 flex flex-col gap-6 p-4 rounded-xl border-[#EDF0F2]">
                  <div className="flex items-center gap-2">
                    <img className="w-[16px]" src={Vector7} alt="img" />
                    <p className="!m-0 text-[13px]">
                      Оплата любым удобным способом
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img className="w-[16px]" src={Vector8} alt="img" />
                    <p className="!m-0 text-[13px]">
                      Большой выбор товаров в каталоге
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img className="w-[16px]" src={Vector9} alt="img" />
                    <p className="!m-0 text-[13px]">
                      Осуществляем быструю доставку
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img className="w-[16px]" src={Vector10} alt="img" />
                    <p className="!m-0 text-[13px]">
                      Делаем скидки на крупные покупки
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start h-full">
                <div className="p-5 shadow-xl rounded-md md:w-[300px] w-full">
                  <p className="!my-2 font-semibold text-[13px]">
                    Артикул: 016816
                  </p>
                  <p className="!my-2 font-semibold text-[13px]">
                    Нет в наличии
                  </p>
                  <h2 className="text-[30px] !font-semibold">1 325 ₽</h2>
                  <div className="text-center bg-[#f6f8fb] hover:bg-[#000] text-[#117fe3] hover:text-[#fff] duration-200 cursor-pointer text-[13px] font-semibold rounded-md py-3 w-full">
                    Купить в 1 клик
                  </div>
                  <div className="flex justify-between mt-3">
                    <div className="flex items-center gap-2">
                      <div
                        onClick={() =>
                          toggleHeart({ ...product, id: String(product.id) })
                        }
                        className="cursor-pointer hover:border-[#186FD4] flex items-center duration-500 border-2 px-2 py-2 rounded-md border-[#F3F4F5]"
                      >
                        <span
                          className={`h-[17px] ${
                            likedItems
                              ? "text-blue-500 animate-ping-short"
                              : "text-gray-400"
                          }`}
                        >
                          {likedItems[product.id] ? (
                            <HeartFilled size={24} />
                          ) : (
                            <HeartOutlined size={24} />
                          )}
                        </span>
                      </div>
                      <p className="!m-0 text-[14px]">В избранное</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <motion.div
                        onClick={() => toggleCompare(productId)}
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
                      <p className="!m-0 text-[14px]">Сравнить</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
