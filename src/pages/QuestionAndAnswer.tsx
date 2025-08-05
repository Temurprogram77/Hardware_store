import { Link } from "react-router-dom"
import Questions from "../components/Acardion"
import Advertisement from "../components/Advertisement";
import { quizs2 } from "../data/Rew";

const QuestionAndAnswer:React.FC = () => {

  return (
    <section className="mt-8 max-w-[1470px] mb-[3rem] mx-auto px-4">
  <ul className="flex text-[15px] gap-4 flex-wrap">
    <li>
      <Link to={'/'}>Стройоптторг</Link>
    </li>
    /
    <li className="text-gray-500">
      <Link to={'/faq'}>Вопрос-ответ</Link>
    </li>
  </ul>

  <div className="flex flex-col md:flex-row justify-between gap-8 mt-8">
    <div className="flex flex-col w-full md:w-[93%]">
      <h1 className="font-bold text-[32px] md:text-[40px] lg:text-[48px] mb-8">Вопрос-ответ</h1>
      <div>
        {
          quizs2.map(item => (
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