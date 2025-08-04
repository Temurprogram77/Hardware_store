import  Names  from '../components/ui/Names';
import { SlLocationPin } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import CustomPhoneInput, { phoneRegex } from "../components/ui/CustomINputPhone";
import CustomInput from "../components/ui/CustomInput"
import CustomTextarea from "../components/ui/CustomTextarea";
import CustomCheckbox from "../components/ui/CustomCheckbox";
import CustomButton from "../components/ui/CustomButton";
import { useState } from 'react';

type Region = {
  city: string;
  address: string;
  phone: string;
  email: string;
};

const regions: Region[] = [
  {
    city: "Москва",
    address: "127015, Бумажный пр., 19, стр. 2",
    phone: "+7 (800) 444-00-65",
    email: "info@stroiopttorg.ru",
  },
  {
    city: "Ставрополь",
    address: "355037, ул. Доваторцев, 38Д",
    phone: "+7 (800) 444-00-65",
    email: "info@stroiopttorg.ru",
  },
  {
    city: "Краснодар",
    address: "350002, Северная ул., 490",
    phone: "+7 (800) 444-00-65",
    email: "info@stroiopttorg.ru",
  },
  {
    city: "Грозный",
    address: "364024, ул. Шейха Али Митаева, 17",
    phone: "+7 (800) 444-00-65",
    email: "info@stroiopttorg.ru",
  },
  {
    city: "Ростов-на-Дону",
    address: "344006, Нижнебульварная ул., 6",
    phone: "+7 (800) 444-00-65",
    email: "info@stroiopttorg.ru",
  },
  {
    city: "Самара",
    address: "443080, Московское ш., 41",
    phone: "+7 (800) 444-00-65",
    email: "info@stroiopttorg.ru",
  },
];

const contacts = [
  { title: "Генеральный директор", phone: "8 (8782) 28-42-67 (приемная)" },
  { title: "Отдел снабжения", phone: "8 (8782) 28-42-67" },
  { title: "Отдел сбыта", phone: "8 (8782) 28-45-81" },
  { title: "Юридический отдел", phone: "8 (8782) 28-42-69" },
  { title: "Бухгалтерия", phone: "8 (8782) 28-42-71" },
  { title: "Отдел доставки", phone: "8 (8782) 28-45-83" },
  { title: "Кредитный отдел", phone: "8 (8782) 28-45-82" },
  { title: "Отдел кадров", phone: "8 (8782) 28-42-73" }
];

