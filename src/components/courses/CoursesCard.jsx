import React from 'react'
import CardText from './utility/CardText'
import CoursesImg from '../../assets/courses/courses1.jpg'


const coursesData = {
    subtitle: "Build Your Foundation",
    title:"Start your journey with the basics of the German language.",
    description:"This level is designed for beginners who want to develop essential communication skills.",
    benefits: [
        "Learn basic vocabulary and grammar to form simple sentences.",
        "Practice everyday conversations for travel, shopping, and introductions.",
        "Understand spoken and written German in common situations.",
        "Gain confidence in speaking and listening through interactive exercises.",
        "Prepare for the A1 exam with structured lessons and practice tests.",
    ],
    link: "#",
}
const CoursesCard = () => {
  return (
    <>
        <section  className='py-12'>
            <div className=" bg-[#0e0e0f] rounded-3xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                    {/* Text Content  */}
                    <div className=' p-12 py-16 flex flex-col justify-center '>
                    <CardText coursesData={coursesData} buttonStyle="blue" />
                    </div>
                    {/* Emages with Text  */}
                    <div  className='relative'> 
                    <img src={CoursesImg} alt="" 
                    className=' object-cover h-full' />
                    <div className='absolute inset-0 bg-gradient-to-r md:bg-gradient-to-r from-[#0e0e0f] from-2% to-transparent to-30%'>

                    </div>
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}

export default CoursesCard