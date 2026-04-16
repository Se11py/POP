"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Search, Plus, Atom, FlaskConical, Dna, Calculator, Briefcase, PenTool, Brain, Play, Clock, Target, CheckCircle2, ChevronRight, BookOpen, LayoutGrid, Sparkles, Zap } from 'lucide-react';

const initialClassesData = [
  {
    id: 'physics-rushed',
    name: 'Physics Rushed',
    subjectIcon: <Zap size={24} />,
    progress: 45,
    topicsDone: '5/11',
    miniMocks: '4 done',
    nextUp: 'Sprint Module',
    category: 'Science',
    description: 'High-speed, zero fluff learning path. Master the entire IGCSE Physics curriculum in record time.',
    theme: "bg-[#F3E8FF] border-[#D8B4FE]",
    iconBg: "bg-[#7B2FF2]",
    textColor: "text-[#7B2FF2]"
  },
  {
    id: 'igcse-physics',
    name: 'Physics — Co-ordinated Sciences',
    subjectIcon: <Atom size={24} />,
    progress: 72,
    topicsDone: '8/11',
    miniMocks: '2 done',
    nextUp: 'Work & Energy recap',
    category: 'Science',
    description: 'Forces, electricity, energy, and waves tailored to ANS Co-ordinated scheme.',
    theme: "bg-[#DFF2FC] border-[#7DD3FC]",
    iconBg: "bg-[#0EA5E9]",
    textColor: "text-[#0284C7]"
  },
  {
    id: 'igcse-chemistry',
    name: 'Chemistry — Co-ordinated Sciences',
    subjectIcon: <FlaskConical size={24} />,
    progress: 41,
    topicsDone: '4/11',
    miniMocks: '1 done',
    nextUp: 'Ionic & covalent bonding',
    category: 'Science',
    theme: "bg-[#E2F7EB] border-[#6EE7B7]",
    iconBg: "bg-[#10B981]",
    textColor: "text-[#059669]"
  },
  {
    id: 'igcse-biology',
    name: 'Biology — Co-ordinated Sciences',
    subjectIcon: <Dna size={24} />,
    progress: 19,
    topicsDone: '0/11',
    miniMocks: '0 done',
    nextUp: 'Cell structure intro',
    category: 'Science',
    theme: "bg-[#F3E8FF] border-[#D8B4FE]",
    iconBg: "bg-[#9333EA]",
    textColor: "text-[#7E22CE]"
  },
  {
    id: 'igcse-math',
    name: 'IGCSE Mathematics (Core/Extended)',
    subjectIcon: <Calculator size={24} />,
    progress: 58,
    topicsDone: 'Paper 2 focus',
    miniMocks: '3 done',
    nextUp: 'Algebra inequalities',
    category: 'Math',
    theme: "bg-[#FEF3C7] border-[#FCD34D]",
    iconBg: "bg-[#F59E0B]",
    textColor: "text-[#B45309]"
  },
  {
    id: 'igcse-business',
    name: 'IGCSE Business',
    subjectIcon: <Briefcase size={24} />,
    progress: 26,
    topicsDone: 'Unit 1 done',
    miniMocks: '1 done',
    nextUp: 'Marketing mix examples',
    category: 'Social Science',
    theme: "bg-[#FFE5EC] border-[#F9A8D4]",
    iconBg: "bg-[#E11D48]",
    textColor: "text-[#BE185D]"
  },
  {
    id: 'igcse-english',
    name: 'IGCSE English Language',
    subjectIcon: <PenTool size={24} />,
    progress: 64,
    topicsDone: 'Writing drill',
    miniMocks: '2 done',
    nextUp: 'Summary question practice',
    category: 'Languages',
    theme: "bg-[#E0E7FF] border-[#A5B4FC]",
    iconBg: "bg-[#4F46E5]",
    textColor: "text-[#3730A3]"
  },
  {
    id: 'act-science',
    name: 'ACT (Science Reasoning)',
    subjectIcon: <Brain size={24} />,
    progress: 5,
    topicsDone: '0/6',
    miniMocks: '0 done',
    nextUp: 'Data Representation',
    category: 'Standardized Tests',
    theme: "bg-[#FFEDD5] border-[#FDBA74]",
    iconBg: "bg-[#F97316]",
    textColor: "text-[#C2410C]"
  }
];

