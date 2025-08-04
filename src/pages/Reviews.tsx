import NewList from "../components/reviews";
import ReviewForm from "../components/ReviewForm";
import Advertisement from "../components/Advertisement";
import CustomButton from "../components/ui/CustomButton";
import Names from "../components/ui/Names";
import {reviews} from '../data/Rew'

const Reviews:React.FC = () => {
  return (
    <section className="mt-8 max-w-[1470px] mx-auto px-4">
    <Names name="Отзывы"  link="/reviews"/>
      <div className="w-full mt-8">
        <h1 className="font-bold text-[32px] md:text-[40px] lg:text-[48px]">Отзывы</h1>

        <div className="flex flex-col md:flex-row w-full justify-between mt-4 gap-8">
  <div className="flex flex-col w-full md:w-[93%]">
    <div className="w-[290px] h-[45px] flex justify-between items-center">
      <CustomButton  type="primary" text="Сначала новые" />
      <CustomButton  type="dashed" text="Сначала старые" />
    </div>

    <div>
      <NewList item={reviews} />
    </div>

    <div className="w-full mt-12">
      <h3 className="font-medium text-[18px] md:text-[20px] leading-[26px] text-[#2C333D]">Оставить отзыв</h3>
      <ReviewForm/>
    </div>
  </div>

  <Advertisement/>
</div>

      </div>
    </section>
  );
};

export default Reviews;
