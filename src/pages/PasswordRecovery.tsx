import { Breadcrumb, Button, Input, Space, Typography } from "antd"
import { Link } from "react-router-dom"

const PasswordRecovery = () => {
  return (
    <main className="mb-10 mt-5 px-3">
      <hr className='text-gray-200' />
      <div className="max-w-[1460px] mx-auto mt-2.5">
        <Breadcrumb
          items={[
            {
              title: (
                <Link to="/">
                  <span className='text-black text-sm'>Стройоптторг</span>
                </Link>
              ),
            },
            {
              title: <span className='text-[#959597] text-sm'>Восстановление пароля</span>,
            },
          ]}
        />
        <div className="mt-4">
          <h2 className="!font-bold text-4xl sm:text-5xl">Восстановление пароля</h2>
          <div className="!min-h-[400px] flex items-center justify-center">
            <div className="border border-gray-200 flex items-center justify-center flex-col p-10 w-lg rounded-lg">
              <p className="w-[90%] text-gray-600 leading-7 text-md text-center">
                <span className="!font-bold">Забыли свой пароль?</span>Укажите свой Email или имя пользователя. Ссылку на создание нового пароля вы получите по электронной почте.
              </p>
              <Space direction="vertical" className='w-full mt-5'>
                <Typography.Title className='!text-lg'>
                  Email <span className='text-red-700'>*</span>:
                </Typography.Title>
                <Input
                  className='w-full !h-[55px] !text-lg !mb-2.5 !-mt-2'
                  placeholder="Введите данные для авторизации"
                />
                <Button
                  type='primary'
                  className=' !w-full !h-[55px] !text-sm !font-bold !uppercase'>
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

export default PasswordRecovery