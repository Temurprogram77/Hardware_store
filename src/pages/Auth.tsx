import { useState } from 'react';
import { Breadcrumb, Typography, Input, Button, Space, Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';
import { Link } from 'react-router-dom';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { FiUserPlus } from 'react-icons/fi';
import { MdOutlineChevronRight } from 'react-icons/md';

const AuthPage = () => {
  const [emailOrLogin, setEmailOrLogin] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    console.log('Email yoki Login:', emailOrLogin);
    console.log('Parol:', password);
    console.log('Eslab qolish:', rememberMe);
  };

  const onChange: CheckboxProps['onChange'] = (e) => {
    setRememberMe(e.target.checked);
  };

  return (
    <main className='mb-10'>
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
            <h2 className="!font-bold text-4xl">Авторизация</h2>
            <div className='mt-20 ml-20 border w-[88%] rounded-lg p-8 px-10 border-gray-200 flex justify-between'>
              <div className='flex items-center flex-col'>
                <Space direction="vertical">
                  <Typography.Title className='!text-lg'>
                    Email или логин <span className='text-red-700'>*</span>:
                  </Typography.Title>
                  <Input
                    className='!w-[450px] !h-[55px] !text-lg !mb-2.5 !-mt-2'
                    placeholder="Введите данные для авторизации"
                    value={emailOrLogin}
                    onChange={(e) => setEmailOrLogin(e.target.value)}
                  />
                  <Typography.Title className='!text-lg'>
                    Пароль <span className='text-red-700'>*</span>:
                  </Typography.Title>
                  <Input.Password
                    className='!w-[450px] !h-[55px] !text-lg !-mt-2'
                    placeholder="Введите пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    iconRender={(visible) =>
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
                    onClick={handleLogin}
                  >
                    Авторизоваться
                  </Button>
                </div>

                <Checkbox
                  className='!mt-2.5 !items-center !text-sm'
                  onChange={onChange}
                  checked={rememberMe}
                >
                  Запомнить меня
                </Checkbox>
              </div>

              <span className='border border-gray-200'></span>

              <div>
                <div className='flex items-center gap-5'>
                  <FiUserPlus size={50} className='text-red-600 font-normal' />
                  <h3 className='!font-bold text-2xl'>Еще нет аккаунта?</h3>
                </div>
                <div className='ml-18 w-lg mt-7'>
                  <p className='flex-wrap leading-7 text-gray-600'>
                    <span className='font-bold'>Регистрация на сайте</span> позволяет получить доступ к статусу и истории вашего заказа. Просто заполните поля ниже, и вы получите учетную запись.
                  </p>
                  <p className='!mt-5 flex-wrap leading-7 text-gray-500'>
                    Мы запрашиваем у вас только информацию, необходимую для того, чтобы сделать процесс покупки более быстрым и легким.
                  </p>
                  <Button
                    type='primary'
                    className='!h-[60px] !bg-black !text-sm !uppercase !flex !items-center hover:!bg-orange-700'
                  >
                    Зарегистрироваться <MdOutlineChevronRight size={30} />
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
