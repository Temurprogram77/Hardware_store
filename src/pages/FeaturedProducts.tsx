import React from 'react'

import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { data } from "../data/data";
import { HiMenu } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useHeart } from "../context/HeartClickedContext";
import { images } from "../assets/images";
import { useCompare } from "../context/CompareContext";

const { cartt, compare, arrow } = images;

type CheckboxItemProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

const CheckboxItem: React.FC<CheckboxItemProps> = ({
  label,
  checked,
  onChange,
}) => (
  <label className="cursor-pointer inline-flex items-center gap-2 select-none">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="sr-only"
    />
    <div
      className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
        checked ? "bg-blue-600 border-blue-600" : "bg-white border-gray-400"
      }`}
    >
      {checked && (
        <svg
          className="w-3 h-3 text-white"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 5.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </div>
    <span className="text-[13px] !font-medium">{label}</span>
  </label>
);
const CatalogCard = () => {
  const { likedItems, toggleHeart } = useHeart();
const { comparedItems, toggleCompare } = useCompare();
  return (
    <div>
        <div className="md:hidden mx-3 border border-[#0000001d] py-3 rounded-md max-w-full flex items-center gap-3 justify-center">
          <HiMenu size={30} />
          Показать фильтры
        </div>
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
            <div className="md:flex hidden items-center gap-3">
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
          <div className="w-full md:px-0 px-3 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-6 sm:gap-3 gap-2">
            {data.map((item, index) => (
              <div key={index} className="cursor-pointer p-4 rounded shadow">
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
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
                  <div className="flex gap-3 hover:bg-[#000] duration-200 bg-[#186FD4] text-white w-fit md:px-5 px-2 md:py-2.5 py-2 rounded-md">
                    <img src={cartt} alt="cart" className="sm:block hidden" />
                    <span>Купить</span>
                  </div>
                  <div className="flex items-center md:gap-2 gap-1">
                    <div
                      onClick={() => toggleHeart(item.id.toString())}
                      className="border-2 px-2 py-2 rounded-md border-[#F3F4F5]"
                    >
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
                    <div onClick={() => toggleCompare(item.id.toString())} className="border-2 px-2 md:py-2.5 py-2 rounded-md border-[#F3F4F5] cursor-pointer">
  <img src={compare} className="w-[24px] h-[18px]" alt="compare" />
</div>
                  </div>
                </div>      
              </div>
            ))}
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
              обладают разными скоростями, настройками и функциями для
              наилучшего результата.
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
              профессиональных сварщиков и тех, кто нуждается в точной и
              надежной сварке различных материалов.
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
  )
}

export default CatalogCard