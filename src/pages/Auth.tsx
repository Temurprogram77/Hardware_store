import React from 'react';
import { Breadcrumb, Typography, Input, Button, Space, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { FiUserPlus } from 'react-icons/fi';
import { MdOutlineChevronRight } from 'react-icons/md';

const AuthPage: React.FC = () => {

  return (
    <main className='mb-10 mt-5 px-3'>
      <hr className='text-gray-200' />
      <div className="max-w-[1460px] mx-auto mt-2.5">
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
            <h2 className="!font-bold text-4xl sm:text-3xl">Авторизация</h2>
            <div className='mt-20 max-sm:mt-10 ml-20 max-sm:ml-0 border w-[88%] max-sm:w-full rounded-lg p-8 px-10 max-sm:p-5  border-gray-200 flex justify-between max-sm:flex-col '>
              <div className='flex items-center flex-col'>
                <Space direction="vertical">
                  <Typography.Title className='!text-lg'>
                    Email или логин <span className='text-red-700'>*</span>:
                  </Typography.Title>
                  <Input
                    className='!w-[450px] max-sm:!w-full !h-[55px] !text-lg !mb-2.5 !-mt-2'
                    placeholder="Введите данные для авторизации"
                  />
                  <Typography.Title className='!text-lg'>
                    Пароль <span className='text-red-700'>*</span>:
                  </Typography.Title>
                  <Input.Password
                    className='!w-[450px] max-sm:!w-full !h-[55px] !text-lg !-mt-2'
                    placeholder="Введите пароль"
                    iconRender={(visible: boolean) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </Space>

                <div className='w-full'>
                  <Button
                    type='default'
                    className='!mt-7 !w-full !h-[55px] !text-blue-600 !font-semibold !text-[15px]'
                  >
                    Восстановить пароль
                  </Button>
                  <Button
                    type='primary'
                    className='!mt-4 !w-full !h-[55px] !text-sm !font-bold !uppercase'
                  >
                    Авторизоваться
                  </Button>
                </div>

                <Checkbox
                  className='!mt-2.5 !items-center !text-sm max-sm:!mb-10'
                >
                  Запомнить меня
                </Checkbox>
              </div>

              <span className='border border-gray-200 max-sm:border-none'></span>

              <div>
                <div className='flex gap-5 max-sm:gap-3 max-sm:flex'>
                  <FiUserPlus className='text-red-600 font-normal w-13 h-13 max-sm:w-8 max-sm:h-8' />
                  <h3 className='!font-bold text-2xl max-sm:text-lg max-sm:items-center max-sm:flex'>Еще нет аккаунта?</h3>
                </div>
                <div className='flex max-sm:flex-wrap flex-col ml-18 max-sm:ml-11 mt-7 max-sm:mt-3'>
                  <div className='flex items-center flex-wrap'>
                    <p className='max-sm:w-[220px] flex flex-wrap text-sm leading-7 text-gray-600'>
                      <span className='font-bold text-sm'>Регистрация на сайте</span>
                      позволяет получить доступ к статусу и истории вашего заказа. Просто заполните поля ниже, и вы получите учетную запись.
                    </p>
                  </div>
                  <p className='!mt-5 max-sm:w-[240px] text-sm flex flex-wrap leading-7 text-gray-500'>
                    Мы запрашиваем у вас только информацию, необходимую для того, чтобы сделать процесс покупки более быстрым и легким.
                  </p>
                  <Button
                    type='primary'
                    className='!h-[60px] max-sm:w-[220px] !bg-black !text-sm !uppercase hover:!bg-orange-700'
                  >
                    <Link className='!flex !items-center' to={"/register"}>Зарегистрироваться <MdOutlineChevronRight size={30} /></Link>
                  </Button>
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
