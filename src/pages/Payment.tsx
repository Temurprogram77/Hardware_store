import { Breadcrumb } from 'antd';
import Advertisement from "../components/Advertisement"
import ReusableList from "../components/ReusableList";
import {
  cardList,
  paymentMethods,
  creditRequirements,
  creditTerms,
  purchaseSteps
} from "../data/data";


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
              <div className='block gap-4 md:flex md:mb-6'>
                <div className='overflow-x-hidden'>
                  <p className='text-[#1e1e1e] text-[23px] leading-7 !font-bold md:text-[16px]'>При заказе доставки</p>
                  <p className='md:text-[15px] text-[#1e1e1e] leading-6 font-sans text-[19px]'>Банковской картой с помощью платежной системы на сайте. При оформлении заказа в разделе Оплата мы переадресуем Вас на платежную страницу системы, где необходимо будет указать реквизиты вашей банковской карты (номер, дата окончания действия карты, имя владельца). После ввода всех необходимых данных нажмите кнопку «Оплатить».</p>
                  <p className='md:text-[15px] text-[#1e1e1e] leading-6 font-sans text-[19px]'>Для выбора оплаты товара с помощью банковской карты на соответствующей странице необходимо нажать кнопку Оплата заказа банковской картой. Оплата происходит через ПАО СБЕРБАНК с использованием банковских карт следующих платёжных систем:</p>
              <ReusableList items={cardList} />
                  <p className='md:text-[15px] text-[#1e1e1e] leading-6 font-sans text-[19px]'><span className='text-[#1e1e1e] font-sans text-18px] leading-7 !font-bold md:text-[15px]'>Наличными</span> водителю при получении заказа.</p>
                  <p className='md:text-[15px] text-[#1e1e1e] leading-6 font-sans text-[19px]'>Наш менеджер позвонит вам и договорится об удобном для вас времени получении заказа. Скомплектованный заказ будет ждать вас на складе.</p>
                  <p className='md:text-[15px] text-[#1e1e1e] leading-6 font-sans text-[19px]'>Стоимость доставки определяется в зависимости от габаритов и удаленности до места назначения и дополнительно включается в заказ.</p>
                  <h2 className='text-[#2c333d] text-2xl !font-bold md:text-[18px]'>При самовывозе</h2>
              <ReusableList items={paymentMethods} />
                  <h2 className='text-[#2c333d] text-2xl !font-bold md:text-[18px]'>Сервис “Покупай со Сбером”</h2>
                  <p className='text-[#1e1e1e] font-sans text-18px] leading-7 !font-bold md:text-[15px]'>Основные требования:</p>
              <ReusableList items={creditRequirements} />
                  <p className='text-[#1e1e1e] font-sans text-18px] leading-7 !font-bold md:text-[15px]'>Преимущества Сервиса:</p>
              <ReusableList items={creditTerms} />
                  <p className='text-[#1e1e1e] font-sans text-18px] leading-7 !font-bold md:text-[15px]'>Необходимые действия:</p>
              <ReusableList items={purchaseSteps} />
                  <p className='md:text-[15px] text-[#1e1e1e] leading-6 font-sans text-[19px]'>Ознакомиться подробнее с условиями кредитования можно по ссылке – <a className='' href="https://pokupay.ru/credit_terms">https://pokupay.ru/credit_terms</a></p>
                  <h2 className='text-[#2c333d] text-2xl !font-bold md:text-[18px]'>Возврат товара</h2>
                  <p className='md:text-[15px] text-[#1e1e1e] leading-6 font-sans text-[19px]'>Срок возврата товара надлежащего качества составляет 30 дней с момента получения товара. Возврат переведённых средств, производится на ваш банковский счёт в течение 5-30 рабочих дней (срок зависит от банка, который выдал вашу банковскую карту).</p>
                  <h2 className='text-[#2c333d] text-2xl !font-bold md:text-[18px]'>Описание процесса передачи данных</h2>
                  <p className='md:text-[15px] text-[#1e1e1e] leading-6 font-sans text-[19px]'>Для оплаты (ввода реквизитов Вашей карты) Вы будете перенаправлены на платёжный шлюз ПАО СБЕРБАНК. Соединение с платёжным шлюзом и передача информации осуществляется в защищённом режиме с использованием протокола шифрования SSL. В случае если Ваш банк поддерживает технологию безопасного проведения интернет-платежей Verified By Visa, MasterCard SecureCode, MIR Accept, J-Secure для проведения платежа также может потребоваться ввод специального пароля.</p>
                  <p className='md:text-[15px] text-[#1e1e1e] leading-6 font-sans text-[19px]'>Настоящий сайт поддерживает 256-битное шифрование. Конфиденциальность сообщаемой персональной информации обеспечивается ПАО СБЕРБАНК. Введённая информация не будет предоставлена третьим лицам за исключением случаев, предусмотренных законодательством РФ. Проведение платежей по банковским картам осуществляется в строгом соответствии с требованиями платёжных систем МИР, Visa Int., MasterCard Europe Sprl, JCB.</p>
                </div>
                <Advertisement/>
              </div>
        </div>
    </div>
  )
}

export default Payment