import NeedInspirationSection from "@/modules/NeedInspirationSection";
import HolidayPlanSection from "@/modules/HolidayPlanSection";
import EveryoneHolidays from "@/modules/EveryoneHolidays";
import HolidayHero from "@/modules/HolidayHero";
import NextHoliday from "@/modules/NextHoliday";
import RecommendedSection from "@/modules/RecommendedSection";

const HolidaysPage = () => {
  return (
    <div className="holiday-page">
      <HolidayHero secondHeroTitle="Your perfect holiday" />;
      <EveryoneHolidays />
      <NeedInspirationSection />
      <NextHoliday />
      <HolidayPlanSection itemHolidayPlanTitle="Plan your summer holiday" />
      <div className="mt-4 mt-sm-5">
        <RecommendedSection itemRecommendedTitle="Recommended for you" />
      </div>
    </div>
  );
};

export default HolidaysPage;
