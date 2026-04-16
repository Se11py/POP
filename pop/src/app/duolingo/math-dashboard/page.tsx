"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { 
  Calculator, 
  ArrowLeft, 
  Target, 
  Trophy, 
  Flame, 
  Star, 
  ChevronRight, 
  Zap, 
  BookOpen, 
  BarChart3, 
  Activity,
  CheckCircle2,
  TrendingUp,
  Brain,
  Play
} from 'lucide-react';

const tiers = [
  { 
    id: 'foundation', 
    name: 'Foundation', 
    level: 'Grades 1-3', 
    progress: 100, 
    color: 'bg-[#23A559]', 
    textColor: 'text-[#23A559]', 
    borderColor: 'border-[#23A559]',
    description: 'Fundamental numbers, basic operations, and geometry basics.',
    topics: ['Integers', 'Addition/Subtraction', 'Basic Shapes', 'Fractions Intro']
  },
  { 
    id: 'intermediate', 
    name: 'Intermediate', 
    level: 'Grades 4-6', 
    progress: 65, 
    color: 'bg-[#FEE75C]', 
    textColor: 'text-[#D97706]', 
    borderColor: 'border-[#FEE75C]',
    description: 'Decimals, percentages, early algebra, and data handling.',
    topics: ['Decimals', 'Early Algebra', 'Ratios', 'Statistics']
  },
  { 
    id: 'advanced', 
    name: 'Advanced', 
    level: 'Grades 7-9', 
    progress: 28, 
    color: 'bg-[#EB459E]', 
    textColor: 'text-[#EB459E]', 
    borderColor: 'border-[#EB459E]',
    description: 'Trigonometry, complex equations, probability, and calculus prep.',
    topics: ['Trigonometry', 'Quadratic Equations', 'Vectors', 'Probability']
  }
];

