import React from 'react'
import Brand1 from "../../assets/Brand/brand1.svg"
import Brand2 from "../../assets/Brand/brand2.svg"
import Brand3 from "../../assets/Brand/brand3.svg"
import Brand4 from "../../assets/Brand/brand4.svg"

import Brand7 from "../../assets/Brand/brand7.svg"


const Brand = () => {
  return (
    <section className='bg-gray-700' >
        <div className="container" flex justify-around py-5>
           
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10 py-6">
                <img src={Brand1} alt="" className="w-full h-30  object-cover rounded-lg max-w-[100px]" />
                <img src={Brand2} alt="" className="w-full h-30 object-cover rounded-lg max-w-[100px]" />
                <img src={Brand3} alt="" className="w-full h-20 object-cover rounded-lg max-w-[100px]" />
                <img src={Brand4} alt="" className="w-full h-20 object-cover rounded-lg max-w-[100px]" />
                <img src={Brand7} alt="" className="w-full -h-15 object-cover  rounded-lg max-w-[100px]" />
            </div>
            
           
        </div>
    </ section>
  )
}

export default Brand