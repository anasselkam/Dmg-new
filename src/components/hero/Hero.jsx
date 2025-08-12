import React from 'react'
import BgImages from '../../assets/images/hero1.jpeg'
import heroImg from '../../assets/images/hero0.png'
import ReviewImg from '../../assets/images/review.png'
import Navbar from '../navbar/Navbar'

const BgStyle = {
    backgroundImage: `url(${BgImages})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
   
}



const Hero = () => {
  return (
    <>
    <section style={BgStyle} className='p-3' >
        {/* Navbar section  */}
        <div className='mt-10 bor'>
         <Navbar />
        </div>
        
            <div className=" container min-h-[600px] grid grid-cols-1 md:grid-cols-2 ">
                 {/* Text content hero  */}
                     
                 <div className='flex flex-col justify-center h-full'>   
                    <h1 className="text-4xl md:text-4xl font-extrabold"><span className='text-red-500'>Welcome to DMG-GERMANY </span> <span className=' text-yellow-400'>your Gateway to Mastering German</span></h1>
                    <p className="text-lg mt-5">At DMG-GERMANY, we believe that learning a new language opens doors to new opportunities, cultures, and connections. Whether you're  a beginner or looking to refine your fluency, our expert instructors and immersive programs are designed to help you achieve your language GOALS.</p>
                    
                    
               
                <div>
                <button className="bg-white text-red-500 px-16 py-2 rounded-full uppercase font-bold mt-5 ">Explore courses</button>
                {/* Imges Review section  */}
                <div  className='flex items-center gap-4'>
                    <img  src={ReviewImg} alt="" className=' w-40 h-50 my-5 max-w-[120px]'  />
                    <div className='opacity-50'>
                        <p>10000+</p>
                        <p className='text-xs'>Good Learners</p>
                    </div>
                    <div>
                        <p className='text-sm'>4.8+ (600+ Ratings)</p>
                        <div>⭐️⭐️⭐️⭐️⭐️⭐️</div>
                    </div>
                </div>
                </div>
                </div>
                
                {/* Image content hero  */}
                <div className='flex justify-center items-end'>
                    <div className='w-full h-full flex justify-center items-end '> 
                    <img src={heroImg} alt=""  className='relative top-14 items-end md:top-12'/>
                    </div>
                </div>
                
            </div>
       
    </section>
    </>
  )
}

export default Hero