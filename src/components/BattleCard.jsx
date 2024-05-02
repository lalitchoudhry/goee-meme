import React from 'react'

const BattleCard = ({img, title, description, timeStamp}) => {
  return (
    <a href={`https://youtu.be/Bbwp4PbWYzw&t=${timeStamp}`} target='_blank'><div className='flex flex-col justify-between items-center xs:w-80 xs:h-80 w-72 h-72 bg-white shadow-2xl rounded-xl p-5 my-5 hover:scale-105 cursor-pointer' >
        <img className='rounded-xl' src={img} alt="img" />
        <div className='text-center  '>
            <p className='text-md text-brand font-mon font-semibold line-clamp-2 my-1'>{description}</p>
            <h5 className='flex items-center justify-between bg-brown text-white text-xl font-bold font-fred px-3 py-2 rounded-xl'>{title} <i className="bi bi-youtube"></i></h5>
        </div>
    </div></a>
  )
}

export default BattleCard;