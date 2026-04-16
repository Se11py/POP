"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Calculator, FlaskConical, Globe, Award, Flame, Zap, CheckCircle2, ChevronDown, Activity, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MOCK_DATA = {
  user: {
    name: "Alex Student",
    streak: 14,
    totalXp: 4520,
    rank: "Diamond",
  },
  subjects: [
    {
      id: "math",
      title: "Mathematics",
      icon: <Calculator className="w-6 h-6 text-blue-500" />,
      color: "bg-blue-500",
      lightColor: "bg-blue-100",
      progress: 68,
      topics: [
        { name: "Algebra Basics", progress: 85, mastered: true },
        { name: "Geometry", progress: 45, mastered: false },
        { name: "Fractions", progress: 75, mastered: false }
      ]
    },
    {
      id: "science",
      title: "Science",
      icon: <FlaskConical className="w-6 h-6 text-green-500" />,
      color: "bg-green-500",
      lightColor: "bg-green-100",
      progress: 42,
      topics: [
        { name: "Physics: Forces", progress: 60, mastered: false },
        { name: "Chemistry: Bonding", progress: 30, mastered: false },
        { name: "Biology: Cells", progress: 35, mastered: false }
      ]
    },
    {
      id: "humanities",
      title: "Humanities",
      icon: <Globe className="w-6 h-6 text-purple-500" />,
      color: "bg-purple-500",
      lightColor: "bg-purple-100",
      progress: 88,
      topics: [
        { name: "History: Cold War", progress: 95, mastered: true },
        { name: "Geography: Climate", progress: 80, mastered: true }
      ]
    }
  ],
  recentActivity: [
    { id: 1, title: "Completed Algebra Quiz", time: "2 hours ago", xp: "+50" },
    { id: 2, title: "Studied Physics Flashcards", time: "Yesterday", xp: "+20" },
    { id: 3, title: "Mastered Cold War Topic", time: "2 days ago", xp: "+100" }
  ]
};

