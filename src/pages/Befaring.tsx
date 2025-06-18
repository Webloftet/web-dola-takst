import BefaringDetaljer from "../components/befaring/BefaringDetaljer";
import BefaringHero from "../components/befaring/BefaringHero";
import ContactSection from "../components/home/ContactSection";
import SlikJobberVi from "../components/verdivurdering/SlikJobberVi";

export default function Befaring() {
  return (
    <>
      <BefaringHero />
      <BefaringDetaljer />
      <SlikJobberVi />
      <ContactSection />
    </>
  );
}
