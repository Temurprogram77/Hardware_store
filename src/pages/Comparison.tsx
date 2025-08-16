import { Button } from "../link/antLink";
import { Link } from "../link/links";
import { images } from "../assets/images";
import { data } from "../data/data";
import {
  HeartFilled,
  HeartOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useHeart } from "../context/HeartClickedContext";
import { useEffect, useState } from "react";
import Names from "../components/ui/Names";

const { cartt, ciziq } = images;

const Comparison = () => {
  const [comparedItems, setComparedItems] = useState<{ [id: number]: boolean }>(
    () => {
      const stored = localStorage.getItem("comparedItems");
      return stored ? JSON.parse(stored) : {};
    }
  );

  const { likedItems, toggleHeart } = useHeart();

  useEffect(() => {
    localStorage.setItem("comparedItems", JSON.stringify(comparedItems));
  }, [comparedItems]);

  const removeCompare = (id: number) => {
    setComparedItems((prev) => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  const selectedIds = Object.keys(comparedItems)
    .filter((id) => comparedItems[+id])
    .map(Number);

  const selectedProducts = data.filter((product) =>
    selectedIds.includes(product.id)
  );

  const hasItems = selectedProducts.length > 0;

  return (
<div className="max-w-[1460px] mx-auto mt-5 mb-30 px-3 md:px-0">
  <Names link="/about" name="О компании" />
  <h2 className="text-[22px] md:text-[27px] font-semibold mb-4">Сравнение</h2>

  {hasItems ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
      {selectedProducts.map((item) => (
        <div
          key={item.id}
          className="cursor-pointer bg-white p-3 md:p-4 rounded shadow relative"
        >
          <button
            onClick={() => removeCompare(item.id)}
            className="absolute right-2 top-2 text-red-500 hover:text-red-700"
            title="Удалить из сравнения"
          >
            <DeleteOutlined />
          </button>

          <Link to={`/product/${item.id}`}>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-44 md:h-48 object-cover"
            />
          </Link>

          <p className="text-xs text-gray-500 mt-1">{item.item}</p>
          <Link to={`/product/${item.id}`}>
            <h3 className="font-semibold text-sm md:text-base hover:text-[#186FD4] duration-200">
              {item.title}
            </h3>
          </Link>

          <div className="flex items-center gap-2 mt-1">
            <span className="line-through text-gray-400 text-xs">
              {item.oldMoney}
            </span>
            <span className="text-[#003B73] font-bold text-sm md:text-base">
              {item.newMoney}
            </span>
            <p className="bg-[#1B9665] text-white px-2 py-0.5 text-[10px] font-semibold rounded-md">
              {item.sale}
            </p>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2 bg-[#186FD4] hover:bg-black duration-200 text-white rounded-md px-3 md:px-5 py-2">
              <img src={cartt} alt="cart" className="hidden sm:block" />
              <span>Купить</span>
            </div>

            <div
              onClick={() => toggleHeart({ ...item, id: String(item.id) })}
              className="border-2 px-2 py-2 rounded-md border-[#F3F4F5] cursor-pointer"
            >
              {likedItems[item.id] ? (
                <HeartFilled className="text-blue-500" />
              ) : (
                <HeartOutlined className="text-gray-400" />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center mt-16 text-center px-3">
      <div className="mb-6">
        <img src={ciziq} alt="empty" className="max-w-[200px] sm:max-w-none" />
      </div>
      <p className="text-base sm:text-lg font-medium">Ваш список сравнения пуст</p>
      <p className="text-gray-600 mt-2 text-sm sm:text-base">
        У вас пока нет товаров в списке сравнения. <br />
        На странице <span className="font-semibold">"Каталог"</span> вы найдете много интересных товаров.
      </p>
      <Link to="/catalog">
        <Button type="primary" className="w-[180px] sm:w-[200px] h-[45px] sm:!h-[50px] mt-4">
          ПЕРЕЙТИ В КАТАЛОГ
        </Button>
      </Link>
    </div>
  )}
</div>


  );
};

export default Comparison;
