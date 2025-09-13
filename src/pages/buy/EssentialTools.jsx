import React from "react";
import paymentImg from '../../assets/img/Paymentimg.png'

export default function EssentialTools() {
  return (
    <div className="bg-amber-50  py-3  px-6 md:px-20">
        <div className="text-center max-w-6xl   mx-auto mb-12">
            <span className="bg-gradient-to-r from-gray-400 to-gray-200 py-1 px-2 uppercase text-xs rounded-full text-gray-700 ">Essential tools</span>
            <h2 className=" font-extrabold text-3xl mt-3 text-gray-800">Essential Tools <br />Zero Distractions</h2>
            <p className="text-gray-600  text-sm px-10"> Create diverse products on the platform and leverage our <br /> powerful
          tools to drive sales within and beyond GrowHubs.</p>

          <div className="grid grid-cols-1 text-left mt-8 md:grid-cols-3 gap-3 max-w-6xl md:px-30 mx-auto">
            {/* payments */}
            <div className="bg-white px-2 py-2 md:px-6 md:py-8  rounded-xl mb-6">
               <h3 className="text-gray-600 font-bold flex items-center justify-between">Payments <img className="h-6 w-6" src={paymentImg} alt="" /> </h3>
               <p className="text-xs text-gray-500 mb-2"> Responsibly sourced eco-friendly fabrics for a better tomorrow.</p>
                <p className="text-yellow-500 text-xs">Learn more →</p>
            </div>
            {/* Analytics */}
            <div className="bg-white px-2 py-2 md:px-6 md:py-8  rounded-xl mb-6">
               <h3 className="text-gray-600 font-bold flex items-center justify-between">Analytics <img className="h-6 w-6" src={paymentImg} alt="" /> </h3>
               <p className="text-xs text-gray-500 mb-2"> Understand your growth with smart, built-in analytics..</p>
              <a href="#" className="text-yellow-500 text-xs">Learn more →</a>
            </div>
            {/* newsletter */}
            <div className="bg-white px-2 py-2 md:px-6 md:py-8  rounded-xl mb-6">
               <h3 className="text-gray-600 font-bold flex items-center justify-between">Newsletters <img className="h-6 w-6" src={paymentImg} alt="" /> </h3>
               <p className="text-xs text-gray-500 mb-2"> Build your audience with engaging, branded newsletter.</p>
               <a href="#" className="text-yellow-500 text-xs">Learn more →</a>
            </div>
            {/* pages */}
            <div className="bg-white px-2 py-2 md:px-6 md:py-8  rounded-xl mb-6">
               <h3 className="text-gray-600 font-bold flex items-center justify-between">Pages <img className="h-6 w-6" src={paymentImg} alt="" /> </h3>
               <p className="text-xs text-gray-500 mb-2"> Showcase your expertise with a personal profile that sells for you.</p>
                <a href="#" className="text-yellow-500 text-xs">Learn more →</a>
            </div>
            {/* contacts */}
            <div className="bg-white px-2 py-2 md:px-6 md:py-8rounded-xl mb-6">
               <h3 className="text-gray-600 font-bold flex items-center justify-between">Contacts <img className="h-6 w-6" src={paymentImg} alt="" /> </h3>
               <p className="text-xs text-gray-500 mb-2"> Organize your contacts and turn them into your most valuable asset.</p>
               <a href="#" className="text-yellow-500 text-xs">Learn more →</a>
            </div>
            {/* payments */}
            <div className="bg-white px-2 py-2 md:px-6 md:py-8   rounded-xl mb-6">
               <h3 className="text-gray-600 font-bold flex items-center justify-between">Emails <img className="h-6 w-6" src={paymentImg} alt="" /> </h3>
               <p className="text-xs text-gray-500 mb-2">   Showcase your expertise with a personal profile that sells for you.</p>
                <a href="#" className="text-yellow-500 text-xs">Learn more →</a>
            </div>
            {/* go to cell */}
            <div className="bg-white px-2 py-2 md:px-6 md:py-8  rounded-xl mb-6">
               <h3 className="text-gray-600 font-bold flex items-center justify-between">Co-sell network <img className="h-6 w-6" src={paymentImg} alt="" /> </h3>
               <p className="text-xs text-gray-500 mb-2"> Co-sell network</p>
                 <a href="#" className="text-yellow-500 text-xs">Learn more →</a>
            </div>
            {/* enterprenureship */}
            <div className="bg-gradient-to-r from-gray-500 to-[#770c41] px-2 py-2 md:px-6 md:py-8 md:col-span-2   rounded-xl mb-6">
               <h3 className="text-gray-200 font-bold flex items-center justify-between">Enterprise plan <img className="h-6 w-6" src={paymentImg} alt="" /> </h3>
               <p className="text-xs text-gray-100 mb-2">  Full white-label platform hosted on a dedicated, auto-scaling
                server. Includes branding freedom, private content protection,
                and 24/7 service availability.</p>
                <p className="text-yellow-500 text-xs">Learn more →</p>
            </div>
            

    </div>
    </div>
    </div>
   
  );
}
