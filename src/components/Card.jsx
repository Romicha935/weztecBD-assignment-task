import React from 'react'
import { GiPathDistance } from 'react-icons/gi'
import { IoBedOutline } from 'react-icons/io5'
import { LiaBathSolid } from 'react-icons/lia'
import { useNavigate } from 'react-router-dom'

const Card = ({property}) => {
  const navigate = useNavigate()
  const handleClick = () => {
       navigate(`/property/${property.id}`)
  }

  return (
    <div onClick={handleClick} className='border cursor-pointer rounded-lg overflow-hidden  shadow-lg transition'>
      <img className='w-full p-4 h-48 object-cover rounded-lg' src={property.main_image} alt={property.title} />

      <div className='p-3 text-left'>
        <span className='flex justify-between text-gray-400'>
            <p className='items-center flex gap-1'><IoBedOutline /> Bed - {property.bedrooms} </p>
            <p className='items-center flex gap-1'><LiaBathSolid /> Bathroom- {property.bathrooms} </p>
            <p className='items-center flex gap-1'><GiPathDistance />
{property.size}</p>
        </span>
        <h3 className='font-bold text-gray-800 text-lg'>{property.title}</h3>
         <p className='text-gray-500 text-sm'><span className='text-black'>${property.price}</span>/week . {property.location} </p>

      </div>
    </div>
  )
}

export default Card