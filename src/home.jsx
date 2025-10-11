import React, { useState } from 'react';

function Home({ startQuiz, startDemo }) {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      id: 1,
      icon: '⏱️',
      title: 'Timed Questions',
      description: 'Answer questions within 30 seconds to keep the challenge alive!',
      color: 'from-blue-100 to-blue-200',
      bgColor: 'bg-gradient-to-r from-blue-500 to-blue-600'
    },
    {
      id: 2,
      icon: '📊',
      title: 'Instant Feedback',
      description: 'Get immediate feedback on your answers with explanations.',
      color: 'from-green-100 to-green-200',
      bgColor: 'bg-gradient-to-r from-green-500 to-green-600'
    },
    {
      id: 3,
      icon: '🏆',
      title: 'Progress Tracking',
      description: 'Track your score and progress through the quiz with visual indicators.',
      color: 'from-purple-100 to-purple-200',
      bgColor: 'bg-gradient-to-r from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-6xl text-center animate-fade-in">
        <h1 className="text-5xl font-bold mb-4 text-gray-800">Welcome to BitQuiz</h1>
        <p className="text-xl mb-8 text-gray-600">Test your knowledge in web development with our interactive quiz!</p>

        {/* Interactive Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`p-6 rounded-lg shadow-md cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${hoveredFeature === feature.id ? 'ring-4 ring-blue-300' : ''}`}
              style={{ background: hoveredFeature === feature.id ? feature.bgColor : feature.color }}
              onMouseEnter={() => setHoveredFeature(feature.id)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className={`text-4xl mb-4 transform ${hoveredFeature === feature.id ? 'rotate-12' : ''} transition-transform duration-300`}>{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Creative Quiz Preview Section */}
        <div className="mb-8 p-6 bg-gradient-to-r from-indigo-50 to-violet-50 rounded-xl">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">What Makes BitQuiz Special?</h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2">
              <p className="text-lg text-gray-700 mb-4">Our quiz is designed with modern web technologies in mind. Each question challenges your understanding of core concepts while providing educational value.</p>
              <div className="flex justify-center space-x-4 mt-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">⭐</div>
                <div className="w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center animate-pulse">💡</div>
                <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center animate-spin">⚡</div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-gradient-to-br from-purple-400 to-pink-500 p-8 rounded-2xl text-white shadow-2xl transform hover:rotate-1 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-2">Sample Question Preview</h3>
                <p className="mb-4 opacity-90">What is the purpose of useState in React?</p>
                <div className="space-y-2 text-sm">
                  <div className="bg-white/20 p-2 rounded">A) To manage state</div>
                  <div className="bg-white/20 p-2 rounded">B) To handle events</div>
                  <div className="bg-white/20 p-2 rounded">C) To render components</div>
                  <div className="bg-white/20 p-2 rounded">D) To style elements</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Quiz Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['HTML', 'CSS', 'JavaScript', 'React', 'General'].map((category) => (
              <span
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-200 hover:scale-110 transform"
                style={{
                  backgroundColor: `hsl(${Math.random() * 360}, 70%, 90%)`,
                  color: `hsl(${Math.random() * 360}, 70%, 30%)`
                }}
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={startQuiz}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full w-full md:w-auto transform hover:scale-105 transition-all duration-200 text-xl shadow-lg hover:shadow-xl"
          >
            🚀 Start Full Quiz (10 Questions)
          </button>
          <button
            onClick={startDemo}
            className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-bold py-3 px-6 rounded-full w-full md:w-auto transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            👀 Try Demo Quiz (3 Questions)
          </button>
        </div>

        {/* Creative Footer Note */}
        <div className="mt-8 p-4 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg">
          <p className="text-gray-700 italic">Ready to challenge yourself? BitQuiz adapts to your learning style with engaging questions and beautiful animations!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