export default function MathDashboard() {
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

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-800 font-sans selection:bg-[#EB459E] selection:text-white pb-24">
      {/* Math Specialized Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b-2 border-slate-200/80">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/duolingo/classes" className="flex items-center gap-3 group text-slate-400 hover:text-slate-800 transition-colors">
            <div className="w-10 h-10 bg-white rounded-[14px] flex items-center justify-center border-2 border-slate-200 border-b-[4px] group-hover:bg-slate-50 active:border-b-2 active:translate-y-[2px] transition-all">
              <ArrowLeft strokeWidth={3} size={20} />
            </div>
            <span className="font-extrabold text-lg tracking-tight uppercase">Exit Math</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#FFE5EC] rounded-2xl border-2 border-[#F9A8D4] text-[#BE185D] font-black shadow-sm">
              <Calculator size={20} />
              <span>MATH MASTERY</span>
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
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-4">
            <motion.div variants={fadeInUp} className="space-y-2">
              <h1 className="text-5xl font-black text-slate-800 tracking-tighter">
                Mathematics <span className="text-[#EB459E]">Dashboard</span>
              </h1>
              <p className="text-xl text-slate-500 font-medium">Tracking your journey across Foundations to Advanced levels.</p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex items-center gap-4 bg-white p-4 rounded-3xl border-2 border-b-[6px] border-slate-200">
              <div className="text-right">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Rank</p>
                <p className="text-xl font-black text-slate-800">#42 TOP</p>
              </div>
              <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center text-white border-b-4 border-yellow-600">
                <Trophy size={24} fill="currentColor" />
              </div>
            </motion.div>
          </div>

          {/* Quick Analytics */}
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Weekly Streak', value: '12 Days', icon: <Flame className="text-orange-500" fill="currentColor" />, theme: 'border-orange-200 bg-orange-50/30' },
              { label: 'Formulas Mastered', value: '156', icon: <Brain className="text-[#EB459E]" />, theme: 'border-pink-200 bg-pink-50/30' },
              { label: 'Avg. Accuracy', value: '82%', icon: <Target className="text-emerald-500" />, theme: 'border-emerald-200 bg-emerald-50/30' },
            ].map((stat, i) => (
              <div key={i} className={`p-8 rounded-[40px] border-2 border-b-[8px] ${stat.theme} flex items-center gap-6 group hover:-translate-y-1 transition-transform`}>
                <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-sm border-2 border-slate-100 group-hover:scale-110 transition-transform">
                  {React.cloneElement(stat.icon as any, { size: 32 })}
                </div>
                <div>
                  <p className="text-3xl font-black text-slate-800 leading-none">{stat.value}</p>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mt-2">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Math Tiers */}
          <div className="space-y-8">
            <motion.h2 variants={fadeInUp} className="text-3xl font-black text-slate-800 tracking-tight px-4">Learning Tiers</motion.h2>
            
            <div className="grid grid-cols-1 gap-8">
              {tiers.map((tier) => (
                <motion.div
                  key={tier.id}
                  variants={fadeInUp}
                  className={`bg-white rounded-[48px] border-2 border-b-[12px] ${tier.borderColor} p-8 md:p-12 relative overflow-hidden group hover:shadow-xl transition-all`}
                >
                  <div className="relative z-10 flex flex-col lg:flex-row gap-10">
                    {/* Left: Info */}
                    <div className="flex-1 space-y-6">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-2xl ${tier.color} text-white flex items-center justify-center font-black text-2xl border-b-4 border-black/10`}>
                          {tier.name[0]}
                        </div>
                        <div>
                          <h3 className="text-3xl font-black text-slate-800">{tier.name} Level</h3>
                          <p className={`text-sm font-black uppercase tracking-widest ${tier.textColor}`}>{tier.level}</p>
                        </div>
                      </div>
                      
                      <p className="text-lg font-bold text-slate-500 leading-relaxed max-w-xl">
                        {tier.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {tier.topics.map((topic, i) => (
                          <span key={i} className="px-4 py-2 bg-slate-50 rounded-xl text-xs font-black text-slate-400 border border-slate-100 uppercase tracking-wide">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right: Progress & Action */}
                    <div className="lg:w-80 flex flex-col justify-between gap-8">
                      <div className="space-y-4">
                        <div className="flex justify-between items-end">
                          <span className="text-sm font-black uppercase tracking-widest text-slate-400">Path Progress</span>
                          <span className={`text-4xl font-black ${tier.textColor}`}>{tier.progress}%</span>
                        </div>
                        <div className="w-full h-6 bg-slate-100 rounded-full overflow-hidden p-1 border-2 border-slate-50 shadow-inner">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${tier.progress}%` }}
                            className={`h-full rounded-full ${tier.color} shadow-sm transition-all duration-1000`}
                          />
                        </div>
                      </div>

                      <button className={`w-full py-5 rounded-[24px] font-black text-xl uppercase tracking-widest transition-all border-b-[8px] border-black/10 flex items-center justify-center gap-3 ${tier.progress === 100 ? 'bg-[#FAF9F6] text-slate-400' : `${tier.color} text-white hover:brightness-110 active:border-b-0 active:translate-y-[8px]`}`}>
                        {tier.progress === 100 ? <CheckCircle2 size={28} strokeWidth={3} /> : <Play size={28} fill="currentColor" />}
                        {tier.progress === 100 ? 'Level Mastered' : tier.progress > 0 ? 'Continue' : 'Start Path'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Detailed Analytics CTA */}
          <motion.div variants={fadeInUp} className="bg-slate-900 rounded-[48px] border-b-[12px] border-black p-12 text-white relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 opacity-10">
              <BarChart3 size={300} />
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="space-y-4 text-center md:text-left">
                <h3 className="text-4xl font-black tracking-tighter">View Your Full Transcript</h3>
                <p className="text-xl font-bold text-slate-400 max-w-xl">Deep-dive into your performance by topic, see mock history, and view personalized growth recommendations.</p>
              </div>
              <button className="px-10 py-5 bg-[#EB459E] text-white rounded-[24px] font-black text-xl border-b-[6px] border-[#9D174D] hover:bg-[#F472B6] active:border-b-0 active:translate-y-[6px] transition-all uppercase tracking-widest flex items-center gap-3">
                Full Analytics <TrendingUp size={24} />
              </button>
            </div>
          </motion.div>

        </motion.div>
      </main>
    </div>
  );
}
