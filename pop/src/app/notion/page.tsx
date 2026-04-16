"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { ChevronRight, BookOpen, Video, FileText, CheckCircle2, Clock, Calendar, ArrowRight, Star, MessageCircle } from 'lucide-react';

export default function NotionLandingPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const cadenceSteps = [
    {
      title: 'Sunday brief',
      description: 'You receive a 4-line overview: key topics, mock target, and one reflective question.',
      detail: 'Sent 18:00 local time',
      icon: <Calendar className="w-5 h-5 text-indigo-600" />,
      offset: 'md:translate-y-0'
    },
    {
      title: 'Mid-week check',
      description: 'Mentor replies to your submission with annotated feedback and a 48-hour action note.',
      detail: 'Delivered in-app',
      icon: <MessageCircle className="w-5 h-5 text-indigo-600" />,
      offset: 'md:translate-y-6'
    },
    {
      title: 'Studio hour',
      description: 'Join a low-light focus room with 12 peers, swap questions, then log next plans.',
      detail: 'Thursday 19:00',
      icon: <Clock className="w-5 h-5 text-indigo-600" />,
      offset: 'md:translate-y-12'
    }
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
      a: "Students who got the grades. Every resource is created by alumni who scored 7s (IB) or A*s, then verified by our subject leads."
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
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center justify-between"
      >
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/notion" className="flex items-center gap-2 group">
              <div className="w-7 h-7 bg-black rounded-md flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300">
                <span className="text-white text-sm font-bold font-serif">P</span>
              </div>
              <span className="font-semibold text-lg tracking-tight">POP Studying</span>
            </Link>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500">
              <a href="#method" className="hover:text-black transition-colors">Method</a>
              <a href="#resources" className="hover:text-black transition-colors">Resources</a>
              <a href="#faq" className="hover:text-black transition-colors">FAQ</a>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium">
            <Link href="/sign-in" className="hidden md:block text-gray-500 hover:text-black transition-colors">
              Log in
            </Link>
            <Link href="/sign-up" className="px-4 py-2 bg-white text-black border border-gray-200 rounded-md hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm">
              Start studying free
            </Link>
          </div>
        </div>
      </motion.nav>

      <main className="max-w-5xl mx-auto px-6 pt-24 pb-32">
        {/* Hero Section */}
        <section className="py-12 md:py-24 relative">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <motion.div 
              className="md:col-span-7"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gray-50 border border-gray-200 text-xs font-medium text-gray-600 mb-8">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                Built for IB + A level mocks
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-[64px] font-bold tracking-tighter text-black mb-6 leading-[1.05] relative">
                Calm, deliberate prep <br className="hidden md:block" />
                <span className="text-gray-400 font-medium relative">
                  for every revision block.
                  {/* Minimalist underline */}
                  <svg className="absolute -bottom-3 left-0 w-full h-2 text-indigo-100" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M2.00017 6.43859C45.2443 2.11586 122.973 -1.82136 198.411 6.43859" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl font-normal">
                Guided study cadences, annotated topic packs, and mock submissions in one trusted workspace. Keep momentum across busy terms without neon distractions.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
                <Link href="/sign-up" className="px-6 py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-all hover:shadow-md flex items-center gap-2 text-base">
                  Start studying free <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="#resources" className="px-6 py-3 bg-white text-gray-700 border border-gray-200 rounded-md font-medium hover:bg-gray-50 transition-all hover:border-gray-300 text-base">
                  See subjects
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-16 flex items-center gap-8 text-sm text-gray-500">
                <div className="flex flex-col">
                  <span className="font-bold text-black text-3xl tracking-tight">89%</span>
                  <span className="font-medium mt-1 text-gray-500">Mock readiness</span>
                </div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div className="flex flex-col">
                  <span className="font-bold text-black text-3xl tracking-tight">12</span>
                  <span className="font-medium mt-1 text-gray-500">Weekly clinics</span>
                </div>
                <div className="w-px h-10 bg-gray-200"></div>
                <div className="flex flex-col">
                  <span className="font-bold text-black text-3xl tracking-tight">48</span>
                  <span className="font-medium mt-1 text-gray-500">Active cohorts</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Asymmetrical visual composition on the right */}
            <motion.div 
              className="md:col-span-5 relative hidden md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, type: "spring", bounce: 0.2 }}
            >
              <div className="relative bg-white rounded-lg p-8 shadow-sm border border-gray-200 transform rotate-1 z-10 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                    <UserIcon />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-black">Sarah M.</div>
                    <div className="text-xs text-gray-500 font-medium">IB Student, scored 43</div>
                  </div>
                </div>
                <p className="text-gray-700 text-base leading-relaxed mb-6 font-serif italic">
                  "The mid-week checks actually kept me accountable. The notes aren't just textbooks rewritten, they actually tell you where the marks are. A completely distraction-free environment."
                </p>
                <div className="flex items-center gap-1 text-indigo-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                
                {/* Floating element overlapping */}
                <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-md shadow-md border border-gray-100 transform -rotate-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                    <span className="text-xs font-semibold text-gray-800">Biology HL Pack</span>
                  </div>
                </div>
              </div>
              
              {/* Decorative subtle background dots */}
              <div className="absolute -inset-4 -z-10 bg-[radial-gradient(#E5E7EB_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
            </motion.div>
          </div>
        </section>

        {/* Method Section - Staggered layout */}
        <section id="method" className="py-24 border-t border-gray-100">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-16 md:text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight mb-4 text-black">Your week, finally making sense.</motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl md:mx-auto font-normal">
              Three quiet touchpoints repeat every seven days. Simple by design so you stay focused on the work instead of managing a complex dashboard.
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {cadenceSteps.map((step, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-gray-50/50 p-8 rounded-xl border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all duration-300 ${step.offset}`}
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center mb-6 shadow-sm">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-black mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-sm">
                  {step.description}
                </p>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                  {step.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="py-24 border-t border-gray-100">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold tracking-tight mb-4 text-black">The Resource Library</motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-2xl font-normal">
              Everything you need, beautifully organized. Navigate through study materials, live sessions, and practice papers.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-12 gap-6">
            {/* Large Card */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="md:col-span-7 bg-white p-8 rounded-xl border border-gray-200 hover:border-indigo-200 hover:shadow-sm transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-colors">
                  <BookOpen className="w-6 h-6 text-gray-700 group-hover:text-indigo-600 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-black">Study Notes</h3>
                <p className="text-gray-600 text-base max-w-md mb-8 leading-relaxed">
                  Zero-fluff notes shaped by actual scorers. Annotated with margin cues showing where method marks appear.
                </p>
              </div>
              <div className="flex justify-between items-center mt-auto pt-6 border-t border-gray-100">
                <span className="text-sm font-medium text-gray-500">
                  126+ Topic packs
                </span>
                <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-indigo-600 transition-colors" />
              </div>
            </motion.div>

            {/* Smaller Stacked Cards */}
            <div className="md:col-span-5 flex flex-col gap-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-indigo-200 hover:shadow-sm transition-all flex-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-colors">
                      <Video className="w-5 h-5 text-gray-700 group-hover:text-indigo-600 transition-colors" />
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-indigo-600 transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-black">Live Classes</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Expert-led sessions that actually help. Live Q&A.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-indigo-200 hover:shadow-sm transition-all flex-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-colors">
                      <FileText className="w-5 h-5 text-gray-700 group-hover:text-indigo-600 transition-colors" />
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-indigo-600 transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-black">Mock Papers</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">Annotated scripts showing exactly where marks land.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Subjects / Tags */}
        <section className="py-20 border-t border-gray-100">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold tracking-tight mb-4 text-black">Expert resources for every subject.</h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {subjects.map((subject, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="px-4 py-2 rounded-md bg-white border border-gray-200 cursor-pointer hover:border-indigo-300 hover:text-indigo-600 transition-colors font-medium text-sm text-gray-600 flex items-center gap-2"
              >
                {subject}
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 border-t border-gray-100">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 max-w-2xl"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-black">Common questions</h2>
            <p className="text-lg text-gray-600 font-normal">
              Just the important stuff. Here's the straight talk on how POP works.
            </p>
          </motion.div>

          <div className="max-w-3xl divide-y divide-gray-100 border-t border-b border-gray-100">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="py-6"
              >
                <button 
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className="flex items-center justify-between w-full text-left font-semibold text-base text-black group"
                >
                  <span className="group-hover:text-indigo-600 transition-colors">{faq.q}</span>
                  <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${openFAQ === idx ? 'rotate-90 text-indigo-600' : 'group-hover:text-indigo-600'}`} />
                </button>
                <motion.div 
                  initial={false}
                  animate={{ height: openFAQ === idx ? 'auto' : 0, opacity: openFAQ === idx ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="pt-4 text-gray-600 text-sm leading-relaxed pr-8">
                    {faq.a}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-24 border border-gray-200 rounded-2xl bg-gray-50 py-20 px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto flex flex-col items-center"
          >
            <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center mb-6 shadow-sm">
              <BookOpen className="w-6 h-6 text-indigo-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-black">
              Made for students, by students.
            </h2>
            <p className="text-lg text-gray-600 mb-8 font-normal leading-relaxed">
              Stop drowning in generic revision guides. Get the notes, mocks, and clinics built specifically for our curriculum.
            </p>
            <Link href="/sign-up" className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-md font-medium text-base hover:bg-gray-800 transition-colors shadow-sm">
              Start studying free <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white py-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
              <span className="text-white text-[10px] font-bold font-serif">P</span>
            </div>
            <span className="font-semibold text-gray-900 text-sm">POP Studying</span>
          </div>
          <div className="flex items-center gap-8 text-sm font-medium text-gray-500">
            <Link href="#" className="hover:text-black transition-colors">About</Link>
            <Link href="#" className="hover:text-black transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-black transition-colors">Terms</Link>
            <Link href="#" className="hover:text-black transition-colors">Contact</Link>
          </div>
          <div className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} POP. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function UserIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
