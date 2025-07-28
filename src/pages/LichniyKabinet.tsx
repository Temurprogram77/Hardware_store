import { Breadcrumb, Pagination, Table, Tag } from "antd";
import { useState } from "react";
import { CgPassword } from "react-icons/cg";
import { FaRegHeart, FaRegUserCircle } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { IoExitOutline } from "react-icons/io5";
import { LiaUserEditSolid } from "react-icons/lia";
import { RiMenuFold2Fill } from "react-icons/ri";
import { TbUserEdit } from "react-icons/tb";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";

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
    content: [],
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
];

const LichniyKabinet = () => {
  const [activeTab, setActiveTab] = useState(menuItems[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const handlePaginationChange = (page: number) => {
    setCurrentPage(page);
  };

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
      render: () => (
        <button className="text-xl text-gray-400 hover:text-black">{">"}</button>
      ),
    },
  ];

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
              title: (
                <span className="text-[#959597] text-sm">Личный кабинет</span>
              ),
            },
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
                      onClick={() => {
                        setActiveTab(item);
                        setCurrentPage(1);
                      }}
                      className={`flex items-center gap-2 p-5 text-sm cursor-pointer transition-all ${
                        isActive
                          ? "bg-black text-white font-semibold"
                          : "text-gray-600 hover:bg-black hover:text-white"
                      }`}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex-1 bg-white rounded-xl p-6">
              <span className="text-xl font-semibold"></span>

              {activeTab.label === "Мои заказы" ? (
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">История заказов</h3>
                  <Table
                    columns={columns}
                    dataSource={activeTab.content.slice(
                      (currentPage - 1) * pageSize,
                      currentPage * pageSize
                    )}
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
              ) : activeTab.content.length > 0 ? (
                <div className="flex items-center justify-center gap-3 mt-3 flex-wrap">
                  {activeTab.content.map((contentItem, index) => (
                    <div
                      key={index}
                      className="w-[170px] h-28 border border-gray-300 rounded-md hover:bg-blue-600 text-gray-500 hover:text-white transition-colors flex items-center justify-center gap-y-2.5 cursor-pointer flex-col"
                    >
                      <span className="text-4xl">{contentItem.icon}</span>
                      <span className="text-sm text-center">{contentItem.label}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-gray-500 mt-6">Контент пока недоступен.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LichniyKabinet;
