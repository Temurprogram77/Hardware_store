import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "../link/links";
import CustomPhoneInput, { phoneRegex } from '../components/ui/CustomINputPhone';
import CustomInput from '../components/ui/CustomInput';
import CustomCheckbox from '../components/ui/CustomCheckbox';
import CustomButton from '../components/ui/CustomButton';
import Label from '../components/ui/Label';
import Names from '../components/ui/Names';
import UserIcon from '../components/UserIcon';
import RightIcon from '../components/RightIcon';

export const regex = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  fullName: /^[A-Za-zА-Яа-яЁё\s]{5,}$/,
  region: /^[A-Za-zА-Яа-яЁё\s-]{2,}$/,
  password: /^(?=.*[a-z])(?=.*\d)[A-Za-z\d\W_]{6,}$/,
};

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const [emailError, setEmailError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [fullNameError, setFullNameError] = useState<string | null>(null);
  const [regionError, setRegionError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState<string | null>(null);
  const [termsError, setTermsError] = useState<string | null>(null);
  const [policyError, setPolicyError] = useState<string | null>(null);

  const handleBlur = (field: string) => {
    switch (field) {
      case "email":
        if (!email || !regex.email.test(email)) {
          setEmailError("Пожалуйста, введите действительную почту!");
        } else {
          setEmailError(null);
        }
        break;
      case "phone":
        if (!phone || !phoneRegex.test(phone)) {
          setPhoneError("Пожалуйста, введите действительный телефон!");
        } else {
          setPhoneError(null);
        }
        break;
      case "fullName":
        if (!fullName || !regex.fullName.test(fullName)) {
          setFullNameError("Пожалуйста, введите ФИО!");
        } else {
          setFullNameError(null);
        }
        break;
      case "region":
        if (!region || !regex.region.test(region)) {
          setRegionError("Поле регион не заполнено!");
        } else {
          setRegionError(null);
        }
        break;
      case "password":
        if (!password || password.length < 6) {
          setPasswordError("Пароль должен состоять не менее, чем из 6 символов");
        } else {
          setPasswordError(null);
        }
        break;
      case "confirmPassword":
        if (password !== confirmPassword) {
          setConfirmPasswordError("Пароли не совпадают");
        } else {
          setConfirmPasswordError(null);
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    setEmailError(null);
    setPhoneError(null);
    setFullNameError(null);
    setRegionError(null);
    setPasswordError(null);
    setConfirmPasswordError(null);
    setTermsError(null);
    setPolicyError(null);

    let hasError = false;

    if (!email || !regex.email.test(email)) { setEmailError("Пожалуйста, введите действительную почту!"); hasError = true; }
    if (!phone || !phoneRegex.test(phone)) { setPhoneError("Пожалуйста, введите действительный телефон!"); hasError = true; }
    if (!fullName || !regex.fullName.test(fullName)) { setFullNameError("Пожалуйста, введите ФИО!"); hasError = true; }
    if (!region || !regex.region.test(region)) { setRegionError("Поле регион не заполнено!"); hasError = true; }
    if (!password || password.length < 6) { setPasswordError("Пароль должен состоять не менее, чем из 6 символов"); hasError = true; }
    if (password !== confirmPassword) { setConfirmPasswordError("Пароли не совпадают"); hasError = true; }

    if (hasError) {
      return;
    }

    const formData = {
      email,
      phone,
      fullName,
      region,
      password,
    };

    localStorage.setItem("accounts", JSON.stringify(formData));

    setEmail("");
    setPhone("");
    setFullName("");
    setRegion("");
    setPassword("");
    setConfirmPassword("");

    navigate('/auth');
  };


  return (
    <main className="mt-4 mb-10 px-3">
      <hr className="text-gray-200" />
      <div className="max-w-[1460px] mx-auto mt-2.5">
        <Names link='' name='Регистрация' />
        <section>
          <div className="mt-4">
            <h2 className="!font-bold text-4xl">Регистрация</h2>
            <div className="mt-10 border w-[100%] max-sm:w-full max-sm:flex-col rounded-lg py-8 max-sm:!py-4 px-10 border-gray-200 flex justify-between max-sm:px-4 md:p-5">
              <div className="flex flex-col max-sm:mr-0 max-sm:w-full xl:mr-10">
                <div className='flex flex-col gap-2 mb-2'>
                  <div className="xl:flex xl:gap-3">
                    <div className="max-sm:w-full flex flex-col gap-2">
                      <Label text='Email ' required />
                      <CustomInput
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setEmailError(null)}
                        onBlur={() => handleBlur("email")}
                        className={`md:!w-full max-sm:!w-full xl:!w-[330px] !h-[50px] !text-lg !mb-1 !-mt-2 
                          ${emailError ? '!border-red-500' : ''}`}
                        placeholder='Введите ваш email адрес'
                      />
                      {emailError && <p className="text-red-600 text-sm mt-1">{emailError}</p>}
                    </div>
                    <div className="max-sm:w-full flex flex-col gap-2">
                      <Label text='Номер телефона' required />
                      <CustomPhoneInput
                        value={phone}
                        onValueChange={setPhone}
                        onFocus={() => setPhoneError(null)}
                        onBlur={() => handleBlur("phone")}
                        placeholder='+998 (__) ___-__-__'
                        className={`flex flex-wrap border border-gray-200 pl-3 outline-none focus:border-blue-500 rounded-md md:!w-full max-sm:!w-full xl:!w-[330px] !h-[50px] !text-lg !mb-1 !-mt-2 transition-all 
${phoneError ? '!border-red-500' : ''}`}
                      />
                      {phoneError && <p className="text-red-600 text-sm mt-1">{phoneError}</p>}
                    </div>
                  </div>
                  <Label text='ФИО ' required />
                  <CustomInput
                    type='text'
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    onFocus={() => setFullNameError(null)}
                    onBlur={() => handleBlur("fullName")}
                    className={`w-full !h-[55px] !text-lg !mb-1 !-mt-2 
                      ${fullNameError ? '!border-red-500' : ''}`}
                    placeholder="Ваше полное имя"
                  />
                  {fullNameError && <p className="text-red-600 text-sm mt-1">{fullNameError}</p>}

                  <Label text='Регион' required />
                  <CustomInput
                    type='text'
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    onFocus={() => setRegionError(null)}
                    onBlur={() => handleBlur("region")}
                    className={`w-full !h-[55px] !text-lg !mb-1 !-mt-2 
                      ${regionError ? '!border-red-500' : ''}`}
                    placeholder="Ваш регион"
                  />
                  {regionError && <p className="text-red-600 text-sm mt-1">{regionError}</p>}

                  <Label text='Пароль' required />
                  <CustomInput
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => setPasswordError(null)}
                    onBlur={() => handleBlur("password")}
                    className={`w-full !h-[55px] !text-lg !-mt-2 
                      ${passwordError ? '!border-red-500' : ''}`}
                    placeholder="Введите пароль"
                  />
                  {passwordError && <p className="text-red-600 text-sm mt-1">{passwordError}</p>}

                  <Label text='Подтвердите пароль' required />
                  <CustomInput
                    type='password'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    onFocus={() => setConfirmPasswordError(null)}
                    onBlur={() => handleBlur("confirmPassword")}
                    className={`w-full !h-[55px] !text-lg !-mt-2 
                      ${confirmPasswordError ? '!border-red-500' : ''}`}
                    placeholder="Введите пароль"
                  />
                  {confirmPasswordError && <p className="text-red-600 text-sm mt-1">{confirmPasswordError}</p>}
                </div>
                <div className="flex flex-col gap-2">
                  <CustomCheckbox
                    name='Согласен с условиями обслуживания'
                  />
                  {termsError && <p className="text-red-600 text-sm mt-1">{termsError}</p>}
                  <CustomCheckbox
                    name='Согласен с обработкой персональных данных в соответствии с политикой конфиденциальности'
                  />
                  {policyError && <p className="text-red-600 text-sm mt-1">{policyError}</p>}
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
                <div className="flex items-center gap-5 max-sm:gap-3">
                  <UserIcon className="text-red-600 font-normal !w-10 !h-10 md:w-10" />
                  <h3 className="!font-bold text-2xl max-sm:text-lg md:text-xl">Уже есть аккаунт?</h3>
                </div>
                <div className="flex flex-col ml-18 mt-7 max-sm:mt-2">
                  <div className="flex flex-wrap items-center gap-1.5 w-fit">
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
          </div>
        </section>
      </div>
    </main>
  );
};

export default Register;
