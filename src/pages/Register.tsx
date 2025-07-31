import { useRef, useState, useEffect } from 'react';
import { Breadcrumb, Typography, Input, Button, Space, Checkbox, notification, type InputRef } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { FiUserPlus } from 'react-icons/fi';
import { MdOutlineChevronRight } from 'react-icons/md';
import CustomPhoneInput from '../components/ui/CustomINputPhone';
import CustomInput from '../components/ui/CustomInput';

export const regex = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
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

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  // TELEFON RAQAMNI FORMATLASH FUNKSIYASI
  const formatPhoneNumber = (value: string): string => {
    // If the value is empty, return an empty string immediately to clear the input
    if (!value) return '';

    let digits = value.replace(/\D/g, '');

    if (digits.startsWith('8')) {
      digits = '7' + digits.substring(1);
    }
    const numberPart = digits.startsWith('7') ? digits.substring(1) : digits;
    const limitedNumber = numberPart.slice(0, 10);

    let formatted = '+7 (';
    if (limitedNumber.length > 0) {
      formatted += limitedNumber.substring(0, 3);
    }
    if (limitedNumber.length >= 4) {
      formatted += ') ' + limitedNumber.substring(3, 6);
    }
    if (limitedNumber.length >= 7) {
      formatted += '-' + limitedNumber.substring(6, 8);
    }
    if (limitedNumber.length >= 9) {
      formatted += '-' + limitedNumber.substring(8, 10);
    }
    return formatted;
  };

  // YANGILANGAN `handleChange` FUNKSIYASI
  const handleChange = (field: string, value: string) => {
    const valueToSet = field === 'phone' ? formatPhoneNumber(value) : value;
    setFormValues((prev) => ({ ...prev, [field]: valueToSet }));

    const newErrors = { ...errors };

    if (field === 'email') {
      if (!valueToSet) {
        newErrors.email = "Email bo'sh bo'lishi mumkin emas!";
      } else if (!regex.email.test(valueToSet)) {
        newErrors.email = "Iltimos, haqiqiy email kiriting!";
      } else {
        delete newErrors.email;
      }
    }

    if (field === 'phone') {
      // If the formatted value is empty, it means the user cleared the input.
      // We should only show an error if the input is not empty but still invalid.
      if (!valueToSet) {
        newErrors.phone = "Telefon raqami bo'sh bo'lishi mumkin emas!";
      } else if (!regex.phone.test(valueToSet)) {
        newErrors.phone = "Raqamni to'liq kiriting!";
      } else {
        delete newErrors.phone;
      }
    }

    if (field === 'fullName') {
      if (!valueToSet) {
        newErrors.fullName = "FIO bo'sh bo'lishi mumkin emas!";
      } else if (!regex.fullName.test(valueToSet)) {
        newErrors.fullName = "Iltimos, FIO kiriting (kamida 5 belgi)!";
      } else {
        delete newErrors.fullName;
      }
    }

    if (field === 'region') {
      if (!valueToSet) {
        newErrors.region = "Region bo'sh bo'lishi mumkin emas!";
      } else if (!regex.region.test(valueToSet)) {
        newErrors.region = "Region noto'g'ri formatda!";
      } else {
        delete newErrors.region;
      }
    }

    if (field === 'password') {
      if (!valueToSet) {
        newErrors.password = "Parol bo'sh bo'lishi mumkin emas!";
      } else if (!regex.password.test(valueToSet)) {
        newErrors.password =
          "Parol kamida 6 belgidan iborat bo'lishi kerak, kichik harf, raqam va maxsus belgi qatnashsin!";
      } else {
        delete newErrors.password;
      }
    }

    if (field === 'confirmPassword') {
      if (!valueToSet) {
        newErrors.confirmPassword = "Parolni tasdiqlash bo'sh bo'lishi mumkin emas!";
      } else if (valueToSet !== formValues.password) {
        newErrors.confirmPassword = "Parollar mos kelmadi!";
      } else {
        delete newErrors.confirmPassword;
      }
    }

    setErrors(newErrors);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    nextRef: React.RefObject<InputRef | HTMLInputElement | null>
  ) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      nextRef.current?.focus();
    }
  };

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
          description: "Hisobingiz muvaffaqiyatli yaratildi! Endi avtorizatsiya sahifasiga yo'naltirilasyiz.",
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

                <Space direction="vertical">
                  <div className="xl:flex xl:gap-7">
                    <div className="max-sm:w-full">
                      <Typography.Title className="!text-lg">
                        Email <span className="text-red-700">*</span>:
                      </Typography.Title>
                      <CustomInput type='text' className='md:!w-full max-sm:!w-full xl:!w-[330px] !h-[50px] !text-lg !mb-1 !-mt-2' />
                    </div>
                    <div className="max-sm:w-full">
                      <Typography.Title className="!text-lg">
                        Номер телефона <span className="text-red-700">*</span>:
                      </Typography.Title>
                      <CustomPhoneInput className='flex flex-wrap md:!w-full max-sm:!w-full xl:!w-[330px] !h-[50px] !text-lg !mb-1 !-mt-2' />
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
                    status={errors.fullName ? "error" : ""}
                  />
                  {errors.fullName && <p className="text-[#E52B0E] text-sm">{errors.fullName}</p>}


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
                    status={errors.region ? "error" : ""}
                  />
                  {errors.region && <p className="text-[#E52B0E] text-sm">{errors.region}</p>}


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
                    status={errors.password ? "error" : ""}
                  />
                  {errors.password && <p className="text-[#E52B0E] text-sm">{errors.password}</p>}


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
                    status={errors.confirmPassword ? "error" : ""}
                  />
                  {errors.confirmPassword && <p className="text-[#E52B0E] text-sm">{errors.confirmPassword}</p>}

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
                  {errors.terms && <p className="text-[#E52B0E] text-sm">{errors.terms}</p>}

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
                  {errors.privacy && <p className="text-[#E52B0E] text-sm">{errors.privacy}</p>}

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