import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-lg mb-18">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="BitQuiz Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-white text-xl md:text-2xl font-bold">BitQuiz</h1>
        </div>
        <div className="hidden md:block text-white text-sm">Test Your Web Dev Knowledge</div>
      </div>
    </nav>
  );
}

export default Navbar;
