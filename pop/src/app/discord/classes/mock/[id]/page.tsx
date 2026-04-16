"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Check, Clock, ChevronRight, ChevronLeft, 
  Calculator, FlaskConical, AlertCircle, FileText, Flag, Hash, User, Settings
} from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

// --- Mock Exam Data Structure ---
const mockExams: any = {
  'igcse-physics': {
    title: 'physics-coordinated',
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
        image: 'https://placehold.co/600x300/2B2D31/B5BAC1?text=Magnetic+Field+Diagrams',
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
    title: 'chemistry-coordinated',
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

export default function DiscordMockExamSimulator() {
  const params = useParams();
  const router = useRouter();
  const classId = params.id as string;
  const examData = mockExams[classId] || mockExams['igcse-physics'];
  
  const [currentQuestionIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  const [timeLeft, setTimeLeft] = useState(examData.duration);
  const [isFinished, setIsFinished] = useState(false);
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
      <div className="min-h-screen bg-[#313338] flex flex-col items-center justify-center p-6 text-center text-[#F2F3F5]">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-[#2B2D31] rounded-[16px] border border-[#1E1F22] p-12 max-w-lg w-full space-y-8 shadow-2xl relative overflow-hidden"
        >
          {/* Confetti / Success Background */}
          <div className="absolute top-0 left-0 w-full h-1 bg-[#23A559]"></div>
          
          <div className="w-20 h-20 bg-[#23A559]/20 rounded-full flex items-center justify-center mx-auto text-[#23A559] border border-[#23A559]/30">
            <Check size={40} strokeWidth={3} />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">Exam Submitted</h1>
            <p className="text-sm font-medium text-[#B5BAC1]">Your answers have been sent to the AI for grading. A detailed feedback report will be available in your channel shortly.</p>
          </div>

          <div className="bg-[#1E1F22] rounded-[8px] p-6 border border-[#111214] flex justify-between items-center text-left">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#80848E]">Time Taken</p>
              <p className="text-xl font-extrabold text-[#DBDEE1]">{formatTime(examData.duration - timeLeft)}</p>
            </div>
            <div className="w-px h-10 bg-[#2B2D31]"></div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#80848E]">Completion</p>
              <p className="text-xl font-extrabold text-[#23A559]">{Object.keys(answers).length} / {examData.questions.length}</p>
            </div>
          </div>

          <Link 
            href={`/discord/classes/${classId}`}
            className="w-full block py-3 bg-[#5865F2] text-white rounded-[4px] font-bold text-sm hover:bg-[#4752C4] transition-colors uppercase tracking-widest"
          >
            Return to Dashboard
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#313338] flex flex-col font-sans text-[#F2F3F5] selection:bg-[#5865F2]/40 selection:text-white">
      {/* Exam Header */}
      <header className="px-6 py-4 bg-[#1E1F22] border-b border-[#111214] flex flex-col md:flex-row items-center justify-between gap-4 sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <button 
            onClick={() => router.back()}
            className="w-10 h-10 flex-shrink-0 bg-[#2B2D31] rounded-[8px] border border-[#1E1F22] flex items-center justify-center text-[#B5BAC1] hover:text-[#F2F3F5] hover:bg-[#35373C] transition-colors"
          >
            <X size={20} />
          </button>
          <div>
            <h1 className="text-lg font-extrabold text-white leading-tight flex items-center gap-1.5">
               <Hash size={16} className="text-[#80848E]" />
               {examData.title}
            </h1>
            <p className="text-[10px] font-bold text-[#80848E] uppercase tracking-widest">{examData.paper}</p>
          </div>
        </div>

        <div className="flex items-center gap-6 w-full md:w-auto">
          <div className="flex-1 md:w-64">
            <div className="flex justify-between items-center text-[10px] font-bold text-[#80848E] uppercase tracking-widest mb-1.5">
              <span>Question {currentQuestionIndex + 1} / {examData.questions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-1.5 bg-[#111214] rounded-full overflow-hidden border border-[#1E1F22]">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="h-full bg-[#5865F2] rounded-full"
              />
            </div>
          </div>
          
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-[4px] font-bold text-xs border ${timeLeft < 300 ? 'bg-[#ED4245]/20 border-[#ED4245]/30 text-[#ED4245] animate-pulse' : 'bg-[#2B2D31] border-[#1E1F22] text-[#DBDEE1]'}`}>
            <Clock size={14} />
            <span className="tabular-nums tracking-wider">{formatTime(timeLeft)}</span>
          </div>

          <div className="hidden md:flex items-center gap-2">
            {examData.hasCalculator && (
              <button 
                onClick={() => setShowCalculator(!showCalculator)}
                className={`w-10 h-10 rounded-[8px] border flex items-center justify-center transition-colors ${showCalculator ? 'bg-[#5865F2]/20 text-[#5865F2] border-[#5865F2]/30' : 'bg-[#2B2D31] border-[#1E1F22] text-[#B5BAC1] hover:text-[#F2F3F5] hover:bg-[#35373C]'}`} 
                title="Calculator"
              >
                <Calculator size={18} />
              </button>
            )}
            {examData.hasPeriodicTable && (
              <button 
                onClick={() => setShowPeriodicTable(!showPeriodicTable)}
                className={`w-10 h-10 rounded-[8px] border flex items-center justify-center transition-colors ${showPeriodicTable ? 'bg-[#23A559]/20 text-[#23A559] border-[#23A559]/30' : 'bg-[#2B2D31] border-[#1E1F22] text-[#B5BAC1] hover:text-[#F2F3F5] hover:bg-[#35373C]'}`} 
                title="Periodic Table"
              >
                <FlaskConical size={18} />
              </button>
            )}
            <button className="w-10 h-10 rounded-[8px] border border-[#1E1F22] bg-[#2B2D31] flex items-center justify-center text-[#B5BAC1] hover:text-[#FEE75C] hover:border-[#FEE75C]/30 hover:bg-[#FEE75C]/10 transition-colors" title="Flag for Review">
              <Flag size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Floating Tools Overlays */}
      <AnimatePresence>
        {showCalculator && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="fixed top-20 right-6 z-50 w-64 bg-[#2B2D31] rounded-[12px] border border-[#1E1F22] p-4 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#80848E]">Calculator Tool</span>
              <button onClick={() => setShowCalculator(false)} className="text-[#80848E] hover:text-[#DBDEE1]"><X size={14}/></button>
            </div>
            <div className="bg-[#1E1F22] border border-[#111214] rounded-[4px] h-12 mb-4 flex items-center justify-end px-3 font-mono font-bold text-xl text-white">0</div>
            <div className="grid grid-cols-4 gap-2">
              {['7','8','9','÷','4','5','6','×','1','2','3','-','C','0','.','+'].map((btn) => (
                <button key={btn} className={`h-10 rounded-[4px] font-bold text-sm transition-colors ${['÷','×','-','+'].includes(btn) ? 'bg-[#5865F2]/20 text-[#5865F2] hover:bg-[#5865F2]/30' : btn === 'C' ? 'bg-[#ED4245]/20 text-[#ED4245] hover:bg-[#ED4245]/30' : 'bg-[#35373C] text-[#DBDEE1] hover:bg-[#3F4147]'}`}>
                  {btn}
                </button>
              ))}
              <button className="col-span-4 h-10 bg-[#5865F2] text-white rounded-[4px] font-bold hover:bg-[#4752C4] transition-colors">=</button>
            </div>
          </motion.div>
        )}

        {showPeriodicTable && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="fixed top-20 right-6 md:right-24 z-50 w-80 md:w-96 bg-[#2B2D31] rounded-[12px] border border-[#1E1F22] p-4 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#80848E]">Data Sheet</span>
              <button onClick={() => setShowPeriodicTable(false)} className="text-[#80848E] hover:text-[#DBDEE1]"><X size={14}/></button>
            </div>
            <div className="bg-[#1E1F22] border border-[#111214] rounded-[8px] p-2 flex items-center justify-center">
              {/* Placeholder image for periodic table */}
              <img src="https://placehold.co/600x400/1E1F22/80848E?text=Periodic+Table+Reference" alt="Periodic Table" className="w-full rounded-[4px] opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Exam Content Area */}
      <main className="flex-1 flex flex-col items-center p-6 md:p-12 w-full max-w-4xl mx-auto overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentQuestion.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="w-full space-y-8"
          >
            {/* Question Details Discord Message Style */}
            <div className="flex items-center gap-3 border-b border-[#1E1F22] pb-4">
              <div className="w-8 h-8 rounded-full bg-[#5865F2] flex items-center justify-center shrink-0 shadow-lg">
                <span className="text-xs font-bold text-white">AI</span>
              </div>
              <div>
                 <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white hover:underline cursor-pointer">Exam Bot</span>
                    <span className="text-[10px] font-bold bg-[#5865F2] text-white px-1.5 py-0.5 rounded-[3px] uppercase">Bot</span>
                    <span className="text-xs font-medium text-[#80848E]">Today at 10:00 AM</span>
                 </div>
                 <div className="flex items-center gap-2 text-xs">
                    <span className="text-[#5865F2] font-semibold hover:underline cursor-pointer">@{currentQuestion.topic.toLowerCase().replace(' ', '-')}</span>
                    <span className="text-[#80848E]">•</span>
                    <span className="text-[#80848E] font-medium">{currentQuestion.marks} Marks</span>
                 </div>
              </div>
            </div>

            {/* Question Text */}
            <div className="space-y-6 px-11">
              <h2 className="text-xl md:text-2xl font-bold text-[#F2F3F5] leading-relaxed">
                <span className="text-[#80848E] font-medium mr-2">{currentQuestion.id}.</span> 
                {currentQuestion.text}
              </h2>
              
              {currentQuestion.image && (
                <div className="bg-[#1E1F22] border border-[#111214] rounded-[8px] p-2 overflow-hidden max-w-lg">
                  <img src={currentQuestion.image} alt={`Diagram for Question ${currentQuestion.id}`} className="w-full rounded-[4px] object-contain opacity-90 hover:opacity-100 transition-opacity" />
                </div>
              )}
            </div>

            {/* Answer Input Area */}
            <div className="pt-6 px-11">
              {currentQuestion.type === 'multiple-choice' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentQuestion.options.map((option: string, idx: number) => {
                    const isSelected = answers[currentQuestion.id] === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleOptionSelect(idx)}
                        className={`w-full p-4 rounded-[8px] border text-left transition-all flex items-center gap-4 group ${
                          isSelected 
                          ? 'bg-[#5865F2]/10 border-[#5865F2] text-white' 
                          : 'bg-[#2B2D31] border-[#1E1F22] hover:bg-[#35373C] hover:border-[#4E5058] text-[#DBDEE1]'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-[4px] flex items-center justify-center font-bold text-sm transition-colors ${
                          isSelected ? 'bg-[#5865F2] text-white' : 'bg-[#1E1F22] text-[#80848E] group-hover:bg-[#2B2D31]'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </div>
                        <span className="text-base font-semibold flex-1">{option}</span>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-[#2B2D31] border border-[#1E1F22] rounded-[8px] overflow-hidden focus-within:border-[#5865F2] transition-colors relative">
                    <textarea 
                      value={answers[currentQuestion.id] || ''}
                      onChange={(e) => handleTextAnswer(e.target.value)}
                      placeholder="Message your answer here..."
                      rows={6}
                      className="w-full bg-transparent p-4 text-sm font-medium text-[#F2F3F5] focus:outline-none resize-none placeholder:text-[#80848E]"
                    />
                    <div className="absolute bottom-3 right-4 text-[10px] font-bold text-[#80848E] uppercase tracking-widest">
                      {answers[currentQuestion.id]?.length || 0} characters
                    </div>
                  </div>
                  
                  {/* Specialized Keyboards (Concept) */}
                  {examData.hasCalculator && (
                     <div className="flex gap-2">
                       <button className="px-3 py-1.5 bg-[#2B2D31] rounded-[4px] border border-[#1E1F22] text-[#B5BAC1] font-semibold text-xs hover:bg-[#35373C] transition-colors">x²</button>
                       <button className="px-3 py-1.5 bg-[#2B2D31] rounded-[4px] border border-[#1E1F22] text-[#B5BAC1] font-semibold text-xs hover:bg-[#35373C] transition-colors">√</button>
                       <button className="px-3 py-1.5 bg-[#2B2D31] rounded-[4px] border border-[#1E1F22] text-[#B5BAC1] font-semibold text-xs hover:bg-[#35373C] transition-colors">π</button>
                       <button className="px-3 py-1.5 bg-[#2B2D31] rounded-[4px] border border-[#1E1F22] text-[#B5BAC1] font-semibold text-xs hover:bg-[#35373C] transition-colors">°</button>
                     </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Exam Navigation Footer */}
      <footer className="bg-[#1E1F22] border-t border-[#111214] px-6 py-4 sticky bottom-0 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.2)]">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <button 
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
            className={`px-6 py-2.5 rounded-[4px] font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2 ${
              currentQuestionIndex === 0 
              ? 'bg-[#2B2D31] text-[#4E5058] border border-[#1E1F22] cursor-not-allowed' 
              : 'bg-[#2B2D31] text-[#DBDEE1] border border-[#1E1F22] hover:bg-[#35373C]'
            }`}
          >
            <ChevronLeft size={16} strokeWidth={3} /> Prev
          </button>
          
          <button 
            onClick={handleNext}
            className={`px-8 py-2.5 rounded-[4px] font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2 shadow-lg ${
              isLastQuestion 
              ? 'bg-[#23A559] text-white hover:bg-[#1A7D44]' 
              : 'bg-[#5865F2] text-white hover:bg-[#4752C4]'
            }`}
          >
            {isLastQuestion ? 'Submit' : 'Next'} <ChevronRight size={16} strokeWidth={3} />
          </button>
        </div>
      </footer>
    </div>
  );
}