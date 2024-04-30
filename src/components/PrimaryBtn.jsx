import React from 'react'

const PrimaryBtn = ({href, label}) => {
  return (
    <button><a className='bg-[#FDE767] text-brown px-2 xs:px-4 py-2 md:px-5 md:py-3 text-2xl font-bold font-fred shadow-lg hover:outline ' href={href}>{label}</a></button>
  )
}

export default PrimaryBtn;