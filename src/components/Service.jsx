const Service = ({ service }) => {
  return (
    <article className="service">
      <span className="service-icon">
        <i className={service?.icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{service?.text}</h4>
        <p className="service-text">{service?.desc}</p>
      </div>
    </article>
  );
};

export default Service;
