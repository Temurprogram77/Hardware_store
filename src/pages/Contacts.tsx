import { Breadcrumb } from 'antd';


const Contacts = () => {
  return (
    <div className="p-4 sm:p-6 md:p-10 lg:p-10 mt-4">
      {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <Breadcrumb.Item>
            <span className="text-black">Стройоптторг</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span className="text-gray-400">Контакты</span>
          </Breadcrumb.Item>
        </Breadcrumb>
            
      <h2 className="text-[40px] !font-bold !mt-5" >Контакты</h2>
      <div>
        <div className='flex'>
         <iframe className="border-0 rounded-[10px]" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1574993.114298276!2d66.8964759!3d39.5560352!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1753176936343!5m2!1sen!2s" width="1120" height="550" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div>
              <h2 className=''>ООО «Стройоптторг»</h2>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Contacts