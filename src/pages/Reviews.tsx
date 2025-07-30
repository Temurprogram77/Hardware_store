import { Button } from "antd";
import { Link } from "react-router-dom";
import NewList from "../components/reviews";
import img1 from '../assets/vasiliy1.png'
import img2 from '../assets/vasiliy2.png'
import img3 from '../assets/ivan1.png'
import img4 from '../assets/ivan2.png'
import img5 from '../assets/ivan3.png'
import ReviewForm from "../components/ReviewForm";
import Advertisement from "../components/Advertisement";
import CustomButton from "../components/ui/CustomButton";
interface Review {
  name: string,
  date: string,
  text: string,
  images: string[],
}

const reviews: Review[]=[
  {
    name: "Оксана Гончарова",
    date: "02.01.2022",
    text: "Рекомендую ШИКАРНЕЙШИЙ магазин! Огромный ассортимент, демократичные цены, быстрая перевозка, персонал-высший квалификации от работников склада до руководства! Надежный, ответственный и порядочный партнер.",
    images: []
  },
  {
    name: "Шерхзат Адылбаева",
    date: "02.01.2022",
    text: "Был не раз, рекомендую",
    images: []
  },
  {
    name: "MindClick",
    date: "10.06.2022",
    text: "Всегда всем нравится здесь. Ассортимент большой. Удобное расположение. Есть доставка. Есть система скидок по карте. Есть грузчики, которые всегда помогут вам погрузить.",
    images: []
  },
  {
    name: "Василий",
    date: "10.06.2022",
    text: "Очень рад, что купил здесь в этом интернет-магазине строительные материалы! У них огромный выбор товаров, цены приемлемые. Заказывал здесь универсальный ключ, он качественный, да и цена была более чем доступной. Кстати, на сайте, написано подробное описание отличий от моих инструментов. Продавец даже советует, как правильно и сколько использовать эту штуковину.",
    images: [img1,img2
    ]
  },
  {
    name: "Марина",
    date: "21.01.2022",
    text: "Большой выбор товаров, вежливый персонал, доступный ценовой сегмент на строительные материалы, удобное месторасположение, парковка.",
    images: []
  },
  {
    name: "Иван",
    date: "16.06.2022",
    text: "Когда строишь, или планируешь строить, в таких магазинах постоянно покупаешь строительные материалы, а этот магазин – один из них. Цены здесь – одни из самых лучших по городу, да и ассортимент товара, который здесь есть, меня тоже приятно удивил. Заказал шуруповерт и остался доволен покупкой. Доставка быстрая и привезли в срок. Отмечу, что есть все для ремонта и строительства. С уверенностью рекомендую этот магазин, уже посоветовал знакомым строителям.",
    images: [img3,img4,img5
    ]
  },
  {
    name: "Евгений",
    date: "16.06.2022",
    text: "Раньше я был скептичен к интернет магазинам строительных материалов без удержания. Они продают не только онлайн но еще стационарный магазин, реально цена ниже, а всё работает как положено. Цены ниже, доступные, а магазин после оптового рынка держит в одной кассе и по одной накладной, очень удобно, экономия времени. Заказывал здесь быстросохнущую шпатлевку, качество отличное, доставка в срок, теперь заказываю здесь и буду рекомендовать знакомым.",
    images: []
  },
  {
    name: "Евгений",
    date: "16.06.2022",
    text: "Для меня, как начинающего строителя, важно иметь доступ к надежным поставщикам строительных материалов. Этот интернет-магазин помогает мне не только выбирать правильные материалы, но и экономить время на их поиске. Цены здесь доступные, а заказ был организован быстро и доставлен точно в срок. Очень доволен сотрудничеством.",
    images: []
  }
];


const Reviews:React.FC = () => {
  return (
    <section className="mt-8 max-w-[1470px] mx-auto px-4">
      <ul className="flex text-[15px] gap-4 flex-wrap">
        <li>
          <Link to="/">Стройоптторг</Link>
        </li>
        /
        <li className="text-gray-500">
          <Link to="/reviews">Отзывы</Link>
        </li>
      </ul>

      <div className="w-full mt-8">
        <h1 className="font-bold text-[32px] md:text-[40px] lg:text-[48px]">Отзывы</h1>

        <div className="flex flex-col md:flex-row w-full justify-between mt-4 gap-8">
  <div className="flex flex-col w-full md:w-[76%]">
    <div className="w-[290px] h-[45px] flex justify-between items-center">
      <CustomButton  type="primary" text="Сначала новые" />
      <CustomButton  type="dashed" text="Сначала старые" />
    </div>

    <div>
      <NewList item={reviews} />
    </div>

    <div className="w-full mt-12">
      <h3 className="font-medium text-[18px] md:text-[20px] leading-[26px] text-[#2C333D]">Оставить отзыв</h3>
      <ReviewForm/>
    </div>
  </div>

  <Advertisement/>
</div>

      </div>
    </section>
  );
};

export default Reviews;
