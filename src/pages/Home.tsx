import AboutPreview from "../components/home/AboutPreview";
import ContactSection from "../components/home/ContactSection";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import WhyChooseUs from "../components/home/WhyChooseUs";

export default function Homepage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <Services />
      <AboutPreview />
      <ContactSection/>
    </>
  );
}
