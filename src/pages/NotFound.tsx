import { useNavigate } from "react-router-dom";
import images from "../assets/images";
const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 text-center">
      <div className="max-w-md w-full space-y-6">
       
        
        <h2 className="text-2xl font-semibold text-gray-700">
          Страница не найдена
        </h2>
        
<img src={images.ErrorImage} alt="" className="w-100 mx-auto"/>

        <p className="text-gray-600">
          Запрашиваемая страница не найдена. Возможно она была удалена, либо её адрес был изменен. 
          Попробуйте воспользоваться поиском.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-700 transition-colors"
          >
            Вернуться назад
          </button>
          
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white transition-colors"
          >
            На главную
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;