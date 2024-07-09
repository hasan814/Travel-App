import HeroSection from "@/modules/HeroSection";
import LastHolidaySection from "@/modules/LastHolidaySection";
import SearchForm from "@/modules/SearchForm";

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <SearchForm />
      <LastHolidaySection />
    </div>
  );
};

export default Home;
