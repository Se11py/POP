"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Search, Plus, Languages, FlaskConical, History, Calculator, Brain, Code, Play, Flame, Trophy, Clock, Target, X, Trash2, Save, Hash, MessageSquare, MoreVertical, LayoutGrid, LayoutList } from 'lucide-react';

const initialFlashcardSets = [
  {
    id: 1,
    title: "Spanish Vocabulary",
    description: "Essential words for everyday conversation",
    cardCount: 127,
    lastStudied: "Last studied 2h ago",
    progress: 85,
    category: "Languages",
    theme: "bg-[#5865F2]/10 border-[#5865F2]/20",
    iconBg: "bg-[#5865F2]",
    textColor: "text-[#5865F2]",
    icon: <Languages className="text-white" size={20} />
  },
  {
    id: 2,
    title: "Biology Terms",
    description: "Cell biology and molecular processes",
    cardCount: 89,
    lastStudied: "Last studied 1d ago",
    progress: 72,
    category: "Science",
    theme: "bg-[#23A559]/10 border-[#23A559]/20",
    iconBg: "bg-[#23A559]",
    textColor: "text-[#23A559]",
    icon: <FlaskConical className="text-white" size={20} />
  },
  {
    id: 3,
    title: "World War II",
    description: "Key events, dates, and figures",
    cardCount: 156,
    lastStudied: "Never studied",
    progress: 0,
    category: "History",
    theme: "bg-[#FEE75C]/10 border-[#FEE75C]/20",
    iconBg: "bg-[#FEE75C]",
    textColor: "text-[#FEE75C]",
    icon: <History className="text-black" size={20} />
  },
  {
    id: 4,
    title: "Calculus Formulas",
    description: "Derivatives and integration rules",
    cardCount: 78,
    lastStudied: "Last studied 3h ago",
    progress: 91,
    category: "Math",
    theme: "bg-[#EB459E]/10 border-[#EB459E]/20",
    iconBg: "bg-[#EB459E]",
    textColor: "text-[#EB459E]",
    icon: <Calculator className="text-white" size={20} />
  },
  {
    id: 5,
    title: "Cognitive Psychology",
    description: "Memory, perception, and learning theories",
    cardCount: 94,
    lastStudied: "Last studied 5d ago",
    progress: 45,
    category: "Psychology",
    theme: "bg-[#9A86FD]/10 border-[#9A86FD]/20",
    iconBg: "bg-[#9A86FD]",
    textColor: "text-[#9A86FD]",
    icon: <Brain className="text-white" size={20} />
  },
  {
    id: 6,
    title: "JavaScript Concepts",
    description: "ES6+ features and best practices",
    cardCount: 112,
    lastStudied: "Last studied 1h ago",
    progress: 88,
    category: "Programming",
    theme: "bg-[#00D166]/10 border-[#00D166]/20",
    iconBg: "bg-[#00D166]",
    textColor: "text-[#00D166]",
    icon: <Code className="text-white" size={20} />
  }
];

const studyProgress = [
  { id: 1, value: '7', label: 'Day Streak', icon: <Flame className="w-5 h-5 text-[#F97316]" />, theme: "bg-[#F97316]/10" },
  { id: 2, value: '342', label: 'Mastered', icon: <Trophy className="w-5 h-5 text-[#FEE75C]" />, theme: "bg-[#FEE75C]/10" },
  { id: 3, value: '24h', label: 'Study Time', icon: <Clock className="w-5 h-5 text-[#5865F2]" />, theme: "bg-[#5865F2]/10" },
  { id: 4, value: '82%', label: 'Avg Score', icon: <Target className="w-5 h-5 text-[#23A559]" />, theme: "bg-[#23A559]/10" },
];

const categories = [
  { id: 'Languages', icon: <Languages size={18} />, iconBg: 'bg-[#5865F2]', textColor: 'text-[#5865F2]', roleColor: '#5865F2' },
  { id: 'Science', icon: <FlaskConical size={18} />, iconBg: 'bg-[#23A559]', textColor: 'text-[#23A559]', roleColor: '#23A559' },
  { id: 'History', icon: <History size={18} />, iconBg: 'bg-[#FEE75C]', textColor: 'text-[#FEE75C]', roleColor: '#FEE75C' },
  { id: 'Math', icon: <Calculator size={18} />, iconBg: 'bg-[#EB459E]', textColor: 'text-[#EB459E]', roleColor: '#EB459E' },
  { id: 'Psychology', icon: <Brain size={18} />, iconBg: 'bg-[#9A86FD]', textColor: 'text-[#9A86FD]', roleColor: '#9A86FD' },
  { id: 'Programming', icon: <Code size={18} />, iconBg: 'bg-[#00D166]', textColor: 'text-[#00D166]', roleColor: '#00D166' },
];

