export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>ΑΦΘΟΝΟ ΦΑΓΗΤΟ</h2>
          <p>
            Οι θεσσαλονικείς ξέρουμε από φιλοξενία και ειδικά από κουζίνα! Γι'
            αυτό ο Δήμος Θεσσαλονίκης διοργανώνει το τριήμερο Φεστιβάλ φαγητού
            10-13 Ιουνίου στο Κέντρο της πόλης με συνεργαζόμενα εστιατόρια και
            street food καντίνες για όλες τις γευστικές προτιμήσεις!
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
