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
    <div className="space-y-8 lg:space-y-12 xl:space-y-16">
      <Reveal>
        <div className="text-center mb-8 lg:mb-12 xl:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white mb-4 lg:mb-6">
            Choose Your Level
          </h2>
          <p className="text-lg lg:text-xl xl:text-2xl text-slate-600 dark:text-slate-400">
            Select a difficulty level to begin. You'll answer 5 random questions.
          </p>
        </div>
      </Reveal>

      {/* Desktop-responsive difficulty grid with better spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 xl:gap-12 max-w-full lg:max-w-5xl xl:max-w-6xl mx-auto">
        {(['simple', 'medium', 'hard'] as DifficultyLevel[]).map(level => {
          const config = difficultyConfig[level];
          return (
            <Reveal key={level} delay={(['simple', 'medium', 'hard'].indexOf(level) * 100)}>
              <button
                onClick={() => onSelect(level)}
                className={`group p-6 sm:p-8 lg:p-10 xl:p-12 rounded-2xl lg:rounded-3xl bg-gradient-to-br ${config.color} text-white transition-all duration-300 hover:scale-105 active:scale-95 transform hover:shadow-2xl cursor-pointer border-2 border-white/20 hover:border-white/40 h-full flex flex-col justify-between`}
              >
                <div className="text-5xl lg:text-6xl xl:text-7xl mb-4 lg:mb-6">{config.emoji}</div>
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 lg:mb-3">{config.label}</h3>
                <p className="text-sm lg:text-base xl:text-lg opacity-90 leading-relaxed group-hover:opacity-100 transition-opacity">
                  {config.description}
                </p>
                <div className="mt-4 lg:mt-6 flex items-center justify-end text-sm lg:text-base opacity-75 group-hover:opacity-100 transition-opacity">
                  <span>Start Quiz</span>
                  <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={300}>
        <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 p-4 lg:p-6 xl:p-8 rounded-lg text-center text-sm lg:text-base xl:text-lg text-slate-700 dark:text-slate-300">
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
    <div className="space-y-6 lg:space-y-8 xl:space-y-10">
      {/* Header with Progress - Desktop optimized */}
      <Reveal>
        <div className="space-y-4 lg:space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <span className={`text-sm lg:text-base xl:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r ${config.color}`}>
                {config.label} Level
              </span>
            </div>
            <div className="text-sm lg:text-base xl:text-lg font-semibold text-slate-600 dark:text-slate-400">
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

      {/* Question - Desktop responsive sizing */}
      <Reveal delay={100}>
        <div className="bg-white dark:bg-xenora-800 rounded-xl lg:rounded-2xl p-6 sm:p-8 lg:p-10 xl:p-12 border border-slate-200 dark:border-white/10">
          <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-900 dark:text-white mb-8 lg:mb-10 xl:mb-12 leading-relaxed">
            {question.question}
          </h3>

          {/* Options - Desktop spacing */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-5 xl:space-y-6">
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
                  className={`w-full p-4 sm:p-5 lg:p-6 xl:p-7 rounded-lg lg:rounded-xl font-semibold text-left transition-all duration-300 text-base lg:text-lg xl:text-xl ${buttonClass}`}
                >
                  <span className="inline-flex items-center gap-3 w-full">
                    <span className="inline-flex items-center justify-center w-6 h-6 lg:w-8 lg:h-8 rounded-full border-2 font-bold text-sm lg:text-base">
                      {String.fromCharCode(65 + index)}
                    </span>
                    {option}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Feedback - Desktop responsive */}
          {isAnswered && (
            <Reveal delay={200}>
              <div className={`mt-6 lg:mt-8 xl:mt-10 p-4 lg:p-6 xl:p-8 rounded-lg lg:rounded-xl border-l-4 text-base lg:text-lg ${
                isCorrect
                  ? 'bg-green-50 dark:bg-green-900/20 border-green-500 text-green-900 dark:text-green-300'
                  : 'bg-red-50 dark:bg-red-900/20 border-red-500 text-red-900 dark:text-red-300'
              }`}>
                <p className="font-bold mb-2 lg:mb-3 text-lg lg:text-xl">
                  {isCorrect ? '✅ Correct!' : '❌ Not quite right!'}
                </p>
                <p className="text-sm lg:text-base xl:text-lg leading-relaxed">
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
    <div className="space-y-8 lg:space-y-12 xl:space-y-16 max-w-2xl sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
      <Reveal>
        <div className="text-center">
          <div className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl mb-6 lg:mb-8">{resultEmoji}</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white mb-4 lg:mb-6">
            Quiz Complete!
          </h2>
          <div className={`inline-block px-6 lg:px-8 xl:px-10 py-3 lg:py-4 xl:py-5 rounded-full text-white mb-6 lg:mb-8 bg-gradient-to-r ${config.color} font-semibold text-base lg:text-lg xl:text-xl`}>
            {config.label} Level
          </div>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="bg-white dark:bg-xenora-800 rounded-2xl lg:rounded-3xl p-8 lg:p-12 xl:p-16 border border-slate-200 dark:border-white/10 space-y-6 lg:space-y-8 xl:space-y-10">
          {/* Score Display - Desktop sizing */}
          <div className="text-center">
            <div className="text-6xl lg:text-7xl xl:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-2 lg:mb-4">
              {session.score} / 5
            </div>
            <div className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-slate-900 dark:text-white mb-2 lg:mb-4">
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

          {/* Stats - Desktop responsive */}
          <div className="grid grid-cols-3 gap-4 lg:gap-6 xl:gap-8 pt-4 lg:pt-6">
            <div className="text-center p-4 lg:p-6 xl:p-8 bg-slate-100 dark:bg-white/5 rounded-lg lg:rounded-xl">
              <div className="text-2xl lg:text-4xl xl:text-5xl font-bold text-green-600 dark:text-green-400">{session.score}</div>
              <div className="text-xs lg:text-sm xl:text-base text-slate-600 dark:text-slate-400 mt-1 lg:mt-2">Correct</div>
            </div>
            <div className="text-center p-4 lg:p-6 xl:p-8 bg-slate-100 dark:bg-white/5 rounded-lg lg:rounded-xl">
              <div className="text-2xl lg:text-4xl xl:text-5xl font-bold text-red-600 dark:text-red-400">{5 - session.score}</div>
              <div className="text-xs lg:text-sm xl:text-base text-slate-600 dark:text-slate-400 mt-1 lg:mt-2">Incorrect</div>
            </div>
            <div className="text-center p-4 lg:p-6 xl:p-8 bg-slate-100 dark:bg-white/5 rounded-lg lg:rounded-xl">
              <div className="text-2xl lg:text-4xl xl:text-5xl font-bold text-blue-600 dark:text-blue-400">5</div>
              <div className="text-xs lg:text-sm xl:text-base text-slate-600 dark:text-slate-400 mt-1 lg:mt-2">Questions</div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 xl:gap-8 justify-center">
          <button
            onClick={onRetry}
            className={`px-8 lg:px-12 xl:px-16 py-4 lg:py-5 xl:py-6 rounded-lg lg:rounded-xl font-bold text-white text-base lg:text-lg xl:text-xl transition-all duration-300 bg-gradient-to-r ${config.color} hover:scale-105 active:scale-95 flex items-center justify-center gap-2 min-h-[48px] lg:min-h-[56px] xl:min-h-[64px]`}
          >
            <RotateCcw size={18} /> Try Again
          </button>
          <button
            onClick={onChangeDifficulty}
            className="px-8 lg:px-12 xl:px-16 py-4 lg:py-5 xl:py-6 rounded-lg lg:rounded-xl font-bold text-white text-base lg:text-lg xl:text-xl transition-all duration-300 bg-gradient-to-r from-slate-600 to-slate-700 hover:scale-105 active:scale-95 min-h-[48px] lg:min-h-[56px] xl:min-h-[64px]"
          >
            Choose Different Level
          </button>
        </div>
      </Reveal>

      <Reveal delay={300}>
        <div className="text-center text-sm lg:text-base xl:text-lg text-slate-600 dark:text-slate-400">
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
    <div className="min-h-screen pt-8 sm:pt-12 lg:pt-16 xl:pt-20 pb-20 px-4 sm:px-6 lg:px-12 xl:px-16 z-20 w-full">
      {/* Desktop-optimized header section */}
      <Reveal>
        <div className="text-center mb-12 lg:mb-16 xl:mb-20">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30">
            <span className="text-purple-600 dark:text-purple-400 font-semibold text-sm uppercase tracking-wider">📝 Test Your Knowledge</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
            AI Knowledge Quiz
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-700 dark:text-slate-300 max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
            Challenge yourself with AI questions across three difficulty levels. Each quiz has 5 random questions!
          </p>
        </div>
      </Reveal>

      {/* Desktop-responsive quiz container: max-w adjusts with screen size */}
      <div className="max-w-2xl sm:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
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
