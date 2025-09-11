import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import allProperties from '../../../public/house.json'
import Card from '../../components/Card';

const Home = () => {
    const [filteredProperties,setFilteredProperties] = useState(allProperties);

  return (
    <div className='flex'>
        <Sidebar properties={allProperties} onFilter={setFilteredProperties} />

        <div className='flex-1 p-6'>
            <h2 className='text-xl  mb-4'>Property -  showing results: ({filteredProperties.length})</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-1 '>
                {filteredProperties.map((property)=> (
                    <Card key={property.id} property={property} >
                      
                    </Card>
                ))}
            </div>
        </div>



    </div>
  )
}

export default Home