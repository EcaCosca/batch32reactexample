import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)


  return (
    <div>
        <h2>{count}</h2>
    </div>
  )
}

export default Counter