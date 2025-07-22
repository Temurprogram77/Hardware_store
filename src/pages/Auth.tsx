import { Breadcrumb, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';
import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';
import { FiUserPlus } from 'react-icons/fi';
import { MdOutlineChevronRight } from 'react-icons/md';

const onChange: CheckboxProps['onChange'] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const AuthPage = () => {
  return (
    <main>
      <hr className='text-gray-200' />
      <div className="container mx-auto mt-2.5">
        <Breadcrumb
          items={[
            {
              title: (
                <Link to="/">
                  <span className='text-black text-sm'>Стройоптторг</span>
                </Link>
              ),
            },
            {
              title: <span className='text-[#959597] text-sm'>Авторизация</span>,
            },
          ]}
        />
        <section>
          <div className="mt-4">
            <h2 className="!font-bold text-4xl">Авторизация</h2>
            <div className='mt-20 ml-20 border w-[88%] rounded-lg p-8 px-10 border-gray-200 flex justify-between'>
              <div className='flex items-center flex-col'>
                <Space direction="vertical">
                  <Typography.Title className='!text-lg'>Email или логин <span className='text-red-700'>*</span>:</Typography.Title>
                  <Input
                    className='!w-[450px] !h-[55px] !text-lg !mb-2.5 !-mt-2'
                    placeholder="Введите данные для авторизации"
                  />
                  <Typography.Title className='!text-lg'>Пароль: <span className='text-red-700'>*</span>:</Typography.Title>
                  <Input.Password
                    className='!w-[450px] !h-[55px] !text-lg !-mt-2'
                    placeholder="Введите пароль"
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  />
                </Space>
                <div className='w-full'>
                  <Button type='default' className='!mt-7 !w-full !h-[55px]  !text-blue-600 !font-semibold !text-[15px]' >Восстановить пароль</Button>
                  <Button type='primary' className='!mt-4 !w-full !h-[55px] !text-sm !font-bold !uppercase'>Авторизоваться</Button>
                </div>
                <Checkbox
                  className='!mt-2.5 !items-center !text-sm'
                  onChange={onChange}
                >Запомнить меня</Checkbox>
              </div>
              <span className='border border-gray-200'></span>
              <div>
                <div className='flex items-center gap-5'>
                  <FiUserPlus size={50} className='text-red-600 font-normal' />
                  <h3 className='!font-bold text-2xl'>Еще нет аккаунта?</h3>
                </div>
                <div className='ml-18 w-lg mt-7'>
                  <p className='flex-wrap leading-7 text-gray-600'><span className='font-bold '>Регистрация на сайте</span> позволяет получить доступ к статусу и истории вашего заказа. Просто заполните поля ниже, и вы получите учетную запись.</p>
                  <p className='!mt-5 flex-wrap leading-7 text-gray-500'>Мы запрашиваем у вас только информацию, необходимую для того, чтобы сделать процесс покупки более быстрым и легким.</p>
                  <Button type='primary' className='!px-10 !py-8 !bg-black !text-sm !uppercase !flex !items-center hover:!bg-orange-700'>Зарегистрироваться <MdOutlineChevronRight size={30} /></Button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
};

export default AuthPage;