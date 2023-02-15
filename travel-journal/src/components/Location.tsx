export const Location = (props: any) => {
  return (
      <div className="card-element">
        <img
          className="photo-of-location"
          src={`../images/${props.item.imageUrl}`}
          alt="photo-of-location"
        />
        <div className="inner-card-container">
          <div className="location-container">
            <img src="./images/location-sign.png" alt="location-sign" />
            <p className="location-of-wonder">{props.item.location}</p>
            <a className="google-link" href={props.item.googleMapsUrl}>
              View on google maps
            </a>
          </div>
          <p className="location-title">{props.item.title}</p>
          <p className="travel-time">
            {props.item.startDate + props.item.endDate}{" "}
          </p>
          <p className="location-description">{props.item.description}</p>
        </div>
      </div>
  );
};
