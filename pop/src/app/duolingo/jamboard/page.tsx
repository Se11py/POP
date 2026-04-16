"use client";

import { Tldraw } from 'tldraw';
import 'tldraw/tldraw.css';
import Link from 'next/link';

export default function DuolingoJamboard() {
  return (
    <div className="h-screen bg-[#FAF9F6] text-slate-800 font-sans selection:bg-[#34D399] selection:text-white flex flex-col">
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
            <Link href="/duolingo/dashboard" className="hover:text-slate-800 transition-colors">Dashboard</Link>
            <Link href="/duolingo/classes" className="hover:text-slate-800 transition-colors">Classes</Link>
            <Link href="/duolingo/flashcards" className="hover:text-slate-800 transition-colors">Flashcards</Link>
            <Link href="/duolingo/dictionary" className="hover:text-slate-800 transition-colors">Dictionary</Link>
            <Link href="/duolingo/jamboard" className="text-slate-800 transition-colors">Jamboard</Link>
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

      {/* Tldraw Canvas */}
      <div className="flex-1 mt-[76px] relative">
        <Tldraw />
      </div>
    </div>
  );
}

