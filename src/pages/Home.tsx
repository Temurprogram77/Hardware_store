import Advantages from "../components/Advantages";
import BestsellersCards from "../components/BastsellersCards";
import BestOffers from "../components/BestOffers";
import BuildingMaterials from "../components/BuildingMaterials";
import CardBgImages from "../components/CardBgImages";
import NewsCards from "../components/NewsCards";
import PopularBrands from "../components/PopularBrands";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Slider from "../components/Slider";
import SmsIconSwitcher from "../components/SmsPart";
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
      <BuildingMaterials/>
      <NewsCards/>
      <ScrollToTopButton />
      <SmsIconSwitcher/>
    </>
  );
};

export default Home;
