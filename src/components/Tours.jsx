import React from "react";
import Title from "./Title";
import { tours } from "../data";
import Tour from "./Tour";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <Title title={"featured"} subTitle={"tours"} />
      </div>

      <div className="section-center featured-center">
        {/* tour  */}
        {tours?.map((tour) => {
          return <Tour key={tour.id} tour={tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
