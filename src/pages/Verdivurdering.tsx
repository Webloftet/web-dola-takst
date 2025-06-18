import ContactSection from "../components/home/ContactSection";
import FordelerMedOss from "../components/verdivurdering/FordelerMedOss";
import SlikJobberVi from "../components/verdivurdering/SlikJobberVi";
import VerdivurderingHero from "../components/verdivurdering/VerdivurderingHero";
import VerdivurderingInnhold from "../components/verdivurdering/VerdivurderingInnhold";

export default function Verdivurdering() {
  return (
    <>
      <VerdivurderingHero />
      <VerdivurderingInnhold />
      <FordelerMedOss />
      <SlikJobberVi />
      <ContactSection />
    </>
  );
}
