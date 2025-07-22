import { Breadcrumb } from 'antd';
import { MdLocationPin } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";


const Contacts = () => {
  return (
    <div className="pr-4 pl-4 mt-4 max-w-[1500px]">
      {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <Breadcrumb.Item>
            <span className="text-black">Стройоптторг</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span className="text-gray-400">Контакты</span>
          </Breadcrumb.Item>
        </Breadcrumb>
            
      <h2 className="text-[40px] !font-bold !mt-5 text-[#2c333d]" >Контакты</h2>
      <div>
        <div className='flex flex-row'>
         <iframe className="border-0 rounded-[10px] !z-0 relative" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1574993.114298276!2d66.8964759!3d39.5560352!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1753176936343!5m2!1sen!2s" width="1300" height="550" loading="lazy"></iframe>
          <div className=' flex flex-col items-center w-[315px] h-[475px] pt-6  absolute left-[1150px] mt-9 rounded-[10px] !z-10 shadow-lg bg-white'>
              <h2 className='!font-bold'>ООО «Стройоптторг»</h2>
              <div className='flex gap-2 mt-3'>
                <MdLocationPin className=' text-2xl' />
                <div className=''>
                  <h6 className='!font-bold text-[#2f3134]'>Адрес:</h6>
                  <p className='text-[#494d52] text-sm w-[220px]'>369012 , Карачаево-Черкесская Республика , г. Черкесск , ул Октябрьская, дом 301</p>
                </div>
              </div>
              <div className='flex gap-2 mt-3'>
                <BsTelephone className='text-[20px]' />
                <div>
                  <h6 className='!font-bold text-[#2f3134] w-[215px]'>Телефон:</h6>
                  <h6 className='hover:text-[#186fd4]'>8 (8782) 28-42-72</h6>
                </div>
              </div>
              <div className='flex gap-2 mt-4'>
                <MdOutlineMailOutline className='text-[20px]'/>
                <div>
                  <h6 className='!font-bold text-[#2f3134] w-[215px]'>Email адрес:</h6>
                  <p className='underline decoration-solid hover:no-underline text-[#186fd4]'>info@stroiopttorg.ru</p>
                </div>
              </div>
              <div className='flex gap-2 mt-4'>
                <div className='relative left-3'>
                  <h6 className='!font-bold text-[#2f3134] w-[215px]'>Время работы:</h6>
                  <p className='text-[#494d52] text-sm w-[200px]'>Ежедневно, с 8:00 до 18:00 Без перерыва и выходных</p>
                </div>
              </div>
              <button className='mt-1 bg-[#186fd4] font-bold !text-white rounded-[10px] w-[250px] h-[50px]'>Заказать звонок</button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Contacts