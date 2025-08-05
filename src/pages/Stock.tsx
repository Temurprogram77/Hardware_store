import { useNavigate } from "react-router-dom";
import CustomButton from "../components/ui/CustomButton"
import CustomInput from "../components/ui/CustomInput"
import CustomCheckbox from "../components/ui/CustomCheckbox"
import Names from '../components/ui/Names'

const Stock:React.FC= () => {
const navigate = useNavigate();

  const handleClick = (id: number) => {
    const stock = Stocks.find((item) => id === item.id);
    localStorage.setItem("Stock", JSON.stringify(stock));
    navigate(`/deals/${id}`);
  };
  return (
    <section className="mt-8 max-w-[1470px] mx-auto px-4">
        <Names name='Акции' link='/deals'/>
      <div className="w-full mt-8 items-center">
        <h1 className="font-bold text-[32px] md:text-[40px] lg:text-[48px]">Акции</h1>
        <div className="grid gap-[1.5rem] md:grid-cols-2 grid-cols-1 mb-[5rem] lg:grid-cols-3 xl:grid-cols-4">
          {
            Stocks.map((item)=>{
            return <div className=" cursor-pointer relative h-70 rounded-md hover:shadow-xl transition-shadow duration-700 overflow-hidden group" key={item.id} onClick={()=>handleClick(item.id)}>
              <div className='relative h-[180px]'>
                <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={item.img} alt={item.description} />
                <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 text-black">
            <p className="!mb-3 w-[130px] text-[19px] !font-medium">
              {item.title}
            </p>
            <div className="py-1  .5 px-2 text-[12px] text-white bg-black rounded-md">
            {item.discount}
            </div>
          </div>
              </div>
              <div className="flex pl-[1rem] flex-col leading-6 relative w-full h-[83px]">
                <h3 className="font-medium absolute top-[0.5rem] h-[52px]">{item.description}</h3>
              <CustomButton className='absolute top-[3.3rem] left-[-6.3rem]' type="link" text={item.link}/>
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
          <div className="md:w-[628px] w-[300px] flex md:flex-row gap-[2rem] flex-col">
            <CustomInput type="text" />
            <CustomButton text="Добавить в корзину" type="primary" />
          </div>
            <CustomCheckbox name="Согласен с обработкой персональных данных в соответствии" />
        </section>  
      </div>
    </section>
  )
}

export default Stock