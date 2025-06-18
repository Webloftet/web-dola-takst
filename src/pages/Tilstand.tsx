import ContactSection from "../components/home/ContactSection";
import TilstandFordeler from "../components/tilstand/TilstandFordeler";
import TilstandHero from "../components/tilstand/TilstandHero";
import TilstandsrapportInfo from "../components/tilstand/TilstandsrapportInfo";

export default function Tilstand(){
    return(
        <>
        <TilstandHero/>
        <TilstandsrapportInfo/>
        <TilstandFordeler/>
        <ContactSection/>
        </>
    )
}