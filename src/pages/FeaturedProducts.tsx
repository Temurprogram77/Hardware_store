import React from "react";
import { useHeart } from "../context/HeartClickedContext";

const FavoriteProducts: React.FC = () => {
  const { likedItems } = useHeart();
  const likedList = Object.values(likedItems);

  return (
    <div className="p-6 bg-white">
      <h1 className="text-3xl font-semibold mb-6">Избранные товары</h1>

      {likedList.length === 0 ? (
        <p className="text-gray-500 text-center">Список избранных товаров пуст.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {likedList.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-md p-4 flex flex-col justify-between"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-contain"
                />
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-yellow-300 text-xs px-2 py-1 rounded">
                    хит
                  </span>
                )}
                {product.discount && (
                  <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                    -{product.discount}%
                  </span>
                )}
              </div>

              <h2 className="text-sm font-medium mt-2">{product.title}</h2>

              <div className="mt-2">
                {product.oldPrice && (
                  <p className="text-gray-400 line-through text-sm">
                    {product.oldPrice.toLocaleString()} ₽
                  </p>
                )}
                <p className="text-blue-700 text-lg font-semibold">
                  {product.price.toLocaleString()} ₽
                </p>
              </div>

              <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded">
                Купить
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteProducts;
