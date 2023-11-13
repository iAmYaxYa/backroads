import React from "react";
import { services } from "../data";
import Service from "./Service";
import Title from "./Title";

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <Title title={"our"} subTitle={"services"} />
      </div>
      <div className="section-center services-center">
        {/* service  */}
        {services?.map((service) => {
          return <Service key={service.id} service={service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
