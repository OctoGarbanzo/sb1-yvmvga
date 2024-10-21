import React, { useState } from 'react';
import Confetti from 'react-confetti';
import toast, { Toaster } from 'react-hot-toast';
import { Brain } from 'lucide-react';
import QuizQuestion from './components/QuizQuestion';
import { questions } from './data/questions';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
      setShowConfetti(true);
      toast.success('¡Correcto! ¡Bien hecho!');
      setTimeout(() => setShowConfetti(false), 3000);
    } else {
      toast.error('Incorrecto. ¡Inténtalo de nuevo!');
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      toast.success(`¡Quiz completado! Tu puntuación: ${score + (isCorrect ? 1 : 0)} de ${questions.length}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex flex-col items-center justify-center p-4">
      <Toaster position="top-center" />
      {showConfetti && <Confetti />}
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-xl p-8">
        <div className="flex items-center justify-center mb-8">
          <Brain className="text-indigo-600 w-12 h-12 mr-4" />
          <h1 className="text-3xl font-bold text-gray-800">Quiz de Distribución Hipergeométrica</h1>
        </div>
        {currentQuestion < questions.length ? (
          <QuizQuestion
            question={questions[currentQuestion]}
            onAnswer={handleAnswer}
          />
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">¡Quiz completado!</h2>
            <p className="text-xl">
              Tu puntuación final: {score} de {questions.length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;