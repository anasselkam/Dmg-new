import React, { useState } from 'react';
import questions from '../quiz/questions';

const QuizPage = ({ next, setScore }) => {
  const [current, setCurrent] = useState(0);
  const [points, setPoints] = useState({ A1: 0, A2: 0, B1: 0 });

  const handleAnswer = (correct) => {
    const currentLevel = questions[current].level;
    const newPoints = { ...points };
    if (correct) {
      newPoints[currentLevel]++;
    }

    if (current + 1 < questions.length) {
      setPoints(newPoints);
      setCurrent(prev => prev + 1);
    } else {
      setScore(newPoints);
      next();
    }
  };

  return (
    <div className="bg-black text-white p-8 rounded-lg shadow-md max-w-xl w-full">
      <h2 className="text-lg font-bold mb-4">Frage {current + 1} von {questions.length}</h2>
      <p className="mb-6 text-white">{questions[current].question}</p>
      <div className="grid gap-4">
        {questions[current].options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(opt === questions[current].answer)}
            className="bg-black hover:bg-gray-400 px-4 py-2 rounded"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizPage;