import { Link, useParams } from "react-router-dom";
import data from "../data/data";
import { images } from "../assets/images";
import { useState } from "react";
import { Image } from "antd";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { useHeart } from "../context/HeartClickedContext";

const { Vector10, Vector9, Vector8, Vector7, heart, compare } = images;

const ProductCard = ({ item }: { item: { id: string } }) => {
  const { id } = useParams<{ id: string }>();
  const { likedItems, toggleHeart } = useHeart();
  const product = data.find((item) => item.id === Number(id));
  const [part, setPart] = useState(true);

  if (!product) {
    return <div className="text-center text-red-500">Mahsulot topilmadi</div>;
  }

  return (
    <div className="max-w-[1460px] mx-auto py-8">
      <div className="text-[13px] !font-medium mb-6 flex flex-wrap items-center 2xl:mx-0 mx-3 gap-3">
        <Link to={"/"}>Стройоптторг</Link> /{" "}
        <Link to={"/product-catalog"}>Электроинструмент</Link> /{" "}
        <Link to={""}>{product.title}</Link>
      </div>
      <div className="2xl:mx-0 mx-3">
        <h2 className="md:text-[22px] text-[20px] !font-semibold">
          Дрель-шуруповерт аккумуляторная MAKITA DF 347DWE14 В 1,5 А/ч
        </h2>
        <div className="flex justify-between">
          <div className="w-full md:flex-row flex-col flex justify-between items-center 2xl:gap-12 lg:gap-8 gap-4">
            <div className="flex lg:flex-row flex-col-reverse gap-5 ">
              <div className="md:mx-0 sm:mx-5 mx-2 h-full flex lg:flex-col flex-row lg:gap-0 gap-4 lg:justify-start justify-between">
                <div className="w-[60px] h-[60px] flex items-center justify-center">
                  <img src={product.image} className="w-[60px]" alt="img" />
                </div>
                <div className="w-[60px] h-[60px] flex items-center justify-center">
                  <img src={product.image} className="w-[60px]" alt="img" />
                </div>
                <div className="w-[60px] h-[60px] flex items-center justify-center">
                  <img src={product.image} className="w-[60px]" alt="img" />
                </div>
                <div className="w-[60px] h-[60px] flex items-center justify-center">
                  <img src={product.image} className="w-[60px]" alt="img" />
                </div>
                <div className="w-[60px] h-[60px] flex items-center justify-center">
                  <img src={product.image} className="w-[60px]" alt="img" />
                </div>
              </div>
              <div className="2xl:w-[550px] flex items-center justify-center h-full mx-4">
                <Image
                  src={product.image}
                  alt="img"
                  className="w-full sm:w-[400px] md:w-[500px] lg:w-[550px] xl:w-[600px] h-auto rounded"
                />
              </div>
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
                      <div className="rounded-md py-2 px-2 border border-black">
                        <span
                          className={`${
                            likedItems
                              ? "text-blue-500 animate-ping-short"
                              : "text-gray-400"
                          }`}
                        >
                          {likedItems[item.id] ? (
                            <HeartFilled />
                          ) : (
                            <HeartOutlined />
                          )}
                        </span>
                      </div>
                      <p className="!m-0 text-[14px]">В избранное</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="rounded-md py-2 px-2 border border-black">
                        <img
                          className="md:w-[22px] w-[20px]"
                          src={compare}
                          alt="img"
                        />
                      </div>
                      <p className="!m-0 text-[14px]">Сравнить</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="2xl:mx-0 mx-3 flex flex-col">
        <div className="flex items-center gap-4 my-6">
          <div
            className={`cursor-pointer duration-200 text-[14px] font-semibold p-3 h-fit border-b-2 ${
              part ? "border-[#EE0906]" : "text-gray-400 border-transparent"
            }`}
            onClick={() => setPart(!part)}
          >
            О товаре
          </div>
          <div
            className={`cursor-pointer duration-200 text-[14px] font-semibold p-3 h-fit border-b-2 ${
              part ? "border-transparent text-gray-400" : "border-[#EE0906]"
            }`}
            onClick={() => setPart(!part)}
          >
            Доставка и оплата
          </div>
        </div>
        <div className="">
          {part ? (
            <div className="one">
              <h2>О товаре «Вентилятор 100 Quiet»</h2>
              <p>1200ВТ</p>
              <h2>Похожие товары</h2>
            </div>
          ) : (
            <div className="two">
              <h2 className="text-[20px] !font-semibold !my-5">Доставка</h2>
              <p>
                Мы всегда готовы доставить приобретенный Вами товар в удобное
                для Вас время. Стоимость доставки товаров определяется исходя из
                веса, габаритов и удаленности до места назначения. Доставка
                осуществляется до подъезда дома, офиса. Наш интернет-магазин
                предлагает несколько вариантов получения товара:
              </p>
              <p className="!my-1 flex items-center gap-3 text-[13px]">
                <span className="text-[20px] text-[#EE0906]"> •</span>Самовывоз
                с территории компании.
              </p>
              <p className="!my-1 flex items-center gap-3 text-[13px]">
                <span className="text-[20px] text-[#EE0906]"> •</span>Быстрая
                доставка по Карачаево- Черкесской республике.
              </p>
              <p className="!my-1 flex items-center gap-3 text-[13px]">
                <span className="text-[20px] text-[#EE0906]"> •</span>Доставка
                транспортной компанией.
              </p>
              <p className="!my-1 flex items-center gap-3 text-[13px]">
                <span className="text-[20px] text-[#EE0906]"> •</span>Почтой
                России.
              </p>
              <h2 className="text-[20px] !font-semibold !my-5">Оплата</h2>
              <p>Оплатить свои покупки вы можете:</p>
              <p>– При заказе доставки:</p>
              <p>Банковской картой с помощью платежной системы на сайте</p>
              <p className="!my-1 flex items-center gap-3 text-[13px]">
                <span className="text-[20px] text-[#EE0906]"> •</span>МИР
              </p>
              <p className="!my-1 flex items-center gap-3 text-[13px]">
                <span className="text-[20px] text-[#EE0906]"> •</span>VISA
                International
              </p>
              <p className="!my-1 flex items-center gap-3 text-[13px]">
                <span className="text-[20px] text-[#EE0906]"> •</span>Mastercard
                Worldwide
              </p>
              <p className="!my-1 flex items-center gap-3 text-[13px]">
                <span className="text-[20px] text-[#EE0906]"> •</span>JCB
              </p>
              <p>Наличными водителю при получение заказа</p>
              <p>– При самовывозе:</p>
              <p className="!my-1 flex items-center gap-3 text-[13px]">
                <span className="text-[20px] text-[#EE0906]"> •</span>Банковской
                картой с помощью платежной системы на сайте или на кассе при
                получении заказа.
              </p>
              <p className="!my-1 flex items-center gap-3 text-[13px]">
                <span className="text-[20px] text-[#EE0906]"> •</span>Наличными
                на кассе при получении заказа
              </p>
              <p>– Сервис «Покупай со сбером»</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
