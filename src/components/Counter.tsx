import React, { useState } from "react"
import classes from "./Counter.module.scss"

export const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div className={classes.btn}>
            <button onClick={()=> setCount(prev => prev + 1)}>increment</button>
            <button onClick={()=> setCount(prev => prev - 1)}>decrement</button>

            <h1>{count}</h1>
        </div>
    )
}
