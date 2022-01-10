import React from 'react'

const Header = ({header}) => {
  return (
    <div>
      <h1 className="border-b border-black text-5xl pb-7 mb-7">{header}</h1>
    </div>
  )
}

export default Header
