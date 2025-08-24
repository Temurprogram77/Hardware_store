import { useState, type ChangeEvent, type FC } from 'react';
import { Link } from "../link/links";
import {
  Input,
  Checkbox,
  Button,
  Typography,
} from "../link/antLink";
import UserIcon from '../components/UserIcon';
import RightIcon from '../components/RightIcon';
import axios from 'axios';
import RegionSelect from '../components/RegionSelect';
import Names from '../components/ui/Names';

export const regex = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  fullName: /^[A-Za-zА-Яа-яЁё\s]{5,}$/,
  region: /^[A-Za-zА-Яа-яЁё\s-]{2,}$/,
  password: /^(?=.*[a-z])(?=.*\d)[A-Za-z\d\W_]{8,}$/,
};

interface PhoneNumberInputProps { }
const Register: FC<PhoneNumberInputProps> = () => {
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    fullName: '',
    region: '',
    password: '',
    confirmPassword: '',
    acceptedTerms: false,
    acceptedPrivacy: false,
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const digitsOnly = rawValue.replace(/\D/g, '');
    const localNumber = digitsOnly.substring(3);
    let formattedNumber = `+998 ${localNumber}`;
    if (localNumber.length > 9) {
      formattedNumber = `+998 ${localNumber.slice(0, 9)}`;
    }
    setFormData(prevState => ({
      ...prevState,
      phoneNumber: formattedNumber,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    if (formData.password !== formData.confirmPassword) {
      setError('Parollar mos kelmadi.');
      setLoading(false);
      return;
    }
    if (!regex.email.test(formData.email) ||
      !regex.fullName.test(formData.fullName) ||
      !regex.region.test(formData.region) ||
      !regex.password.test(formData.password)) {
      setError('Iltimos, barcha maydonlarni toʻgʻri toʻldiring.');
      setLoading(false);
      return;
    }
    if (!formData.acceptedTerms || !formData.acceptedPrivacy) {
      setError('Iltimos, shartlarga rozilik bildiring.');
      setLoading(false);
      return;
    }
    const cleanPhoneNumber = formData.phoneNumber.replace(/\D/g, '');
    if (cleanPhoneNumber.length !== 12) {
      setError("Iltimos, telefon raqamini to'liq kiriting.");
      setLoading(false);
      return;
    }

    const payload = {
      fullName: formData.fullName,
      email: formData.email,
      phoneNumber: cleanPhoneNumber,
      region: formData.region,
      password: formData.password,
    };

    try {
      const response = await axios.post(
        'http://144.91.98.115:8084/auth/register',
        payload
      );
      const token = response.data.token;
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 1);
      localStorage.setItem('authData', JSON.stringify({
        token,
        expiry: expiryDate.toISOString(),
      }));

      setSuccess('Muvaffaqiyatli roʻyxatdan oʻtdingiz!');
      console.log('API javobi:', response.data);

    } catch (err: any) {
      console.error('Xato:', err.response ? err.response.data : err.message);
      setError('Roʻyxatdan oʻtishda xatolik yuz berdi. Iltimos, qaytadan urinib koʻring.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mt-4 mb-10 px-3">
      <hr className="text-gray-200" />
      <div className="max-w-[1460px] mx-auto mt-2.5">
        <Names link='' name='Регистрация' />
        <section>
          <div className="mt-4">
            <h2 className="!font-bold text-4xl">Регистрация</h2>
            <form onSubmit={handleSubmit}>
              <div className="mt-10 border w-full flex-col lg:flex-row rounded-lg py-8 max-sm:!py-4 px-4 border-gray-200 flex justify-between lg:px-10 md:p-5">
                <div className="flex flex-col max-sm:mr-0 max-sm:w-full xl:mr-10">
                  <div className='flex flex-col gap-3'>
                    <div className="flex flex-col xl:flex-row !gap-3 mb-1">
                      <div className="w-full flex flex-col">
                        <Typography className='!font-mono !font-medium'>
                          Email<span className='text-red-600'>*</span>:
                        </Typography>
                        <Input
                          name='email'
                          type='text'
                          value={formData.email}
                          onChange={handleChange}
                          className="!w-full xl:!w-[344.5px] !h-[50px] !text-gray-800 placeholder:!text-gray-600 !text-[17px] md:!text-[16px] !font-mono"
                          placeholder='Введите ваш email адрес'
                          status=''
                        />
                      </div>
                      <div className="w-full flex flex-col">
                        <Typography className='!font-mono !font-medium'>
                          Номер телефона<span className='text-red-600'>*</span>:
                        </Typography>
                        <Input
                          name='phoneNumber'
                          value={formData.phoneNumber}
                          onChange={handlePhoneChange}
                          placeholder='+998 (__) ___-__-__'
                          className="!w-full xl:!w-[344.5px] !h-[50px] !text-gray-800 placeholder:!text-gray-600 !text-[17px] md:!text-[16px] !font-mono"
                        />
                      </div>
                    </div>
                    <div>
                      <Typography className='!font-mono !font-medium'>
                        ФИО<span className='text-red-600'>*</span>:
                      </Typography>
                      <Input
                        name='fullName'
                        type='text'
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full !h-[50px] !text-gray-800 placeholder:!text-gray-600 !text-[17px] md:!text-[16px] !font-mono"
                        placeholder="Ваше полное имя"
                      />
                    </div>
                    <div>
                      <Typography className='!font-mono !font-medium'>
                        Регион<span className='text-red-600'>*</span>:
                      </Typography>
                      <RegionSelect
                        value={formData.region}
                        onChange={(value) => setFormData((prev) => ({ ...prev, region: value }))}
                      />
                    </div>
                    <div>
                      <Typography className='!font-mono !font-medium'>
                        Пароль<span className='text-red-600'>*</span>:
                      </Typography>
                      <Input.Password
                        name='password'
                        type='password'
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full !h-[50px] !text-gray-800 !placeholder:!text-gray-600 !text-[17px] md:!text-[16px] !font-mono"
                        placeholder="Введите пароль"
                      />
                    </div>
                    <div>
                      <Typography className='!font-mono !font-medium'>
                        Подтвердите пароль <span className='text-red-600'>*</span>:
                      </Typography>
                      <Input.Password
                        name='confirmPassword'
                        type='password'
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full !h-[50px] !text-gray-800 !placeholder:!text-gray-600 !text-[17px] md:!text-[16px] !font-mono"
                        placeholder="Введите пароль"
                      />
                    </div>
                  </div>
                  <div className="mt-3 flex flex-col gap-2">
                    <Checkbox name='acceptedTerms' checked={formData.acceptedTerms} onChange={handleChange} className='!font-mono'>
                      Согласен с условиями обслуживания
                    </Checkbox>
                    <Checkbox name='acceptedPrivacy' checked={formData.acceptedPrivacy} onChange={handleChange} className='!font-mono'>
                      Согласен с обработкой персональных данных в соответствии с <Link to={"/privacy-policy"}>политикой конфиденциальности</Link>
                    </Checkbox>
                  </div>
                  {error && <div className="text-red-600 mt-4">{error}</div>}
                  {success && <div className="text-green-600 mt-4">{success}</div>}
                  <div className="w-full">
                    <Button
                      type="primary"
                      htmlType='submit'
                      loading={loading}
                      className="!mt-4 !w-full !h-[55px] !text-sm !font-bold !uppercase"
                    >
                      Зарегистрироваться
                    </Button>
                  </div>
                </div>
                <div className="mt-15 lg:mt-0">
                  <div className="flex items-center gap-5 max-sm:gap-3">
                    <UserIcon className="text-red-600 font-normal !w-10 !h-10 md:w-10" />
                    <h3 className="!font-bold text-2xl max-sm:text-lg md:text-xl">Уже есть аккаунт?</h3>
                  </div>
                  <div className="flex flex-col ml-13 mt-2 lg:mt-7">
                    <div className="flex flex-wrap items-center w-fit">
                      <p className="leading-7 text-sm text-gray-600">
                        Перейдите к <span className="font-bold">авторизации</span> если у вас уже есть зарегистрированный аккаунт.
                      </p>
                    </div>
                    <Link
                      to={"/auth"}
                      type="primary"
                      className="!h-[60px] !bg-black text-white flex items-center justify-center rounded-sm xl:w-3xs !text-sm !uppercase hover:!bg-orange-700"
                    >
                      Авторизоваться
                      <RightIcon size={30} />
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Register;