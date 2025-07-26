import React from 'react';
import { Breadcrumb, Typography, Input, Button, Space, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { FiUserPlus } from 'react-icons/fi';
import { MdOutlineChevronRight } from 'react-icons/md';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;


const AuthPage: React.FC = () => {
  const [emailRegexs, setEmailRegex] = React.useState<string>('');
  const [passwords, setPasswords] = React.useState<string>('');

  const [errors, setErrors] = React.useState({
    email: '',
    password: '',
    agree: '',
  })

  const handleRegister = (e: React.FormEvent) => {
    const newErrors = { email: '', password: '', agree: '' }
    e.preventDefault();

    if (!emailRegex.test(emailRegexs)) {
      newErrors.email = "Пожалуйста, введите почту!"
    }
    if (!password.test(passwords)) {
      newErrors.password = "Пожалуйста, введите пароль!"
    }

    setErrors(newErrors)
  }

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
        <div className="mt-4">
          <h2 className="!font-bold text-4xl sm:text-3xl">Авторизация</h2>
          <div className='mt-20 ml-20 border w-[88%] rounded-lg p-8 px-10  gap-20 border-gray-200 flex justify-between max-sm:flex-col max-sm:mt-10 max-sm:gap-0 max-sm:ml-0 max-sm:w-full max-sm:p-5 md:mt-10 md:ml-0 md:w-full md:p-5'>
            <div className='flex items-center flex-col w-1/2 max-sm:w-full'>
              {Object.values(errors).some(val => val) && (
                <div className='border border-[#E52B0E] w-full p-3 rounded border-dashed bg-[#FFF9F9] mb-5 flex flex-col '>
                  {errors.email && <p className='text-[#E52B0E] text-sm'>{errors.email}</p>}
                  {errors.password && <p className='text-[#E52B0E] text-sm'>{errors.password}</p>}
                  {errors.agree && <p className='text-[#E52B0E] text-sm'>{errors.agree}</p>}

                </div>
              )}
              <Space direction="vertical" className='max-sm:w-[100%] md:w-[100%]'>
                <Typography.Title className='!text-lg'>
                  Email или логин <span className='text-red-700'>*</span>:
                </Typography.Title>
                <Input
                  className='lg:!w-[460px] xl:!w-full max-sm:!w-full md:w-full !h-[55px] !text-lg !mb-2.5 !-mt-2'
                  placeholder="Введите данные для авторизации"
                  value={emailRegexs}
                  onChange={e => setEmailRegex(e.target.value)}
                  status={errors.email ? 'error' : ''}
                />
                <Typography.Title className='!text-lg'>
                  Пароль <span className='text-red-700'>*</span>:
                </Typography.Title>
                <Input.Password
                  className='lg:!w-[460px] xl:!w-full max-sm:!w-full md:w-full !h-[55px] !text-lg !-mt-2'
                  placeholder="Введите пароль"
                  iconRender={(visible: boolean) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                  value={passwords}
                  onChange={e => setPasswords(e.target.value)}
                  status={errors.password ? "error" : ""}
                />
              </Space>

              <div className='w-full md:w-full'>
                <Button
                  type='default'
                  className='!mt-7 !w-full !h-[55px] md:w-full !text-blue-600 !font-semibold !text-[15px]'
                >
                  <Link to="/password-recovery" className='!text-blue-600'>Восстановить пароль</Link>
                </Button>
                <Button
                  onClick={handleRegister}
                  // disabled={!emailRegex.test(emailRegexs) || !password.test(passwords) || !agree}
                  type='primary'
                  className='!mt-4 !w-full !h-[55px] md:w-full !text-sm !font-bold !uppercase'
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

            <span className='border border-gray-200 max-sm:hidden md:hidden xl:block'></span>

            <div className='flex flex-col items-start w-1/2 md:w-[60%] max-sm:w-full max-sm:mt-5'>
              <div className='flex gap-5 max-sm:gap-3 max-sm:flex'>
                <FiUserPlus className='text-red-600 font-normal w-13 h-13 max-sm:w-8 max-sm:h-8' />
                <h3 className='!font-bold text-2xl max-sm:text-lg max-sm:items-center max-sm:flex'>Еще нет аккаунта?</h3>
              </div>
              <div className='flex max-sm:flex-wrap flex-col ml-18 max-sm:ml-11  max-sm:w-auto mt-7 max-sm:mt-3 md:mt-1'>
                <div className='flex items-center flex-wrap'>
                  <p className='max-sm:w-[220px] flex flex-wrap text-sm leading-7 text-gray-600'>
                    <span className='font-bold text-sm'>Регистрация на сайте</span>
                    позволяет получить доступ к статусу и истории вашего заказа. Просто заполните поля ниже, и вы получите учетную запись.
                  </p>
                </div>
                <p className='!mt-5 max-sm:w-[240px] text-sm flex flex-wrap leading-7 text-gray-500 md:!mt-0'>
                  Мы запрашиваем у вас только информацию, необходимую для того, чтобы сделать процесс покупки более быстрым и легким.
                </p>
                <Button
                  type='primary'
                  className='!h-[60px] max-sm:w-[220px] lg:w-3xs !bg-black !text-sm !uppercase hover:!bg-orange-700'
                >
                  <Link className='!flex !items-center' to={"/register"}>Зарегистрироваться <MdOutlineChevronRight size={30} /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main >
  );
};

export default AuthPage;
