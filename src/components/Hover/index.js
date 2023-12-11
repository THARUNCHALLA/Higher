import Higher from "../Higher"

const Count1 =(props)=>{
    return(
        <div className="Center">
          <h3 onMouseEnter={props.increment}>Hovered {props.count} times</h3>
        </div>
    )
}

export default Higher(Count1,10)