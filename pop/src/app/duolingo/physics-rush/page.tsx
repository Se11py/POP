"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  ArrowLeft, 
  Play, 
  Clock, 
  Trophy, 
  Target, 
  BookOpen, 
  Flame, 
  ArrowRight, 
  Settings,
  Share2,
  Lock,
  Search,
  Star,
  Activity,
  CheckCircle2
} from 'lucide-react';

const rushTopics = [
  { id: 'mechanics', title: 'Classical Mechanics', progress: 45, icon: '⚙️', color: 'bg-[#5865F2]', textColor: 'text-[#5865F2]', bg: 'bg-[#5865F2]/10', border: 'border-[#5865F2]' },
  { id: 'energy', title: 'Energy & Power', progress: 12, icon: '⚡', color: 'bg-[#FEE75C]', textColor: 'text-[#FEE75C]', bg: 'bg-[#FEE75C]/10', border: 'border-[#FEE75C]' },
  { id: 'thermo', title: 'Thermodynamics', progress: 0, icon: '🌡️', color: 'bg-[#ED4245]', textColor: 'text-[#ED4245]', bg: 'bg-[#ED4245]/10', border: 'border-[#ED4245]' },
  { id: 'electro', title: 'Electromagnetism', progress: 0, icon: '🧲', color: 'bg-[#5865F2]', textColor: 'text-[#5865F2]', bg: 'bg-[#5865F2]/10', border: 'border-[#5865F2]' },
  { id: 'nuclear', title: 'Nuclear Physics', progress: 0, icon: '☢️', color: 'bg-[#23A559]', textColor: 'text-[#23A559]', bg: 'bg-[#23A559]/10', border: 'border-[#23A559]' },
];

