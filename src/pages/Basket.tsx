import { Breadcrumb, Button, Input, message } from "../link/antLink";
import { Link } from "../link/links";
import { useState, useEffect, useCallback } from "react";
import { images } from "../assets/images";
// import debounce from "lodash.debounce";

interface BasketItem {
  id: string;
  title: string;
  item: string;
  image: string;
  newMoney: string;
  oldMoney?: string;
  sale?: string;
  quantity: number;
}

// Promo kodlar
const VALID_PROMO_CODES: { [key: string]: number } = {
  DISCOUNT10: 10,
  SAVE20: 20,
};

const Basket: React.FC = () => {
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);
  const [promoCode, setPromoCode] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);
  const [showMsg, setShowMsg] = useState(false);
  const CURRENCY_SYMBOL = "₽";

  useEffect(() => {
    try {
      const stored = localStorage.getItem("cart");
      if (stored) {
        const parsed = JSON.parse(stored);
        const initializedItems = parsed.map((item: any) => ({
          ...item,
          id: String(item.id),
          quantity: Number(item.quantity) || 1,
        }));
        setBasketItems(initializedItems);
      }
    } catch (err) {
      console.error("Failed to parse localStorage cart:", err);
      message.error("Failed to load cart. Please try again.");
      setBasketItems([]);
    }
  }, []);

  const saveToLocalStorage = useCallback(
    debounce((items: BasketItem[]) => {
      try {
        localStorage.setItem("cart", JSON.stringify(items));
      } catch (err) {
        console.error("Failed to save cart to localStorage:", err);
        message.error("Failed to update cart. Please try again.");
      }
    }, 300),
    []
  );

  const handleClick = () => {
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 2000); 
  };

  const parsePrice = (priceStr: string): number => {
    try {
      const cleaned = priceStr.replace(/[\s₽]/g, "");
      const price = parseInt(cleaned, 10);
      return isNaN(price) ? 0 : price;
    } catch {
      return 0;
    }
  };

  const currentCartValue = basketItems.reduce((sum, item) => {
    const price = parsePrice(item.newMoney);
    return sum + price * (item.quantity || 1);
  }, 0);

  const discountAmount = (currentCartValue * discount) / 100;
  const discountedTotal = currentCartValue - discountAmount;

  const increaseQuantity = (id: string) => {
    const updated = basketItems.map((item) =>
      item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    setBasketItems(updated);
    saveToLocalStorage(updated);
  };

  const decreaseQuantity = (id: string) => {
    const updated = basketItems.map((item) =>
      item.id === id && (item.quantity || 1) > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setBasketItems(updated);
    saveToLocalStorage(updated);
  };

  const removeItem = (id: string) => {
    const updated = basketItems.filter((item) => item.id !== id);
    setBasketItems(updated);
    saveToLocalStorage(updated);
  };

  const applyPromoCode = () => {
    const trimmedCode = promoCode.trim().toUpperCase();
    if (VALID_PROMO_CODES[trimmedCode]) {
      setDiscount(VALID_PROMO_CODES[trimmedCode]);
      message.success(
        `Promo code ${trimmedCode} applied! ${VALID_PROMO_CODES[trimmedCode]}% discount.`
      );
    } else {
      setDiscount(0);
      message.error("Invalid promo code.");
    }
  };

  return (
    <div className="max-w-[1460px] mx-auto my-5 px-4 sm:px-6 relative">
{showMsg && (
  <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-green-500/90 backdrop-blur-sm text-white px-6 py-3 rounded-xl shadow-lg z-50 flex items-center gap-2 animate-fadeSlide">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
    <span className="font-medium">Sotib olindi</span>
  </div>
)}


      <div className="mb-6">
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link className="hover:text-blue-500" to="/">
              Стройоптторг
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Корзина товаров</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="text-2xl sm:text-3xl font-bold mt-2">
          Корзина товаров
        </h2>
      </div>

      {basketItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-16 text-center">
          <div className="mb-6">
            <img
              src={images.ciziq || "https://via.placeholder.com/150"}
              alt="Empty cart"
              className="w-32 h-32"
            />
          </div>
          <p className="text-lg font-medium">В вашей корзине пусто</p>
          <p className="text-gray-600 mt-2">
            У вас пока нет товаров в корзине. <br />
            На странице <span className="font-semibold">"Каталог"</span> вы
            найдете много интересных товаров.
          </p>
          
            <Link to="/catalog"><Button type="primary" className="w-[200px] h-[50px] mt-4">ПЕРЕЙТИ В КАТАЛОГ</Button></Link>
          
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Chap blok */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b font-semibold text-sm">
                <div className="col-span-5">ТОВАР</div>
                <div className="col-span-2 text-center">ЦЕНА</div>
                <div className="col-span-2 text-center">КОЛ-ВО</div>
                <div className="col-span-2 text-center">СУММА</div>
                <div className="col-span-1"></div>
              </div>

              {basketItems.map((item) => {
                const price = parsePrice(item.newMoney);
                return (
                  <div
                    key={item.id}
                    className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-b text-sm"
                  >
                    <div className="md:col-span-5 flex gap-3">
                      <img
                        src={item.image || "https://via.placeholder.com/64"}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-gray-500 text-xs">{item.item}</p>
                      </div>
                    </div>

                    <div className="md:col-span-2 text-center">
                      {item.newMoney}
                    </div>

                    <div className="md:col-span-2 text-center">
                      <div className="flex items-center justify-center gap-3">
                        <button
                          className="px-3 w-15 h-8 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          -
                        </button>
                        <span className="w-10 h-8 flex items-center justify-center font-medium">
                          {item.quantity || 1}
                        </span>
                        <button
                          className="px-3 w-15 h-8 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400"
                          onClick={() => increaseQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="md:col-span-2 text-center font-semibold">
                      {(price * (item.quantity || 1)).toLocaleString("ru-RU")}{" "}
                      {CURRENCY_SYMBOL}
                    </div>

                    <div className="md:col-span-1 flex justify-end items-start">
                      <button
                        className="text-gray-400 hover:text-red-500"
                        onClick={() => removeItem(item.id)}
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                );
              })}

              <div className="p-4 flex justify-end border-t font-semibold text-base">
                Итого: {currentCartValue.toLocaleString("ru-RU")}{" "}
                {CURRENCY_SYMBOL}
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Итого</h3>

              <div className="flex justify-between mb-2 text-sm text-gray-600">
                <span>Скидка по промокоду</span>
                <span>
                  {discountAmount.toLocaleString("ru-RU")} {CURRENCY_SYMBOL}
                </span>
              </div>

              <div className="flex justify-between items-center py-3 border-t border-b border-gray-200 mb-4">
                <span className="font-semibold">Сумма</span>
                <span className="text-[#003b73] text-xl font-bold">
                  {discountedTotal.toLocaleString("ru-RU")} {CURRENCY_SYMBOL}
                </span>
              </div>

              <div className="mb-4">
                <Input
                  placeholder="Промокод"
                  size="large"
                  className="rounded"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <Button
                  type="default"
                  className="bg-[#f6f8fb] hover:bg-gray-100 text-gray-800 w-full py-2"
                  onClick={applyPromoCode}
                  disabled={!promoCode.trim()}
                >
                  Применить промокод
                </Button>
              </div>

              <button
                onClick={handleClick}
                className="block w-full py-3 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition"
              >
                Покупать
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
