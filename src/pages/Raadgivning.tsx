import ContactSection from "../components/home/ContactSection";
import HvorforRaadgivning from "../components/raadgiving/HvorforRaadgiving";
import RaadgivningHero from "../components/raadgiving/RaadgivingHero";
import HvorforRaadgivningVedSalg from "../components/raadgiving/RaadgivningVedSalg";
import SlikJobberVi from "../components/verdivurdering/SlikJobberVi";

export default function Raadgiving() {
  return (
    <>
      <RaadgivningHero />
      <HvorforRaadgivning />
      <HvorforRaadgivningVedSalg />
      <SlikJobberVi />
      <ContactSection />
    </>
  );
}
