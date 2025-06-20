import { motion } from "framer-motion";
import { ShieldCheck, Eye, Users, MapPin } from "lucide-react";


export default function AboutSection() {
  const values = [
    { icon: <Eye className="w-6 h-6 text-blue-600" />, title: "Nøyaktighet" },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Uavhengighet",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: "Trygghet",
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: "Lokal kjennskap",
    },
  ];

  const certifications = [
    "Sertifisert av Norsk Takstforbund",
    "Byggfaglig utdanning og praksis",
    "Regelmessig etterutdanning",
    "Godkjent for verditaksering av bolig og næringseiendom",
  ];

  return (
    <section className="bg-back px-6  text-black">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Verdier */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold font-primary mb-8">
            Våre verdier
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                {item.icon}
                <p className="mt-2 text-sm font-medium">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-bold font-primary mb-8">
            Sertifiseringer og kompetanse
          </h2>
          <ul className="space-y-4 list-disc list-inside">
            {certifications.map((cert, idx) => (
              <li key={idx} className="text-sm font-light">
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
