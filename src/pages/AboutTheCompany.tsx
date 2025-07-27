import { Link } from "react-router-dom";
import { images } from "../assets/images";
import NewsCards from "../components/NewsCards";

const { aboutImage1, Vector10, Vector9, Vector8, Vector7 } = images;

const data = [
  {
    img: Vector7,
    title: "Оплата любым удобным способом",
    description:
      "Выбирайте любой способ оплаты для максимального комфорта при покупках у нас.",
  },
  {
    img: Vector8,
    title: "Большой выбор товаров в каталоге",
    description:
      "Наш каталог насыщен разнообразными товарами, чтобы удовлетворить ваши потребности.",
  },
  {
    img: Vector9,
    title: "Осуществляем быструю доставку",
    description:
      "Мы оперативно доставим ваш заказ, чтобы вы могли насладиться покупкой как можно скорее.",
  },
  {
    img: Vector10,
    title: "Делаем скидки на крупные покупки",
    description:
      "Наша система скидок работает для вашей выгоды, чем больше купили - больше сэкономили.",
  },
];

const AboutTheCompany = () => {
  const renderedBlocks = (() => {
    const rows = [4, 3, 2, 1];
    const result = [];
    let index = 0;

    for (let count of rows) {
      const group = data.slice(index, index + count);
      index += count;
      if (group.length > 0) {
        result.push(
          <div key={index} className={`grid grid-cols-${group.length} gap-6`}>
            {group.map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <img src={item.img} alt="vector" className="w-10 h-10" />
                <div>
                  <h2 className="leading-6 !font-medium text-[19px]">
                    {item.title}
                  </h2>
                  <p className="leading-6 text-[14px] text-[#6B6C72]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        );
      }
    }

    return result;
  })();

  return (
    <>
      <div className="bg-[#F9FAFB] relative">
        <div className="max-w-[1460px] mx-auto py-5">
          <div className="w-1/2">
            <div className="flex text-[13px] !font-medium gap-2">
              <Link to="/">Стройоптторг</Link> / <Link to="">О компании</Link>
            </div>
            <h2 className="text-[27px] !font-semibold">О компании</h2>
            <p className="text-[13px] leading-5">
              «Стройоптторг» - крупнейшая оптово-розничная компания по продаже
              строительных и отделочных материалов.
            </p>
            <p className="text-[13px] leading-5">
              Уже второе десятилетие мы готовы воплотить в реальность Вашу мечту
              о красивом, комфортабельном доме, благоустроенном современном
              офисе, уютной теплой даче, помочь реализовать любые строительные и
              дизайнерские фантазии и с минимальными затратами времени и
              денежных средств.
            </p>
            <p className="text-[13px] leading-5">
              Вы всегда можете прийти к нам, пройтись по нашим складским и
              торговым площадям, оценить, как мы храним, принимаем и продаем
              товары. Пообщаться с продавцами-консультантами, получить
              консультацию по товарам у менеджеров.
            </p>
            <p className="text-[13px] leading-5">
              Вы также можете всегда пожаловаться нам, спросить совета или
              вернуть не понравившийся товар. Если же Вам что- то не
              понравилось, и Вы остались недовольны нашим сервисом - не
              стесняйтесь сообщать нам об этом. Только так мы сможем понять, что
              делаем что-то не так. И только так мы сможем стать еще лучше!
            </p>
            <p className="text-[13px] leading-5">
              Все товары, представленные на сайте, гарантированно есть в
              наличии.
            </p>
            <p className="text-[13px] leading-5">
              Помимо материалов, мы предлагаем своим клиентам самый большой
              набор услуг, которые позволяют значительно упростить процесс
              строительства и ремонта и сделать его легким и комфортным.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 h-full">
          <img src={aboutImage1} className="h-full" alt="" />
        </div>
      </div>

      <div className="max-w-[1460px] mx-auto mt-12">
        <h2 className="text-2xl !font-bold mb-8">Почему именно мы</h2>
        <div className="flex flex-col gap-6">{renderedBlocks}</div>
      </div>
      <div className="max-w-[1460px] mx-auto mt-12">
        <h2 className="text-2xl !font-bold mb-8">История ООО “Стройоптторг”</h2>
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="border-3 rounded-md border-[#E6EEF6]">
            <h2 className="text-[#186FD4] !m-0 !font-bold">2003</h2>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <div className="flex justify-between items-center max-w-[1460px] mx-auto">
          <h2 className="text-2xl !font-bold !m-0">Последние новости</h2>
          <div className="py-2.5 px-4 cursor-pointer hover:bg-black hover:text-white duration-200 text-[13px] !font-semibold rounded-md bg-[#F6F8FB] text-[#117FE3]">Больше новостей</div>
        </div>
        <NewsCards />
      </div>
    </>
  );
};

export default AboutTheCompany;
