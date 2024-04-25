import React from 'react'

const SecondaryBtn = ({href, label}) => {
  return (
    <button><a className='bg-yellow text-brand px-5 py-3 text-2xl font-comic font-bold rounded-3xl shadow-lg' href={href}>{label}</a></button>
  )
}

export default SecondaryBtn;