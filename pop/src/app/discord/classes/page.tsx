"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Search, Plus, Play, Clock, Target, CheckCircle2, ChevronRight, Hash, MessageSquare, Shield, Bell } from 'lucide-react';

const initialClassesData = [
  {
    id: 'physics-rushed',
    name: 'physics-rushed',
    subject: 'Physics Rushed',
    icon: '⚡',
    progress: 45,
    topicsDone: '5/11',
    miniMocks: '4 done',
    nextUp: 'Sprint Module',
    category: 'Science',
    description: 'High-speed, zero fluff learning path. Master the entire IGCSE Physics curriculum in record time.',
    roleColor: '#ED4245',
    iconBg: 'bg-[#ED4245]',
    textColor: 'text-[#ED4245]'
  },
  {
    id: 'igcse-physics',
    name: 'physics-coordinated',
    subject: 'Physics — Co-ordinated Sciences',
    icon: '⚛️',
    progress: 72,
    topicsDone: '8/11',
    miniMocks: '2 done',
    nextUp: 'Work & Energy recap',
    category: 'Science',
    description: 'Forces, electricity, energy, and waves tailored to ANS Co-ordinated scheme.',
    roleColor: '#5865F2',
    iconBg: 'bg-[#5865F2]',
    textColor: 'text-[#5865F2]'
  },
  {
    id: 'igcse-chemistry',
    name: 'chemistry-coordinated',
    subject: 'Chemistry — Co-ordinated Sciences',
    icon: '🧪',
    progress: 41,
    topicsDone: '4/11',
    miniMocks: '1 done',
    nextUp: 'Ionic & covalent bonding',
    category: 'Science',
    description: 'Dive into atomic structure, bonding, and reactions. Synced with ANS past paper style.',
    roleColor: '#23A559',
    iconBg: 'bg-[#23A559]',
    textColor: 'text-[#23A559]'
  },
  {
    id: 'igcse-biology',
    name: 'biology-coordinated',
    subject: 'Biology — Co-ordinated Sciences',
    icon: '🧬',
    progress: 19,
    topicsDone: '0/11',
    miniMocks: '0 done',
    nextUp: 'Cell structure intro',
    category: 'Science',
    description: 'Explore cells, organisation, and ecology using ANS-style diagrams and questions.',
    roleColor: '#9A86FD',
    iconBg: 'bg-[#9333EA]',
    textColor: 'text-[#9A86FD]'
  },
  {
    id: 'igcse-math',
    name: 'mathematics-extended',
    subject: 'IGCSE Mathematics (Core/Extended)',
    icon: '📐',
    progress: 58,
    topicsDone: 'Paper 2 focus',
    miniMocks: '3 done',
    nextUp: 'Algebra inequalities',
    category: 'Math',
    description: 'Topic-by-topic revision with equation sheets and past-paper style questions.',
    roleColor: '#EB459E',
    iconBg: 'bg-[#E11D48]',
    textColor: 'text-[#EB459E]'
  },
  {
    id: 'igcse-business',
    name: 'business-studies',
    subject: 'IGCSE Business',
    icon: '💼',
    progress: 26,
    topicsDone: 'Unit 1 done',
    miniMocks: '1 done',
    nextUp: 'Marketing mix examples',
    category: 'Humanities',
    description: 'Case study-led classes aligned with ANS past paper questions and style.',
    roleColor: '#FEE75C',
    iconBg: 'bg-[#F59E0B]',
    textColor: 'text-[#FEE75C]'
  },
  {
    id: 'igcse-english',
    name: 'english-language',
    subject: 'IGCSE English Language',
    icon: '📖',
    progress: 64,
    topicsDone: 'Writing drill',
    miniMocks: '2 done',
    nextUp: 'Summary practice',
    category: 'Humanities',
    description: 'Reading, writing, and summary practice with ANS-style exam prompts.',
    roleColor: '#5865F2',
    iconBg: 'bg-[#4F46E5]',
    textColor: 'text-[#5865F2]'
  }
];

const categories = [
  { id: 'Science', roleColor: '#23A559' },
  { id: 'Math', roleColor: '#EB459E' },
  { id: 'Humanities', roleColor: '#FEE75C' },
  { id: 'Standardized Tests', roleColor: '#9A86FD' },
];

