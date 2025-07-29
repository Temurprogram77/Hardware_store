import { Breadcrumb } from 'antd';
import Advertisement from "../components/Advertisement"

const cardList = [
  "МИР",
  "VISA International",
  "Mastercard Worldwide",
  "JCB"
];
const paymentMethods = [
  "Банковской картой с помощью платежной системы на сайте или на кассе при получении заказа.",
  "Наличными на кассе при получении заказа",
  "При получении заказа просим Вас внимательно осмотреть товар, проверить его на предмет наличия внешних дефектов и комплектацию."
];
const creditRequirements = [
  "Гражданство: Российская Федерация",
  "Возраст на момент предоставления кредита: не менее 21 года.",
  "Возраст на момент возврата кредита по договору: не более 70 лет.",
  "Использование сервисов Банка: держатель дебетовой банковской карты, выпущенной Банком, заключивший с Банком Договор банковского обслуживания, а также подключившийся к услуге “Мобильный банк” и системе СберБанк Онлайн.",
  "Регистрация: наличие постоянной(временной) регистрации по месту жительства/пребывания на территории Российской Федерации."
];
const creditTerms = [
  "Без первоначального взноса.",
  "Срок действия кредита: от 3 до 36 месяцев.",
  "Сумма кредита от 3000 до 300 000 руб."
];




