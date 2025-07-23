import { images } from "../assets/images";

const { aboutImage1, aboutImage2 } = images;

const BuildingMaterials = () => {
  return (
    <div className="bg-[#F9FAFB]">
      <div className="relative max-w-[1460px] lg:h-[360px] md:h-[330px] sm:h-[350px] h-[400px] overflow-hidden 2xl:mx-auto mx-3 flex justify-start">
        <div className="relative z-2 flex flex-col justify-center mr-60">
          <h2 className="!font-semibold text-[24px] leading-8">
            Строительные материалы в интернет-магазине <br /> «Стройоптторг»
          </h2>
          <p className="!m-0 text-[13px] leading-5 lg:w-[610px] md:w-[480px] w-full">
            Цель и главная задача компании- создать сервис, который не
            ограничится продажей строительных <br /> и отделочных материалов, а
            будет решать задачи и трудности, с которыми сталкиваются люди во{" "}
            <br /> время ремонта.
          </p>
          <div className="flex my-5 items-center justify-between">
            <div className="flex flex-col items-center">
              <h2 className="text-[#117FE3] text-[22px]">17 805,3 м²</h2>
              <p className="!m-0 text-[12px]">
                торговых и складских <br /> помещений
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-[#117FE3] text-[22px]">50 000+</h2>
              <p className="!m-0 text-[12px]">
                наименований <br /> товара
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-[#117FE3] text-[22px]">2 500+</h2>
              <p className="!m-0 text-[12px]">
                постоянных <br /> клиентов
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-[#117FE3] text-[22px]">440</h2>
              <p className="!m-0 text-[12px]">
                опытных <br /> сотрудников
              </p>
            </div>
          </div>
          <p className="!my-3 text-[12px] leading-5 lg:w-[620px] md:w-[480px] w-full">
            Уже второе десятилетие мы готовы воплотить в реальность Вашу мечту о
            красивом, комфортабельном доме, благоустроенном современном офисе,
            уютной теплой даче, помочь реализовать любые строительные и
            дизайнерские фантазии и с минимальными затратами времени и денежных
            средств.
          </p>
        </div>
        <div className="absolute right-0 lg:top-0 top-1/2 h-full z-0">
          <img
            src={aboutImage1}
            className="h-full md:block hidden"
            alt="about"
          />
          <img
            src={aboutImage2}
            className="h-full md:hidden sm:block hidden"
            alt="about"
          />
        </div>
      </div>
    </div>
  );
};

export default BuildingMaterials;
