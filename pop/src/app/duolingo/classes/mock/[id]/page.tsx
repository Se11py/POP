"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Check, Clock, ChevronRight, ChevronLeft, 
  Calculator, FlaskConical, AlertCircle, FileText, Flag
} from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

// --- Mock Exam Data Structure ---
const mockExams: any = {
  'igcse-physics': {
    title: 'IGCSE Physics',
    paper: 'Paper 2 (Multiple Choice)',
    duration: 45 * 60, // 45 minutes in seconds
    totalMarks: 40,
    hasCalculator: true,
    hasPeriodicTable: false,
    questions: [
      {
        id: 1,
        type: 'multiple-choice',
        text: 'A car travels at a constant speed of 15 m/s for 10 seconds. What is the total distance traveled?',
        image: null,
        options: ['1.5 m', '150 m', '1500 m', '0.15 m'],
        correctAnswer: 1,
        marks: 1,
        topic: 'Kinematics'
      },
      {
        id: 2,
        type: 'multiple-choice',
        text: 'Which diagram shows the correct magnetic field lines around a bar magnet?',
        image: 'https://placehold.co/600x300/F3F4F6/9CA3AF?text=Magnetic+Field+Diagrams',
        options: ['Diagram A', 'Diagram B', 'Diagram C', 'Diagram D'],
        correctAnswer: 0,
        marks: 1,
        topic: 'Electromagnetism'
      },
      {
        id: 3,
        type: 'short-answer',
        text: 'Define the term "acceleration" and state its standard SI unit.',
        image: null,
        correctAnswer: 'Acceleration is the rate of change of velocity. Its SI unit is m/s².',
        marks: 2,
        topic: 'Kinematics'
      }
    ]
  },
  'igcse-chemistry': {
    title: 'IGCSE Chemistry',
    paper: 'Paper 4 (Theory - Extended)',
    duration: 75 * 60,
    totalMarks: 80,
    hasCalculator: true,
    hasPeriodicTable: true,
    questions: [
      {
        id: 1,
        type: 'short-answer',
        text: 'Explain why isotopes of the same element have identical chemical properties.',
        image: null,
        correctAnswer: 'They have the same number of electrons in their outer shell.',
        marks: 2,
        topic: 'Atomic Structure'
      }
    ]
  }
};