const Payment = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className="md:pr-4 md:pl-4 md:mt-4 w-[1490px] max-md:w-[355px] mt-5">
            {/* Breadcrumb */}
              <Breadcrumb className="mb-6">
                <Breadcrumb.Item>
                  <span className="text-black">Стройоптторг</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <span className="text-gray-400">Способы оплаты</span>
                </Breadcrumb.Item>
              </Breadcrumb>
              <h1 className="!font-bold !mt-5 text-[32px] text-[#2c333d] md:text-[35px] lg:text-[40px]">Способы оплаты</h1>
              <div className='block gap-4 md:flex'>
                <div className='overflow-x-hidden'>
                  <p className='text-[#1e1e1e] text-[23px] leading-7 !font-bold md:text-[16px]'>При заказе доставки</p>
                  <p className='md:text-[15px] text-[#1e1e1e] leading-6 font-sans text-[19px]'>Банковской картой с помощью платежной системы на сайте. При оформлении заказа в разделе Оплата мы переадресуем Вас на платежную страницу системы, где необходимо будет указать реквизиты вашей банковской карты (номер, дата окончания действия карты, имя владельца). После ввода всех необходимых данных нажмите кнопку «Оплатить».</p>
                  <p className='md:text-[15px] text-[#1e1e1e] leading-6 font-sans text-[19px]'>Для выбора оплаты товара с помощью банковской карты на соответствующей странице необходимо нажать кнопку Оплата заказа банковской картой. Оплата происходит через ПАО СБЕРБАНК с использованием банковских карт следующих платёжных систем:</p>
                  <ul className="relative left-8 flex gap-1 flex-col w-[300px] md:w-full">
                    {cardList.map((card, index) => (
                      <li
                        key={index}
                        className="list-disc !hover:text-[#1e1e1e] marker:text-red-500 md:text-[14px] md:w-[1150px] leading-7 font-sans text-[17px] w-[320px]">
                          {card}
                      </li>
                    ))}
                  </ul>
                  <p className='md:text-[15px] text-[#1e1e1e] leading-6 font-sans text-[19px]'><span className='text-[#1e1e1e] font-sans text-18px] leading-7 !font-bold md:text-[15px]'>Наличными</span> водителю при получении заказа.</p>
                  <p className='md:text-[15px] text-[#1e1e1e] leading-6 font-sans text-[19px]'>Наш менеджер позвонит вам и договорится об удобном для вас времени получении заказа. Скомплектованный заказ будет ждать вас на складе.</p>
                  <p className='md:text-[15px] text-[#1e1e1e] leading-6 font-sans text-[19px]'>Стоимость доставки определяется в зависимости от габаритов и удаленности до места назначения и дополнительно включается в заказ.</p>
                  <h2 className='text-[#2c333d] text-2xl !font-bold md:text-[18px]'>При самовывозе</h2>
                  <ul className="relative left-8 flex gap-5 flex-col w-[300px] md:w-full">
                    {paymentMethods.map((text, index) => (
                      <li
                        key={index}
                        className="list-disc !hover:text-[#1e1e1e] marker:text-red-500 md:text-[14px] md:w-[1150px] leading-7 font-sans text-[17px] w-[320px]">
                        {text}
                      </li>
                    ))}
                  </ul>
                  <h2 className='text-[#2c333d] text-2xl !font-bold md:text-[18px]'>Сервис “Покупай со Сбером”</h2>
                  <p className='text-[#1e1e1e] font-sans text-18px] leading-7 !font-bold md:text-[15px]'>Основные требования:</p>
                  <ul className="relative left-8 flex gap-5 flex-col w-[300px] md:w-full">
                    {creditRequirements.map((item, index) => (
                      <li
                        key={index}
                        className="list-disc !hover:text-[#1e1e1e] marker:text-red-500 md:text-[14px] md:w-[1150px] leading-7 font-sans text-[17px] w-[320px]">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className='text-[#1e1e1e] font-sans text-18px] leading-7 !font-bold md:text-[15px]'>Преимущества Сервиса:</p>
                  <ul className="relative left-8 flex gap-5 flex-col w-[300px] md:w-full">
                    {creditTerms.map((item, index) => (
                      <li
                        key={index}
                        className="list-disc !hover:text-[#1e1e1e] marker:text-red-500 md:text-[14px] md:w-[1150px] leading-7 font-sans text-[17px] w-[320px]">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p className='text-[#1e1e1e] font-sans text-18px] leading-7 !font-bold md:text-[15px]'>Необходимые действия:</p>
                  <ul className='relative left-8 flex gap-5 flex-col w-[300px] md:w-full'>
                    <li className='list-disc !hover:text-[#1e1e1e] marker:text-red-500 md:text-[14px] md:w-[1150px] leading-7 font-sans text-[17px] w-[320px]'>Выберите на сайте товар, нажмите “Добавить в корзину”, далее перейдите на страницу “Корзина”, щелкнув по ее значку в полосе верхнего меню.</li>
                    <li className='list-disc !hover:text-[#1e1e1e] marker:text-red-500 md:text-[14px] md:w-[1150px] leading-7 font-sans text-[17px] w-[320px]'>На странице “Корзина” нажмите кнопку “Оформить заказ”.</li>
                    <li className='list-disc !hover:text-[#1e1e1e] marker:text-red-500 md:text-[14px] md:w-[1150px] leading-7 font-sans text-[17px] w-[320px]'>В блоке “Оплата” выберете способ оплаты “Покупай со Сбером” (оформление покупки в кредит).</li>
                    <li className='list-disc !hover:text-[#1e1e1e] marker:text-red-500 md:text-[14px] md:w-[1150px] leading-7 font-sans text-[17px] w-[320px]'>Заполните все обязательные поля, отмеченные знаком “*”.</li>
                    <li className='list-disc !hover:text-[#1e1e1e] marker:text-red-500 md:text-[14px] md:w-[1150px] leading-7 font-sans text-[17px] w-[320px]'>Когда откроется СберБанк Онлайн, авторизуйтесь и заполните заявку. Рассмотрение заявки займет не более 2-х минут.</li>
                    <li className='list-disc !hover:text-[#1e1e1e] marker:text-red-500 md:text-[14px] md:w-[1150px] leading-7 font-sans text-[17px] w-[320px]'>Если кредит одобрен, деньги за покупку автоматически будут перечислены на счет ООО “Стройоптторг”.</li>
                    <li className='list-disc !hover:text-[#1e1e1e] marker:text-red-500 md:text-[14px] md:w-[1150px] leading-7 font-sans text-[17px] w-[320px]'>Далее Вы выбираете комфортный способ и время доставки или самовывоза.</li>
                  </ul>
                  <p className='md:text-[15px] text-[#1e1e1e] leading-6 font-sans text-[19px]'>Ознакомиться подробнее с условиями кредитования можно по ссылке – <a href="">https://pokupay.ru/credit_terms</a></p>
                  <h2 className='text-[#2c333d] text-2xl !font-bold md:text-[18px]'>Возврат товара</h2>
                </div>
                <Advertisement/>
              </div>
        </div>
    </div>
  )
}

export default Payment