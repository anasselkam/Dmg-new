import React from 'react';

const TitleScreen = ({ next }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-xl w-full text-center">
      <h1 className="text-3xl font-bold mb-4">Deutsch Einstufungstest</h1>
      <p className="text-gray-600 mb-6">
        Testen Sie Ihr Wissen der deutschen Sprache. Klicken Sie auf die Schaltfläche unten, um den Test zu starten.
      </p>
      <button
        onClick={next}
        className="bg-yellow-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-300"
      >
        Test starten
      </button>
    </div>
  );
};

export default TitleScreen;