import { useNavigate } from "react-router-dom";
import { Button } from '../link/antLink';
import {images} from "../assets/images";
import Names from "../components/ui/Names";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
   
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 text-center sm:p-12">
 <Names link="/about" name="О компании" />
  <h2 className="text-3xl font-bold text-black sm:text-4xl">
    Страница не найдена
  </h2>


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