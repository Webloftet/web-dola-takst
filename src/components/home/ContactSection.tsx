import { Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-back px-6 py-16 text-black">
      <h2 className="text-xl md:text-3xl font-bold font-primary mb-4 max-w-6xl mx-auto">
        Kontakt oss
      </h2>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex-1">
          <p className="text-sm md:text-base font-light max-w-md">
            Vi er klare for å hjelpe deg med dine spørsmål og behov – ta kontakt
            for en uforpliktende prat. Uansett om du ønsker en rask vurdering
            eller trenger råd til et større prosjekt.
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <a
            href="tel:+4748385839"
            className="flex items-center gap-3 hover:underline"
          >
            <Phone className="w-5 h-5" />
            <span className="text-sm md:text-base font-light">
              +47 483 85 839
            </span>
          </a>
          <a
            href="mailto:post@dolataks.no"
            className="flex items-center gap-3 hover:underline"
          >
            <Mail className="w-5 h-5" />
            <span className="text-sm md:text-base font-light">
              post@dolataks.no
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
