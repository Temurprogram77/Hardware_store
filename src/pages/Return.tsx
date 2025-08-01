import { Link } from "react-router-dom"
import Questions from "../components/Questions"
import Advantages from "../components/Advantages"
import Advertisement from "../components/Advertisement"
import Names from "../components/Names"
interface Review {
  key: number,
  quiz: string,
  answer: string,
}
const quizs:Review[]=[
    {
    key: 1,
    quiz: "Куда обращаться в случае поломки в течении гарантийного срока?",
    answer: "Был не раз, рекомендую",
  },
  {
    key: 2,
    quiz: "Куда обращаться в случае поломки в течении гарантийного срока?",
    answer: "Проводится платная диагностика и ремонт товара",
  },
  {
    key: 3,
    quiz: "Есть ли гарантийный ремонт?",
    answer: "Был не раз, рекомендую",
  },
  {
    key: 4,
    quiz: "Какой срок действия гарантии?",
    answer: "Был не раз, рекомендую",
  }
]
const Return:React.FC = () => {
  return (
    <section className="mt-8 max-w-[1470px] mx-auto px-4">
      <Names name="Возврат" link="/return" />

      <div className="w-full mt-8 items-center">
        <h1 className="font-bold text-[32px] md:text-[40px] lg:text-[48px]">Возврат</h1>

        <div className="flex w-full flex-col md:flex-row gap-[2rem] md:justify-between">
          <div className="flex flex-col w-full md:w-[93%]">
          <div className="w-full mt-8 leading-7 text-gray-700">
            <p className="text-[14px] md:text-[16px]">
              Возврат или обмен товара надлежащего качества, возможен в течение 14 дней с момента покупки в соответствие со ст.26.1 Закона «О защите прав потребителей», сохранивший товарный вид и потребительские свойства при наличии документов:
            </p>
            <ul className="ml-6 list-disc marker:text-gray-700">
              <li>подтверждающих покупку и оплату товара;</li>
              <li>документа подтверждающего личность.</li>
            </ul>
            <p className="leading-8 mt-6">
              Для этого достаточно приехать в часы работы наших складов и ТЦ и оформить возврат. <br />
              Возврат товара возможен без упаковки, но при условии сохранения всей комплектации и потребительских свойств товара. <br />
              Возврат денежных средств за товар оплаченных банковской картой, осуществляется на ту же карту. <br />
              При заказе товара с доставкой вы можете отказаться от заказа до его передачи. <br />
              Если же машина с вашим заказом уже выехала на адрес, мы вернем вам стоимость товара за исключением расходов на доставку. <br />
              Ограничения по возврату товара Мы не принимаем на возврат товары, имеющие индивидуально-определенные свойства, если указанный товар может быть использован исключительно потребителем, который купил его. <br />
              Например, товары под заказ, колерованная краска, строительные и отделочные материала отпускаемые на метраж, уцененный товар, а так же все виды заказного материала.
            </p>
          </div>

          <div className="w-full mt-12">
            <h3 className="font-medium text-[18px] md:text-[20px] leading-[26px] text-[#2C333D]">Обращение по гарантии</h3>
            <div>
             {
  quizs.map(item => (
    <Questions key={item.key} quiz={item} />
  ))
}

            </div>
          </div>
        </div>
              <Advertisement/>
        </div>
      </div>
    </section>
  )
}

export default Return
