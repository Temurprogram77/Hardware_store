import React from 'react';
import { Breadcrumb, Typography, Input, Button, Space, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { FiUserPlus } from 'react-icons/fi';
import { MdOutlineChevronRight } from 'react-icons/md';

export const regex = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^\+7\d{10}$/,
  fullName: /^[A-Za-zА-Яа-яЁё\s]{5,}$/,
  region: /^[A-Za-zА-Яа-яЁё\s-]{2,}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/,
};


const Register: React.FC = () => {


  return (
    <main className='mt-4 mb-10 px-3'>
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
              title: <span className='text-[#959597] text-sm'>Регистрация</span>,
            },
          ]}
        />
        <section>
          <div className="mt-4">
            <h2 className="!font-bold text-4xl">Регистрация</h2>
            <div className='mt-10 border w-[100%] max-sm:flex-col rounded-lg py-8 max-sm:!py-4 px-10 border-gray-200 flex justify-between'>
              <div className='flex flex-col mr-25 max-sm:mr-0'>
                <Space direction="vertical">
                  <div className='flex items-center gap-5 max-sm:flex-col'>
                    <div>
                      <Typography.Title className='!text-lg'>
                        Email <span className='text-red-700'>*</span>:
                      </Typography.Title>
                      <Input
                        className='!w-[325px] max-sm:!w-[260px] !h-[55px] !text-lg !mb-2.5 !-mt-2'
                        placeholder="Введите ваш email адрес"
                      />
                    </div>
                    <div className='!-mt-5'>
                      <Typography.Title className='!text-lg'>
                        Номер телефона  <span className='text-red-700'>*</span>:
                      </Typography.Title>
                      <Input
                        className='!w-[325px] max-sm:!w-[260px] !h-[55px] !text-lg !mb-2.5 !-mt-2'
                        placeholder="Введите данные для авторизации"
                      />
                    </div>
                  </div>

                  <Typography.Title className='!text-lg'>
                    ФИО <span className='text-red-700'>*</span>:
                  </Typography.Title>
                  <Input
                    className='!w-full !h-[55px] !text-lg !mb-2.5 !-mt-2'
                    placeholder="Ваше полное имя"
                  />

                  <Typography.Title className='!text-lg'>
                    Регион <span className='text-red-700'>*</span>:
                  </Typography.Title>
                  <Input
                    className='!w-full !h-[55px] !text-lg !mb-2.5 !-mt-2'
                    placeholder="Ваш регион"
                  />

                  <Typography.Title className='!text-lg'>
                    Пароль <span className='text-red-700'>*</span>:
                  </Typography.Title>
                  <Input.Password
                    className='!w-full !h-[55px] !text-lg !-mt-2'
                    placeholder="Введите пароль"
                    iconRender={(visible: boolean) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />

                  <Typography.Title className='!text-lg'>
                    Подтвердите пароль <span className='text-red-700'>*</span>:
                  </Typography.Title>
                  <Input.Password
                    className='!w-full !h-[55px] !text-lg !-mt-2'
                    placeholder="Введите пароль"
                    iconRender={(visible: boolean) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </Space>

                <div className='flex flex-col'>
                  <Checkbox
                    className='!mt-2.5 items-baseline !text-sm'
                  >
                    Согласен с условиями обслуживания
                  </Checkbox>
                  <Checkbox
                    className='!mt-2.5 items-baseline !text-sm'
                  >
                    Согласен с обработкой персональных данных в соответствии с <Link className='!underline' to={"/privacy-policy"}>политикой конфиденциальности</Link>
                  </Checkbox>
                </div>

                <div className='w-full'>
                  <Button
                    type='primary'
                    className='!mt-4 !w-full !h-[55px] !text-sm !font-bold !uppercase'
                  >
                    Зарегистрироваться
                  </Button>
                </div>
              </div>
              <span className='border border-gray-200 mr-10'></span>
              <div>
                <div className='flex items-center gap-5'>
                  <FiUserPlus size={50} className='text-red-600 font-normal' />
                  <h3 className='!font-bold text-2xl'>Уже есть аккаунт?</h3>
                </div>
                <div className='ml-18 w-xl mt-7'>
                  <p className='flex-wrap leading-7 text-sm text-gray-600'>
                    Перейдите к
                    <span className='font-bold'>авторизации</span> если у вас уже есть зарегистрированный аккаунт.</p>
                  <Button
                    type='primary'
                    className='!h-[60px] !bg-black !text-sm !uppercase hover:!bg-orange-700'
                  >
                    <Link
                      className='!flex !items-center'
                      to={"/my-account"}
                    >
                      Авторизоваться <MdOutlineChevronRight size={30} />
                    </Link>
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

export default Register;
