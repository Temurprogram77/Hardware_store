import React, { useState } from 'react';
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
}

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [fullName, setFullName] = useState('');
  const [region, setRegion] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeService, setAgreeService] = useState(false);
  const [agreePolicy, setAgreePolicy] = useState(false);

  const [errors, setErrors] = useState({
    email: '',
    phone: '',
    fullName: '',
    region: '',
    password: '',
    confirmPassword: '',
    agreement: '',
  });

  const handleRegister = () => {
    const newErrors = {
      email: '',
      phone: '',
      fullName: '',
      region: '',
      password: '',
      confirmPassword: '',
      agreement: '',
    };

    if (!regex.email.test(email)) {
      newErrors.email = "Email noto‘g‘ri formatda";
    }

    if (!regex.phone.test(phone)) {
      newErrors.phone = "Telefon raqami +7 bilan va 11 raqamdan iborat bo‘lishi kerak";
    }

    if (!regex.fullName.test(fullName)) {
      newErrors.fullName = "Ism familiya to‘liq kiriting. Kamida 5ta belgi";
    }

    if (!regex.region.test(region)) {
      newErrors.region = "Region nomini to‘g‘ri kiriting";
    }

    if (!regex.password.test(password)) {
      newErrors.password = "Parol: 8 ta belgi, katta harf, raqam va belgi bo‘lishi kerak";
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Parollar mos emas";
    }

    if (!agreeService || !agreePolicy) {
      newErrors.agreement = "Iltimos, barcha shartlarga rozilik bering";
    }

    setErrors(newErrors);

    const isValid = Object.values(newErrors).every(val => val === "");
    if (!isValid) return;

    console.log("Formani yuborayapmiz:", {
      email,
      phone,
      fullName,
      region,
      password,
    });
  };

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
                        className='!w-[325px] max-sm:!w-[260px] !h-[55px] !text-lg !mb-1 !-mt-2'
                        placeholder="Введите ваш email адрес"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                    </div>
                    <div>
                      <Typography.Title className='!text-lg'>
                        Номер телефона  <span className='text-red-700'>*</span>:
                      </Typography.Title>
                      <Input
                        className='!w-[325px] max-sm:!w-[260px] !h-[55px] !text-lg !mb-1 !-mt-2'
                        placeholder="Введите данные для авторизации"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      {errors.phone && <p className='text-red-500 text-sm'>{errors.phone}</p>}
                    </div>
                  </div>

                  <Typography.Title className='!text-lg'>
                    ФИО <span className='text-red-700'>*</span>:
                  </Typography.Title>
                  <Input
                    className='!w-full !h-[55px] !text-lg !mb-1 !-mt-2'
                    placeholder="Ваше полное имя"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  {errors.fullName && <p className='text-red-500 text-sm'>{errors.fullName}</p>}

                  <Typography.Title className='!text-lg'>
                    Регион <span className='text-red-700'>*</span>:
                  </Typography.Title>
                  <Input
                    className='!w-full !h-[55px] !text-lg !mb-1 !-mt-2'
                    placeholder="Ваш регион"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                  />
                  {errors.region && <p className='text-red-500 text-sm'>{errors.region}</p>}

                  <Typography.Title className='!text-lg'>
                    Пароль <span className='text-red-700'>*</span>:
                  </Typography.Title>
                  <Input.Password
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='!w-full !h-[55px] !text-lg !-mt-2'
                    placeholder="Введите пароль"
                    iconRender={(visible: boolean) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                  {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}

                  <Typography.Title className='!text-lg'>
                    Подтвердите пароль <span className='text-red-700'>*</span>:
                  </Typography.Title>
                  <Input.Password
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className='!w-full !h-[55px] !text-lg !-mt-2'
                    placeholder="Введите пароль"
                    iconRender={(visible: boolean) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                  {errors.confirmPassword && <p className='text-red-500 text-sm'>{errors.confirmPassword}</p>}
                </Space>

                <div className='flex flex-col'>
                  <Checkbox
                    checked={agreeService}
                    onChange={e => setAgreeService(e.target.checked)}
                    className='!mt-2.5 items-baseline !text-sm'
                  >
                    Согласен с условиями обслуживания
                  </Checkbox>
                  <Checkbox
                    checked={agreePolicy}
                    onChange={e => setAgreePolicy(e.target.checked)}
                    className='!mt-2.5 items-baseline !text-sm'
                  >
                    Согласен с обработкой персональных данных в соответствии с <Link className='!underline' to={"/privacy-policy"}>политикой конфиденциальности</Link>
                  </Checkbox>
                  {errors.agreement && <p className='text-red-500 text-sm'>{errors.agreement}</p>}
                </div>

                <div className='w-full'>
                  <Button
                    type='primary'
                    className='!mt-4 !w-full !h-[55px] !text-sm !font-bold !uppercase'
                    onClick={handleRegister}
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
                    <span className='font-bold'> авторизации </span>
                    если у вас уже есть зарегистрированный аккаунт.
                  </p>
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
