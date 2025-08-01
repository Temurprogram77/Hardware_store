import { Breadcrumb, Form } from 'antd';
import CustomInput from "../components/ui/CustomInput";
import CustomButton from "../components/ui/CustomButton";
import CustomCheckbox from "../components/ui/CustomCheckbox";
import { data2 } from "../data/data"



const Blog = () => {
  return (
    <div className='flex justify-center items-center md:mb-15'>
      <div className="md:pr-4 md:pl-4 md:mt-4 w-[1490px] max-md:w-[355px] mt-5">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <Breadcrumb.Item>
            <span className="text-black">Стройоптторг</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span className="text-gray-400">Блог</span>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div>
          <h2 className="text-[40px] !font-bold !mt-5 text-[#2c333d]">Блог</h2>
          <div  className='flex gap-[10px] '>
            <div>
              <div className='flex flex-wrap gap-[14px]'>
                  {data2.map((item, index) => (
                    <div key={index}>
                      <div className="bg-white shadow-md rounded-lg w-[370px] overflow-hidden">
                        <div className='overflow-hidden w-[370px] h-[200px] '>
                          <img 
                            src={item.img}
                            alt={`News ${index + 1}`}
                            className=" h-[200px] w-[370px] rounded-b-[0px] object-cover transition-transform duration-300 hover:scale-110"
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
            <div className='!w-[1220px]'>
              <Form className="w-full flex flex-col gap-[1.7rem] pb-[2rem] bg-[#F9FAFB] px-4">
               <div className="w-full p-[1.5rem] flex flex-col gap-[1.2rem]">
                 <h4 className="text-center text-[18px] font-medium">Подпишитесь на рассылку</h4>
               <p className="text-center text-[#6A6F75] md:text-[12px]">
                 Регулярные скидки и спецпредложения, a так же новости компании.
               </p>
               <CustomInput className={"h-[40px]"} type="email" placeholder="Email" />

               <CustomButton text=" Добавить в корзину" type="primary" />
               <CustomCheckbox name="Согласен c обработкой персональных данных в соответствии c политикой конфиденциальности" />
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