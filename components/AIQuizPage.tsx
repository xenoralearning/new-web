import React, { useState, useMemo } from 'react';
import { RotateCcw, ChevronRight } from 'lucide-react';
import Reveal from './Reveal';
import { simpleQuestions, mediumQuestions, hardQuestions, QuizQuestion } from '../constants/quizData';

type DifficultyLevel = 'simple' | 'medium' | 'hard';
type QuizState = 'selection' | 'playing' | 'results';

interface QuizSession {
  level: DifficultyLevel;
  questions: QuizQuestion[];
  currentQuestionIndex: number;
  answers: (number | null)[];
  score: number;
}

/**
 * AIQuizPage: Educational quiz with three difficulty levels
 * - Simple: 50 basic AI awareness questions
 * - Medium: 50 conceptual AI questions
 * - Hard: 50 advanced AI understanding questions
 *
 * Flow:
 * 1. User selects difficulty level
 * 2. 5 random unique questions from that level
 * 3. Answer each question with instant feedback
 * 4. View final score and results
 */

// Difficulty level configuration
const difficultyConfig: Record<DifficultyLevel, { label: string; color: string; description: string; emoji: string }> = {
  simple: {
    label: 'Simple',
    color: 'from-green-500 to-emerald-600',
    description: 'Perfect for beginners! Basic AI concepts and everyday usage.',
    emoji: '🌱'
  },
  medium: {
    label: 'Medium',
    color: 'from-blue-500 to-cyan-600',
    description: 'For learners ready to go deeper. How AI works conceptually.',
    emoji: '📚'
  },
  hard: {
    label: 'Hard',
    color: 'from-purple-500 to-pink-600',
    description: 'Advanced learner? Explore AI ethics, limitations, and theory.',
    emoji: '🧠'
  }
};

