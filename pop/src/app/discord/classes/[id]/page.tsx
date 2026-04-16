"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Play, BookOpen, FileText, CheckCircle2, Clock, ChevronRight, 
  Star, Zap, Lock, Info, ChevronDown, Hash, MessageSquare, Shield, Bell, 
  Users, LayoutGrid, Activity, Calendar, Target, Flame, Trophy, TrendingUp 
} from 'lucide-react';
import { useParams } from 'next/navigation';

const classesData: any = {
  'igcse-physics': {
    name: 'physics-coordinated',
    subject: 'Physics',
    subtitle: 'Co-ordinated Sciences Module',
    icon: '⚛️',
    roleColor: '#5865F2',
    iconBg: 'bg-[#5865F2]',
    textColor: 'text-[#5865F2]',
    description: 'Deep dive into forces, electricity, and energy. Synced with #ans-curriculum standards.',
    stats: [
      { label: 'Rush Progress', value: '45%', icon: <Zap className="text-[#FEE75C]" /> },
      { label: 'Sprint Time', value: '14h', icon: <Clock className="text-[#5865F2]" /> },
      { label: 'Accuracy', value: '92%', icon: <Target className="text-[#23A559]" /> },
      { label: 'Rank', value: '#4', icon: <Trophy className="text-[#FEE75C]" /> },
    ],
    performanceData: [40, 65, 55, 90, 70, 85, 94],
    tiers: [
      { name: 'Beginner', level: 'Grades 1-3', progress: 100, color: 'bg-[#23A559]', textColor: 'text-[#23A559]' },
      { name: 'Intermediate', level: 'Grades 4-6', progress: 85, color: 'bg-[#FEE75C]', textColor: 'text-[#FEE75C]' },
      { name: 'Advance', level: 'Grades 7-9', progress: 40, color: 'bg-[#EB459E]', textColor: 'text-[#EB459E]' }
    ],
    topics: [
      { 
        id: 1, 
        title: 'Motion, Forces and Energy', 
        status: 'in-progress', 
        duration: '4h 30m', 
        type: 'Core',
        subTopics: [
          {
            id: '1.1',
            title: 'Physical Quantities & Measurement',
            lessons: [
              { id: '1.1.1', title: 'Scalars and Vectors', status: 'completed' },
              { id: '1.1.2', title: 'Precision measurement drills', status: 'completed' }
            ]
          },
          {
            id: '1.2',
            title: 'Dynamics',
            lessons: [
              { id: '1.2.1', title: 'Kinematics formulas', status: 'completed' },
              { id: '1.2.2', title: 'Analyzing Distance-Time graphs', status: 'in-progress' },
              { id: '1.2.3', title: 'Velocity-Time interactions', status: 'locked' }
            ]
          }
        ]
      },
      { 
        id: 2, 
        title: 'Thermal Physics', 
        status: 'locked', 
        duration: '3h 15m', 
        type: 'Theory',
        subTopics: [
          {
            id: '2.1',
            title: 'Kinetic Particle Model',
            lessons: [
              { id: '2.1.1', title: 'Molecular perspective', status: 'locked' },
              { id: '2.1.2', title: 'Boyle\'s Law simulations', status: 'locked' }
            ]
          }
        ]
      }
    ]
  },
  'igcse-chemistry': {
    name: 'chemistry-coordinated',
    subject: 'Chemistry',
    subtitle: 'Co-ordinated Sciences Module',
    icon: '🧪',
    roleColor: '#23A559',
    iconBg: 'bg-[#23A559]',
    textColor: 'text-[#23A559]',
    description: 'Exploring atomic structures and bonding. Check #chemistry-pins for resources.',
    stats: [
      { label: 'Topics Done', value: '4/11', icon: <BookOpen className="text-[#23A559]" /> },
      { label: 'Mock Score', value: '78%', icon: <Target className="text-[#5865F2]" /> },
      { label: 'Study Streak', value: '3 Days', icon: <Flame className="text-[#ED4245]" /> },
      { label: 'Rank', value: '#12', icon: <Trophy className="text-[#FEE75C]" /> },
    ],
    performanceData: [30, 45, 40, 60, 55, 78, 78],
    tiers: [
      { name: 'Beginner', level: 'Grades 1-3', progress: 80, color: 'bg-[#23A559]', textColor: 'text-[#23A559]' },
      { name: 'Intermediate', level: 'Grades 4-6', progress: 40, color: 'bg-[#FEE75C]', textColor: 'text-[#FEE75C]' },
      { name: 'Advance', level: 'Grades 7-9', progress: 10, color: 'bg-[#EB459E]', textColor: 'text-[#EB459E]' }
    ],
    topics: [
      { 
        id: 1, 
        title: 'The Particulate Nature of Matter', 
        status: 'completed', 
        duration: '1h 00m', 
        type: 'Theory',
        subTopics: [
          {
            id: '1.1',
            title: 'States of Matter',
            lessons: [
              { id: '1.1.1', title: 'Kinetic theory walkthrough', status: 'completed' }
            ]
          }
        ]
      }
    ]
  },
  'igcse-biology': {
    name: 'biology-coordinated',
    subject: 'Biology',
    subtitle: 'Co-ordinated Sciences Module',
    icon: '🧬',
    roleColor: '#9A86FD',
    iconBg: 'bg-[#9333EA]',
    textColor: 'text-[#9A86FD]',
    description: 'Exploring cells and ecology. Check #biology-pins for resources.',
    stats: [
      { label: 'Topics Done', value: '0/11', icon: <BookOpen className="text-[#9A86FD]" /> },
      { label: 'Mock Score', value: '-', icon: <Target className="text-[#80848E]" /> },
      { label: 'Study Streak', value: '0 Days', icon: <Flame className="text-[#80848E]" /> },
      { label: 'Rank', value: '-', icon: <Trophy className="text-[#80848E]" /> },
    ],
    performanceData: [0, 0, 0, 10, 15, 20, 25],
    tiers: [
      { name: 'Beginner', level: 'Grades 1-3', progress: 20, color: 'bg-[#23A559]', textColor: 'text-[#23A559]' },
      { name: 'Intermediate', level: 'Grades 4-6', progress: 0, color: 'bg-[#FEE75C]', textColor: 'text-[#FEE75C]' },
      { name: 'Advance', level: 'Grades 7-9', progress: 0, color: 'bg-[#EB459E]', textColor: 'text-[#EB459E]' }
    ],
    topics: []
  },
  'igcse-math': {
    name: 'mathematics-extended',
    subject: 'Mathematics',
    subtitle: 'IGCSE Core/Extended Module',
    icon: '📐',
    roleColor: '#EB459E',
    iconBg: 'bg-[#E11D48]',
    textColor: 'text-[#EB459E]',
    description: 'Advanced algebra and geometry. Synced with #math-curriculum.',
    stats: [
      { label: 'Formulas', value: '156', icon: <Star className="text-[#FEE75C]" fill="currentColor" /> },
      { label: 'Mock Streak', value: '12 Days', icon: <Flame className="text-[#ED4245]" fill="currentColor" /> },
      { label: 'Solved', value: '42', icon: <BookOpen className="text-[#5865F2]" /> },
      { label: 'Rank', value: '#8', icon: <Trophy className="text-[#FEE75C]" /> },
    ],
    performanceData: [50, 70, 60, 80, 75, 90, 88],
    tiers: [
      { name: 'Beginner', level: 'Grades 1-3', progress: 100, color: 'bg-[#23A559]', textColor: 'text-[#23A559]' },
      { name: 'Intermediate', level: 'Grades 4-6', progress: 65, color: 'bg-[#FEE75C]', textColor: 'text-[#FEE75C]' },
      { name: 'Advance', level: 'Grades 7-9', progress: 28, color: 'bg-[#EB459E]', textColor: 'text-[#EB459E]' }
    ],
    topics: []
  },
  'igcse-business': {
    name: 'business-studies',
    subject: 'Business',
    subtitle: 'IGCSE Module',
    icon: '💼',
    roleColor: '#FEE75C',
    iconBg: 'bg-[#F59E0B]',
    textColor: 'text-[#FEE75C]',
    description: 'Case study-led analysis. Check #business-pins.',
    stats: [
      { label: 'Topics Done', value: '1/6', icon: <BookOpen className="text-[#FEE75C]" /> },
      { label: 'Mock Score', value: '55%', icon: <Target className="text-[#ED4245]" /> },
      { label: 'Study Streak', value: '2 Days', icon: <Flame className="text-[#ED4245]" /> },
      { label: 'Rank', value: '#34', icon: <Trophy className="text-[#FEE75C]" /> },
    ],
    performanceData: [10, 20, 15, 30, 25, 40, 50],
    tiers: [
      { name: 'Beginner', level: 'Grades 1-3', progress: 40, color: 'bg-[#23A559]', textColor: 'text-[#23A559]' },
      { name: 'Intermediate', level: 'Grades 4-6', progress: 15, color: 'bg-[#FEE75C]', textColor: 'text-[#FEE75C]' },
      { name: 'Advance', level: 'Grades 7-9', progress: 0, color: 'bg-[#EB459E]', textColor: 'text-[#EB459E]' }
    ],
    topics: []
  },
  'igcse-english': {
    name: 'english-language',
    subject: 'English',
    subtitle: 'IGCSE Specialization',
    icon: '📖',
    roleColor: '#5865F2',
    iconBg: 'bg-[#4F46E5]',
    textColor: 'text-[#5865F2]',
    description: 'Reading and writing practice. Check #english-pins.',
    stats: [
      { label: 'Topics Done', value: '2/5', icon: <BookOpen className="text-[#5865F2]" /> },
      { label: 'Mock Score', value: '82%', icon: <Target className="text-[#5865F2]" /> },
      { label: 'Study Streak', value: '6 Days', icon: <Flame className="text-[#ED4245]" /> },
      { label: 'Rank', value: '#18', icon: <Trophy className="text-[#FEE75C]" /> },
    ],
    performanceData: [50, 60, 55, 70, 75, 80, 85],
    tiers: [
      { name: 'Beginner', level: 'Grades 1-3', progress: 90, color: 'bg-[#23A559]', textColor: 'text-[#23A559]' },
      { name: 'Intermediate', level: 'Grades 4-6', progress: 50, color: 'bg-[#FEE75C]', textColor: 'text-[#FEE75C]' },
      { name: 'Advance', level: 'Grades 7-9', progress: 20, color: 'bg-[#EB459E]', textColor: 'text-[#EB459E]' }
    ],
    topics: []
  }
};

