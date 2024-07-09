import HolidayHero from "@/modules/HolidayHero";
import styles from "./HolidaysPage.module.css";
import EveryoneHolidays from "@/modules/EveryoneHolidays";

const HolidaysPage = () => {
  return (
    <div className="holiday-page">
      <HolidayHero secondHeroTitle="Your perfect holiday" />;
      <EveryoneHolidays />
    </div>
  );
};

export default HolidaysPage;
