import star from "./Star 1.png";
import cover1 from "./image 12.png";

// export const Card = ({
//   image,
//   description,
//   price,
//   stats,
//   country,
//   tooltipDescription,
// }: {
//   image: string;
//   description: string;
//   price: number;
//   stats: any;
//   country: string;
//   tooltipDescription: number;
// })  //propsu aprasymas pagal ju tipus

export const Card = (props: any) => {
  let tooltipText = "";

  if (props.item.openSpots === 0) {
    tooltipText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    tooltipText = "ONLINE";
  }
  return (
    <div className="card">
      <img src={`../images/${props.item.coverImg}`} className="card-image" />
      <div className="card--stats">
        <img src="../images/star 1.png" className="card--star" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p>{props.item.title}</p>
      <p>
        <span className="bold">From ${props.item.price}</span> / person
      </p>
      <div className="card-info-container">

         {tooltipText && <div className="card-tooltip">{tooltipText}</div>}
      </div>
    </div>
  );
};
