import { Link, useParams } from "react-router-dom";
import data from "../data/data";
import {images} from "../assets/images"

const { Vector10, Vector9, Vector8, Vector7 } = images

const ProductCard = () => {
  const { id } = useParams<{ id: string }>();
  const product = data.find((item) => item.id === Number(id));

  if (!product) {
    return <div className="text-center text-red-500">Mahsulot topilmadi</div>;
  }

  return (
    <div className="max-w-[1460px] mx-auto py-8">
      <div className="text-[13px] !font-medium mb-6 flex items-center 2xl:mx-0 mx-3 gap-3">
        <Link to={"/"}>Стройоптторг</Link> /{" "}
        <Link to={"/product-catalog"}>Электроинструмент</Link> /{" "}
        <Link to={""}>{product.title}</Link>
      </div>
      <div className="">
        <h2>Дрель-шуруповерт аккумуляторная MAKITA DF 347DWE14 В 1,5 А/ч</h2>
        <div className="flex justify-between">
          <div className="flex justify-between items-center gap-6">
            <div className="">
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
            <div className="w-[300px] h-full mx-4">
              <img src={product.image} className="w-[300px]" alt="img" />
            </div>
            <div className="">
              <div className="">
                <p>Тип товара</p>
                <p>Дрель-шуруповерт</p>
              </div>
              <div className="">
                <p>Бренд</p>
                <p>MAKITA</p>
              </div>
              <div className="">
                <p>Назначение инструмента</p>
                <p>профессиональный</p>
              </div>
              <div className="">
                <p>Мощность (Вт)</p>
                <p>18</p>
              </div>
              <div className="">
                <p>Емкость АКБ (А/ч)</p>
                <p>1,5</p>
              </div>
              <div className="">
                <p>Крутящий момент макс. (Н/м)</p>
                <p>30</p>
              </div>
              <div className="">
                <p>Напряжение аккумулятора (В)</p>
                <p>14,4</p>
              </div>
              <p>Больше характеристик</p>
              <div className="border-3 flex flex-col gap-3 p-4 rounded-xl border-[#EDF0F2]">
                <div className="flex items-center gap-2">
                  <img className="w-[25px]" src={Vector7} alt="img" />
                  <p className="!m-0">Оплата любым удобным способом</p>
                </div>
                <div className="flex items-center gap-2">
                  <img className="w-[25px]" src={Vector8} alt="img" />
                  <p className="!m-0">Большой выбор товаров в каталоге</p>
                </div>
                <div className="flex items-center gap-2">
                  <img className="w-[25px]" src={Vector9} alt="img" />
                  <p className="!m-0">Осуществляем быструю доставку</p>
                </div>
                <div className="flex items-center gap-2">
                  <img className="w-[25px]" src={Vector10} alt="img" />
                  <p className="!m-0">Делаем скидки на крупные покупки</p>
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
