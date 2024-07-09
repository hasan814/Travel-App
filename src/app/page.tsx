import LastHolidaySection from "@/modules/LastHolidaySection";
import RecommendedSection from "@/modules/RecommendedSection";
import HeroSection from "@/modules/HeroSection";
import SearchForm from "@/modules/SearchForm";
import HolidayPlanSection from "@/modules/HolidayPlanSection";
import FavoritesSection from "@/modules/FavoritesSection";

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <SearchForm />
      <LastHolidaySection />
      <div className="my-4 my-sm-5">
        <RecommendedSection itemRecommendedTitle="Recommended for you" />
      </div>
      <HolidayPlanSection itemHolidayPlanTitle="Plan Your Summer" />
      <FavoritesSection />
    </div>
  );
};

export default Home;
