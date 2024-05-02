import React from 'react'

const SecondaryBtn = ({href, label}) => {
  return (
    <button className='hover:scale-105'><a className='bg-brown text-white px-4 py-2 md:px-5 md:py-3 text-2xl font-fred font-bold shadow-2xl outline-yellow outline-4 hover:outline' href={href}>{label}</a></button>
  )
}

export default SecondaryBtn;