export default function DiscordClassDetailPage() {
  const params = useParams();
  const classId = params.id as string;
  const classDetail = classesData[classId] || classesData['igcse-physics'];
  
  const [activeTab, setActiveTab] = useState<'journey' | 'dashboard' | 'mock'>('journey');
  const [expandedTopic, setExpandedTopic] = useState<number | null>(1);
  const [selectedPaper, setSelectedPaper] = useState('paper2');

  const paperOptions = [
    { id: 'paper1', name: 'Paper 1 (Short)' },
    { id: 'paper2', name: 'Paper 2 (MCQ)' },
    { id: 'paper4', name: 'Paper 4 (Extended)' }
  ];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-[#23A559]';
      case 'in-progress': return 'text-[#5865F2]';
      case 'locked': return 'text-[#80848E]';
      default: return 'text-[#80848E]';
    }
  };

  const getLessonIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle2 size={16} className="text-[#23A559]" />;
      case 'in-progress': return <div className="w-4 h-4 rounded-full border-2 border-[#5865F2] border-t-transparent animate-spin" />;
      case 'locked': return <Lock size={14} className="text-[#4E5058]" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#313338] text-[#F2F3F5] font-sans selection:bg-[#5865F2]/40 selection:text-white pb-32">
      {/* Discord-style Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-[#1E1F22] border-b border-[#111214] shadow-md">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <Link href="/discord/classes" className="flex items-center gap-2 text-[#B5BAC1] hover:text-[#F2F3F5] transition-colors group">
            <ArrowLeft size={18} />
            <span className="font-bold text-sm uppercase tracking-wider italic">Back to curriculum-list</span>
          </Link>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[#2B2D31] rounded-[4px] border border-[#1E1F22] text-[#F97316] text-xs font-bold uppercase tracking-widest">
              <Zap size={14} fill="currentColor" />
              <span>7 streak</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#5865F2] flex items-center justify-center text-white text-xs font-bold border border-[#111214]">
              JD
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Channel Info Card - Discord Header Style */}
          <motion.div variants={fadeInUp} className="bg-[#2B2D31] rounded-[16px] border border-[#1E1F22] overflow-hidden shadow-xl">
             <div className="h-20 w-full" style={{ backgroundColor: classDetail.roleColor }}></div>
             
             <div className="px-8 pb-8 relative">
                <div className="absolute -top-10 left-8 w-20 h-20 rounded-2xl bg-[#1E1F22] border-[4px] border-[#2B2D31] flex items-center justify-center shadow-lg text-4xl">
                  {classDetail.icon}
                </div>

                <div className="pt-14 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                       <h1 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
                         <span className="text-[#80848E] font-light">#</span>
                         {classDetail.name}
                       </h1>
                       <div className="w-5 h-5 bg-[#5865F2] rounded-full flex items-center justify-center">
                         <CheckCircle2 size={12} className="text-white" strokeWidth={4} />
                       </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className={`px-2 py-0.5 rounded-[4px] bg-[#1E1F22] text-[10px] font-bold border border-[#111214]`} style={{ color: classDetail.roleColor }}>
                        {classDetail.subject} Role
                      </span>
                      <span className="px-2 py-0.5 rounded-[4px] bg-[#1E1F22] text-[10px] font-bold text-[#B5BAC1] border border-[#111214]">
                        {classDetail.subtitle}
                      </span>
                    </div>

                    <p className="text-[#DBDEE1] text-[15px] font-medium leading-relaxed max-w-2xl">
                      {classDetail.description}
                    </p>

                    <div className="flex items-center gap-6 text-[11px] font-bold text-[#80848E] pt-2 uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <Users size={14} />
                        <span>1.2k learners</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} />
                        <span>12h duration</span>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
          </motion.div>

          {/* Quick Actions - Lightning Quiz */}
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

          {/* 3-Tab Selector (Discord Channel Category Style) */}
          <div className="flex flex-col sm:flex-row gap-2 bg-[#2B2D31] p-1.5 rounded-[8px] border border-[#1E1F22]">
            <button 
              onClick={() => setActiveTab('journey')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-[4px] font-bold text-sm transition-all ${activeTab === 'journey' ? 'bg-[#3F4147] text-white shadow-sm' : 'text-[#80848E] hover:text-[#DBDEE1] hover:bg-[#35373C]'}`}
            >
              <Hash size={16} /> learning-journey
            </button>
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-[4px] font-bold text-sm transition-all ${activeTab === 'dashboard' ? 'bg-[#3F4147] text-white shadow-sm' : 'text-[#80848E] hover:text-[#DBDEE1] hover:bg-[#35373C]'}`}
            >
              <Activity size={16} /> performance-dashboard
            </button>
            <button 
              onClick={() => setActiveTab('mock')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-[4px] font-bold text-sm transition-all ${activeTab === 'mock' ? 'bg-[#3F4147] text-[#FEE75C] shadow-sm' : 'text-[#80848E] hover:text-[#DBDEE1] hover:bg-[#35373C]'}`}
            >
              <FileText size={16} /> mock-exams
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'journey' && (
              <motion.div 
                key="journey" 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div className="space-y-3">
                  {classDetail.topics.map((topic: any) => (
                    <div key={topic.id} className="space-y-2">
                      {/* Topic Row */}
                      <motion.div 
                        onClick={() => topic.status !== 'locked' && setExpandedTopic(expandedTopic === topic.id ? null : topic.id)}
                        className={`bg-[#2B2D31] hover:bg-[#35373C] rounded-[8px] border border-[#1E1F22] p-5 flex items-center justify-between transition-all group ${topic.status === 'locked' ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                      >
                        <div className="flex items-center gap-6 flex-1">
                          <div className={`w-10 h-10 rounded-[8px] bg-[#1E1F22] flex items-center justify-center text-lg font-bold shrink-0 ${getStatusColor(topic.status)}`}>
                            {topic.status === 'completed' ? <CheckCircle2 size={24} strokeWidth={2.5} /> : <Hash size={20} />}
                          </div>
                          
                          <div className="space-y-0.5">
                            <div className="flex items-center gap-3">
                              <span className={`text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-[#1E1F22] border border-[#111214] ${getStatusColor(topic.status)}`}>
                                {topic.type}
                              </span>
                              <span className="text-[10px] font-bold text-[#80848E] uppercase tracking-widest flex items-center gap-1">
                                <Clock size={10} /> {topic.duration}
                              </span>
                            </div>
                            <h3 className="text-lg font-extrabold text-white leading-tight group-hover:text-[#5865F2] transition-colors italic">{topic.title.toLowerCase().replace(' ', '-')}</h3>
                          </div>
                        </div>
                        
                        {topic.subTopics.length > 0 && (
                          <div className={`text-[#80848E] transition-transform ${expandedTopic === topic.id ? 'rotate-180 text-white' : ''}`}>
                            <ChevronDown size={20} />
                          </div>
                        )}
                      </motion.div>

                      {/* Nested Sub-topics and Lessons */}
                      <AnimatePresence>
                        {expandedTopic === topic.id && topic.subTopics.length > 0 && (
                          <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="pl-14 space-y-6 py-2"
                          >
                            {topic.subTopics.map((sub: any) => (
                              <div key={sub.id} className="space-y-3 relative border-l-2 border-[#1E1F22] pl-8">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#80848E] flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#5865F2]" />
                                  {sub.title}
                                </h4>

                                <div className="grid gap-1">
                                  {sub.lessons.map((lesson: any) => (
                                    <motion.div
                                      key={lesson.id}
                                      whileHover={{ x: 2 }}
                                      className={`bg-[#2B2D31] hover:bg-[#3F4147] p-3 flex items-center justify-between group rounded-[4px] transition-colors ${lesson.status === 'locked' ? 'opacity-50' : 'cursor-pointer'}`}
                                    >
                                      <div className="flex items-center gap-4">
                                        <div className="shrink-0">
                                          {getLessonIcon(lesson.status)}
                                        </div>
                                        <span className={`text-sm font-semibold italic ${lesson.status === 'locked' ? 'text-[#4E5058]' : 'text-[#B5BAC1] group-hover:text-white'}`}>
                                          <span className="text-[#80848E] font-light mr-1">#</span>
                                          {lesson.title.toLowerCase().replace(' ', '-')}
                                        </span>
                                      </div>
                                      
                                      {lesson.status !== 'locked' && (
                                        <Link href={`/discord/classes/lesson/${classId}/${lesson.id}`}>
                                          <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-3 cursor-pointer">
                                            <Play size={14} className="text-[#80848E] hover:text-[#F2F3F5]" />
                                          </div>
                                        </Link>
                                      )}
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'dashboard' && (
              <motion.div 
                key="dashboard" 
                initial={{ opacity: 0, scale: 0.98 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {/* Stats Grid */}
                {classDetail.stats && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {classDetail.stats.map((stat: any, i: number) => (
                      <div key={i} className="bg-[#2B2D31] p-6 rounded-[8px] border border-[#1E1F22] flex flex-col items-center gap-2 hover:bg-[#35373C] transition-all">
                        <div className="w-10 h-10 bg-[#1E1F22] rounded-[8px] flex items-center justify-center shadow-lg mb-2">{stat.icon}</div>
                        <span className="text-2xl font-extrabold text-white leading-none">{stat.value}</span>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#80848E]">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Performance Chart */}
                {classDetail.performanceData && (
                  <div className="bg-[#2B2D31] rounded-[12px] border border-[#1E1F22] p-8 space-y-6 shadow-xl">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-extrabold text-white">Learning Momentum</h3>
                      <TrendingUp className="text-[#23A559]" size={20} />
                    </div>
                    <div className="h-32 flex items-end gap-2 px-2">
                      {classDetail.performanceData.map((h: number, i: number) => (
                        <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} className="flex-1 bg-[#23A559]/20 rounded-t-sm relative group hover:bg-[#23A559]/40 transition-colors">
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#1E1F22] text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-[#111214] shadow-md">{h}%</div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex justify-between text-[9px] font-bold text-[#80848E] uppercase tracking-widest">
                      <span>Week Start</span>
                      <span>Today</span>
                    </div>
                  </div>
                )}

                {/* Tiers Section */}
                {classDetail.tiers && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-extrabold text-white px-2">Mastery Tiers</h3>
                    <div className="grid gap-3">
                      {classDetail.tiers.map((tier: any, i: number) => (
                        <div key={i} className="bg-[#2B2D31] p-6 rounded-[8px] border border-[#1E1F22] flex flex-col md:flex-row items-center justify-between gap-8 hover:bg-[#35373C] transition-all">
                          <div className="flex items-center gap-6">
                            <div className={`w-12 h-12 rounded-[12px] ${tier.color} text-white flex items-center justify-center font-extrabold text-xl shadow-lg`}>{tier.name[0]}</div>
                            <div>
                              <h3 className="text-lg font-extrabold text-white">{tier.name}</h3>
                              <p className="text-[10px] font-bold uppercase tracking-widest text-[#80848E]">{tier.level}</p>
                            </div>
                          </div>
                          <div className="flex-1 max-w-xs w-full space-y-2">
                            <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                              <span className="text-[#80848E]">Mastery</span>
                              <span className={tier.textColor}>{tier.progress}%</span>
                            </div>
                            <div className="w-full h-1.5 bg-[#1E1F22] rounded-full overflow-hidden shadow-inner">
                              <div className={`h-full ${tier.color} transition-all duration-1000`} style={{ width: `${tier.progress}%` }} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick Mission */}
                <motion.div variants={fadeInUp} className="bg-[#1E1F22] p-6 rounded-[8px] border-l-4 border-[#5865F2] flex items-start gap-4">
                   <div className="w-10 h-10 rounded-full bg-[#2B2D31] flex items-center justify-center shrink-0">
                      <Zap size={20} className="text-[#5865F2]" />
                   </div>
                   <div className="space-y-1">
                      <h3 className="font-bold text-sm text-white">System Message — Active Objective</h3>
                      <p className="text-sm text-[#B5BAC1] leading-relaxed">
                        Complete the next 2 lessons to reach <span className="text-[#23A559] font-bold">@Silver Mastery</span> in this subject. Keep the momentum going!
                      </p>
                   </div>
                </motion.div>
              </motion.div>
            )}

            {activeTab === 'mock' && (
              <motion.div 
                key="mock" 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                {/* Hero CTA for Mock */}
                <div className="bg-[#2B2D31] rounded-[16px] border border-[#FEE75C]/30 p-8 md:p-12 relative overflow-hidden shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 group">
                  <div className="absolute -left-10 -bottom-10 opacity-5 group-hover:scale-110 transition-transform duration-500">
                    <Target size={240} className="text-[#FEE75C]" />
                  </div>
                  
                  <div className="relative z-10 space-y-4 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FEE75C]/10 rounded-[4px] text-[10px] font-bold text-[#FEE75C] uppercase tracking-widest border border-[#FEE75C]/20">
                      <Flame size={12} fill="currentColor" /> Ready for the test?
                    </div>
                    <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">Take a Mock Exam</h3>
                    <p className="text-sm font-medium text-[#B5BAC1] max-w-md leading-relaxed">
                      Simulate the real exam environment. Questions are AI-generated based on past papers and your current weak points.
                    </p>
                    
                    <div className="pt-4 flex flex-col gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#80848E]">Select Exam Paper</span>
                      <div className="flex flex-wrap gap-2">
                        {paperOptions.map(option => (
                          <button
                            key={option.id}
                            onClick={() => setSelectedPaper(option.id)}
                            className={`px-3 py-1.5 rounded-[4px] text-xs font-bold transition-all border ${
                              selectedPaper === option.id 
                                ? 'bg-[#FEE75C] text-[#313338] border-[#FEE75C]' 
                                : 'bg-[#1E1F22] text-[#B5BAC1] hover:text-[#DBDEE1] hover:bg-[#35373C] border-[#111214]'
                            }`}
                          >
                            {option.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <Link href={`/discord/classes/mock/${classId}?paper=${selectedPaper}`} className="relative z-10 w-full md:w-auto mt-4 md:mt-0">
                    <button className="w-full px-8 py-3 bg-[#FEE75C] text-[#313338] rounded-[4px] font-extrabold text-sm hover:bg-[#E5D053] transition-all shadow-lg uppercase tracking-widest flex items-center justify-center gap-2">
                      <Play size={16} fill="currentColor" /> Start Exam
                    </button>
                  </Link>
                </div>

                {/* Previous Mocks History */}
                <div className="space-y-6">
                  <h3 className="text-xl font-extrabold text-white px-2 flex items-center gap-2">
                    <span className="text-[#80848E] font-light">#</span>previous-results
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { date: 'Yesterday', score: '82%', grade: 'A', focus: 'Motion & Energy', time: '45m' },
                      { date: 'Last Week', score: '65%', grade: 'C', focus: 'Thermal Physics', time: '1h 15m' },
                    ].map((mock, i) => (
                      <div key={i} className="bg-[#2B2D31] rounded-[12px] border border-[#1E1F22] p-6 hover:bg-[#35373C] transition-colors group cursor-pointer relative">
                        <div className="flex justify-between items-start mb-6">
                          <div className="space-y-1">
                            <span className="text-[9px] font-bold uppercase tracking-widest text-[#80848E] bg-[#1E1F22] px-2 py-0.5 rounded-[4px] border border-[#111214]">Mock Exam</span>
                            <h4 className="text-lg font-extrabold text-white italic">{mock.focus.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}</h4>
                          </div>
                          <div className={`w-12 h-12 rounded-[8px] flex items-center justify-center text-xl font-extrabold text-white shadow-lg ${mock.score.startsWith('8') ? 'bg-[#23A559]' : 'bg-[#FEE75C] text-[#313338]'}`}>
                            {mock.grade}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          <div className="bg-[#1E1F22] rounded-[8px] p-3 border border-[#111214]">
                            <p className="text-[9px] font-bold uppercase tracking-widest text-[#80848E]">Score</p>
                            <p className="text-lg font-extrabold text-[#DBDEE1]">{mock.score}</p>
                          </div>
                          <div className="bg-[#1E1F22] rounded-[8px] p-3 border border-[#111214]">
                            <p className="text-[9px] font-bold uppercase tracking-widest text-[#80848E]">Time</p>
                            <p className="text-lg font-extrabold text-[#DBDEE1]">{mock.time}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-[#1E1F22]">
                          <span className="text-xs font-bold text-[#80848E] flex items-center gap-1.5"><Calendar size={14} /> {mock.date}</span>
                          <span className="text-[11px] font-bold text-[#FEE75C] uppercase tracking-widest group-hover:underline flex items-center gap-1">Deep Dive <ChevronRight size={14} /></span>
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