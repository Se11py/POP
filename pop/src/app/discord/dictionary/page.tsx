"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Beaker, Atom, Dna, X, FunctionSquare, Layers, Hash, Sparkles
} from 'lucide-react';

type Definition = {
  id: string;
  word: string;
  subject: string;
  meaning: string;
  example: string;
  context: string;
  goesTogether: string[];
  formula?: string;
  elements?: string[];
};

const definitionsData: Definition[] = [
  {
    id: 'acceleration',
    word: 'Acceleration',
    subject: 'Physics',
    meaning: 'The rate of change of velocity per unit of time.',
    example: 'The race car has a constant acceleration of 2 m/s² on the straight track.',
    context: 'Acceleration is a vector quantity, meaning it has both magnitude and direction. A negative acceleration (slowing down) is called deceleration.',
    goesTogether: ['Velocity', 'Speed', 'Deceleration', 'Force', 'Mass'],
    formula: 'a = (v - u) / t'
  },
  {
    id: 'isotope',
    word: 'Isotope',
    subject: 'Chemistry',
    meaning: 'Atoms of the same element that have the same number of protons but different numbers of neutrons.',
    example: 'Carbon-12 and Carbon-14 are both isotopes of Carbon.',
    context: 'Isotopes share the same chemical properties because they have the same electron configuration, but they have different physical properties (like mass).',
    goesTogether: ['Proton', 'Neutron', 'Atomic Mass', 'Radioactive', 'Element'],
    elements: ['Carbon-12 (¹²C)', 'Carbon-14 (¹⁴C)', 'Uranium-235 (²³⁵U)']
  },
  {
    id: 'mitosis',
    word: 'Mitosis',
    subject: 'Biology',
    meaning: 'A type of cell division that results in two daughter cells each having the same number and kind of chromosomes as the parent nucleus.',
    example: 'Skin cells reproduce rapidly through mitosis to replace dead skin.',
    context: 'Mitosis is essential for growth and repair in multicellular organisms. It consists of four main phases: prophase, metaphase, anaphase, and telophase.',
    goesTogether: ['Cell Division', 'Chromosomes', 'Meiosis', 'Nucleus', 'Diploid']
  },
  {
    id: 'photosynthesis',
    word: 'Photosynthesis',
    subject: 'Biology',
    meaning: 'The process by which green plants and some other organisms use sunlight to synthesize nutrients from carbon dioxide and water.',
    example: 'During photosynthesis, plants release oxygen as a byproduct.',
    context: 'Photosynthesis occurs in the chloroplasts and requires chlorophyll. The general equation is 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂.',
    goesTogether: ['Chlorophyll', 'Chloroplast', 'Glucose', 'Sunlight', 'Carbon Dioxide']
  },
  {
    id: 'exothermic',
    word: 'Exothermic',
    subject: 'Chemistry',
    meaning: 'A reaction or process accompanied by the release of heat.',
    example: 'The combustion of methane is a highly exothermic reaction.',
    context: 'In an exothermic reaction, the products have less enthalpy (heat energy) than the reactants, resulting in a negative ΔH.',
    goesTogether: ['Endothermic', 'Combustion', 'Enthalpy', 'Heat', 'Reaction'],
    elements: ['CH₄ (Methane)', 'O₂ (Oxygen)', 'CO₂ (Carbon Dioxide)']
  },
  {
    id: 'velocity',
    word: 'Velocity',
    subject: 'Physics',
    meaning: 'The speed of something in a given direction.',
    example: 'The wind velocity was 40 km/h from the north.',
    context: 'Velocity is a vector quantity. Speed is the scalar equivalent of velocity (it has magnitude but no direction).',
    goesTogether: ['Speed', 'Acceleration', 'Displacement', 'Vector', 'Direction'],
    formula: 'v = Δs / Δt'
  }
];

const getSubjectIcon = (subject: string) => {
  switch (subject) {
    case 'Physics': return <Atom size={14} className="text-[#5865F2]" />;
    case 'Chemistry': return <Beaker size={14} className="text-[#23A559]" />;
    case 'Biology': return <Dna size={14} className="text-[#FEE75C]" />;
    default: return <Hash size={14} className="text-[#80848E]" />;
  }
};

