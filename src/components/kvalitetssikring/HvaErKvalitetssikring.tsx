import { motion } from "framer-motion";
import {
  ClipboardList,
  Hammer,
  AlertCircle,
  FileText
} from "lucide-react";

export default function HvaErKvalitetssikring() {
  const points = [
    {
      icon: <ClipboardList className="w-6 h-6 text-blue-600" />,
      title: "Kontroll av tekniske krav og forskrifter",
    },
    {
      icon: <Hammer className="w-6 h-6 text-blue-600" />,
      title: "Vurdering av utførelse og matrialbruk",
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-blue-600" />,
      title: "Avvik og forbedringspunkter",
    },
    {
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      title: "Dokumentert rapport med anbefalinger",
    },
  ];

  return (
    <section className="bg-back px-6 py-20 text-black">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold font-primary">
          Hva innebærer kvalitetssikring?
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {points.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4 bg-white p-4 rounded-lg shadow-sm"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>{item.icon}</div>
            <p className="text-sm font-medium">{item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
