import React, { useState } from 'react'

export const Timer = () => {
    const[count, setCount] = useState(0)
    let increment = () =>{
        setCount(count+1)
    }
     let decrement = () => {
        setCount(count-1)
     }

  return (
    <div>

<h1> Timer<p style={{color:"red"}}>{count}</p></h1>
<hr></hr>
<button onClick={increment}>+</button>
<button onClick={decrement}>-</button>


    </div>
  )
}
