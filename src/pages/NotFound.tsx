import { useNavigate } from "react-router-dom";
import { Button } from 'antd';
import {images} from "../assets/images";
import { Breadcrumb } from 'antd';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
   
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 text-center sm:p-12">
<div className="absolute top-0 left-0 p-4 sm:p-10 mt-40 sm:mt-60 md:mt-40 lg:mt-24">
  <Breadcrumb className="text-md mb-8">
    <Breadcrumb.Item className="text-black">Стройоптторг</Breadcrumb.Item>
    <Breadcrumb.Item className="text-gray-400">
      Страница не найдена
    </Breadcrumb.Item>
  </Breadcrumb>

  <h2 className="text-3xl font-bold text-black sm:text-4xl">
    Страница не найдена
  </h2>
</div>

      <div className="max-w-md w-full space-y-6">

     
        <img src={images.ErrorImage} alt="Error" className="w-[650px]  mb-6" /> {/* Adjusted image sizing */}

        <p className="text-gray-600 text-base mb-8">
          Запрашиваемая страница не найдена. Возможно она была удалена, либо её адрес был изменен.
          Попробуйте воспользоваться поиском.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => navigate(-1)}
            type="default"
            size="large"
          >
            Вернуться назад
          </Button>

          <Button
            onClick={() => navigate("/")}
            type="primary"
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