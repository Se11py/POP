"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowLeft, Play, Settings, Share2, MoreVertical, Flame, Trophy, Clock, Star, BookOpen, CheckCircle2 } from 'lucide-react';
import { useParams } from 'next/navigation';

// Mock data for the specific set
const setDetails = {
  id: 1,
  title: "Spanish Vocabulary",
  description: "Essential words and phrases for everyday conversation. Perfect for beginners and intermediate learners looking to expand their active vocabulary.",
  category: "Languages",
  theme: "bg-[#DFF2FC] border-[#7DD3FC]",
  iconBg: "bg-[#0EA5E9]",
  textColor: "text-[#0284C7]",
  author: "Senorita Maria",
  lastUpdated: "2 days ago",
  level: "Intermediate",
  cards: [
    { id: 1, front: "El desayuno", back: "Breakfast", difficulty: "Easy" },
    { id: 2, front: "Desarrollar", back: "To develop", difficulty: "Medium" },
    { id: 3, front: "Imprescindible", back: "Essential / Indispensable", difficulty: "Hard" },
    { id: 4, front: "La madrugada", back: "Early morning / Dawn", difficulty: "Medium" },
    { id: 5, front: "Echar de menos", back: "To miss (someone/something)", difficulty: "Hard" },
    { id: 6, front: "La manzana", back: "Apple", difficulty: "Easy" },
  ]
};

export default function FlashcardSetView() {
  const params = useParams();
  
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", type: "spring", bounce: 0.4 } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const getDifficultyTheme = (difficulty: string) => {
    switch(difficulty) {
      case 'Easy': return 'bg-[#E2F7EB] text-[#059669] border-[#6EE7B7]';
      case 'Medium': return 'bg-[#FEF3C7] text-[#D97706] border-[#FCD34D]';
      case 'Hard': return 'bg-[#FFE5EC] text-[#BE185D] border-[#F9A8D4]';
      default: return 'bg-slate-100 text-slate-500 border-slate-200';
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-800 font-sans selection:bg-[#34D399] selection:text-white pb-32">
      {/* Friendly Custom Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b-2 border-slate-200/80">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/duolingo/flashcards" className="flex items-center gap-3 group text-slate-400 hover:text-slate-800 transition-colors">
            <div className="w-10 h-10 bg-white rounded-[14px] flex items-center justify-center border-2 border-slate-200 border-b-[4px] group-hover:bg-slate-50 active:border-b-2 active:translate-y-[2px] transition-all">
              <ArrowLeft strokeWidth={3} size={20} />
            </div>
            <span className="font-extrabold text-lg tracking-tight uppercase">Back to Sets</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center border-2 border-slate-200 border-b-[4px] text-slate-400 hover:text-slate-800 active:border-b-2 active:translate-y-[2px] transition-all">
              <Share2 size={20} strokeWidth={2.5} />
            </button>
            <button className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center border-2 border-slate-200 border-b-[4px] text-slate-400 hover:text-slate-800 active:border-b-2 active:translate-y-[2px] transition-all">
              <MoreVertical size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-10"
        >
          {/* Header Info */}
          <motion.div variants={fadeInUp} className={`bg-white rounded-[40px] border-2 border-b-[8px] ${setDetails.theme} p-8 md:p-12 relative overflow-hidden`}>
            {/* Background decoration */}
            <div className={`absolute -top-20 -right-20 w-64 h-64 ${setDetails.iconBg} opacity-10 rounded-full blur-3xl`}></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
              <div className="space-y-4 max-w-2xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className={`px-4 py-1.5 bg-white/80 backdrop-blur-sm rounded-xl text-sm font-black uppercase tracking-wider ${setDetails.textColor} border-2 border-white/50 shadow-sm`}>
                    {setDetails.category}
                  </span>
                  <span className="px-4 py-1.5 bg-white/80 backdrop-blur-sm rounded-xl text-sm font-black uppercase tracking-wider text-slate-600 border-2 border-white/50 shadow-sm">
                    {setDetails.level}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tighter leading-tight">
                  {setDetails.title}
                </h1>
                
                <p className="text-lg font-bold text-slate-500 leading-relaxed">
                  {setDetails.description}
                </p>
                
                <div className="flex items-center gap-4 text-sm font-bold text-slate-400 pt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white shadow-sm flex items-center justify-center overflow-hidden">
                      <span className="text-[10px] text-slate-500">SM</span>
                    </div>
                    {setDetails.author}
                  </div>
                  <span>•</span>
                  <span>{setDetails.cards.length} terms</span>
                </div>
              </div>
              
              <div className="w-full md:w-auto flex-shrink-0">
                <Link 
                  href={`/duolingo/flashcards/study/${setDetails.id}`}
                  className={`w-full md:w-auto px-10 py-5 ${setDetails.iconBg} text-white rounded-[24px] font-black text-xl hover:brightness-110 active:border-b-0 active:translate-y-[6px] transition-all border-b-[6px] border-black/20 flex items-center justify-center gap-3 shadow-sm uppercase tracking-wide`}
                >
                  <Play className="fill-white" size={24} /> Study Now
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Cards List */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="flex items-center justify-between px-2">
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">Terms in this set ({setDetails.cards.length})</h2>
            </div>
            
            <div className="space-y-4">
              {setDetails.cards.map((card, idx) => (
                <motion.div 
                  key={card.id}
                  variants={fadeInUp}
                  className="bg-white rounded-[24px] border-2 border-slate-200 border-b-[4px] p-6 hover:-translate-y-1 transition-transform flex flex-col sm:flex-row gap-6 justify-between group"
                >
                  <div className="flex-1 grid sm:grid-cols-2 gap-4 sm:gap-8 items-center">
                    <div className="space-y-1 sm:pr-6 sm:border-r-2 border-slate-100">
                      <span className="text-xs font-black text-slate-400 uppercase tracking-wider block sm:hidden mb-2">Front</span>
                      <p className="text-xl font-bold text-slate-700">{card.front}</p>
                    </div>
                    <div className="space-y-1 sm:pl-2">
                      <span className="text-xs font-black text-slate-400 uppercase tracking-wider block sm:hidden mb-2">Back</span>
                      <p className="text-xl font-bold text-[#34D399]">{card.back}</p>
                    </div>
                  </div>
                  
                  <div className="flex sm:flex-col items-center justify-between sm:justify-center gap-3 pl-4 sm:border-l-2 border-slate-100">
                    <span className={`px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-wider border-2 ${getDifficultyTheme(card.difficulty)}`}>
                      {card.difficulty}
                    </span>
                    <button className="w-8 h-8 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center border-2 border-slate-200 hover:bg-slate-100 hover:text-slate-600 transition-colors">
                      <Star size={16} strokeWidth={2.5} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </main>

      {/* Fixed Bottom Study CTA for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t-2 border-slate-200 md:hidden z-50">
        <Link 
          href={`/duolingo/flashcards/study/${setDetails.id}`}
          className={`w-full py-4 ${setDetails.iconBg} text-white rounded-2xl font-black text-lg active:border-b-0 active:translate-y-[4px] transition-all border-b-[4px] border-black/20 flex items-center justify-center gap-2 shadow-sm uppercase tracking-wide`}
        >
          <Play className="fill-white" size={20} /> Study Now
        </Link>
      </div>
    </div>
  );
}
