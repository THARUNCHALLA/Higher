import Higher from "../Higher"
import "./index.css"


const Count=(props)=>{
    return(
        <div className="Center">
            <button onClick={props.increment}>{props.name} Counter clicked {props.count} times</button>
        </div>
    )
}

export default Higher(Count,5)