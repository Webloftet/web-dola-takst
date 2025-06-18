import {
    Briefcase,
    CalendarCheck,
    Handshake,
    Settings
  } from "lucide-react";
  
  export default function WhyChooseUs() {
    return (
      <section className="bg-back px-6 py-16 text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-primary mb-10">
            Hvorfor velge oss
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Erfaring */}
            <div className="flex gap-4">
              <Settings className="w-8 h-8 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Erfaring</h3>
                <p className="text-sm">Vi har lang erfaring innen taksering</p>
              </div>
            </div>
  
            {/* Profesjonalitet */}
            <div className="flex gap-4">
              <Briefcase className="w-8 h-8 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Profesjonalitet</h3>
                <p className="text-sm">Vi leverer profesjonelle og pålitelige tjenester</p>
              </div>
            </div>
  
            {/* Kundetilfredshet */}
            <div className="flex gap-4">
              <Handshake className="w-8 h-8 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Kundetilfredshet</h3>
                <p className="text-sm">Vi jobber for å møte og overgå kundenes forventninger</p>
              </div>
            </div>
  
            {/* Punktlighet */}
            <div className="flex gap-4">
              <CalendarCheck className="w-8 h-8 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Punktlighet</h3>
                <p className="text-sm">Vi fullfører alle oppdrag til avtalt tid</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  