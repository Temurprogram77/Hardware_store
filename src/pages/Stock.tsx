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
import { Button, Checkbox, Input } from "antd";
import { useNavigate } from "react-router-dom";
interface stock{
  id:number,
  title:string,
  description:string,
  discount:string,
  link:string,
  img:any
}
const Stock:React.FC= () => {
const navigate = useNavigate();
  const Stocks:stock[]= [
  {
    id:1,
    title: "Метизные изделия",
    description: "Большой выбор метизов по выгодным ценам каждый день",
    discount: "до -40%",
    link: "Подробнее об акции",
    img:aksiya1
  },
  {
    id:2,
    title: "Лакокрасочные материалы",
    description: "Скидки на широкий ассортимент красок и лаков только до конца недели",
    discount: "Скидки до 30%",
    link: "Подробнее об акции",
    img:aksiya2
  },
  {
    id:3,
    title: "Напольные покрытия",
    description: "Купите качественное напольное покрытие и сэкономьте до 25%",
    discount: "до -25%",
    link: "Подробнее об акции",
    img:aksiya3
  },
  {
    id:4,
    title: "Всё для отопления",
    description: "Успейте приобрести товары для отопления со скидками до 30%",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya4
  },
  {
    id:5,
    title: "Всё для отопления",
    description: "Товары для обогрева дома по сниженным ценам уже сегодня",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya5
  },
  {
    id:6,
    title: "Всё для отопления",
    description: "Готовьтесь к зиме заранее – скидки на отопительное оборудование",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya6
  },
  {
    id:7,
    title: "Всё для отопления",
    description: "Приобретайте системы отопления выгодно, пока действует акция",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya7
  },
  {
    id:8,
    title: "Всё для отопления",
    description: "Только сейчас снижены цены на товары для отопления и обогрева",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya8
  },
  {
    id:9,
    title: "Всё для отопления",
    description: "Широкий выбор радиаторов и котлов по акционным ценам",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya9
  },
  {
    id:10,
    title: "Всё для отопления",
    description: "Горячее предложение на всё для отопления вашего дома",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya10
  },
  {
    id:11,
    title: "Всё для отопления",
    description: "Сэкономьте на покупке отопительного оборудования уже сегодня",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya11
  },
  {
    id:12,
    title: "Всё для отопления",
    description: "Лучшие цены на отопительные приборы в этом месяце",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya12
  },
  {
    id:13,
    title: "Всё для отопления",
    description: "Порадуйте себя теплом и выгодой с нашими скидками",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya13
  },
  {
    id:14,
    title: "Всё для отопления",
    description: "Подберите всё необходимое для отопления со скидкой",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya14
  },
  {
    id:15,
    title: "Всё для отопления",
    description: "Снижение цен на оборудование для отопления только до конца акции",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya15
  },
  {
    id:16,
    title: "Всё для отопления",
    description: "Акция на системы обогрева: выгодно и надежно",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya16
  },
  {
    id:17,
    title: "Всё для отопления",
    description: "Гарантия тепла и комфорта по акционной цене",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya17
  },
  {
    id:18,
    title: "Всё для отопления",
    description: "Не упустите шанс сэкономить на отоплении в этом сезоне",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya18
  },
  {
    id:19,
    title: "Всё для отопления",
    description: "Самое время купить всё для отопления дома по сниженной цене",
    discount: "до -30%",
    link: "Подробнее об акции",
    img:aksiya19
  },
  {
    id:20,
    title: "Лакокрасочные материалы",
    description: "Специальные предложения на лучшие бренды лакокрасочной продукции",
    discount: "Скидки до 30%",
    link: "Подробнее об акции",
    img:aksiya20
  },
];
  const handleClick = (id: number) => {
    const stock = Stocks.find((item) => id === item.id);
    localStorage.setItem("Stock", JSON.stringify(stock));
    navigate(`/stock/${id}`);
  };
  return (
    <section className="mt-8 max-w-[1270px] mx-auto px-4">
        <ul className="flex text-[15px] gap-4 flex-wrap">
        <li>
          <Link to={'/'}>Стройоптторг</Link>
        </li>
        /
        <li className="text-gray-500">
          <Link to={'/stock'}>Акции</Link>
        </li>
      </ul>
      <div className="w-full mt-8 items-center">
        <h1 className="font-bold text-[32px] md:text-[40px] lg:text-[48px]">Акции</h1>
        <div className="grid gap-[1.5rem] md:grid-cols-2 grid-cols-1 mb-[5rem] lg:grid-cols-3 xl:grid-cols-4">
          {
            Stocks.map((item)=>{
            return <div className="cursor-pointer" key={item.id} onClick={()=>handleClick(item.id)}>
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
        <section className="w-full flex flex-col md:flex-row justify-around items-center gap-[2rem] bg-[#F9FAFB] h-[129px] md:mb-[5rem] mb-[10rem]">
          <div className="w-[330px]">
            <h4 className="text-[18px]">Подпишитесь на рассылку</h4>
            <p className="text-[#6A6F75] text-[14px]">Регулярные скидки и спецпредложения, а так же новости компании.</p>
          </div>
          <div className="md:w-[628px] w-[300px] flex gap-[2rem] flex-col">
            <Input />
            <Button type="primary">Добавить в корзину</Button>
          </div>
            <Checkbox className="w-[330px] text-[13px]">
          Согласен с обработкой персональных данных в соответствии
        </Checkbox>
        </section>  
      </div>
    </section>
  )
}

export default Stock