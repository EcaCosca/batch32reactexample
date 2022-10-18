import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    // const count = 0    The old way of writing a variable

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