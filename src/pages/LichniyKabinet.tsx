import { Breadcrumb } from "antd"
import { useState, useEffect } from "react"
import { CgPassword } from "react-icons/cg"
import { FaRegHeart, FaRegUserCircle } from "react-icons/fa"
import { GoLocation } from "react-icons/go"
import { IoExitOutline } from "react-icons/io5"
import { LiaUserEditSolid } from "react-icons/lia"
import { RiMenuFold2Fill } from "react-icons/ri"
import { TbUserEdit } from "react-icons/tb"
import { TfiMenuAlt } from "react-icons/tfi"
import { Link, useNavigate } from "react-router-dom"

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
    const [accountFullName, setAccountFullName] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedAccountString = localStorage.getItem("accounts");
        if (storedAccountString) {
            try {
                const storedAccount = JSON.parse(storedAccountString);
                if (storedAccount.fullName) {
                    setAccountFullName(storedAccount.fullName);
                }
            } catch (error) {
                console.error("Failed to parse stored account data from localStorage:", error);
            }
        }
    }, []); 

    const handleLogout = () => {
        localStorage.removeItem("accounts");
        navigate("/auth");
    };

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
                                            onClick={() => {
                                                if (item.label === 'Выйти из аккаунта') {
                                                    handleLogout();
                                                } else {
                                                    setActiveTab(item);
                                                }
                                            }}
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
                            <span className=" text-xl font-semibold">Здравствуйте, {accountFullName || 'Гость'}!</span>
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
                    </div>
                </div>
            </div>
        </main>
    );
};
export default LichniyKabinet;