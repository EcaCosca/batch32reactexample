import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    // const count = 0    The old way of writing a variable
    // From now on whenever I use "count" it will display the current value, the same as a variable name
    // setCount serves the porpuse of updating the count value 
    // whatever i put between the parenthesis in useState will be the value of count in the beggining

    const handleClickIncrease = () => {
        setCount(count+1)
    }

    const handleClickDecrease = () => {
        setCount(count-1)
    }


  return (
    <div>
        <h2>{count}</h2>

        <button onClick={handleClickIncrease}>+</button>
        <button onClick={handleClickDecrease}>-</button>
    </div>
  )
}

export default Counter