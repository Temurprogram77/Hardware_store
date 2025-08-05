import { Form } from "antd";
import CustomButton from "./ui/CustomButton";
import CustomInput from "./ui/CustomInput";
import CustomTextarea from "./ui/CustomTextarea";
import CustomCheckbox from "./ui/CustomCheckbox";
import Label from "./ui/Label";
import CustomUpload from "./ui/CustomUpload";

const ReviewForm: React.FC = () => {
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
          <Label text="Ваше имя" required />
          <Form.Item
            name="name"
            rules={[
              { required: true, message: "Имя обязательно" },
              {
                pattern: /^[A-Za-z]{3,}( [A-Za-z]{3,})?$/,
                message: "Введите корректное имя (мин. 3 буквы)",
              },
            ]}
          >
            <CustomInput
              type="text"
              placeholder="Введите ваше имя"
              className="h-[40px]"
            />
          </Form.Item>
        </div>

        <div>
          <Label text="Введите ваш электронный адрес" required />
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Email обязателен" },
              {
                pattern: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
                message: "Введите корректный email",
              },
            ]}
          >
            <CustomInput
              type="text"
              placeholder="Введите ваш электронный адрес"
              className="h-[40px]"
            />
          </Form.Item>
        </div>
      </div>

      <Label text="Текст отзыва" required />
      <Form.Item
        name="reviewText"
        rules={[
          { required: true, message: "Отзыв обязателен" },
          {
            pattern: /^.{10,}$/,
            message: "Минимум 10 символов",
          },
        ]}
      >
        <CustomTextarea rows={4} placeholder="Ваш отзыв" />
      </Form.Item>

      <Form.Item
        name="upload"
        valuePropName="fileList"
        getValueFromEvent={(e: any) => (Array.isArray(e) ? e : e?.fileList)}
        rules={[
          {
            required: true,
            message: "Пожалуйста, загрузите файл (pdf, jpg, jpeg, png)",
          },
          {
            validator: (_, fileList) => {
              if (
                fileList &&
                fileList.every((file: any) =>
                  /\.(pdf|jpg|jpeg|png)$/i.test(file.name)
                )
              ) {
                return Promise.resolve();
              }
              return Promise.reject(
                "Разрешены только файлы: pdf, jpg, jpeg, png"
              );
            },
          },
        ]}
      >
        <CustomUpload />
      </Form.Item>

      <Form.Item
        name="agree"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(
                    "Вы должны согласиться с политикой конфиденциальности"
                  ),
          },
        ]}
      >
        <CustomCheckbox name="Согласен c обработкой персональных данных в соответствии c политикой конфиденциальности" />
      </Form.Item>

      <CustomButton type="primary" text="ОТПРАВИТЬ"  />
    </Form>
  );
};

export default ReviewForm;
