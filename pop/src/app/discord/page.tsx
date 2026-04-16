"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { Calendar, MessageCircle, Clock, CheckCircle2, ChevronRight, Play, BookOpen, Video, FileText, ArrowRight, Sparkles, Command, Shield, Zap, Moon, Coffee, Calculator, FlaskConical, Globe, Hash, Check } from 'lucide-react';

export default function DiscordLandingPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const readinessStats = [
    { subject: 'Math Paper 2', score: '92%', status: 'On track', color: 'text-[#23A559]', bg: 'bg-[#23A559]/20' },
    { subject: 'Physics HL', score: '88%', status: 'Reviewed', color: 'text-[#5865F2]', bg: 'bg-[#5865F2]/20' },
    { subject: 'Chemistry ATP', score: '86%', status: 'Needs recap', color: 'text-[#FEE75C]', bg: 'bg-[#FEE75C]/20' }
  ];
  
  const focusBlocks = [
    { title: 'Functions', detail: 'IB Math AA', time: '08:30', icon: <Command className="w-4 h-4 text-[#5865F2]" /> },
    { title: 'Energetics', detail: 'Chemistry HL', time: '11:00', icon: <Zap className="w-4 h-4 text-[#EB459E]" /> },
    { title: 'Stoichiometry', detail: 'Chemistry SL', time: '14:30', icon: <Shield className="w-4 h-4 text-[#23A559]" /> }
  ];
  
  const clinics = [
    { title: 'IB Physics Clinic', detail: 'Wave superposition drills · 19:00' },
    { title: 'Essay review window', detail: 'Upload drafts by Friday' }
  ];
  
  const heroStats = [
    { label: 'Mock readiness avg.', value: '89%' },
    { label: 'Weekly clinics', value: '12' },
    { label: 'Active cohorts', value: '48' }
  ];
  
  const cadenceSteps = [
    {
      title: 'Sunday brief',
      description: 'You receive a 4-line overview: key topics, mock target, and one reflective question.',
      detail: 'Sent 18:00 local time',
      id: '01',
      icon: '📅',
      theme: 'bg-[#2B2D31]'
    },
    {
      title: 'Mid-week check',
      description: 'Mentor replies to your submission with annotated feedback and a 48-hour action note.',
      detail: 'Delivered in-app',
      id: '02',
      icon: '💬',
      theme: 'bg-[#2B2D31]'
    },
    {
      title: 'Studio hour',
      description: 'Join a low-light focus room with 12 peers, swap questions, then log next plans.',
      detail: 'Thursday 19:00',
      id: '03',
      icon: '🕒',
      theme: 'bg-[#2B2D31]'
    }
  ];

  const syllabusBadges = [
    'IGCSE', 'IB', 'A-Level', 'Mock clinics'
  ];

  const faqs = [
    {
      q: "Is this actually free? What's the catch?",
      a: "No catch. We're a student-led non-profit funded by alumni donations. We believe high-quality revision materials shouldn't be paywalled."
    },
    {
      q: "Do you cover my specific exam board?",
      a: "Most likely. We focus heavily on IB, Cambridge (CIE), and Edexcel for both IGCSE and A-Levels. If you don't see your board, drop us a request in the server."
    },
    {
      q: "Who writes these notes?",
      a: "Students who got the grades. Every resource is created by alumni who scored 7s (IB) or A*s, then verified by our subject leads."
    }
  ];

  const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'History', 'English Lit', 'Economics'];

  const classProgress = [
    {
      title: 'Mathematics',
      icon: '📐',
      overall: 75,
      foundation: 100,
      intermediate: 80,
      advanced: 20,
      theme: 'bg-[#5865F2]/10 border-[#5865F2]/20',
      textTheme: 'text-[#5865F2]',
      barColor: 'bg-[#5865F2]',
      lightBar: 'bg-[#1E1F22]'
    },
    {
      title: 'Sciences',
      icon: '🧪',
      overall: 60,
      foundation: 100,
      intermediate: 50,
      advanced: 10,
      theme: 'bg-[#EB459E]/10 border-[#EB459E]/20',
      textTheme: 'text-[#EB459E]',
      barColor: 'bg-[#EB459E]',
      lightBar: 'bg-[#1E1F22]'
    },
    {
      title: 'Humanities',
      icon: '🏛️',
      overall: 90,
      foundation: 100,
      intermediate: 100,
      advanced: 70,
      theme: 'bg-[#23A559]/10 border-[#23A559]/20',
      textTheme: 'text-[#23A559]',
      barColor: 'bg-[#23A559]',
      lightBar: 'bg-[#1E1F22]'
    }
  ];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
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
    <div className="min-h-screen bg-[#313338] text-[#F2F3F5] font-sans selection:bg-[#5865F2]/40 selection:text-white">
      
      {/* Discord-style Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-[#1E1F22] border-b border-[#111214] shadow-md">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-xl bg-[#5865F2] flex items-center justify-center transition-transform group-hover:rotate-12 group-hover:scale-105">
              <span className="text-white text-sm font-bold tracking-tighter">P</span>
            </div>
            <span className="font-bold text-base tracking-wide text-white">POP Studying</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#B5BAC1]">
            <Link href="/discord/classes" className="hover:text-[#F2F3F5] transition-colors">Classes</Link>
            <Link href="/discord/flashcards" className="hover:text-[#F2F3F5] transition-colors">Flashcards</Link>
            <Link href="/discord/dictionary" className="hover:text-[#F2F3F5] transition-colors">Dictionary</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/sign-in" className="hidden md:block text-[#B5BAC1] hover:text-[#F2F3F5] transition-colors text-sm font-semibold">
              Login
            </Link>
            <Link href="/sign-up" className="px-4 py-2 bg-[#5865F2] text-white font-semibold rounded-[20px] hover:bg-[#4752C4] transition-colors text-sm flex items-center gap-2">
              Join Server
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-32">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Hero Content */}
            <motion.div 
              className="md:col-span-7 space-y-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <div className="space-y-6">
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[16px] bg-[#2B2D31] border border-[#1E1F22] text-xs font-bold text-[#B5BAC1]">
                  <Moon className="w-4 h-4 text-[#FEE75C]" />
                  <span>Late night revision, optimized.</span>
                </motion.div>
                
                <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-extrabold leading-[1.15] tracking-tight text-white">
                  Focus mode <span className="text-[#5865F2]">engaged.</span> <br className="hidden md:block" /> 
                  Calm, deliberate prep.
                </motion.h1>
                
                <motion.p variants={fadeInUp} className="text-lg text-[#B5BAC1] font-medium leading-relaxed max-w-xl">
                  Guided study cadences, deep-focus topic packs, and mock submissions in a distraction-free, dark-mode-first environment.
                </motion.p>
              </div>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-2">
                {syllabusBadges.map((badge) => (
                  <span key={badge} className="px-3 py-1 rounded-[16px] text-xs font-bold text-[#F2F3F5] bg-[#2B2D31]">
                    {badge}
                  </span>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/sign-up"
                  className="px-8 py-3.5 bg-[#5865F2] text-white rounded-[24px] font-bold text-base hover:bg-[#4752C4] hover:shadow-lg hover:shadow-[#5865F2]/20 transition-all flex items-center justify-center gap-2"
                >
                  Start Studying <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/classes"
                  className="px-8 py-3.5 bg-[#2B2D31] text-[#F2F3F5] rounded-[24px] font-bold text-base hover:bg-[#1E1F22] transition-all text-center flex items-center gap-2"
                >
                  <Coffee className="w-5 h-5" /> Explore Rooms
                </Link>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="pt-8 flex items-center gap-10 text-sm">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1">
                    <span className="text-3xl font-extrabold text-white tracking-tight">{stat.value}</span>
                    <span className="text-[#B5BAC1] text-xs font-bold uppercase tracking-wide">{stat.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Discord UI Cards */}
            <motion.div 
              className="md:col-span-5 relative hidden md:flex flex-col gap-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {/* User Panel Mockup */}
              <div className="rounded-[16px] bg-[#2B2D31] shadow-xl overflow-hidden border border-[#1E1F22]">
                <div className="bg-[#1E1F22] p-4 flex items-center justify-between border-b border-[#111214]">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center">
                        <span className="text-white font-bold text-lg">👩‍🎓</span>
                      </div>
                      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#23A559] border-[2px] border-[#1E1F22] rounded-full"></div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white leading-tight">Sarah M.</div>
                      <div className="text-xs text-[#B5BAC1] font-medium leading-tight">Studying Physics HL</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-[8px] bg-[#23A559]/20 text-[#23A559] text-[10px] font-bold uppercase">Online</span>
                </div>
                <div className="p-4">
                  <p className="text-[#DBDEE1] text-sm leading-relaxed mb-4">
                    &quot;The mid-week checks actually kept me accountable. The notes aren&apos;t just textbooks rewritten, they actually tell you where the marks are.&quot;
                  </p>
                  <div className="bg-[#1E1F22] rounded-[8px] p-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#23A559]/10 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-[#23A559]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Biology HL Pack</div>
                      <div className="text-[10px] text-[#B5BAC1]">Completed 2 hours ago</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Server Channels Mockup */}
              <div className="rounded-[16px] bg-[#2B2D31] shadow-xl overflow-hidden border border-[#1E1F22]">
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs font-bold text-[#B5BAC1] uppercase tracking-wide">Weekly Focus</p>
                    <button className="text-xs text-[#5865F2] hover:text-[#4752C4] font-semibold transition">
                      View all
                    </button>
                  </div>
                  
                  <div className="space-y-1">
                    {focusBlocks.map((block, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 rounded-[8px] hover:bg-[#35373C] transition-colors cursor-pointer group">
                        <div className="flex items-center gap-3">
                          <span className="text-[#80848E] group-hover:text-[#DBDEE1]">#</span>
                          <span className="text-sm font-semibold text-[#DBDEE1] group-hover:text-white transition-colors">{block.title}</span>
                        </div>
                        <span className="text-xs font-semibold text-[#80848E] bg-[#1E1F22] px-2 py-1 rounded-[8px]">{block.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Subjects / Tags - Server Roles style */}
        <section className="py-20 border-t border-[#1E1F22]">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white mb-3">Roles & Subjects</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {subjects.map((subject, idx) => {
              const colors = ['bg-[#E44949]', 'bg-[#23A559]', 'bg-[#FEE75C]', 'bg-[#5865F2]', 'bg-[#EB459E]', 'bg-[#00D166]', 'bg-[#F47FFF]', 'bg-[#9A86FD]'];
              const dotColor = colors[idx % colors.length];
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.03 }}
                  className="px-2.5 py-1 rounded-[4px] bg-[#2B2D31] border border-[#1E1F22] cursor-pointer transition-colors hover:bg-[#35373C] flex items-center gap-1.5 shadow-sm"
                >
                  <div className={`w-3 h-3 rounded-full ${dotColor}`}></div>
                  <span className="text-xs font-medium text-[#DBDEE1]">{subject}</span>
                </motion.div>
              )
            })}
          </div>
        </section>

        {/* Cadence Section */}
        <section id="method" className="py-24 border-t border-[#1E1F22]">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-extrabold text-white tracking-tight mb-4"
            >
              Your week, finally making sense.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-base text-[#B5BAC1] font-medium max-w-2xl mx-auto"
            >
              Three quiet touchpoints repeat every seven days. Simple by design so you stay focused on the work instead of managing a complex dashboard.
            </motion.p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-[#313338] border border-[#1E1F22] rounded-[16px] shadow-2xl overflow-hidden">
              {/* Channel Header Mock */}
              <div className="bg-[#2B2D31] px-4 py-3 border-b border-[#1E1F22] flex items-center gap-3">
                <span className="text-[#80848E] text-2xl font-light leading-none mb-0.5">#</span>
                <span className="text-white font-bold text-[15px]">weekly-cadence</span>
                <div className="w-[1px] h-4 bg-[#4E5058] mx-2"></div>
                <span className="text-sm font-medium text-[#B5BAC1] hidden sm:block">How the system works every week</span>
              </div>
              
              {/* Chat Messages */}
              <div className="p-4 sm:p-6 pb-8 space-y-2">
                {/* Welcome Message Mock */}
                <div className="flex items-start gap-4 mb-10 pb-6 border-b border-[#1E1F22]">
                  <div className="w-[68px] h-[68px] rounded-full bg-[#4E5058] flex items-center justify-center shrink-0 shadow-sm mt-1">
                    <Hash className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col justify-center min-h-[68px] mt-1">
                    <h3 className="text-[32px] font-extrabold text-white mb-1 tracking-tight leading-tight">Welcome to #weekly-cadence!</h3>
                    <p className="text-[#B5BAC1] text-[16px] font-medium">This is the start of your structured revision cycle.</p>
                  </div>
                </div>

                {cadenceSteps.map((step, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="flex items-start gap-4 py-3 hover:bg-[#2B2D31] px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-[8px] transition-colors group cursor-pointer"
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xl shadow-sm ${step.theme}`}>
                      {step.icon}
                    </div>
                    <div className="flex-1 min-w-0 pt-0.5">
                      <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                        <span className="text-[16px] font-medium text-[#F2F3F5] hover:underline cursor-pointer">{step.title}</span>
                        <span className="bg-[#5865F2] text-white text-[10px] px-[4px] py-[2px] rounded-[3px] font-bold uppercase leading-none flex items-center gap-0.5 relative top-[-1px]">
                          <Check className="w-3 h-3" strokeWidth={3} /> SYSTEM
                        </span>
                        <span className="text-xs font-medium text-[#80848E] ml-1">{step.detail}</span>
                      </div>
                      <p className="text-[15px] text-[#DBDEE1] leading-relaxed font-medium">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section - App Dashboard Layout */}
        <section id="resources" className="py-24 border-t border-[#1E1F22]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-extrabold tracking-tight text-white mb-4">The Resource Library</motion.h2>
            <motion.p variants={fadeInUp} className="text-base text-[#B5BAC1] font-medium max-w-2xl">
              Everything you need, beautifully organized. Navigate through study materials, live sessions, and practice papers.
            </motion.p>
          </motion.div>

          <div className="bg-[#1E1F22] border border-[#35373C] rounded-[24px] shadow-2xl overflow-hidden flex flex-col md:flex-row h-auto md:h-[550px]">
            {/* Sidebar Navigation */}
            <div className="w-full md:w-72 bg-[#18191B] border-r border-[#35373C] flex flex-col shrink-0 p-4">
              <div className="mb-6 px-2 mt-2">
                <span className="font-extrabold text-white text-lg">Study Hub</span>
                <p className="text-xs text-[#80848E] mt-1">Select a resource type</p>
              </div>
              
              <div className="flex-1 overflow-y-auto space-y-2 custom-scrollbar">
                <div className="flex items-center justify-between px-3 py-3 rounded-xl bg-[#5865F2] text-white shadow-md cursor-pointer transition-all">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5" />
                    <span className="font-bold text-sm">Study Notes</span>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>
                
                <div className="flex items-center justify-between px-3 py-3 rounded-xl hover:bg-[#2B2D31] text-[#B5BAC1] hover:text-[#F2F3F5] cursor-pointer transition-all">
                  <div className="flex items-center gap-3">
                    <Video className="w-5 h-5" />
                    <span className="font-semibold text-sm">Live Classes</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between px-3 py-3 rounded-xl hover:bg-[#2B2D31] text-[#B5BAC1] hover:text-[#F2F3F5] cursor-pointer transition-all">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5" />
                    <span className="font-semibold text-sm">Mock Papers</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-[#232428] flex flex-col relative">
              {/* Header */}
              <div className="px-8 py-6 border-b border-[#35373C] flex items-center justify-between bg-[#1E1F22]">
                <div>
                  <h3 className="text-xl font-extrabold text-white flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#5865F2]" />
                    Study Notes
                  </h3>
                  <p className="text-sm font-medium text-[#80848E] mt-1">Zero-fluff notes shaped by actual scorers.</p>
                </div>
                <div className="hidden md:flex gap-2">
                  <button className="px-4 py-2 rounded-lg bg-[#2B2D31] text-xs font-bold text-white hover:bg-[#35373C] transition-colors">Filter</button>
                  <button className="px-4 py-2 rounded-lg bg-[#5865F2] text-xs font-bold text-white hover:bg-[#4752C4] transition-colors">Search</button>
                </div>
              </div>

              {/* Content Grid */}
              <div className="flex-1 p-8 overflow-y-auto">
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Note Pack 1 */}
                  <div className="bg-[#1E1F22] p-5 rounded-2xl border border-[#35373C] hover:border-[#5865F2] hover:shadow-lg hover:shadow-[#5865F2]/10 transition-all cursor-pointer group flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#23A559]/20 flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-[#23A559]" />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 bg-[#2B2D31] text-[#DBDEE1] rounded-md">PDF Document</span>
                    </div>
                    <h4 className="font-extrabold text-[#F2F3F5] text-lg mb-2">Biology HL Pack</h4>
                    <p className="text-sm text-[#80848E] mb-6 flex-1">Complete notes on Cell Biology, Molecular Biology, and Genetics with IA tips.</p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#35373C]">
                      <div className="flex items-center gap-1.5 text-xs text-[#23A559] font-bold">
                        <CheckCircle2 className="w-4 h-4" /> Verified Resource
                      </div>
                      <span className="text-xs font-semibold text-[#80848E]">42 Pages</span>
                    </div>
                  </div>

                  {/* Note Pack 2 */}
                  <div className="bg-[#1E1F22] p-5 rounded-2xl border border-[#35373C] hover:border-[#5865F2] hover:shadow-lg hover:shadow-[#5865F2]/10 transition-all cursor-pointer group flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#5865F2]/20 flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-[#5865F2]" />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 bg-[#2B2D31] text-[#DBDEE1] rounded-md">PDF Document</span>
                    </div>
                    <h4 className="font-extrabold text-[#F2F3F5] text-lg mb-2">Physics SL Mechanics</h4>
                    <p className="text-sm text-[#80848E] mb-6 flex-1">Kinematics, forces, and momentum formulas with step-by-step paper 2 examples.</p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#35373C]">
                      <div className="flex items-center gap-1.5 text-xs text-[#23A559] font-bold">
                        <CheckCircle2 className="w-4 h-4" /> Verified Resource
                      </div>
                      <span className="text-xs font-semibold text-[#80848E]">28 Pages</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Dashboard / Class Progress */}
        <section className="py-24 border-t border-[#1E1F22]">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mb-16 text-center"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[16px] bg-[#2B2D31] border border-[#1E1F22] text-xs font-bold text-[#B5BAC1] mb-4">
                <Sparkles className="w-4 h-4 text-[#FEE75C]" />
                User Activity
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
                Track your journey <br />
                <span className="text-[#5865F2]">across every difficulty.</span>
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {classProgress.map((cls, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-[#2B2D31] border border-[#1E1F22] rounded-[16px] overflow-hidden flex flex-col shadow-lg"
                >
                  {/* Discord Activity Header Style */}
                  <div className="p-4 border-b border-[#1E1F22] bg-[#1E1F22]/50">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-[16px] flex items-center justify-center text-3xl ${cls.theme}`}>
                        {cls.icon}
                      </div>
                      <div>
                        <div className="text-[11px] font-extrabold text-[#B5BAC1] uppercase tracking-wider mb-0.5">Playing a game</div>
                        <h3 className="text-base font-extrabold text-[#F2F3F5] leading-tight">{cls.title}</h3>
                        <p className="text-sm text-[#DBDEE1] font-medium leading-tight mt-0.5">Level {Math.floor(cls.overall / 10)}</p>
                        <p className="text-xs text-[#80848E] font-medium leading-tight mt-0.5">{cls.overall}% Completion • 02:45 elapsed</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 flex-1 space-y-4">
                    {/* Progress Bars (Styled like Discord stats) */}
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-xs font-bold mb-1.5">
                          <span className="text-[#DBDEE1]">Foundation</span>
                          <span className={cls.textTheme}>{cls.foundation}%</span>
                        </div>
                        <div className={`w-full h-1.5 rounded-full ${cls.lightBar} overflow-hidden`}>
                          <div className={`h-full rounded-full ${cls.barColor}`} style={{ width: `${cls.foundation}%` }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-bold mb-1.5">
                          <span className="text-[#DBDEE1]">Intermediate</span>
                          <span className={cls.textTheme}>{cls.intermediate}%</span>
                        </div>
                        <div className={`w-full h-1.5 rounded-full ${cls.lightBar} overflow-hidden`}>
                          <div className={`h-full rounded-full ${cls.barColor}`} style={{ width: `${cls.intermediate}%` }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-bold mb-1.5">
                          <span className="text-[#DBDEE1]">Advanced</span>
                          <span className={cls.textTheme}>{cls.advanced}%</span>
                        </div>
                        <div className={`w-full h-1.5 rounded-full ${cls.lightBar} overflow-hidden`}>
                          <div className={`h-full rounded-full ${cls.barColor}`} style={{ width: `${cls.advanced}%` }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <Link href={`/learn/${cls.title.toLowerCase()}`} className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-[#4E5058] hover:bg-[#6D6F78] text-white rounded-[4px] font-bold text-sm transition-colors">
                      <Play className="w-4 h-4 fill-current" /> Continue Journey
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 border-t border-[#1E1F22]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 max-w-2xl"
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-white mb-4">Server Rules & FAQ</h2>
          </motion.div>

          <div className="max-w-3xl space-y-3">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#2B2D31] rounded-[16px] overflow-hidden"
              >
                <button 
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className="flex items-center justify-between w-full text-left font-bold text-base text-white p-5 hover:bg-[#35373C] transition-colors"
                >
                  {faq.q}
                  <ChevronRight className={`w-5 h-5 text-[#80848E] transition-transform duration-200 ${openFAQ === idx ? 'rotate-90' : ''}`} />
                </button>
                <motion.div 
                  initial={false}
                  animate={{ height: openFAQ === idx ? 'auto' : 0, opacity: openFAQ === idx ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-[#DBDEE1] text-sm font-medium leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA - Discord Banner style */}
        <section className="mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[24px] bg-[#5865F2] p-12 md:p-20 text-center shadow-2xl"
          >
            {/* Subtle Discord-style noise or pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_10%,_transparent_10%)] [background-size:24px_24px]"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
                Ready to join the server?
              </h2>
              <p className="text-lg text-white/80 font-medium mb-10 leading-relaxed max-w-xl mx-auto">
                Stop drowning in generic revision guides. Join thousands of students getting the notes, mocks, and clinics built for their curriculum.
              </p>
              <Link href="/sign-up" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#5865F2] rounded-[24px] font-extrabold text-base hover:bg-[#F2F3F5] transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1">
                Join the Cohort <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1E1F22] py-12 relative z-10 border-t border-[#111214]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#5865F2] rounded-xl flex items-center justify-center">
              <span className="text-white text-xs font-bold">P</span>
            </div>
            <span className="font-bold text-white text-base tracking-wide">POP Studying</span>
          </div>
          <div className="flex items-center gap-6 text-sm font-semibold text-[#80848E]">
            <Link href="#" className="hover:text-[#F2F3F5] transition-colors">About</Link>
            <Link href="#" className="hover:text-[#F2F3F5] transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-[#F2F3F5] transition-colors">Terms</Link>
            <Link href="#" className="hover:text-[#F2F3F5] transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
