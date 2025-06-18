import { motion } from "framer-motion";
import { ClipboardList } from "lucide-react";

export default function TilstandsrapportInfo() {
  const vurderes = [
    "Våtrom (fukt, fall, membran)",
    "Konstruksjon og bæresystem",
    "Tak, drenering og grunnmur",
    "Vinduer, dører og overflater",
    "El-anlegg og VVS (visuell vurdering)",
  ];

  return (
    <section className="bg-back px-6 py-20 text-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-white rounded-xl shadow-md p-8 space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Hva er en tilstandsrapport */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-primary mb-2">
              Hva er en tilstandsrapport
            </h2>
            <p className="text-sm md:text-base font-light">
              En tilstandsrapport er en grundig teknisk gjennomgang av en eiendom, der bygningens tilstand og eventuelle avvik dokumenteres. Rapporten brukes ofte i boligsalg, og skal bidra til trygghet og forutsigbarhet for både kjøper og selger.
            </p>
          </div>

          {/* Hva vurderes */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Hva vurderes i rapporten</h3>
            <ul className="space-y-3">
              {vurderes.map((punkt, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ClipboardList className="w-5 h-5 text-blue-600 mt-1" />
                  <span className="text-sm font-light">{punkt}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
