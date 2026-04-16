"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight,
  Clock, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Menu,
  X,
  Zap,
  Target,
  Bookmark,
  Sparkles,
  BookOpen,
  Copy,
  ExternalLink,
  Check
} from 'lucide-react';

// Simplified local dictionary database
const DICTIONARY_DATABASE: Record<string, { definition: string, category: string }> = {
  "distance": { definition: "The total length of the path travelled by an object, measured in metres (m). Distance is a scalar quantity and does not depend on direction.", category: "Physics" },
  "displacement": { definition: "The straight-line distance from initial position to final position, measured in metres (m), with direction specified. Displacement is a vector quantity.", category: "Physics" },
  "velocity": { definition: "The rate of change of displacement with respect to time, measured in metres per second (m/s), with direction specified.", category: "Physics" },
  "acceleration": { definition: "The rate of change of velocity with respect to time, measured in metres per second squared (m/s²).", category: "Physics" },
  "quarks": { definition: "Elementary particles and a fundamental constituent of matter. Quarks combine to form composite particles called hadrons (protons/neutrons).", category: "Physics" },
  "bosons": { definition: "Force-carrier particles that mediate fundamental interactions. For example, photons carry the electromagnetic force.", category: "Physics" }
};

// Dummy Data for A Level Physics
const PHYSICS_CONTENT = {
  subject: "Physics",
  level: "A Level",
  topic: "Particle Physics",
  title: "The Standard Model",
  estimatedTime: "25 mins",
  difficulty: "Advanced",
  progress: 65,
  sections: [
    {
      id: "introduction",
      title: "Introduction to Particles",
      content: `
        <p>At the most fundamental level, everything in the universe is made of a small number of basic building blocks called <strong>elementary particles</strong>, governed by four fundamental forces.</p>
        <p>Our best understanding of how these particles and three of the forces are related to each other is encapsulated in the <strong>Standard Model of particle physics</strong>.</p>
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6 rounded-r-xl">
          <p class="text-blue-800 font-bold flex items-center gap-2">
            <span class="text-xl">💡</span> Key Concept
          </p>
          <p class="text-blue-700 italic">The Standard Model is the theoretical framework that describes the electromagnetic, weak, and strong nuclear interactions.</p>
        </div>
      `
    },
    {
      id: "quarks",
      title: "Quarks and Leptons",
      content: `
        <p>Matter particles are divided into two main groups: <strong>Quarks</strong> and <strong>Leptons</strong>. Each group consists of six particles, which are related in pairs, or "generations".</p>
        <h3 class="text-xl font-bold mt-6 mb-3">The Six Quarks</h3>
        <ul class="list-disc ml-6 space-y-2">
          <li><strong>Up (u)</strong> and <strong>Down (d)</strong>: The lightest and most stable.</li>
          <li><strong>Charm (c)</strong> and <strong>Strange (s)</strong>: Heavier and found in high-energy collisions.</li>
          <li><strong>Top (t)</strong> and <strong>Bottom (b)</strong>: The heaviest and most recently discovered.</li>
        </ul>
        <p class="mt-4">Protons are made of <strong>two up quarks and one down quark (uud)</strong>, while neutrons are made of <strong>one up quark and two down quarks (udd)</strong>.</p>
      `
    },
    {
      id: "forces",
      title: "Fundamental Forces",
      content: `
        <p>There are four fundamental forces in the universe, three of which are described by the Standard Model:</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div class="p-4 bg-purple-50 rounded-2xl border-2 border-purple-100">
            <h4 class="font-black text-purple-700 mb-2 uppercase tracking-tight">Strong Nuclear</h4>
            <p class="text-sm text-purple-600">Holds atomic nuclei together. Carried by the <strong>Gluon</strong>.</p>
          </div>
          <div class="p-4 bg-emerald-50 rounded-2xl border-2 border-emerald-100">
            <h4 class="font-black text-emerald-700 mb-2 uppercase tracking-tight">Electromagnetic</h4>
            <p class="text-sm text-emerald-600">Responsible for electricity and magnetism. Carried by the <strong>Photon</strong>.</p>
          </div>
          <div class="p-4 bg-blue-50 rounded-2xl border-2 border-blue-100">
            <h4 class="font-black text-blue-700 mb-2 uppercase tracking-tight">Weak Nuclear</h4>
            <p class="text-sm text-blue-600">Responsible for radioactive decay. Carried by <strong>W and Z bosons</strong>.</p>
          </div>
        </div>
        <p><em>Note: Gravity is the fourth force but is currently not part of the Standard Model.</em></p>
      `
    }
  ]
};

