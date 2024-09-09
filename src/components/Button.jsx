import React from 'react'

const Button = ({children}) => {
  return (
    <button className="px-2 py-3 px-blue bg-blue-500 text-white rounded hover:bg-blue-400">{children}</button>
  )
}

export default Button;
