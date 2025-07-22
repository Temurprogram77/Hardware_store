import { Link } from "react-router-dom"

const Reviews = () => {
  return (
    <section className="mt-8 max-w-[1270px] mx-auto px-4">
        <ul className="flex text-[15px] gap-4 flex-wrap">
        <li>
          <Link to={'/'}>Стройоптторг</Link>
        </li>
        /
        <li className="text-gray-500">
          <Link to={'/reviews'}>Отзывы</Link>
        </li>
      </ul>
      <div className="w-full mt-8 items-center">
           <h1 className="font-bold text-[32px] md:text-[40px] lg:text-[48px]">Отзывы</h1>
           <div className="flex flex-col w-full md:w-[76%]">
                <div>
                  <button className="w-[143px] h-[45px] rounded-[6px]"></button>
                </div>
           </div>
      </div>
    </section>
  )
}

export default Reviews