export const PhotoBox = (props:any)=> (
    <div>
    <img style = {props.style} src={props.image}/>
    <p style = {props.pStyle}>{props.text}</p>
    </div>
)