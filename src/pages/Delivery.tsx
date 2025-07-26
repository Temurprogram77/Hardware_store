import { Breadcrumb } from 'antd';
import Advertisement from "../components/Advertisement"
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import right from '../assets/right-arrow.svg'
import left from '../assets/left-arrow.svg'
import Rectangle from '../assets/Rectangle 48.png';
import Rectangle2 from '../assets/Rectangle 49.png';
import Rectangle3 from '../assets/Rectangle 50.png';
import Rectangle4 from '../assets/Rectangle 51.png';


const images = [Rectangle, Rectangle2, Rectangle3, Rectangle4, Rectangle, Rectangle2, Rectangle3, Rectangle4];



const Delivery = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="pr-4 pl-4 mt-4 max-w-[1500px]">
      {/* Breadcrumb */}
              <Breadcrumb className="mb-6">
                <Breadcrumb.Item>
                  <span className="text-black">Стройоптторг</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <span className="text-gray-400">Доставка</span>
                </Breadcrumb.Item>
              </Breadcrumb>
        <h1 className="!font-bold !mt-5 text-[32px] text-[#2c333d] md:text-[40px] lg:text-[48px]">Доставка</h1>
        <div className='flex gap-4'>
          <div className='flex flex-col gap-2.5'>
            <p className='text-[15px] text-[#1e1e1e]'>Мы всегда готовы доставить приобретенный Вами товар в удобное для Вас время.</p>
            <p className='text-[15px] text-[#1e1e1e]'>Стоимость доставки товаров определяется исходя из веса, габаритов удаленности до места назначения. Доставка осуществляется до подъезда дома, офиса.</p>
            <h2 className='text-[#2c333d] !font-bold text-[18px]'>Наш интернет-магазин предлагает несколько вариантов получения товара:</h2>
            <p className='!font-bold text-[16px] text-[#2c333d]'>1. Самовывоз с территории компании.</p>
            <p className='text-[15px] text-[#1e1e1e]'>Вы можете самостоятельно забрать заказанные товары с наших складов по адресу: г.Черкесск, ул.Октябрьская, 301</p>
            <h5 className='!font-bold text-[15px] text-[#1e1e1e]'>Режим работы:</h5>
            <ul className='relative left-8'>
              <li className='list-disc !hover:text-[#1e1e1e] marker:text-red-500 '>Понедельник- суббота с 8:00 до 18:00</li>
              <li className='list-disc !hover:text-[#1e1e1e] marker:text-red-500 '>Воскресенье с 8:00 до 17:00</li>
            </ul>
            <p className='text-[15px] text-[#1e1e1e]'>Отгрузка товара возможна, только после поступления звонка от менеджера о его готовности к выдаче.</p>
            <p className='!font-bold text-[16px] text-[#2c333d]'>2. Быстрая доставка по Карачаево- Черкесской республике.</p>
            <p className='text-[15px] text-[#1e1e1e]'><span className='!font-bold text-[15px] text-[#1e1e1e]'>ООО «Стройоптторг»</span> предлагает быструю и выгодную доставку по г.Черкесску и регионам Карачаево-Черкесской республики.</p>
            <p className='text-[15px] text-[#1e1e1e]'>На отправку интернет-заказов собственным транспортом компании, действует скидка -25%.Доставка товаров весом до 20 кг. возможна через сервис «Яндекс Такси» согласно тарифу перевозчика.</p>
            <p className='text-[15px] text-[#1e1e1e]'>Мы доставляем заказы с 8:00 до 18:00. Время и день согласовывается с менеджером при оформлении заказа.</p>
            <p className='!font-bold text-[15px] text-[#1e1e1e]'>Правила доставки интернет-заказов:</p>
            <p className='text-[15px] text-[#1e1e1e]'>Доставка интернет – заказов осуществляется после полной оплаты (включая стоимость услуги за доставку) на сайте любым удобным для вас способом.</p>
            <ul className='relative left-8'>
              <li className='list-disc !hover:text-[#1e1e1e] marker:text-red-500 w-[1100px]'>Производится доставка только после подтверждения о готовности получить товар. В день доставки просим оставаться на связи в согласованное время по указанному в заказе номеру телефона;</li>
              <li className='list-disc !hover:text-[#1e1e1e] marker:text-red-500 '>При доставке просьба обеспечить свободный подъезд к планируемому месту разгрузки.</li>
              <li className='list-disc !hover:text-[#1e1e1e] marker:text-red-500 '>Выгрузка и подъем товара на этаж не входят в стоимость доставки.</li>
              <li className='list-disc !hover:text-[#1e1e1e] marker:text-red-500 '>Прием товара с доставкой определяется по внешнему виду, комплектации, отсутствию механических повреждений в момент доставки.</li>
            </ul>
            <div className='bg-[#f9fafb] h-[45px] flex items-center'>
              <p className='text-[#003b73] relative left-[33px] top-2.5'>После приема товара претензии покупателя, касающиеся комплектации и механических повреждений товара, не принимаются.</p>
            </div>
            <p className='text-[15px] text-[#1e1e1e]'>Если у Вас возникнут вопросы по качеству или количеству товара, Вы можете обратиться за разъяснениями по номеру телефона +7(8782)-28-42-72.</p>
            <p className='!font-bold text-[16px] text-[#2c333d]'>3. Доставка транспортной компанией.</p>
            <p className='text-[15px] w-[1150px] text-[#1e1e1e]'>Для доставки интернет-заказов по России, можно воспользоваться услугами транспортных компаний. Только после 100% оплаты и сбора заказа происходит доставка товаров. До терминала транспортных компаний г.Черкесска, мы доставляем ваш заказ-бесплатно. Доставка осуществляется транспортными компаниям «СДЭК» и «ГлавДоставка». При оформлении заказа, Вы можете сообщить менеджеру желаемую транспортную компанию.</p>
            <p className='!font-bold text-[16px] text-[#2c333d]'>4.Почтой России.</p>
            <p className='!font-bold text-[15px] text-[#1e1e1e]'>Способы получения заказа Почтой России:</p>
            <ul className='relative left-8'>
              <li className='list-disc !hover:text-[#1e1e1e] marker:text-red-500 '>Самовывоз из отделения почтовой связи. Ваши заказы доставляются до выбранного почтового отделения</li>
              <li className='list-disc !hover:text-[#1e1e1e] marker:text-red-500 '>Курьером на дом</li>
            </ul>
            <p className='text-[15px] w-[1150px] text-[#1e1e1e]'>После оформления интернет заказа и отправки товаров, Вы получите трек-номер, для мониторинга этапов доставки на сайте или в мобильном приложении Почты России.</p>
            <p className='text-[15px] w-[1150px] text-[#1e1e1e]'>Наша компания понимает и ценит Ваше время, поэтому оперативная доставка приобретенных товаров, дает возможность как можно быстрее завершить ремонт и, наконец, взглянуть с восхищением на получившийся результат.</p>
          </div>
              <Advertisement/>
        </div>

            <div className="relative w-full max-w-[1423px] mt-10 mx-auto px-4">
              <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                //@ts-ignore
                swiper.params.navigation.prevEl = prevRef.current;
                //@ts-ignore
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              spaceBetween={20}
              slidesPerView={4}
              slidesPerGroup={1}
               breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              className="rounded-md overflow-hidden">
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={src}
                    alt={`Image ${index + 1}`}
                    className="w-full h-[180px] md:h-[200px] object-cover rounded"/>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* chap tugma */}
              <button
                ref={prevRef}
                className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 bg-white px-2 py-2 rounded-full shadow z-10">
                  <img src={left} alt="left" className="w-4 h-4 md:w-5 md:h-5" />
              </button>

              {/* ung tugma */}
              <button
                ref={nextRef}
                className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 bg-white px-2 py-2 rounded-full shadow z-10">
                  <img src={right} alt="right" className="w-4 h-4 md:w-5 md:h-5" />
              </button>

            </div>
              
    </div>
  )
}

export default Delivery