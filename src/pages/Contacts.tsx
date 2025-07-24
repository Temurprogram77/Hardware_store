import { useState } from "react";
import { Breadcrumb } from 'antd';
import { SlLocationPin } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

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
const [agree, setAgree] = useState(false);

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
            <div className='mt-11 flex gap-3 justify-center items-center'>
               <div className="w-[1200px] flex flex-wrap gap-4">
                {/* birxil cardlar */}
                  {contacts.map((item, index) => (
                  <div key={index} className="w-[265px] h-[105px] border border-[#f2f4f6] rounded-lg p-4 shadow">
                    <p>{item.title}:</p>
                    <p className="text-md font-bold hover:text-[#007aff]">{item.phone}</p>
                  </div>
                  ))}
                </div>

              <div className='bg-[#f7f9fc] p-5 h-[230px] font-sans'>
                <h1 className='font-semibold'>Реквизиты:</h1>
                <p className='text-xs w-[300px] leading-6'>ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "СТРОЙОПТТОРГ"ИНН 0901051787КПП 090101001369000, <span>Карачаево-Черкесская республика, город Черкесск, Октябрьская улица, 301р/с 40702810360000102415 в Ставропольское отделение №5230 ПАО Сбербанк, БИК 040702615</span></p>
              </div>
            </div>
          </div>
          <section className="py-8 flex flex-col gap-5 mt-4">
            <h2 className="!font-bold text-[18px] mb-6">Работаем по регионам:</h2>
            <div className="flex justify-between gap-x-6 overflow-x-auto">
              {regions.map((region, index) => (
                <div
                  key={index}
                  className="min-w-[200px] max-w-[250px] border-r border-[#e3e5e7] last:border-r-0 pr-4 text-sm space-y-1 shrink-0">
                  <p className="font-semibold">{region.city}</p>
                  <p>{region.address}</p>
                  <p className="font-bold">{region.phone}</p>
                  <a href={`mailto:${region.email}`} className="text-blue-600 hover:underline">
                    {region.email}
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <section className="bg-[#f8f9fb] py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl !font-bold mb-10 text-gray-800">
          У вас есть вопросы? С радостью ответим на них!
        </h2>

        <form className="text-left space-y-6">
          {/* 2 ustunli inputlar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-[14px] font-medium text-gray-700">
                Ваше имя <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Введите ваше имя"
                className="w-full border border-[#e3e5e7] rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
            </div>

            <div>
              <label className="block mb-1 text-[14px] font-medium text-gray-700">
                Номер телефона <span className="text-red-500">*</span>
              </label>
              <input
              data-name='tel'
                type="tel"
                name="tel"
                aria-required='true'
                aria-invalid='false'
                placeholder="+7 (___) ___-__-__"
                className="w-full border border-[#e3e5e7] rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
            </div>
          </div>

          {/* Textarea */}
          <div>
            <label className="block mb-1 text-[14px] font-medium text-gray-700">
              Текст сообщения <span className="text-red-500">*</span>
            </label>
            <textarea
              placeholder="Введите ваш вопрос"
              rows={4}
              className="w-full border border-[#e3e5e7] rounded-md px-4 pt-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            ></textarea>
          </div>

          {/* Submit + Checkbox */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 !text-white !text-[14px] font-semibold w-[190px] h-[60px] px-6 py-3 rounded-md"
            >
              ОТПРАВИТЬ
            </button>

            <label className="flex gap-6 items-center text-sm text-gray-700 space-x-2">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="scale-200 !mt-[-8px] border border-gray-400 rounded "
              />
              <span className="text-[16px] w-[500px]">
                Согласен с обработкой персональных данных в соответствии с{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline"
                >
                  политикой конфиденциальности
                </a>
              </span>
            </label>
          </div>
        </form>
      </div>
    </section>
    </div>
  )
}

export default Contacts