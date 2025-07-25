import data from "../data/data";
import { images } from "../assets/images";
import { Link } from "react-router-dom";

const { cartt, heart, compare } = images;

const ProductCatalog = () => {
  return (
    <div className="max-w-[1460px] mx-auto my-5">
      <div className="text-[13px] !font-medium mb-6 flex items-center gap-3"><Link to={"/"}>Стройоптторг</Link> / <Link to={""}>Электроинструмент</Link></div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/4 w-full bg-gray-100 p-4 rounded">
          <p className="font-semibold">Bu alohida qism</p>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center my-3">
            <div className="flex items-center gap-3">
              <p className="!m-0">Сортировка:</p>
              <select className="border-[#DFE0E2] border outline-none px-4 py-2.5 rounded-md" id="">
                <option value="">Цена по убыванию</option>
              </select>
            </div>
            <div className="flex items-center gap-3">
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
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.map((item, index) => (
              <div key={index} className="cursor-pointer p-4 rounded shadow">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <p className="text-xs text-gray-500 text-[12px]">{item.item}</p>
                <h3 className="font-semibold">{item.title}</h3>
                <div className="flex items-center gap-2">
                  <span className="line-through text-gray-400 text-[13px]">
                    {item.oldMoney}
                  </span>
                  <span className="text-[#003B73] font-bold">
                    {item.newMoney}
                  </span>
                  <p className="!m-0 bg-[#1B9665] text-white pb-1 pt-1.5 px-2 text-[10px] font-semibold rounded-md">
                    {item.sale}
                  </p>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex gap-3 hover:bg-[#000] duration-200 bg-[#186FD4] text-white w-fit px-5 py-2.5 rounded-md">
                    <img src={cartt} alt="cart" />
                    <span>Купить</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="border-2 px-2 py-2.5 rounded-md border-[#F3F4F5]">
                      <img
                        src={heart}
                        className="w-[24px] h-[18px]"
                        alt="heart"
                      />
                    </div>
                    <div className="border-2 px-2 py-2.5 rounded-md border-[#F3F4F5]">
                      <img
                        src={compare}
                        className="w-[24px] h-[18px]"
                        alt="compare"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex">
        
      </div>
    </div>
  );
};

export default ProductCatalog;
