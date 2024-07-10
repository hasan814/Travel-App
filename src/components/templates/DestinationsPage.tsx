import EuropeDestinationSection from "@/modules/EuropeDestinationSection";
import AsiaDestinationSection from "@/modules/AsiaDestinationSection";
import HolidayPlanSection from "@/modules/HolidayPlanSection";
import HolidayHero from "@/modules/HolidayHero";
import NeedInspirationSection from "@/modules/NeedInspirationSection";
import AfricaDestinationsSection from "@/modules/AfricaDestinationsSection";
import RecommendedSection from "@/modules/RecommendedSection";

const DestinationsPage = () => {
  return (
    <div className="destinations-page">
      <HolidayHero secondHeroTitle="Beautiful Destinations" />
      <EuropeDestinationSection />
      <HolidayPlanSection itemHolidayPlanTitle="Find your perfect summer holiday" />
      <AsiaDestinationSection />
      <NeedInspirationSection />
      <AfricaDestinationsSection />
      <div className="mt-4 mt-sm-5">
        <RecommendedSection itemRecommendedTitle="Your dream holiday" />
      </div>
    </div>
  );
};

export default DestinationsPage;
