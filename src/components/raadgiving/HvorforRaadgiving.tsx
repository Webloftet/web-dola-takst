import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function HvorforRaadgivning() {
  const punkter = [
    "Vi går gjennom tilstandsrapporter med deg",
    "Vurderer risiko for skjulte feil",
    "Forklarer tekniske begreper",
    "Gir deg trygghet i budrunden",
  ];

  return (
    <section className="bg-back px-6 py-20 text-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-white rounded-xl shadow-md p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-primary mb-6">
            Hvorfor bruke rådgivning ved boligkjøp?
          </h2>

          <ul className="space-y-4">
            {punkter.map((text, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                <span className="text-sm font-light">{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
