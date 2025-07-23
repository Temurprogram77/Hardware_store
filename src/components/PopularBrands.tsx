import { images } from "../assets/images";
const {
  brandImage1,
  brandImage2,
  brandImage3,
  brandImage4,
  brandImage5,
  brandImage6,
  brandImage7,
} = images;

const data = [
  brandImage1,
  brandImage2,
  brandImage3,
  brandImage4,
  brandImage5,
  brandImage6,
  brandImage7,
];

const PopularBrands = () => {
  return (
    <div className="bg-[#F9FAFB]">
      <div className="lg:block hidden max-w-[1460px] 2xl:mx-auto mx-3 py-8">
        <h2 className="text-[23px] !font-semibold">Популярные бренды</h2>
        <div className="flex justify-between items-center">
          {data.map((item, inx) => {
            return (
              <div key={inx} className="bg-white px-7 py-2 border-1 border-[#F2F4F5] rounded-md">
                <img src={item} alt="brand" className="w-[130px] h-[50px]" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularBrands;
