import HolidayHero from "@/modules/HolidayHero";
import styles from "./HolidaysPage.module.css";

const HolidaysPage = () => {
  return (
    <div className="holiday-page">
      <HolidayHero secondHeroTitle="Your perfect holiday" />;
    </div>
  );
};

export default HolidaysPage;
