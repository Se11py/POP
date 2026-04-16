"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { Search, Plus, Languages, FlaskConical, History, Calculator, Brain, Code, Play, Flame, Trophy, Clock, Target, X, Trash2, Save } from 'lucide-react';

const initialFlashcardSets = [
  {
    id: 1,
    title: "Spanish Vocabulary",
    description: "Essential words for everyday conversation",
    cardCount: 127,
    lastStudied: "Last studied 2h ago",
    progress: 85,
    category: "Languages",
    theme: "bg-[#DFF2FC] border-[#7DD3FC]",
    iconBg: "bg-[#0EA5E9]",
    textColor: "text-[#0284C7]",
    icon: <Languages className="text-white" size={24} />
  },
  {
    id: 2,
    title: "Biology Terms",
    description: "Cell biology and molecular processes",
    cardCount: 89,
    lastStudied: "Last studied 1d ago",
    progress: 72,
    category: "Science",
    theme: "bg-[#E2F7EB] border-[#6EE7B7]",
    iconBg: "bg-[#10B981]",
    textColor: "text-[#059669]",
    icon: <FlaskConical className="text-white" size={24} />
  },
  {
    id: 3,
    title: "World War II",
    description: "Key events, dates, and figures",
    cardCount: 156,
    lastStudied: "Never studied",
    progress: 0,
    category: "History",
    theme: "bg-[#FEF3C7] border-[#FCD34D]",
    iconBg: "bg-[#F59E0B]",
    textColor: "text-[#B45309]",
    icon: <History className="text-white" size={24} />
  },
  {
    id: 4,
    title: "Calculus Formulas",
    description: "Derivatives and integration rules",
    cardCount: 78,
    lastStudied: "Last studied 3h ago",
    progress: 91,
    category: "Math",
    theme: "bg-[#FFE5EC] border-[#F9A8D4]",
    iconBg: "bg-[#E11D48]",
    textColor: "text-[#BE185D]",
    icon: <Calculator className="text-white" size={24} />
  },
  {
    id: 5,
    title: "Cognitive Psychology",
    description: "Memory, perception, and learning theories",
    cardCount: 94,
    lastStudied: "Last studied 5d ago",
    progress: 45,
    category: "Psychology",
    theme: "bg-[#F3E8FF] border-[#D8B4FE]",
    iconBg: "bg-[#9333EA]",
    textColor: "text-[#7E22CE]",
    icon: <Brain className="text-white" size={24} />
  },
  {
    id: 6,
    title: "JavaScript Concepts",
    description: "ES6+ features and best practices",
    cardCount: 112,
    lastStudied: "Last studied 1h ago",
    progress: 88,
    category: "Programming",
    theme: "bg-[#E0E7FF] border-[#A5B4FC]",
    iconBg: "bg-[#4F46E5]",
    textColor: "text-[#3730A3]",
    icon: <Code className="text-white" size={24} />
  }
];

const studyProgress = [
  { id: 1, value: '7', label: 'Day Streak', icon: <Flame className="w-8 h-8 text-[#F97316]" />, theme: "bg-[#FFEDD5] border-[#FDBA74]" },
  { id: 2, value: '342', label: 'Mastered', icon: <Trophy className="w-8 h-8 text-[#EAB308]" />, theme: "bg-[#FEF3C7] border-[#FCD34D]" },
  { id: 3, value: '24h', label: 'Study Time', icon: <Clock className="w-8 h-8 text-[#0EA5E9]" />, theme: "bg-[#E0F2FE] border-[#7DD3FC]" },
  { id: 4, value: '82%', label: 'Avg Score', icon: <Target className="w-8 h-8 text-[#10B981]" />, theme: "bg-[#D1FAE5] border-[#6EE7B7]" },
];

const categories = [
  { id: 'Languages', icon: <Languages size={20} />, iconBg: 'bg-[#0EA5E9]', theme: 'bg-[#DFF2FC] border-[#7DD3FC]', textColor: 'text-[#0284C7]' },
  { id: 'Science', icon: <FlaskConical size={20} />, iconBg: 'bg-[#10B981]', theme: 'bg-[#E2F7EB] border-[#6EE7B7]', textColor: 'text-[#059669]' },
  { id: 'History', icon: <History size={20} />, iconBg: 'bg-[#F59E0B]', theme: 'bg-[#FEF3C7] border-[#FCD34D]', textColor: 'text-[#B45309]' },
  { id: 'Math', icon: <Calculator size={20} />, iconBg: 'bg-[#E11D48]', theme: 'bg-[#FFE5EC] border-[#F9A8D4]', textColor: 'text-[#BE185D]' },
  { id: 'Psychology', icon: <Brain size={20} />, iconBg: 'bg-[#9333EA]', theme: 'bg-[#F3E8FF] border-[#D8B4FE]', textColor: 'text-[#7E22CE]' },
  { id: 'Programming', icon: <Code size={20} />, iconBg: 'bg-[#4F46E5]', theme: 'bg-[#E0E7FF] border-[#A5B4FC]', textColor: 'text-[#3730A3]' },
];

