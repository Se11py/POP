"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, BookA, Lightbulb, Link2, 
  MessageCircle, Beaker, Atom, Dna, X, FunctionSquare, Layers
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
  color: string;
  lightColor: string;
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
    formula: 'a = (v - u) / t',
    color: 'bg-blue-500 border-blue-700 text-white',
    lightColor: 'bg-blue-50 text-blue-600 border-blue-200'
  },
  {
    id: 'isotope',
    word: 'Isotope',
    subject: 'Chemistry',
    meaning: 'Atoms of the same element that have the same number of protons but different numbers of neutrons.',
    example: 'Carbon-12 and Carbon-14 are both isotopes of Carbon.',
    context: 'Isotopes share the same chemical properties because they have the same electron configuration, but they have different physical properties (like mass).',
    goesTogether: ['Proton', 'Neutron', 'Atomic Mass', 'Radioactive', 'Element'],
    elements: ['Carbon-12 (¹²C)', 'Carbon-14 (¹⁴C)', 'Uranium-235 (²³⁵U)'],
    color: 'bg-emerald-500 border-emerald-700 text-white',
    lightColor: 'bg-emerald-50 text-emerald-600 border-emerald-200'
  },
  {
    id: 'mitosis',
    word: 'Mitosis',
    subject: 'Biology',
    meaning: 'A type of cell division that results in two daughter cells each having the same number and kind of chromosomes as the parent nucleus.',
    example: 'Skin cells reproduce rapidly through mitosis to replace dead skin.',
    context: 'Mitosis is essential for growth and repair in multicellular organisms. It consists of four main phases: prophase, metaphase, anaphase, and telophase.',
    goesTogether: ['Cell Division', 'Chromosomes', 'Meiosis', 'Nucleus', 'Diploid'],
    color: 'bg-purple-500 border-purple-700 text-white',
    lightColor: 'bg-purple-50 text-purple-600 border-purple-200'
  },
  {
    id: 'photosynthesis',
    word: 'Photosynthesis',
    subject: 'Biology',
    meaning: 'The process by which green plants and some other organisms use sunlight to synthesize nutrients from carbon dioxide and water.',
    example: 'During photosynthesis, plants release oxygen as a byproduct.',
    context: 'Photosynthesis occurs in the chloroplasts and requires chlorophyll. The general equation is 6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂.',
    goesTogether: ['Chlorophyll', 'Chloroplast', 'Glucose', 'Sunlight', 'Carbon Dioxide'],
    color: 'bg-purple-500 border-purple-700 text-white',
    lightColor: 'bg-purple-50 text-purple-600 border-purple-200'
  },
  {
    id: 'exothermic',
    word: 'Exothermic',
    subject: 'Chemistry',
    meaning: 'A reaction or process accompanied by the release of heat.',
    example: 'The combustion of methane is a highly exothermic reaction.',
    context: 'In an exothermic reaction, the products have less enthalpy (heat energy) than the reactants, resulting in a negative ΔH.',
    goesTogether: ['Endothermic', 'Combustion', 'Enthalpy', 'Heat', 'Reaction'],
    elements: ['CH₄ (Methane)', 'O₂ (Oxygen)', 'CO₂ (Carbon Dioxide)'],
    color: 'bg-emerald-500 border-emerald-700 text-white',
    lightColor: 'bg-emerald-50 text-emerald-600 border-emerald-200'
  },
  {
    id: 'velocity',
    word: 'Velocity',
    subject: 'Physics',
    meaning: 'The speed of something in a given direction.',
    example: 'The wind velocity was 40 km/h from the north.',
    context: 'Velocity is a vector quantity. Speed is the scalar equivalent of velocity (it has magnitude but no direction).',
    goesTogether: ['Speed', 'Acceleration', 'Displacement', 'Vector', 'Direction'],
    formula: 'v = Δs / Δt',
    color: 'bg-blue-500 border-blue-700 text-white',
    lightColor: 'bg-blue-50 text-blue-600 border-blue-200'
  }
];

const getSubjectIcon = (subject: string) => {
  switch (subject) {
    case 'Physics': return <Atom size={16} />;
    case 'Chemistry': return <Beaker size={16} />;
    case 'Biology': return <Dna size={16} />;
    default: return <BookA size={16} />;
  }
};

