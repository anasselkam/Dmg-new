import React from 'react'
import CardText from './utility/CardText'
import CoursesImg from '../../assets/courses/courses2.jpg'


const coursesData = {
    subtitle: "Strengthen Your Skills",
    title:"Take the next step and improve your ability to communicate in German.",
    description:"This level is perfect for those who have completed A1 and want to expand their knowledge.",
    benefits: [
        "Increase your vocabulary to express opinions and describe experiences.",
        "Master more complex grammar including past tenses and modal verbs.",
        "Engage in real-life conversations about daily activities and personal interests.",
        "Improve reading and writing skills with practical exercises.",
        "Get exam-ready with expert guidance for the A2 certification.",
    ],
    link: "#",
}
const CoursesCard = () => {
  return (
    <>
        <section  className='py-12'>
            <div className=" bg-[#0e0e0f] rounded-3xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                     {/* Emages with Text  */}
                     <div  className='relative'> 
                    <img src={CoursesImg} alt="" 
                    className=' object-cover h-full w-full' />
                    <div className='absolute inset-0 bg-gradient-to-l md:bg-gradient-to-l from-[#0e0e0f] from-2% to-transparent to-30%'>
                    </div>
                    </div>
                    {/* Text Content  */}
                    <div className=' p-12 py-16 flex flex-col justify-center '>
                    <CardText coursesData={coursesData} buttonStyle="teal" /> 
                    </div>
                   

                </div>
            </div>
        </section>
    </>
  )
}

export default CoursesCard