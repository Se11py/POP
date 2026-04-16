"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { X, Check, RotateCcw, ArrowLeft, Trophy, Flame, Target, MessageCircle, Star, Info, BookOpen } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

// Mock data for the study session
const studySet = {
  id: 1,
  title: "Spanish Vocabulary",
  category: "Languages",
  iconBg: "bg-[#0EA5E9]",
  cards: [
    { id: 1, front: "El desayuno", back: "Breakfast", difficulty: "Easy" },
    { id: 2, front: "Desarrollar", back: "To develop", difficulty: "Medium" },
    { id: 3, front: "Imprescindible", back: "Essential / Indispensable", difficulty: "Hard" },
    { id: 4, front: "La madrugada", back: "Early morning / Dawn", difficulty: "Medium" },
    { id: 5, front: "Echar de menos", back: "To miss (someone/something)", difficulty: "Hard" },
    { id: 6, front: "La manzana", back: "Apple", difficulty: "Easy" },
  ]
};

export default function InteractiveStudyMode() {
  const params = useParams();
  const router = useRouter();
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [stats, setStats] = useState({ correct: 0, incorrect: 0 });
  const [isComplete, setIsComplete] = useState(false);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

  const currentCard = studySet.cards[currentIndex];
  const progress = ((currentIndex) / studySet.cards.length) * 100;
  const isLastCard = currentIndex === studySet.cards.length - 1;

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleScore = (isCorrect: boolean) => {
    if (isCorrect) {
      setStats(prev => ({ ...prev, correct: prev.correct + 1 }));
    } else {
      setStats(prev => ({ ...prev, incorrect: prev.incorrect + 1 }));
    }

    if (isLastCard) {
      setIsComplete(true);
    } else {
      setDirection(1);
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
        setIsFlipped(false);
      }, 50);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setStats({ correct: 0, incorrect: 0 });
    setIsComplete(false);
  };

  const cardVariants: Variants = {
    initial: (direction: number) => ({
      x: direction > 0 ? 300 : direction < 0 ? -300 : 0,
      opacity: 0,
      scale: 0.8,
      rotate: direction > 0 ? 10 : direction < 0 ? -10 : 0
    }),
    active: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : direction < 0 ? 300 : 0,
      opacity: 0,
      scale: 0.8,
      rotate: direction > 0 ? -10 : direction < 0 ? 10 : 0,
      transition: { duration: 0.2 }
    })
  };

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Easy': return 'text-[#059669]';
      case 'Medium': return 'text-[#D97706]';
      case 'Hard': return 'text-[#BE185D]';
      default: return 'text-slate-400';
    }
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] flex flex-col items-center justify-center p-6 text-center">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.5 }}
          className="space-y-8 max-w-md w-full"
        >
          <div className="relative inline-block">
             <div className="w-32 h-32 bg-[#FEF3C7] rounded-[40px] border-b-[8px] border-[#FCD34D] flex items-center justify-center mx-auto mb-6">
               <Trophy className="text-[#D97706] w-16 h-16" strokeWidth={2.5} />
             </div>
             <motion.div 
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-4 -right-4 w-12 h-12 bg-[#34D399] rounded-2xl border-b-[4px] border-[#059669] flex items-center justify-center"
             >
               <Flame className="text-white w-6 h-6" fill="currentColor" />
             </motion.div>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl font-black text-slate-800 tracking-tighter">Session Complete!</h1>
            <p className="text-xl font-bold text-slate-500">You're making incredible progress.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-[32px] border-2 border-b-[6px] border-[#6EE7B7] space-y-1">
              <p className="text-3xl font-black text-[#059669]">{stats.correct}</p>
              <p className="text-xs font-black uppercase text-slate-400 tracking-widest">Correct</p>
            </div>
            <div className="bg-white p-6 rounded-[32px] border-2 border-b-[6px] border-[#F9A8D4] space-y-1">
              <p className="text-3xl font-black text-[#BE185D]">{stats.incorrect}</p>
              <p className="text-xs font-black uppercase text-slate-400 tracking-widest">To Review</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-4">
            <button 
              onClick={handleReset}
              className="w-full py-5 bg-[#34D399] text-white rounded-[24px] font-black text-xl border-b-[6px] border-[#059669] hover:bg-[#10B981] active:border-b-0 active:translate-y-[6px] transition-all uppercase tracking-wide flex items-center justify-center gap-3"
            >
              <RotateCcw size={24} strokeWidth={3} /> Study Again
            </button>
            <Link 
              href="/duolingo/flashcards"
              className="w-full py-5 bg-white text-slate-700 rounded-[24px] font-black text-xl border-2 border-slate-200 border-b-[6px] hover:bg-slate-50 active:border-b-2 active:translate-y-[4px] transition-all uppercase tracking-wide"
            >
              Back to Dashboard
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex flex-col font-sans selection:bg-[#34D399] selection:text-white">
      {/* Header with Progress */}
      <header className="px-6 py-8 max-w-4xl mx-auto w-full flex items-center gap-6">
        <button 
          onClick={() => router.back()}
          className="w-12 h-12 flex-shrink-0 bg-white rounded-2xl border-2 border-slate-200 border-b-[4px] flex items-center justify-center text-slate-400 hover:text-slate-800 active:border-b-2 active:translate-y-[2px] transition-all"
        >
          <X strokeWidth={3} size={24} />
        </button>
        
        <div className="flex-1 h-4 bg-slate-200 rounded-full overflow-hidden border-2 border-white shadow-sm">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-[#34D399] rounded-full"
          />
        </div>

        <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl border-2 border-slate-200 border-b-[4px] text-[#F97316] font-black shadow-sm">
          <Flame size={20} fill="currentColor" />
          <span>7</span>
        </div>
      </header>

      {/* Main Study Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 gap-12">
        <div className="w-full max-w-xl relative h-[450px]" style={{ perspective: '1000px' }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={cardVariants}
              initial="initial"
              animate={{ 
                x: 0,
                opacity: 1,
                scale: 1,
                rotate: 0,
                rotateY: isFlipped ? 180 : 0,
                transition: { 
                  rotateY: { duration: 0.6, ease: "easeInOut" },
                  default: { type: "spring", stiffness: 300, damping: 30 }
                }
              }}
              exit="exit"
              className="w-full h-full cursor-pointer relative"
              onClick={handleFlip}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Front Side */}
              <div 
                className="absolute inset-0 w-full h-full bg-white rounded-[48px] border-2 border-slate-200 border-b-[12px] p-12 flex flex-col items-center justify-center text-center shadow-sm"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  <span className={`text-xs font-black uppercase tracking-widest ${getDifficultyColor(currentCard.difficulty)}`}>
                    {currentCard.difficulty} Level
                  </span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tighter leading-tight">
                  {currentCard.front}
                </h2>
                
                <div className="absolute bottom-10 text-slate-300 font-bold uppercase tracking-widest text-xs animate-pulse">
                  Tap to flip
                </div>
              </div>

              {/* Back Side */}
              <div 
                className="absolute inset-0 w-full h-full bg-white rounded-[48px] border-2 border-[#34D399] border-b-[12px] border-b-[#059669] p-12 flex flex-col items-center justify-center text-center shadow-lg"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <div className="absolute top-8 left-1/2 -translate-x-1/2">
                   <Check className="text-[#34D399] w-8 h-8" strokeWidth={4} />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-black text-[#059669] tracking-tighter leading-tight">
                  {currentCard.back}
                </h2>

                <div className="absolute bottom-10 flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest">
                  <Star size={14} className="fill-slate-400" />
                  Mark as favorite
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Action Buttons */}
        <div className="w-full max-w-xl grid grid-cols-2 gap-6">
          <button 
            disabled={!isFlipped}
            onClick={() => handleScore(false)}
            className={`py-5 rounded-[24px] font-black text-xl border-b-[6px] transition-all uppercase tracking-wide flex items-center justify-center gap-3 ${
              isFlipped 
              ? "bg-[#FFE5EC] text-[#BE185D] border-[#F9A8D4] hover:bg-[#FFD1DD] active:border-b-0 active:translate-y-[6px]" 
              : "bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed"
            }`}
          >
            <X size={24} strokeWidth={4} /> Incorrect
          </button>
          
          <button 
            disabled={!isFlipped}
            onClick={() => handleScore(true)}
            className={`py-5 rounded-[24px] font-black text-xl border-b-[6px] transition-all uppercase tracking-wide flex items-center justify-center gap-3 ${
              isFlipped 
              ? "bg-[#34D399] text-white border-[#059669] hover:bg-[#10B981] active:border-b-0 active:translate-y-[6px]" 
              : "bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed"
            }`}
          >
            <Check size={24} strokeWidth={4} /> Correct
          </button>
        </div>
      </main>

      {/* Stats Counter Footer */}
      <footer className="px-6 py-8 border-t-2 border-slate-100 bg-white">
        <div className="max-w-4xl mx-auto flex justify-around items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E2F7EB] border-2 border-[#6EE7B7] flex items-center justify-center">
              <Check className="text-[#059669] w-5 h-5" strokeWidth={3} />
            </div>
            <div>
              <p className="text-lg font-black text-[#059669] leading-none">{stats.correct}</p>
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mt-1">Learned</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFE5EC] border-2 border-[#F9A8D4] flex items-center justify-center">
              <X className="text-[#BE185D] w-5 h-5" strokeWidth={3} />
            </div>
            <div>
              <p className="text-lg font-black text-[#BE185D] leading-none">{stats.incorrect}</p>
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mt-1">Review</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-slate-100 border-2 border-slate-200 flex items-center justify-center">
              <BookOpen className="text-slate-400 w-5 h-5" strokeWidth={3} />
            </div>
            <div>
              <p className="text-lg font-black text-slate-500 leading-none">{studySet.cards.length - (currentIndex)}</p>
              <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mt-1">Left</p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}
