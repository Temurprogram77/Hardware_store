import { Breadcrumb, Button } from "../link/antLink";
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

  const toggleCompare = (id: number) => {
    setComparedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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
    <div className="max-w-[1460px] mx-auto my-5">
        <Names link="/about" name="О компании" />
<h2 className="text-[27px] !font-semibold">Сравнение</h2>

      {hasItems ? (
        <div className="w-full md:px-0 px-3 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:gap-6 sm:gap-3 gap-2">
          {selectedProducts.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer p-4 rounded shadow relative"
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
                  className="w-full h-48 object-cover"
                />
              </Link>
              <p className="text-xs text-gray-500 md:text-[12px] text-[10px]">
                {item.item}
              </p>
              <Link to={`/product/${item.id}`}>
                <h3 className="font-semibold md:text-[16px] text-[14px] hover:text-[#186FD4] duration-200">
                  {item.title}
                </h3>
              </Link>

              <div className="flex items-center gap-2">
                <span className="line-through text-gray-400 md:text-[13px] text-[10px]">
                  {item.oldMoney}
                </span>
                <span className="text-[#003B73] font-bold md:text-[16px] text-[13px]">
                  {item.newMoney}
                </span>
                <p className="!m-0 bg-[#1B9665] text-white pb-1 pt-1.5 px-2 text-[10px] font-semibold rounded-md">
                  {item.sale}
                </p>
              </div>

              <div className="mt-3 md:gap-0 gap-1 flex items-center justify-between">
                <div className="flex gap-3 hover:bg-[#000] duration-200 bg-[#186FD4] text-white w-fit md:px-5 px-2 md:py-2.5 py-2 rounded-md">
                  <img src={cartt} alt="cart" className="sm:block hidden" />
                  <span>Купить</span>
                </div>

                <div className="flex items-center md:gap-2 gap-1">
                  <div
                    onClick={() => toggleHeart(item)}
                    className="border-2 px-2 py-2 rounded-md border-[#F3F4F5] cursor-pointer"
                  >
                    <span
                      className={`${
                        likedItems[item.id] ? "text-blue-500" : "text-gray-400"
                      }`}
                    >
                      {likedItems[item.id] ? (
                        <HeartFilled />
                      ) : (
                        <HeartOutlined />
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-16 text-center">
          <div className="mb-6">
            <img src={ciziq} alt="empty" />
          </div>
          <p className="text-lg font-medium">Ваш список сравнения пуст</p>
          <p className="text-gray-600 mt-2">
            У вас пока нет товаров в списке сравнения. <br />
            На странице <span className="font-semibold">"Каталог"</span> вы
            найдете много интересных товаров.
          </p>
          <Link to="/catalog">
          <Button type="primary" className="w-[200px] !h-[50px] mt-4">
            ПЕРЕЙТИ В КАТАЛОГ
          </Button></Link>
          
        </div>
      )}
    </div>
  );
};

export default Comparison;
