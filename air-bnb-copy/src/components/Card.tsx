import star from "./Star 1.png";

export const Card = ({
  image,
  description,
  price,
  rating,
  reviewCount,
  country,
  tooltipDescription,
}: {
  image: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: string;
  country: string;
  tooltipDescription: string;
}) => {
  // alternative (props:any)
  // props:image, props:header, props:p and so on

  return (
    <figure className="card-info-container">
      <img className="card-image" src={image} alt="card photo" />
      <p>
        <img src={star}></img>
        {rating} {reviewCount} &#9900; {country}
      </p>
      <p>{description}</p>
      <p> From ${price} / person</p>
      <p className="card-tooltip">{tooltipDescription}</p>
    </figure>
  );
};
