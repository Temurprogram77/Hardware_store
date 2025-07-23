import { images } from "../assets/images";

const { advantage1, advantage2, advantage3, advantage4 } = images;
const Advantages = () => {
  return (
    <div className="my-10 flex items-center justify-between max-w-[1460px] mx-auto">
      <div className="flex items-center gap-4">
        <img src={advantage1} alt="advantage img" />
        <p className="!m-0">Оплата любым удобным способом</p>
      </div>
      <div className="flex items-center gap-4">
        <img src={advantage2} alt="advantage img" />
        <p className="!m-0">Большой выбор товаров в каталоге</p>
      </div>
      <div className="flex items-center gap-4">
        <img src={advantage3} alt="advantage img" />
        <p className="!m-0">Осуществляем быструю доставку</p>
      </div>
      <div className="flex items-center gap-4">
        <img src={advantage4} alt="advantage img" />
        <p className="!m-0">Делаем скидки на крупные покупки</p>
      </div>
    </div>
  );
};

export default Advantages;
