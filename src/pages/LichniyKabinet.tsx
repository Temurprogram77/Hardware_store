<<<<<<< HEAD
import { Breadcrumb } from "antd"
=======
import { Breadcrumb, Pagination, Table, Tag, Button } from "antd"
>>>>>>> dd1fd30d072a45736fdadc52e947ea5d2f9ce037
import { useState } from "react"
import { CgPassword } from "react-icons/cg"
import { FaRegHeart, FaRegUserCircle } from "react-icons/fa"
import { GoLocation } from "react-icons/go"
import { IoExitOutline } from "react-icons/io5"
import { LiaUserEditSolid } from "react-icons/lia"
import { RiMenuFold2Fill } from "react-icons/ri"
import { TbUserEdit } from "react-icons/tb"
import { TfiMenuAlt } from "react-icons/tfi"
import { Link } from "react-router-dom"

const menuItems = [
    {
        label: 'Мой аккаунт',
        icon: <FaRegUserCircle />,
        content: [
            { label: 'Изменить профиль', icon: <LiaUserEditSolid /> },
            { label: 'Мои заказы', icon: <TfiMenuAlt /> },
            { label: 'Адрес доставки', icon: <GoLocation /> },
            { label: 'Избранные товары', icon: <FaRegHeart /> },
            { label: 'Сменить пароль', icon: <CgPassword /> },
            { label: 'Выйти из аккаунта', icon: <IoExitOutline /> },
        ]
    },
    {
        label: 'Изменить профиль',
        icon: <TbUserEdit />,
        content: []
    },
    {
        label: 'Мои заказы',
        icon: <RiMenuFold2Fill />,
        content: []
    },
    {
        label: 'Адрес доставки',
        icon: <GoLocation />,
        content: []
    },
    {
        label: 'Избранные товары',
        icon: <FaRegHeart />,
        content: []
    },
    {
        label: 'Сменить пароль',
        icon: <CgPassword />,
        content: []
    },
    {
        label: 'Выйти из аккаунта',
        icon: <IoExitOutline />,
        content: []
    },
];

const LichniyKabinet = () => {
    const [activeTab, setActiveTab] = useState(menuItems[0]);

    return (
<<<<<<< HEAD
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
                        }
                    ]}
                />
                <div className="mt-4">
                    <h2 className="!font-bold text-5xl max-sm:text-4xl">Личный кабинет</h2>
                    <div className="flex gap-5 mt-10 max-sm:flex-col">
                        <div className="flex flex-col w-1/4 rounded-xl overflow-hidden max-sm:w-full shadow-lg">
                            <div className="flex flex-col bg-white rounded-lg gap-[0.5px]">
                                {menuItems.map((item, index) => {
                                    const isActive = activeTab.label === item.label;
                                    return (
                                        <div
                                            key={index}
                                            onClick={() => setActiveTab(item)}
                                            className={`flex items-center gap-2 p-5 text-sm cursor-pointer transition-all 
                        ${isActive ? 'bg-black text-white font-semibold' : ' text-gray-600 hover:bg-black hover:text-white'}
                      `}
                                        >
                                            <span className="text-2xl">{item.icon}</span>
                                            <span>{item.label}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="flex-1 bg-white rounded-xl">
                            <span className=" text-xl font-semibold">Здравствуйте,  !</span>
                            {activeTab.content.length > 0 && (
                                <div className="flex items-center justify-center gap-3 mt-3">
                                    {activeTab.content.map((contentItem, index) => (
                                        <div
                                            key={index}
                                            className="w-[170px] h-27 border border-gray-300 rounded-md hover:bg-blue-600 text-gray-500 hover:text-white transition-colors flex items-center justify-center gap-y-2.5 cursor-pointer flex-col"
                                        >
                                            <span className="text-5xl" >{contentItem.icon}</span>
                                            <span>{contentItem.label}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
=======
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
                      className={`flex items-center gap-2 p-5 text-sm cursor-pointer transition-all ${isActive ? "bg-black text-white font-semibold" : "text-gray-600 hover:bg-black hover:text-white"
                        }`}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span className="md:text-xl">{item.label}</span>
>>>>>>> dd1fd30d072a45736fdadc52e947ea5d2f9ce037
                    </div>
                </div>
            </div>
        </main>
    );
};
export default LichniyKabinet;