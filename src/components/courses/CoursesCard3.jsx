import React from 'react'
import CardText from './utility/CardText'
import CoursesImg from '../../assets/courses/courses3.jpg'


const coursesData = {
    subtitle: "Speak with Confidence",
    title:"Achieve independence in your German communication. ",
    description:"This level is for learners who want to converse fluently and understand more complex texts.",
    benefits: [
        "Discuss various topics from work and travel to personal interests.",
        "Master advanced grammar to speak with accuracy and confidence.",
        "Read and write longer texts like emails, articles, and stories.",
        "Understand conversations in different contexts, including work and social settings.",
        "Prepare for the B1 exam to certify your German proficiency.",
    ],
    link: "#",
}
const CoursesCard3 = () => {
  return (
    <>
        <section  className='py-12'>
            <div className=" bg-[#0e0e0f] rounded-3xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                    {/* Text Content  */}
                    <div className=' p-12 py-16 flex flex-col justify-center '>
                    <CardText coursesData={coursesData} buttonStyle="yellow" /> 
                    </div>
                    {/* Emages with Text  */}
                    <div  className='relative'> 
                    <img src={CoursesImg} alt="" 
                    className=' object-cover h-full' />
                    <div className='absolute inset-0 bg-gradient-to-r from-[#0e0e0f] from-2% to-transparent to-30%'>

                    </div>
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}

export default CoursesCard3