import { useState } from "react";
import CustomPhoneInput, { phoneRegex } from "./ui/CustomINputPhone";
import { motion } from "framer-motion";
import { useModal } from "../context/ModalContext";
import { images } from "../assets/images";

const {
  close,
} = images;


const ModalComponent = () => {
    const {
        modalIsOpen,
        modalCloseModal,
      } = useModal();
  const [phone, setPhone] = useState<string>("");
  const [checked, setChecked] = useState(false);
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const handleBlur = (field: string) => {
      switch (field) {
        case "phone":
          if (!phone || !phoneRegex.test(phone)) {
            setPhoneError("Пожалуйста, введите действительный телефон!");
          } else {
            setPhoneError(null);
          }
          break;
        default:
          break;
      }
    };
  return (
    <div>
        {modalIsOpen ? (
        <div className="overflow-y-scroll">
          <div
            onClick={modalCloseModal}
            className="w-full h-full bg-[#011120cc] fixed z-3 top-0 left-0"
          ></div>
          <div
            onClick={modalCloseModal}
            className="cursor-pointer bg-[#fff] duration-200 hover:bg-[#6e6e6e] fixed z-4 top-6 right-6 rounded-md p-3"
          >
            <img src={close} alt="close" />
          </div>
          <div className="flex flex-col gap-3 md:w-[600px] w-[95%] bg-[#fff] p-8 rounded-xl z-3 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2 className="text-[30px] !font-semibold text-center">
              Заказать обратный звонок
            </h2>
            <label htmlFor="inp1" className="text-[14px] font-medium mt-2">
              Ваше имя *:
            </label>
            <input
              id="inp1"
              type="text"
              className="px-3 py-4 rounded-md text-[12px] placeholder:text-[13px] !font-medium text-[#2c333d] placeholder:text-[#2c333d] border-1 border-[#ebeef0] lg:w-full"
              placeholder="Как к вам обращаться?"
            />
            <label htmlFor="inp2" className="text-[14px] font-medium mt-2">
              Номер телефона{" "}
            </label>
            <CustomPhoneInput
              value={phone}
              onChange={setPhone}
              onFocus={() => setPhoneError(null)}
              onBlur={() => handleBlur("phone")}
              placeholder="+998 (__) ___-__-__"
              className={`px-3 py-4 rounded-md text-[12px] placeholder:text-[13px] !font-medium text-[#2c333d] placeholder:text-[#2c333d] border-1 border-[#ebeef0] lg:w-full 
${phoneError ? "!border-red-500" : ""}`}  
            />
            <div className="flex items-start gap-3 my-4">
              <label className="cursor-pointer inline-block">
                <input 
                  type="checkbox"
                  className="hidden"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
                <motion.div
                  animate={{
                    backgroundColor: checked ? "#3B82F6" : "#fff", // blue-500
                    borderColor: checked ? "#3B82F6" : "#ccc",
                  }}
                  transition={{ duration: 0.2 }}
                  className="w-[25px] h-[25px] border-2 rounded flex items-center justify-center"
                >
                  {checked && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-[16px] h-[16px] bg-white rounded"
                    />
                  )}
                </motion.div>
              </label>
              <p className="!m-0 leading-6 text-[14px] !font-medium">
                Согласен с обработкой персональных данных в соответствии с{" "}
                <a
                  href="#"
                  className="text-blue-600 underline hover:no-underline"
                >
                  политикой конфиденциальности
                </a>
              </p>
            </div>
            <div className="max-w-full text-white">
              <button className="bg-[#186fd4] py-5 rounded-md text-white duration-200 hover:bg-black cursor-pointer w-full">
                Перезвоните мне
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default ModalComponent