export default function PhysicsRushDashboard() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, type: "spring", bounce: 0.4 } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-800 font-sans selection:bg-[#7B2FF2] selection:text-white pb-24">
      {/* Physics Rush Specialized Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b-2 border-slate-200/80">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/duolingo/classes" className="flex items-center gap-3 group text-slate-400 hover:text-slate-800 transition-colors">
            <div className="w-10 h-10 bg-white rounded-[14px] flex items-center justify-center border-2 border-slate-200 border-b-[4px] group-hover:bg-slate-50 active:border-b-2 active:translate-y-[2px] transition-all">
              <ArrowLeft strokeWidth={3} size={20} />
            </div>
            <span className="font-extrabold text-lg tracking-tight uppercase">Exit Rush</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#F3E8FF] rounded-2xl border-2 border-[#D8B4FE] text-[#7E22CE] font-black shadow-sm">
              <Zap size={20} fill="currentColor" />
              <span>RUSH MODE</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="space-y-12"
        >
          {/* Hero Section */}
          <motion.div variants={fadeInUp} className="bg-[#7B2FF2] rounded-[48px] border-b-[12px] border-[#5B21B6] p-8 md:p-16 relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12">
              <Zap size={240} fill="currentColor" />
            </div>
            
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-2xl text-sm font-black uppercase tracking-widest mb-6 border border-white/30">
                <Flame size={16} fill="currentColor" /> High Speed Learning
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-6">
                Physics <span className="text-[#A7F3D0]">RUSH</span>
              </h1>
              
              <p className="text-xl md:text-2xl font-bold text-white/90 leading-relaxed mb-10">
                Master the entire IGCSE Physics curriculum in record time. Zero fluff, 100% impact.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-10 py-5 bg-white text-[#7B2FF2] rounded-[24px] font-black text-xl hover:bg-[#F3F4F6] active:border-b-0 active:translate-y-[6px] transition-all border-b-[6px] border-[#E5E7EB] flex items-center justify-center gap-3 shadow-lg uppercase tracking-wide">
                  <Play size={24} fill="currentColor" /> Start Sprint
                </button>
                <button className="px-10 py-5 bg-[#5B21B6] text-white rounded-[24px] font-black text-xl hover:bg-[#4C1D95] active:border-b-0 active:translate-y-[6px] transition-all border-b-[6px] border-[#2E1065] flex items-center justify-center gap-3 shadow-lg uppercase tracking-wide">
                  <Target size={24} /> Practice Mock
                </button>
              </div>
            </div>
          </motion.div>

          {/* Rush Stats */}
          <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Topics', value: '5', icon: <BookOpen />, color: 'bg-blue-500', theme: 'bg-white border-blue-100' },
              { label: 'Sprint Time', value: '20h+', icon: <Clock />, color: 'bg-orange-500', theme: 'bg-white border-orange-100' },
              { label: 'Challenges', value: '100+', icon: <Trophy />, color: 'bg-yellow-500', theme: 'bg-white border-yellow-100' },
              { label: 'Top Accuracy', value: '94%', icon: <Activity />, color: 'bg-emerald-500', theme: 'bg-white border-emerald-100' },
            ].map((stat, i) => (
              <div key={i} className={`p-6 rounded-[32px] border-2 border-b-[6px] ${stat.theme} flex flex-col items-center text-center gap-2 hover:-translate-y-1 transition-transform`}>
                <div className={`w-12 h-12 rounded-2xl ${stat.color} text-white flex items-center justify-center shadow-sm mb-2`}>
                  {React.cloneElement(stat.icon as any, { size: 24 })}
                </div>
                <span className="text-3xl font-black text-slate-800">{stat.value}</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Topics Grid */}
          <div className="space-y-8">
            <motion.div variants={fadeInUp} className="flex items-center justify-between px-4">
              <h2 className="text-3xl font-black text-slate-800 tracking-tight">Rush Modules</h2>
              <div className="text-sm font-black text-[#7B2FF2] uppercase tracking-widest">
                45% Total Coverage
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rushTopics.map((topic) => (
                <motion.div
                  key={topic.id}
                  variants={fadeInUp}
                  className={`bg-white rounded-[40px] border-2 border-b-[8px] ${topic.border} p-8 flex flex-col hover:-translate-y-2 transition-transform duration-300 cursor-pointer group relative overflow-hidden`}
                >
                  <div className="flex justify-between items-start mb-8 relative z-10">
                    <div className={`w-16 h-16 rounded-[20px] ${topic.color} flex items-center justify-center border-b-[4px] border-black/10 shadow-sm text-3xl group-hover:scale-110 transition-transform`}>
                      {topic.icon}
                    </div>
                    {topic.progress === 100 ? (
                      <div className="w-10 h-10 bg-[#34D399] rounded-full flex items-center justify-center text-white shadow-sm border-b-2 border-[#059669]">
                        <CheckCircle2 size={24} strokeWidth={3} />
                      </div>
                    ) : topic.progress === 0 ? (
                      <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-300 border-b-2 border-slate-200">
                        <Lock size={20} />
                      </div>
                    ) : null}
                  </div>

                  <h3 className="text-2xl font-black text-slate-800 mb-6 leading-tight group-hover:text-[#7B2FF2] transition-colors">{topic.title}</h3>

                  <div className="mt-auto space-y-4 relative z-10">
                    <div className="space-y-2">
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                        <span className="text-slate-400">Mastery</span>
                        <span className={topic.textColor}>{topic.progress}%</span>
                      </div>
                      <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5">
                        <div 
                          className={`h-full rounded-full ${topic.color} transition-all duration-1000`} 
                          style={{ width: `${topic.progress}%` }}
                        />
                      </div>
                    </div>
                    
                    <button className={`w-full py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 border-b-[4px] border-black/10 ${topic.progress > 0 ? `${topic.color} text-white` : 'bg-slate-100 text-slate-400'}`}>
                      {topic.progress > 0 ? 'Continue' : 'Unlock'} <ArrowRight size={16} strokeWidth={3} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <motion.div variants={fadeInUp} className="bg-white rounded-[40px] border-2 border-b-[12px] border-slate-200 p-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-3xl font-black text-slate-800 tracking-tight">Need a quick review?</h3>
              <p className="text-lg font-bold text-slate-500 max-w-md">Take a 5-minute lightning quiz to refresh your knowledge on recent topics.</p>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <button className="flex-1 md:flex-none px-8 py-4 bg-[#7B2FF2] text-white rounded-2xl font-black uppercase tracking-widest border-b-[4px] border-[#5B21B6] active:border-b-0 active:translate-y-[4px] transition-all flex items-center justify-center gap-2">
                <Zap size={20} fill="currentColor" /> Lightning Quiz
              </button>
            </div>
          </motion.div>

        </motion.div>
      </main>
    </div>
  );
}
