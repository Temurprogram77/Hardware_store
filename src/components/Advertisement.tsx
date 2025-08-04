import React from "react";
import { Form, Image } from "antd";
import rek1 from "../assets/rek1.png";
import rek2 from "../assets/rek2.png";
import CustomInput from "./ui/CustomInput";
import CustomButton from "./ui/CustomButton";
import CustomCheckbox from "./ui/CustomCheckbox";

const Advertisement: React.FC = () => {
  return (
    <section className="flex flex-col w-[90%] md:w-[60%] lg:w-[30%] xl:w-[23%] gap-[3rem] mb-[3rem] mx-auto">
      <Image src={rek1} preview={false} />
      <Image src={rek2} preview={false} />

      <Form className="w-full flex flex-col gap-[1.7rem] pb-[2rem] bg-[#F9FAFB] px-4">
        <div className="w-full p-[1.5rem] flex flex-col gap-[1.7rem]">
          <h4 className="text-center text-[18px] font-medium">
            Подпишитесь на рассылку
          </h4>
          <p className="text-center text-[#6A6F75] text-[14px]">
            Регулярные скидки и спецпредложения, a так же новости компании.
          </p>

          {/* Email input */}
          <CustomInput
            className="h-[40px]"
            type="email"
            placeholder="Email"
          />

          <CustomButton text="Добавить в корзину" type="primary" />

          <CustomCheckbox name="Согласен c обработкой персональных" />
        </div>
      </Form>
    </section>
  );
};

export default Advertisement;
