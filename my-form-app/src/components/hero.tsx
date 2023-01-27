import { prependOnceListener } from "process";

const hero = (props:any) => (
  <div style={props.style}>
    <h1>{props.title}</h1>
    <h2>{props.subtitle}</h2>
  </div>
);

export default hero;
