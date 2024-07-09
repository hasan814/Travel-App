import SearchForm from "@/elements/SearchForm";
import HeroSection from "@/modules/HeroSection";

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <SearchForm />
    </div>
  );
};

export default Home;
