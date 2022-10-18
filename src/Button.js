import React from 'react'

const Button = ({prop, study}) => {
    // console.log('prop'+prop)
  return (
    <>
        <h1>Hello {prop}</h1>
        <p>Welcome to React</p>
        <p>Good luck with {study}</p>
    </>
  )
}

export default Button