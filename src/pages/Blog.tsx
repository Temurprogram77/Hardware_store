import { Breadcrumb } from 'antd';
import NewsCards from '../components/NewsCards'


const Blog = () => {
  return (
    <div className='flex justify-center items-center'>
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
          <div>
            <div>
              <div>
                  <NewsCards />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog