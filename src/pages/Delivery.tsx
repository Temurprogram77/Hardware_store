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
          <div>
            <p className='text-[15px] text-[#1e1e1e]'>Мы всегда готовы доставить приобретенный Вами товар в удобное для Вас время.</p>
            <p className='text-[15px] text-[#1e1e1e]'>Стоимость доставки товаров определяется исходя из веса, габаритов удаленности до места назначения. Доставка осуществляется до подъезда дома, офиса.</p>
            <h2 className=''>Наш интернет-магазин предлагает несколько вариантов получения товара:</h2>
          </div>
              <Advertisement/>
        </div>
              
    </div>
  )
}

export default Delivery