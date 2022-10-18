import React from 'react'

function Greeting({firstName, lastName}) {
  return (
    <div>
        <p>Welcome {firstName+' '+lastName}</p>
    </div>
  )
}

export default Greeting