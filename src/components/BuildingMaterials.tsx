import React from "react";
import { images } from "../assets/images";

const { aboutImage1, aboutImage2 }: { aboutImage1: string; aboutImage2: string } = images;

const BuildingMaterials: React.FC = () => {
  return (
    <div className="bg-[#F9FAFB]">
      <div className="relative max-w-[1460px] lg:h-[380px] md:h-[420px] sm:h-[350px] h-auto sm:p-0 py-10 overflow-hidden 2xl:mx-auto mx-3 flex justify-start">
        <div className="relative z-2 flex flex-col justify-center md:w-[600px] lg:mx-0 md:mx-0 mx-auto">
          <h2 className="!font-semibold lg:text-[24px] md:text-[20px] text-[18px] lg:leading-8 md:leading-6">
            Строительные материалы в интернет-магазине «Стройоптторг»
          </h2>
          <p className="!m-0 lg:text-[13px] md:text-[11px] text-[12px] sm:leading-5 leading-4 lg:w-[610px] md:w-[480px] w-full">
            Цель и главная задача компании - создать сервис, который не ограничится продажей строительных и отделочных материалов, а будет решать задачи и трудности, с которыми сталкиваются люди во время ремонта.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 md:gap-auto gap-5 md:my-5 my-3">
            <div className="flex flex-col items-start">
              <h2 className="text-[#117FE3] text-[22px]">17 805,3 м²</h2>
              <p className="!m-0 text-[12px] text-start">
                торговых и складских <br /> помещений
              </p>
            </div>
            <div className="flex flex-col items-start">
              <h2 className="text-[#117FE3] text-[22px]">50 000+</h2>
              <p className="!m-0 text-[12px] text-start">
                наименований <br /> товара
              </p>
            </div>
            <div className="flex flex-col items-start">
              <h2 className="text-[#117FE3] text-[22px]">2 500+</h2>
              <p className="!m-0 text-[12px] text-start">
                постоянных <br /> клиентов
              </p>
            </div>
            <div className="flex flex-col items-start">
              <h2 className="text-[#117FE3] text-[22px]">440</h2>
              <p className="!m-0 text-[12px] text-start">
                опытных <br /> сотрудников
              </p>
            </div>
          </div>

          <p className="!my-3 lg:text-[12px] md:text-[10px] text-[11px] md:leading-5 leading-4 lg:w-[620px] md:w-[480px] w-full">
            Уже второе десятилетие мы готовы воплотить в реальность Вашу мечту о красивом, комфортабельном доме, благоустроенном современном офисе, уютной теплой даче, помочь реализовать любые строительные и дизайнерские фантазии и с минимальными затратами времени и денежных средств.
          </p>
        </div>

        <div className="absolute right-0 flex items-end bottom-0 h-full z-0">
          <img
            src={aboutImage1}
            className="h-full lg:block hidden"
            alt="about"
          />
          <img
            src={aboutImage2}
            className="w-[300px] h-[200px] lg:hidden sm:block hidden"
            alt="about"
          />
        </div>
      </div>
    </div>
  );
};

export default BuildingMaterials;
