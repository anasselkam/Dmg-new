import React, { useState } from 'react';
import iconImg from "../../assets/Images/icon.png";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const packages = [
    {
      name: "Starter Plan",
      monthlyPrice: 499,
      yearlyPrice: 4990,
      description: "Perfect for beginners who want to get started with the basics.",
      features: [
        "Access to A1 level course",
        "2 live classes per week",
        "PDF materials & vocabulary lists",
        "Weekly quizzes",
        "Email support",
      ],
    },
    {
      name: "Standard Plan",
      monthlyPrice: 899,
      yearlyPrice: 8990,
      description: "Ideal for learners who want more interaction and structure.",
      features: [
        "Access to A1 & A2 level courses",
        "4 live classes per week",
        "Grammar & conversation sessions",
        "Access to past class recordings",
        "Instructor feedback",
        "WhatsApp community support",
      ],
    },
    {
      name: "Premium Plan",
      monthlyPrice: 1299,
      yearlyPrice: 12990,
      description: "For serious learners aiming for fluency and certifications.",
      features: [
        "Full access to all levels (A1 to B2)",
        "Daily live classes",
        "Personalized coaching sessions",
        "Mock exams & certification prep",
        "Priority support",
        "Access to exclusive resources",
      ],
    },
  ];

  return (
    <div className='md:px-14 p-4 max-w-screen-xl mx-auto py-10'>
      <div className='text-center'>
        <h2 className='md:text-5xl text-3xl font-bold text-white mb-2'>
          Here are all our plans
        </h2>
        <p className='px-4 mb-1'>Choose the plan that fits your goals and schedule</p>
        <p className='text-gray-300'>At DMG-Germany, we offer flexible and affordable pricing to suit every learner — whether you're just starting out or preparing for official exams.</p>

        {/* Toggle pricing */}
        <div className='mt-10 flex justify-center items-center'>
          <span className='mr-4 text-xl font-semibold'>Monthly</span>
          <label htmlFor="toggle" className='relative inline-block w-14 h-6'>
            <input
              type="checkbox"
              id="toggle"
              className="hidden"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
            <div className='w-full h-full bg-orange-100 rounded-full transition duration-200'></div>
            <div
              className={`w-6 h-6 bg-red-500 rounded-full absolute top-0 transition-all duration-300 ${isYearly ? "left-8 bg-yellow-400" : "left-0"}`}
            ></div>
          </label>
          <span className='ml-4 text-xl font-semibold'>Yearly</span>
        </div>
      </div>

      {/* Pricing cards */}
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14'>
        {packages.map((pkg, index) => (
          <div key={index} className='border py-10 px-6 rounded-lg shadow-xl bg-white/5 backdrop-blur-sm'>
            <h3 className='text-3xl font-bold text-center text-yellow-400'>{pkg.name}</h3>
            <p className='text-white text-center my-4'>{pkg.description}</p>
            <p className='text-center text-white text-2xl font-semibold'>
              {isYearly ? `${pkg.yearlyPrice} MAD` : `${pkg.monthlyPrice} MAD`}
              <span className='text-base text-gray-400 font-medium'> /{isYearly ? 'year' : 'month'}</span>
            </p>

            <ul className='mt-6 space-y-3 text-white'>
              {pkg.features.map((feature, i) => (
                <li key={i} className='flex items-start gap-2'>
                  <img src={iconImg} alt="✔" className='w-5 h-5 mt-1' />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className='mt-8 flex justify-center'>
              <button className='bg-yellow-400 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition'>Get started</button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer info */}
      <div className='text-center mt-10 text-white'>
        <p className='font-semibold text-yellow-300'>🎓 Special Offer for Students – 15% OFF on all plans!</p>
        <p>💳 Pay monthly, cancel anytime.</p>
        <p>📞 Need help choosing? Contact us at <a href="mailto:anass.elkhamlichi.pro@gmail.com" className='underline'>anass.elkhamlichi.pro@gmail.com</a></p>
      </div>
    </div>
  );
};

export default Pricing;
