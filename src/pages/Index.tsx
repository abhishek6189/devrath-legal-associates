import Layout from "@/components/Layout";
import HeroSlider from "@/components/HeroSlider";
import AboutPreview from "@/components/AboutPreview";
import CTABanner from "@/components/CTABanner";
import PracticeAreas from "@/components/PracticeAreas";
import StatsBar from "@/components/StatsBar";
import WhyChooseUs from "@/components/WhyChooseUs";
import FounderSection from "@/components/FounderSection";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <AboutPreview />
      <CTABanner />
      <PracticeAreas />
      <StatsBar />
      <WhyChooseUs />
      <FounderSection />
      <Testimonials />
    </Layout>
  );
};

export default Index;
