import { Breadcrumb } from 'antd';
import Advertisement from "../components/Advertisement"


const Delivery = () => {
  return (
    <div className="pr-4 pl-4 mt-4 max-w-[1500px]">
      {/* Breadcrumb */}
              <Breadcrumb className="mb-6">
                <Breadcrumb.Item>
                  <span className="text-black">Стройоптторг</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <span className="text-gray-400">Доставка</span>
                </Breadcrumb.Item>
              </Breadcrumb>
        <h1 className="!font-bold !mt-5 text-[32px] text-[#2c333d] md:text-[40px] lg:text-[48px]">Доставка</h1>
        <div className='flex gap-4'>
          <div className='flex flex-col gap-2.5'>
            <p className='text-[15px] text-[#1e1e1e]'>Мы всегда готовы доставить приобретенный Вами товар в удобное для Вас время.</p>
            <p className='text-[15px] text-[#1e1e1e]'>Стоимость доставки товаров определяется исходя из веса, габаритов удаленности до места назначения. Доставка осуществляется до подъезда дома, офиса.</p>
            <h2 className='text-[#2c333d] !font-bold text-[18px]'>Наш интернет-магазин предлагает несколько вариантов получения товара:</h2>
            <p className='!font-bold text-[16px] text-[#2c333d]'>1. Самовывоз с территории компании.</p>
            <p className='text-[15px] text-[#1e1e1e]'>Вы можете самостоятельно забрать заказанные товары с наших складов по адресу: г.Черкесск, ул.Октябрьская, 301</p>
            <h5 className='!font-bold text-[15px] text-[#1e1e1e]'>Режим работы:</h5>
            <ul>
              <li>Понедельник- суббота с 8:00 до 18:00</li>
              <li>Воскресенье с 8:00 до 17:00</li>
            </ul>
          </div>
              <Advertisement/>
        </div>
              
    </div>
  )
}

export default Delivery