// Helper function to shuffle array (Fisher-Yates)
const shuffleArray = <T,>(arr: T[]): T[] => {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Helper function to get 5 random unique questions
const getRandomQuestions = (allQuestions: QuizQuestion[]): QuizQuestion[] => {
  const shuffled = shuffleArray(allQuestions);
  return shuffled.slice(0, 5);
};

interface DifficultySelectionProps {
  onSelect: (level: DifficultyLevel) => void;
}

const DifficultySelection: React.FC<DifficultySelectionProps> = ({ onSelect }) => {
  return (
    <div className="space-y-8">
      <Reveal>
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Choose Your Level
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Select a difficulty level to begin. You'll answer 5 random questions.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {(['simple', 'medium', 'hard'] as DifficultyLevel[]).map(level => {
          const config = difficultyConfig[level];
          return (
            <Reveal key={level} delay={(['simple', 'medium', 'hard'].indexOf(level) * 100)}>
              <button
                onClick={() => onSelect(level)}
                className={`group p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${config.color} text-white transition-all duration-300 hover:scale-105 active:scale-95 transform hover:shadow-2xl cursor-pointer border-2 border-white/20 hover:border-white/40`}
              >
                <div className="text-5xl mb-4">{config.emoji}</div>
                <h3 className="text-2xl font-bold mb-2">{config.label}</h3>
                <p className="text-sm opacity-90 leading-relaxed group-hover:opacity-100 transition-opacity">
                  {config.description}
                </p>
                <div className="mt-4 flex items-center justify-end text-sm opacity-75 group-hover:opacity-100 transition-opacity">
                  <span>Start Quiz</span>
                  <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={300}>
        <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 p-4 rounded-lg text-center text-sm text-slate-700 dark:text-slate-300">
          <p>💡 <span className="font-semibold">Tip:</span> Each quiz contains 5 random questions so you can practice multiple times!</p>
        </div>
      </Reveal>
    </div>
  );
};

interface QuizPlayProps {
  session: QuizSession;
  onAnswer: (optionIndex: number) => void;
}

const QuizPlay: React.FC<QuizPlayProps> = ({ session, onAnswer }) => {
  const question = session.questions[session.currentQuestionIndex];
  const userAnswer = session.answers[session.currentQuestionIndex];
  const isAnswered = userAnswer !== null;
  const isCorrect = userAnswer === question.correct;
  const config = difficultyConfig[session.level];

  return (
    <div className="space-y-6">
      {/* Header with Progress */}
      <Reveal>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <span className={`text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${config.color}`}>
                {config.label} Level
              </span>
            </div>
            <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">
              Question {session.currentQuestionIndex + 1} / 5
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${config.color} transition-all duration-500`}
              style={{ width: `${((session.currentQuestionIndex + 1) / 5) * 100}%` }}
            />
          </div>
        </div>
      </Reveal>

      {/* Question */}
      <Reveal delay={100}>
        <div className="bg-white dark:bg-xenora-800 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-white/10">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-8 leading-relaxed">
            {question.question}
          </h3>

          {/* Options */}
          <div className="space-y-3 sm:space-y-4">
            {question.options.map((option, index) => {
              let buttonClass = '';

              if (isAnswered) {
                if (index === question.correct) {
                  buttonClass = 'bg-green-500 text-white ring-2 ring-green-600';
                } else if (index === userAnswer && !isCorrect) {
                  buttonClass = 'bg-red-500 text-white ring-2 ring-red-600';
                } else {
                  buttonClass = 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 opacity-50';
                }
              } else {
                buttonClass = 'bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-white/20 cursor-pointer active:scale-95 transition-transform';
              }

              return (
                <button
                  key={index}
                  onClick={() => !isAnswered && onAnswer(index)}
                  disabled={isAnswered}
                  className={`w-full p-4 sm:p-5 rounded-lg font-semibold text-left transition-all duration-300 ${buttonClass}`}
                >
                  <span className="inline-flex items-center gap-3 w-full">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border-2 font-bold text-sm">
                      {String.fromCharCode(65 + index)}
                    </span>
                    {option}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {isAnswered && (
            <Reveal delay={200}>
              <div className={`mt-6 p-4 rounded-lg border-l-4 ${
                isCorrect
                  ? 'bg-green-50 dark:bg-green-900/20 border-green-500 text-green-900 dark:text-green-300'
                  : 'bg-red-50 dark:bg-red-900/20 border-red-500 text-red-900 dark:text-red-300'
              }`}>
                <p className="font-bold mb-2">
                  {isCorrect ? '✅ Correct!' : '❌ Not quite right!'}
                </p>
                <p className="text-sm leading-relaxed">
                  {question.explanation}
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </Reveal>
    </div>
  );
};

interface ResultsProps {
  session: QuizSession;
  onRetry: () => void;
  onChangeDifficulty: () => void;
}

const Results: React.FC<ResultsProps> = ({ session, onRetry, onChangeDifficulty }) => {
  const config = difficultyConfig[session.level];
  const percentage = (session.score / 5) * 100;

  let resultMessage = '';
  let resultEmoji = '';

  if (session.score === 5) {
    resultMessage = 'Perfect score! You\'re an AI expert! 🎓';
    resultEmoji = '🏆';
  } else if (session.score >= 4) {
    resultMessage = 'Excellent work! Your AI knowledge is impressive! 🌟';
    resultEmoji = '⭐';
  } else if (session.score >= 3) {
    resultMessage = 'Great job! You\'re learning AI concepts well! 📈';
    resultEmoji = '🎯';
  } else if (session.score >= 2) {
    resultMessage = 'Good effort! Keep learning, you\'re making progress! 💪';
    resultEmoji = '📚';
  } else {
    resultMessage = 'Keep practicing! Every quiz helps you learn more! 🚀';
    resultEmoji = '🌱';
  }

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <Reveal>
        <div className="text-center">
          <div className="text-6xl sm:text-7xl mb-6">{resultEmoji}</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Quiz Complete!
          </h2>
          <div className={`inline-block px-6 py-3 rounded-full text-white mb-6 bg-gradient-to-r ${config.color} font-semibold`}>
            {config.label} Level
          </div>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="bg-white dark:bg-xenora-800 rounded-2xl p-8 border border-slate-200 dark:border-white/10 space-y-6">
          {/* Score Display */}
          <div className="text-center">
            <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-2">
              {session.score} / 5
            </div>
            <div className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
              {percentage.toFixed(0)}%
            </div>
          </div>

          {/* Score Bar */}
          <div className="space-y-3">
            <div className="w-full h-4 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${
                  percentage === 100
                    ? 'from-green-500 to-emerald-600'
                    : percentage >= 60
                    ? 'from-blue-500 to-cyan-600'
                    : 'from-yellow-500 to-orange-600'
                }`}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          {/* Message */}
          <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-center text-slate-700 dark:text-slate-300 text-lg font-semibold">
              {resultMessage}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            <div className="text-center p-4 bg-slate-100 dark:bg-white/5 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">{session.score}</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Correct</div>
            </div>
            <div className="text-center p-4 bg-slate-100 dark:bg-white/5 rounded-lg">
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">{5 - session.score}</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Incorrect</div>
            </div>
            <div className="text-center p-4 bg-slate-100 dark:bg-white/5 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">5</div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">Questions</div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onRetry}
            className={`px-8 py-4 rounded-lg font-bold text-white transition-all duration-300 bg-gradient-to-r ${config.color} hover:scale-105 active:scale-95 flex items-center justify-center gap-2`}
          >
            <RotateCcw size={18} /> Try Again
          </button>
          <button
            onClick={onChangeDifficulty}
            className="px-8 py-4 rounded-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-slate-600 to-slate-700 hover:scale-105 active:scale-95"
          >
            Choose Different Level
          </button>
        </div>
      </Reveal>

      <Reveal delay={300}>
        <div className="text-center text-sm text-slate-600 dark:text-slate-400">
          <p>
            💡 <span className="font-semibold">Tip:</span> Take the quiz again! Each time you'll get different random questions.
          </p>
        </div>
      </Reveal>
    </div>
  );
};

// Main AI Quiz Page Component
const AIQuizPage: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>('selection');
  const [session, setSession] = useState<QuizSession | null>(null);

  // Get quiz questions based on difficulty
  const getQuestionsByLevel = (level: DifficultyLevel): QuizQuestion[] => {
    switch (level) {
      case 'simple':
        return simpleQuestions;
      case 'medium':
        return mediumQuestions;
      case 'hard':
        return hardQuestions;
    }
  };

  // Start a new quiz
  const handleStartQuiz = (level: DifficultyLevel) => {
    const allQuestions = getQuestionsByLevel(level);
    const randomQuestions = getRandomQuestions(allQuestions);

    setSession({
      level,
      questions: randomQuestions,
      currentQuestionIndex: 0,
      answers: [null, null, null, null, null],
      score: 0
    });
    setQuizState('playing');
  };

  // Answer a question
  const handleAnswer = (optionIndex: number) => {
    if (!session) return;

    const isCorrect = optionIndex === session.questions[session.currentQuestionIndex].correct;
    const newAnswers = [...session.answers];
    newAnswers[session.currentQuestionIndex] = optionIndex;

    const newSession = {
      ...session,
      answers: newAnswers,
      score: isCorrect ? session.score + 1 : session.score
    };

    setSession(newSession);
  };

  // Move to next question or finish quiz
  const handleNext = () => {
    if (!session) return;

    if (session.currentQuestionIndex < 4) {
      setSession({
        ...session,
        currentQuestionIndex: session.currentQuestionIndex + 1
      });
    } else {
      setQuizState('results');
    }
  };

  // Retry same level
  const handleRetry = () => {
    if (!session) return;
    handleStartQuiz(session.level);
  };

  // Change difficulty level
  const handleChangeDifficulty = () => {
    setSession(null);
    setQuizState('selection');
  };

  // Handle next button click on quiz play
  const handlePlayNext = () => {
    handleNext();
  };

  return (
    <div className="min-h-screen pt-8 sm:pt-12 pb-20 px-4 sm:px-6 lg:px-12 z-20 w-full">
      <Reveal>
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30">
            <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm uppercase tracking-wider">📝 Test Your Knowledge</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
            AI Knowledge Quiz
          </h1>
          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
            Challenge yourself with AI questions across three difficulty levels. Each quiz has 5 random questions!
          </p>
        </div>
      </Reveal>

      {/* Quiz Container */}
      <div className="max-w-4xl mx-auto">
        {quizState === 'selection' && <DifficultySelection onSelect={handleStartQuiz} />}

        {quizState === 'playing' && session && (
          <div>
            <QuizPlay session={session} onAnswer={handleAnswer} />
            {session.answers[session.currentQuestionIndex] !== null && (
              <div className="mt-6 flex justify-center">
                <button
                  onClick={handlePlayNext}
                  className={`px-8 py-3 rounded-lg font-bold text-white transition-all duration-300 bg-gradient-to-r ${
                    difficultyConfig[session.level].color
                  } hover:scale-105 active:scale-95`}
                >
                  {session.currentQuestionIndex === 4 ? 'See Results' : 'Next Question'}
                </button>
              </div>
            )}
          </div>
        )}

        {quizState === 'results' && session && (
          <Results
            session={session}
            onRetry={handleRetry}
            onChangeDifficulty={handleChangeDifficulty}
          />
        )}
      </div>
    </div>
  );
};

export default AIQuizPage;
