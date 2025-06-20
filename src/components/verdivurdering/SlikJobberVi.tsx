import { motion } from "framer-motion";
import {
  Phone,
  CalendarDays,
  Eye,
  FileText
} from "lucide-react";

export default function SlikJobberVi() {
  const steps = [
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "Kontakt oss",
    },
    {
      icon: <CalendarDays className="w-6 h-6 text-blue-600" />,
      title: "Vi avtaler befaring",
    },
    {
      icon: <Eye className="w-6 h-6 text-blue-600" />,
      title: "Vi gjennomfører vurdering",
    },
    {
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      title: "Du får en rapport innen X dager",
    },
  ];

  return (
    <section className="bg-back px-6 py-20 text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold font-primary mb-12 text-center">
          Slik jobber vi
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
                {step.icon}
              </div>
              <h3 className="text-sm font-medium">{step.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
