import React from 'react'
import CoursesCard from './CoursesCard'
import CoursesCard2 from './CoursesCard2'
import CoursesCard3 from './CoursesCard3'

const Courses = () => {
  return (
    <section className='py-12 md:py-24'>
        <div className="container">
            {/* Title  */}
            <div className='text-center'>
            <p className='text-sm'>Courses</p>
            <h1 className='text-3xl md:text-4xl font-bold'>Find the Perfect German Course for You!</h1>
            </div>
            {/* CoursesCard stard */}
            <CoursesCard />
            <CoursesCard2 />
           <CoursesCard3 />
        </div>
    </section>
  )
}

export default Courses