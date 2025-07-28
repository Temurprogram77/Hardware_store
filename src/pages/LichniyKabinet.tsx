
import { Breadcrumb, Pagination, Table, Tag, Button } from "antd"
import { useState } from "react"
import { CgPassword } from "react-icons/cg"
import { FaRegHeart, FaRegUserCircle } from "react-icons/fa"
import { GoLocation } from "react-icons/go"
import { IoExitOutline } from "react-icons/io5"
import { LiaUserEditSolid } from "react-icons/lia"
import { RiMenuFold2Fill } from "react-icons/ri"
import { TbUserEdit } from "react-icons/tb"
import { TfiMenuAlt } from "react-icons/tfi"
import { Link, useNavigate } from "react-router-dom"

const addressData = {
  name: "Евгений Иванов",
  address: "056734, Москва, Россия, улица Варшавская, 37/5, кв.574",
  phone: "+7 (956) 373-46-33",
  email: "exampleemail@gmail.com",
}

const menuItems = [
  {
    label: "Мой аккаунт",
    icon: <FaRegUserCircle />,
    content: [
      { label: "Изменить профиль", icon: <LiaUserEditSolid /> },
      { label: "Мои заказы", icon: <TfiMenuAlt /> },
      { label: "Адрес доставки", icon: <GoLocation /> },
      { label: "Избранные товары", icon: <FaRegHeart /> },
      { label: "Сменить пароль", icon: <CgPassword /> },
      { label: "Выйти из аккаунта", icon: <IoExitOutline /> },
    ],
  },
  {
    label: "Изменить профиль",
    icon: <TbUserEdit />,
    content: [],
  },
  {
    label: "Мои заказы",
    icon: <RiMenuFold2Fill />,
    content: [
      {
        orderNumber: "#2365341-11",
        date: "16 Августа 2023",
        status: "ОБРАБОТКА",
        statusColor: "orange",
        total: "36 829 ₽",
      },
      {
        orderNumber: "#2356576-13",
        date: "1 Августа 2023",
        status: "ВЫПОЛНЕН",
        statusColor: "green",
        total: "11 299 ₽",
      },
      {
        orderNumber: "#577598-26",
        date: "17 Июля 2023",
        status: "ОТМЕНЕН",
        statusColor: "red",
        total: "1 311 ₽",
      },
      {
        orderNumber: "#436879-12",
        date: "11 Января 2023",
        status: "ОБРАБОТКА",
        statusColor: "orange",
        total: "12 889 ₽",
      },
      {
        orderNumber: "#2365341-11",
        date: "10 Декабря 2022",
        status: "ОБРАБОТКА",
        statusColor: "orange",
        total: "2 829 ₽",
      },
    ],
  },
  {
    label: "Адрес доставки",
    icon: <GoLocation />,
    content: [addressData],
  },
  {
    label: "Избранные товары",
    icon: <FaRegHeart />,
    content: [],
  },
  {
    label: "Сменить пароль",
    icon: <CgPassword />,
    content: [],
  },
  {
    label: "Выйти из аккаунта",
    icon: <IoExitOutline />,
    content: [],
  },
]

