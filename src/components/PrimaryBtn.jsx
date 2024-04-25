import React from 'react'

const PrimaryBtn = ({href, label}) => {
  return (
    <button><a className='bg-brand text-white px-5 py-3 text-2xl font-bold font-comic rounded-3xl shadow-lg' href={href}>{label}</a></button>
  )
}

export default PrimaryBtn;