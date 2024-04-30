import React from 'react'

const SecondaryBtn = ({href, label}) => {
  return (
    <button><a className='bg-brown text-white px-4 py-2 md:px-5 md:py-3 text-2xl font-fred font-bold shadow-2xl hover:outline outline-yellow' href={href}>{label}</a></button>
  )
}

export default SecondaryBtn;