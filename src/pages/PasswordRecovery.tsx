import { useState } from "react";
import { Button, Space, Typography } from "../link/antLink";
import type { FC } from 'react';
import Names from "../components/ui/Names";
import CustomInput from "../components/ui/CustomInput";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const PasswordRecovery: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) {
      setError('');
    }
  };
  const handleResetPassword = () => {
    if (!emailRegex.test(email)) {
      setError('Пожалуйста, введите почту!');
      return;
    }
    setEmail('');
  };

  return (
    <main className="mb-10 mt-5 px-3">
      <hr className='text-gray-200' />
      <div className="max-w-[1460px] mx-auto mt-2.5">
        <Names link="" name="Восстановление пароля" />
        <div className="mt-4">
          <h2 className="!font-bold text-4xl sm:text-5xl">Восстановление пароля</h2>
          <div className="!min-h-[400px] flex items-center justify-center">
            <div className="border border-gray-200 flex items-center justify-center flex-col p-10 w-full max-w-lg rounded-lg">

              <p className="w-[90%] text-gray-600 leading-7 text-md text-center">
                <span className="!font-bold">Забыли свой пароль?</span> Укажите свой Email или имя пользователя. Ссылку на создание нового пароля вы получите по электронной почте.
              </p>
              <Space direction="vertical" className='w-full mt-5'>
                <Typography.Title className='!text-lg'>
                  Email <span className='text-red-700'>*</span>:
                </Typography.Title>
                <CustomInput
                  type="text"
                  className='w-full !h-[55px] !text-lg !mb-2.5 !-mt-2'
                  placeholder="Введите ваш email адрес"
                  value={email}
                  onChange={handleEmailChange}
                />
                {error && <p className="text-red-500">{error}</p>}

                <Button
                  type='primary'
                  className=' !w-full !h-[55px] !text-sm !font-bold !uppercase'
                  onClick={handleResetPassword}
                >
                  Сбросить пароль
                </Button>
              </Space>
            </div>
          </div>
        </div>
      </div>
    </main >
  )
}

export default PasswordRecovery;