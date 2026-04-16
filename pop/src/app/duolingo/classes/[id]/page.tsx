"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Play, BookOpen, Atom, FlaskConical, Dna, Calculator, 
  CheckCircle2, Clock, ChevronDown, Lock, Info, Trophy, Target, Zap, 
  TrendingUp, Activity, Star, LayoutGrid, Flame, Briefcase, PenTool, Brain,
  FileText, Calendar, ChevronRight
} from 'lucide-react';
import { useParams } from 'next/navigation';

// Enriched mock data for all subjects
const classesData: any = {
  'igcse-physics': {
    name: 'Physics',
    subtitle: 'Co-ordinated Sciences',
    icon: <Atom size={48} />,
    theme: "bg-[#DFF2FC] border-[#7DD3FC]",
    iconBg: "bg-[#0EA5E9]",
    textColor: "text-[#0284C7]",
    description: 'Master forces, electricity, and energy. Tailored specifically for the ANS Co-ordinated scheme.',
    stats: [
      { label: 'Topics Done', value: '8/11', icon: <BookOpen className="text-blue-400" /> },
      { label: 'Mock Score', value: '78%', icon: <Target className="text-emerald-400" /> },
      { label: 'Study Streak', value: '5 Days', icon: <Flame className="text-orange-400" /> },
      { label: 'Rank', value: '#12', icon: <Trophy className="text-yellow-500" /> },
    ],
    performanceData: [40, 65, 55, 90, 70, 85, 94],
    tiers: [
      { name: 'Beginner', level: 'Grades 1-3', progress: 100, color: 'bg-[#23A559]', textColor: 'text-[#23A559]' },
      { name: 'Intermediate', level: 'Grades 4-6', progress: 85, color: 'bg-[#FEE75C]', textColor: 'text-[#D97706]' },
      { name: 'Advance', level: 'Grades 7-9', progress: 40, color: 'bg-[#EB459E]', textColor: 'text-[#EB459E]' }
    ],
    topics: [
      { 
        id: 1, 
        title: 'Motion, Forces and Energy', 
        status: 'in-progress', 
        duration: '4h 30m', 
        type: 'core',
        subTopics: [
          {
            id: '1.1',
            title: 'Physical Quantities & Measurement',
            lessons: [
              { id: '1.1.1', title: 'Scalars and Vectors', status: 'completed' },
              { id: '1.1.2', title: 'Measurement of Length and Time', status: 'completed' }
            ]
          },
          {
            id: '1.2',
            title: 'Motion',
            lessons: [
              { id: '1.2.1', title: 'Speed, Velocity and Acceleration', status: 'completed' },
              { id: '1.2.2', title: 'Distance-Time Graphs', status: 'in-progress' }
            ]
          }
        ]
      },
      { id: 2, title: 'Thermal Physics', status: 'locked', duration: '3h 15m', type: 'theory', subTopics: [] },
      { id: 3, title: 'Waves', status: 'locked', duration: '2h 30m', type: 'lab', subTopics: [] }
    ]
  },
  'igcse-math': {
    name: 'Mathematics',
    subtitle: 'IGCSE Core/Extended',
    icon: <Calculator size={48} />,
    theme: "bg-[#FEF3C7] border-[#FCD34D]",
    iconBg: "bg-[#F59E0B]",
    textColor: "text-[#B45309]",
    description: 'Topic-by-topic revision with equation sheets and past-paper style questions.',
    stats: [
      { label: 'Formulas', value: '156', icon: <Star className="text-yellow-400" fill="currentColor" /> },
      { label: 'Mock Streak', value: '12 Days', icon: <Flame className="text-orange-500" fill="currentColor" /> },
      { label: 'Solved', value: '42', icon: <BookOpen className="text-blue-400" /> },
      { label: 'Rank', value: '#8', icon: <Trophy className="text-yellow-500" /> },
    ],
    performanceData: [50, 70, 60, 80, 75, 90, 88],
    tiers: [
      { name: 'Beginner', level: 'Grades 1-3', progress: 100, color: 'bg-[#23A559]', textColor: 'text-[#23A559]' },
      { name: 'Intermediate', level: 'Grades 4-6', progress: 65, color: 'bg-[#FEE75C]', textColor: 'text-[#D97706]' },
      { name: 'Advance', level: 'Grades 7-9', progress: 28, color: 'bg-[#EB459E]', textColor: 'text-[#EB459E]' }
    ],
    topics: [
      { 
        id: 1, 
        title: 'Number', 
        status: 'completed', 
        duration: '2h 00m', 
        type: 'math',
        subTopics: [
          {
            id: '1.1',
            title: 'Types of Number',
            lessons: [
              { id: '1.1.1', title: 'Primes, Factors & Multiples', status: 'completed' },
              { id: '1.1.2', title: 'Rational & Irrational', status: 'completed' }
            ]
          }
        ]
      }
    ]
  },
  'igcse-chemistry': {
    name: 'Chemistry',
    subtitle: 'Co-ordinated Sciences',
    icon: <FlaskConical size={48} />,
    theme: "bg-[#E2F7EB] border-[#6EE7B7]",
    iconBg: "bg-[#10B981]",
    textColor: "text-[#059669]",
    description: 'Dive into atomic structure, bonding, and reactions. Synced with ANS past paper style.',
    stats: [
      { label: 'Topics Done', value: '4/11', icon: <BookOpen className="text-emerald-400" /> },
      { label: 'Mock Score', value: '78%', icon: <Target className="text-blue-400" /> },
      { label: 'Study Streak', value: '3 Days', icon: <Flame className="text-orange-400" /> },
      { label: 'Rank', value: '#12', icon: <Trophy className="text-yellow-400" /> },
    ],
    performanceData: [30, 45, 40, 60, 55, 78, 78],
    tiers: [
      { name: 'Beginner', level: 'Grades 1-3', progress: 80, color: 'bg-[#23A559]', textColor: 'text-[#23A559]' },
      { name: 'Intermediate', level: 'Grades 4-6', progress: 40, color: 'bg-[#FEE75C]', textColor: 'text-[#D97706]' },
      { name: 'Advance', level: 'Grades 7-9', progress: 10, color: 'bg-[#EB459E]', textColor: 'text-[#EB459E]' }
    ],
    topics: [
      { 
        id: 1, 
        title: 'The Particulate Nature of Matter', 
        status: 'completed', 
        duration: '1h 00m', 
        type: 'theory',
        subTopics: [
          {
            id: '1.1',
            title: 'Solids, Liquids and Gases',
            lessons: [
              { id: '1.1.1', title: 'Kinetic Theory', status: 'completed' },
              { id: '1.1.2', title: 'Changes of State', status: 'completed' }
            ]
          }
        ]
      }
    ]
  },
  'igcse-biology': {
    name: 'Biology',
    subtitle: 'Co-ordinated Sciences',
    icon: <Dna size={48} />,
    theme: "bg-[#F3E8FF] border-[#D8B4FE]",
    iconBg: "bg-[#9333EA]",
    textColor: "text-[#7E22CE]",
    description: 'Explore cells, organisation, and ecology using ANS-style diagrams and questions.',
    stats: [
      { label: 'Topics Done', value: '0/11', icon: <BookOpen className="text-purple-400" /> },
      { label: 'Mock Score', value: '-', icon: <Target className="text-slate-400" /> },
      { label: 'Study Streak', value: '0 Days', icon: <Flame className="text-slate-400" /> },
      { label: 'Rank', value: '-', icon: <Trophy className="text-slate-400" /> },
    ],
    performanceData: [0, 0, 0, 10, 15, 20, 25],
    tiers: [
      { name: 'Beginner', level: 'Grades 1-3', progress: 20, color: 'bg-[#23A559]', textColor: 'text-[#23A559]' },
      { name: 'Intermediate', level: 'Grades 4-6', progress: 0, color: 'bg-[#FEE75C]', textColor: 'text-[#D97706]' },
      { name: 'Advance', level: 'Grades 7-9', progress: 0, color: 'bg-[#EB459E]', textColor: 'text-[#EB459E]' }
    ],
    topics: [
      { 
        id: 1, 
        title: 'Characteristics of Living Organisms', 
        status: 'completed', 
        duration: '45m', 
        type: 'theory',
        subTopics: [
          {
            id: '1.1',
            title: 'MRS GREN',
            lessons: [
              { id: '1.1.1', title: 'The 7 Life Processes', status: 'completed' }
            ]
          }
        ]
      },
      { id: 2, title: 'Cells', status: 'in-progress', duration: '1h 30m', type: 'core', subTopics: [] },
    ]
  },
  'igcse-business': {
    name: 'Business',
    subtitle: 'IGCSE',
    icon: <Briefcase size={48} />,
    theme: "bg-[#FFE5EC] border-[#F9A8D4]",
    iconBg: "bg-[#E11D48]",
    textColor: "text-[#BE185D]",
    description: 'Case study-led classes aligned with ANS past paper questions and style.',
    stats: [
      { label: 'Topics Done', value: '1/6', icon: <BookOpen className="text-pink-400" /> },
      { label: 'Mock Score', value: '55%', icon: <Target className="text-red-400" /> },
      { label: 'Study Streak', value: '2 Days', icon: <Flame className="text-orange-400" /> },
      { label: 'Rank', value: '#34', icon: <Trophy className="text-yellow-400" /> },
    ],
    performanceData: [10, 20, 15, 30, 25, 40, 50],
    tiers: [
      { name: 'Beginner', level: 'Grades 1-3', progress: 40, color: 'bg-[#23A559]', textColor: 'text-[#23A559]' },
      { name: 'Intermediate', level: 'Grades 4-6', progress: 15, color: 'bg-[#FEE75C]', textColor: 'text-[#D97706]' },
      { name: 'Advance', level: 'Grades 7-9', progress: 0, color: 'bg-[#EB459E]', textColor: 'text-[#EB459E]' }
    ],
    topics: [
      { 
        id: 1, 
        title: 'Understanding Business Activity', 
        status: 'completed', 
        duration: '1h 30m', 
        type: 'theory',
        subTopics: []
      }
    ]
  },
  'igcse-english': {
    name: 'English Language',
    subtitle: 'IGCSE',
    icon: <PenTool size={48} />,
    theme: "bg-[#E0E7FF] border-[#A5B4FC]",
    iconBg: "bg-[#4F46E5]",
    textColor: "text-[#3730A3]",
    description: 'Reading, writing, and summary practice with ANS-style exam prompts.',
    stats: [
      { label: 'Topics Done', value: '2/5', icon: <BookOpen className="text-indigo-400" /> },
      { label: 'Mock Score', value: '82%', icon: <Target className="text-blue-400" /> },
      { label: 'Study Streak', value: '6 Days', icon: <Flame className="text-orange-400" /> },
      { label: 'Rank', value: '#18', icon: <Trophy className="text-yellow-400" /> },
    ],
    performanceData: [50, 60, 55, 70, 75, 80, 85],
    tiers: [
      { name: 'Beginner', level: 'Grades 1-3', progress: 90, color: 'bg-[#23A559]', textColor: 'text-[#23A559]' },
      { name: 'Intermediate', level: 'Grades 4-6', progress: 50, color: 'bg-[#FEE75C]', textColor: 'text-[#D97706]' },
      { name: 'Advance', level: 'Grades 7-9', progress: 20, color: 'bg-[#EB459E]', textColor: 'text-[#EB459E]' }
    ],
    topics: [
      { 
        id: 1, 
        title: 'Reading Strategies', 
        status: 'completed', 
        duration: '1h 45m', 
        type: 'theory',
        subTopics: []
      }
    ]
  },
  'act-science': {
    name: 'ACT Science',
    subtitle: 'Reasoning & Data',
    icon: <Brain size={48} />,
    theme: "bg-[#FFEDD5] border-[#FDBA74]",
    iconBg: "bg-[#F97316]",
    textColor: "text-[#C2410C]",
    description: 'Data representation, research summaries, and conflicting viewpoints.',
    stats: [
      { label: 'Topics Done', value: '0/6', icon: <BookOpen className="text-orange-400" /> },
      { label: 'Mock Score', value: '-', icon: <Target className="text-slate-400" /> },
      { label: 'Study Streak', value: '0 Days', icon: <Flame className="text-slate-400" /> },
      { label: 'Rank', value: '-', icon: <Trophy className="text-slate-400" /> },
    ],
    performanceData: [0, 0, 5, 5, 10, 10, 15],
    tiers: [
      { name: 'Beginner', level: 'Grades 1-3', progress: 10, color: 'bg-[#23A559]', textColor: 'text-[#23A559]' },
      { name: 'Intermediate', level: 'Grades 4-6', progress: 0, color: 'bg-[#FEE75C]', textColor: 'text-[#D97706]' },
      { name: 'Advance', level: 'Grades 7-9', progress: 0, color: 'bg-[#EB459E]', textColor: 'text-[#EB459E]' }
    ],
    topics: [
      { 
        id: 1, 
        title: 'Data Representation', 
        status: 'in-progress', 
        duration: '1h 15m', 
        type: 'core',
        subTopics: []
      }
    ]
  }
};

