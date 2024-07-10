import NeedInspirationSection from "@/modules/NeedInspirationSection";
import EveryoneHolidays from "@/modules/EveryoneHolidays";
import HolidayHero from "@/modules/HolidayHero";
import NextHoliday from "@/modules/NextHoliday";

const HolidaysPage = () => {
  return (
    <div className="holiday-page">
      <HolidayHero secondHeroTitle="Your perfect holiday" />;
      <EveryoneHolidays />
      <NeedInspirationSection />
      <NextHoliday />
    </div>
  );
};

export default HolidaysPage;
