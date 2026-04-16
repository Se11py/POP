"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { Calendar, MessageCircle, Clock, CheckCircle2, ChevronRight, Play, BookOpen, Video, FileText, ArrowRight, Sparkles, Command, Shield, Zap } from 'lucide-react';

export default function VercelLandingPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const readinessStats = [
    { subject: 'Math Paper 2', score: '92%', status: 'On track', color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
    { subject: 'Physics HL', score: '88%', status: 'Reviewed', color: 'text-purple-400', bg: 'bg-purple-400/10' },
    { subject: 'Chemistry ATP', score: '86%', status: 'Needs recap', color: 'text-pink-400', bg: 'bg-pink-400/10' }
  ];
  
  const focusBlocks = [
    { title: 'Functions', detail: 'IB Math AA', time: '08:30', icon: <Command className="w-4 h-4 text-cyan-400" /> },
    { title: 'Energetics', detail: 'Chemistry HL', time: '11:00', icon: <Zap className="w-4 h-4 text-purple-400" /> },
    { title: 'Stoichiometry', detail: 'Chemistry SL', time: '14:30', icon: <Shield className="w-4 h-4 text-pink-400" /> }
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
      icon: <Calendar className="w-5 h-5 text-gray-300" />,
    },
    {
      title: 'Mid-week check',
      description: 'Mentor replies to your submission with annotated feedback and a 48-hour action note.',
      detail: 'Delivered in-app',
      id: '02',
      icon: <MessageCircle className="w-5 h-5 text-gray-300" />,
    },
    {
      title: 'Studio hour',
      description: 'Join a low-light focus room with 12 peers, swap questions, then log next plans.',
      detail: 'Thursday 19:00',
      id: '03',
      icon: <Clock className="w-5 h-5 text-gray-300" />,
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
      a: "Most likely. We focus heavily on IB, Cambridge (CIE), and Edexcel for both IGCSE and A-Levels. If you don't see your board, drop us a request."
    },
    {
      q: "Who writes these notes?",
      a: "Students who got the grades. Every resource is created by alumni who scored 7s (IB) or A*s, then verified by our subject leads to ensure precision."
    }
  ];

  const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'History', 'English Lit', 'Economics'];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
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
    <div className="min-h-screen bg-[#0A0A0A] text-gray-300 font-sans selection:bg-purple-500/30 selection:text-white">
      
      {/* Ambient background glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] bg-cyan-900/10 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[50%] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen"></div>
      </div>

      {/* Premium Glassmorphism Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-[#0A0A0A]/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:border-white/20 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all">
              <span className="text-white text-sm font-bold tracking-tighter">P</span>
            </div>
            <span className="font-semibold text-sm tracking-wide text-white">POP Studying</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <Link href="#method" className="hover:text-white transition-colors">Method</Link>
            <Link href="#resources" className="hover:text-white transition-colors">Resources</Link>
            <Link href="#faq" className="hover:text-white transition-colors">FAQ</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/sign-in" className="hidden md:block text-gray-400 hover:text-white transition-colors text-sm font-medium">
              Log in
            </Link>
            <Link href="/sign-up" className="px-4 py-2 bg-white text-black font-medium rounded-md hover:bg-gray-100 transition-colors text-sm flex items-center gap-2">
              Start Building
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-32">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column - Hero Content */}
            <motion.div 
              className="md:col-span-7 space-y-8"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <div className="space-y-6">
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-300 backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text">Built for IB + A level mocks</span>
                </motion.div>
                
                <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-semibold leading-[1.1] tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-500">
                  Calm, deliberate prep <br className="hidden md:block" /> 
                  for every revision block.
                </motion.h1>
                
                <motion.p variants={fadeInUp} className="text-lg text-gray-400 font-normal leading-relaxed max-w-xl">
                  Guided study cadences, engineered topic packs, and mock submissions in one high-performance hub. Keep momentum across busy terms without distractions.
                </motion.p>
              </div>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-2">
                {syllabusBadges.map((badge) => (
                  <span key={badge} className="px-3 py-1 rounded-md text-xs font-medium text-gray-400 bg-white/5 border border-white/5">
                    {badge}
                  </span>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/sign-up"
                  className="px-6 py-3 bg-white text-black rounded-lg font-medium text-sm hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
                >
                  Deploy your plan
                </Link>
                <Link
                  href="/classes"
                  className="px-6 py-3 bg-white/5 text-white rounded-lg font-medium text-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-center flex items-center gap-2"
                >
                  <Command className="w-4 h-4" /> Browse classes
                </Link>
              </motion.div>
              
              <motion.div variants={fadeInUp} className="pt-8 border-t border-white/5 flex items-center gap-8 text-sm">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="flex flex-col gap-1">
                    <span className="text-2xl font-semibold text-white tracking-tight">{stat.value}</span>
                    <span className="text-gray-500 text-xs font-medium">{stat.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Glassmorphic Interface Cards */}
            <motion.div 
              className="md:col-span-5 relative hidden md:flex flex-col gap-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {/* Vercel-style Dashboard Card */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.02)]">
                <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                    Weekly Focus
                  </div>
                  <span className="text-xs text-gray-500 font-mono">3/4 Blocks</span>
                </div>
                <div className="space-y-3">
                  {focusBlocks.map((block) => (
                    <div key={block.title} className="group flex items-center justify-between p-3 rounded-lg border border-transparent hover:border-white/5 hover:bg-white/[0.02] transition-all cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-white/5 border border-white/5 flex items-center justify-center">
                          {block.icon}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">{block.title}</p>
                          <p className="text-xs text-gray-500">{block.detail}</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-gray-500">{block.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Analytics/Readiness Card */}
              <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-xs font-medium text-gray-400">Mock Readiness</p>
                  <button className="text-xs text-gray-500 hover:text-white transition flex items-center gap-1">
                    View Logs <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  {readinessStats.map((stat) => (
                    <div key={stat.subject} className="flex items-center justify-between group cursor-default">
                      <div className="flex items-center gap-3">
                        <div className="w-[2px] h-8 rounded-full bg-white/10 overflow-hidden relative">
                          <div className={`absolute bottom-0 w-full rounded-full ${stat.color.replace('text-', 'bg-')} transition-all h-[${stat.score}]`} style={{ height: stat.score }}></div>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{stat.subject}</p>
                          <p className={`text-[10px] ${stat.color} font-medium tracking-wide mt-0.5`}>{stat.status}</p>
                        </div>
                      </div>
                      <span className="text-sm font-mono text-gray-400">{stat.score}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cadence Section - Linear Style */}
        <section id="method" className="py-24 border-t border-white/5">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <motion.div 
              className="md:col-span-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl font-semibold text-white tracking-tight mb-4">
                Engineered for <br/>consistency.
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-sm text-gray-400 leading-relaxed mb-6">
                Three highly-optimized touchpoints repeat every seven days. A workflow designed to keep you focused on execution, not administration.
              </motion.p>
              <motion.div variants={fadeInUp} className="w-12 h-[1px] bg-gradient-to-r from-purple-500 to-cyan-500"></motion.div>
            </motion.div>
            
            <div className="md:col-span-8 grid sm:grid-cols-3 gap-4">
              {cadenceSteps.map((step, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] p-6 rounded-xl transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center mb-5 shadow-inner group-hover:border-white/10 transition-colors">
                    {step.icon}
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                    {step.detail}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section - Glassmorphic Grid */}
        <section id="resources" className="py-24 border-t border-white/5">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-semibold tracking-tight text-white mb-4">Infrastructure for learning.</motion.h2>
            <motion.p variants={fadeInUp} className="text-sm text-gray-400 max-w-2xl">
              High-fidelity materials, live sessions, and telemetry for your practice papers.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-12 gap-4">
            {/* Main Feature */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-8 bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-8 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-cyan-500/20 transition-colors duration-700"></div>
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                    <BookOpen className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">Study Notes</h3>
                  <p className="text-gray-400 text-sm max-w-md leading-relaxed">
                    Zero-fluff notes shaped by actual scorers. Annotated with margin cues showing where method marks appear. Optimized for fast retrieval.
                  </p>
                </div>
                <div className="mt-12 flex justify-between items-center border-t border-white/5 pt-6">
                  <span className="text-xs font-mono text-gray-500">126+ Topic packs deployed</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <ArrowRight className="w-4 h-4 text-gray-300" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Side Features */}
            <div className="md:col-span-4 flex flex-col gap-4">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/[0.02] border border-white/10 p-6 rounded-2xl flex-1 flex flex-col justify-between group hover:bg-white/[0.04] transition-colors relative overflow-hidden"
              >
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[50px] translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    <Video className="w-4 h-4 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Live Classes</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">Expert-led sessions with live telemetry and Q&A.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/[0.02] border border-white/10 p-6 rounded-2xl flex-1 flex flex-col justify-between group hover:bg-white/[0.04] transition-colors relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-32 h-32 bg-pink-500/10 rounded-full blur-[50px] -translate-y-1/2 -translate-x-1/2"></div>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    <FileText className="w-4 h-4 text-pink-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Mock Papers</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">Annotated scripts showing precisely where marks land.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Subjects / Tags - Sleek Borders */}
        <section className="py-20 border-t border-white/5">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-white mb-2">Supported Environments</h2>
            <p className="text-sm text-gray-500">Expert resources structured for every discipline.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {subjects.map((subject, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="px-4 py-1.5 rounded-full bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/5 cursor-pointer transition-all text-xs font-medium text-gray-400 flex items-center"
              >
                {subject}
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section - Clean Accordion */}
        <section id="faq" className="py-24 border-t border-white/5">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 max-w-2xl"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Documentation</h2>
            <p className="text-sm text-gray-400">
              Clear answers on how the platform operates.
            </p>
          </motion.div>

          <div className="max-w-3xl divide-y divide-white/5 border-t border-b border-white/5">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="py-5"
              >
                <button 
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className="flex items-center justify-between w-full text-left font-medium text-sm text-gray-200 hover:text-white transition-colors group"
                >
                  {faq.q}
                  <ChevronRight className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${openFAQ === idx ? 'rotate-90 text-white' : 'group-hover:text-white'}`} />
                </button>
                <motion.div 
                  initial={false}
                  animate={{ height: openFAQ === idx ? 'auto' : 0, opacity: openFAQ === idx ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="pt-3 text-gray-400 text-sm leading-relaxed pr-8">
                    {faq.a}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA - The "Vercel Deploy" style */}
        <section className="mt-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-12 md:p-20 text-center shadow-[0_0_50px_rgba(255,255,255,0.02)]"
          >
            {/* Glowing top border */}
            <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mb-6 shadow-inner">
                <Command className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
                Ready to deploy your revision?
              </h2>
              <p className="text-sm text-gray-400 mb-8 leading-relaxed max-w-lg mx-auto">
                Join thousands of students turning their revision into a predictable, high-performance workflow. No more generic guides.
              </p>
              <Link href="/sign-up" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-md font-medium text-sm hover:bg-gray-100 transition-colors">
                Start Building <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#0A0A0A] py-10 relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-white/10 rounded border border-white/10 flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">P</span>
            </div>
            <span className="font-semibold text-gray-400 text-xs tracking-wide">POP Studying</span>
          </div>
          <div className="flex items-center gap-6 text-xs font-medium text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">About</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
