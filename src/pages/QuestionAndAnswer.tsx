import { Link } from "react-router-dom"
import Questions from "../components/Questions"
import Advertisement from "../components/Advertisement";

const QuestionAndAnswer:React.FC = () => {
  interface Review {
  key: number,
  quiz: string,
  answer: string,
}
const quizs: Review[] = [
  {
    key: 1,
    quiz: "Могу ли я сделать возврат материалов, не использованных в процессе строительства?",
    answer: "Вы можете вернуть материалы, если они сохранили товарный вид и потребительские свойства, а также при наличии чека.",
  },
  {
    key: 2,
    quiz: "Входит ли в стоимость доставки разгрузка машины?",
    answer: "Разгрузка не входит в стоимость доставки и оплачивается отдельно, если не оговорено иное.",
  },
  {
    key: 3,
    quiz: "Продаются ли у вас в магазине товары под заказ, которые можно купить только по предоплате?",
    answer: "Да, такие товары доступны только по предварительной оплате и не подлежат возврату.",
  },
  {
    key: 4,
    quiz: "Какая минимальная сумма заказа?",
    answer: "Минимальной суммы заказа нет, но доставка может быть доступна от определённой суммы.",
  },
  {
    key: 5,
    quiz: "Есть ли у вас бесплатная доставка?",
    answer: "Бесплатная доставка возможна при заказе от установленной суммы, уточните у менеджера.",
  },
  {
    key: 6,
    quiz: "Есть ли возможность оформить рассрочку или кредит при покупке? Если есть, то какие условия?",
    answer: "Система кредитования и рассрочки действует в организации при обращении к кредитным специалистам, которые оформят вам договор по предложенным кредитным продуктам от банка, в который будет подана заявка.",
  },
  {
    key: 7,
    quiz: "Возможно ли проверить инструмент или технику перед покупкой?",
    answer: "Был не раз, рекомендую",
  },
  {
    key: 8,
    quiz: "Какие дополнительные услуги есть у вас?",
    answer: "Мы предоставляем услуги доставки, подъема на этаж, а также профессиональные консультации.",
  },
  {
    key: 9,
    quiz: "Как часто у вас проходят акции?",
    answer: "Акции проводятся регулярно, следите за обновлениями на сайте или в наших соцсетях.",
  }
];

  return (
    <section className="mt-8 max-w-[1470px] mx-auto px-4">
  <ul className="flex text-[15px] gap-4 flex-wrap">
    <li>
      <Link to={'/'}>Стройоптторг</Link>
    </li>
    /
    <li className="text-gray-500">
      <Link to={'/return'}>Вопрос-ответ</Link>
    </li>
  </ul>

  <div className="flex flex-col md:flex-row justify-between gap-8 mt-8">
    <div className="flex flex-col w-full md:w-[93%]">
      <h1 className="font-bold text-[32px] md:text-[40px] lg:text-[48px] mb-8">Вопрос-ответ</h1>
      <div>
        {
          quizs.map(item => (
            <Questions key={item.key} quiz={item} />
          ))
        }
      </div>
    </div>

    <Advertisement/>
  </div>
</section>

  )
}

export default QuestionAndAnswer