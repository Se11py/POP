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
  Hash,
  Volume2,
  Users,
  Settings,
  MoreVertical,
  HelpCircle,
  MessageSquare,
  Copy,
  ExternalLink,
  Check,
  BookOpen
} from 'lucide-react';

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
        <div class="bg-[#2B2D31] border-l-4 border-[#5865F2] p-4 my-6 rounded-r-lg shadow-md">
          <p class="text-[#5865F2] font-bold flex items-center gap-2 mb-1 uppercase text-xs tracking-wider">
            <span class="text-sm">💡</span> Key Concept
          </p>
          <p class="text-[#DBDEE1] italic text-sm leading-relaxed">The Standard Model is the theoretical framework that describes the electromagnetic, weak, and strong nuclear interactions.</p>
        </div>
      `
    },
    {
      id: "quarks",
      title: "Quarks and Leptons",
      content: `
        <p>Matter particles are divided into two main groups: <strong>Quarks</strong> and <strong>Leptons</strong>. Each group consists of six particles, which are related in pairs, or "generations".</p>
        <h3 class="text-xl font-bold mt-8 mb-4 text-white">The Six Quarks</h3>
        <ul class="list-disc ml-6 space-y-3 text-[#DBDEE1]">
          <li><strong>Up (u)</strong> and <strong>Down (d)</strong>: The lightest and most stable.</li>
          <li><strong>Charm (c)</strong> and <strong>Strange (s)</strong>: Heavier and found in high-energy collisions.</li>
          <li><strong>Top (t)</strong> and <strong>Bottom (b)</strong>: The heaviest and most recently discovered.</li>
        </ul>
        <p class="mt-6">Protons are made of <strong>two up quarks and one down quark (uud)</strong>, while neutrons are made of <strong>one up quark and two down quarks (udd)</strong>.</p>
      `
    },
    {
      id: "forces",
      title: "Fundamental Forces",
      content: `
        <p>There are four fundamental forces in the universe, three of which are described by the Standard Model:</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
          <div class="p-5 bg-[#2B2D31] rounded-xl border border-[#35373C] hover:border-[#5865F2]/50 transition-colors">
            <h4 class="font-extrabold text-[#EB459E] mb-2 uppercase tracking-wider text-xs">Strong Nuclear</h4>
            <p class="text-xs text-[#B5BAC1] leading-relaxed">Holds atomic nuclei together. Carried by the <strong>Gluon</strong>.</p>
          </div>
          <div class="p-5 bg-[#2B2D31] rounded-xl border border-[#35373C] hover:border-[#5865F2]/50 transition-colors">
            <h4 class="font-extrabold text-[#FEE75C] mb-2 uppercase tracking-wider text-xs">Electromagnetic</h4>
            <p class="text-xs text-[#B5BAC1] leading-relaxed">Responsible for electricity and magnetism. Carried by the <strong>Photon</strong>.</p>
          </div>
          <div class="p-5 bg-[#2B2D31] rounded-xl border border-[#35373C] hover:border-[#5865F2]/50 transition-colors">
            <h4 class="font-extrabold text-[#5865F2] mb-2 uppercase tracking-wider text-xs">Weak Nuclear</h4>
            <p class="text-xs text-[#B5BAC1] leading-relaxed">Responsible for radioactive decay. Carried by <strong>W and Z bosons</strong>.</p>
          </div>
        </div>
        <p class="text-[#B5BAC1] italic text-sm">Note: Gravity is the fourth force but is currently not part of the Standard Model.</p>
      `
    }
  ]
};

// Simplified local dictionary database
const DICTIONARY_DATABASE: Record<string, { definition: string, category: string }> = {
  "distance": { definition: "The total length of the path travelled by an object, measured in metres (m). Distance is a scalar quantity and does not depend on direction.", category: "Physics" },
  "displacement": { definition: "The straight-line distance from initial position to final position, measured in metres (m), with direction specified. Displacement is a vector quantity.", category: "Physics" },
  "velocity": { definition: "The rate of change of displacement with respect to time, measured in metres per second (m/s), with direction specified.", category: "Physics" },
  "acceleration": { definition: "The rate of change of velocity with respect to time, measured in metres per second squared (m/s²).", category: "Physics" },
  "quarks": { definition: "Elementary particles and a fundamental constituent of matter. Quarks combine to form composite particles called hadrons (protons/neutrons).", category: "Physics" },
  "bosons": { definition: "Force-carrier particles that mediate fundamental interactions. For example, photons carry the electromagnetic force.", category: "Physics" }
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
    case 'Foundation': return 'bg-[#23A559]';
    case 'Intermediate': return 'bg-[#5865F2]';
    case 'Advanced': return 'bg-[#EB459E]';
    default: return 'bg-[#4E5058]';
  }
};

export default function DiscordLearnPage() {
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
      const mainContent = document.getElementById('main-scroll-area');
      if (mainContent) {
        const totalHeight = mainContent.scrollHeight - mainContent.clientHeight;
        const progress = (mainContent.scrollTop / totalHeight) * 100;
        setReadingProgress(progress);
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      const selectedText = window.getSelection()?.toString().trim();
      
      if (selectedText && selectedText.length > 2 && selectedText.length < 100) {
        const isWithinContent = (e.target as HTMLElement).closest('.prose');
        if (isWithinContent) {
          setSelection({
            text: selectedText,
            x: e.clientX,
            y: e.clientY
          });
          processHighlightedText(selectedText);
        }
      } else {
        if (!(e.target as HTMLElement).closest('.ai-tooltip')) {
          setSelection(null);
          setAiExplanation(null);
          setIsDictionaryMatch(false);
        }
      }
    };

    const mainArea = document.getElementById('main-scroll-area');
    mainArea?.addEventListener('scroll', handleScroll);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      mainArea?.removeEventListener('scroll', handleScroll);
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
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="flex h-screen bg-[#313338] text-[#DBDEE1] font-sans overflow-hidden">
      
      {/* 1. Channel Sidebar (The Journey) */}
      <aside className="w-64 bg-[#2B2D31] flex flex-col shrink-0 hidden md:flex border-r border-[#111214]">
        <div className="h-12 px-4 flex items-center shadow-sm border-b border-[#111214] shrink-0">
          <h2 className="font-bold text-white truncate flex items-center gap-2">
            Physics Class <ChevronRight size={14} className="rotate-90" />
          </h2>
        </div>
        
        <div className="flex-1 overflow-y-auto p-3 space-y-6 custom-scrollbar">
          {/* Progress Overview */}
          <div className="px-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-extrabold text-[#B5BAC1] uppercase tracking-wider">Mission Progress</span>
              <span className="text-[10px] font-bold text-[#23A559]">45%</span>
            </div>
            <div className="w-full h-1 bg-[#1E1F22] rounded-full overflow-hidden">
              <div className="h-full bg-[#23A559] w-[45%]" />
            </div>
          </div>

          {/* Scannable Journey Map */}
          <div className="space-y-4">
            <h3 className="px-2 text-[11px] font-extrabold text-[#B5BAC1] uppercase tracking-widest flex items-center justify-between">
              Your Journey <ArrowRight size={12} />
            </h3>
            <div className="space-y-0.5">
              {JOURNEY_DATA.topics.map((topic) => {
                const isCurrent = topic.status === 'current';
                const isCompleted = topic.status === 'completed';
                const isNext = topic.status === 'next';
                const isLocked = topic.status === 'locked';

                return (
                  <button 
                    key={topic.id}
                    className={`w-full text-left px-2 py-1.5 rounded-md flex items-center gap-3 group transition-colors ${
                      isCurrent ? 'bg-[#404249] text-white' : 'hover:bg-[#35373C] text-[#949BA4]'
                    }`}
                  >
                    <div className="relative shrink-0">
                      <Hash size={18} className={isCurrent ? 'text-white' : 'text-[#80848E]'} />
                      <div className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border-2 border-[#2B2D31] ${getLevelColor(topic.level)} ${isLocked ? 'opacity-30' : ''}`} />
                    </div>
                    <span className={`text-sm font-semibold truncate ${isCurrent ? 'text-[#F2F3F5]' : 'group-hover:text-[#DBDEE1]'}`}>
                      {topic.title}
                    </span>
                    {isCompleted && <CheckCircle2 size={14} className="ml-auto text-[#23A559]" />}
                    {isNext && <div className="ml-auto w-2 h-2 rounded-full bg-[#FEE75C] shadow-[0_0_8px_#FEE75C]" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </aside>

      {/* 3. Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Header Bar */}
        <header className="h-12 bg-[#313338] shadow-sm border-b border-[#111214] flex items-center justify-between px-4 shrink-0 z-20">
          <div className="flex items-center gap-2 overflow-hidden">
            <Menu className="md:hidden cursor-pointer" onClick={() => setIsSidebarOpen(true)} />
            <Hash size={24} className="text-[#80848E] shrink-0" />
            <h1 className="font-bold text-white truncate">{PHYSICS_CONTENT.title}</h1>
            <div className="hidden sm:flex items-center gap-2 ml-4">
              <span className="px-2 py-0.5 bg-[#2B2D31] text-[10px] font-bold rounded text-[#B5BAC1] border border-[#1E1F22]">
                {PHYSICS_CONTENT.level}
              </span>
              <div className="w-[1px] h-4 bg-[#4E5058]" />
              <span className="text-xs text-[#B5BAC1] font-medium italic truncate">{PHYSICS_CONTENT.topic}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-[#B5BAC1]">
            <Clock size={20} className="hidden sm:block" />
            <Bookmark size={20} className="cursor-pointer hover:text-white" />
            <Users size={20} className="cursor-pointer hover:text-white" />
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search Section" 
                className="bg-[#1E1F22] rounded-md px-2 py-1 text-xs w-32 focus:w-48 transition-all outline-none border-none hidden lg:block"
              />
            </div>
            <HelpCircle size={20} className="cursor-pointer hover:text-white" />
          </div>
        </header>

        {/* Content Scroll Area */}
        <div id="main-scroll-area" className="flex-1 overflow-y-auto relative custom-scrollbar bg-[#313338]">
          {/* Horizontal Section Jump Bar */}
          <div className="sticky top-0 z-10 bg-[#313338]/95 backdrop-blur-sm border-b border-[#111214] px-6 py-3 flex items-center gap-2 overflow-x-auto no-scrollbar">
            <span className="text-[10px] font-extrabold text-[#80848E] uppercase tracking-widest shrink-0">Sections:</span>
            {PHYSICS_CONTENT.sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`px-3 py-1 rounded-[4px] text-xs font-semibold transition-all shrink-0 ${
                  activeSection === section.id 
                    ? 'bg-[#4E5058] text-white shadow-sm' 
                    : 'text-[#B5BAC1] hover:bg-[#35373C] hover:text-[#DBDEE1]'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>

          <main className="max-w-4xl mx-auto px-6 py-12 pb-32">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Introduction Card */}
              <div className="mb-16 border-b border-[#35373C] pb-12">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#EB459E]/20 flex items-center justify-center text-[#EB459E]">
                    <Zap size={18} fill="currentColor" />
                  </div>
                  <span className="text-[11px] font-extrabold text-[#EB459E] uppercase tracking-widest">A-Level Course Pack</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                  {PHYSICS_CONTENT.title}
                </h1>
                <p className="text-lg text-[#B5BAC1] leading-relaxed font-medium">
                  Welcome to the deep-dive into the fundamental components of our universe. Today we examine the invisible forces and particles that hold everything together.
                </p>
              </div>

              {/* Render Sections */}
              <div className="space-y-24">
                {PHYSICS_CONTENT.sections.map((section, idx) => (
                  <section 
                    key={section.id} 
                    id={section.id}
                    className="scroll-mt-24 group"
                  >
                    <div className="flex items-start gap-4 mb-8">
                      <div className="w-10 h-10 rounded-xl bg-[#5865F2] flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                        <span className="font-extrabold text-lg">{idx + 1}</span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight pt-1">
                        {section.title}
                      </h2>
                    </div>
                    <div 
                      className="prose prose-invert prose-lg max-w-none prose-p:text-[#DBDEE1] prose-p:leading-relaxed prose-strong:text-white prose-strong:font-extrabold prose-headings:text-white prose-li:text-[#DBDEE1]"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </section>
                ))}
              </div>

              {/* Quiz Section - Discord Style Assessment */}
              <div className="mt-32 pt-16 border-t border-[#35373C]">
                {!quizStarted ? (
                  <div className="bg-[#2B2D31] rounded-2xl border border-[#1E1F22] p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#5865F2]/10 rounded-full blur-3xl" />
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-[#23A559]/20 rounded-2xl flex items-center justify-center text-[#23A559] mx-auto mb-8">
                        <Zap size={32} fill="currentColor" />
                      </div>
                      <h2 className="text-3xl font-extrabold text-white mb-4 tracking-tight">Mission Validation</h2>
                      <p className="text-[#B5BAC1] font-medium mb-10 max-w-md mx-auto leading-relaxed">
                        Complete the short assessment to verify your understanding of <span className="text-[#F2F3F5] font-bold">"{PHYSICS_CONTENT.title}"</span> and unlock the next channel.
                      </p>
                      <button 
                        onClick={() => setQuizStarted(true)}
                        className="px-10 py-3.5 bg-[#5865F2] text-white rounded-[4px] font-bold text-base hover:bg-[#4752C4] transition-all flex items-center gap-3 mx-auto shadow-lg active:scale-95"
                      >
                        Start Assessment <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-[#2B2D31] rounded-2xl border border-[#1E1F22] p-8 md:p-12 shadow-2xl min-h-[500px] flex flex-col">
                    <div className="flex justify-between items-center mb-12">
                      <div className="flex gap-1.5">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                          <div key={i} className={`w-2.5 h-2.5 rounded-full ${i === 1 ? 'bg-[#5865F2] shadow-[0_0_10px_#5865F2]' : 'bg-[#1E1F22]'}`}></div>
                        ))}
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#B5BAC1]">Question 1 of 10</span>
                    </div>

                    <div className="flex-1 space-y-10">
                      <div className="space-y-3">
                        <span className="text-[10px] font-extrabold text-[#5865F2] uppercase tracking-[0.2em] block">System Prompt</span>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                          Which exchange boson is responsible for the strong nuclear force?
                        </h3>
                      </div>
                      
                      <div className="grid gap-3 max-w-2xl">
                        {['Photon', 'W Boson', 'Gluon', 'Graviton'].map((option, idx) => (
                          <button 
                            key={idx}
                            className="w-full text-left p-4 bg-[#1E1F22] border border-[#35373C] rounded-lg font-bold text-base hover:bg-[#35373C] hover:border-[#5865F2]/50 transition-all flex items-center justify-between group active:scale-[0.99]"
                          >
                            <div className="flex items-center gap-4">
                              <span className="text-[#80848E] font-mono group-hover:text-[#5865F2]">{String.fromCharCode(65 + idx)}</span>
                              <span className="text-[#DBDEE1] group-hover:text-white">{option}</span>
                            </div>
                            <div className="w-5 h-5 rounded-full border-2 border-[#4E5058] group-hover:border-[#5865F2] transition-colors" />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mt-16 pt-8 border-t border-[#1E1F22] flex justify-between items-center">
                      <button onClick={() => setQuizStarted(false)} className="text-[#80848E] font-bold text-xs hover:text-[#F2F3F5] transition-colors">
                        Abandon Assessment
                      </button>
                      <button className="px-8 py-2.5 bg-[#4E5058] text-white rounded-[4px] font-bold text-sm opacity-50 cursor-not-allowed">
                        Next Question
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Lesson Navigation - Channel Jumpers */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Previous Lesson */}
                <button className="flex items-center gap-4 p-5 bg-[#2B2D31] border border-[#1E1F22] rounded-xl text-left hover:bg-[#35373C] transition-all group">
                  <div className="w-10 h-10 rounded-full bg-[#1E1F22] flex items-center justify-center text-[#80848E] group-hover:text-white transition-colors">
                    <ChevronLeft size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-[#80848E] uppercase tracking-widest block mb-0.5">Previous Topic</span>
                    <h4 className="font-bold text-[#F2F3F5] text-base truncate">Nuclear Radiation</h4>
                  </div>
                </button>

                {/* Next Lesson */}
                <button className="flex items-center justify-between p-5 bg-[#2B2D31] border-2 border-[#5865F2]/20 rounded-xl text-left hover:border-[#5865F2]/50 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#5865F2] flex items-center justify-center text-white shadow-lg">
                      <ChevronRight size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold text-[#5865F2] uppercase tracking-widest block mb-0.5">Next Mission</span>
                      <h4 className="font-bold text-white text-base truncate">Quantum Phenomena</h4>
                    </div>
                  </div>
                  <div className="text-[10px] font-bold text-[#23A559] bg-[#23A559]/10 px-2 py-1 rounded uppercase tracking-wider hidden sm:block">
                    Unlock +20 XP
                  </div>
                </button>
              </div>
            </motion.div>
          </main>
        </div>
      </div>

      {/* Floating Chat Button (Iconic Discord Element) */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="w-14 h-14 bg-[#5865F2] rounded-full shadow-2xl flex items-center justify-center text-white cursor-pointer hover:bg-[#4752C4] hover:-translate-y-1 transition-all active:scale-95 group">
          <MessageSquare size={28} />
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#ED4245] rounded-full border-4 border-[#313338] flex items-center justify-center text-[10px] font-black">3</div>
        </div>
      </div>

      {/* AI Explanation Tooltip - Discord Style */}
      <AnimatePresence>
        {selection && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="fixed z-[200] ai-tooltip"
            style={{ 
              left: Math.min(window.innerWidth - 320, Math.max(20, selection.x - 150)), 
              top: selection.y - 180 
            }}
          >
            <div className="w-80 bg-[#1E1F22] rounded-lg border border-[#111214] shadow-2xl overflow-hidden relative">
              {/* Header */}
              <div className="bg-[#2B2D31] px-4 py-2 border-b border-[#111214] flex items-center gap-3">
                <div className={`w-6 h-6 rounded flex items-center justify-center text-white ${isDictionaryMatch ? 'bg-[#23A559]' : 'bg-[#5865F2]'}`}>
                  {isDictionaryMatch ? <BookOpen size={14} /> : <Sparkles size={14} fill="currentColor" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-extrabold text-[#B5BAC1] uppercase tracking-widest leading-none">
                    {isDictionaryMatch ? 'Dictionary' : 'AI Assistant'}
                  </p>
                </div>
                <div className="flex gap-1">
                  <button 
                    onClick={handleCopy}
                    className={`p-1 rounded transition-all ${copySuccess ? 'text-[#23A559]' : 'text-[#B5BAC1] hover:text-[#F2F3F5]'}`}
                    title="Copy selection"
                  >
                    {copySuccess ? <Check size={14} strokeWidth={3} /> : <Copy size={14} />}
                  </button>
                  <button 
                    onClick={() => setSelection(null)}
                    className="p-1 text-[#B5BAC1] hover:text-[#F2F3F5] transition-colors"
                  >
                    <X size={14} />
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="p-4">
                <p className="text-[11px] font-bold text-[#80848E] uppercase tracking-wide mb-2 italic">Highlighting: "{selection.text}"</p>
                
                {isAiLoading ? (
                  <div className="py-2 space-y-2">
                    <div className="h-2 w-full bg-[#2B2D31] rounded animate-pulse" />
                    <div className="h-2 w-[80%] bg-[#2B2D31] rounded animate-pulse" />
                  </div>
                ) : (
                  <div className="text-xs font-medium text-[#DBDEE1] leading-relaxed">
                    {aiExplanation}
                  </div>
                )}

                <div className="mt-4 pt-4 border-t border-[#2B2D31]">
                  {isDictionaryMatch ? (
                    <Link 
                      href="/discord/dictionary"
                      className="w-full py-2 bg-[#23A559] hover:bg-[#1A8344] text-white rounded text-[10px] font-bold uppercase tracking-wide transition-all flex items-center justify-center gap-2"
                    >
                      Browse Dictionary <ExternalLink size={12} />
                    </Link>
                  ) : (
                    <button className="w-full py-2 bg-[#4E5058] hover:bg-[#6D6F78] text-white rounded text-[10px] font-bold uppercase tracking-wide transition-all">
                      Add to Notes
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
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
        
        /* Prose customization */
        .prose strong {
          color: white;
        }
        .prose ul li::marker {
          color: #5865F2;
        }
      `}</style>
    </div>
  );
}
