import { Link } from "react-router-dom"
import aksiya1 from '../assets/aksiya1.png'
import { Button, Card, Image } from "antd";
interface stock{
  title:string,
  description:string,
  discount:string,
  link:string,
  img:any
}
const Stock:React.FC= () => {
  const Stocks:stock[]= [
  {
    title: "Метизные изделия",
    description: "Делайте покупки выгодно",
    discount: "до -40%",
    link: "Подробнее об акции",
    img:aksiya1
  },
  {
    title: "Лакокрасочные материалы",
    description: "Акция на все лакокрасочные материалы. Скидки до 30%",
    discount: "Скидки до 30%",
    link: "Подробнее об акции",
    img:aksiya1
  },
  {
    title: "Напольные покрытия",
    description: "Действуют скидки до 25% на напольные покрытия из каталога",
    discount: "до -25%",
    link: "Подробнее об акции",
    img:aksiya1
  },
  {
    title: "Всё для отопления",
    description: "Подготовьтесь к отопительному сезону и сэкономьте до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya1
  },
  {
    title: "Всё для отопления",
    description: "Подготовьтесь к отопительному сезону и сэкономьте до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya1
  },
  {
    title: "Всё для отопления",
    description: "Подготовьтесь к отопительному сезону и сэкономьте до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya1
  },
  {
    title: "Всё для отопления",
    description: "Подготовьтесь к отопительному сезону и сэкономьте до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya1
  },
  {
    title: "Всё для отопления",
    description: "Подготовьтесь к отопительному сезону и сэкономьте до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya1
  },
  {
    title: "Всё для отопления",
    description: "Подготовьтесь к отопительному сезону и сэкономьте до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya1
  },
  {
    title: "Всё для отопления",
    description: "Подготовьтесь к отопительному сезону и сэкономьте до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya1
  },
  {
    title: "Всё для отопления",
    description: "Подготовьтесь к отопительному сезону и сэкономьте до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya1
  },
  {
    title: "Всё для отопления",
    description: "Подготовьтесь к отопительному сезону и сэкономьте до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya1
  },
  {
    title: "Всё для отопления",
    description: "Подготовьтесь к отопительному сезону и сэкономьте до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya1
  },
  {
    title: "Всё для отопления",
    description: "Подготовьтесь к отопительному сезону и сэкономьте до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya1
  },
  {
    title: "Всё для отопления",
    description: "Подготовьтесь к отопительному сезону и сэкономьте до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya1
  },
  {
    title: "Всё для отопления",
    description: "Подготовьтесь к отопительному сезону и сэкономьте до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya1
  },
  {
    title: "Всё для отопления",
    description: "Подготовьтесь к отопительному сезону и сэкономьте до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya1
  },
  {
    title: "Всё для отопления",
    description: "Подготовьтесь к отопительному сезону и сэкономьте до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya1
  },
  {
    title: "Всё для отопления",
    description: "Подготовьтесь к отопительному сезону и сэкономьте до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya1
  },
  {
    title: "Лакокрасочные материалы",
    description: "Акция на все лакокрасочные материалы. Скидки до 30%",
    discount: "Скидки до 30%",
    link: "Подробнее об акции",
    img:aksiya1
  },
];

  return (
    <section className="mt-8 max-w-[1270px] mx-auto px-4">
        <ul className="flex text-[15px] gap-4 flex-wrap">
        <li>
          <Link to={'/'}>Стройоптторг</Link>
        </li>
        /
        <li className="text-gray-500">
          <Link to={'/return'}>Акции</Link>
        </li>
      </ul>
      <div className="w-full mt-8 items-center">
        <h1 className="font-bold text-[32px] md:text-[40px] lg:text-[48px]">Акции</h1>
        <div className="grid gap-[1.5rem] grid-cols-4">
          {
            Stocks.map((item)=>{
            return <div key={item.description}>
              <div className='relative h-[180px]'>
                <img className="absolute w-full h-full object-cover" src={item.img} alt={item.description} />
                <p className='absolute bottom-[2.3rem] left-3 w-[178px] font-medium text-[22px]'>{item.title}</p>
                <Button className='absolute bottom-[-8rem] left-2.5' type="primary">{item.discount}</Button>
              </div>
              <div className="flex flex-col leading-6 relative w-full h-[83px]">
                <h3 className="font-medium absolute top-[0.5rem] h-[52px]">{item.description}</h3>
              <Button type="link" className='absolute top-[3.3rem] left-[-4.9rem]'>{item.link}</Button>
              </div>
            </div>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Stock