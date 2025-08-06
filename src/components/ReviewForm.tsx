import { Form} from "antd";
import CustomButton from "./ui/CustomButton";
import CustomInput from "./ui/CustomInput";
import CustomTextarea from "./ui/CustomTextarea";
import CustomCheckbox from "./ui/CustomCheckbox";
import Label from "./ui/Label";
import CustomUpload from "./ui/CustomUpload";

const ReviewForm:React.FC = () => {
  const [form] = Form.useForm();
  
  const onFinish = (values: any) => {
    console.log("Form data:", values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      className="max-w-[600px] mx-auto flex flex-col gap-[1rem]"
    >
      <div className="grid grid-cols-1 mb-[1rem] md:grid-cols-2 gap-4">
         <div>
           <Label text="Ваше имя" required/>
         <CustomInput
  type="text"
  placeholder="Введите ваше имя"
  className={"h-[40px]"}
  regex={/^[A-Za-z]{3,}( [A-Za-z]{3,})?$/}
/>
 
         </div>

          <div>
            <Label text="Введите ваш электронный адрес" required/>
          <CustomInput
  type="text"
  placeholder="Введите ваш электронный адрес"
  className={"h-[40px]"}
  regex={/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/}
/>

          </div>
      </div>
            <Label text="Текст отзыва" required/>
        <CustomTextarea rows={4} placeholder="Ваш отзыв" regex={/^.{10,}$/}/>
        <CustomUpload regex={/\.(pdf|jpg|jpeg|png)$/i} />
      <CustomCheckbox name={"Согласен c обработкой персональных данных в соответствии c политикой конфиденциальности"} />
      <CustomButton  type="primary" text="ОТПРАВИТЬ" />
    </Form>
  );
};

export default ReviewForm;