export default function DuolingoMockExamSimulator() {
  const params = useParams();
  const router = useRouter();
  const classId = params.id as string;
  const examData = mockExams[classId] || mockExams['igcse-physics'];
  
  const [currentQuestionIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [timeLeft, setTimeLeft] = useState(examData.duration);
  const [isFinished, setIsFinished] = useState(false);
  const [showTools, setShowTools] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [showPeriodicTable, setShowPeriodicTable] = useState(false);

  const currentQuestion = examData.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / examData.questions.length) * 100;
  const isLastQuestion = currentQuestionIndex === examData.questions.length - 1;

  useEffect(() => {
    if (timeLeft > 0 && !isFinished) {
      const timer = setInterval(() => setTimeLeft((prev: number) => {
        if (prev <= 1) {
          setIsFinished(true);
          return 0;
        }
        return prev - 1;
      }), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft, isFinished]);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    if (h > 0) return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleOptionSelect = (optionIndex: number) => {
    setAnswers({ ...answers, [currentQuestion.id]: optionIndex });
  };

  const handleTextAnswer = (text: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: text });
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setIsFinished(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  if (isFinished) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-center p-6 text-center">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-[40px] border-2 border-b-[12px] border-slate-200 p-12 max-w-lg w-full space-y-8"
        >
          <div className="w-24 h-24 bg-[#34D399] rounded-full flex items-center justify-center mx-auto text-white border-b-4 border-[#059669]">
            <Check size={48} strokeWidth={3} />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-4xl font-black text-slate-800 tracking-tighter">Exam Submitted</h1>
            <p className="text-lg font-bold text-slate-500">Your answers have been sent to the AI for grading. A detailed feedback report will be ready shortly.</p>
          </div>

          <div className="bg-slate-50 rounded-[24px] p-6 border-2 border-slate-100 flex justify-between items-center text-left">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Time Taken</p>
              <p className="text-2xl font-black text-slate-700">{formatTime(examData.duration - timeLeft)}</p>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Questions Answered</p>
              <p className="text-2xl font-black text-[#34D399]">{Object.keys(answers).length} / {examData.questions.length}</p>
            </div>
          </div>

          <Link 
            href={`/duolingo/classes/${classId}`}
            className="w-full block py-5 bg-[#7B2FF2] text-white rounded-[24px] font-black text-xl border-b-[6px] border-[#5B21B6] hover:bg-[#8B5CF6] active:border-b-0 active:translate-y-[6px] transition-all uppercase tracking-wide"
          >
            Return to Dashboard
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-[#34D399] selection:text-white">
      {/* Exam Header */}
      <header className="px-6 py-4 bg-white border-b-2 border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 sticky top-0 z-50">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <button 
            onClick={() => router.back()}
            className="w-12 h-12 flex-shrink-0 bg-white rounded-2xl border-2 border-slate-200 border-b-[4px] flex items-center justify-center text-slate-400 hover:text-slate-800 active:border-b-2 active:translate-y-[2px] transition-all"
          >
            <X strokeWidth={3} size={24} />
          </button>
          <div>
            <h1 className="text-xl font-black text-slate-800 leading-tight">{examData.title}</h1>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{examData.paper}</p>
          </div>
        </div>

        <div className="flex items-center gap-6 w-full md:w-auto">
          <div className="flex-1 md:w-64">
            <div className="flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
              <span>Question {currentQuestionIndex + 1} of {examData.questions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-[#34D399] rounded-full"
              />
            </div>
          </div>
          
          <div className={`flex items-center gap-2 px-4 py-2 rounded-2xl border-2 border-b-[4px] font-black ${timeLeft < 300 ? 'bg-[#FFE5EC] border-[#F9A8D4] text-[#BE185D] animate-pulse' : 'bg-slate-50 border-slate-200 text-slate-600'}`}>
            <Clock size={18} />
            <span className="tabular-nums">{formatTime(timeLeft)}</span>
          </div>

          <div className="hidden md:flex items-center gap-2">
            {examData.hasCalculator && (
              <button 
                onClick={() => setShowCalculator(!showCalculator)}
                className={`w-12 h-12 rounded-2xl border-2 border-b-[4px] flex items-center justify-center transition-colors ${showCalculator ? 'bg-[#F3E8FF] text-[#7B2FF2] border-[#7B2FF2]' : 'bg-slate-50 border-slate-200 text-slate-500 hover:text-[#7B2FF2] hover:border-[#7B2FF2]'}`} 
                title="Calculator"
              >
                <Calculator size={20} />
              </button>
            )}
            {examData.hasPeriodicTable && (
              <button 
                onClick={() => setShowPeriodicTable(!showPeriodicTable)}
                className={`w-12 h-12 rounded-2xl border-2 border-b-[4px] flex items-center justify-center transition-colors ${showPeriodicTable ? 'bg-[#E2F7EB] text-[#10B981] border-[#10B981]' : 'bg-slate-50 border-slate-200 text-slate-500 hover:text-[#10B981] hover:border-[#10B981]'}`} 
                title="Periodic Table"
              >
                <FlaskConical size={20} />
              </button>
            )}
            <button className="w-12 h-12 bg-slate-50 rounded-2xl border-2 border-slate-200 border-b-[4px] flex items-center justify-center text-slate-500 hover:text-orange-500 hover:border-orange-500 transition-colors" title="Flag for Review">
              <Flag size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Floating Tools Overlays */}
      <AnimatePresence>
        {showCalculator && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-24 right-6 z-50 w-64 bg-white rounded-[24px] border-2 border-slate-200 border-b-[6px] p-4 shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-black uppercase tracking-widest text-slate-400">Calculator</span>
              <button onClick={() => setShowCalculator(false)} className="text-slate-400 hover:text-slate-600"><X size={16} strokeWidth={3}/></button>
            </div>
            <div className="bg-slate-50 border-2 border-slate-100 rounded-xl h-12 mb-4 flex items-center justify-end px-3 font-mono font-black text-xl text-slate-700">0</div>
            <div className="grid grid-cols-4 gap-2">
              {['7','8','9','÷','4','5','6','×','1','2','3','-','C','0','.','+'].map((btn) => (
                <button key={btn} className={`h-10 rounded-lg font-black text-lg border-b-2 active:border-b-0 active:translate-y-[2px] transition-all ${['÷','×','-','+'].includes(btn) ? 'bg-[#F3E8FF] text-[#7B2FF2] border-[#D8B4FE]' : btn === 'C' ? 'bg-[#FFE5EC] text-[#BE185D] border-[#F9A8D4]' : 'bg-white border-slate-200 text-slate-600'}`}>
                  {btn}
                </button>
              ))}
              <button className="col-span-4 h-10 bg-[#34D399] text-white rounded-lg font-black border-b-2 border-[#059669] active:border-b-0 active:translate-y-[2px] transition-all">=</button>
            </div>
          </motion.div>
        )}

        {showPeriodicTable && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            className="fixed top-24 right-6 md:right-24 z-50 w-80 md:w-96 bg-white rounded-[24px] border-2 border-slate-200 border-b-[6px] p-4 shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-black uppercase tracking-widest text-slate-400">Periodic Table</span>
              <button onClick={() => setShowPeriodicTable(false)} className="text-slate-400 hover:text-slate-600"><X size={16} strokeWidth={3}/></button>
            </div>
            <div className="bg-slate-50 border-2 border-slate-200 rounded-[16px] p-2 flex items-center justify-center">
              {/* Placeholder image for periodic table */}
              <img src="https://placehold.co/600x400/E2F7EB/059669?text=Periodic+Table+Reference" alt="Periodic Table" className="w-full rounded-xl" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Exam Content Area */}
      <main className="flex-1 flex flex-col items-center p-6 md:p-12 w-full max-w-5xl mx-auto overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full space-y-8"
          >
            {/* Question Details */}
            <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4">
              <span className="text-sm font-black uppercase tracking-widest text-[#7B2FF2] bg-[#F3E8FF] px-3 py-1 rounded-xl border border-[#D8B4FE]">
                {currentQuestion.topic}
              </span>
              <span className="text-sm font-black uppercase tracking-widest text-slate-400">
                [{currentQuestion.marks} Marks]
              </span>
            </div>

            {/* Question Text */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-black text-slate-800 leading-tight">
                <span className="text-slate-300 mr-2">{currentQuestion.id}.</span> 
                {currentQuestion.text}
              </h2>
              
              {currentQuestion.image && (
                <div className="bg-slate-50 border-2 border-slate-200 rounded-[24px] p-2 overflow-hidden max-w-2xl mx-auto">
                  <img src={currentQuestion.image} alt={`Diagram for Question ${currentQuestion.id}`} className="w-full rounded-[16px] object-contain" />
                </div>
              )}
            </div>

            {/* Answer Input Area */}
            <div className="pt-8">
              {currentQuestion.type === 'multiple-choice' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentQuestion.options.map((option: string, idx: number) => {
                    const isSelected = answers[currentQuestion.id] === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleOptionSelect(idx)}
                        className={`w-full p-6 rounded-[24px] border-2 border-b-[6px] text-left transition-all flex items-center gap-4 group ${
                          isSelected 
                          ? 'bg-[#E2F7EB] border-[#6EE7B7] text-[#059669]' 
                          : 'bg-white border-slate-200 hover:border-slate-300 text-slate-600'
                        }`}
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg border-b-2 transition-colors ${
                          isSelected ? 'bg-white text-[#059669] border-black/10' : 'bg-slate-100 text-slate-400 border-black/5 group-hover:bg-slate-200'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </div>
                        <span className="text-xl font-bold flex-1">{option}</span>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-[#FAF9F6] border-2 border-slate-200 rounded-[24px] overflow-hidden focus-within:border-[#34D399] transition-colors relative">
                    <textarea 
                      value={answers[currentQuestion.id] || ''}
                      onChange={(e) => handleTextAnswer(e.target.value)}
                      placeholder="Type your answer here..."
                      rows={6}
                      className="w-full bg-transparent p-6 text-lg font-bold text-slate-700 focus:outline-none resize-none placeholder:text-slate-300"
                    />
                    <div className="absolute bottom-4 right-4 text-xs font-black text-slate-300 uppercase tracking-widest">
                      {answers[currentQuestion.id]?.length || 0} chars
                    </div>
                  </div>
                  
                  {/* Specialized Keyboards (Concept) */}
                  {examData.hasCalculator && (
                     <div className="flex gap-2">
                       <button className="px-4 py-2 bg-slate-100 rounded-xl border border-slate-200 text-slate-500 font-bold text-sm hover:bg-slate-200">x²</button>
                       <button className="px-4 py-2 bg-slate-100 rounded-xl border border-slate-200 text-slate-500 font-bold text-sm hover:bg-slate-200">√</button>
                       <button className="px-4 py-2 bg-slate-100 rounded-xl border border-slate-200 text-slate-500 font-bold text-sm hover:bg-slate-200">π</button>
                       <button className="px-4 py-2 bg-slate-100 rounded-xl border border-slate-200 text-slate-500 font-bold text-sm hover:bg-slate-200">°</button>
                     </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Exam Navigation Footer */}
      <footer className="bg-white border-t-2 border-slate-100 px-6 py-6 sticky bottom-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <button 
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
            className={`px-8 py-4 rounded-[20px] font-black uppercase tracking-widest transition-all flex items-center gap-2 border-b-[4px] ${
              currentQuestionIndex === 0 
              ? 'bg-slate-50 text-slate-300 border-slate-100 cursor-not-allowed' 
              : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 active:border-b-0 active:translate-y-[4px]'
            }`}
          >
            <ChevronLeft size={20} strokeWidth={3} /> Previous
          </button>
          
          <button 
            onClick={handleNext}
            className={`px-10 py-4 rounded-[20px] font-black uppercase tracking-widest transition-all flex items-center gap-2 border-b-[4px] ${
              isLastQuestion 
              ? 'bg-[#7B2FF2] text-white border-[#5B21B6] hover:bg-[#8B5CF6] active:border-b-0 active:translate-y-[4px]' 
              : 'bg-[#34D399] text-white border-[#059669] hover:bg-[#10B981] active:border-b-0 active:translate-y-[4px]'
            }`}
          >
            {isLastQuestion ? 'Submit Exam' : 'Next'} <ChevronRight size={20} strokeWidth={3} />
          </button>
        </div>
      </footer>
    </div>
  );
}
