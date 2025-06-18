import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function NarTrengerDuDette() {
  const scenarios = [
    "Ved nybygg og rehabilitering",
    "Ved tvil om arbeid er forskriftsmessig utført",
    "Før overtakelse av boligprosjekt",
    "Som tredjepartskontroll i prosjekt",
  ];

  return (
    <section className="bg-back px-6 py-20 text-black">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold font-primary">
          Når trenger du dette?
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {scenarios.map((text, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
            <p className="text-sm font-medium">{text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
