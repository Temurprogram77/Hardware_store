import Advantages from "../components/Advantages";
import BestsellersCards from "../components/BastsellersCards";
import BestOffers from "../components/BestOffers";
import CardBgImages from "../components/CardBgImages";
import PopularBrands from "../components/PopularBrands";
import Slider from "../components/Slider";
import SwipperWrapper from "../components/SwipperWrapper";

const Home = () => {
  return (
    <>
      <Slider />
      <Advantages />
      <SwipperWrapper />
      <CardBgImages />
      <BestsellersCards />
      <PopularBrands/>
      <BestOffers/>
    </>
  );
};

export default Home;
