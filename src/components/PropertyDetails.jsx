import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const PropertyDetails = ({properties}) => {
    
    const {id }= useParams()
    console.log('properties',properties);

 

    const property = properties.find(p=> p.id === parseInt(id))
    if(!property) return <p>Property not found</p>
  const [mainImage, setMainImage] = useState(property.main_image);
  
  return (
    <div className='mt-10 p-4 max-w-full mx-auto'>
         <img src={property.main_image} alt={property.title}  className='w-full rounded-lg h-96 px-10 rounded-md object-cover' />

         <div className='flex w-full px-10 gap-6 mt-10'>
          {property.sub_images.map((img,idx)=> (
            <img key={idx} src={img}  alt={`${property.title} ${idx + 1}`}className=' cursor-pointer w-44 rounded-lg ' onClick={()=>setMainImage(img)} />
          ))}
         </div>
        
        </div>
  )
}

export default PropertyDetails