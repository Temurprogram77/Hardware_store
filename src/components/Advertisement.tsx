import { Button, Checkbox, Form, Image, Input } from "antd";
import rek1 from '../assets/rek1.png'
import rek2 from '../assets/rek2.png'

const Advertisement: React.FC = () => {
  return (
    <section className="flex flex-col w-[90%] md:w-[60%] lg:w-[30%] xl:w-[23%] gap-[3rem] mb-[3rem] mx-auto">
      <Image src={rek1} />
      <Image src={rek2} />
      <Form className="w-full flex flex-col gap-[1.7rem] pb-[2rem] bg-[#F9FAFB] px-4">
        <h4 className="text-center text-[18px] font-medium">Подпишитесь на рассылку</h4>
        <p className="text-center text-[#6A6F75] text-[14px]">
          Регулярные скидки и спецпредложения, а так же новости компании.
        </p>
        <Input
          type="text"
          className="w-full md:w-[281px] h-[61px] mx-auto"
          placeholder="Email"
        />
        <Button
          type="primary"
          className="w-full md:w-[281px] h-[56px] mx-auto p-[2rem]"
        >
          Добавить в корзину
        </Button>
        <Checkbox className="mx-auto text-center">
          Согласен с обработкой персональных данных в соответствии с политикой
          конфиденциальности
        </Checkbox>
      </Form>
    </section>
  );
};

export default Advertisement;
