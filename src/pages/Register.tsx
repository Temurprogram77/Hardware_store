import { useRef, useState, useEffect } from 'react';
import { Breadcrumb, Typography, Input, Button, Space, Checkbox, notification, type InputRef } from 'antd'; // notification import qilindi
import { Link, useNavigate } from 'react-router-dom';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { FiUserPlus } from 'react-icons/fi';
import { MdOutlineChevronRight } from 'react-icons/md';

export const regex = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^(\+7|8)[\s\(-]*\d{3}[\s\)-]*\d{3}[\s-]*\d{2}[\s-]*\d{2}$/,
  fullName: /^[A-Za-zА-Яа-яЁё\s]{5,}$/,
  region: /^[A-Za-zА-Яа-яЁё\s-]{2,}$/,
  password: /^(?=.*[a-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,}$/,
};

const Register = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formValues, setFormValues] = useState({
    email: '',
    phone: '',
    fullName: '',
    region: '',
    password: '',
    confirmPassword: '',
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);

  const navigate = useNavigate();

  // Input ref'lar
  const emailRef = useRef<InputRef>(null);
  const phoneRef = useRef<InputRef>(null);
  const fullNameRef = useRef<InputRef>(null);
  const regionRef = useRef<InputRef>(null);
  const passwordRef = useRef<InputRef>(null);
  const confirmPasswordRef = useRef<InputRef>(null);
  const firstCheckboxRef = useRef<InputRef>(null);
  const secondCheckboxRef = useRef<InputRef>(null);

  // Komponent yuklanganda email maydoniga fokus
  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  // Har bir input o'zgarganda validatsiya
  const handleChange = (field: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));

    const newErrors = { ...errors };

    if (field === 'email') {
      if (!value) {
        newErrors.email = "Email bo'sh bo'lishi mumkin emas!";
      } else if (!regex.email.test(value)) {
        newErrors.email = "Iltimos, haqiqiy email kiriting!";
      } else {
        delete newErrors.email;
      }
    }

    if (field === 'phone') {
      if (!value) {
        newErrors.phone = "Telefon raqami bo'sh bo'lishi mumkin emas!";
      } else if (!regex.phone.test(value)) {
        newErrors.phone = "Telefon raqami noto'g'ri formatda!";
      } else {
        delete newErrors.phone;
      }
    }

    if (field === 'fullName') {
      if (!value) {
        newErrors.fullName = "FIO bo'sh bo'lishi mumkin emas!";
      } else if (!regex.fullName.test(value)) {
        newErrors.fullName = "Iltimos, FIO kiriting (kamida 5 belgi)!";
      } else {
        delete newErrors.fullName;
      }
    }

    if (field === 'region') {
      if (!value) {
        newErrors.region = "Region bo'sh bo'lishi mumkin emas!";
      } else if (!regex.region.test(value)) {
        newErrors.region = "Region noto'g'ri formatda!";
      } else {
        delete newErrors.region;
      }
    }

    if (field === 'password') {
      if (!value) {
        newErrors.password = "Parol bo'sh bo'lishi mumkin emas!";
      } else if (!regex.password.test(value)) {
        newErrors.password =
          "Parol kamida 6 belgidan iborat bo'lishi kerak, kichik harf, raqam va maxsus belgi qatnashsin!";
      } else {
        delete newErrors.password;
      }
    }

    if (field === 'confirmPassword') {
      if (!value) {
        newErrors.confirmPassword = "Parolni tasdiqlash bo'sh bo'lishi mumkin emas!";
      } else if (value !== formValues.password) {
        newErrors.confirmPassword = "Parollar mos kelmadi!";
      } else {
        delete newErrors.confirmPassword;
      }
    }

    setErrors(newErrors);
  };

  // Enter tugmasi bosilganda keyingi inputga o'tish
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    nextRef: React.RefObject<InputRef | HTMLInputElement | null>
  ) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      nextRef.current?.focus();
    }
  };

  // Ro'yxatdan o'tish tugmasi bosilganda barcha maydonlarni yakuniy tekshirish
  const handleRegister = () => {
    const newErrors: Record<string, string> = {};

    if (!formValues.email) newErrors.email = "Email bo'sh bo'lishi mumkin emas!";
    else if (!regex.email.test(formValues.email)) newErrors.email = "Iltimos, haqiqiy email kiriting!";

    if (!formValues.phone) newErrors.phone = "Telefon raqami bo'sh bo'lishi mumkin emas!";
    else if (!regex.phone.test(formValues.phone)) newErrors.phone = "Telefon raqami noto'g'ri formatda!";

    if (!formValues.fullName) newErrors.fullName = "FIO bo'sh bo'lishi mumkin emas!";
    else if (!regex.fullName.test(formValues.fullName)) newErrors.fullName = "Iltimos, FIO kiriting (kamida 5 belgi)!";

    if (!formValues.region) newErrors.region = "Region bo'sh bo'lishi mumkin emas!";
    else if (!regex.region.test(formValues.region)) newErrors.region = "Region noto'g'ri formatda!";

    if (!formValues.password) newErrors.password = "Parol bo'sh bo'lishi mumkin emas!";
    else if (!regex.password.test(formValues.password)) {
      newErrors.password =
        "Parol kamida 6 belgidan iborat bo'lishi kerak, kichik harf, raqam va maxsus belgi qatnashsin!";
    }

    if (!formValues.confirmPassword) newErrors.confirmPassword = "Parolni tasdiqlash bo'sh bo'lishi mumkin emas!";
    else if (formValues.password !== formValues.confirmPassword) newErrors.confirmPassword = "Parollar mos kelmadi!";

    if (!agreedToTerms) newErrors.terms = "Shartnoma shartlariga rozi bo'lishingiz kerak!";
    if (!agreedToPrivacy) newErrors.privacy = "Maxfiylik siyosatiga rozi bo'lishingiz kerak!";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const newUser = {
          email: formValues.email,
          password: formValues.password,
          fullName: formValues.fullName,
          phone: formValues.phone,
          region: formValues.region
        };

        const userExists = users.some((user: any) => user.email === newUser.email);
        if (userExists) {
          notification.error({
            message: "Ro'yxatdan o'tishda xato",
            description: "Bu email allaqachon ro'yxatdan o'tgan!",
            placement: 'topRight',
          });
          setErrors((prev) => ({ ...prev, email: "Bu email allaqachon ro'yxatdan o'tgan!" }));
          return;
        }

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        notification.success({
          message: "Muvaffaqiyatli ro'yxatdan o'tish",
          description: "Hisobingiz muvaffaqiyatli yaratildi! Endi avtorizatsiya sahifasiga yo'naltirilasiz.",
          placement: 'topRight',
        });

        setFormValues({
          email: '',
          phone: '',
          fullName: '',
          region: '',
          password: '',
          confirmPassword: '',
        });
        setAgreedToTerms(false);
        setAgreedToPrivacy(false);
        setErrors({});

        navigate('/my-account');
      } catch (e) {
        notification.error({
          message: "Xato",
          description: "Ro'yxatdan o'tishda kutilmagan xato yuz berdi. Iltimos, qayta urinib ko'ring.",
          placement: 'topRight',
        });
      }
    } else {
      notification.warning({
        message: "Ma'lumotlarni kiriting",
        description: "Iltimos, barcha maydonlarni to'g'ri to'ldiring.",
        placement: 'topRight',
      });
    }
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
                {Object.values(errors).some((val) => val) && (
                  <div className="border border-[#E52B0E] w-full p-3 rounded border-dashed bg-[#FFF9F9] mb-5 flex flex-col">
                    {errors.email && <p className="text-[#E52B0E] text-sm">{errors.email}</p>}
                    {errors.phone && <p className="text-[#E52B0E] text-sm">{errors.phone}</p>}
                    {errors.fullName && <p className="text-[#E52B0E] text-sm">{errors.fullName}</p>}
                    {errors.region && <p className="text-[#E52B0E] text-sm">{errors.region}</p>}
                    {errors.password && <p className="text-[#E52B0E] text-sm">{errors.password}</p>}
                    {errors.confirmPassword && <p className="text-[#E52B0E] text-sm">{errors.confirmPassword}</p>}
                    {errors.terms && <p className="text-[#E52B0E] text-sm">{errors.terms}</p>}
                    {errors.privacy && <p className="text-[#E52B0E] text-sm">{errors.privacy}</p>}
                  </div>
                )}
                <Space direction="vertical">
                  <div className="xl:flex xl:gap-7">
                    <div className="max-sm:w-full">
                      <Typography.Title className="!text-lg">
                        Email <span className="text-red-700">*</span>:
                      </Typography.Title>
                      <Input
                        ref={emailRef}
                        value={formValues.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, phoneRef)}
                        className="md:!w-full max-sm:!w-full xl:!w-[345px] !h-[55px] !text-lg !mb-1 !-mt-2"
                        placeholder="Введите ваш email адрес"
                      />
                    </div>
                    <div className="max-sm:w-full">
                      <Typography.Title className="!text-lg">
                        Номер телефона <span className="text-red-700">*</span>:
                      </Typography.Title>
                      <Input
                        ref={phoneRef}
                        value={formValues.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, fullNameRef)}
                        className="md:!w-full max-sm:!w-full xl:!w-[345px] !h-[55px] !text-lg !mb-1 !-mt-2"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                  </div>

                  <Typography.Title className="!text-lg">
                    ФИО <span className="text-red-700">*</span>:
                  </Typography.Title>
                  <Input
                    ref={fullNameRef}
                    value={formValues.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, regionRef)}
                    className="w-full !h-[55px] !text-lg !mb-1 !-mt-2"
                    placeholder="Ваше полное имя"
                  />

                  <Typography.Title className="!text-lg">
                    Регион <span className="text-red-700">*</span>:
                  </Typography.Title>
                  <Input
                    ref={regionRef}
                    value={formValues.region}
                    onChange={(e) => handleChange('region', e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, passwordRef)}
                    className="w-full !h-[55px] !text-lg !mb-1 !-mt-2"
                    placeholder="Ваш регион"
                  />

                  <Typography.Title className="!text-lg">
                    Пароль <span className="text-red-700">*</span>:
                  </Typography.Title>
                  <Input.Password
                    ref={passwordRef}
                    value={formValues.password}
                    onChange={(e) => handleChange('password', e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, confirmPasswordRef)}
                    className="w-full !h-[55px] !text-lg !-mt-2"
                    placeholder="Введите пароль"
                    iconRender={(visible: boolean) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  />

                  <Typography.Title className="!text-lg">
                    Подтвердите пароль <span className="text-red-700">*</span>:
                  </Typography.Title>
                  <Input.Password
                    ref={confirmPasswordRef}
                    value={formValues.confirmPassword}
                    onChange={(e) => handleChange('confirmPassword', e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, firstCheckboxRef)}
                    className="w-full !h-[55px] !text-lg !-mt-2"
                    placeholder="Введите пароль"
                    iconRender={(visible: boolean) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                  />
                </Space>

                <div className="flex flex-col">
                  <Checkbox
                    ref={firstCheckboxRef}
                    checked={agreedToTerms}
                    onChange={(e) => {
                      setAgreedToTerms(e.target.checked);
                      setErrors((prev) => {
                        const newErrors = { ...prev };
                        if (e.target.checked) delete newErrors.terms;
                        return newErrors;
                      });
                    }}
                    className="!mt-2.5 items-baseline !text-sm"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        secondCheckboxRef.current?.focus();
                      }
                    }}
                  >
                    Согласен с условиями обслуживания
                  </Checkbox>
                  <Checkbox
                    ref={secondCheckboxRef}
                    checked={agreedToPrivacy}
                    onChange={(e) => {
                      setAgreedToPrivacy(e.target.checked);
                      setErrors((prev) => {
                        const newErrors = { ...prev };
                        if (e.target.checked) delete newErrors.privacy;
                        return newErrors;
                      });
                    }}
                    className="!mt-2.5 !text-sm flex "
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleRegister();
                      }
                    }}
                  >
                    Согласен с обработкой персональных данных в соответствии с{' '}
                    <Link className="!underline !text-[12px] ml-1" to="/privacy-policy">
                      политикой конфиденциальности
                    </Link>{' '}
                  </Checkbox>
                </div>

                <div className="w-full">
                  <Button
                    type="primary"
                    className="!mt-4 !w-full !h-[55px] !text-sm !font-bold !uppercase"
                    onClick={handleRegister}
                  >
                    Зарегистрироваться
                  </Button>
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
                  <Button
                    type="primary"
                    className="!h-[60px] !bg-black xl:w-3xs !text-sm !uppercase hover:!bg-orange-700"
                  >
                    <Link className="!flex !items-center" to="/my-account">
                      Авторизоваться
                      <MdOutlineChevronRight size={30} />
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