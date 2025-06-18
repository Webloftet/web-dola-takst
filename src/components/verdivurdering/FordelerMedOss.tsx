import { motion } from "framer-motion";
import {
  CheckCircle,
  MapPin,
  ShieldCheck,
  Clock4
} from "lucide-react";

export default function FordelerMedOss() {
  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
      title: "Uavhengig vurdering",
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: "Lokal kunnskap",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: "Sertifiserte takstmenn",
    },
    {
      icon: <Clock4 className="w-6 h-6 text-blue-600" />,
      title: "Rask levering",
    },
  ];

  return (
    <section className="bg-back px-6 py-20 text-black">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold font-primary">
          Fordeler med oss
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {benefits.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
          >
            <div>{item.icon}</div>
            <h3 className="text-sm font-semibold">{item.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
