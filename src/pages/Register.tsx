import { Breadcrumb, notification, Typography, type InputRef } from 'antd';
import { Link } from 'react-router-dom';
import { FiUserPlus } from 'react-icons/fi';
import CustomPhoneInput, { phoneRegex, type CustomPhoneInputRef } from '../components/ui/CustomINputPhone';
import CustomInput from '../components/ui/CustomInput';
import CustomCheckbox from '../components/ui/CustomCheckbox';
import CustomButton from '../components/ui/CustomButton';
import { useRef, useState } from 'react';

export const regex = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  fullName: /^[A-Za-zА-Яа-яЁё\s]{5,}$/,
  region: /^[A-Za-zА-Яа-яЁё\s-]{2,}$/,
  password: /^(?=.*[a-z])(?=.*\d)[A-Za-z\d\W_]{6,}$/,
};


const Register = () => {


  const emailRef = useRef<InputRef>(null)
  const phoneRef = useRef<CustomPhoneInputRef>(null)
  const fullNameRef = useRef<InputRef>(null)
  const regionRef = useRef<InputRef>(null)
  const passwordRef = useRef<InputRef>(null)
  const confirmPasswordRef = useRef<InputRef>(null)

  const [IsChecked1, setIsChecked1] = useState<boolean>(false)
  const [IsChecked2, setIsChecked2] = useState<boolean>(false)
  const [formErrors, setFormErros] = useState<Record<string, string>>({})

  const validateForm = () => {
    const errors: Record<string, string> = {}
    const email = emailRef.current?.input?.value || ""
    const phone = phoneRef.current?.getValue() || ""
    const fullName = fullNameRef.current?.input?.value || ""
    const region = regionRef.current?.input?.value || ""
    const password = passwordRef.current?.input?.value || ""
    const confirmPassword = confirmPasswordRef.current?.input?.value || ""

    if (!email) errors.email = ""
    if (!regex.email.test(email)) errors.email = ("Email noto‘g‘ri formatda!");
    if (!phone) errors.phone = "Поле телефон не заполнено!"
    if (!phoneRegex.test(phone)) errors.phone = "Telefon raqami noto‘g‘ri!"
    if (!fullName) errors.fullName = "Пожалуйста, введите ФИО!"
    if (!regex.fullName.test(fullName)) errors.fullName = "Ism noto‘g‘ri formatda!"

    if (!region) errors.region = "Поле регион не заполнено!"
    if (!regex.region.test(region)) errors.region = "Hudud noto‘g‘ri!"

    if (!password || password.length < 6) errors.password = "Parol kamida 6 ta belgidan iborat bo‘lishi kerak!"
    if (password !== confirmPassword) errors.password = "Parollar mos emas!"

    if (!IsChecked1) errors.terms = "Вы должны согласиться с условиями обслуживания"
    if (!IsChecked2) errors.policy = "Вы должны согласиться с политикой конфиденциальности"

    setFormErros(errors)

    if (Object.keys(errors).length > 0) return null;

    return {
      email,
      phone,
      fullName,
      region,
      password
    }
  }


  const handleSubmit = () => {
    const formData = validateForm()
    if (!formData) return

    localStorage.setItem("accounts", JSON.stringify(formData));
    notification.success({
      message: "Ro'yxatdan o'tildi",
      description: "Malumotlar muvaffaqiyatli saqlandi!"
    })
  }




  return (
    <main className="mt-4 mb-10 px-3">
      <hr className="text-gray-200" />
      <div className="max-w-[1460px] mx-auto mt-2.5">
        <Breadcrumb
          items={[
            { title: <Link to="/"><span className="text-black text-sm">Стройоптторг</span></Link> },
            { title: <span className="text-[#959597] text-sm">Регистрация</span> },
          ]}
        />

        <section>
          <div className="mt-4">
            <h2 className="!font-bold text-4xl">Регистрация</h2>
            <div className="mt-10 border w-[100%] max-sm:w-full max-sm:flex-col rounded-lg py-8 max-sm:!py-4 px-10 border-gray-200 flex justify-between max-sm:px-4 md:p-5">
              <div className="flex flex-col max-sm:mr-0 max-sm:w-full xl:mr-10">

                <div className='flex flex-col gap-2 mb-2'>
                  <div className="xl:flex xl:gap-3">
                    <div className="max-sm:w-full flex flex-col gap-2">
                      <Typography.Title className="!text-[15px]">
                        Email <span className="text-red-700">*</span>:
                      </Typography.Title>
                      <CustomInput
                        ref={emailRef}
                        type='text'
                        className='md:!w-full max-sm:!w-full xl:!w-[330px] !h-[50px] !text-lg !mb-1 !-mt-2'
                        placeholder='Введите ваш email адрес'
                      />
                      {formErrors.email && <p className="text-red-600 text-sm mt-1">{formErrors.email}</p>}
                    </div>
                    <div className="max-sm:w-full flex flex-col gap-2">
                      <Typography.Title className="!text-[15px]">
                        Номер телефона <span className="text-red-700">*</span>:
                      </Typography.Title>
                      <CustomPhoneInput
                        ref={phoneRef}
                        placeholder='+998 (__) ___-__-__'
                        className='flex flex-wrap border border-gray-300 pl-3 outline-none focus:border-blue-500 rounded-md md:!w-full max-sm:!w-full xl:!w-[330px] !h-[50px] !text-lg !mb-1 !-mt-2 transition-all'
                      />
                      {formErrors.phone && <p className="text-red-600 text-sm mt-1">{formErrors.phone}</p>}
                    </div>
                  </div>

                  <Typography.Title className="!text-[15px]">
                    ФИО <span className="text-red-700">*</span>:
                  </Typography.Title>
                  <CustomInput
                    ref={fullNameRef}
                    type='text'
                    className="w-full !h-[55px] !text-lg !mb-1 !-mt-2"
                    placeholder="Ваше полное имя"
                  />
                  {formErrors.fullName && <p className="text-red-600 text-sm mt-1">{formErrors.fullName}</p>}

                  <Typography.Title className="!text-[15px]">
                    Регион <span className="text-red-700">*</span>:
                  </Typography.Title>
                  <CustomInput
                    ref={regionRef}
                    type='text'
                    className="w-full !h-[55px] !text-lg !mb-1 !-mt-2"
                    placeholder="Ваш регион"
                  />
                  {formErrors.region && <p className="text-red-600 text-sm mt-1">{formErrors.region}</p>}

                  <Typography.Title className="!text-[15px]">
                    Пароль <span className="text-red-700">*</span>:
                  </Typography.Title>
                  <CustomInput
                    ref={passwordRef}
                    type='password'
                    className="w-full !h-[55px] !text-lg !-mt-2"
                    placeholder="Введите пароль"
                  />
                  {formErrors.password && <p className="text-red-600 text-sm mt-1">{formErrors.password}</p>}

                  <Typography.Title className="!text-[15px]">
                    Подтвердите пароль <span className="text-red-700">*</span>:
                  </Typography.Title>
                  <CustomInput
                    ref={confirmPasswordRef}
                    type='password'
                    className="w-full !h-[55px] !text-lg !-mt-2"
                    placeholder="Введите пароль"
                  />
                  {formErrors.confirmPassword && <p className="text-red-600 text-sm mt-1">{formErrors.confirmPassword}</p>}
                </div>
                <div className="flex flex-col gap-2">
                  <CustomCheckbox
                    checked={IsChecked1}
                    onChange={(e) => setIsChecked1(e.target.value)}
                    name='Согласен с условиями обслуживания'
                  />
                  {formErrors.terms && <p className="text-red-600 text-sm mt-1">{formErrors.terms}</p>}
                  <CustomCheckbox
                    checked={IsChecked2}
                    onChange={(e) => setIsChecked2(e.target.value)}
                    name='Согласен с обработкой персональных данных в соответствии с политикой конфиденциальности'
                  />
                  {formErrors.policy && <p className="text-red-600 text-sm mt-1">{formErrors.policy}</p>}
                </div>

                <div className="w-full">
                  <CustomButton
                    onClick={handleSubmit}
                    text=''
                    type="primary"
                    className="!mt-4 !w-full !h-[55px] !text-sm !font-bold !uppercase"
                  >
                    Зарегистрироваться
                  </CustomButton>
                </div>
              </div>



              <div className="max-sm:mt-15">
                <div className="flex gap-5 max-sm:gap-3">
                  <FiUserPlus className="text-red-600 font-normal max-sm:w-8 max-sm:h-8 md:w-10 md:h-10" />
                  <h3 className="!font-bold text-2xl max-sm:text-lg md:text-xl">Уже есть аккаунт?</h3>
                </div>
                <div className="flex flex-col ml-18 mt-7 max-sm:mt-2">
                  <div className="flex flex-wrap items-center gap-1.5 w-fit">
                    <p className="leading-7 text-sm text-gray-600">
                      Перейдите к <span className="font-bold">авторизации</span> если у вас уже есть зарегистрированный аккаунт.
                    </p>
                  </div>
                  <CustomButton
                    text=''
                    type="primary"
                    className="!h-[60px] !bg-black xl:w-3xs !text-sm !uppercase hover:!bg-orange-700"
                  >
                    <Link to={"/auth"}>Авторизоваться</Link>
                  </CustomButton>
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