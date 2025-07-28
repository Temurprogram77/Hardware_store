import { Button, Image } from "antd";
import { useEffect, useState } from "react";
import { IoNewspaperOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Advertisement from "../components/Advertisement";

interface Stock {
  id: number;
  title: string;
  description: string;
  discount: string;
  link: string;
  img: any;
}

const LandingStock = () => {
    const [chegirma,setChegirma]=useState<Stock|null>(null)
  useEffect(() => {
    const stock = localStorage.getItem("Stock");
    if (stock) {
      const stocks: Stock = JSON.parse(stock);
      setChegirma(stocks)
    } else {
      console.log("Stock not found in localStorage");
    }
  }, []);
  const aksiya='акция'
  return (
    <section className="mt-8 max-w-[1270px] mx-auto px-4">
      <ul className="flex text-[15px] gap-4 flex-wrap">
        <li>
          <Link to={'/'}>Стройоптторг</Link>
        </li>
        /
        <li className="text-gray-500">
          <Link to={'/stock'}>Акции</Link>
        </li>/
        <li className="text-gray-500">
          <Link to={`/stock/${chegirma?.id}`}>{chegirma?.title}</Link>
        </li>
      </ul>
      <div className="w-full mt-8 items-center">
        <h1 className="font-bold text-[32px] md:text-[40px] lg:text-[48px]">{chegirma?.title}</h1>
    <div className="md:flex w-[100%] justify-between">
      <div className="flex flex-col gap-[1.8rem] mb-[5rem] w-full md:w-[70%]">
        <div className="gap-[2rem] flex w-full h-[50px]">
            <Button type="default">{aksiya.toUpperCase()}</Button>
            <p className="mt-[2rem]">Действует до 1 октября 2023</p>
        </div>
            <p className="text-gray-400 text-[14px] leading-[25px]">Уважаемые клиенты, рады объявить вам о нашей специальной акции на лакокрасочные материалы! Теперь вы можете придать своему дому новое великолепное обличие по невероятно выгодным ценам. Это ваш шанс создать уют и красоту в вашем жилище без лишних затрат!</p>
        <Image src={chegirma?.img}/>
        <h2 className="font-bold text-[#2C333D] text-[33px]">Что мы предлагаем:</h2>
        <div className="text-[14px] text-gray-500">
            <p>Широкий ассортимент качественных лаков и красок для любых поверхностей. Разнообразие цветов и оттенков, чтобы удовлетворить самые изысканные вкусы. Продукция от проверенных производителей, гарантирующих долговечность и качество</p>
            <p>Используйте промокод LAKOART20 при оформлении заказа и получите дополнительную скидку 20% на все лакокрасочные материалы. Это время для обновления вашего дома по самым доступным ценам!</p>
        </div>
        <h4 className="font-bold text-[#2C333D] text-[20px] ">Промокод для скидки:</h4>
        <div className="w-[137px]">
          <Button>LAKOART20 <IoNewspaperOutline /> </Button>
        </div>
    </div>
    <Advertisement/>
    </div>
      </div>
    </section>
  );
};

export default LandingStock;
