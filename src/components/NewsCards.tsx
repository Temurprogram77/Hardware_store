import {images} from "../assets/images"

const { newsImage1, newsImage2, newsImage3, newsImage4 } = images

const data = [
  {
    img:newsImage1,
    title: "Масштабное обновление каталога инструментов",
    description: "С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
    date: "5 Августа 2023"
  },
  {
    img:newsImage2,
    title: "Масштабное обновление каталога инструментов",
    description: "С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
    date: "5 Августа 2023"
  },
  {
    img:newsImage3,
    title: "Масштабное обновление каталога инструментов",
    description: "С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
    date: "5 Августа 2023"
  },
  {
    img:newsImage4,
    title: "Масштабное обновление каталога инструментов",
    description: "С радостью сообщаем вам о крупном пополнении нашего каталога инструментов.",
    date: "5 Августа 2023"
  },
]

const NewsCards = () => {
  return (
    <div>
      {data.map((item,inx)=>{
        return(
          <div key={inx} className="">
            <img src={item.img} alt="" />
            <h3>{item.title}</h3>
            <p className="!m-0">{item.description}</p>
            <span className="!m-0">{item.date}</span>
          </div>
        )
      })}
    </div>
  )
}

export default NewsCards