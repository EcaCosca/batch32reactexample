import React from 'react'

const Button = ({prop, study}) => {
    // console.log('prop'+prop)
  return (
    <div onClick={() => alert(`I've clicked`+prop)}>
        <h1>Hello {prop}</h1>
        <p>Welcome to React</p>
        <p>Good luck with {study}</p>
    </div>
  )
}

export default Button