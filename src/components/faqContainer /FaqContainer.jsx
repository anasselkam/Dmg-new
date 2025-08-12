// src/components/Faq/FaqContainer.jsx
import React from 'react';
import { fragen } from "../faqContainer /faqData";
import FaqItem from './FaqItem';

const FaqContainer = () => {
  return (
    <section className="bg-black text-white py-16" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {fragen.map((item) => (
            <FaqItem
              key={item.id}
              question={item.frage}
              answer={item.antwort}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqContainer;