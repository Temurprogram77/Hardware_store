import { Button, Form, Image, Input } from "antd";
import rek1 from '../assets/rek1.png'
import rek2 from '../assets/rek2.png'
const Advertisement = () => {
  return (
    <section className="flex flex-col">
            <Image src={rek1}/>
            <Image src={rek2}/>
            <Form className="w-full flex flex-col">
            <h4 className=" text-center ">Подпишитесь на рассылку</h4>
            <Input type="text"  className="w-[281px] h-[61px]" placeholder="Email"/>
            <Button type="primary" className="w-[281px] h-[56px] p-[2rem]">Добавить в корзину</Button>
            </Form>
    </section>
  )
}

export default Advertisement
