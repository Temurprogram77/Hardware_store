import { Breadcrumb, Button } from "antd";
import { Link } from "react-router-dom";
import { images } from "../assets/images";

const Basket = () => {
  const BasketItems = []; 

  return (
    <div className="max-w-[1460px] mx-auto my-5">
      <div className="mb-6">
        <Breadcrumb>
          <Breadcrumb.Item className="cursor-pointer hover:text-blue-500">
            <Link className="hover:text-blue-500" to={"/"}>
              Стройоптторг
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Корзина товаров</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="text-2xl md:text-3xl font-bold mt-2">Корзина товаров</h2>
      </div>

      {BasketItems.length > 0 ? (
        <div>
         
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-16 text-center">
          <div className="mb-6">
            <img src={images.ciziq} alt="empty" />
          </div>
          <p className="text-lg font-medium">В вашей корзине пусто</p>
          <p className="text-gray-600 mt-2">
           У вас пока нет товаров в списке желаний. <br />
            На странице <span className="font-semibold">"Каталог"</span> вы
            найдете много интересных товаров.
          </p>
          <Button type="primary" className="w-[200px] !h-[50px] mt-4">
            <Link to="/catalog">ПЕРЕЙТИ В КАТАЛОГ</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Basket;
