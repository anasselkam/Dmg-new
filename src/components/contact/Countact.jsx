import React, { useState } from 'react';
import { FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { FaEnvelope, FaGlobe } from 'react-icons/fa6';

const Countact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");

    const [country, setCountry] = useState("");
    const [message, setMessage] = useState("");
    const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, phone, country, message };

    if (!name || !email || !message) {
      alert("Please fill in the required fields.");
      return;
    }

    alert("Your message has been submitted!");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setName("");
    setEmail("");
    setPhone("");
    setCountry("");
    setMessage("");
  };

  return (
    <div className='bg-black flex items-center justify-center py-28 px-8'>
      <div className='container mx-auto'>
        <div className='md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8'>

          {/* Left Side */}
          <div className='space-y-8'>
            <h2 className='text-yellow-400 font-bold text-lg mt-2'>Make an appointment</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='flex items-start gap-4'>
                <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                  <FaUserAlt className='text-yellow-400' />
                </div>
                <div className='space-y-1'>
                  <h3 className='text-lg font-medium text-white'>Expert Therapist</h3>
                  <p className='text-gray-300'>Our support team is available 24/7 to answer your questions and help you stay on track.</p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                  <FaEnvelope className='text-yellow-400' />
                </div>
                <div className='space-y-1'>
                  <h3 className='text-lg font-medium text-white'>High Quality Core</h3>
                  <p className='text-gray-300'>We’re committed to providing top-tier courses, resources, and support tailored to your success.</p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                  <FaPhoneAlt className='text-yellow-400' />
                </div>
                <div className='space-y-1'>
                  <h3 className='text-lg font-medium text-white'>Trusted Clinic</h3>
                  <p className='text-gray-300'>DMG-Germany is a trusted name with a reputation for results and student satisfaction.</p>
                </div>
              </div>


              <div className='flex items-start gap-4'>
                <div className='flex items-center justify-center rounded-full bg-[#ffffff1a] p-3'>
                  <FaGlobe className='text-yellow-400' />
                </div>
                <div className='space-y-1'>
                  <h3 className='text-lg font-medium text-white'>24 Hour Service</h3>
                  <p className='text-gray-300'>Our support team is available 24/7 to answer your questions and help you stay on track.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div>
            <div className='space-y-8 p-8 bg-white shadow-xl rounded-md'>
              <h3 className='text-black text-4xl font-bold mb-4'>Book Appointment</h3>
              <form onSubmit={handleSubmit} className='space-y-8'>
                <div className='flex sm:flex-row flex-col gap-4'>
                  <input
                    onChange={e => setName(e.target.value)}
                    value={name}
                    type="text"
                    placeholder='Name'
                    className='text-black w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow'
                    required
                  />
                  <input
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder='Email Address'
                    className='text-black w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow'
                    required
                  />
                </div>

                <div className='text-black flex sm:flex-row flex-col gap-4'>
                  <input
                    onChange={e => setPhone(e.target.value)}
                    value={phone}
                    type="tel"
                    placeholder='Contact Number'
                    className='text-black w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow'
                  />
                  <input
                    onChange={e => setCountry(e.target.value)}
                    value={country}
                    type="text"
                    placeholder='Country'
                    className='text-black w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow'
                  />
                </div>

                <textarea
                  onChange={e => setMessage(e.target.value)}
                  value={message}
                  rows="5"
                  placeholder='Write your message...'
                  className='text-black w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow'
                  required
                ></textarea>

                <div className='flex justify-center'>
                  <button
                    type='submit'
                    className='bg-yellow-400 hover:bg-yellow-300 px-8 py-3 text-white font-semibold rounded-full shadow-md'
                  >
                    Submit
                  </button>

                </div>
              </form>
              
            </div>
          </div>

        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className='fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center space-y-4'>
            <h2 className='text-2xl font-bold text-black'>Thank you!</h2>
            <p className='text-gray-700'>Your message has been submitted successfully.</p>
            <button
              onClick={closeModal}
              className='mt-4 px-6 py-2 bg-yellow-400 hover:bg-yellow-300 text-white font-semibold rounded-full'
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Countact;
