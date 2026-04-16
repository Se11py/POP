"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { 
  Zap, ArrowLeft, Play, Clock, Trophy, Target, BookOpen, Flame, ArrowRight, Activity, CheckCircle2, Lock
} from 'lucide-react';

const rushTopics = [
  { id: 'mechanics', title: 'Classical Mechanics', progress: 45, icon: '⚙️', color: 'bg-[#5865F2]', textColor: 'text-[#5865F2]', border: 'border-[#5865F2]' },
  { id: 'energy', title: 'Energy & Power', progress: 12, icon: '⚡', color: 'bg-[#FEE75C]', textColor: 'text-[#FEE75C]', border: 'border-[#FEE75C]' },
  { id: 'thermo', title: 'Thermodynamics', progress: 0, icon: '🌡️', color: 'bg-[#ED4245]', textColor: 'text-[#ED4245]', border: 'border-[#ED4245]' },
  { id: 'electro', title: 'Electromagnetism', progress: 0, icon: '🧲', color: 'bg-[#5865F2]', textColor: 'text-[#5865F2]', border: 'border-[#5865F2]' },
  { id: 'nuclear', title: 'Nuclear Physics', progress: 0, icon: '☢️', color: 'bg-[#23A559]', textColor: 'text-[#23A559]', border: 'border-[#23A559]' },
];

