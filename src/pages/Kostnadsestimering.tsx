import ContactSection from "../components/home/ContactSection";
import KostnadsestimeringHero from "../components/kostnadestimat/KostnadsestimeringHero";
import VedBoligsalg from "../components/kostnadestimat/VedBoligSalg";
import VedForsikringssaker from "../components/kostnadestimat/VedForsikringsaker";
import VedRefinansiering from "../components/kostnadestimat/VedRefinansiering";
import SlikJobberVi from "../components/verdivurdering/SlikJobberVi";

export default function Kostnadssestimering() {
  return (
    <>
      <KostnadsestimeringHero />
      <VedBoligsalg />
      <VedRefinansiering />
      <VedForsikringssaker/>
      <SlikJobberVi/>
      <ContactSection/>
    </>
  );
}