const categories = [
  { id: 'Science', icon: <FlaskConical size={20} />, iconBg: 'bg-[#10B981]', theme: 'bg-[#E2F7EB] border-[#6EE7B7]', textColor: 'text-[#059669]' },
  { id: 'Math', icon: <Calculator size={20} />, iconBg: 'bg-[#E11D48]', theme: 'bg-[#FFE5EC] border-[#F9A8D4]', textColor: 'text-[#BE185D]' },
  { id: 'Languages', icon: <BookOpen size={20} />, iconBg: 'bg-[#4F46E5]', theme: 'bg-[#E0E7FF] border-[#A5B4FC]', textColor: 'text-[#3730A3]' },
  { id: 'Social Science', icon: <Briefcase size={20} />, iconBg: 'bg-[#9333EA]', theme: 'bg-[#F3E8FF] border-[#D8B4FE]', textColor: 'text-[#7E22CE]' },
  { id: 'Standardized Tests', icon: <Sparkles size={20} />, iconBg: 'bg-[#F97316]', theme: 'bg-[#FFEDD5] border-[#FDBA74]', textColor: 'text-[#C2410C]' },
];

export default function ClassesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", type: "spring", bounce: 0.4 } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const filteredClasses = initialClassesData.filter(cls => {
    const matchesCategory = activeCategory === 'All' || cls.category === activeCategory;
    const matchesSearch = cls.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         cls.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayCategories = [{ id: 'All', icon: <LayoutGrid size={20} />, iconBg: 'bg-slate-400', theme: 'bg-slate-100 border-slate-200', textColor: 'text-slate-600' }, ...categories];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-800 font-sans selection:bg-[#34D399] selection:text-white pb-24">
      {/* Friendly Custom Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b-2 border-slate-200/80">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/duolingo" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#34D399] rounded-[14px] flex items-center justify-center border-b-[3px] border-[#059669] group-active:border-b-0 group-active:translate-y-[3px] transition-all">
              <span className="text-white text-lg font-black tracking-tighter">P</span>
            </div>
            <span className="font-extrabold text-xl tracking-tight text-slate-700">POP Studying</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-base font-bold text-slate-500">
            <Link href="/duolingo/dashboard" className="hover:text-slate-800 transition-colors">Dashboard</Link>
            <Link href="/duolingo/classes" className="text-slate-800 transition-colors border-b-2 border-slate-800 pb-1">Classes</Link>
            <Link href="/duolingo/flashcards" className="hover:text-slate-800 transition-colors">Flashcards</Link>
            <Link href="/duolingo/dictionary" className="hover:text-slate-800 transition-colors">Dictionary</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/sign-in" className="hidden md:block text-slate-500 hover:text-slate-800 transition-colors font-bold uppercase tracking-wide text-sm">
              Sign In
            </Link>
            <Link href="/sign-up" className="px-6 py-2.5 bg-white text-slate-700 font-bold border-2 border-slate-200 border-b-[4px] rounded-2xl hover:bg-slate-50 active:border-b-2 active:translate-y-[2px] transition-all uppercase tracking-wide text-sm">
              Get Started
            </Link>
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
          <motion.div variants={fadeInUp} className="space-y-4">
            <h1 className="text-5xl font-black text-slate-800 tracking-tighter">
              Your <span className="text-[#34D399]">Classes</span>
            </h1>
            <p className="text-lg text-slate-500 font-medium max-w-2xl">
              Personalized learning paths built for your curriculum. Track your progress and master every topic.
            </p>
          </motion.div>

          {/* Search & Category Menu */}
          <div className="space-y-8">
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="relative w-full sm:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} strokeWidth={3} />
                <input 
                  type="text" 
                  placeholder="Search your classes..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border-2 border-slate-200 border-b-[4px] rounded-2xl py-3 pl-12 pr-4 text-slate-700 font-bold placeholder:text-slate-400 focus:outline-none focus:border-[#34D399] transition-colors"
                />
              </div>
              <div className="flex gap-4 w-full sm:w-auto">
                <div className="flex items-center gap-2 px-4 py-2 bg-[#E2F7EB] rounded-2xl border-2 border-[#6EE7B7] text-[#059669] font-black shadow-sm">
                  <Target size={20} />
                  <span>{initialClassesData.length} Active</span>
                </div>
              </div>
            </motion.div>

            {/* Category Pills Menu */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar">
              {displayCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-2xl border-2 border-b-[4px] font-black uppercase tracking-wider text-sm transition-all whitespace-nowrap ${
                    activeCategory === cat.id 
                    ? `${cat.theme} ${cat.textColor} border-current -translate-y-1` 
                    : "bg-white border-slate-200 text-slate-400 hover:border-slate-300"
                  }`}
                >
                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${activeCategory === cat.id ? cat.iconBg : 'bg-slate-100'} transition-colors`}>
                    {React.cloneElement(cat.icon as any, { size: 14, className: activeCategory === cat.id ? "text-white" : "text-slate-400" })}
                  </div>
                  {cat.id}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Classes Grid */}
          <div className="space-y-8">
            <motion.div variants={fadeInUp} className="flex items-center justify-between">
              <h2 className="text-3xl font-black text-slate-800 tracking-tight">
                {activeCategory === 'All' ? 'All Learning Paths' : `${activeCategory} Classes`}
              </h2>
              <span className="text-sm font-bold text-slate-400 bg-white px-4 py-1 rounded-full border-2 border-slate-100">
                {filteredClasses.length} active
              </span>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredClasses.map((cls) => (
                  <motion.div
                    key={cls.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link href={cls.id === 'physics-rushed' ? '/duolingo/physics-rush' : `/duolingo/classes/${cls.id}`}>
                      <div
                        className={`bg-white rounded-[40px] border-2 border-b-[8px] ${cls.theme} p-8 h-full flex flex-col hover:-translate-y-2 transition-transform duration-300 cursor-pointer relative overflow-hidden group`}
                      >
                        {/* Subject Icon & Tag */}
                        <div className="flex justify-between items-start mb-8 relative z-10">
                          <div className={`w-16 h-16 rounded-[20px] ${cls.iconBg} flex items-center justify-center border-b-[4px] border-black/10 shadow-sm group-hover:scale-110 transition-transform`}>
                            {React.cloneElement(cls.subjectIcon as any, { className: "text-white", size: 32 })}
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <span className={`px-4 py-1.5 bg-white/60 backdrop-blur-sm rounded-xl text-[10px] font-black uppercase tracking-widest ${cls.textColor} border-2 border-white/50`}>
                              {cls.category}
                            </span>
                            {(cls.id === 'physics-rushed') && (
                              <span className="px-3 py-1 bg-[#7B2FF2] text-white rounded-lg text-[9px] font-black uppercase tracking-widest animate-pulse shadow-sm">
                                Specialized
                              </span>
                            )}
                          </div>
                        </div>
                        
                        {/* Title & Description */}
                        <div className="mb-8 relative z-10">
                          <h3 className="text-2xl font-black text-slate-800 mb-3 leading-tight group-hover:text-[#34D399] transition-colors">{cls.name}</h3>
                          <p className="text-sm font-bold text-slate-500 leading-relaxed line-clamp-2">{cls.description}</p>
                        </div>

                        {/* Progress Section */}
                        <div className="mt-auto space-y-6 relative z-10">
                          <div className="space-y-3">
                            <div className="flex justify-between text-xs font-black uppercase tracking-widest">
                              <span className="text-slate-400">Path Progress</span>
                              <span className={cls.textColor}>{cls.progress}%</span>
                            </div>
                            <div className="w-full h-4 bg-white/50 rounded-full overflow-hidden border-2 border-white/60 p-0.5">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${cls.progress}%` }}
                                className={`h-full rounded-full ${cls.iconBg} border-b-2 border-black/10`}
                              />
                            </div>
                          </div>
                          
                          {/* Next Up / Stats */}
                          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-4 border border-white/50 space-y-2">
                            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                              <Clock size={12} /> Next Up
                            </div>
                            <p className="text-sm font-black text-slate-700">{cls.nextUp}</p>
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t-2 border-slate-100/50">
                            <div className="flex items-center gap-4">
                              <div className="flex flex-col">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Topics</span>
                                <span className="text-sm font-black text-slate-700">{cls.topicsDone}</span>
                              </div>
                              <div className="w-px h-8 bg-slate-100" />
                              <div className="flex flex-col">
                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mocks</span>
                                <span className="text-sm font-black text-slate-700">{cls.miniMocks}</span>
                              </div>
                            </div>
                            <div className={`w-12 h-12 rounded-2xl ${cls.iconBg} flex items-center justify-center border-b-[4px] border-black/10 active:border-b-0 active:translate-y-[4px] transition-all`}>
                              <ChevronRight className="text-white" size={24} strokeWidth={3} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            {filteredClasses.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-32 text-center space-y-6 bg-white rounded-[50px] border-2 border-dashed border-slate-200"
              >
                <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto text-slate-200">
                  <BookOpen size={48} />
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-black text-slate-400">No classes found.</p>
                  <p className="text-slate-400 font-bold">Try adjusting your search or category filter.</p>
                </div>
                <button 
                  onClick={() => {setActiveCategory('All'); setSearchQuery('');}}
                  className="text-[#34D399] font-black uppercase tracking-wider hover:underline"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