export default function ClassDetailPage() {
  const params = useParams();
  const classId = params.id as string;
  const classDetail = classesData[classId] || classesData['igcse-physics'];
  
  const [activeTab, setActiveTab] = useState<'journey' | 'dashboard' | 'mock'>('journey');
  const [expandedTopic, setExpandedTopic] = useState<number | null>(1);
  const [selectedPaper, setSelectedPaper] = useState('paper2');

  const paperOptions = [
    { id: 'paper1', name: 'Paper 1 (Short Answer)' },
    { id: 'paper2', name: 'Paper 2 (Multiple Choice)' },
    { id: 'paper4', name: 'Paper 4 (Extended Theory)' }
  ];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", type: "spring", bounce: 0.4 } }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-[#E2F7EB] text-[#059669] border-[#6EE7B7]';
      case 'in-progress': return 'bg-[#DFF2FC] text-[#0284C7] border-[#7DD3FC]';
      case 'locked': return 'bg-slate-100 text-slate-400 border-slate-200';
      default: return 'bg-slate-100 text-slate-400 border-slate-200';
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-800 font-sans selection:bg-[#34D399] selection:text-white pb-32">
      {/* Friendly Custom Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b-2 border-slate-200/80">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/duolingo/classes" className="flex items-center gap-3 group text-slate-400 hover:text-slate-800 transition-colors">
            <div className="w-10 h-10 bg-white rounded-[14px] flex items-center justify-center border-2 border-slate-200 border-b-[4px] group-hover:bg-slate-50 active:border-b-2 active:translate-y-[2px] transition-all">
              <ArrowLeft strokeWidth={3} size={20} />
            </div>
            <span className="font-extrabold text-lg tracking-tight uppercase">Back to Classes</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-2xl border-2 border-slate-200 border-b-[4px] text-[#F97316] font-black shadow-sm">
              <Zap size={20} fill="currentColor" />
              <span>7 streak</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div initial="hidden" animate="visible" className="space-y-8">
          
          {/* Hero Header */}
          <motion.div variants={fadeInUp} className={`bg-white rounded-[48px] border-2 border-b-[12px] ${classDetail.theme} p-8 md:p-12 relative overflow-hidden`}>
            <div className={`absolute -top-24 -right-24 w-64 h-64 ${classDetail.iconBg} opacity-10 rounded-full blur-3xl`}></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center justify-between text-center md:text-left">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/80 backdrop-blur-sm rounded-xl text-xs font-black uppercase tracking-widest text-slate-500 border-2 border-white/50 shadow-sm mx-auto md:mx-0">
                  <Star size={14} className="text-yellow-400 fill-yellow-400" />
                  {classDetail.subtitle}
                </div>
                <h1 className="text-5xl md:text-6xl font-black text-slate-800 tracking-tighter leading-none">{classDetail.name}</h1>
                <p className="text-xl font-bold text-slate-500 leading-relaxed max-w-xl mx-auto md:mx-0">{classDetail.description}</p>
              </div>
              <div className={`w-32 h-32 md:w-48 md:h-48 rounded-[32px] md:rounded-[40px] ${classDetail.iconBg} flex items-center justify-center border-b-[8px] md:border-b-[12px] border-black/10 shadow-xl shrink-0 mx-auto md:mx-0`}>
                {React.cloneElement(classDetail.icon as any, { className: "text-white w-16 h-16 md:w-24 md:h-24", strokeWidth: 2.5 })}
              </div>
            </div>
          </motion.div>

          {/* Quick Actions - Lightning Quiz */}
          <motion.div variants={fadeInUp} className="bg-white rounded-[40px] border-2 border-b-[12px] border-slate-200 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-3xl font-black text-slate-800 tracking-tight">Need a quick review?</h3>
              <p className="text-lg font-bold text-slate-500 max-w-md">Take a 5-minute lightning quiz to refresh your knowledge on recent topics.</p>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <button className="w-full md:w-auto px-8 py-5 bg-[#7B2FF2] text-white rounded-[24px] font-black text-xl uppercase tracking-widest border-b-[6px] border-[#5B21B6] hover:bg-[#8B5CF6] active:border-b-0 active:translate-y-[6px] transition-all flex items-center justify-center gap-3 shadow-sm">
                <Zap size={24} fill="currentColor" /> Lightning Quiz
              </button>
            </div>
          </motion.div>

          {/* 3-Tab Selector */}
          <div className="flex flex-col sm:flex-row p-2 bg-white rounded-[32px] sm:rounded-[36px] border-2 border-slate-200 border-b-[6px] gap-2">
            <button 
              onClick={() => setActiveTab('journey')}
              className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-[24px] font-black text-sm uppercase tracking-widest transition-all z-10 ${activeTab === 'journey' ? 'bg-[#34D399] text-white shadow-md border-b-4 border-[#059669]' : 'text-slate-400 hover:bg-slate-50'}`}
            >
              <LayoutGrid size={18} strokeWidth={3} /> Journey
            </button>
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-[24px] font-black text-sm uppercase tracking-widest transition-all z-10 ${activeTab === 'dashboard' ? 'bg-[#7B2FF2] text-white shadow-md border-b-4 border-[#5B21B6]' : 'text-slate-400 hover:bg-slate-50'}`}
            >
              <Activity size={18} strokeWidth={3} /> Dashboard
            </button>
            <button 
              onClick={() => setActiveTab('mock')}
              className={`flex-1 flex items-center justify-center gap-3 py-4 rounded-[24px] font-black text-sm uppercase tracking-widest transition-all z-10 ${activeTab === 'mock' ? 'bg-[#F59E0B] text-white shadow-md border-b-4 border-[#D97706]' : 'text-slate-400 hover:bg-slate-50'}`}
            >
              <FileText size={18} strokeWidth={3} /> Mock Exam
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'journey' && (
              <motion.div 
                key="journey" 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Curriculum Journey Content */}
                {classDetail.topics?.length > 0 ? (
                  classDetail.topics.map((topic: any) => (
                    <div key={topic.id} className="space-y-4">
                      <motion.div 
                        onClick={() => topic.status !== 'locked' && setExpandedTopic(expandedTopic === topic.id ? null : topic.id)}
                        className={`bg-white rounded-[36px] border-2 border-slate-200 border-b-[8px] p-6 md:p-8 flex items-center justify-between transition-all group ${topic.status === 'locked' ? 'opacity-60 cursor-not-allowed' : 'hover:border-[#34D399]/30 cursor-pointer'}`}
                      >
                        <div className="flex items-center gap-6">
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black border-b-[4px] border-black/10 shrink-0 ${getStatusStyle(topic.status)}`}>
                            {topic.status === 'completed' ? <CheckCircle2 size={28} strokeWidth={3} /> : topic.status === 'locked' ? <Lock size={24} /> : topic.id}
                          </div>
                          <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{topic.type} • {topic.duration}</p>
                            <h3 className="text-2xl font-black text-slate-700">{topic.title}</h3>
                          </div>
                        </div>
                        {topic.subTopics?.length > 0 && (
                          <ChevronDown className={`text-slate-300 transition-transform duration-300 ${expandedTopic === topic.id ? 'rotate-180 text-[#34D399]' : ''}`} size={28} strokeWidth={3} />
                        )}
                      </motion.div>

                      <AnimatePresence>
                        {expandedTopic === topic.id && topic.subTopics?.length > 0 && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden space-y-4 px-4">
                            {topic.subTopics.map((sub: any) => (
                              <div key={sub.id} className="bg-white/50 rounded-[28px] p-6 border-2 border-slate-100 border-b-4 ml-4">
                                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-slate-200" /> {sub.title}
                                </h4>
                                <div className="grid gap-2">
                                  {sub.lessons.map((lesson: any) => (
                                    <div key={lesson.id} className="bg-white rounded-2xl p-4 flex items-center justify-between group border-2 border-transparent hover:border-[#34D399]/20 transition-all">
                                      <div className="flex items-center gap-4">
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getStatusStyle(lesson.status)}`}>
                                          {lesson.status === 'completed' ? <CheckCircle2 size={16} strokeWidth={3} /> : <div className="w-2 h-2 rounded-full bg-current opacity-40" />}
                                        </div>
                                        <span className="font-bold text-[15px] text-slate-600">{lesson.title}</span>
                                      </div>
                                      <Link href={`/duolingo/classes/lesson/${classId}/${lesson.id}`}>
                                        <button className="w-8 h-8 rounded-lg bg-slate-50 text-slate-300 opacity-0 group-hover:opacity-100 hover:bg-[#34D399] hover:text-white transition-all">
                                          <Play size={14} fill="currentColor" />
                                        </button>
                                      </Link>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))
                ) : (
                  <div className="py-20 text-center bg-white rounded-[48px] border-2 border-dashed border-slate-200 space-y-4">
                    <BookOpen size={48} className="text-slate-200 mx-auto" />
                    <p className="text-xl font-black text-slate-400">Curriculum path coming soon.</p>
                  </div>
                )}
              </motion.div>
            )}
            {activeTab === 'dashboard' && (
              <motion.div 
                key="dashboard" 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Stats Grid */}
                {classDetail.stats && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {classDetail.stats.map((stat: any, i: number) => (
                      <div key={i} className="bg-white p-6 rounded-[32px] border-2 border-b-[6px] border-slate-200 flex flex-col items-center gap-2 group hover:border-[#7B2FF2]/20 transition-all">
                        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">{stat.icon}</div>
                        <span className="text-2xl font-black text-slate-800 leading-none">{stat.value}</span>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Performance Chart */}
                {classDetail.performanceData && (
                  <div className="bg-white rounded-[40px] border-2 border-b-[10px] border-slate-200 p-8 space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-black text-slate-800">Learning Momentum</h3>
                      <TrendingUp className="text-[#7B2FF2]" size={24} strokeWidth={3} />
                    </div>
                    <div className="h-32 flex items-end gap-3 px-2">
                      {classDetail.performanceData.map((h: number, i: number) => (
                        <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} className="flex-1 bg-[#7B2FF2]/10 rounded-t-xl border-b-4 border-[#7B2FF2] relative group">
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#7B2FF2] text-white text-[10px] font-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{h}%</div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex justify-between text-[9px] font-black text-slate-300 uppercase tracking-[0.2em]"><span>Week Start</span><span>Today</span></div>
                  </div>
                )}

                {/* Tiers Integration For All Subjects */}
                {classDetail.tiers && (
                  <div className="space-y-4">
                    <h3 className="text-2xl font-black text-slate-800 px-4">Mastery Tiers</h3>
                    <div className="grid gap-4">
                      {classDetail.tiers.map((tier: any, i: number) => (
                        <div key={i} className="bg-white p-8 rounded-[40px] border-2 border-b-[8px] border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-[#34D399]/30 transition-all">
                          <div className="flex items-center gap-6">
                            <div className={`w-16 h-16 rounded-[20px] ${tier.color} text-white flex items-center justify-center font-black text-2xl border-b-4 border-black/10`}>{tier.name[0]}</div>
                            <div>
                              <h3 className="text-2xl font-black text-slate-800">{tier.name}</h3>
                              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{tier.level}</p>
                            </div>
                          </div>
                          <div className="flex-1 max-w-xs w-full space-y-3">
                            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                              <span className="text-slate-400">Mastery</span>
                              <span className={tier.textColor}>{tier.progress}%</span>
                            </div>
                            <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden p-0.5 shadow-inner">
                              <div className={`h-full rounded-full ${tier.color} transition-all duration-1000`} style={{ width: `${tier.progress}%` }} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick Mission */}
                <div className="bg-[#FAF9F6] border-2 border-dashed border-slate-200 rounded-[40px] p-10 text-center space-y-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto text-[#7B2FF2] shadow-sm border border-slate-100">
                    <Zap size={28} fill="currentColor" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-black text-slate-600 uppercase tracking-widest text-xs">Active Objective</h3>
                    <p className="text-slate-500 font-bold max-w-md mx-auto leading-tight">Complete the next 2 lessons to reach <span className="text-[#7B2FF2]">Silver Mastery</span> in this subject!</p>
                  </div>
                </div>
              </motion.div>
            )}
            {activeTab === 'mock' && (
              <motion.div 
                key="mock" 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Hero CTA for Mock */}
                <div className="bg-[#F59E0B] rounded-[48px] border-b-[12px] border-[#D97706] p-10 md:p-14 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
                  <div className="absolute -left-10 -bottom-10 opacity-10">
                    <Target size={240} />
                  </div>
                  <div className="relative z-10 space-y-4 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-2xl text-xs font-black uppercase tracking-widest border border-white/30">
                      <Flame size={14} fill="currentColor" /> Ready for the test?
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black tracking-tighter">Take a Mock Exam</h3>
                    <p className="text-lg font-bold text-white/90 max-w-md">Simulate the real exam environment. Questions are AI-generated based on past papers and your current weak points.</p>
                    
                    <div className="pt-4 flex flex-col gap-2">
                      <span className="text-xs font-black uppercase tracking-widest text-white/80">Select Exam Paper</span>
                      <div className="flex flex-wrap gap-2">
                        {paperOptions.map(option => (
                          <button
                            key={option.id}
                            onClick={() => setSelectedPaper(option.id)}
                            className={`px-4 py-2 rounded-xl text-sm font-black transition-all ${
                              selectedPaper === option.id 
                                ? 'bg-white text-[#F59E0B] shadow-md border-b-4 border-[#FDE68A]' 
                                : 'bg-white/20 text-white hover:bg-white/30 border-b-4 border-transparent'
                            }`}
                          >
                            {option.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Link href={`/duolingo/classes/mock/${classId}?paper=${selectedPaper}`} className="relative z-10 w-full md:w-auto mt-4 md:mt-0">
                    <button className="w-full px-10 py-5 bg-white text-[#F59E0B] rounded-[24px] font-black text-xl hover:bg-[#FFFBEB] active:border-b-0 active:translate-y-[6px] transition-all border-b-[6px] border-[#FDE68A] flex items-center justify-center gap-3 shadow-lg uppercase tracking-wide">
                      <Play size={24} fill="currentColor" /> Start Exam
                    </button>
                  </Link>
                </div>

                {/* Previous Mocks History */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-black text-slate-800 px-4">Previous Results</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { date: 'Yesterday', score: '82%', grade: 'A', focus: 'Motion & Energy', time: '45m' },
                      { date: 'Last Week', score: '65%', grade: 'C', focus: 'Thermal Physics', time: '1h 15m' },
                    ].map((mock, i) => (
                      <div key={i} className="bg-white rounded-[32px] border-2 border-slate-200 border-b-[8px] p-6 hover:-translate-y-1 transition-transform group cursor-pointer relative overflow-hidden">
                        <div className="flex justify-between items-start mb-6">
                          <div className="space-y-1">
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-100 px-2 py-1 rounded-lg">Mock Exam</span>
                            <h4 className="text-xl font-black text-slate-700">{mock.focus}</h4>
                          </div>
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-black border-b-[4px] border-black/10 text-white shadow-sm ${mock.score.startsWith('8') ? 'bg-[#34D399]' : 'bg-[#F59E0B]'}`}>
                            {mock.grade}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="bg-slate-50 rounded-2xl p-3 border-2 border-slate-100">
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Score</p>
                            <p className="text-xl font-black text-slate-700">{mock.score}</p>
                          </div>
                          <div className="bg-slate-50 rounded-2xl p-3 border-2 border-slate-100">
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Time</p>
                            <p className="text-xl font-black text-slate-700">{mock.time}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t-2 border-slate-100/50">
                          <span className="text-xs font-bold text-slate-400 flex items-center gap-1"><Calendar size={14} /> {mock.date}</span>
                          <span className="text-sm font-black text-[#F59E0B] uppercase tracking-widest group-hover:translate-x-1 transition-transform flex items-center gap-1">Deep Dive <ChevronRight size={16} /></span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      </main>
    </div>
  );
}
