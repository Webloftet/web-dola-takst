import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function HvorforRaadgivningVedSalg() {
  const punkter = [
    "Råd om hvilke utbedringer som lønner seg",
    "Forberedelse til visning og takst",
    "Innsikt i hva kjøpere ser etter",
    "Samarbeid med takst, verdivurdering og dokumentasjon",
  ];

  return (
    <section className="bg-back px-6 py-20 text-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="bg-white rounded-xl shadow-md p-8"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-primary mb-6">
            Hvorfor bruke rådgivning ved boligsalg?
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
