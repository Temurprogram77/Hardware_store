import { Form, Input, Upload, Button, Checkbox } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { TextArea } = Input;

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Form.Item
          label="Ваше имя"
          name="name"
          rules={[{ required: true, message: "Введите ваше имя" }]}
        >
          <Input placeholder="Введите ваше имя" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Введите ваш электронный адрес" },
            { type: "email", message: "Неверный формат email" },
          ]}
        >
          <Input placeholder="Введите ваш электронный адрес" />
        </Form.Item>
      </div>

      <Form.Item
        label="Текст отзыва"
        name="review"
        rules={[{ required: true, message: "Введите ваш отзыв" }]}
      >
        <TextArea rows={4} placeholder="Ваш отзыв" />
      </Form.Item>

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
        <Checkbox>
          Согласен с обработкой персональных данных в соответствии с политикой
          конфиденциальности
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          ОТПРАВИТЬ
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ReviewForm;
