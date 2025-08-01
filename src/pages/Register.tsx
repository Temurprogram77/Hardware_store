import { Breadcrumb, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { FiUserPlus } from 'react-icons/fi';
import CustomPhoneInput from '../components/ui/CustomINputPhone';
import CustomInput from '../components/ui/CustomInput';
import CustomCheckbox from '../components/ui/CustomCheckbox';
import CustomButton from '../components/ui/CustomButton';

export const regex = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  phone: /^\+998 \(\d{2}\) \d{3}-\d{2}-\d{2}$/,
  fullName: /^[A-Za-zА-Яа-яЁё\s]{5,}$/,
  region: /^[A-Za-zА-Яа-яЁё\s-]{2,}$/,
  password: /^(?=.*[a-z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{6,}$/,
};

const Register = () => {


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

                // Inputs start
                <div className='flex flex-col gap-2 mb-2'>
                  <div className="xl:flex xl:gap-3">
                    <div className="max-sm:w-full flex flex-col gap-2">
                      <Typography.Title className="!text-[15px]">
                        Email <span className="text-red-700">*</span>:
                      </Typography.Title>
                      <CustomInput type='text' className='md:!w-full max-sm:!w-full xl:!w-[330px] !h-[50px] !text-lg !mb-1 !-mt-2' />
                    </div>
                    <div className="max-sm:w-full flex flex-col gap-2">
                      <Typography.Title className="!text-[15px]">
                        Номер телефона <span className="text-red-700">*</span>:
                      </Typography.Title>
                      <CustomPhoneInput className='flex flex-wrap md:!w-full max-sm:!w-full xl:!w-[330px] !h-[50px] !text-lg !mb-1 !-mt-2' />
                    </div>
                  </div>

                  <Typography.Title className="!text-[15px]">
                    ФИО <span className="text-red-700">*</span>:
                  </Typography.Title>
                  <CustomInput
                    type='text'
                    className="w-full !h-[55px] !text-lg !mb-1 !-mt-2"
                    placeholder="Ваше полное имя"
                  />

                  <Typography.Title className="!text-[15px]">
                    Регион <span className="text-red-700">*</span>:
                  </Typography.Title>
                  <CustomInput
                    type='text'
                    className="w-full !h-[55px] !text-lg !mb-1 !-mt-2"
                    placeholder="Ваш регион"
                  />

                  <Typography.Title className="!text-[15px]">
                    Пароль <span className="text-red-700">*</span>:
                  </Typography.Title>
                  <CustomInput
                    type='password'
                    className="w-full !h-[55px] !text-lg !-mt-2"
                    placeholder="Введите пароль"
                  />

                  <Typography.Title className="!text-[15px]">
                    Подтвердите пароль <span className="text-red-700">*</span>:
                  </Typography.Title>
                  <CustomInput
                    type='password'
                    className="w-full !h-[55px] !text-lg !-mt-2"
                    placeholder="Введите пароль"
                  />
                </div>
                // Inputs end


                // checkbox start
                <div className="flex flex-col gap-2">
                  <CustomCheckbox
                    name='Согласен с условиями обслуживания'
                  />
                  <CustomCheckbox
                    name='Согласен с обработкой персональных данных в соответствии с политикой конфиденциальности'
                  />
                </div>
                // checkbox end

                <div className="w-full">
                  <CustomButton
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