import React from "react";
import CatalogCard from "../components/CatalogCard";
import Names from "../components/ui/Names";

const FeaturedProducts = () => {
  return (
    <div className="max-w-[1460px] 2xl:mx-auto mx-3">
      <div className="m-0">
        <Names link="/featured-products" name="Избранные товары" />
      </div>
      <h2 className="xl:text-[40px] lg:text-[34px] md:text-[28px] text-[26px] !font-bold">Избранные товары</h2>
      <div className="flex gap-2">
        <div className="lg:block hidden lg:w-[40%] w-full p-4 pl-0 rounded">
          <div className="py-4 hover:text-[#186FD4] cursor-pointer duration-200 text-[#186FD4] flex justify-between items-center border-b-2 border-[#F3F3F3]">
            <p className="!m-0">Все категории</p>
            <div className="border-[#F3F3F3] border-2 text-[11px] font-semibold rounded-full px-2 py-0.5">23</div>
          </div>
          <div className="py-4 hover:text-[#186FD4] cursor-pointer duration-200 flex justify-between items-center border-b-2 border-[#F3F3F3]">
            <p className="!m-0">Шуруповерты</p>
            <div className="border-[#F3F3F3] border-2 text-[11px] font-semibold rounded-full px-2 py-0.5">6</div>
          </div>
          <div className="py-4 hover:text-[#186FD4] cursor-pointer duration-200 flex justify-between items-center border-b-2 border-[#F3F3F3]">
            <p className="!m-0">Электродрели</p>
            <div className="border-[#F3F3F3] border-2 text-[11px] font-semibold rounded-full px-2 py-0.5">4</div>
          </div>
          <div className="py-4 hover:text-[#186FD4] cursor-pointer duration-200 flex justify-between items-center border-b-2 border-[#F3F3F3]">
            <p className="!m-0">Напольные покрытия</p>
            <div className="border-[#F3F3F3] border-2 text-[11px] font-semibold rounded-full px-2 py-0.5">1</div>
          </div>
          <div className="py-4 hover:text-[#186FD4] cursor-pointer duration-200 flex justify-between items-center border-b-2 border-[#F3F3F3]">
            <p className="!m-0">Отделочные материалы</p>
            <div className="border-[#F3F3F3] border-2 text-[11px] font-semibold rounded-full px-2 py-0.5">12</div>
          </div>
          <div className="cursor-pointer hover:bg-transparent duration-200 hover:text-[#000] my-3 py-3 w-full rounded-md text-white bg-[#186FD4] flex items-center justify-center">Добавить все в корзину</div>
          <div className="cursor-pointer hover:bg-[#186FD4] duration-200 hover:text-white my-3 py-3 w-full rounded-md flex items-center justify-center border-[#F6F8FB] border-2">Очистить список</div>
        </div>
        <CatalogCard />
      </div>
    </div>
  );
};

export default FeaturedProducts;
