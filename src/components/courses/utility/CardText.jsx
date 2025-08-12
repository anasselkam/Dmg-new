import React from 'react'

const CardText = ({ coursesData, buttonStyle = 'blue' }) => {
  const { title, subtitle, description, link, benefits } = coursesData;

  // Define button styles based on the prop
  const buttonStyles = {
    blue: 'bg-blue-400 text-black',       
    teal: 'bg-teal-400 text-black',       
    yellow: 'bg-yellow-400 text-black',   
};
   
    
  return (
    <> 
    <section>
    <div className='space-y-4'>
    <p className='text-sm uppercase bg-white text-blue-400 rounded-md inline-block px-3 py-2 font-semibold'> {subtitle}</p>
    <p className='text-2xl md:text-3xl font-bold   uppercase '>{title}</p>
    <p className='text-xs'> {description}</p>
    <div>
        <ul className='space-y-2 text-xs list-disc list-inside'>
            {benefits.map((benefit) => (
            <li>{benefit}</li>
            ))}
        </ul>
    </div>
    <button className= {`${buttonStyles[buttonStyle]} uppercase rounded-full px-8 py-2 font-bold`} >Start Learning</button>
    </div>
    </section>
    
    </>
  )
}

export default CardText