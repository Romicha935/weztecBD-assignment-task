import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import allProperties from '../../../public/property.json'
import Card from '../../components/Card';

const Home = () => {
    const [filteredProperties,setFilteredProperties] = useState(allProperties);
    const [currentPage,setCurrentPage] = useState(1)
    const [sortOption,setSortOption] = useState('default')
    const propertiesPerPage = 4;

    const indexOfLast = currentPage * propertiesPerPage
    const indexOfFirst = indexOfLast - propertiesPerPage
   const currentProperties = filteredProperties.slice(indexOfFirst,indexOfLast);

   const totalPage = Math.ceil(filteredProperties.length / propertiesPerPage)

   const goToPage = (page) => {
    if(page >= 1 && page <= totalPage){
        setCurrentPage(page)
    }
   }

     const sortedProperties = [...filteredProperties].sort((a, b) => {
    if (sortOption === 'priceLowHigh') return a.price - b.price
    if (sortOption === 'priceHighLow') return b.price - a.price
    if (sortOption === 'bedrooms') return b.bedrooms - a.bedrooms
    if (sortOption === 'size') {
      // size string থেকে শুধু সংখ্যা বের করা
      const sizeA = parseInt(a.size)
      const sizeB = parseInt(b.size)
      return sizeB - sizeA
    }
    return 0
  })


  return (
    <div className='flex flex-col md:flex-row w-full'>
        <div className="w-full md:w-1/3">
        <Sidebar properties={allProperties} onFilter={setFilteredProperties} />
      </div>

        <div className='flex-1 p-6'>
           <div className='flex flex-col md:flex-row justify-between'>
             <h2 className='text-xl  mb-4'>Property -  showing results: ({filteredProperties.length})</h2>

             {/* sorting */}
             <select value={sortOption} onChange={(e)=> setSortOption(e.target.value)} name="" id="">
                <option value="default">Sort by: Default</option>
                <option value="priceLowHigh">price: Low to High</option>
                <option value="priceHightoLow">Price: High to Low</option>
                <option value="bedrooms">Bedrooms: Most to Least</option>
                <option value="size">Size: Learge to Small</option>
             </select>
           </div>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full  '>
                {currentProperties.map((property)=> (
                    <Card key={property.id} property={property} />
                      
                    
                ))}
            </div>

            {/* pagination */}
            <div className='flex justify-center mt-6 space-x-2'>
                {/* previous */}
                <button 
                onClick={()=> goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                 className={`px-3 py-1 border rounded cursor-pointer ${currentPage ===  1 ? " bg-pink-700 text-white" : "bg-gray-100 "}`}
                >Previous</button>

                {Array.from({length: totalPage }, (_, index) => (
                    <button key={index + 1}
                    onClick={()=> setCurrentPage(index + 1)}
                    className={`px-3 py-1 border rounded cursor-pointer ${currentPage === index + 1 ? " bg-pink-700 text-white" : "bg-gray-100 "}`}>
                        {index+1}
                    </button>
                ))}
                 {/* next */}
                <button 
                onClick={()=> goToPage(currentPage + 1)}
                disabled={currentPage === totalPage}
                 className={`px-3 py-1 border rounded cursor-pointer ${currentPage ===  totalPage ? " bg-pink-700 text-white" : "bg-gray-100 "}`}
                >Next</button>
            </div>
        </div>



    </div>
  )
}

export default Home