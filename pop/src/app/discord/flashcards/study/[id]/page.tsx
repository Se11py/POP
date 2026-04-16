"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { X, Check, RotateCcw, ArrowLeft, Trophy, Flame, Target, MessageSquare, Star, Info, Hash, Clock, BookOpen } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

// Mock data for the study session
const studySet = {
  id: 1,
  title: "Spanish Vocabulary",
  category: "Languages",
  roleColor: "#5865F2",
  cards: [
    { id: 1, front: "El desayuno", back: "Breakfast", difficulty: "Easy" },
    { id: 2, front: "Desarrollar", back: "To develop", difficulty: "Medium" },
    { id: 3, front: "Imprescindible", back: "Essential / Indispensable", difficulty: "Hard" },
    { id: 4, front: "La madrugada", back: "Early morning / Dawn", difficulty: "Medium" },
    { id: 5, front: "Echar de menos", back: "To miss (someone/something)", difficulty: "Hard" },
    { id: 6, front: "La manzana", back: "Apple", difficulty: "Easy" },
  ]
};

export default function DiscordInteractiveStudyMode() {
  const params = useParams();
  const router = useRouter();
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [stats, setStats] = useState({ correct: 0, incorrect: 0 });
  const [isComplete, setIsComplete] = useState(false);
  const [direction, setDirection] = useState(0);

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
      x: direction > 0 ? 100 : direction < 0 ? -100 : 0,
      opacity: 0,
      scale: 0.95
    }),
    active: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : direction < 0 ? 100 : 0,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 }
    })
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-[#313338] flex flex-col items-center justify-center p-6 text-center text-[#F2F3F5]">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="space-y-8 max-w-md w-full"
        >
          <div className="w-24 h-24 bg-[#5865F2] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <Trophy className="text-white w-12 h-12" />
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold text-white tracking-tight">Session Ended</h1>
            <p className="text-lg font-medium text-[#B5BAC1]">You have successfully navigated the deck.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#2B2D31] p-6 rounded-2xl border border-[#1E1F22] space-y-1">
              <p className="text-3xl font-extrabold text-[#23A559]">{stats.correct}</p>
              <p className="text-[10px] font-bold uppercase text-[#80848E] tracking-widest">Mastered</p>
            </div>
            <div className="bg-[#2B2D31] p-6 rounded-2xl border border-[#1E1F22] space-y-1">
              <p className="text-3xl font-extrabold text-[#ED4245]">{stats.incorrect}</p>
              <p className="text-[10px] font-bold uppercase text-[#80848E] tracking-widest">To Review</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <button 
              onClick={handleReset}
              className="w-full py-4 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-[4px] font-bold text-lg transition-all flex items-center justify-center gap-3"
            >
              <RotateCcw size={20} /> Restart Session
            </button>
            <Link 
              href="/discord/flashcards"
              className="w-full py-4 bg-[#4E5058] hover:bg-[#6D6F78] text-white rounded-[4px] font-bold text-lg transition-all"
            >
              Exit to #flashcards
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#313338] flex flex-col font-sans selection:bg-[#5865F2]/40 selection:text-white text-[#F2F3F5]">
      {/* Header with Discord Progress */}
      <header className="px-6 py-6 max-w-4xl mx-auto w-full flex items-center gap-6">
        <button 
          onClick={() => router.back()}
          className="w-10 h-10 flex-shrink-0 text-[#B5BAC1] hover:text-[#F2F3F5] transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="flex-1 flex flex-col gap-2">
           <div className="flex justify-between items-center text-[10px] font-bold text-[#80848E] uppercase tracking-widest">
             <span>Level Progress</span>
             <span>{Math.round(progress)}%</span>
           </div>
           <div className="h-2 bg-[#1E1F22] rounded-full overflow-hidden">
             <motion.div 
               initial={{ width: 0 }}
               animate={{ width: `${progress}%` }}
               className="h-full bg-[#5865F2] rounded-full"
             />
           </div>
        </div>

        <div className="flex items-center gap-2 text-[#23A559] font-bold">
          <Target size={18} />
          <span className="text-sm">Active</span>
        </div>
      </header>

      {/* Main Study Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 gap-12">
        <div className="w-full max-w-xl relative h-[400px]" style={{ perspective: '1000px' }}>
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
                rotateY: isFlipped ? 180 : 0,
                transition: { 
                  rotateY: { duration: 0.4, ease: "easeInOut" },
                  default: { duration: 0.3 }
                }
              }}
              exit="exit"
              className="w-full h-full cursor-pointer relative"
              onClick={handleFlip}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Front Side */}
              <div 
                className="absolute inset-0 w-full h-full bg-[#2B2D31] rounded-[16px] border border-[#1E1F22] p-12 flex flex-col items-center justify-center text-center shadow-2xl"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="absolute top-8 left-1/2 -translate-x-1/2">
                   <span className="text-[10px] font-bold uppercase tracking-widest text-[#80848E] px-3 py-1 bg-[#1E1F22] rounded-full border border-[#111214]">
                     {currentCard.difficulty} Level
                   </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  {currentCard.front}
                </h2>
                
                <div className="absolute bottom-10 text-[#80848E] font-bold uppercase tracking-widest text-[10px] flex items-center gap-2">
                  <MessageSquare size={14} /> Click to flip
                </div>
              </div>

              {/* Back Side */}
              <div 
                className="absolute inset-0 w-full h-full bg-[#2B2D31] rounded-[16px] border border-[#5865F2] p-12 flex flex-col items-center justify-center text-center shadow-2xl"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <div className="absolute top-8 left-1/2 -translate-x-1/2">
                   <div className="w-8 h-8 rounded-full bg-[#5865F2]/20 flex items-center justify-center">
                     <Hash size={16} className="text-[#5865F2]" />
                   </div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#5865F2] tracking-tight leading-tight">
                  {currentCard.back}
                </h2>

                <div className="absolute bottom-10 flex items-center gap-2 text-[#80848E] font-bold text-[10px] uppercase tracking-widest">
                  <Star size={14} />
                  Pinned Term
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Action Buttons */}
        <div className="w-full max-w-xl grid grid-cols-2 gap-4">
          <button 
            disabled={!isFlipped}
            onClick={() => handleScore(false)}
            className={`py-4 rounded-[4px] font-bold text-sm transition-all uppercase tracking-wider flex items-center justify-center gap-2 ${
              isFlipped 
              ? "bg-[#ED4245] hover:bg-[#C03537] text-white" 
              : "bg-[#2B2D31] text-[#4E5058] cursor-not-allowed border border-[#1E1F22]"
            }`}
          >
            <X size={16} strokeWidth={3} /> Needs Review
          </button>
          
          <button 
            disabled={!isFlipped}
            onClick={() => handleScore(true)}
            className={`py-4 rounded-[4px] font-bold text-sm transition-all uppercase tracking-wider flex items-center justify-center gap-2 ${
              isFlipped 
              ? "bg-[#23A559] hover:bg-[#1A7D44] text-white" 
              : "bg-[#2B2D31] text-[#4E5058] cursor-not-allowed border border-[#1E1F22]"
            }`}
          >
            <Check size={16} strokeWidth={3} /> Mastered
          </button>
        </div>
      </main>

      {/* Stats Counter Footer */}
      <footer className="px-6 py-6 border-t border-[#1E1F22] bg-[#2B2D31]">
        <div className="max-w-4xl mx-auto flex justify-around items-center">
          <div className="flex items-center gap-3">
             <div className="text-right">
              <p className="text-sm font-bold text-[#23A559] leading-none">{stats.correct}</p>
              <p className="text-[10px] font-bold uppercase text-[#80848E] tracking-widest mt-1">Learned</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-bold text-[#ED4245] leading-none">{stats.incorrect}</p>
              <p className="text-[10px] font-bold uppercase text-[#80848E] tracking-widest mt-1">Review</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-bold text-white leading-none">{studySet.cards.length - (currentIndex)}</p>
              <p className="text-[10px] font-bold uppercase text-[#80848E] tracking-widest mt-1">Remaining</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
