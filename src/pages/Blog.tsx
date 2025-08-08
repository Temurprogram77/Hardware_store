import { useState } from 'react';
import  Names  from '../components/ui/Names';
import { Form } from 'antd';
import CustomInput from "../components/ui/CustomInput";
import CustomButton from "../components/ui/CustomButton";
import CustomCheckbox from "../components/ui/CustomCheckbox";
import { data2 } from "../data/data"

const categories = [
  { name: 'все публикации', count: 20 },
  { name: 'Новости', count: 18 },
  { name: 'Обзоры', count: 1 },
  { name: 'Советы', count: 1 },
  { name: 'Статьи', count: 1 },
];

const Blog = () => {
   const [selected, setSelected] = useState("");

  return (
    <div className='flex justify-center items-center md:mb-15 mb-13'>
      <div className="md:pr-4 md:pl-4 md:mt-4 w-[1490px] max-md:w-[355px] mt-5">
{/* Link */}
      <Names name='Блог' link='/blog' />
        <div>
          <h2 className="text-[40px] !font-bold !mt-5 text-[#2c333d]">Блог</h2>
          <div  className='flex md:gap-[10px] gap-[20px] md:flex-row flex-col'>
            <div className=''>
{/* Mobile select */}
            <div className="md:hidden h-[80px] w-full relative left-[-6px] md:left-[0px] max-w-[369px]">
              <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="w-[369px] border border-[#ececec] h-[60px] rounded-md px-3 py-2 pr-[20px] text-[10px]  shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ececec] "
              >
                <option className='text-[12px]' value="">Выбрать рубрику</option>
                {categories.map((cat, index) => (
                  <option  className='text-[12px] capitalize hover:bg-[#186fd4]' key={index} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

{/* birxil cardlar map() da */}
              <div className='flex flex-wrap gap-[14px] justify-center items-center'>
                  {data2.map((item, index) => (
                    <div className='cursor-pointer' key={index}>
                      <div className="bg-white hover:shadow-xl  transition-shadow duration-700 rounded-lg w-[370px] overflow-hidden">
                        <div className='overflow-hidden w-[370px] h-[200px] '>
                          <img 
                            src={item.img}
                            alt={`News ${index + 1}`}
                            className=" h-[200px] w-[370px] rounded-b-[0px] object-cover transition-transform duration-500 "
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                          <span className="text-xs text-gray-400">{item.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className='md:w-[1220px] w-[350px] md:mt-[6px] flex flex-col gap-[20px]'>
              <div className="w-full max-w-xs border border-[#ececec] rounded-lg p-4">
               <h2 className="text-lg font-bold font-sans mb-4 hidden md:block">Рубрики</h2>

{/* Desktop list */}
               <ul className="space-y-2 hidden  md:flex md:flex-col md:gap-[12px]">
                 {categories.map((cat, i) => (
                   <li 
                     key={i}
                     className="h-[35px] pb-[10px] flex uppercase justify-between items-center  font-bold border-b-[#ececec] border border-t-[0px] border-r-[0px] border-l-[0px]  md:text-[12px] hover:text-blue-600 cursor-pointer"
                   >
                     <span>{cat.name}</span>
                     <span className="bg-gray-100 rounded-full px-2 py-0.5 text-xs">
                       {cat.count}
                     </span>
                   </li>
                 ))}
               </ul>      
             </div>
              <Form className="w-full flex flex-col gap-[1.7rem] pb-[2rem] bg-[#F9FAFB] px-4">
               <div className="w-full p-[1.5rem] flex flex-col gap-[1.2rem]">
                 <h4 className="text-center text-[18px] font-medium">Подпишитесь на рассылку</h4>
               <p className="text-center text-[#6A6F75] md:text-[12px]">
                 Регулярные скидки и спецпредложения, a так же новости компании.
               </p>
               <CustomInput className={"h-[40px]"} type="email" placeholder="Email" />

               <CustomButton text=" Добавить в корзину" type="primary" />
               <CustomCheckbox name="Согласен c обработкой персональных" />
               </div>
             </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog