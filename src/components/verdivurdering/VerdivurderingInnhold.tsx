import { motion } from "framer-motion";
import { ClipboardCheck, FileText, Camera, SearchCheck } from "lucide-react";

export default function VerdivurderingInnhold() {
  const items = [
    {
      icon: <SearchCheck className="w-6 h-6 text-blue-600" />,
      title: "Befaring og vurdering",
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-blue-600" />,
      title: "Markedsanalyse",
    },
    {
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      title: "Skriftlig rapport",
    },
    {
      icon: <Camera className="w-6 h-6 text-blue-600" />,
      title: "Bilder og dokumentasjon",
    },
  ];

  return (
    <section className="bg-back px-6 py-20 text-black">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold font-primary">
          Hva inngår i en verdivurdering?
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {items.map((item, index) => (
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
