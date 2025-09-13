import React, { useState } from 'react'
import { amenities, suburbs, types } from './../utils/filters';

const Sidebar = ({properties,onFilter}) => {
    const [minPrice,setMinPrice] = useState(0);
    const [maxPrice,setMaxPrice] = useState(1000)
    const [selectedSuburs,setSelectedSuburs] = useState([])
    const [selectedType,SetSelectedType] = useState([])
    const [selectedAmenities,setSelectedAmenities] = useState([])
    
    const handleFilter = () => {
        let filtered  = [...properties];

        if(minPrice) filtered = filtered.filter(((p)=> p.price >= minPrice))
        if(maxPrice) filtered = filtered.filter(((p)=> p.price <= maxPrice));

        if(selectedSuburs.length) filtered = filtered.filter((p)=> selectedSuburs.includes(p.suburb))

        if(selectedType.length) filtered = filtered.filter((p)=> selectedType.includes(p.type))
        if(selectedAmenities.length) filtered = filtered.filter((p)=> selectedAmenities.every((a)=> p.amenities.includes(a)))

        onFilter(filtered)

    }

    const toggleSection = (value,state,setState) => {
        if(state.includes(value))  setState(state.filter((item)=> item !== value))
            else setState([...state,value])
    }
  return (
    <div className='p-4 border-r w-1/3'>
        <div>
            <div className='flex border border-gray-200 items-center text-sm p-2 justify-between'>
            <h3>Property Prefarance</h3>
            <button className='bg-gray-200 p-1'>Root Filter</button>
        </div>
           
           {/* rent budget */}
           <div className='mb-4  '>
           <span className='flex items-center justify-between'> <h3 className='font-semibold mb-2'>Rent Budget</h3>
            -</span>
             <div className='border flex flex-col md:flex-row  p-2 border-gray-200'>
                 <div className='relative '>
                <input type="range" min={0} max={1000} value={minPrice}
                 onChange={(e)=> setMinPrice(Number(e.target.value))}
                className='w-full h-1 bg-pink-800 rounded-lg appearance-none' />

                {/* <input type="range" min={0} max={1000} value={maxPrice}
                 onChange={(e)=> setMaxPrice(Number(e.target.value))}
                className='w-full absolute h-1 bg-pink-800 rounded-lg appearance-none' /> */}

               </div>
               <div className='flex flex-col md:flex-row justify-between items-center px-4 gap-1'>
                <span className='bg-gray-200 py-0 px-4 rounded-lg '><p className='text-sm text-gray-400'>minimum</p> ${minPrice}</span>
                <span className='bg-gray-200 py-0 px-4 rounded-lg '><p className='text-sm text-gray-400'>maximum</p> ${maxPrice}</span>
            
               </div>
             </div>
           </div>
   
             {/* suburbs  */}
             <div className='mb-4 border border-gray-200 p-2'>
                <span className='flex justify-between border-b border-gray-200 items-center  '>
                    <h3 className='font-semibold'>Suburb</h3> -
                </span>
               <div className='ml-0 flex flex-col gap-1 items-start text-start text-[13px]'>
                 {suburbs.map((suburb) => (
                 <label htmlFor="" key={suburb} className='block mt-1 felx items-center' >
                    <input className='accent-pink-800'  type="checkbox" checked={selectedSuburs.includes(suburb)} 
                    onChange={()=> toggleSection(suburb,selectedSuburs,setSelectedSuburs)}
                    />
                    <span> {suburb}</span>
                 </label>      
                ))}
               </div>
             </div>
             {/* property type  */}
             <div className='mb-4 border border-gray-200 p-2'>
                <span className='flex justify-between border-b border-gray-200 items-center  '>
                    <h3 className='font-semibold'>Property Type</h3> -
                </span>
               <div className='ml-0 flex flex-col gap-1 items-start text-start text-[13px]'>
                 {types.map((type) => (
                 <label htmlFor="" key={type} className='block mt-1 felx items-center' >
                    <input className='accent-pink-800'  type="checkbox" checked={selectedType.includes(type)} 
                    onChange={()=> toggleSection(type,selectedType,SetSelectedType)}
                    />
                    <span> {type}</span>
                 </label>      
                ))}
               </div>
             </div>
             {/* amenities  */}
             <div className='mb-4 border border-gray-200 p-2'>
                <span className='flex justify-between border-b border-gray-200 items-center  '>
                    <h3 className='font-semibold'>Amenities</h3> -
                </span>
               <div className='ml-0 flex flex-col gap-1 items-start text-start text-[13px]'>
                 {amenities.map((amenity) => (
                 <label htmlFor="" key={amenity} className='block mt-1 felx items-center ' >
                    <input className='accent-pink-800' type="checkbox" checked={selectedAmenities.includes(amenity)} 
                    onChange={()=> toggleSection(amenity,selectedAmenities,setSelectedAmenities)}
                    />
                    <span > {amenity}</span>
                 </label>      
                ))}
                <button className='text-pink-700'><a href="See more">See More</a></button>
               </div>
             </div>

        </div>
    </div>
  )
}

export default Sidebar