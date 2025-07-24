import { Link } from "react-router-dom"
import aksiya1 from '../assets/aksiya1.png'
import aksiya2 from '../assets/aksiya2.png'
import aksiya3 from '../assets/aksiya3.png'
import aksiya4 from '../assets/aksiya4.png'
import aksiya5 from '../assets/aksiya5.png'
import aksiya6 from '../assets/aksiya6.png'
import aksiya7 from '../assets/aksiya7.png'
import aksiya8 from '../assets/aksiya8.png'
import aksiya9 from '../assets/aksiya9.png'
import aksiya10 from '../assets/aksiya10.png'
import aksiya11 from '../assets/aksiya11.png'
import aksiya12 from '../assets/aksiya12.png'
import aksiya13 from '../assets/aksiya13.png'
import aksiya14 from '../assets/aksiya14.png'
import aksiya15 from '../assets/aksiya15.png'
import aksiya16 from '../assets/aksiya16.png'
import aksiya17 from '../assets/aksiya17.png'
import aksiya18 from '../assets/aksiya18.png'
import aksiya19 from '../assets/aksiya19.png'
import aksiya20 from '../assets/aksiya20.png'
import { Button } from "antd";
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
    img:aksiya2
  },
  {
    title: "Напольные покрытия",
    description: "Действуют скидки до 25% на напольные покрытия из каталога",
    discount: "до -25%",
    link: "Подробнее об акции",
    img:aksiya3
  },
  {
    title: "Всё для отопления",
    description: "Подготовьтесь к отопительному сезону и сэкономьте до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya4
  },
  {
    title: "Всё для отопления",
    description: "Подготовьтесь к отопительному сезону и сэкономьте до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya5
  },
  {
    title: "Всё для отопления",
    description: "Подготовьтесь к отопительному сезону и сэкономьте до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya6
  },
  {
    title: "Всё для отопления",
    description: "Подготовьтесь к отопительному сезону и сэкономьте до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya7
  },
  {
    title: "Всё для отопления",
    description: "Подготовьтесь к отопительному сезону и сэкономьте до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya8
  },
  {
    title: "Всё для отопления",
    description: "Подготовьтесь к отопительному сезону и сэкономьте до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya9
  },
  {
    title: "Всё для отопления",
    description: "Подготовьтесь к отопительному сезону и сэкономьте до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya10
  },
  {
    title: "Всё для отопления",
    description: "Подготовьтесь к отопительному сезону и сэкономьте до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya11
  },
  {
    title: "Всё для отопления",
    description: "Подготовьтесь к отопительному сезону и сэкономьте до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya12
  },
  {
    title: "Всё для отопления",
    description: "Подготовьтесь к отопительному сезону и сэкономьте до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya13
  },
  {
    title: "Всё для отопления",
    description: "Подготовьтесь к отопительному сезону и сэкономьте до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya14
  },
  {
    title: "Всё для отопления",
    description: "Подготовьтесь к отопительному сезону и сэкономьте до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya15
  },
  {
    title: "Всё для отопления",
    description: "Подготовьтесь к отопительному сезону и сэкономьте до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya16
  },
  {
    title: "Всё для отопления",
    description: "Подготовьтесь к отопительному сезону и сэкономьте до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya17
  },
  {
    title: "Всё для отопления",
    description: "Подготовьтесь к отопительному сезону и сэкономьте до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya18
  },
  {
    title: "Всё для отопления",
    description: "Подготовьтесь к отопительному сезону и сэкономьте до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya19
  },
  {
    title: "Лакокрасочные материалы",
    description: "Акция на все лакокрасочные материалы. Скидки до 30%",
    discount: "Скидки до 30%",
    link: "Подробнее об акции",
    img:aksiya20
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
                <img className="absolute w-full h-full object-cover rounded-[8px]" src={item.img} alt={item.description} />
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