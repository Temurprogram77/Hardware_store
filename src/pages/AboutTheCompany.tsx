import { Link } from "react-router-dom";
import { images } from "../assets/images";
import NewsCards from "../components/NewsCards";
import Names from "../components/ui/Names";

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
          <div key={index} className={`grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6`}>
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
        <div className="max-w-[1460px] relative z-2 2xl:mx-auto mx-3 py-5">
          <div className="lg:w-1/2 w-full">
            <Names link="/about" name="О компании" />
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
        <div className="lg:block z-1 hidden absolute bottom-0 right-0 h-full">
          <img src={aboutImage1} className="h-full" alt="" />
        </div>
      </div>

      <div className="max-w-[1460px] 2xl:mx-auto mx-3 mt-12">
        <h2 className="text-2xl !font-bold mb-8">Почему именно мы</h2>
        <div className="flex flex-col gap-6">{renderedBlocks}</div>
      </div>
      <div className="max-w-[1460px] 2xl:mx-auto mx-3 my-10">
        <h2 className="text-2xl !font-bold !mb-8">История ООО “Стройоптторг”</h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          <div className="border-3 rounded-md p-4 pt-0 border-[#E6EEF6]">
            <h2 className="text-[#186FD4] text-[22px] px-3 w-fit bg-white transform -translate-y-3 !m-0 !font-bold">
              2003
            </h2>
            <div className="text-[15px] mb-4 font-semibold text-[#2C333D]">
              Компания ООО «Стройоптторг» была зарегистрирована в реестре и
              получила свидетельство о регистрации 1 октября 2003 года.
            </div>
            <div className="mb-4 flex items-center gap-2 text-[13px]">
              <span className="text-[#EE0906]">•</span>Общая площадь земельного
              участка составляла{" "}
              <span className="font-semibold">10 000 м²</span>.
            </div>
            <div className="mb-4 flex items-center gap-2 text-[13px]">
              <span className="text-[#EE0906]">•</span>площадь складских
              помещений <span className="font-semibold">850 м²</span>.
            </div>
            <div className="mb-4 flex items-center gap-2 text-[13px]">
              <span className="text-[#EE0906]">•</span>численность сотрудников{" "}
              <span className="font-semibold">10 человек</span>.
            </div>
          </div>
          <div className="border-3 rounded-md p-4 pt-0 border-[#E6EEF6]">
            <h2 className="text-[#186FD4] text-[22px] px-3 w-fit bg-white transform -translate-y-3 !m-0 !font-bold">
              2008
            </h2>
            <div className="text-[15px] mb-4 font-semibold text-[#2C333D]">
              С годами компания динамично росла и развивалась и уже к 2008 г. мы
              достигли более высоких результатов:
            </div>
            <div className="mb-4 flex items-center gap-2 text-[13px]">
              <span className="text-[#EE0906]">•</span>общая площадь базы
              составила <span className="font-semibold">58 000 м²</span>.
            </div>
            <div className="mb-4 flex items-center gap-2 text-[13px]">
              <span className="text-[#EE0906]">•</span>площадь складских
              помещений <span className="font-semibold">5 200 м²</span>.
            </div>
            <div className="mb-4 flex items-center gap-2 text-[13px]">
              <span className="text-[#EE0906]">•</span>численность коллектива
              возросла до <span className="font-semibold">300 человек</span>.
            </div>
          </div>
          <div className="border-3 rounded-md p-4 pt-0 border-[#E6EEF6]">
            <h2 className="text-[#186FD4] text-[22px] px-3 w-fit bg-white transform -translate-y-3 !m-0 !font-bold">
              2018
            </h2>
            <div className="text-[15px] mb-4 font-semibold text-[#2C333D]">
              К своему 15-ти летнему юбилею компания расширила торговые площади
              до 17 805.3 м²
            </div>
            <div className="mb-4 flex items-center gap-2 text-[13px]">
              <span className="text-[#EE0906]">•</span>Торговый центр №1 -{" "}
              <span className="font-semibold">5 545 м²</span>.
            </div>
            <div className="mb-4 flex items-center gap-2 text-[13px]">
              <span className="text-[#EE0906]">•</span>Торговый центр№2-{" "}
              <span className="font-semibold">3 951,2 м²</span>.
            </div>
            <div className="mb-4 flex items-center gap-2 text-[13px]">
              <span className="text-[#EE0906]">•</span>Складские помещения -{" "}
              <span className="font-semibold">8 308,6 м²</span>.
            </div>
          </div>
          <div className="border-3 rounded-md p-4 pt-0 border-[#186FD4]">
            <h2 className="text-center !mt-3 text-[#186FD4] text-[22px] !font-semibold">
              Сегодня
            </h2>
            <div className="grid gap-2 sm:grid-cols-2 grid-cols-1">
              <div className="w-[300px] mx-auto text-start">
                <h2 className="text-[#186FD4] text-[18px] !font-semibold">17 805,3 м²</h2>
                <p className="text-[13px] !m-0">- торговых и складских помещений</p>
              </div>
              <div className="w-[300px] mx-auto text-start">
                <h2 className="text-[#186FD4] text-[18px] !font-semibold">50 000+</h2>
                <p className="text-[13px] !m-0">- наименований товаров</p>
              </div>
              <div className="w-[300px] mx-auto text-start">
                <h2 className="text-[#186FD4] text-[18px] !font-semibold">2 500+</h2>
                <p className="text-[13px] !m-0">- постоянных клиентов</p>
              </div>
              <div className="w-[300px] mx-auto text-start">
                <h2 className="text-[#186FD4] text-[18px] !font-semibold">440</h2>
                <p className="text-[13px] !m-0">- опытных сотрудников</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <div className="flex justify-between items-center max-w-[1460px] mx-auto">
          <h2 className="text-2xl !font-bold !m-0">Последние новости</h2>
          <div className="py-2.5 px-4 cursor-pointer hover:bg-black hover:text-white duration-200 text-[13px] !font-semibold rounded-md bg-[#F6F8FB] text-[#117FE3]">
            Больше новостей
          </div>
        </div>
        <NewsCards />
      </div>
    </>
  );
};

export default AboutTheCompany;