const getSubjectStyles = (subject: string) => {
  switch (subject) {
    case 'Physics': return 'text-[#5865F2] bg-[#5865F2]/10 border-[#5865F2]/20';
    case 'Chemistry': return 'text-[#23A559] bg-[#23A559]/10 border-[#23A559]/20';
    case 'Biology': return 'text-[#FEE75C] bg-[#FEE75C]/10 border-[#FEE75C]/20';
    default: return 'text-[#B5BAC1] bg-[#35373C] border-[#1E1F22]';
  }
};

export default function DiscordDefinitionLibrary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedWord, setSelectedWord] = useState<Definition | null>(null);

  const subjects = ['All', ...Array.from(new Set(definitionsData.map(d => d.subject)))];

  const filteredDefinitions = definitionsData.filter(def => {
    const matchesSearch = def.word.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          def.meaning.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject = selectedSubject && selectedSubject !== 'All' ? def.subject === selectedSubject : true;
    return matchesSearch && matchesSubject;
  });

  return (
    <div className="min-h-screen bg-[#313338] text-[#F2F3F5] font-sans selection:bg-[#5865F2]/40 selection:text-white relative">
      
      {/* Discord-style Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-[#1E1F22] border-b border-[#111214] shadow-md">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <Link href="/discord" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-xl bg-[#5865F2] flex items-center justify-center transition-transform group-hover:rotate-12 group-hover:scale-105">
              <span className="text-white text-sm font-bold tracking-tighter">P</span>
            </div>
            <span className="font-bold text-base tracking-wide text-white">POP Studying</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#B5BAC1]">
            <Link href="/discord/classes" className="hover:text-[#F2F3F5] transition-colors">Classes</Link>
            <Link href="/discord/flashcards" className="hover:text-[#F2F3F5] transition-colors">Flashcards</Link>
            <Link href="/discord/dictionary" className="text-[#F2F3F5] transition-colors">Dictionary</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/sign-in" className="hidden md:block text-[#B5BAC1] hover:text-[#F2F3F5] transition-colors text-sm font-semibold">
              Login
            </Link>
            <Link href="/sign-up" className="px-4 py-1.5 bg-[#5865F2] text-white hover:bg-[#4752C4] rounded-[3px] transition-colors text-sm font-medium">
              Register
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-28 pb-24 space-y-10">
        {/* Title, Subtitle and Search (Discord Channel Style) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[#3F4147] pb-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#5865F2]">
               <Sparkles size={20} fill="currentColor" />
               <span className="text-xs font-bold uppercase tracking-[0.2em]">Verified Knowledge</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <Hash className="text-[#80848E]" size={40} />
              definition-library
            </h1>
            <p className="text-lg font-medium text-[#B5BAC1]">Technical terminology documentation for high-stakes examinations.</p>
          </div>

          <div className="relative w-full lg:w-[450px]">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#80848E]">
               <Search size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Search concepts or definitions..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1E1F22] border border-[#111214] rounded-[4px] py-3 pl-12 pr-4 text-[#DBDEE1] font-medium focus:outline-none focus:ring-2 focus:ring-[#5865F2]/50 transition-all placeholder:text-[#80848E]"
            />
          </div>
        </div>

        {/* Filters (Discord Category/Role Style) */}
        <div className="flex flex-wrap gap-2">
          {subjects.map(subject => (
            <button
              key={subject}
              onClick={() => setSelectedSubject(subject)}
              className={`px-4 py-1.5 rounded-[4px] font-bold text-xs transition-all flex items-center gap-2 border uppercase tracking-wider ${
                (selectedSubject === subject) || (!selectedSubject && subject === 'All')
                ? 'bg-[#3F4147] text-white border-[#4E5058] shadow-lg'
                : 'bg-[#2B2D31] text-[#B5BAC1] border-[#1E1F22] hover:bg-[#35373C] hover:text-[#DBDEE1]'
              }`}
            >
              {subject !== 'All' ? getSubjectIcon(subject) : <Layers size={14} className="text-[#80848E]" />}
              {subject}
            </button>
          ))}
        </div>

        {/* Compact Word Grid (Discord Message/Member Card Style) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredDefinitions.length > 0 ? (
              filteredDefinitions.map((def) => (
                <motion.div
                  key={def.id}
                  layoutId={`card-${def.id}`}
                  onClick={() => setSelectedWord(def)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#2B2D31] rounded-[8px] border border-[#1E1F22] p-5 cursor-pointer hover:bg-[#35373C] hover:border-[#4E5058] transition-all group flex flex-col justify-between shadow-sm relative overflow-hidden"
                >
                  {/* Subject accent bar */}
                  <div className={`absolute top-0 left-0 w-1 h-full ${
                    def.subject === 'Physics' ? 'bg-[#5865F2]' : 
                    def.subject === 'Chemistry' ? 'bg-[#23A559]' : 'bg-[#FEE75C]'
                  }`} />
                  
                  <div className="space-y-3">
                    <span className={`inline-flex px-2 py-0.5 rounded-[3px] text-[10px] font-bold uppercase tracking-widest border ${getSubjectStyles(def.subject)} items-center gap-1.5`}>
                      {getSubjectIcon(def.subject)} {def.subject}
                    </span>
                    <h2 className="text-lg font-bold text-white tracking-wide group-hover:text-white transition-colors flex items-center gap-2">
                       <Hash size={16} className="text-[#80848E]" />
                       {def.word.toLowerCase()}
                    </h2>
                    <p className="text-xs font-medium text-[#B5BAC1] line-clamp-3 leading-relaxed">{def.meaning}</p>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="col-span-full py-32 text-center space-y-4"
              >
                <div className="w-20 h-20 bg-[#2B2D31] rounded-full flex items-center justify-center mx-auto text-[#4E5058]">
                  <Search size={32} />
                </div>
                <h3 className="text-xl font-bold text-white">No matches found</h3>
                <p className="text-[#80848E] font-medium text-sm">We couldn&apos;t find any terms matching your query.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Expanded Modal Overlay (Discord "Full Modal" Style) */}
      <AnimatePresence>
        {selectedWord && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedWord(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-[2px] z-40"
            />
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
              <motion.div
                layoutId={`card-${selectedWord.id}`}
                className="bg-[#313338] rounded-[12px] border border-[#1E1F22] w-full max-w-xl max-h-[85vh] overflow-y-auto pointer-events-auto shadow-2xl relative scrollbar-thin scrollbar-thumb-[#1E1F22] scrollbar-track-transparent"
              >
                {/* Header/Cover - Discord Profile Style */}
                <div className={`h-24 w-full relative ${
                  selectedWord.subject === 'Physics' ? 'bg-[#5865F2]' : 
                  selectedWord.subject === 'Chemistry' ? 'bg-[#23A559]' : 'bg-[#FEE75C]'
                }`}>
                   <button 
                    onClick={() => setSelectedWord(null)}
                    className="absolute top-4 right-4 w-8 h-8 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center transition-colors z-50"
                  >
                    <X size={18} strokeWidth={3} />
                  </button>
                </div>

                <div className="px-6 md:px-8 pb-8">
                  <div className="relative -mt-12 mb-4">
                    <div className="w-24 h-24 bg-[#313338] rounded-[16px] border-[6px] border-[#313338] flex items-center justify-center shadow-2xl">
                       <div className={`w-full h-full rounded-[10px] flex items-center justify-center text-white ${
                         selectedWord.subject === 'Physics' ? 'bg-[#5865F2]' : 
                         selectedWord.subject === 'Chemistry' ? 'bg-[#23A559]' : 'bg-[#FEE75C]'
                       }`}>
                          {React.cloneElement(getSubjectIcon(selectedWord.subject) as any, { size: 40, className: "text-white" })}
                       </div>
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <h2 className="text-3xl font-extrabold text-white flex items-center gap-2">
                       <Hash size={24} className="text-[#80848E]" />
                       {selectedWord.word.toLowerCase()}
                    </h2>
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex px-2 py-0.5 rounded-[3px] text-[10px] font-bold uppercase tracking-widest border ${getSubjectStyles(selectedWord.subject)}`}>
                        {selectedWord.subject} Specialist
                      </span>
                    </div>
                  </div>

                  <div className="mt-8 space-y-6">
                    {/* Meaning - Discord Post Style */}
                    <div className="space-y-1.5">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-[#80848E]">Definition</div>
                      <div className="bg-[#2B2D31] rounded-[8px] p-4 border border-[#1E1F22]">
                         <p className="text-base font-medium text-[#DBDEE1] leading-relaxed italic border-l-[3px] border-[#4E5058] pl-4">{selectedWord.meaning}</p>
                      </div>
                    </div>

                    {/* Physics Formula OR Chemistry Elements */}
                    {(selectedWord.formula || selectedWord.elements) && (
                      <div className="grid grid-cols-1 gap-4">
                        {selectedWord.formula && (
                          <div className="bg-[#1E1F22] rounded-[8px] p-4 border border-[#111214]">
                            <div className="flex items-center gap-2 text-[#5865F2] font-bold uppercase tracking-widest text-[9px] mb-2.5">
                              <FunctionSquare size={12} /> computational-logic
                            </div>
                            <div className="bg-[#2B2D31] px-4 py-3 rounded border border-[#1E1F22] flex items-center justify-center">
                               <p className="text-xl font-bold text-white font-mono tracking-wider">{selectedWord.formula}</p>
                            </div>
                          </div>
                        )}
                        
                        {selectedWord.elements && (
                          <div className="bg-[#1E1F22] rounded-[8px] p-4 border border-[#111214]">
                            <div className="flex items-center gap-2 text-[#23A559] font-bold uppercase tracking-widest text-[9px] mb-2.5">
                              <Layers size={12} /> reference-elements
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {selectedWord.elements.map(el => (
                                <span key={el} className="px-2 py-1 bg-[#2B2D31] rounded-[4px] text-xs font-bold text-[#DBDEE1] border border-[#1E1F22]">{el}</span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Example */}
                    <div className="space-y-1.5">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-[#80848E]">Example Usage</div>
                      <div className="bg-[#2B2D31] rounded-[8px] p-4 border border-[#1E1F22] flex gap-3">
                         <div className={`w-9 h-9 rounded-full shrink-0 flex items-center justify-center text-[10px] font-bold text-white ${
                           selectedWord.subject === 'Physics' ? 'bg-[#5865F2]' : 
                           selectedWord.subject === 'Chemistry' ? 'bg-[#23A559]' : 'bg-[#FEE75C]'
                         }`}>
                           {selectedWord.word.substring(0, 2).toUpperCase()}
                         </div>
                         <div className="space-y-0.5">
                            <div className="flex items-center gap-1.5">
                               <span className="text-sm font-bold text-white">Examiner Model</span>
                               <span className="text-[9px] font-bold bg-[#5865F2] text-white px-1 py-0.25 rounded-[3px] uppercase">Bot</span>
                               <span className="text-[10px] font-medium text-[#80848E]">Today at 4:20 PM</span>
                            </div>
                            <p className="text-sm text-[#DBDEE1] font-medium leading-relaxed">&quot;{selectedWord.example}&quot;</p>
                         </div>
                      </div>
                    </div>

                    {/* Context */}
                    <div className="space-y-1.5">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-[#80848E]">Technical Notes</div>
                      <p className="text-xs font-medium text-[#B5BAC1] leading-relaxed bg-[#1E1F22] p-4 rounded-[8px] border-l-[3px] border-[#FEE75C]">
                        {selectedWord.context}
                      </p>
                    </div>

                    {/* Goes Together */}
                    <div className="pt-4 border-t border-[#3F4147] space-y-2">
                      <div className="text-[10px] font-bold uppercase tracking-widest text-[#80848E]">Related Concepts</div>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedWord.goesTogether.map(word => (
                          <span key={word} className="px-2 py-1 bg-[#2B2D31] text-[#DBDEE1] rounded-[4px] font-bold text-[10px] hover:bg-[#35373C] cursor-pointer transition-colors border border-[#1E1F22]">
                            #{word.toLowerCase().replace(' ', '-')}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}