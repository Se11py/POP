"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ArrowLeft, Play, Settings, Share2, MoreVertical, Flame, Trophy, Clock, Star, BookOpen, CheckCircle2, Hash, Shield, Info, ExternalLink, Check } from 'lucide-react';
import { useParams } from 'next/navigation';

// Mock data for the specific set
const setDetails = {
  id: 1,
  title: "Spanish Vocabulary",
  description: "Essential words and phrases for everyday conversation. Perfect for beginners and intermediate learners looking to expand their active vocabulary for the upcoming mock exams.",
  category: "Languages",
  theme: "bg-[#5865F2]/10 border-[#5865F2]/20",
  iconBg: "bg-[#5865F2]",
  textColor: "text-[#5865F2]",
  roleColor: "#5865F2",
  author: "Sarah M.",
  authorAvatar: "👩‍🎓",
  lastUpdated: "Yesterday at 14:20",
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

export default function DiscordFlashcardSetView() {
  const params = useParams();
  
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Easy': return 'text-[#23A559] bg-[#23A559]/10 border-[#23A559]/20';
      case 'Medium': return 'text-[#FEE75C] bg-[#FEE75C]/10 border-[#FEE75C]/20';
      case 'Hard': return 'text-[#ED4245] bg-[#ED4245]/10 border-[#ED4245]/20';
      default: return 'text-[#B5BAC1] bg-[#4E5058]/10 border-[#4E5058]/20';
    }
  };

  return (
    <div className="min-h-screen bg-[#313338] text-[#F2F3F5] font-sans selection:bg-[#5865F2]/40 selection:text-white pb-32">
      {/* Discord-style Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-[#1E1F22] border-b border-[#111214] shadow-md">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <Link href="/discord/flashcards" className="flex items-center gap-2 text-[#B5BAC1] hover:text-[#F2F3F5] transition-colors group">
            <ArrowLeft size={18} />
            <span className="font-bold text-sm uppercase tracking-wider">Back to #flashcards</span>
          </Link>
          
          <div className="flex items-center gap-3">
            <button className="p-2 text-[#B5BAC1] hover:text-[#F2F3F5] transition-colors">
              <Share2 size={18} />
            </button>
            <button className="p-2 text-[#B5BAC1] hover:text-[#F2F3F5] transition-colors">
              <MoreVertical size={18} />
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Header Card - Discord Profile Style */}
          <motion.div variants={fadeInUp} className="bg-[#2B2D31] rounded-[16px] border border-[#1E1F22] overflow-hidden shadow-xl">
             {/* Banner */}
             <div className="h-24 w-full" style={{ backgroundColor: setDetails.roleColor }}></div>
             
             <div className="px-8 pb-8 relative">
                {/* Avatar */}
                <div className="absolute -top-12 left-8 w-24 h-24 rounded-full bg-[#313338] border-[6px] border-[#2B2D31] flex items-center justify-center text-4xl shadow-lg">
                  {setDetails.authorAvatar}
                </div>

                <div className="pt-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                       <h1 className="text-3xl font-extrabold text-white tracking-tight">{setDetails.title}</h1>
                       <div className="w-5 h-5 bg-[#5865F2] rounded-full flex items-center justify-center">
                         <Check size={12} className="text-white" strokeWidth={4} />
                       </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-0.5 rounded-[4px] bg-[#1E1F22] text-[10px] font-bold text-[#F2F3F5] border border-[#111214]">
                        {setDetails.category}
                      </span>
                      <span className="px-2 py-0.5 rounded-[4px] bg-[#1E1F22] text-[10px] font-bold text-[#B5BAC1] border border-[#111214]">
                        {setDetails.level}
                      </span>
                    </div>

                    <p className="text-[#DBDEE1] text-[15px] font-medium leading-relaxed max-w-2xl">
                      {setDetails.description}
                    </p>

                    <div className="flex items-center gap-4 text-xs font-bold text-[#80848E] pt-2">
                      <span>Authored by <span className="text-white hover:underline cursor-pointer">{setDetails.author}</span></span>
                      <span>•</span>
                      <span>{setDetails.cards.length} cards</span>
                      <span>•</span>
                      <span>Updated {setDetails.lastUpdated}</span>
                    </div>
                  </div>

                  <Link 
                    href={`/discord/flashcards/study/${setDetails.id}`}
                    className="w-full md:w-auto px-8 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-[4px] font-bold text-base transition-all flex items-center justify-center gap-3 shadow-lg hover:shadow-[#5865F2]/20"
                  >
                    <Play className="fill-white" size={18} /> Study Session
                  </Link>
                </div>
             </div>
          </motion.div>

          {/* Cards List - Discord Message style */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-[#80848E] px-2">
              <span className="text-xs font-bold uppercase tracking-widest">Deck Contents</span>
              <div className="h-px flex-1 bg-[#1E1F22]"></div>
            </div>

            <div className="bg-[#2B2D31] rounded-[16px] border border-[#1E1F22] overflow-hidden">
              {setDetails.cards.map((card, idx) => (
                <motion.div 
                  key={card.id}
                  variants={fadeInUp}
                  className={`p-6 flex flex-col sm:flex-row gap-6 border-b border-[#1E1F22] last:border-b-0 hover:bg-[#35373C] transition-colors group`}
                >
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[#1E1F22] flex items-center justify-center text-xs font-bold text-[#80848E]">
                    {idx + 1}
                  </div>
                  
                  <div className="flex-1 grid sm:grid-cols-2 gap-8">
                    <div>
                      <p className="text-[10px] font-bold text-[#80848E] uppercase tracking-widest mb-2">Prompt</p>
                      <p className="text-lg font-semibold text-[#F2F3F5]">{card.front}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-[#5865F2] uppercase tracking-widest mb-2">Response</p>
                      <p className="text-lg font-semibold text-[#5865F2]">{card.back}</p>
                    </div>
                  </div>

                  <div className="shrink-0 flex sm:flex-col items-center justify-center gap-3">
                    <span className={`px-2 py-0.5 rounded-[4px] text-[10px] font-bold uppercase tracking-wider border ${getDifficultyColor(card.difficulty)}`}>
                      {card.difficulty}
                    </span>
                    <button className="text-[#80848E] hover:text-[#FEE75C] transition-colors">
                      <Star size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Extra Info / Tips - Embed style */}
          <motion.div variants={fadeInUp} className="bg-[#2B2D31] rounded-[16px] border-l-4 border-[#5865F2] p-6 shadow-md">
            <div className="flex items-center gap-2 mb-3 text-white">
              <Info size={18} className="text-[#5865F2]" />
              <h3 className="font-bold text-sm">Pro Study Tip</h3>
            </div>
            <p className="text-sm text-[#DBDEE1] leading-relaxed">
              When studying this set, try to visualize the scenarios where these phrases are used. Studies show that situational context improves long-term retention by 40% in Language Acquisition.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <button className="text-xs font-bold text-[#5865F2] hover:underline flex items-center gap-1">
                Read full research <ExternalLink size={12} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
