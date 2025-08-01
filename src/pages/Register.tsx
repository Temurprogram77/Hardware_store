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
  const emailRef = useRef<InputRef>(null);
  const phoneRef = useRef<CustomPhoneInputRef>(null);
  const fullNameRef = useRef<InputRef>(null);
  const regionRef = useRef<InputRef>(null);
  const passwordRef = useRef<InputRef>(null);
  const confirmPasswordRef = useRef<InputRef>(null);

  const [isChecked1, setIsChecked1] = useState<boolean>(false);
  const [isChecked2, setIsChecked2] = useState<boolean>(false);

  const [formError, setFormError] = useState<{ field: string, message: string } | null>(null);

  const validateForm = () => {
    setFormError(null);

    const email = emailRef.current?.input?.value || "";
    const phone = phoneRef.current?.getValue() || "";
    const fullName = fullNameRef.current?.input?.value || "";
    const region = regionRef.current?.input?.value || "";
    const password = passwordRef.current?.input?.value || "";
    const confirmPassword = confirmPasswordRef.current?.input?.value || "";

    if (!email || !regex.email.test(email)) {
      return { field: "email", message: "Пожалуйста, введите действительную почту!" };
    }
    if (!phone || !phoneRegex.test(phone)) {
      return { field: "phone", message: "Поле телефон не заполнено!" };
    }
    if (!fullName || !regex.fullName.test(fullName)) {
      return { field: "fullName", message: "Пожалуйста, введите ФИО!" };
    }
    if (!region || !regex.region.test(region)) {
      return { field: "region", message: "Поле регион не заполнено!" };
    }
    if (!password || password.length < 6) {
      return { field: "password", message: "Пароль должен состоять не менее, чем из 6 символов" };
    }
    if (password !== confirmPassword) {
      return { field: "confirmPassword", message: "Пароли не совпадают" };
    }
    if (!isChecked1) {
      return { field: "terms", message: "Вы должны согласиться с условиями обслуживания" };
    }
    if (!isChecked2) {
      return { field: "policy", message: "Вы должны согласиться с политикой конфиденциальности" };
    }

    return {
      email,
      phone,
      fullName,
      region,
      password,
    };
  };

  const clearForm = () => {
    if (emailRef.current?.input) {
      emailRef.current.input.value = "";
    }
    if (phoneRef.current) {
      phoneRef.current?.clearValue()
    }
    if (fullNameRef.current?.input) {
      fullNameRef.current.input.value = "";
    }
    if (regionRef.current?.input) {
      regionRef.current.input.value = "";
    }
    if (passwordRef.current?.input) {
      passwordRef.current.input.value = "";
    }
    if (confirmPasswordRef.current?.input) {
      confirmPasswordRef.current.input.value = "";
    }
    setIsChecked1(false);
    setIsChecked2(false);
    setFormError(null);
  };

  const handleSubmit = () => {
    const validationResult = validateForm();

    if (validationResult.field) {
      setFormError(validationResult);
      return;
    }

    const formData = validationResult;
    localStorage.setItem("accounts", JSON.stringify(formData));
    notification.success({
      message: "Ro'yxatdan o'tildi",
      description: "Ma'lumotlar muvaffaqiyatli saqlandi!"
    });

    clearForm()
  };

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
                      {formError?.field === "email" && <p className="text-red-600 text-sm mt-1">{formError.message}</p>}
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
                      {formError?.field === "phone" && <p className="text-red-600 text-sm mt-1">{formError.message}</p>}
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
                  {formError?.field === "fullName" && <p className="text-red-600 text-sm mt-1">{formError.message}</p>}

                  <Typography.Title className="!text-[15px]">
                    Регион <span className="text-red-700">*</span>:
                  </Typography.Title>
                  <CustomInput
                    ref={regionRef}
                    type='text'
                    className="w-full !h-[55px] !text-lg !mb-1 !-mt-2"
                    placeholder="Ваш регион"
                  />
                  {formError?.field === "region" && <p className="text-red-600 text-sm mt-1">{formError.message}</p>}

                  <Typography.Title className="!text-[15px]">
                    Пароль <span className="text-red-700">*</span>:
                  </Typography.Title>
                  <CustomInput
                    ref={passwordRef}
                    type='password'
                    className="w-full !h-[55px] !text-lg !-mt-2"
                    placeholder="Введите пароль"
                  />
                  {formError?.field === "password" && <p className="text-red-600 text-sm mt-1">{formError.message}</p>}

                  <Typography.Title className="!text-[15px]">
                    Подтвердите пароль <span className="text-red-700">*</span>:
                  </Typography.Title>
                  <CustomInput
                    ref={confirmPasswordRef}
                    type='password'
                    className="w-full !h-[55px] !text-lg !-mt-2"
                    placeholder="Введите пароль"
                  />
                  {formError?.field === "confirmPassword" && <p className="text-red-600 text-sm mt-1">{formError.message}</p>}
                </div>
                <div className="flex flex-col gap-2">
                  <CustomCheckbox
                    checked={isChecked1}
                    onChange={(e) => setIsChecked1(e.target.checked)}
                    name='Согласен с условиями обслуживания'
                  />
                  {formError?.field === "terms" && <p className="text-red-600 text-sm mt-1">{formError.message}</p>}
                  <CustomCheckbox
                    checked={isChecked2}
                    onChange={(e) => setIsChecked2(e.target.checked)}
                    name='Согласен с обработкой персональных данных в соответствии с политикой конфиденциальности'
                  />
                  {formError?.field === "policy" && <p className="text-red-600 text-sm mt-1">{formError.message}</p>}
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
                    <Link to={"/my-account"}>Авторизоваться</Link>
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