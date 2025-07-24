import React, { useState } from 'react';
import { Breadcrumb, Typography, Input, Button, Space, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { FiUserPlus } from 'react-icons/fi';
import { MdOutlineChevronRight } from 'react-icons/md';

export const regex = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^(\+7|8)[\s\(-]*\d{3}[\s\)-]*\d{3}[\s-]*\d{2}[\s-]*\d{2}$/,
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
    policy: '',
  });

  const handleRegister = () => {
    const newErrors = { email: '', phone: '', fullName: '', region: '', password: '', confirmPassword: '', agreement: '', policy: '' };

    if (!regex.email.test(email)) newErrors.email = "Пожалуйста, введите действительную почту!";
    if (!regex.phone.test(phone)) newErrors.phone = "Поле телефон не заполнено!";
    if (!regex.fullName.test(fullName)) newErrors.fullName = "Пожалуйста, введите ФИО!";
    if (!regex.region.test(region)) newErrors.region = "Поле регион не заполнено!";
    if (!regex.password.test(password)) newErrors.password = "Пароль должен состоять не менее, чем из 8 символов";
    if (password !== confirmPassword) newErrors.confirmPassword = "Parollar mos emas";
    if (!agreeService) newErrors.agreement = "Вы должны согласиться с условиями обслуживания";
    if (!agreePolicy) newErrors.policy = "Вы должны согласиться с политикой конфиденциальности";

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
            { title: (<Link to="/"><span className='text-black text-sm'>Стройоптторг</span></Link>) },
            { title: <span className='text-[#959597] text-sm'>Регистрация</span> },
          ]}
        />

        <section>
          <div className="mt-4">
            <h2 className="!font-bold text-4xl">Регистрация</h2>
            <div className='mt-10 border w-[100%] max-sm:w-full max-sm:flex-col rounded-lg py-8 max-sm:!py-4 px-10 border-gray-200 flex justify-between max-sm:px-4 md:p-5'>
              <div className='flex flex-col mr-25 max-sm:mr-0 max-sm:w-full'>
                {Object.values(errors).some(val => val) && (
                  <div className='border border-[#E52B0E] p-3 rounded border-dashed bg-[#FFF9F9] mb-5'>
                    {errors.email && <p className='text-[#E52B0E] text-sm'>{errors.email}</p>}
                    {errors.phone && <p className='text-[#E52B0E] text-sm'>{errors.phone}</p>}
                    {errors.fullName && <p className='text-[#E52B0E] text-sm'>{errors.fullName}</p>}
                    {errors.region && <p className='text-[#E52B0E] text-sm'>{errors.region}</p>}
                    {errors.password && <p className='text-[#E52B0E] text-sm'>{errors.password}</p>}
                    {errors.confirmPassword && <p className='text-[#E52B0E] text-sm'>{errors.confirmPassword}</p>}
                    {errors.agreement && <p className='text-[#E52B0E] text-sm'>{errors.agreement}</p>}
                    {errors.policy && <p className='text-[#E52B0E] text-sm'>{errors.policy}</p>}
                  </div>
                )}

                <Space direction="vertical">
                  <div className='xl:flex xl:gap-7'>
                    <div className='max-sm:w-full'>
                      <Typography.Title className='!text-lg'>Email <span className='text-red-700'>*</span>:</Typography.Title>
                      <Input
                        className=' md:!w-full max-sm:!w-full xl:!w-[315px] !h-[55px] !text-lg !mb-1 !-mt-2'
                        placeholder="Введите ваш email адрес"
                        value={email}
                        onChange={(e) => {
                          const val = e.target.value;
                          setEmail(val);
                          setErrors(prev => ({ ...prev, email: regex.email.test(val) ? '' : 'Пожалуйста, введите действительную почту!' }));
                        }}
                        status={errors.email ? 'error' : ''}
                      />
                    </div>
                    <div className='max-sm:w-full'>
                      <Typography.Title className='!text-lg'>Номер телефона <span className='text-red-700'>*</span>:</Typography.Title>
                      <Input
                        className=' md:!w-full max-sm:!w-full xl:!w-[315px] !h-[55px] !text-lg !mb-1 !-mt-2'
                        placeholder="+7 (___) ___-__-__"
                        value={phone}
                        onChange={(e) => {
                          const val = e.target.value;
                          setPhone(val);
                          setErrors(prev => ({ ...prev, phone: regex.phone.test(val) ? '' : 'Поле телефон не заполнено!' }));
                        }}
                        status={errors.phone ? 'error' : ''}
                        maxLength={12}
                      />
                    </div>
                  </div>

                  <Typography.Title className='!text-lg'>ФИО <span className='text-red-700'>*</span>:</Typography.Title>
                  <Input
                    className='!w-full !h-[55px] !text-lg !mb-1 !-mt-2'
                    placeholder="Ваше полное имя"
                    value={fullName}
                    onChange={(e) => {
                      const val = e.target.value;
                      setFullName(val);
                      setErrors(prev => ({ ...prev, fullName: regex.fullName.test(val) ? '' : 'Пожалуйста, введите ФИО!' }));
                    }}
                    status={errors.fullName ? 'error' : ''}
                  />

                  <Typography.Title className='!text-lg'>Регион <span className='text-red-700'>*</span>:</Typography.Title>
                  <Input
                    className='!w-full !h-[55px] !text-lg !mb-1 !-mt-2'
                    placeholder="Ваш регион"
                    value={region}
                    onChange={(e) => {
                      const val = e.target.value;
                      setRegion(val);
                      setErrors(prev => ({ ...prev, region: regex.region.test(val) ? '' : 'Поле регион не заполнено!' }));
                    }}
                    status={errors.region ? 'error' : ''}
                  />

                  <Typography.Title className='!text-lg'>Пароль <span className='text-red-700'>*</span>:</Typography.Title>
                  <Input.Password
                    value={password}
                    onChange={(e) => {
                      const val = e.target.value;
                      setPassword(val);
                      setErrors(prev => ({
                        ...prev,
                        password: regex.password.test(val) ? '' : 'Пароль должен состоять не менее, чем из 8 символов',
                        confirmPassword: val === confirmPassword ? '' : 'Parollar mos emas'
                      }));
                    }}
                    className='!w-full !h-[55px] !text-lg !-mt-2'
                    placeholder="Введите пароль"
                    iconRender={(visible: boolean) => visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
                    status={errors.password ? 'error' : ''}
                  />

                  <Typography.Title className='!text-lg'>Подтвердите пароль <span className='text-red-700'>*</span>:</Typography.Title>
                  <Input.Password
                    value={confirmPassword}
                    onChange={(e) => {
                      const val = e.target.value;
                      setConfirmPassword(val);
                      setErrors(prev => ({ ...prev, confirmPassword: val === password ? '' : 'Parollar mos emas' }));
                    }}
                    className='!w-full !h-[55px] !text-lg !-mt-2'
                    placeholder="Введите пароль"
                    iconRender={(visible: boolean) => visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
                    status={errors.confirmPassword ? 'error' : ''}
                  />
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

              <span className='max-sm:hidden md:hidden border border-gray-200 xl:block'></span>
              <div className='max-sm:mt-15'>
                <div className='flex gap-5 max-sm:gap-3'>
                  <FiUserPlus className='text-red-600 font-normal max-sm:w-8 max-sm:h-8 md:w-10 md:h-10' />
                  <h3 className='!font-bold text-2xl max-sm:text-lg md:text-xl'>Уже есть аккаунт?</h3>
                </div>
                <div className='flex flex-col ml-18 mt-7 max-sm:ml-11 max-sm:mt-2 '>
                  <div className='flex flex-wrap items-center gap-1.5 max-sm:w-full w-fit'>
                    <p className='leading-7 text-sm text-gray-600'>
                      Перейдите к
                      <span className='font-bold'> авторизации </span>
                      если у вас уже есть зарегистрированный аккаунт.
                    </p>
                  </div>
                  <Button
                    type='primary'
                    className='!h-[60px] !bg-black xl:w-3xs !text-sm !uppercase hover:!bg-orange-700'
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