const LichniyKabinet = () => {
  const [activeTab, setActiveTab] = useState(menuItems[0])
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 5
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const navigate = useNavigate()

  const handlePaginationChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleSavePassword = () => {
    if (newPassword !== confirmPassword) {
      alert("Пароли не совпадают!")
      return
    }
    if (newPassword.length < 6) {
      alert("Пароль должен содержать минимум 6 символов!")
      return
    }
    alert("Пароль успешно изменен!")
    setCurrentPassword("")
    setNewPassword("")
    setConfirmPassword("")
  }

  const handleMenuClick = (item: any) => {
    if (item.label === "Выйти из аккаунта") {
      localStorage.removeItem("isAuthenticated")
      navigate("/my-account")
    } else {
      setActiveTab(item)
      setCurrentPage(1)
    }
  }

  const columns = [
    {
      title: "НОМЕР",
      dataIndex: "orderNumber",
      key: "orderNumber",
    },
    {
      title: "ДАТА",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "СТАТУС",
      dataIndex: "status",
      key: "status",
      render: (status: string, record: any) => (
        <Tag color={record.statusColor} bordered>
          {status}
        </Tag>
      ),
    },
    {
      title: "ИТОГО",
      dataIndex: "total",
      key: "total",
      render: (text: string) => <span className="font-semibold">{text}</span>,
    },
    {
      title: "",
      key: "action",
      render: () => <button className="text-xl text-gray-400 hover:text-black">{">"}</button>,
    },
  ]

  const renderAddressContent = () => {
    return (
      <div className="mt-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Мой адрес доставки</h3>
          <Button type="primary" className="bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600">
            АДРЕС ДОСТАВКИ
          </Button>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <div className="mb-4">
            <h4 className="text-lg font-medium text-gray-900 mb-2">{addressData.name}</h4>
            <p className="text-gray-700 mb-3 leading-relaxed">{addressData.address}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <span className="text-sm text-gray-500 block mb-1">Телефон</span>
              <span className="text-gray-900 font-medium">{addressData.phone}</span>
            </div>
            <div>
              <span className="text-sm text-gray-500 block mb-1">Email</span>
              <span className="text-gray-900 font-medium">{addressData.email}</span>
            </div>
          </div>

          <div className="flex gap-3">
            <Button type="default" className="border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-800">
              📝 РЕДАКТИРОВАТЬ
            </Button>
            <Button type="default" className="border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-800">
              🗑️ УДАЛИТЬ
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const renderPasswordContent = () => {
    return (
      <div className="mt-6 max-w-md">
        <h3 className="text-xl font-semibold mb-6">Сменить пароль</h3>

        <div className="space-y-4">
          {/* Current Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Текущий пароль <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showCurrentPassword ? "text" : "password"}
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="Введите текущий пароль"
              />
              <button
                type="button"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showCurrentPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Новый пароль <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Введите пароль"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors placeholder-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showNewPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Повторите пароль <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Введите пароль"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors placeholder-gray-400"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSavePassword}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors mt-6"
          >
            СОХРАНИТЬ
          </button>
        </div>
      </div>
    )
  }

  return (
    <main className="mb-10 mt-5 px-3">
      <hr className="text-gray-200" />
      <div className="max-w-[1460px] mx-auto mt-2.5">
        <Breadcrumb
          items={[
            {
              title: (
                <Link to="/">
                  <span className="text-black text-sm">Стройоптторг</span>
                </Link>
              ),
            },
            {
              title: <span className="text-[#959597] text-sm">Личный кабинет</span>,
            },
          ]}
        />
        <div className="mt-4">
          <h2 className="!font-bold text-5xl max-sm:text-4xl">Личный кабинет</h2>
          <div className="flex gap-5 mt-10 max-sm:flex-col">
            {/* Sidebar Menu */}
            <div className="flex flex-col w-1/4 rounded-xl overflow-hidden max-sm:w-full shadow-lg max-sm:hidden md:hidden xl:block">
              <div className="flex flex-col bg-white rounded-lg gap-[0.5px]">
                {menuItems.map((item, index) => {
                  const isActive = activeTab.label === item.label
                  return (
                    <div
                      key={index}
                      onClick={() => handleMenuClick(item)}
                      className={`flex items-center gap-2 p-5 text-sm cursor-pointer transition-all ${
                        isActive ? "bg-black text-white font-semibold" : "text-gray-600 hover:bg-black hover:text-white"
                      }`}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span className="md:text-xl">{item.label}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-white rounded-xl p-6 max-sm:-mt-5">
              <span className="text-xl font-semibold">Здравствуйте, {addressData.name}!</span>

              {activeTab.label === "Мои заказы" ? (
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">История заказов</h3>
                  <Table
                    columns={columns}
                    dataSource={activeTab.content.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
                    pagination={false}
                    rowKey="orderNumber"
                  />
                  <div className="mt-4 flex justify-end">
                    <Pagination
                      current={currentPage}
                      pageSize={pageSize}
                      total={activeTab.content.length}
                      onChange={handlePaginationChange}
                      showSizeChanger={false}
                    />
                  </div>
                </div>
              ) : activeTab.label === "Адрес доставки" ? (
                renderAddressContent()
              ) : activeTab.label === "Сменить пароль" ? (
                renderPasswordContent()
              ) : activeTab.content.length > 0 ? (
                <div>
                  <div className="grid grid-cols-6 max-sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 mt-3">
                    {activeTab.content.map((contentItem, index) => (
                      <div
                        key={index}
                        onClick={() => handleMenuClick(contentItem)}
                        className="h-27 border border-gray-300 rounded-md hover:bg-blue-600 text-gray-500 hover:text-white transition-colors flex items-center justify-center gap-y-2.5 cursor-pointer flex-col p-4"
                      >
                        <span className="text-4xl">{contentItem.icon}</span>
                        <span className="text-sm text-center">{contentItem.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10">
                    <h3 className="font-semibold text-xl text-gray-600 mb-2">Текущие заказы</h3>
                    <p className="text-gray-500">Заказов ещё не создано.</p>
                  </div>
                </div>
              ) : (
                <div className="text-gray-500 mt-6">Контент пока недоступен.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default LichniyKabinet