export default function DiscordFlashcardsPage() {
  const [sets, setSets] = useState(initialFlashcardSets);
  const [activeCategory, setActiveCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newSet, setNewSet] = useState({
    title: '',
    description: '',
    category: 'Languages',
    cards: [{ front: '', back: '' }]
  });

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } }
  };

  const filteredSets = activeCategory === 'All' 
    ? sets 
    : sets.filter(s => s.category === activeCategory);

  const displayCategories = [{ id: 'All', icon: <LayoutGrid size={18} />, iconBg: 'bg-[#4E5058]', textColor: 'text-[#F2F3F5]', roleColor: '#F2F3F5' }, ...categories];

  const handleSaveSet = () => {
    const categoryInfo = categories.find(c => c.id === newSet.category);
    const set = {
      id: Date.now(),
      title: newSet.title || "Untitled Set",
      description: newSet.description || "No description provided",
      cardCount: newSet.cards.length,
      lastStudied: "Never studied",
      progress: 0,
      category: newSet.category,
      theme: `bg-[${categoryInfo?.roleColor}]/10 border-[${categoryInfo?.roleColor}]/20`,
      iconBg: categoryInfo?.iconBg || '',
      textColor: categoryInfo?.textColor || '',
      icon: categoryInfo?.icon || <Languages className="text-white" size={20} />
    };
    setSets([set, ...sets]);
    setIsModalOpen(false);
    setNewSet({
      title: '',
      description: '',
      category: 'Languages',
      cards: [{ front: '', back: '' }]
    });
  };

  return (
    <div className="min-h-screen bg-[#313338] text-[#F2F3F5] font-sans selection:bg-[#5865F2]/40 selection:text-white pb-24">
      {/* Discord-style Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-[#1E1F22] border-b border-[#111214] shadow-md">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <Link href="/discord" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-xl bg-[#5865F2] flex items-center justify-center transition-transform group-hover:rotate-12 group-hover:scale-105">
              <span className="text-white text-sm font-bold tracking-tighter">P</span>
            </div>
            <span className="font-bold text-base tracking-wide text-white">POP Studying</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#B5BAC1]">
            <Link href="/discord#method" className="hover:text-[#F2F3F5] transition-colors">How it Works</Link>
            <Link href="/discord/flashcards" className="text-[#F2F3F5] transition-colors">Flashcards</Link>
            <Link href="/discord/classes" className="hover:text-[#F2F3F5] transition-colors">Classes</Link>
            <Link href="/discord#faq" className="hover:text-[#F2F3F5] transition-colors">FAQ</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/sign-in" className="hidden md:block text-[#B5BAC1] hover:text-[#F2F3F5] transition-colors text-sm font-semibold">
              Login
            </Link>
            <Link href="/sign-up" className="px-4 py-2 bg-[#5865F2] text-white font-semibold rounded-[20px] hover:bg-[#4752C4] transition-colors text-sm">
              Join Server
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content Area - Styled like a Discord Channel */}
      <main className="pt-24 px-6 lg:px-8 max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Sidebar / Member List Style Sidebar for Categories */}
        <aside className="w-full md:w-64 shrink-0 space-y-6">
          <div className="space-y-4">
            <h3 className="px-2 text-xs font-bold text-[#80848E] uppercase tracking-wider">Role Categories</h3>
            <div className="space-y-1">
              {displayCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full flex items-center gap-3 px-2 py-1.5 rounded-md transition-colors group ${
                    activeCategory === cat.id 
                    ? "bg-[#3F4147] text-white" 
                    : "text-[#80848E] hover:bg-[#35373C] hover:text-[#DBDEE1]"
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center`} style={{ backgroundColor: activeCategory === cat.id ? cat.roleColor : '#4E5058' }}></div>
                  <span className="text-sm font-semibold">{cat.id}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#1E1F22]">
            <h3 className="px-2 text-xs font-bold text-[#80848E] uppercase tracking-wider mb-4">Study Stats</h3>
            <div className="grid grid-cols-1 gap-3">
              {studyProgress.map((stat) => (
                <div key={stat.id} className="flex items-center gap-3 p-3 rounded-xl bg-[#2B2D31] border border-[#1E1F22]">
                  <div className={`w-8 h-8 rounded-lg ${stat.theme} flex items-center justify-center shrink-0`}>
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white leading-tight">{stat.value}</div>
                    <div className="text-[10px] font-bold text-[#80848E] uppercase tracking-wide">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Content Area - Styled like a Channel Feed */}
        <div className="flex-1 space-y-8">
          {/* Header Title Section */}
          <div className="bg-[#2B2D31] p-6 rounded-2xl border border-[#1E1F22] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-3xl font-extrabold text-white flex items-center gap-3">
                <span className="text-2xl font-light text-[#80848E]">#</span>
                flashcards
              </h1>
              <p className="text-sm font-medium text-[#B5BAC1] mt-1 italic">Knowledge engaging deep focus. Late night sessions encouraged.</p>
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:flex-none">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#80848E]" size={16} />
                <input 
                  type="text" 
                  placeholder="Search sets..." 
                  className="w-full md:w-48 bg-[#1E1F22] border-none rounded-[4px] py-1.5 pl-9 pr-3 text-sm text-[#DBDEE1] placeholder:text-[#80848E] focus:outline-none focus:ring-1 focus:ring-[#5865F2] transition-all"
                />
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#23A559] hover:bg-[#1A7D44] text-white px-4 py-1.5 rounded-[4px] text-sm font-semibold transition-colors flex items-center gap-2 shrink-0"
              >
                <Plus size={16} /> Create Set
              </button>
            </div>
          </div>

          {/* Flashcard Sets Grid */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-[#80848E]">
              <div className="h-px flex-1 bg-[#1E1F22]"></div>
              <span className="text-xs font-bold uppercase tracking-widest">
                Showing {activeCategory === 'All' ? 'Everything' : activeCategory} • {filteredSets.length} Sets
              </span>
              <div className="h-px flex-1 bg-[#1E1F22]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AnimatePresence mode="popLayout">
                {filteredSets.map((set) => (
                  <motion.div
                    key={set.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="bg-[#2B2D31] hover:bg-[#35373C] border border-[#1E1F22] rounded-[16px] p-5 transition-all group cursor-pointer relative">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-[12px] ${set.iconBg} flex items-center justify-center shrink-0 shadow-lg`}>
                            {set.icon}
                          </div>
                          <div>
                            <h3 className="font-extrabold text-white text-lg group-hover:text-[#5865F2] transition-colors">{set.title}</h3>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className={`text-[10px] font-black uppercase tracking-wider ${set.textColor}`}>{set.category}</span>
                              <span className="text-[10px] text-[#80848E] font-bold">•</span>
                              <span className="text-[10px] text-[#80848E] font-bold uppercase tracking-wider">{set.cardCount} cards</span>
                            </div>
                          </div>
                        </div>
                        <button className="text-[#80848E] hover:text-[#DBDEE1] transition-colors">
                          <MoreVertical size={18} />
                        </button>
                      </div>
                      
                      <p className="text-sm text-[#B5BAC1] font-medium line-clamp-2 mb-6 h-10">
                        {set.description}
                      </p>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wide">
                          <span className="text-[#80848E]">Mastery Level</span>
                          <span className={set.textColor}>{set.progress}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-[#1E1F22] rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${set.iconBg}`} style={{ width: `${set.progress}%` }}></div>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-between">
                        <span className="text-[10px] text-[#80848E] font-bold italic">{set.lastStudied}</span>
                        <Link href={`/discord/flashcards/${set.id}`} className="bg-[#4E5058] hover:bg-[#5865F2] text-white px-4 py-1.5 rounded-[4px] text-xs font-bold transition-all flex items-center gap-2">
                          <Play size={12} fill="currentColor" /> Study Room
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredSets.length === 0 && (
              <div className="py-20 text-center space-y-4 bg-[#2B2D31] rounded-[16px] border border-dashed border-[#1E1F22]">
                <div className="w-16 h-16 bg-[#1E1F22] rounded-full flex items-center justify-center mx-auto text-[#80848E]">
                  <MessageSquare size={32} />
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-bold text-[#F2F3F5]">No messages... wait, no cards!</p>
                  <p className="text-sm font-medium text-[#80848E]">Be the first to start this conversation.</p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-6 py-2 rounded-[4px] text-sm font-semibold transition-colors"
                >
                  Create Set
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Discord-style Modal for Creating Sets */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/85"
            />
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-2xl bg-[#313338] rounded-[8px] shadow-2xl overflow-hidden flex flex-col h-[80vh]"
            >
              {/* Modal Header */}
              <div className="px-4 py-4 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white">Create Study Set</h2>
                  <p className="text-xs text-[#B5BAC1] font-medium uppercase tracking-tight mt-0.5">Define your curriculum parameters</p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-[#80848E] hover:text-[#DBDEE1] transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar">
                <div className="space-y-4">
                  <div>
                    <label className="text-[11px] font-bold text-[#B5BAC1] uppercase tracking-wide mb-2 block">Set Title</label>
                    <input 
                      type="text" 
                      value={newSet.title}
                      onChange={(e) => setNewSet({...newSet, title: e.target.value})}
                      className="w-full bg-[#1E1F22] rounded-[4px] px-3 py-2.5 text-sm text-[#DBDEE1] focus:outline-none focus:ring-1 focus:ring-[#5865F2]"
                      placeholder="e.g. Organic Chemistry Reactions"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-[#B5BAC1] uppercase tracking-wide mb-2 block">Role Category</label>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => setNewSet({...newSet, category: cat.id})}
                          className={`flex items-center gap-2 px-3 py-1.5 rounded-[4px] border transition-all text-xs font-semibold ${
                            newSet.category === cat.id 
                            ? "bg-[#35373C] border-[#5865F2] text-white" 
                            : "bg-[#1E1F22] border-transparent text-[#B5BAC1] hover:bg-[#35373C]"
                          }`}
                        >
                          <div className={`w-2 h-2 rounded-full`} style={{ backgroundColor: cat.roleColor }}></div>
                          {cat.id}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-[#B5BAC1] uppercase tracking-wide mb-2 block">Description</label>
                    <textarea 
                      value={newSet.description}
                      onChange={(e) => setNewSet({...newSet, description: e.target.value})}
                      rows={2}
                      className="w-full bg-[#1E1F22] rounded-[4px] px-3 py-2.5 text-sm text-[#DBDEE1] focus:outline-none focus:ring-1 focus:ring-[#5865F2] resize-none"
                      placeholder="What are we focusing on today?"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label className="text-[11px] font-bold text-[#B5BAC1] uppercase tracking-wide">Card Deck ({newSet.cards.length})</label>
                  </div>
                  
                  <div className="space-y-2">
                    {newSet.cards.map((card, idx) => (
                      <div key={idx} className="bg-[#2B2D31] p-3 rounded-[4px] border border-[#1E1F22] flex gap-3 items-center group">
                        <span className="text-[10px] font-bold text-[#80848E] shrink-0 w-4">{idx + 1}</span>
                        <div className="flex-1 grid grid-cols-2 gap-3">
                          <input 
                            type="text" 
                            placeholder="Front"
                            className="bg-[#1E1F22] rounded-[2px] px-2 py-1.5 text-xs text-[#DBDEE1] focus:outline-none"
                          />
                          <input 
                            type="text" 
                            placeholder="Back"
                            className="bg-[#1E1F22] rounded-[2px] px-2 py-1.5 text-xs text-[#DBDEE1] focus:outline-none"
                          />
                        </div>
                        <button className="text-[#80848E] hover:text-[#E44949] opacity-0 group-hover:opacity-100 transition-all">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={() => setNewSet({...newSet, cards: [...newSet.cards, { front: '', back: '' }]})}
                    className="w-full py-2 border border-dashed border-[#4E5058] rounded-[4px] text-xs font-bold text-[#B5BAC1] hover:border-[#5865F2] hover:text-[#5865F2] transition-all flex items-center justify-center gap-2"
                  >
                    <Plus size={14} /> Add Card
                  </button>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-[#2B2D31] flex justify-end gap-3">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2 text-sm font-semibold text-white hover:underline transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSaveSet}
                  className="bg-[#5865F2] hover:bg-[#4752C4] text-white px-6 py-2 rounded-[3px] text-sm font-semibold transition-colors flex items-center gap-2"
                >
                  <Save size={16} /> Save Set
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #2B2D31;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1E1F22;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #18191B;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
