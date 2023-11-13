const Tour = ({ tour }) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={tour?.img} className="tour-img" alt="" />
        <p className="tour-date">{tour?.date}</p>
      </div>
      <div className="tour-info">
        <h4>{tour?.text}</h4>
        <p>{tour?.desc}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>{" "}
            {tour?.location}
          </p>
          <p>{tour?.timeAgo}</p>
          <p>{tour?.cost}</p>
        </div>
      </div>
    </article>
  );
};

export default Tour;
