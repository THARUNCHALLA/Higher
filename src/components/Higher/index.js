import { useState } from "react"

const Higher=(OriginalComponent,incrementCount)=>{
    const NewComponent=(props)=>{
        const [value,setvalue]=useState(0)
    const increment=()=>{
        setvalue(value+incrementCount)
    }
    return <OriginalComponent count={value} increment={increment} {...props}/>
    }

    return NewComponent
}

export default Higher