import React, {useState} from 'react'
import myAboutImage from "../../assets/Images/about.png"
import { FaCirclePlay } from "react-icons/fa6";

const About = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const handleVideoPlay = () => {
        setIsVideoPlaying(true);
    };
    const handleCloseVideo = () => {
        setIsVideoPlaying(false);
    };
  return (
    <div className='bg-[#0e0e0f] pb-16 pt-20' >
        <div className='container mx-auto'>
            <div className='py-12 px-4 md:w-4/5 max-auto flex flex-col md:flex-row itmes-center gap-8'>
            <div>

                {
                    isVideoPlaying &&(
                        <div className='fixed inset-0   bg-black bg-opacity-75 flex items-center justify-center z-50'>
                        <div className='relative   w-[80vw]  max-w-[900px] aspect-video md:w-[700px] sm:w-[500px] '>
                          <iframe 
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/OUdYme3UQL8?si=zVy2bul8oTKyrEKL"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className='rounded-lg'
                          ></iframe>
                      
                                <button 
                                    onClick={handleCloseVideo}
                                    className='absolute top-[-20px] right-[-40px] text-white text-3xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center'>
                                    <span className='text-2xl'>&times;</span>
                                </button>

                        </div>
                        </div>
                    )
                }
            </div>
                {/* Left side  */}
                <div className='md:w-1/2 w-full mb-8 md:mb-0'>
                    {
                        !isVideoPlaying ? (
                            <div className='relative'> 
                                <img src={myAboutImage} alt="video myAbout" className='w-full md:h-[446px] h-auto rounded-lg object-cover' />
                                {/* Button  */}
                                <button 
                                onClick={handleVideoPlay}
                                className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 rounded-full p-4  shadow-lg cursor-pointer' >
                                <FaCirclePlay className='size-12 text-white'/>


                                </button>


                              </div>
                        ) :(<div></div>)
                    }


                </div>

                {/* Right side  */}
                <div className='md:w-1/2 w-full  gap-4'>
                 <p className='uppercase'>About</p>
                 <p className='text-3xl font-bold'> <span className='text-yellow-400'>DMG</span> <span className= ' font-bold text-red-500'>-Germany</span></p>
                 <p className='text-sm bg-[#292929] rounded-xl py-1 inline  px-4 mt-3'>
                 A German Language Platform, A Learning Community, A Gateway to New Opportunities
                 </p> {""}
                 <br />
                 <p className='bg-[#292929] rounded-xl py-1  '>We’re passionate about empowering people through language. Our focus is on creating high-quality, engaging, and immersive learning experiences that make mastering German simple, practical, and enjoyable.</p>

                    <p className='bg-[#292929] rounded-xl py-1'>At DMG-Germany, we believe in education that’s rooted in clarity, consistency, and real-world application. Our mission is to help learners unlock their potential—whether it's for study, work, travel, or simply the joy of speaking a new language.</p>
                    <p className='bg-[#292929] rounded-xl py-1'>We stand for accessibility, inclusion, and progress. Through every lesson and every learner, we’re building a bridge between cultures, one word at a time.</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About