export default function DuolingoDashboard() {
  const [expandedSubject, setExpandedSubject] = useState<string | null>("math");

  const toggleSubject = (id: string) => {
    setExpandedSubject(expandedSubject === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-800 font-sans selection:bg-[#34D399] selection:text-white pb-20">
      
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
            <Link href="/duolingo/dashboard" className="text-slate-800 transition-colors border-b-2 border-slate-800 pb-1">Dashboard</Link>
            <Link href="/duolingo/classes" className="hover:text-slate-800 transition-colors">Classes</Link>
            <Link href="/duolingo/flashcards" className="hover:text-slate-800 transition-colors">Flashcards</Link>
            <Link href="/duolingo/jamboard" className="hover:text-slate-800 transition-colors">Jamboard</Link>
          </div>

          <div className="flex items-center gap-4 font-bold text-slate-600">
            <div className="flex items-center gap-1.5 text-orange-500 bg-orange-50 px-3 py-1.5 rounded-xl border-2 border-orange-200">
              <Flame size={18} fill="currentColor" />
              <span>{MOCK_DATA.user.streak}</span>
            </div>
            <div className="flex items-center gap-1.5 text-blue-500 bg-blue-50 px-3 py-1.5 rounded-xl border-2 border-blue-200">
              <Zap size={18} fill="currentColor" />
              <span>{MOCK_DATA.user.totalXp}</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Progress & Subjects */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* Welcome Header */}
          <div className="bg-white rounded-3xl p-8 border-2 border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-black tracking-tight text-slate-800 mb-2">Welcome back, {MOCK_DATA.user.name.split(' ')[0]}! 👋</h1>
              <p className="text-slate-500 font-medium text-lg">You're on a {MOCK_DATA.user.streak}-day streak. Keep it up!</p>
            </div>
            <div className="hidden sm:flex h-20 w-20 bg-[#E2F7EB] rounded-full items-center justify-center border-4 border-green-100">
              <GraduationCap className="w-10 h-10 text-green-500" />
            </div>
          </div>

          {/* Growth Chart */}
          <div className="bg-white rounded-3xl p-8 border-2 border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-slate-700">Weekly Growth</h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#34D399]" />
                  <span className="text-sm font-bold text-slate-500">Focus Hours</span>
                </div>
                <select className="bg-slate-50 border-2 border-slate-100 rounded-xl px-3 py-1.5 font-bold text-slate-600 text-sm outline-none cursor-pointer">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                </select>
              </div>
            </div>
            
            <div className="h-64 w-full relative">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 700 200">
                {/* Grid Lines */}
                <line x1="0" y1="0" x2="700" y2="0" stroke="#F1F5F9" strokeWidth="2" />
                <line x1="0" y1="50" x2="700" y2="50" stroke="#F1F5F9" strokeWidth="2" />
                <line x1="0" y1="100" x2="700" y2="100" stroke="#F1F5F9" strokeWidth="2" />
                <line x1="0" y1="150" x2="700" y2="150" stroke="#F1F5F9" strokeWidth="2" />
                <line x1="0" y1="200" x2="700" y2="200" stroke="#E2E8F0" strokeWidth="2" />
                
                {/* Area under the line */}
                <path 
                  d="M 0 150 L 100 120 L 200 160 L 300 80 L 400 100 L 500 40 L 600 60 L 700 50 L 700 200 L 0 200 Z" 
                  fill="url(#gradient)" 
                  fillOpacity="0.1" 
                />
                
                {/* The growth line */}
                <path 
                  d="M 0 150 L 100 120 L 200 160 L 300 80 L 400 100 L 500 40 L 600 60 L 700 50" 
                  fill="none" 
                  stroke="#34D399" 
                  strokeWidth="6" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
                
                {/* Points on the line */}
                {[
                  {x: 0, y: 150}, {x: 100, y: 120}, {x: 200, y: 160}, 
                  {x: 300, y: 80}, {x: 400, y: 100}, {x: 500, y: 40}, 
                  {x: 600, y: 60}, {x: 700, y: 50}
                ].map((p, i) => (
                  <circle 
                    key={i} 
                    cx={p.x} 
                    cy={p.y} 
                    r="8" 
                    fill="#34D399" 
                    stroke="#FFF" 
                    strokeWidth="3" 
                  />
                ))}

                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#34D399" />
                    <stop offset="100%" stopColor="#FFF" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Labels */}
              <div className="flex justify-between mt-6 text-sm font-bold text-slate-400">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </div>

          {/* Subjects Accordion */}
          <div className="space-y-4">
            <h2 className="text-2xl font-black text-slate-700 ml-2">My Subjects</h2>
            
            {MOCK_DATA.subjects.map((subject) => (
              <div key={subject.id} className="bg-white rounded-3xl border-2 border-slate-200 overflow-hidden shadow-sm hover:border-slate-300 transition-colors">
                {/* Subject Header */}
                <div 
                  onClick={() => toggleSubject(subject.id)}
                  className="p-6 cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className={`w-14 h-14 ${subject.lightColor} rounded-2xl flex items-center justify-center border-b-4 ${subject.color.replace('bg-', 'border-')} border-opacity-20`}>
                      {subject.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">{subject.title}</h3>
                      <div className="flex items-center gap-3 mt-1.5 w-48 sm:w-64">
                        <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${subject.color} rounded-full`} 
                            style={{ width: `${subject.progress}%` }} 
                          />
                        </div>
                        <span className="text-sm font-bold text-slate-400">{subject.progress}%</span>
                      </div>
                    </div>
                  </div>
                  <div className={`p-2 rounded-full bg-slate-50 text-slate-400 transition-transform ${expandedSubject === subject.id ? 'rotate-180' : ''}`}>
                    <ChevronDown size={24} />
                  </div>
                </div>

                {/* Topics Dropdown */}
                <AnimatePresence>
                  {expandedSubject === subject.id && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t-2 border-slate-100 bg-slate-50/50"
                    >
                      <div className="p-6 space-y-4">
                        {subject.topics.map((topic, idx) => (
                          <div key={idx} className="flex items-center justify-between p-4 bg-white rounded-2xl border-2 border-slate-100 hover:shadow-sm transition-all group">
                            <div className="flex items-center gap-3">
                              {topic.mastered ? (
                                <CheckCircle2 className="text-green-500 w-6 h-6" />
                              ) : (
                                <div className="w-6 h-6 rounded-full border-2 border-slate-300 group-hover:border-slate-400" />
                              )}
                              <span className={`font-bold ${topic.mastered ? 'text-slate-800' : 'text-slate-600'}`}>
                                {topic.name}
                              </span>
                            </div>
                            
                            <div className="flex items-center gap-4">
                              <div className="hidden sm:block h-2 w-24 bg-slate-100 rounded-full overflow-hidden">
                                <div 
                                  className={`h-full ${topic.mastered ? 'bg-green-500' : 'bg-yellow-400'} rounded-full`} 
                                  style={{ width: `${topic.progress}%` }} 
                                />
                              </div>
                              <button className="px-4 py-2 bg-white text-slate-600 font-bold border-2 border-slate-200 border-b-[4px] rounded-xl hover:bg-slate-50 active:border-b-2 active:translate-y-[2px] transition-all text-sm">
                                {topic.mastered ? 'Review' : 'Continue'}
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Sidebar Stats */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Quick Stats Card */}
          <div className="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-sm">
            <h3 className="text-xl font-black text-slate-700 mb-6 flex items-center gap-2">
              <Activity className="text-blue-500" /> Stats
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl border-2 border-orange-100 bg-orange-50 flex flex-col items-center text-center">
                <Flame className="w-8 h-8 text-orange-500 mb-2" fill="currentColor" />
                <span className="text-2xl font-black text-slate-800">{MOCK_DATA.user.streak}</span>
                <span className="text-sm font-bold text-slate-500">Day Streak</span>
              </div>
              
              <div className="p-4 rounded-2xl border-2 border-blue-100 bg-blue-50 flex flex-col items-center text-center">
                <Zap className="w-8 h-8 text-blue-500 mb-2" fill="currentColor" />
                <span className="text-2xl font-black text-slate-800">{MOCK_DATA.user.totalXp}</span>
                <span className="text-sm font-bold text-slate-500">Total XP</span>
              </div>

              <div className="col-span-2 p-4 rounded-2xl border-2 border-purple-100 bg-purple-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-purple-500" />
                  <div className="text-left">
                    <div className="text-sm font-bold text-slate-500">Current League</div>
                    <div className="text-lg font-black text-slate-800">{MOCK_DATA.user.rank}</div>
                  </div>
                </div>
                <div className="text-purple-500 font-bold hover:underline cursor-pointer text-sm">View Leaderboard</div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-3xl p-6 border-2 border-slate-200 shadow-sm">
            <h3 className="text-xl font-black text-slate-700 mb-6 flex items-center gap-2">
              <BookOpen className="text-green-500" /> Recent Activity
            </h3>
            
            <div className="space-y-4">
              {MOCK_DATA.recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2 rounded-full bg-slate-300 shrink-0" />
                  <div>
                    <div className="font-bold text-slate-700">{activity.title}</div>
                    <div className="flex items-center gap-2 text-sm mt-1">
                      <span className="text-slate-400">{activity.time}</span>
                      <span className="text-blue-500 font-bold bg-blue-50 px-2 py-0.5 rounded-md">{activity.xp}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 py-3 font-bold text-slate-500 hover:text-slate-700 hover:bg-slate-50 rounded-xl transition-colors">
              View All History
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}