export default function DefinitionLibrary() {
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
    <div className="min-h-screen bg-slate-50 font-sans pb-24 selection:bg-[#34D399] selection:text-white relative">
      {/* Friendly Global Navbar */}
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
            <Link href="/duolingo/dictionary" className="text-slate-800 transition-colors border-b-2 border-slate-800 pb-1">Dictionary</Link>
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

      <main className="max-w-6xl mx-auto px-6 pt-32 space-y-10">
        {/* Title, Subtitle and Search (Above Selector) */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tighter flex items-center gap-3">
              <BookA className="text-[#34D399]" size={40} strokeWidth={3} />
              Definition Library
            </h1>
            <p className="text-xl font-bold text-slate-400">Master the terminology expected by examiners.</p>
          </div>

          <div className="relative w-full md:w-[400px]">
            <input 
              type="text" 
              placeholder="Search words, meanings..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border-2 border-slate-200 border-b-[6px] rounded-2xl py-4 pl-14 pr-6 text-slate-700 font-bold focus:outline-none focus:border-[#34D399] transition-all text-lg"
            />
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={24} strokeWidth={3} />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          {subjects.map(subject => (
            <button
              key={subject}
              onClick={() => setSelectedSubject(subject)}
              className={`px-6 py-3 rounded-[20px] font-black text-sm transition-all border-2 border-b-[4px] flex items-center gap-2 uppercase tracking-widest ${
                (selectedSubject === subject) || (!selectedSubject && subject === 'All')
                ? 'bg-[#34D399] text-white border-[#059669]'
                : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50 active:border-b-2 active:translate-y-[2px]'
              }`}
            >
              {subject !== 'All' && getSubjectIcon(subject)}
              {subject}
            </button>
          ))}
        </div>

        {/* Compact Word Grid (3-4 columns) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredDefinitions.length > 0 ? (
              filteredDefinitions.map((def) => (
                <motion.div
                  key={def.id}
                  layoutId={`card-${def.id}`}
                  onClick={() => setSelectedWord(def)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-[28px] border-2 border-slate-200 border-b-[8px] p-6 cursor-pointer hover:-translate-y-1 hover:border-[#34D399] transition-transform group flex flex-col justify-between shadow-sm"
                >
                  <div className="space-y-4">
                    <span className={`inline-flex px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border-2 ${def.lightColor} items-center gap-1`}>
                      {getSubjectIcon(def.subject)} {def.subject}
                    </span>
                    <h2 className="text-2xl font-black text-slate-800 tracking-tight group-hover:text-[#34D399] transition-colors line-clamp-1">{def.word}</h2>
                    <p className="text-sm font-bold text-slate-400 line-clamp-3 leading-snug">{def.meaning}</p>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="col-span-full py-20 text-center space-y-4"
              >
                <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-300">
                  <Search size={40} strokeWidth={3} />
                </div>
                <h3 className="text-2xl font-black text-slate-700">No words found!</h3>
                <p className="text-slate-500 font-bold">Try searching for something else or clear the filters.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Expanded Modal Overlay */}
      <AnimatePresence>
        {selectedWord && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedWord(null)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40"
            />
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
              <motion.div
                layoutId={`card-${selectedWord.id}`}
                className="bg-white rounded-[32px] border-2 border-slate-200 border-b-[8px] p-6 md:p-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto pointer-events-auto shadow-2xl"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="space-y-2">
                    <span className={`inline-flex px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border-2 ${selectedWord.lightColor} items-center gap-1.5`}>
                      {getSubjectIcon(selectedWord.subject)} {selectedWord.subject}
                    </span>
                    <h2 className="text-4xl font-black text-slate-800 tracking-tight">{selectedWord.word}</h2>
                  </div>
                  <button 
                    onClick={() => setSelectedWord(null)}
                    className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center text-slate-500 transition-colors"
                  >
                    <X strokeWidth={3} size={20} />
                  </button>
                </div>

                <div className="space-y-8">
                  {/* Meaning */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-400 font-black uppercase tracking-widest text-xs">
                      <BookA size={16} /> Meaning
                    </div>
                    <p className="text-xl font-bold text-slate-700 leading-snug">{selectedWord.meaning}</p>
                  </div>

                  {/* Physics Formula OR Chemistry Elements */}
                  {(selectedWord.formula || selectedWord.elements) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedWord.formula && (
                        <div className="bg-[#F3E8FF] rounded-[20px] p-5 border-2 border-[#D8B4FE]">
                          <div className="flex items-center gap-2 text-[#7B2FF2] font-black uppercase tracking-widest text-xs mb-2">
                            <FunctionSquare size={16} /> Important Formula
                          </div>
                          <p className="text-2xl font-black text-[#6D28D9] font-mono tracking-wide">{selectedWord.formula}</p>
                        </div>
                      )}
                      
                      {selectedWord.elements && (
                        <div className="bg-[#E0F2FE] rounded-[20px] p-5 border-2 border-[#BAE6FD]">
                          <div className="flex items-center gap-2 text-[#0284C7] font-black uppercase tracking-widest text-xs mb-2">
                            <Layers size={16} /> Common Examples
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {selectedWord.elements.map(el => (
                              <span key={el} className="px-2 py-1 bg-white rounded-lg text-xs font-bold text-[#0369A1] shadow-sm">{el}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Example */}
                  <div className="bg-slate-50 rounded-[20px] p-5 border-2 border-slate-100 space-y-2">
                    <div className="flex items-center gap-2 text-slate-400 font-black uppercase tracking-widest text-xs">
                      <MessageCircle size={16} /> Example usage
                    </div>
                    <p className="text-lg font-bold text-slate-600 italic">&quot;{selectedWord.example}&quot;</p>
                  </div>

                  {/* Context */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-amber-500 font-black uppercase tracking-widest text-xs">
                      <Lightbulb size={16} /> Additional Context
                    </div>
                    <p className="text-sm font-bold text-slate-500 leading-relaxed bg-amber-50/50 p-4 rounded-2xl border border-amber-100/50">
                      {selectedWord.context}
                    </p>
                  </div>

                  {/* Goes Together */}
                  <div className="pt-6 border-t-2 border-slate-100 space-y-3">
                    <div className="flex items-center gap-2 text-slate-400 font-black uppercase tracking-widest text-xs">
                      <Link2 size={16} /> Goes Together With
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedWord.goesTogether.map(word => (
                        <span key={word} className="px-4 py-2 bg-slate-100 text-slate-600 rounded-[12px] font-bold text-xs hover:bg-slate-200 cursor-pointer transition-colors border-2 border-slate-200">
                          {word}
                        </span>
                      ))}
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