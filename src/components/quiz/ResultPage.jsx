const ResultPage = ({ score }) => {
    // Calculate level based on correct answers per level
    const getLevel = () => {
      if (score.B1 >= 8) return 'B1';
      if (score.A2 >= 8) return 'A2';
      return 'A1';
    };
  
    const totalScore = score.A1 + score.A2 + score.B1;
    const level = getLevel();
  
    return (
      <div className="bg-black p-8 rounded-lg shadow-md max-w-xl w-full text-center">
        <h2 className="text-2xl font-bold mb-6">Ihr Ergebnis</h2>
        
        <div className="mb-8">
          <p className="text-4xl font-bold text-yellow-400 mb-2">{totalScore}/30</p>
          <p className="text-white">Gesamtpunkte</p>
        </div>
  
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="border p-3 rounded">
            <p className="font-bold">A1</p>
            <p>{score.A1}/10</p>
          </div>
          <div className="border p-3 rounded">
            <p className="font-bold">A2</p>
            <p>{score.A2}/10</p>
          </div>
          <div className="border p-3 rounded">
            <p className="font-bold">B1</p>
            <p>{score.B1}/10</p>
          </div>
        </div>
  
        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-lg font-semibold">Ihr Niveau: <span className="text-yellow-600">{level}</span></p>
        </div>
      </div>
    );
  };
  
  export default ResultPage;