export default function DiscordPhysicsRushDashboard() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen bg-[#313338] text-[#F2F3F5] font-sans selection:bg-[#5865F2]/40 selection:text-white pb-24">
      {/* Discord-style Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-[#1E1F22] border-b border-[#111214] shadow-md">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <Link href="/discord/classes" className="flex items-center gap-2 text-[#B5BAC1] hover:text-[#F2F3F5] transition-colors group">
            <ArrowLeft size={18} />
            <span className="font-bold text-sm uppercase tracking-wider italic">Exit Rush</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#ED4245]/10 rounded-[4px] border border-[#ED4245]/20 text-[#ED4245] text-xs font-bold uppercase tracking-widest animate-pulse">
              <Zap size={14} fill="currentColor" />
              <span>RUSH MODE</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-8"
        >
          {/* Hero Section */}
          <motion.div variants={fadeInUp} className="bg-[#1E1F22] rounded-[16px] border border-[#111214] p-8 md:p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Zap size={200} className="text-white" />
            </div>
            
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#ED4245]/20 rounded-[4px] text-[10px] font-bold text-[#ED4245] uppercase tracking-widest mb-6 border border-[#ED4245]/30">
                <Flame size={14} fill="currentColor" /> High Speed Learning
              </div>
              
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
                Physics <span className="text-[#ED4245] italic">RUSH</span>
              </h1>
              
              <p className="text-[#DBDEE1] text-lg font-medium leading-relaxed mb-8 max-w-2xl">
                Master the entire IGCSE Physics curriculum in record time. Zero fluff, 100% impact.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3 bg-[#5865F2] text-white rounded-[4px] font-bold text-sm hover:bg-[#4752C4] transition-all flex items-center justify-center gap-2 shadow-lg uppercase tracking-widest">
                  <Play size={16} fill="currentColor" /> Start Sprint
                </button>
                <button className="px-8 py-3 bg-[#2B2D31] text-[#DBDEE1] rounded-[4px] font-bold text-sm hover:bg-[#35373C] transition-all border border-[#111214] flex items-center justify-center gap-2 shadow-lg uppercase tracking-widest">
                  <Target size={16} /> Practice Mock
                </button>
              </div>
            </div>
          </motion.div>

          {/* Rush Stats */}
          <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Topics', value: '5', icon: <BookOpen />, color: 'bg-[#5865F2]' },
              { label: 'Sprint Time', value: '20h+', icon: <Clock />, color: 'bg-[#ED4245]' },
              { label: 'Challenges', value: '100+', icon: <Trophy />, color: 'bg-[#FEE75C]' },
              { label: 'Accuracy', value: '94%', icon: <Activity />, color: 'bg-[#23A559]' },
            ].map((stat, i) => (
              <div key={i} className="bg-[#2B2D31] p-6 rounded-[12px] border border-[#1E1F22] flex flex-col items-center text-center gap-2 hover:bg-[#35373C] transition-colors group cursor-pointer">
                <div className={`w-10 h-10 rounded-[8px] ${stat.color} text-white flex items-center justify-center shadow-lg mb-2 group-hover:scale-110 transition-transform`}>
                  {React.cloneElement(stat.icon as any, { size: 20 })}
                </div>
                <span className="text-2xl font-extrabold text-white">{stat.value}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#80848E]">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Topics Grid */}
          <div className="space-y-6">
            <motion.div variants={fadeInUp} className="flex items-center justify-between px-2 border-b border-[#1E1F22] pb-2">
              <h2 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                <span className="text-[#80848E] font-light">#</span>rush-modules
              </h2>
              <div className="text-[10px] font-bold text-[#ED4245] uppercase tracking-widest bg-[#ED4245]/10 px-2 py-1 rounded border border-[#ED4245]/20">
                45% Total Coverage
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {rushTopics.map((topic) => (
                <motion.div
                  key={topic.id}
                  variants={fadeInUp}
                  className="bg-[#2B2D31] rounded-[12px] border border-[#1E1F22] p-6 flex flex-col hover:bg-[#35373C] transition-colors cursor-pointer group relative overflow-hidden"
                >
                  <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:scale-110 transition-transform text-8xl pointer-events-none">
                    {topic.icon}
                  </div>

                  <div className="flex justify-between items-start mb-6 relative z-10">
                    <div 
                      className="w-12 h-12 rounded-[16px] flex items-center justify-center text-2xl shadow-lg transition-all group-hover:rotate-6"
                      style={{ backgroundColor: topic.color, boxShadow: `0 4px 15px ${topic.color}40` }}
                    >
                      {topic.icon}
                    </div>
                    {topic.progress === 100 ? (
                      <div className="w-8 h-8 bg-[#23A559]/20 rounded-full flex items-center justify-center text-[#23A559] border border-[#23A559]/30">
                        <CheckCircle2 size={16} strokeWidth={3} />
                      </div>
                    ) : topic.progress === 0 ? (
                      <div className="w-8 h-8 bg-[#1E1F22] rounded-full flex items-center justify-center text-[#4E5058] border border-[#111214]">
                        <Lock size={14} />
                      </div>
                    ) : null}
                  </div>

                  <h3 className="text-lg font-extrabold text-white mb-4 leading-tight italic group-hover:text-[#DBDEE1] transition-colors">
                    {topic.title}
                  </h3>

                  <div className="mt-auto space-y-4 relative z-10">
                    <div className="space-y-2">
                      <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                        <span className="text-[#80848E]">Mastery</span>
                        <span className={topic.textColor}>{topic.progress}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#1E1F22] rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${topic.color} transition-all duration-1000`} 
                          style={{ width: `${topic.progress}%` }}
                        />
                      </div>
                    </div>
                    
                    <button className={`w-full py-2 rounded-[4px] font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 border ${topic.progress > 0 ? `${topic.color} text-white border-transparent` : 'bg-[#1E1F22] text-[#4E5058] border-[#111214]'}`}>
                      {topic.progress > 0 ? 'Continue' : 'Unlock'} <ArrowRight size={14} strokeWidth={3} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <motion.div variants={fadeInUp} className="bg-[#2B2D31] rounded-[16px] border border-[#1E1F22] p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-extrabold text-white tracking-tight">Need a quick review?</h3>
              <p className="text-sm font-medium text-[#B5BAC1] max-w-md">Take a 5-minute lightning quiz to refresh your knowledge on recent topics.</p>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <button className="w-full md:w-auto px-6 py-3 bg-[#ED4245] text-white rounded-[4px] font-bold text-sm hover:bg-[#C03537] transition-all flex items-center justify-center gap-2 shadow-lg uppercase tracking-widest">
                <Zap size={16} fill="currentColor" /> Lightning Quiz
              </button>
            </div>
          </motion.div>

        </motion.div>
      </main>
    </div>
  );
}