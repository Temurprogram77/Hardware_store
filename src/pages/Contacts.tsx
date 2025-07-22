import { Breadcrumb } from 'antd';
import { MdLocationPin } from "react-icons/md";


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
          <div className=' flex flex-col items-center w-[315px] h-[450px] pt-6  absolute left-[1150px] mt-9 rounded-[10px] !z-10 shadow-lg bg-white'>
              <h2 className='!font-bold'>ООО «Стройоптторг»</h2>
              <div className='flex gap-2 mt-3'>
                <MdLocationPin className=' text-2xl' />
                <div className=''>
                  <h6 className='!font-bold'>Адрес:</h6>
                  <p className='text-[#494d52] text-sm w-[220px]'>369012 , Карачаево-Черкесская Республика , г. Черкесск , ул Октябрьская, дом 301</p>
                </div>
              </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Contacts