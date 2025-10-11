import React from 'react';

function Results({ score, totalQuestions, restartQuiz, backToHome }) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const getMessage = () => {
    if (percentage >= 80) return "Excellent! You're a web dev expert!";
    if (percentage >= 60) return "Great job! Keep learning!";
    if (percentage >= 40) return "Good effort! Review the topics and try again.";
    return "Keep practicing! You've got this!";
  };

  const getEmoji = () => {
    if (percentage >= 80) return "🏆";
    if (percentage >= 60) return "🎉";
    if (percentage >= 40) return "👍";
    return "💪";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md text-center animate-fade-in">
        <div className="text-6xl mb-4">{getEmoji()}</div>
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Quiz Complete!</h1>
        <p className="text-2xl mb-4 text-gray-700">You scored {score} out of {totalQuestions}</p>
        <div className="mb-6">
          <div className="w-full bg-gray-200 rounded-full h-6 mb-2">
            <div
              className="bg-gradient-to-r from-green-400 to-blue-500 h-6 rounded-full transition-all duration-1000"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <p className="text-lg text-gray-600">{percentage}% Correct</p>
        </div>
        <p className="text-lg mb-6 text-gray-700">{getMessage()}</p>
        <div className="space-y-4">
          <button
            onClick={restartQuiz}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full w-full transform hover:scale-105 transition-all duration-200"
          >
            🔄 Take Quiz Again
          </button>
          <button
            onClick={backToHome}
            className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-bold py-3 px-6 rounded-full w-full transform hover:scale-105 transition-all duration-200"
          >
            🏠 Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Results;
