import React, { useState } from 'react'
import tabimg from '../../assets/img/tabImg.jpg'

import { FaBookOpen, FaUsers, FaChalkboardTeacher, FaShoppingBag } from "react-icons/fa";
import TrustedSection from '../../components/TrustedSection';

const tabs = [
  {
    id: "courses",
    title: "Courses",
    description:
      "Turn your knowledge into structured, sellable products. Build online, drip, academic, or challenge-based courses with built-in tools for gamification, accountability, and engagement. Every course is optimized to deliver value and generate recurring income.",
    image: tabimg,
    icon: <FaBookOpen />,  
  },
  {
    id: "communities",
    title: "Communities",
    description:
      "Create thriving online communities with built-in engagement tools. Encourage collaboration, discussions, and connections with zero hassle.",
    image: tabimg,
    icon: <FaUsers />,  
  },
  {
    id: "coaching",
    title: "Coaching & Consulting",
    description:
      "Provide one-on-one or group coaching sessions, manage schedules, and offer consulting services with integrated tools for payments and bookings.",
    image: tabimg,
    icon: <FaChalkboardTeacher />,   
  },
  {
    id: "merchandise",
    title: "Merchandise",
    description:
      "Sell your own branded products alongside your digital offerings with seamless integration and zero setup headaches.",
    image: tabimg,
    icon: <FaShoppingBag />,  
  },
];

const TabSection = () => {
    const [activeTap,setActiveTap] = useState("courses")
   
 


 const activeContent = tabs.find((tab) => tab.id === activeTap);

  return (
    <div className='w-full bg-gradient-to-b from-pink-50 to-pink-100 py-20 px-4"'>
        <TrustedSection/>
        <div className='max-w-6xl mx-auto text-center mb-12'>
            <span className='bg-gradient-to-r from-pink-200 to-pink-400 text-gray-600 text-xs py-1 px-2 rounded-full font-semibold'>DIVERSIFY REVENUE STREAM</span>
            <h2 className='text-3xl md:text-5xl font-extrabold text-gray-700 '> Maximise earnings with <br /> limitless revenue streams.</h2>
            <p className='text-gray-500 max-w-3xl mx-auto'>Create and sell courses, consulting services, and communities – with
          Zero marketing cost and a built-in sales network.</p>
        </div>
        {/* tabs */}
         <div className='  items-center justify-center rounded-full'>
        <div className='flex  flex-wrap justify-center gap-3 mb-10 '>
            {tabs.map((tab)=> (
               
                <button 
                onClick={()=> setActiveTap(tab.id)}
                key={tab.id} className={`px-4 py-2 flex items-center gap-1 rounded-full text-sm font-medium border transition ${activeTap === tab.id ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"}`}>
                    {tab.icon}{tab.title}
                </button>
            
            ))}
                </div>

                 {/* Active Tab Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-[#42041f] to-pink-200 gap-10 items-center md:max-w-6xl max-w-2xl mx-auto rounded-l-full">
        {/* Left Content */}
        <div className=" text-white rounded-3xl md:w-[550px] w-full text-start p-6 md:pl-16 lg:pl-44 ">
          <h3 className="text-2xl font-semibold mb-4">{activeContent.title}</h3>
          <p className="text-gray-300 mb-6  text-left w-full ">{activeContent.description}</p>
          <button className="bg-[#2f0316]  px-5 py-2 rounded-full font-medium  transition">
            Learn More
          </button>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-l-full  rounded-3xl">
            <img
              src={activeContent.image}
              alt={activeContent.title}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        </div>
        
    </div>
    </div>
  )
}

export default TabSection