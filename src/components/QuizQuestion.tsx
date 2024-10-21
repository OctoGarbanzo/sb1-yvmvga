import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

interface Question {
  question: string;
  type: 'truefalse' | 'fillintheblank';
  correctAnswer: string;
  solution: string;
}

interface QuizQuestionProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ question, onAnswer }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [showSolution, setShowSolution] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isCorrect = userAnswer.toLowerCase() === question.correctAnswer.toLowerCase();
    onAnswer(isCorrect);
    if (!isCorrect) {
      setShowSolution(true);
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{question.question}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {question.type === 'truefalse' ? (
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => setUserAnswer('Verdadero')}
              className={`px-4 py-2 rounded ${
                userAnswer === 'Verdadero'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              Verdadero
            </button>
            <button
              type="button"
              onClick={() => setUserAnswer('Falso')}
              className={`px-4 py-2 rounded ${
                userAnswer === 'Falso'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              Falso
            </button>
          </div>
        ) : (
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Escribe tu respuesta aquí"
          />
        )}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
        >
          Enviar Respuesta
        </button>
      </form>
      {showSolution && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h3 className="font-semibold mb-2">Solución:</h3>
          <p>{question.solution}</p>
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;