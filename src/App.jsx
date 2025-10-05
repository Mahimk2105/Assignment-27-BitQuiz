import { useState, useEffect } from 'react';
import quizData from './QuizData.jsx';
import './App.css';

function App() {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timer, setTimer] = useState(30);
  const [feedback, setFeedback] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    const shuffled = [...quizData].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []);

  useEffect(() => {
    if (timer > 0 && !isAnswered && !showResults) {
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0 && !isAnswered) {
      handleAnswer(null);
    }
  }, [timer, isAnswered, showResults]);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    setIsAnswered(true);
    if (option === shuffledQuestions[currentQuestion].answer) {
      setScore(score + 1);
      setFeedback('Correct! 🎉');
    } else {
      setFeedback(`Incorrect. The correct answer is: ${shuffledQuestions[currentQuestion].answer}`);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setTimer(30);
      setFeedback('');
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    const shuffled = [...quizData].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setSelectedOption(null);
    setTimer(30);
    setFeedback('');
    setIsAnswered(false);
  };

  if (shuffledQuestions.length === 0) return <div>Loading...</div>;

  if (showResults) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4">
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md text-center animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Quiz Results</h1>
          <p className="text-2xl mb-4 text-gray-700">You scored {score} out of {shuffledQuestions.length}</p>
          <div className="mb-4">
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full transition-all duration-1000"
                style={{ width: `${(score / shuffledQuestions.length) * 100}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mt-2">{Math.round((score / shuffledQuestions.length) * 100)}% Correct</p>
          </div>
          <button
            onClick={restartQuiz}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full transform hover:scale-105 transition-all duration-200"
          >
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md animate-slide-up">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-bold text-gray-800">BitQuiz</h1>
            <div className="text-sm text-gray-600">Score: {score}</div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>Question {currentQuestion + 1} of {shuffledQuestions.length}</span>
            <span>Time: {timer}s</span>
          </div>
        </div>
        <div className="mb-4">
          <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
            {shuffledQuestions[currentQuestion].category || 'General'}
          </span>
        </div>
        <p className="text-lg mb-4 text-gray-800 font-medium">{shuffledQuestions[currentQuestion].question}</p>
        <div className="space-y-2">
          {shuffledQuestions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className={`w-full p-3 text-left border-2 rounded-lg transition-all duration-200 transform hover:scale-105 ${
                selectedOption === option
                  ? option === shuffledQuestions[currentQuestion].answer
                    ? 'bg-green-200 border-green-500 text-green-800'
                    : 'bg-red-200 border-red-500 text-red-800'
                  : 'bg-gray-50 hover:bg-gray-100 border-gray-300'
              }`}
              disabled={isAnswered}
            >
              {option}
            </button>
          ))}
        </div>
        {feedback && (
          <div className={`mt-4 p-3 rounded-lg text-center font-medium animate-bounce ${
            feedback.includes('Correct') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {feedback}
          </div>
        )}
        {isAnswered && (
          <button
            onClick={nextQuestion}
            className="mt-4 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-bold py-3 px-6 rounded-full w-full transform hover:scale-105 transition-all duration-200"
          >
            {currentQuestion === shuffledQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
