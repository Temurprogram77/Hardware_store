import { Form, Upload, } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import CustomButton from "./ui/CustomButton";
import CustomInput from "./ui/CustomInput";
import CustomTextarea from "./ui/CustomTextarea";
import CustomCheckbox from "./ui/CustomCheckbox";
import Label from "./ui/Label";

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
      className="max-w-[600px] mx-auto"
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
        <CustomTextarea rows={4} placeholder="Ваш отзыв"/>

      <Form.Item label="Прикрепить фото" name="photos">
        <Upload.Dragger name="files" multiple>
          <p className="ant-upload-drag-icon">
            <UploadOutlined />
          </p>
          <p className="ant-upload-text">
            Нажмите для загрузки или перетащите файл в это поле
          </p>
        </Upload.Dragger>
      </Form.Item>

      <Form.Item name="agreement" valuePropName="checked">
      <CustomCheckbox name={"Согласен c обработкой персональных данных в соответствии c политикой конфиденциальности"} />
      </Form.Item>

      <Form.Item>
      <CustomButton  type="primary" text="ОТПРАВИТЬ" />
      </Form.Item>
    </Form>
  );
};

export default ReviewForm;
