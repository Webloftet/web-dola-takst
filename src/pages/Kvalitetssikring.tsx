import ContactSection from "../components/home/ContactSection";
import HvaErKvalitetssikring from "../components/kvalitetssikring/HvaErKvalitetssikring";
import KvalitetssikringHero from "../components/kvalitetssikring/KvalitetssikringHero";
import NarTrengerDuDette from "../components/kvalitetssikring/NarTrenger";
import SlikJobberVi from "../components/verdivurdering/SlikJobberVi";

export default function Kvalitetssikring() {
  return (
    <>
      <KvalitetssikringHero />
      <HvaErKvalitetssikring />
      <NarTrengerDuDette />
      <SlikJobberVi />
      <ContactSection/>
    </>
  );
}