export default function FlashcardsPage() {
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

  const filteredSets = activeCategory === 'All' 
    ? sets 
    : sets.filter(s => s.category === activeCategory);

  const displayCategories = [{ id: 'All', icon: <Plus className="rotate-45" size={20} />, iconBg: 'bg-slate-400', theme: 'bg-slate-100 border-slate-200', textColor: 'text-slate-600' }, ...categories];

  const handleAddCard = () => {
    setNewSet({
      ...newSet,
      cards: [...newSet.cards, { front: '', back: '' }]
    });
  };

  const handleRemoveCard = (index: number) => {
    const updatedCards = newSet.cards.filter((_, i) => i !== index);
    setNewSet({ ...newSet, cards: updatedCards });
  };

  const handleCardChange = (index: number, field: 'front' | 'back', value: string) => {
    const updatedCards = [...newSet.cards];
    updatedCards[index][field] = value;
    setNewSet({ ...newSet, cards: updatedCards });
  };

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
      theme: categoryInfo?.theme || '',
      iconBg: categoryInfo?.iconBg || '',
      textColor: categoryInfo?.textColor || '',
      icon: categoryInfo?.icon || <Languages className="text-white" size={24} />
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
            <Link href="/duolingo/classes" className="hover:text-slate-800 transition-colors">Classes</Link>
            <Link href="/duolingo/flashcards" className="text-slate-800 transition-colors border-b-2 border-slate-800 pb-1">Flashcards</Link>
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
          {/* Header & Stats */}
          <div className="flex flex-col lg:flex-row justify-between gap-10 items-start lg:items-center mb-8">
            <motion.div variants={fadeInUp} className="space-y-4">
              <h1 className="text-5xl font-black text-slate-800 tracking-tighter">
                Your <span className="text-[#34D399]">Flashcards</span>
              </h1>
              <p className="text-lg text-slate-500 font-medium">
                Master your knowledge with bite-sized, gamified study sets.
              </p>
            </motion.div>

            {/* Study Progress */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-auto">
              {studyProgress.map((stat) => (
                <div key={stat.id} className={`flex flex-col items-center justify-center p-4 rounded-3xl border-2 border-b-[4px] ${stat.theme} bg-white hover:-translate-y-1 transition-transform`}>
                  <div className="mb-2">{stat.icon}</div>
                  <span className="text-2xl font-black text-slate-800">{stat.value}</span>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Search & Actions & Category Menu */}
          <div className="space-y-8">
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="relative w-full sm:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} strokeWidth={3} />
                <input 
                  type="text" 
                  placeholder="Search your sets..." 
                  className="w-full bg-white border-2 border-slate-200 border-b-[4px] rounded-2xl py-3 pl-12 pr-4 text-slate-700 font-bold placeholder:text-slate-400 focus:outline-none focus:border-[#34D399] transition-colors"
                />
              </div>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-6 py-3 bg-[#34D399] text-white font-black rounded-2xl border-b-[4px] border-[#059669] hover:bg-[#10B981] active:border-b-0 active:translate-y-[4px] transition-all flex items-center justify-center gap-2 uppercase tracking-wide"
              >
                <Plus strokeWidth={3} /> Create Set
              </button>
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

          {/* Flashcard Sets Grid */}
          <div className="space-y-8">
            <motion.div variants={fadeInUp} className="flex items-center justify-between">
              <h2 className="text-3xl font-black text-slate-800 tracking-tight">
                {activeCategory === 'All' ? 'All Study Sets' : `${activeCategory} Sets`}
              </h2>
              <span className="text-sm font-bold text-slate-400 bg-white px-4 py-1 rounded-full border-2 border-slate-100">
                {filteredSets.length} sets found
              </span>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredSets.map((set) => (
                  <motion.div
                    key={set.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link href={`/duolingo/flashcards/${set.id}`}>
                      <div
                        className={`bg-white rounded-[32px] border-2 border-b-[6px] ${set.theme} p-6 h-full flex flex-col hover:-translate-y-2 transition-transform duration-300 cursor-pointer relative overflow-hidden group`}
                      >
                        <div className="flex justify-between items-start mb-6 relative z-10">
                          <div className={`w-14 h-14 rounded-2xl ${set.iconBg} flex items-center justify-center border-b-[4px] border-black/10 shadow-sm group-hover:scale-110 transition-transform`}>
                            {set.icon}
                          </div>
                          <span className={`px-3 py-1 bg-white/60 backdrop-blur-sm rounded-xl text-xs font-black uppercase tracking-wider ${set.textColor} border-2 border-white/50`}>
                            {set.category}
                          </span>
                        </div>
                        
                        <div className="mb-6 relative z-10">
                          <h3 className="text-2xl font-black text-slate-800 mb-2 leading-tight">{set.title}</h3>
                          <p className="text-sm font-bold text-slate-500 line-clamp-2">{set.description}</p>
                        </div>

                        <div className="mt-auto space-y-4 relative z-10">
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs font-black uppercase tracking-wider">
                              <span className="text-slate-400">Progress</span>
                              <span className={set.textColor}>{set.progress}%</span>
                            </div>
                            <div className="w-full h-3 bg-white/50 rounded-full overflow-hidden border border-white/60">
                              <div className={`h-full rounded-full ${set.iconBg}`} style={{ width: `${set.progress}%` }}></div>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between pt-4 border-t-2 border-slate-100/50">
                            <span className="text-xs font-bold text-slate-500">{set.cardCount} cards</span>
                            <div className={`w-10 h-10 rounded-xl ${set.iconBg} flex items-center justify-center border-b-[3px] border-black/10 active:border-b-0 active:translate-y-[3px] transition-all`}>
                              <Play className="text-white fill-white" size={18} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            
            {filteredSets.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 text-center space-y-4 bg-white rounded-[40px] border-2 border-dashed border-slate-200"
              >
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto text-slate-300">
                  <Search size={40} />
                </div>
                <p className="text-xl font-bold text-slate-400">No sets found in this category yet.</p>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="text-[#34D399] font-black uppercase tracking-wider hover:underline"
                >
                  Create one now
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </main>

      {/* Create Set Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-[40px] border-2 border-b-[12px] border-slate-200 overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-8 border-b-2 border-slate-100 flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-black text-slate-800 tracking-tighter">Create Study Set</h2>
                  <p className="text-slate-500 font-bold">Build your custom deck</p>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-400 border-2 border-slate-200 border-b-[4px] flex items-center justify-center hover:text-slate-800 active:border-b-0 active:translate-y-[4px] transition-all"
                >
                  <X strokeWidth={3} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-8 space-y-8">
                {/* Basic Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-black uppercase tracking-widest text-slate-400 ml-2">Title</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Organic Chemistry"
                      value={newSet.title}
                      onChange={(e) => setNewSet({...newSet, title: e.target.value})}
                      className="w-full bg-slate-50 border-2 border-slate-200 border-b-[4px] rounded-2xl px-6 py-4 text-lg font-bold focus:outline-none focus:border-[#34D399] transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black uppercase tracking-widest text-slate-400 ml-2">Category</label>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => setNewSet({...newSet, category: cat.id})}
                          className={`p-3 rounded-xl border-2 border-b-[4px] transition-all ${
                            newSet.category === cat.id 
                            ? `${cat.theme} scale-105` 
                            : "bg-white border-slate-200 text-slate-400 hover:border-slate-300"
                          }`}
                        >
                          {cat.icon}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-slate-400 ml-2">Description</label>
                  <textarea 
                    placeholder="What is this set about?"
                    value={newSet.description}
                    onChange={(e) => setNewSet({...newSet, description: e.target.value})}
                    rows={2}
                    className="w-full bg-slate-50 border-2 border-slate-200 border-b-[4px] rounded-2xl px-6 py-4 text-lg font-bold focus:outline-none focus:border-[#34D399] transition-colors resize-none"
                  />
                </div>

                {/* Cards List */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between ml-2">
                    <label className="text-sm font-black uppercase tracking-widest text-slate-400">Cards ({newSet.cards.length})</label>
                  </div>
                  
                  <div className="space-y-4">
                    {newSet.cards.map((card, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        key={idx} 
                        className="bg-white rounded-3xl border-2 border-slate-200 border-b-[4px] p-6 flex flex-col sm:flex-row gap-4 items-end sm:items-center"
                      >
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-black text-slate-400 shrink-0">
                          {idx + 1}
                        </div>
                        <div className="flex-1 grid sm:grid-cols-2 gap-4 w-full">
                          <input 
                            type="text" 
                            placeholder="Front / Term"
                            value={card.front}
                            onChange={(e) => handleCardChange(idx, 'front', e.target.value)}
                            className="bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-2 font-bold focus:outline-none focus:border-[#34D399]"
                          />
                          <input 
                            type="text" 
                            placeholder="Back / Definition"
                            value={card.back}
                            onChange={(e) => handleCardChange(idx, 'back', e.target.value)}
                            className="bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-2 font-bold focus:outline-none focus:border-[#34D399]"
                          />
                        </div>
                        <button 
                          onClick={() => handleRemoveCard(idx)}
                          disabled={newSet.cards.length === 1}
                          className="p-2 text-slate-300 hover:text-red-400 disabled:opacity-0 transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </motion.div>
                    ))}
                  </div>

                  <button 
                    onClick={handleAddCard}
                    className="w-full py-4 border-2 border-dashed border-slate-200 rounded-[24px] text-slate-400 font-bold hover:border-[#34D399] hover:text-[#34D399] transition-all flex items-center justify-center gap-2"
                  >
                    <Plus size={20} /> Add another card
                  </button>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-8 border-t-2 border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-4 bg-white text-slate-500 font-black rounded-2xl border-2 border-slate-200 border-b-[4px] active:border-b-0 active:translate-y-[4px] transition-all uppercase tracking-wide"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleSaveSet}
                  className="flex-[2] py-4 bg-[#34D399] text-white font-black rounded-2xl border-b-[4px] border-[#059669] hover:bg-[#10B981] active:border-b-0 active:translate-y-[4px] transition-all flex items-center justify-center gap-2 uppercase tracking-wide"
                >
                  <Save size={20} strokeWidth={3} /> Save Study Set
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