const Contacts = () => {
  const [phone, setPhone] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string | null>(null);


    const handleBlur = (field: string) => {
      switch (field) {
        case "phone":
          if (!phone || !phoneRegex.test(phone)) {
            setPhoneError("Пожалуйста, введите действительный телефон!");
          } else {
            setPhoneError(null);
          }
          break;
        default:
          break;
      }
    };
  

  return (
    <div className='flex justify-center items-center'>
      <div className="md:pr-4 md:pl-4 md:mt-4 w-[1490px] max-md:w-[355px] mt-5">
      {/* Link */}
        <Names name='Контакты' link='/contacts' />
            
      <h2 className="text-[40px] !font-bold !mt-5 text-[#2c333d]" >Контакты</h2>
      <div>
        <div className='flex md:flex-row flex-col'> 
         <iframe className="border-0 md:rounded-[10px] md:w-[1200px] md:h-[550px] md:left-[5px] left-[-15px] rounded-none w-[384px] h-[650px] !z-0 relative" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1574993.114298276!2d66.8964759!3d39.5560352!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1753176936343!5m2!1sen!2s" loading="lazy"></iframe>
          <div className=' flex flex-col items-center md:w-[315px] md:h-[475px] w-[365px] h-[475px] pt-6 relative md:left-[-50px] md:top-[2px] left-[-5px] top-[-108.5px] md:mt-9 rounded-[10px]  shadow-lg bg-white'>
              <h2 className='!font-bold md:text-[16px] text-[20px]'>ООО «Стройоптторг»</h2>
              <div className='flex gap-2 mt-3'>
                <SlLocationPin className=' text-[20px]' />
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
              <button className='mt-1 bg-[#186fd4] cursor-pointer font-bold !text-white rounded-[10px] w-[250px] h-[50px]'>Заказать звонок</button>
          </div>
        </div>

        <div>
          <div>
            <div className='md:mt-11 flex md:flex-row flex-col gap-3 justify-center items-center '>
               <div className="md:w-[1200px] w-[380px] p-3 flex flex-wrap md:flex-row flex-col gap-4">
                
                {/* map() da aylanish */}
                
                  {contacts.map((item, index) => (
                  <div key={index} className="md:w-[255px] p-5 md:h-[105px] w-full border border-[#f2f4f6] rounded-lg md:p-4 md:shadow">
                    <p className="md:text-[15px] text-[18.5px] text-[#494d52] font-sans">{item.title}:</p>
                    <p className="md:text-[15px] text-[#2f3134] text-[21px] font-bold hover:text-[#007aff]">{item.phone}</p>
                  </div>

                  ))}
                </div>

              <div className='bg-[#f7f9fc] p-5 md:h-[230px] h-[265px] font-sans'>
                <h1 className='font-semibold md:text-[16px] text-[20px]'>Реквизиты:</h1>
                <p className='md:text-xs  md:w-[300px] leading-6'>ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "СТРОЙОПТТОРГ"ИНН 0901051787КПП 090101001369000, <span>Карачаево-Черкесская республика, город Черкесск, Октябрьская улица, 301р/с 40702810360000102415 в Ставропольское отделение №5230 ПАО Сбербанк, БИК 040702615</span></p>
              </div>
            </div>
          </div>

          {/* Работаем по регионам: */}

          <section className="py-8 flex flex-col gap-5 mt-4">
            <h2 className="!font-bold md:text-[18px] text-[22px] mb-6">Работаем по регионам:</h2>
            <div className="flex md:flex-row flex-col justify-between gap-6 overflow-x-auto">
              {regions.map((region, index) => (
                <div
                  key={index}
                  className="min-w-[200px] md:w-[150px] md:h-[130px] mb-[10px] md:mb-0 leading-3 md:border-r border-[#e3e5e7] last:border-r-0 pr-4 text-sm space-y-1 shrink-0">
                  <p className="font-semibold text-[#494d52] md:text-[15px] text-[17px]">{region.city}</p>
                  <p className="md:text-[15px] md:leading-5 text-[17px] text-[#494d52]">{region.address}</p>
                  <p className="font-bold md:text-[15px] text-[17px] text-[#2f3134]">{region.phone}</p>
                  <a href={`mailto:${region.email}`} className="text-blue-600 md:text-[15px] text-[17px] md:underline-none hover:underline">
                    {region.email}
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Section */}
      
      <section className="bg-[#f8f9fb] md:w-full w-[390px] relative md:left-0 left-[-20px] py-12 px-4">
        <div className="md:w-4xl  mx-auto text-center">
          <h2 className="text-2xl md:text-3xl !mb-[30px] md:mb-10 !font-bold text-gray-800">
            У вас есть вопросы? С радостью ответим на них!
          </h2>

        {/* Form */}

        <form className="text-left space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-[14px] font-medium text-gray-700">
                Ваше имя <span className="text-red-500">*</span>
              </label>
            
              <CustomInput placeholder={"Введите ваше имя"} className={"h-[40px]"} type="text" />
            </div>

            <div>
              <label className="block mb-1 text-[14px] font-medium text-gray-700">
                Номер телефона <span className="text-red-500">*</span>
              </label>
              
              <CustomPhoneInput
              value={phone}
              onChange={setPhone}
              onFocus={() => setPhoneError(null)}
              onBlur={() => handleBlur("phone")}
              placeholder="+998 () ___--__"
              className={`h-[40px] rounded-md text-[12px]  text-[#2c333d] outline-none placeholder:text-[#] border-[1px] border-[#d9d9d9] lg:w-full 
              ${phoneError ? "!border-red-500" : ""}`}
            /> 
            </div>
          </div>

          {/* Textarea */}
          <div>
            <label className="block mb-1 text-[14pxadd] font-medium text-gray-700">
              Текст сообщения <span className="text-red-500">*</span>
            </label>
            <CustomTextarea placeholder="Введите ваш вопрос" rows={4} />
          </div>

          {/* Submit + Checkbox */}
          <div className="flex flex-col md:flex-row md:items-start items-center justify-between gap-4">
          <label className="flex gap-6 relative md:left-0 left-[7px] items-start md:items-center text-sm text-gray-700 space-x-2">
              <div className="w-[350px]">
              <CustomCheckbox name="Согласен с обработкой персональных данных в соответствии с" />
              </div>
            </label>
           <CustomButton text="ОТПРАВИТЬ" type="primary"/>
          </div>
        </form>
      </div>
    </section>
    </div>
  </div>
  )
}

export default Contacts