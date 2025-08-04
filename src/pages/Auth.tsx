import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../components/ui/CustomInput";
import CustomButton from "../components/ui/CustomButton";
import CustomCheckbox from "../components/ui/CustomCheckbox";
import Names from "../components/ui/Names";
import Label from "../components/ui/Label";
import RightIcon from "../components/RightIcon";
import UserIcon from "../components/UserIcon";
import { MdOutlineChevronRight } from "react-icons/md";

const AuthPage: React.FC = () => {
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    setEmailError(false);
    setPasswordError(false);
    setErrorMessage("");

    const storedAccountString = localStorage.getItem("accounts");

    if (storedAccountString) {
      const storedAccount = JSON.parse(storedAccountString);

      if (
        storedAccount.email === emailValue &&
        storedAccount.password === passwordValue
      ) {
        navigate("/dashboard");
      } else {
        setEmailError(true);
        setPasswordError(true);
        setErrorMessage("Noto'g'ri email yoki parol xato!");
      }
    } else {
      setEmailError(true);
      setPasswordError(true);
      setErrorMessage("HIsobingiz bulsa kiriting aks holda Hisob yarating");
    }
  };

  return (
    <main className="mb-10 mt-5 px-3">
      <hr className="text-gray-200" />
      <div className="max-w-[1460px] mx-auto mt-2.5">
        <Names link="#" name="Авторизация" />
        <div className="mt-4 flex flex-col justify-center">
          <h2 className="!font-bold text-4xl sm:text-3xl">Авторизация</h2>
          <div className="mt-20 !ml-20 border !w-[88%] rounded-lg gap-5 border-gray-200 flex items-center justify-center max-sm:flex-col max-sm:mt-10 lg:gap-20 max-sm:gap-0 max-sm:ml-0 max-sm:w-full max-sm:p-5 md:mt-10 md:ml-0 md:w-full md:p-5 lg:p-10">
            <div className="flex items-center flex-col w-1/2 max-sm:w-full">
              <div className="max-sm:w-[100%] md:w-[100%]">
                <div className="flex flex-col gap-3">
                  <Label required text="Email yoki login " className="!mt-5" />
                  <CustomInput
                    type="text"
                    className={`lg:!w-[460px] xl:!w-full max-sm:!w-full md:w-full !h-[55px] !text-lg !mb-2.5 !-mt-2 ${
                      emailError ? "!border-red-500" : ""
                    }`}
                    placeholder="Введите данные для авторизации"
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                    onFocus={() => setEmailError(false)}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Label text="Parol " required />
                  <CustomInput
                    type="password"
                    className={`lg:!w-[460px] xl:!w-full max-sm:!w-full md:w-full !h-[55px] !text-lg !-mt-2 ${
                      passwordError ? "!border-red-500" : ""
                    }`}
                    placeholder="Введите пароль"
                    value={passwordValue}
                    onChange={(e) => setPasswordValue(e.target.value)}
                    onFocus={() => setPasswordError(false)}
                  />
                </div>
                {errorMessage && (
                  <p className="text-red-500 text-sm !mt-1 !-mb-3">
                    {errorMessage}
                  </p>
                )}
              </div>

              <div className="w-full md:w-full flex flex-col gap-5">
                <Link to="/password-recovery" className="!text-blue-600">
                  <CustomButton
                    text=" Восстановить пароль"
                    type="default"
                    className="!mt-7 !w-full !h-[55px] md:w-full !text-blue-600 !font-semibold !text-[15px]"
                  />
                </Link>
                <CustomButton
                  onClick={handleSubmit}
                  text=""
                  type="primary"
                  className="!flex !items-center !mb-2.5 !h-[60px] !bg-blue-600 w-full !text-sm !uppercase hover:!bg-black"
                >
                  Авторизоваться
                  <RightIcon size={30} />
                </CustomButton>
              </div>
              <CustomCheckbox name="Запомнить меня" />
            </div>

            <div className="flex flex-col items-start md:w-[60%] max-sm:w-full max-sm:mt-5">
              <div className="flex gap-5 max-sm:gap-3 max-sm:flex">
                <UserIcon className="text-red-600 font-normal w-13 h-13 max-sm:w-8 max-sm:h-8" />
                <h3 className="!font-bold text-2xl max-sm:text-lg max-sm:items-center max-sm:flex">
                  Еще нет аккаунта?
                </h3>
              </div>
              <div className="flex max-sm:flex-wrap flex-col ml-18 max-sm:ml-11 max-sm:w-auto mt-7 max-sm:mt-3 md:mt-1">
                <div className="flex items-center flex-wrap">
                  <p className="max-sm:w-[220px] flex flex-wrap text-sm leading-7 text-gray-600">
                    <span className="font-bold text-sm">
                      Регистрация на сайте
                    </span>{" "}
                    позволяет получить доступ к статусу и истории вашего заказа.
                    Просто заполните поля ниже, и вы получите учетную запись.
                  </p>
                </div>
                <p className="!mt-5 max-sm:w-[240px] text-sm flex flex-wrap leading-7 text-gray-500 md:!mt-0">
                  Мы запрашиваем у вас только информацию, необходимую для того,
                  чтобы сделать процесс покупки более быстрым и легким.
                </p>
                <Link
                  className="flex items-center justify-center rounded-sm text-white !h-[60px] lg:!mt-8 max-sm:w-[220px] lg:w-3xs !bg-black !text-sm !uppercase hover:!bg-orange-700 transition-all"
                  to={"/register"}
                >
                  Зарегистрироваться <MdOutlineChevronRight size={30} />
                </Link>
                <Link
                  className="flex items-center justify-center rounded-sm text-white !h-[60px] lg:!mt-8 max-sm:w-[220px] lg:w-3xs !bg-black !text-sm !uppercase hover:!bg-orange-700 transition-all"
                  to={"/register"}
                >
                  Зарегистрироваться
                  <RightIcon size={30} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthPage;
