import React from 'react'

function Greeting({firstName, lastName}) {
    const handleClick = () => {
        alert("Don't touch that "+firstName)
    }

  return (
    <div onClick={handleClick}>
        <p>Welcome {firstName+' '+lastName}</p>
    </div>
  )
}

export default Greeting