import { NavLink } from "react-router-dom";
export default function Services() {
    const services = [
      {
        title: "Nøyaktig verdivurdering",
        image: "/img/search.png",
        link: "/verdivurdering",
      },
      {
        title: "Kvalitetssikring og standardkontroll",
        image: "/img/check-list.png",
        link: "/kvalitetssikring",
      },
      {
        title: "Kostnadsestimering",
        image: "/img/tjenester-cost.png",
        link: "/kostnadestimering",
      },
      {
        title: "Rådgivning ved kjøp og salg",
        image: "/img/cons.png",
        link: "/raadgiving",
      },
      {
        title: "Tilstandsrapportering",
        image: "/img/permit.png",
        link: "/tilstand",
      },
      {
        title: "Befaring og inspeksjon",
        image: "/img/f2f.png",
        link: "/befaring",
      },
    ];
  
    return (
        <section className="bg-back px-6 py-16 text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-primary mb-10">
            Våre tjenester
          </h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <NavLink
                to={service.link}
                key={service.link}
                className="group p-6 rounded-lg border border-gray-400 hover:border-footer  hover:shadow-md transition-all text-center"
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
  