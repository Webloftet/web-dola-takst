import { NavLink } from "react-router-dom";
export default function Services() {
    const services = [
      {
        title: "Nøyaktig verdivurdering",
        image: "/img/search.png",
        link: "/Verdivurdering",
      },
      {
        title: "Kvalitetssikring og standardkontroll",
        image: "/img/check-list.png",
        link: "/Kvalitetssikring",
      },
      {
        title: "Kostnadsestimering",
        image: "/img/tjenester-cost.png",
        link:"/Kostnadestimering",
      },
      {
        title: "Rådgivning ved kjøp og salg",
        image: "/img/cons.png",
        link:"/Raadgiving",
      },
      {
        title: "Tilstandsrapportering",
        image: "/img/permit.png",
        link:"/Tilstand",
      },
      {
        title: "Befaring og inspeksjon",
        image: "/img/f2f.png",
        link:"/Befaring",
      },
    ];
  
    return (
        <section className="bg-back px-6 py-16 text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-primary mb-10">
            Våre tjenester
          </h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <NavLink
                to={service.link}
                key={index}
                className="group p-6 rounded-lg border border-gray-200 hover:border-footer  hover:shadow-md transition-all text-center"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="mx-auto h-24 object-contain"
                />
                <h3 className="mt-4 text-base font-semibold font-primary group-hover:underline">
                  {service.title}
                </h3>
              </NavLink>
            ))}
          </div>
        </div>
      </section>
    );
  }
  