import { useNavigate } from "react-router-dom";
import { Button } from 'antd';
import images from "../assets/images";
import { Breadcrumb } from 'antd';
const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 text-center">
      <div className="max-w-md w-full space-y-6">
      
<Breadcrumb className=" relative -top-30 -left-120 text-md ">
  <Breadcrumb.Item className="text-black  ">Стройоптторг</Breadcrumb.Item>
  <Breadcrumb.Item className="text-gray-400 ">
    Страница не найдена
  </Breadcrumb.Item>
</Breadcrumb>

        <h2 className="relative -top-25 -left-132 text-4xl font-bold text-black">
          Страница не найдена
        </h2>

        <img src={images.ErrorImage} alt="Error" className="w-150 mx-auto" />

        <p className="text-gray-600 text-base">
          Запрашиваемая страница не найдена. Возможно она была удалена, либо её адрес был изменен. 
          Попробуйте воспользоваться поиском.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => navigate(-1)}
            type="link"
            size="large"
          >
            Вернуться назад
          </Button>

          <Button
            onClick={() => navigate("/")}
            type="link"
            size="large"
          >
            На главную
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