// Journey Data for Sidebar
const JOURNEY_DATA = {
  topics: [
    { id: "atomic-structure", title: "Atomic Structure", level: "Foundation", status: "completed" },
    { id: "nuclear-radiation", title: "Nuclear Radiation", level: "Foundation", status: "completed" },
    { id: "energetics", title: "Energetics", level: "Intermediate", status: "completed" },
    { id: "particle-physics", title: "Particle Physics", level: "Advanced", status: "current" },
    { id: "quantum-phenomena", title: "Quantum Phenomena", level: "Advanced", status: "next" },
    { id: "medical-physics", title: "Medical Physics", level: "Intermediate", status: "locked" },
    { id: "astrophysics", title: "Astrophysics", level: "Advanced", status: "locked" },
    { id: "thermodynamics", title: "Thermodynamics", level: "Intermediate", status: "locked" }
  ]
};

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Foundation': return 'bg-emerald-500';
    case 'Intermediate': return 'bg-blue-500';
    case 'Advanced': return 'bg-purple-500';
    default: return 'bg-slate-400';
  }
};

export default function LearnPageTemplate() {
  const [activeSection, setActiveSection] = useState(PHYSICS_CONTENT.sections[0].id);
  const [readingProgress, setReadingProgress] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  
  // AI Highlight Feature State
  const [selection, setSelection] = useState<{ text: string, x: number, y: number } | null>(null);
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [isDictionaryMatch, setIsDictionaryMatch] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(progress);
    };

    const handleMouseUp = (e: MouseEvent) => {
      const selectedText = window.getSelection()?.toString().trim();
      
      if (selectedText && selectedText.length > 2 && selectedText.length < 100) {
        // Only trigger if clicking within the main content or prose
        const isWithinContent = (e.target as HTMLElement).closest('.prose');
        if (isWithinContent) {
          setSelection({
            text: selectedText,
            x: e.clientX,
            y: e.clientY + window.scrollY
          });
          processHighlightedText(selectedText);
        }
      } else {
        // If clicking elsewhere or no selection, clear
        if (!(e.target as HTMLElement).closest('.ai-tooltip')) {
          setSelection(null);
          setAiExplanation(null);
          setIsDictionaryMatch(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const processHighlightedText = async (text: string) => {
    setIsAiLoading(true);
    setIsDictionaryMatch(false);

    const normalizedText = text.toLowerCase();
    const dictionaryMatch = DICTIONARY_DATABASE[normalizedText];

    if (dictionaryMatch) {
      setTimeout(() => {
        setAiExplanation(dictionaryMatch.definition);
        setIsDictionaryMatch(true);
        setIsAiLoading(false);
      }, 300);
      return;
    }

    // Mocking AI Response for now
    setTimeout(() => {
      const mocks: Record<string, string> = {
        "elementary particles": "Fundamental particles that have no known substructure; they are the basic building blocks of the universe.",
        "standard model": "The theoretical framework describing three of the four known fundamental forces (electromagnetic, weak, and strong nuclear) in the universe.",
        "leptons": "A family of elementary particles that do not undergo strong interactions. The electron is the most famous lepton.",
        "gluon": "The exchange particle (or gauge boson) for the strong force between quarks."
      };

      const result = mocks[normalizedText] || `In the context of ${PHYSICS_CONTENT.subject}, '${text}' refers to a key concept involving ${PHYSICS_CONTENT.topic.toLowerCase()}. It plays a crucial role in understanding how matter and forces interact at a fundamental level.`;
      
      setAiExplanation(result);
      setIsAiLoading(false);
    }, 800);
  };

  const handleCopy = () => {
    if (selection?.text) {
      navigator.clipboard.writeText(selection.text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-800 font-sans">
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1.5 bg-slate-100 z-[60]">
        <motion.div 
          className="h-full bg-[#34D399]" 
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Modern Learning Header */}
      <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b-2 border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/duolingo/classes" className="p-2 hover:bg-slate-100 rounded-xl transition-colors">
              <ChevronLeft className="w-6 h-6 text-slate-500" />
            </Link>
            <div className="h-8 w-[2px] bg-slate-200 hidden sm:block"></div>
            <div className="hidden sm:flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 leading-none">
                {PHYSICS_CONTENT.level} • {PHYSICS_CONTENT.topic}
              </span>
              <span className="text-sm font-bold text-slate-700 leading-tight">
                {PHYSICS_CONTENT.title}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-[#E2F7EB] rounded-xl border-2 border-[#6EE7B7] text-[11px] font-black text-[#059669] uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" /> {PHYSICS_CONTENT.estimatedTime}
            </div>
            <button className="p-2.5 bg-white border-2 border-slate-200 border-b-4 rounded-xl hover:bg-slate-50 active:border-b-2 active:translate-y-[2px] transition-all">
              <Bookmark className="w-5 h-5 text-slate-500" />
            </button>
            <button className="p-2.5 bg-[#34D399] text-white border-b-4 border-[#059669] rounded-xl font-black text-sm uppercase tracking-wide px-5 active:border-b-0 active:translate-y-[4px] transition-all">
              Finish
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 pt-24 pb-20 flex gap-12">
        {/* Left Navigation Sidebar - Redesigned Curriculum Map */}
        <aside className="hidden lg:block w-80 shrink-0 h-[calc(100vh-120px)] sticky top-24 overflow-y-auto pr-4 scrollbar-hide">
          <div className="space-y-10">
            {/* Subject Header */}
            <div className="px-2">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#8B5CF6]"></span>
                <h3 className="font-black text-slate-800 text-sm uppercase tracking-tight italic">Physics Journey</h3>
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">A-Level Course Map</p>
            </div>

            {/* The Path */}
            <div className="relative pl-10 space-y-2">
              {/* Vertical Progress Rail */}
              <div className="absolute left-[19px] top-4 bottom-4 w-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="w-full bg-[#34D399] h-[45%]"></div>
              </div>

              {JOURNEY_DATA.topics.map((topic) => {
                const isCompleted = topic.status === 'completed';
                const isCurrent = topic.status === 'current';
                const isNext = topic.status === 'next';
                const isLocked = topic.status === 'locked';

                return (
                  <div key={topic.id} className="relative py-1 group">
                    {/* Node */}
                    <div className={`absolute -left-[31px] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full z-10 flex items-center justify-center transition-all duration-300 border-4 border-[#FAF9F6] shadow-sm ${
                      isCompleted ? 'bg-[#34D399]' : 
                      isCurrent ? 'bg-white ring-4 ring-[#DFF2FC]' : 
                      isNext ? 'bg-[#FFD93D]' : 
                      'bg-slate-200'
                    }`}>
                      {isCompleted && <CheckCircle2 className="w-3.5 h-3.5 text-white" strokeWidth={4} />}
                      {isCurrent && <div className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse" />}
                      {isNext && <Target className="w-3 h-3 text-white" strokeWidth={3} />}
                    </div>

                    {/* Topic Card Link */}
                    <button className={`w-full text-left p-3 rounded-2xl border-2 transition-all duration-200 flex items-center gap-3 relative ${
                      isCurrent ? 'bg-white border-[#7DD3FC] shadow-md -translate-x-1' : 
                      isCompleted ? 'bg-white/40 border-transparent hover:border-slate-200 opacity-80' :
                      isNext ? 'bg-white border-dashed border-[#FCD34D] shadow-sm' :
                      'bg-transparent border-transparent opacity-40 grayscale hover:grayscale-0 hover:opacity-100 hover:bg-white hover:border-slate-200'
                    }`}>
                      {/* Difficulty Strip */}
                      <div className={`w-1 h-6 rounded-full shrink-0 ${getLevelColor(topic.level)}`} />
                      
                      <div className="flex-1 min-0">
                        {isCurrent && <span className="text-[8px] font-black text-[#0284C7] uppercase tracking-widest block leading-none mb-1 italic">Active Now</span>}
                        {isNext && <span className="text-[8px] font-black text-[#D97706] uppercase tracking-widest block leading-none mb-1">On the horizon</span>}
                        <h4 className={`text-[11px] font-black truncate leading-tight ${
                          isCurrent ? 'text-slate-800' : 
                          isCompleted ? 'text-slate-600' : 
                          'text-slate-400'
                        }`}>
                          {topic.title}
                        </h4>
                      </div>

                      {isLocked && <X className="w-3 h-3 text-slate-300" />}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Quick Actions / Stats */}
            <div className="p-5 bg-white rounded-[32px] border-2 border-slate-200 shadow-sm">
              <h4 className="font-black text-slate-700 text-[10px] uppercase tracking-widest mb-4 flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-[#F472B6]" /> Learning Stats
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-2 rounded-xl bg-slate-50 border-2 border-slate-100">
                  <p className="text-[8px] font-black text-slate-400 uppercase leading-none mb-1">XP Earned</p>
                  <p className="text-sm font-black text-slate-700">1,240</p>
                </div>
                <div className="text-center p-2 rounded-xl bg-slate-50 border-2 border-slate-100">
                  <p className="text-[8px] font-black text-slate-400 uppercase leading-none mb-1">Streak</p>
                  <p className="text-sm font-black text-slate-700">12 Days</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 max-w-3xl mx-auto">
          {/* Table of Contents - Horizontal Jump Bar */}
          <div className="mb-10 p-4 bg-white/50 backdrop-blur-md rounded-3xl border-2 border-slate-100 flex flex-wrap gap-2 items-center">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest px-2 mr-2 italic">Jump to Section:</span>
            {PHYSICS_CONTENT.sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-4 py-2 rounded-xl text-xs font-black transition-all border-2 ${
                  activeSection === section.id 
                    ? 'bg-[#1D232A] text-white border-[#1D232A] shadow-md' 
                    : 'bg-white text-slate-500 hover:text-slate-800 border-slate-50 hover:border-slate-200'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero Card */}
            <div className="bg-white rounded-[48px] border-2 border-slate-200 p-8 md:p-12 mb-12 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8">
                <div className="w-16 h-16 bg-[#F3E8FF] rounded-3xl flex items-center justify-center border-b-4 border-[#D8B4FE]">
                  <Zap className="w-8 h-8 text-[#7E22CE]" />
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <span className="px-3 py-1 bg-[#F3E8FF] text-[#7E22CE] rounded-xl text-[10px] font-black uppercase tracking-widest">
                    {PHYSICS_CONTENT.subject}
                  </span>
                  <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{PHYSICS_CONTENT.level}</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tighter leading-[0.9] mb-6">
                  {PHYSICS_CONTENT.title}
                </h1>
                <p className="text-xl text-slate-500 font-medium max-w-xl leading-relaxed">
                  Explore the fundamental components of our universe and the invisible forces that hold everything together.
                </p>
              </div>
            </div>

            {/* Render Sections */}
            <div className="space-y-24 px-4">
              {PHYSICS_CONTENT.sections.map((section, idx) => (
                <section 
                  key={section.id} 
                  id={section.id}
                  className="scroll-mt-32"
                >
                  <div className="flex items-center gap-4 mb-10">
                    <span className="w-12 h-12 rounded-2xl bg-[#DFF2FC] text-[#0284C7] flex items-center justify-center text-xl font-black border-b-[6px] border-[#7DD3FC]">
                      {idx + 1}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">
                      {section.title}
                    </h2>
                  </div>
                  <div 
                    className="prose prose-slate prose-xl max-w-none prose-p:text-slate-600 prose-p:leading-relaxed prose-strong:text-slate-800 prose-strong:font-black prose-li:text-slate-600"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </section>
              ))}
            </div>

            {/* Separator */}
            <div className="my-24 flex justify-center">
              <div className="w-32 h-2 bg-slate-200 rounded-full opacity-30"></div>
            </div>

            {/* Quiz Section - "The Validation" */}
            <section className="bg-[#1D232A] rounded-[56px] border-b-[12px] border-black p-8 md:p-16 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-10">
                <Award className="w-64 h-64 rotate-12" />
              </div>

              {!quizStarted ? (
                <div className="relative z-10 text-center py-8">
                  <div className="w-24 h-24 bg-emerald-500/20 rounded-[32px] flex items-center justify-center border-b-4 border-emerald-600 mx-auto mb-10">
                    <Zap className="w-12 h-12 text-emerald-400" />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-tight">
                    Ready to validate <br /> your knowledge?
                  </h2>
                  <p className="text-slate-400 text-lg font-bold mb-12 max-w-md mx-auto leading-relaxed">
                    Lock in your understanding of <span className="text-white italic">"{PHYSICS_CONTENT.title}"</span> and earn bonus XP.
                  </p>
                  <button 
                    onClick={() => setQuizStarted(true)}
                    className="px-12 py-5 bg-[#34D399] text-white rounded-[28px] font-black text-2xl border-b-8 border-[#059669] active:border-b-0 active:translate-y-[8px] transition-all flex items-center gap-4 mx-auto uppercase tracking-wide group"
                  >
                    Start Mission <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              ) : (
                <div className="relative z-10 min-h-[500px] flex flex-col">
                  <div className="flex justify-between items-center mb-12">
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                        <div key={i} className={`w-3 h-3 rounded-full ${i === 1 ? 'bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]' : 'bg-white/10'}`}></div>
                      ))}
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Mission Progress</span>
                      <span className="text-xs font-black text-emerald-400">Question 1 of 10</span>
                    </div>
                  </div>

                  <div className="flex-1 space-y-10">
                    <div className="space-y-4">
                      <span className="text-xs font-black uppercase tracking-widest text-slate-500 italic">Analytical Question</span>
                      <h3 className="text-3xl md:text-4xl font-black tracking-tight leading-[1.1]">
                        Which exchange boson is responsible for the strong nuclear force?
                      </h3>
                    </div>
                    
                    <div className="grid gap-4 max-w-2xl">
                      {['Photon', 'W Boson', 'Gluon', 'Graviton'].map((option, idx) => (
                        <button 
                          key={idx}
                          className="w-full text-left p-6 bg-white/5 border-2 border-white/10 rounded-3xl font-black text-xl hover:bg-white/10 hover:border-emerald-400/50 transition-all flex items-center justify-between group"
                        >
                          <div className="flex items-center gap-4">
                            <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-xs text-slate-400 group-hover:text-emerald-400 transition-colors">{String.fromCharCode(65 + idx)}</span>
                            {option}
                          </div>
                          <div className="w-8 h-8 rounded-full border-4 border-white/10 group-hover:border-emerald-400 transition-colors flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-emerald-400 opacity-0 group-active:opacity-100 transition-opacity" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
                    <button onClick={() => setQuizStarted(false)} className="text-white/30 font-black uppercase tracking-widest text-xs hover:text-white transition-colors flex items-center gap-2">
                      <X size={14} /> Abandon Mission
                    </button>
                    <button className="px-10 py-4 bg-white/10 text-white border-b-4 border-white/5 rounded-2xl font-black text-sm uppercase tracking-wide opacity-50 cursor-not-allowed">
                      Submit Answer
                    </button>
                  </div>
                </div>
              )}
            </section>

            {/* Lesson Navigation */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Previous Lesson */}
              <button className="flex items-center gap-6 p-6 bg-white border-2 border-slate-200 border-b-8 border-slate-100 rounded-[32px] text-left hover:border-slate-300 active:translate-y-1 active:border-b-4 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600 transition-colors">
                  <ChevronLeft size={24} strokeWidth={3} />
                </div>
                <div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Previous Lesson</span>
                  <h4 className="font-black text-slate-700 text-lg leading-tight">Nuclear Radiation</h4>
                </div>
              </button>

              {/* Next Lesson */}
              <button className="flex items-center justify-between p-6 bg-[#E2F7EB] border-2 border-[#6EE7B7] border-b-8 border-[#A7F3D0] rounded-[32px] text-left hover:bg-[#D1F2E1] active:translate-y-1 active:border-b-4 transition-all group">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#34D399] flex items-center justify-center text-white shadow-[0_4px_0_0_#059669]">
                    <Zap size={24} fill="currentColor" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-[#059669] uppercase tracking-widest block mb-1">Next Challenge</span>
                    <h4 className="font-black text-[#065F46] text-lg leading-tight">Quantum Phenomena</h4>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/50 flex items-center justify-center text-[#059669] group-hover:translate-x-1 transition-transform">
                  <ChevronRight size={20} strokeWidth={3} />
                </div>
              </button>
            </div>
          </motion.div>
        </main>
      </div>

      {/* Floating Action Menu for Mobile */}
      <div className="fixed bottom-6 right-6 lg:hidden z-50">
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="w-16 h-16 bg-white border-2 border-slate-200 border-b-8 border-slate-100 rounded-3xl shadow-xl flex items-center justify-center text-slate-600 active:translate-y-[4px] active:border-b-4 transition-all"
        >
          {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="fixed inset-0 z-[100] bg-[#FAF9F6] lg:hidden p-6 pt-24 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-10 px-2">
              <h3 className="text-2xl font-black text-slate-800 tracking-tight">Your Journey</h3>
              <button onClick={() => setIsSidebarOpen(false)} className="p-3 bg-white border-2 border-slate-100 rounded-2xl shadow-sm">
                <X className="w-6 h-6 text-slate-400" />
              </button>
            </div>
            
            <div className="space-y-4 px-2">
              {JOURNEY_DATA.topics.map((topic, idx) => (
                <button
                  key={topic.id}
                  className={`w-full text-left p-5 rounded-[32px] font-black text-lg transition-all flex items-center gap-5 border-2 ${
                    topic.status === 'current' 
                      ? 'bg-white border-[#7DD3FC] shadow-lg -translate-y-1' 
                      : 'bg-white border-slate-100 text-slate-500'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border-b-4 ${
                    topic.status === 'completed' ? 'bg-[#E2F7EB] text-[#059669] border-[#6EE7B7]' : 
                    topic.status === 'current' ? 'bg-[#DFF2FC] text-[#0284C7] border-[#7DD3FC]' : 
                    'bg-slate-50 text-slate-300 border-slate-200'
                  }`}>
                    {topic.status === 'completed' ? <CheckCircle2 size={20} /> : <span className="text-sm">{idx + 1}</span>}
                  </div>
                  <div className="flex-1">
                    <span className={`text-[9px] uppercase tracking-widest block mb-1 ${getLevelColor(topic.level).replace('bg-', 'text-')}`}>
                      {topic.level}
                    </span>
                    {topic.title}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Explanation Tooltip */}
      <AnimatePresence>
        {selection && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="fixed z-[200] ai-tooltip"
            style={{ 
              left: Math.min(window.innerWidth - 320, Math.max(20, selection.x - 150)), 
              top: selection.y - window.scrollY - 180 
            }}
          >
            <div className="w-80 bg-white rounded-3xl border-2 border-slate-200 shadow-2xl p-5 relative overflow-hidden">
              {/* Header */}
              <div className="flex items-center gap-3 mb-3 border-b-2 border-slate-100 pb-3">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-white shadow-[0_2px_0_0_rgba(0,0,0,0.2)] ${isDictionaryMatch ? 'bg-emerald-500' : 'bg-blue-500'}`}>
                  {isDictionaryMatch ? <BookOpen size={16} /> : <Sparkles size={16} fill="currentColor" />}
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                    {isDictionaryMatch ? 'Dictionary Match' : 'Smart Assistant'}
                  </p>
                  <p className="text-xs font-black text-slate-700">"{selection.text}"</p>
                </div>
                <div className="ml-auto flex gap-1">
                  <button 
                    onClick={handleCopy}
                    className={`p-1.5 rounded-lg transition-all ${copySuccess ? 'bg-emerald-100 text-emerald-600' : 'hover:bg-slate-100 text-slate-400'}`}
                    title="Copy selection"
                  >
                    {copySuccess ? <Check size={14} strokeWidth={3} /> : <Copy size={14} strokeWidth={3} />}
                  </button>
                  <button 
                    onClick={() => setSelection(null)}
                    className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors text-slate-400"
                  >
                    <X size={14} strokeWidth={3} />
                  </button>
                </div>
              </div>

              {isAiLoading ? (
                <div className="py-4 space-y-2">
                  <div className="h-3 w-full bg-slate-100 rounded-full animate-pulse" />
                  <div className="h-3 w-[80%] bg-slate-100 rounded-full animate-pulse" />
                </div>
              ) : (
                <div className="text-sm font-medium text-slate-600 leading-relaxed">
                  {aiExplanation}
                </div>
              )}

              <div className="mt-4 flex gap-2">
                {isDictionaryMatch ? (
                  <Link 
                    href="/duolingo/dictionary"
                    className="flex-1 py-2 bg-emerald-500 text-white rounded-xl text-[10px] font-black uppercase tracking-wide border-b-4 border-emerald-700 active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center gap-2"
                  >
                    View in Library <ExternalLink size={12} strokeWidth={3} />
                  </Link>
                ) : (
                  <button className="flex-1 py-2 bg-blue-500 text-white rounded-xl text-[10px] font-black uppercase tracking-wide border-b-4 border-blue-700 active:border-b-0 active:translate-y-1 transition-all">
                    Save to Flashcards
                  </button>
                )}
              </div>

              {/* Tooltip Arrow */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-r-2 border-b-2 border-slate-200 rotate-45" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        /* Prose customization */
        .prose h3 {
          color: #1e293b;
          font-weight: 900;
          letter-spacing: -0.025em;
        }
        .prose ul li::marker {
          color: #34d399;
        }
      `}</style>
    </div>
  );
}
