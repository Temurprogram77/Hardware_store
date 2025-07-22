import React from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  image: string;
  isNew?: boolean;
};

const products: Product[] = [
  {
    id: 1,
    title: "Перфоратор универсальный Wander X645-46 GF 1450W",
    price: 12789,
    oldPrice: 15999,
    discount: 20,
    image: "/images/perforator.png",
    isNew: true,
  },
  {
    id: 2,
    title: "Смеситель Faris G-120 для раковины",
    price: 1789,
    image: "/images/smesitel.png",
  },
  {
    id: 3,
    title: "Триммерная леска «Спираль-100»",
    price: 260,
    oldPrice: 312,
    discount: 10,
    image: "/images/trimmer.png",
  },
  {
    id: 4,
    title: "Унитаз подвесной Aragio с двойным сливом",
    price: 12789,
    oldPrice: 15999,
    discount: 12,
    image: "/images/unitaz.png",
  },
  // Add more as needed...
];

const FavoriteProducts: React.FC = () => {
  return (
    <div className="p-6 bg-white">
      <h1 className="text-3xl font-semibold mb-6">Избранные товары</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
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
    </div>
  );
};

export default FavoriteProducts;
