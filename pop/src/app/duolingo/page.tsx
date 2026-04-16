"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { Calendar, MessageCircle, Clock, HeartHandshake, CheckCircle2, ChevronRight, Play, Sparkles } from 'lucide-react';

export default function DuolingoLandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const readinessStats = [
    { subject: 'Math Paper 2', score: '92%', status: 'On track', color: 'text-[#059669]', bg: 'bg-[#E2F7EB]' },
    { subject: 'Physics HL', score: '88%', status: 'Reviewed', color: 'text-[#0284C7]', bg: 'bg-[#DFF2FC]' },
    { subject: 'Chemistry ATP', score: '86%', status: 'Needs recap', color: 'text-[#BE185D]', bg: 'bg-[#FFE5EC]' }
  ];
  
  const focusBlocks = [
    { title: 'Functions', detail: 'IB Math AA', time: '08:30', color: 'bg-[#DFF2FC] text-[#0284C7]' },
    { title: 'Energetics', detail: 'Chemistry HL', time: '11:00', color: 'bg-[#E2F7EB] text-[#059669]' },
    { title: 'Stoichiometry', detail: 'Chemistry SL', time: '14:30', color: 'bg-[#FEF3C7] text-[#D97706]' }
  ];
  
  const clinics = [
    { title: 'IB Physics Clinic', detail: 'Wave superposition drills · 19:00', color: 'bg-[#F3E8FF] text-[#7E22CE]', icon: '▶️' },
    { title: 'Essay review window', detail: 'Upload drafts by Friday', color: 'bg-[#FFE5EC] text-[#BE185D]', icon: '📝' }
  ];
  
  const heroStats = [
    { label: 'Mock readiness avg.', value: '89%', theme: 'bg-[#E2F7EB] border-[#6EE7B7] text-[#065F46]' },
    { label: 'Weekly clinics', value: '12', theme: 'bg-[#DFF2FC] border-[#7DD3FC] text-[#0369A1]' },
    { label: 'Active cohorts', value: '48', theme: 'bg-[#FEF3C7] border-[#FCD34D] text-[#B45309]' }
  ];
  
  const cadenceSteps = [
    {
      title: 'Sunday brief',
      description: 'A quick 4-line overview. No fluff, just the key topics and your mock target for the week.',
      detail: 'Sundays at 6 PM',
      id: '01',
      icon: '📬',
      theme: 'bg-[#A78BFA] border-[#8B5CF6]',
      cardTheme: 'bg-[#F3E8FF] border-[#D8B4FE]',
      rotation: '-rotate-2'
    },
    {
      title: 'Mid-week check',
      description: 'Drop your practice answers in the chat. A mentor replies with specific, actionable feedback.',
      detail: 'Whenever you submit',
      id: '02',
      icon: '💬',
      theme: 'bg-[#F472B6] border-[#EC4899]',
      cardTheme: 'bg-[#FFE5EC] border-[#FBCFE8]',
      rotation: 'rotate-1'
    },
    {
      title: 'Studio hour',
      description: 'A quiet room with a few peers. Work through questions and log your next steps.',
      detail: 'Thursdays at 7 PM',
      id: '03',
      icon: '☕',
      theme: 'bg-[#34D399] border-[#10B981]',
      cardTheme: 'bg-[#E2F7EB] border-[#6EE7B7]',
      rotation: '-rotate-1'
    }
  ];

  const syllabusBadges = [
    { name: 'IGCSE', theme: 'bg-[#E2F7EB] text-[#059669]' },
    { name: 'IB', theme: 'bg-[#DFF2FC] text-[#0284C7]' },
    { name: 'A-Level', theme: 'bg-[#FFE5EC] text-[#BE185D]' },
    { name: 'Mock clinics', theme: 'bg-[#F3E8FF] text-[#7E22CE]' }
  ];

  const classProgress = [
    {
      title: 'Mathematics',
      icon: '📐',
      overall: 75,
      foundation: 100,
      intermediate: 80,
      advanced: 20,
      theme: 'bg-[#DFF2FC] border-[#7DD3FC]',
      textTheme: 'text-[#0284C7]',
      barColor: 'bg-[#0EA5E9]',
      lightBar: 'bg-[#BAE6FD]'
    },
    {
      title: 'Science',
      icon: '🧪',
      overall: 60,
      foundation: 100,
      intermediate: 50,
      advanced: 10,
      theme: 'bg-[#E2F7EB] border-[#6EE7B7]',
      textTheme: 'text-[#059669]',
      barColor: 'bg-[#10B981]',
      lightBar: 'bg-[#A7F3D0]'
    },
    {
      title: 'History',
      icon: '🏛️',
      overall: 90,
      foundation: 100,
      intermediate: 100,
      advanced: 70,
      theme: 'bg-[#FFE5EC] border-[#F9A8D4]',
      textTheme: 'text-[#BE185D]',
      barColor: 'bg-[#E11D48]',
      lightBar: 'bg-[#FBCFE8]'
    }
  ];

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

  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-[#FAF9F6] text-slate-800 font-sans selection:bg-[#34D399] selection:text-white">
      {/* Friendly Custom Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b-2 border-slate-200/80">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#34D399] rounded-[14px] flex items-center justify-center border-b-[3px] border-[#059669] group-active:border-b-0 group-active:translate-y-[3px] transition-all">
              <span className="text-white text-lg font-black tracking-tighter">P</span>
            </div>
            <span className="font-extrabold text-xl tracking-tight text-slate-700">POP Studying</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-base font-bold text-slate-500">
            <Link href="/duolingo/dashboard" className="hover:text-slate-800 transition-colors">Dashboard</Link>
            <Link href="/duolingo/classes" className="hover:text-slate-800 transition-colors">Classes</Link>
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

      {/* 1. Pure Hero Section */}
      <section className="min-h-screen pt-32 pb-8 px-6 lg:px-8 relative overflow-hidden flex flex-col justify-between text-center">
        <div className="absolute top-10 right-20 w-96 h-96 bg-[#E2F7EB] rounded-full blur-3xl -z-10 opacity-50"></div>
        <div className="absolute top-40 left-0 w-72 h-72 bg-[#DFF2FC] rounded-full blur-3xl -z-10 opacity-50"></div>

        <motion.div 
          className="max-w-4xl mx-auto space-y-10 flex-1 flex flex-col justify-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <div className="space-y-6">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border-2 border-slate-100 shadow-sm text-sm font-bold text-slate-600 mx-auto">
              <HeartHandshake className="w-5 h-5 text-[#F472B6]" strokeWidth={2.5} />
              Built for IB + A level mocks
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-[72px] font-black leading-[1.05] text-slate-800 tracking-tighter">
              Calm, deliberate prep <br className="hidden md:block" /> 
              <span className="text-[#34D399]">for every revision block</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
              Guided study cadences, friendly topic packs, and mock submissions in one supportive hub. Keep momentum across busy terms without the stress.
            </motion.p>
          </div>

          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3">
            {syllabusBadges.map((badge) => (
              <span
                key={badge.name}
                className={`px-4 py-2 rounded-2xl font-bold text-sm tracking-wide ${badge.theme} border-2 border-white/50 shadow-sm`}
              >
                {badge.name}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom CTA Content */}
        <motion.div 
          className="mt-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center items-center gap-4">
            <Link
              href="/duolingo/dashboard"
              className="px-8 py-4 bg-[#34D399] text-white rounded-[20px] font-black text-lg border-b-[5px] border-[#059669] hover:bg-[#10B981] active:border-b-0 active:translate-y-[5px] transition-all flex items-center justify-center uppercase tracking-wide shadow-sm"
            >
              View Dashboard
            </Link>
            <Link
              href="/duolingo/classes"
              className="px-8 py-4 bg-white text-slate-700 rounded-[20px] font-black text-lg border-2 border-slate-200 border-b-[5px] active:border-b-2 active:translate-y-[3px] hover:bg-slate-50 transition-all text-center uppercase tracking-wide"
            >
              Browse classes
            </Link>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="text-sm font-bold text-slate-500 pt-6">
            Built by alumni scoring 7s & 45 🎓
          </motion.div>
        </motion.div>
      </section>

      {/* 3. Features Dashboard Focus Section */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-10 items-center lg:items-start">
          
          {/* Left Text Column */}
          <motion.div 
            className="w-full lg:w-[35%] space-y-6 text-center lg:text-left lg:sticky lg:top-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#DFF2FC] border-2 border-[#7DD3FC] shadow-sm text-sm font-bold text-[#0369A1]">
              <span className="text-base">📊</span>
              No more spreadsheets
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-slate-800 tracking-tighter leading-[1.1]">
              Everything you need <br className="hidden md:block" />
              <span className="text-[#0284C7]">in one glance.</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
              Keep an eye on your weekly goals and track exactly how ready you are for exams, without getting lost in multiple apps.
            </motion.p>
          </motion.div>

          {/* Right Cards Stack */}
          <div className="w-full lg:w-[65%] flex flex-col sm:flex-row gap-6 sm:gap-4 items-stretch justify-center">
            
            {/* Left Card - Weekly Focus */}
            <motion.div 
              className="flex-1 w-full rounded-[32px] border-2 border-slate-200 bg-[#FAF9F6] p-6 sm:p-5 md:p-8 shadow-[0_8px_0_0_rgba(226,232,240,1)] hover:-translate-y-2 transition-transform -rotate-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              style={{ marginTop: '2rem' }}
            >
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm font-black uppercase tracking-wider text-slate-400">Weekly focus</span>
                <span className="px-3 py-1 bg-[#E2F7EB] text-[#059669] rounded-xl text-xs font-bold border-2 border-[#6EE7B7]">3 of 4 set</span>
              </div>
              <div className="space-y-4">
                {focusBlocks.map((block) => (
                  <div key={block.title} className="flex items-center justify-between p-4 rounded-2xl bg-white hover:bg-slate-50 border-2 border-transparent hover:border-slate-100 shadow-sm transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-base border-b-[3px] ${block.color} border-black/10`}>
                        {block.title.charAt(0)}
                      </div>
                      <div>
                        <p className="text-base font-black text-slate-800">{block.title}</p>
                        <p className="text-xs font-bold text-slate-500">{block.detail}</p>
                      </div>
                    </div>
                    <span className="hidden xl:inline-block text-xs font-bold text-slate-400 bg-[#FAF9F6] px-2 py-1 rounded-lg border border-slate-200">{block.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Card - Mock Readiness */}
            <motion.div 
              className="flex-1 w-full rounded-[32px] border-2 border-[#BAE6FD] bg-[#DFF2FC] p-6 sm:p-5 md:p-8 shadow-[0_8px_0_0_#BAE6FD] relative overflow-hidden hover:-translate-y-2 transition-transform rotate-1"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.4 }}
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/40 rounded-full blur-xl"></div>
              <div className="flex flex-wrap items-center justify-between mb-8 gap-2 relative z-10">
                <p className="text-sm font-black uppercase tracking-wider text-[#0369A1]">Mock readiness</p>
                <button className="text-xs font-bold text-[#0284C7] bg-white/60 px-3 py-1 rounded-xl uppercase tracking-wider border-2 border-[#7DD3FC] hover:bg-white transition shadow-sm border-b-[3px] active:border-b-2 active:translate-y-[1px]">
                  Updated Fri
                </button>
              </div>
              
              <div className="space-y-4 relative z-10 bg-white/40 p-5 rounded-3xl border-2 border-white/60">
                {readinessStats.map((stat) => (
                  <div key={stat.subject} className="flex items-center justify-between border-b-2 border-white/60 pb-3 last:border-0 last:pb-0">
                    <div>
                      <p className="text-sm font-black text-[#0369A1]">{stat.subject}</p>
                      <p className="text-2xl font-black text-[#0284C7] mt-0.5">{stat.score}</p>
                    </div>
                    <span className="text-xs font-bold text-[#0284C7] bg-white px-3 py-1 rounded-xl border-2 border-[#7DD3FC] shadow-sm border-b-[3px]">{stat.status}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-5 space-y-3 relative z-10">
                {clinics.map((clinic) => (
                  <div key={clinic.title} className="flex items-center gap-3 bg-white/40 p-2.5 rounded-2xl border-2 border-white/60">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-xl ${clinic.color} border-2 border-white/50 shadow-sm border-b-[3px]`}>
                      {clinic.icon}
                    </div>
                    <div>
                      <span className="block text-sm font-black text-[#0369A1]">{clinic.title}</span>
                      <span className="block text-xs font-bold text-[#0284C7]">{clinic.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Stats Banner Section */}
      <section className="py-24 px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {heroStats.map((stat) => (
              <motion.div variants={fadeInUp} key={stat.label} className={`rounded-[24px] border-2 border-b-[4px] p-6 ${stat.theme} shadow-sm text-center transform hover:-translate-y-1 transition-transform bg-white/50 backdrop-blur-sm`}>
                <div className="text-sm font-black uppercase tracking-wider opacity-70 mb-2">{stat.label}</div>
                <div className="text-4xl font-black">{stat.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Weekly Cadence Section (Spread out) */}
      <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-10 items-center lg:items-start">
          
          {/* Left Text Column */}
          <motion.div 
            className="w-full lg:w-[35%] space-y-6 text-center lg:text-left lg:sticky lg:top-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#FEF3C7] border-2 border-[#FCD34D] shadow-sm text-sm font-bold text-[#B45309]">
              <span className="text-base">🗓️</span>
              Realistic routine
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-slate-800 leading-[1.1] tracking-tighter">
              A study plan you<br />
              <span className="text-[#34D399]">might actually stick to.</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-600 font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
              We ditched the overwhelming 100-point checklists. Just three friendly check-ins a week to keep you moving forward without the guilt trips.
            </motion.p>
          </motion.div>

          {/* Right Cards Grid */}
          <div className="w-full lg:w-[65%] flex flex-col sm:flex-row gap-6 sm:gap-4 items-stretch justify-center">
            {cadenceSteps.map((step, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15, type: "spring", bounce: 0.4 }}
                key={step.id}
                className={`flex-1 flex flex-col border-2 ${step.cardTheme} rounded-[32px] p-6 sm:p-5 md:p-8 shadow-sm hover:-translate-y-2 transition-transform group text-left relative ${step.rotation}`}
                style={{ marginTop: idx === 1 ? '2rem' : idx === 2 ? '4rem' : '0' }}
              >
                <div className={`w-14 h-14 rounded-2xl ${step.theme} flex items-center justify-center shadow-sm border-b-[4px] border-black/10 group-hover:scale-110 transition-transform mb-6 text-2xl`}>
                  {step.icon}
                </div>
                <div className="space-y-3 mb-8">
                  <p className="text-xl font-black text-slate-800 tracking-tight">{step.title}</p>
                  <p className="text-sm font-medium text-slate-600 leading-relaxed">{step.description}</p>
                </div>
                <div className="mt-auto">
                  <span className="inline-block text-xs font-bold text-slate-500 bg-white/60 px-3 py-1.5 rounded-lg border border-slate-200">
                    {step.detail}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Dashboard / Class Progress */}
      <section className="py-24 px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16 text-center"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border-2 border-slate-100 shadow-sm text-sm font-bold text-slate-600 mb-6">
              <Sparkles className="w-5 h-5 text-[#8B5CF6]" strokeWidth={2.5} />
              Learning Dashboard
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-black text-slate-800 leading-[1.1] tracking-tighter">
              Track your journey <br />
              <span className="text-[#8B5CF6]">across every difficulty.</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {classProgress.map((cls, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15, type: "spring", bounce: 0.5 }}
                className={`bg-white p-8 rounded-[32px] border-2 border-slate-200 shadow-[0_8px_0_0_rgba(226,232,240,1)] hover:-translate-y-2 transition-transform duration-300 relative group overflow-hidden`}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-2xl ${cls.theme} flex items-center justify-center text-3xl shadow-sm border-b-[4px]`}>
                    {cls.icon}
                  </div>
                  <div>
                    <h3 className={`text-2xl font-black ${cls.textTheme}`}>{cls.title}</h3>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Overall {cls.overall}%</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between text-sm font-bold mb-2">
                      <span className="text-slate-600">Foundation</span>
                      <span className={cls.textTheme}>{cls.foundation}%</span>
                    </div>
                    <div className={`w-full h-3 rounded-full ${cls.lightBar} overflow-hidden`}>
                      <div className={`h-full rounded-full ${cls.barColor}`} style={{ width: `${cls.foundation}%` }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm font-bold mb-2">
                      <span className="text-slate-600">Intermediate</span>
                      <span className={cls.textTheme}>{cls.intermediate}%</span>
                    </div>
                    <div className={`w-full h-3 rounded-full ${cls.lightBar} overflow-hidden`}>
                      <div className={`h-full rounded-full ${cls.barColor}`} style={{ width: `${cls.intermediate}%` }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm font-bold mb-2">
                      <span className="text-slate-600">Advanced</span>
                      <span className={cls.textTheme}>{cls.advanced}%</span>
                    </div>
                    <div className={`w-full h-3 rounded-full ${cls.lightBar} overflow-hidden`}>
                      <div className={`h-full rounded-full ${cls.barColor}`} style={{ width: `${cls.advanced}%` }}></div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t-2 border-slate-100 text-center">
                  <Link href={`/learn/${cls.title.toLowerCase()}`} className={`inline-flex items-center gap-2 font-black ${cls.textTheme} hover:opacity-80 transition-opacity`}>
                    Continue Learning <ChevronRight className="w-5 h-5" strokeWidth={3} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
            className="bg-[#34D399] rounded-[40px] border-2 border-[#10B981] shadow-[0_12px_0_0_#10B981] p-12 md:p-20 text-center relative overflow-hidden"
          >
            {/* Background elements */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#059669]/20 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 shadow-sm border-2 border-white/30 backdrop-blur-sm">
                <HeartHandshake className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter mb-6">
                Ready to join the community?
              </h2>
              <p className="text-lg md:text-xl text-white/90 font-bold mb-10 leading-relaxed">
                Stop drowning in generic revision guides. Join thousands of students getting the notes, mocks, and clinics built for their curriculum.
              </p>
              <Link href="/sign-up" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-[#059669] rounded-[24px] font-black text-xl hover:bg-slate-50 transition-all border-b-[6px] border-[#A7F3D0] active:border-b-0 active:translate-y-[6px] uppercase tracking-wide shadow-sm">
                Join the Cohort
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-200 rounded-[10px] flex items-center justify-center border-b-2 border-slate-300">
              <span className="text-slate-600 text-sm font-black">P</span>
            </div>
            <span className="font-extrabold text-slate-400 text-lg tracking-tight">POP Studying</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm font-bold text-slate-400">
            <Link href="#" className="hover:text-slate-600 transition-colors uppercase tracking-wider">About</Link>
            <Link href="#" className="hover:text-slate-600 transition-colors uppercase tracking-wider">Privacy</Link>
            <Link href="#" className="hover:text-slate-600 transition-colors uppercase tracking-wider">Terms</Link>
            <Link href="#" className="hover:text-slate-600 transition-colors uppercase tracking-wider">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}