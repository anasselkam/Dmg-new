import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Brand from './components/brand/Brand';
import Courses from './components/courses/Courses';
import NumberCounter from './components/numberCounter/NumberCounter';
import About from './components/about/About';
import Pricing from './components/pricing/Pricing';
import Countact from './components/contact/Countact';

import TitleScreen from './components/quiz/TitleScreen';
import QuizPage from './components/quiz/QuizPage';
import ResultPage from './components/quiz/ResultPage';
import FaqContainer from './components/faqContainer /FaqContainer';
import Footer from './components/footer/Footer';

const App = () => {
  const [step, setStep] = useState(1);
  const [score, setScore] = useState({ A1: 0, A2: 0, B1: 0 });

  return (
    <main className='overflow-x-hidden font-primary text-white bg-[#242424]'>
     
      <Navbar />
      <Hero />
      <Brand />
      <Courses />
      <NumberCounter />
      <About />
      <Pricing />
      <Countact />

      {/* German Quiz Section */}
      <section className="min-h-screen flex items-center justify-center p-6 bg-[#1a1a1a]">
        {step === 1 && <TitleScreen next={() => setStep(2)} />}
        {step === 2 && <QuizPage next={() => setStep(3)} setScore={setScore} />}
        {step === 3 && <ResultPage score={score} />}
      </section>
      <FaqContainer />
      <Footer />
    </main>
  );
};

export default App;
