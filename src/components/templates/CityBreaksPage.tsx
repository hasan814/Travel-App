import AmestrdamCityBreaksSection from "@/modules/AmestrdamCityBreaksSection";
import LondonCityBreaksSection from "@/modules/LondonCityBreaksSection";
import RecommendedSection from "@/modules/RecommendedSection";
import HolidayPlanSection from "@/modules/HolidayPlanSection";
import HolidayHero from "@/modules/HolidayHero";
import ParisBreakSection from "@/modules/ParisBreakSection";
import NeedInspirationSection from "@/modules/NeedInspirationSection";

const CityBreaksPage = () => {
  return (
    <div className="city-breaks-page">
      <HolidayHero secondHeroTitle="city break for you" />
      <AmestrdamCityBreaksSection />
      <HolidayPlanSection itemHolidayPlanTitle="Find your perfect summer holiday" />
      <LondonCityBreaksSection />
      <div className="my-4 my-sm-5">
        <RecommendedSection itemRecommendedTitle="Your dream holiday" />
      </div>
      <ParisBreakSection />
      <NeedInspirationSection />
    </div>
  );
};

export default CityBreaksPage;