export default function DiscordClassesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  const filteredClasses = initialClassesData.filter(cls => {
    const matchesCategory = activeCategory === 'All' || cls.category === activeCategory;
    const matchesSearch = cls.subject.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         cls.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#313338] text-[#F2F3F5] font-sans selection:bg-[#5865F2]/40 selection:text-white pb-24">
      {/* Discord-style Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-[#1E1F22] border-b border-[#111214] shadow-md">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <Link href="/discord" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-xl bg-[#5865F2] flex items-center justify-center transition-transform group-hover:rotate-12 group-hover:scale-105">
              <span className="text-white text-sm font-bold tracking-tighter">P</span>
            </div>
            <span className="font-bold text-base tracking-wide text-white uppercase">POP Studying</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#B5BAC1]">
            <Link href="/discord#method" className="hover:text-[#F2F3F5] transition-colors">How it Works</Link>
            <Link href="/discord/flashcards" className="hover:text-[#F2F3F5] transition-colors">Flashcards</Link>
            <Link href="/discord/classes" className="text-[#F2F3F5] transition-colors">Classes</Link>
            <Link href="/discord#faq" className="hover:text-[#F2F3F5] transition-colors">FAQ</Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell size={20} className="text-[#B5BAC1] hover:text-[#F2F3F5] cursor-pointer transition-colors" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#ED4245] rounded-full border-2 border-[#1E1F22] flex items-center justify-center">
                <span className="text-[10px] font-bold text-white">3</span>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#5865F2] flex items-center justify-center text-white text-xs font-bold border border-[#111214]">
              JD
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="pt-24 px-6 lg:px-8 max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Sidebar / Server Navigation Style */}
        <aside className="w-full md:w-64 shrink-0 space-y-6">
          <div className="space-y-4">
            <h3 className="px-2 text-xs font-bold text-[#80848E] uppercase tracking-wider">Learning Modules</h3>
            <div className="space-y-1">
              <button
                onClick={() => setActiveCategory('All')}
                className={`w-full flex items-center gap-3 px-2 py-1.5 rounded-md transition-colors ${
                  activeCategory === 'All' ? "bg-[#3F4147] text-white" : "text-[#80848E] hover:bg-[#35373C] hover:text-[#DBDEE1]"
                }`}
              >
                <Hash size={18} className={activeCategory === 'All' ? "text-white" : "text-[#80848E]"} />
                <span className="text-sm font-semibold italic">all-curriculum</span>
              </button>
              
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full flex items-center gap-3 px-2 py-1.5 rounded-md transition-colors group ${
                    activeCategory === cat.id 
                    ? "bg-[#3F4147] text-white" 
                    : "text-[#80848E] hover:bg-[#35373C] hover:text-[#DBDEE1]"
                  }`}
                >
                  <Hash size={18} className={activeCategory === cat.id ? "text-white" : "text-[#80848E]"} />
                  <span className="text-sm font-semibold italic">{cat.id.toLowerCase().replace(' ', '-')}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#1E1F22]">
            <h3 className="px-2 text-xs font-bold text-[#80848E] uppercase tracking-wider mb-4">Course Progress</h3>
            <div className="space-y-3">
              {initialClassesData.slice(0, 3).map((cls) => (
                <div key={cls.id} className="px-2 space-y-1">
                  <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wide">
                    <span className="text-[#80848E] truncate pr-2">#{cls.name}</span>
                    <span className={cls.textColor}>{cls.progress}%</span>
                  </div>
                  <div className="w-full h-1 bg-[#1E1F22] rounded-full overflow-hidden">
                    <div className={`h-full ${cls.iconBg}`} style={{ width: `${cls.progress}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <div className="flex-1 space-y-8">
          {/* Header Title Section */}
          <div className="bg-[#2B2D31] p-6 rounded-2xl border border-[#1E1F22] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#1E1F22] border border-[#111214] flex items-center justify-center text-[#5865F2] shadow-inner">
                <Shield size={32} />
              </div>
              <div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">Active Learning Path</h1>
                <p className="text-sm font-medium text-[#B5BAC1] mt-0.5">Explore your assigned roles and academic objectives.</p>
              </div>
            </div>
            
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#80848E]" size={16} />
              <input 
                type="text" 
                placeholder="Search channels..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#1E1F22] border-none rounded-[4px] py-2 pl-10 pr-3 text-sm text-[#DBDEE1] placeholder:text-[#80848E] focus:outline-none focus:ring-1 focus:ring-[#5865F2]"
              />
            </div>
          </div>

          {/* Classes Grid */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-[#80848E]">
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] shrink-0">Academic Modules — {filteredClasses.length}</span>
              <div className="h-px flex-1 bg-[#1E1F22]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AnimatePresence mode="popLayout">
                {filteredClasses.map((cls) => (
                  <motion.div
                    key={cls.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link href={cls.id === 'physics-rushed' ? '/discord/physics-rush' : `/discord/classes/${cls.id}`}>
                      <div className="bg-[#2B2D31] hover:bg-[#35373C] border border-[#1E1F22] rounded-[12px] p-6 transition-all group relative overflow-hidden h-full flex flex-col">
                        {/* Decorative background emoji */}
                        <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:scale-110 transition-transform text-8xl pointer-events-none">
                          {cls.icon}
                        </div>

                        <div className="flex items-start justify-between mb-6 relative z-10">
                          <div 
                            className="w-12 h-12 rounded-[16px] flex items-center justify-center text-2xl shadow-lg transition-all group-hover:rotate-6"
                            style={{ backgroundColor: cls.roleColor, boxShadow: `0 4px 15px ${cls.roleColor}40` }}
                          >
                            {cls.icon}
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <span className={`px-2 py-0.5 bg-[#1E1F22] rounded-[4px] text-[10px] font-bold uppercase tracking-wider ${cls.textColor} border border-[#111214]`}>
                              {cls.category}
                            </span>
                            {cls.id === 'physics-rushed' && (
                              <span className="px-2 py-0.5 bg-[#ED4245] text-white rounded-[4px] text-[9px] font-bold uppercase tracking-wider animate-pulse border border-[#ED4245]">
                                Specialized
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <div className="mb-6 relative z-10">
                          <h3 className="font-extrabold text-white text-xl group-hover:text-[#5865F2] transition-colors leading-tight mb-2">
                            <span className="text-[#80848E] font-light mr-1">#</span>
                            {cls.name}
                          </h3>
                          <p className="text-sm text-[#B5BAC1] font-medium line-clamp-2">{cls.description}</p>
                        </div>

                        <div className="mt-auto space-y-4 relative z-10">
                          <div className="space-y-2">
                            <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wide">
                              <span className="text-[#80848E]">Curriculum Sync</span>
                              <span className={cls.textColor}>{cls.progress}%</span>
                            </div>
                            <div className="w-full h-1.5 bg-[#1E1F22] rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${cls.progress}%` }}
                                className={`h-full ${cls.iconBg}`}
                              />
                            </div>
                          </div>
                          
                          <div className="bg-[#1E1F22] rounded-[8px] p-3 flex flex-col gap-1 border border-[#111214]">
                            <div className="text-[9px] font-black uppercase tracking-widest text-[#80848E] flex items-center gap-1">
                              <MessageSquare size={10} /> next-message
                            </div>
                            <p className="text-xs font-bold text-[#DBDEE1] truncate">{cls.nextUp}</p>
                          </div>

                          <div className="flex items-center justify-between pt-4 border-t border-[#1E1F22]">
                            <div className="flex items-center gap-4 text-[#80848E]">
                              <div className="flex flex-col">
                                <span className="text-[9px] font-bold uppercase tracking-widest">Units</span>
                                <span className="text-xs font-bold text-[#DBDEE1]">{cls.topicsDone}</span>
                              </div>
                              <div className="w-px h-6 bg-[#1E1F22]" />
                              <div className="flex flex-col">
                                <span className="text-[9px] font-bold uppercase tracking-widest">Graded</span>
                                <span className="text-xs font-bold text-[#DBDEE1]">{cls.miniMocks}</span>
                              </div>
                            </div>
                            <div className="bg-[#4E5058] hover:bg-[#5865F2] text-white w-8 h-8 rounded-[4px] transition-colors flex items-center justify-center">
                              <ChevronRight size={18} />
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
              <div className="py-24 text-center space-y-4 bg-[#2B2D31] rounded-[16px] border border-dashed border-[#1E1F22]">
                <div className="w-16 h-16 bg-[#1E1F22] rounded-full flex items-center justify-center mx-auto text-[#80848E]">
                  <Search size={32} />
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-bold text-[#F2F3F5]">No matching channels found.</p>
                  <p className="text-sm font-medium text-[#80848E]">Check your spelling or try a different role.</p>
                </div>
                <button 
                  onClick={() => setActiveCategory('All')}
                  className="text-[#5865F2] font-bold hover:underline"
                >
                  View all categories
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
