export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>THE COOLEST URBAN CULINARY FESTIVAL</h2>
          <p>
            Thessaloniki has become a worldwide culinary destination, where one
            will fall in love with the food and the city’s hospitality. During
            June 10th-13th, the city will transform to a gastronomic hub, with
            the coolest culinary festival. Experience an overwhelming experience
            with hundreds of restaurants offering an international mix of
            flavours.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
