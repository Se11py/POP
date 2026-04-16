"use client";

import React, { useState, useEffect } from 'react';
import Footer from '@/components/Layout/Footer';
import Navbar from '@/components/Layout/Navbar';
import Link from 'next/link';

export default function Home() {
  const [resourceTab, setResourceTab] = useState('notes');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const readinessStats = [
    { subject: 'Math Paper 2', score: '92%', status: 'On track' },
    { subject: 'Physics HL', score: '88%', status: 'Reviewed' },
    { subject: 'Chemistry ATP', score: '86%', status: 'Needs recap' }
  ];
  const focusBlocks = [
    { title: 'Functions', detail: 'IB Math AA', time: '08:30' },
    { title: 'Energetics', detail: 'Chemistry HL', time: '11:00' },
    { title: 'Stoichiometry', detail: 'Chemistry SL', time: '14:30' }
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
      id: '01'
    },
    {
      title: 'Mid-week check',
      description: 'Mentor replies to your submission with annotated feedback and a 48-hour action note.',
      detail: 'Delivered in-app',
      id: '02'
    },
    {
      title: 'Studio hour',
      description: 'Join a low-light focus room with 12 peers, swap questions, then log next plans.',
      detail: 'Thursday 19:00',
      id: '03'
    }
  ];
  
  type ResourcePanel = {
    eyebrow: string;
    heading: string;
    intro: string;
    accent: string;
    stats: { label: string; value: string }[];
    bullets: string[];
    cards: { title: string; meta: string; detail: string }[];
    media: { src: string; caption: string };
  };

  const resourcePanels: Record<string, ResourcePanel> = {
    notes: {
      eyebrow: 'Study notes',
      heading: 'Zero-fluff notes shaped by actual scorers.',
      intro: 'Expert-written notes with exam-focused content and visual aids.',
      accent: 'from-indigo-400 to-cyan-400',
      stats: [
        { label: 'Topic packs', value: '126' },
        { label: 'Avg. minutes saved', value: '18' },
        { label: 'Inline callouts', value: '312' }
      ],
      bullets: [
        'Margin cues show where method marks appear so you never overwrite the obvious.',
        'Color-coded diagrams you can paste into IA drafts without reformatting.',
        'Each pack ends with two “if you only have 5 minutes” prompts.'
      ],
      cards: [
        { title: 'Math AA HL · Functions', meta: '3-page digest · PDF', detail: 'Domains, compositions, and the exact sentence examiners want before graphing.' },
        { title: 'Chemistry ATP · Energetics', meta: 'Lab briefing · 2 min audio', detail: 'Reminds you to set calorimeter insulation before the calculation sprint.' },
        { title: 'English Lit · Paper 1', meta: 'Annotatable markup', detail: 'Thesis scaffolds + “line to quote” sticky tabs for quicker commentary.' }
      ],
      media: {
        src: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=900&q=80',
        caption: 'All note packs open in a distraction-free canvas for quick markup.'
      }
    },
    classes: {
      eyebrow: 'Live classes',
      heading: 'Expert-led sessions that actually help.',
      intro: 'Browse or explore all classes.',
      accent: 'from-teal-400 to-emerald-400',
      stats: [
        { label: 'Live sessions', value: '25+' },
        { label: 'Expert instructors', value: '8' },
        { label: 'Success rate', value: '94%' }
      ],
      bullets: [
        'Live Q&A sessions where you can ask questions directly to subject experts.',
        'Personalized feedback on practice problems with step-by-step explanations.',
        'Recorded sessions available for review with comprehensive study notes.',
        'Collaborative study rooms for peer-to-peer learning and discussion.'
      ],
      cards: [
        { title: 'Problem-solving workshop', meta: 'Mathematics · Weekly', detail: 'Master complex problem-solving techniques with guided practice.' },
        { title: 'Science lab review', meta: 'Physics/Chemistry · Bi-weekly', detail: 'Review key experiments and concepts with practical demonstrations.' },
        { title: 'Essay writing masterclass', meta: 'English/Literature · Monthly', detail: 'Learn effective essay structures and analysis techniques.' }
      ],
      media: {
        src: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=80',
        caption: 'Mentors review your camera feed, not a generic stage deck.'
      }
    },
    papers: {
      eyebrow: 'Mock papers',
      heading: 'Annotated scripts that show exactly where marks land.',
      intro: 'We pair every paper with the student’s planning notes plus examiner commentary so you can see both sides.',
      accent: 'from-amber-400 to-rose-400',
      stats: [
        { label: 'Marked scripts', value: '94' },
        { label: 'Exam boards', value: '6' },
        { label: 'Audio verdicts', value: '38' }
      ],
      bullets: [
        'Each script includes the raw timing grid, so you can copy pacing that worked.',
        'Audio verdicts explain why a level 6 became a 7 (or didn’t).',
        'Cross-reference mark schemes with our “what graders actually wrote” column.'
      ],
      cards: [
        { title: 'Math Paper 2 · 89%', meta: 'Cambridge · Annotated PDF', detail: 'Watch where method marks were rescued even after an algebra slip.' },
        { title: 'IB Physics HL · 7/7', meta: 'Audio + markup', detail: 'Examiner explains why the evaluation paragraph earned the final point.' },
        { title: 'English Paper 1 · 34/40', meta: 'Dual-column transcript', detail: 'Left column = student handwriting, right = grader reaction.' }
      ],
      media: {
        src: 'https://images.unsplash.com/photo-1482961674540-0b0e8363a005?auto=format&fit=crop&w=900&q=80',
        caption: 'Mock packets download with editable comments so you can riff on them.'
      }
    }
  };
  const activeResourcePanel = resourcePanels[resourceTab];
  const syllabusBadges = ['IGCSE', 'IB', 'A-Level', 'Mock clinics'];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  useEffect(() => {
    const previousBodyStyles = {
      backgroundImage: document.body.style.backgroundImage,
      backgroundColor: document.body.style.backgroundColor,
      backgroundAttachment: document.body.style.backgroundAttachment,
      backgroundRepeat: document.body.style.backgroundRepeat,
      backgroundSize: document.body.style.backgroundSize
    };
    const previousHtmlStyles = {
      backgroundImage: document.documentElement.style.backgroundImage,
      backgroundColor: document.documentElement.style.backgroundColor,
      backgroundAttachment: document.documentElement.style.backgroundAttachment,
      backgroundRepeat: document.documentElement.style.backgroundRepeat,
      backgroundSize: document.documentElement.style.backgroundSize
    };
    const gradient = 'radial-gradient(ellipse at top left, rgba(79, 70, 229, 0.35) 0%, rgba(39, 69, 81, 0) 55%), linear-gradient(135deg, #3A3F61 0%, #274551 100%)';
    document.body.style.backgroundImage = gradient;
    document.body.style.backgroundColor = '#3A3F61';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';

    document.documentElement.style.backgroundImage = gradient;
    document.documentElement.style.backgroundColor = '#3A3F61';
    document.documentElement.style.backgroundAttachment = 'fixed';
    document.documentElement.style.backgroundRepeat = 'no-repeat';
    document.documentElement.style.backgroundSize = 'cover';

    return () => {
      document.body.style.backgroundImage = previousBodyStyles.backgroundImage;
      document.body.style.backgroundColor = previousBodyStyles.backgroundColor;
      document.body.style.backgroundAttachment = previousBodyStyles.backgroundAttachment;
      document.body.style.backgroundRepeat = previousBodyStyles.backgroundRepeat;
      document.body.style.backgroundSize = previousBodyStyles.backgroundSize;
      document.documentElement.style.backgroundImage = previousHtmlStyles.backgroundImage;
      document.documentElement.style.backgroundColor = previousHtmlStyles.backgroundColor;
      document.documentElement.style.backgroundAttachment = previousHtmlStyles.backgroundAttachment;
      document.documentElement.style.backgroundRepeat = previousHtmlStyles.backgroundRepeat;
      document.documentElement.style.backgroundSize = previousHtmlStyles.backgroundSize;
    };
  }, []);

  const slidingStyles = `
    @keyframes slideLeft {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    
    .slider-container {
      overflow: hidden;
      position: relative;
    }
    
    .slider-track {
      display: flex;
      animation: slideLeft 20s linear infinite;
      will-change: transform;
    }
    
    .slider-track.paused {
      animation-play-state: paused;
    }
  `;

  return (
    <>
      <style>{slidingStyles}</style>
      <Navbar />
      <div
        className="home-page-wrapper min-h-screen text-slate-100"
        style={{
          background:
            'radial-gradient(ellipse at top left, rgba(79, 70, 229, 0.35) 0%, rgba(39, 69, 81, 0) 55%), linear-gradient(135deg, #3A3F61 0%, #274551 100%)',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover'
        }}
      >
        {/* Hero Section */}
        <section className="pt-28 pb-24 px-6 lg:px-12" style={{ minHeight: '100vh' }}>
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">
            <div className="flex-1 space-y-8">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 backdrop-blur-sm mb-6">
                  <span className="w-2 h-2 rounded-full bg-teal-200"></span>
                  <span className="text-[13px] font-medium tracking-wide text-teal-200">Built for IB + A level mocks</span>
                </div>
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-[64px] font-semibold leading-tight text-slate-50 tracking-tight">
                    Calm, deliberate prep <br className="hidden md:block" /> for every revision block
                  </h1>
                  <p className="text-lg text-slate-200/80 leading-relaxed max-w-2xl">
                    Guided study cadences, annotated topic packs, and mock submissions in one trusted hub.
                    Keep momentum across busy terms without neon distractions.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {syllabusBadges.map((badge) => (
                  <span
                    key={badge}
                    className="px-4 py-2 rounded-full border border-white/15 text-sm tracking-wide text-slate-200/90"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/sign-up"
                  className="px-6 py-3 rounded-2xl border border-white/15 bg-white/5 text-slate-50 text-base font-medium tracking-wide hover:border-white/30 transition"
                >
                  Start my plan
                </Link>
                <Link
                  href="/classes"
                  className="px-6 py-3 rounded-2xl border border-white/10 text-slate-200/80 text-base font-medium hover:text-white transition"
                >
                  Browse classes
                </Link>
                <p className="text-sm text-slate-300/80">
                  Built by alumni scoring 7s & 45
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 p-4 bg-white/5 text-slate-200/90">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</div>
                    <div className="text-2xl font-semibold text-slate-50 mt-2">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-5/12 space-y-5">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_60px_rgba(8,12,24,0.35)]">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-slate-300/80">
                  <span>Weekly focus</span>
                  <span className="text-cyan-100/80">3 of 4 blocks set</span>
                </div>
                <div className="mt-5 space-y-4">
                  {focusBlocks.map((block) => (
                    <div key={block.title} className="flex items-center justify-between">
                      <div>
                        <p className="text-base font-medium text-slate-50">{block.title}</p>
                        <p className="text-sm text-slate-300/80">{block.detail}</p>
                      </div>
                      <span className="text-sm text-cyan-100/80">{block.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#1F2B3A]/70 p-6 shadow-[0_25px_60px_rgba(6,10,25,0.35)] space-y-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-300/80">Mock readiness</p>
                  <button className="text-sm text-teal-200/80 hover:text-teal-100 transition">
                    Continue practice →
                  </button>
                </div>
                <div className="space-y-5">
                  {readinessStats.map((stat) => {
                    const statusClass = stat.status === 'Needs recap' ? 'text-purple-200/80' : 'text-teal-200/80';
                    return (
                      <div key={stat.subject} className="flex items-center justify-between">
                        <div>
                          <p className="text-base font-medium text-slate-50">{stat.subject}</p>
                          <p className={`text-sm ${statusClass}`}>{stat.status}</p>
                        </div>
                        <span className="text-lg font-semibold text-slate-100">{stat.score}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="pt-6 border-t border-white/10 space-y-4">
                  {clinics.map((clinic) => (
                    <div key={clinic.title} className="flex flex-col">
                      <span className="text-xs uppercase tracking-[0.3em] text-slate-400">{clinic.title}</span>
                      <span className="text-sm text-slate-200/85">{clinic.detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Weekly Cadence Section */}
        <section className="py-24 px-6 lg:px-8 relative overflow-hidden" style={{ minHeight: '100vh' }}>
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
            style={{
              background: 'radial-gradient(circle at 70% 30%, #DFF2FC 0%, transparent 70%)',
              filter: 'blur(60px)'
            }}></div>

          <div className="max-w-6xl mx-auto relative z-10 h-full flex flex-col lg:flex-row gap-12">
            <div className="flex-1 flex flex-col justify-center space-y-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 backdrop-blur-sm max-w-fit">
                <span className="w-2 h-2 rounded-full bg-teal-200"></span>
                <span className="text-[13px] font-medium tracking-wide text-teal-200">How the cadence works</span>
              </div>
              <div className="space-y-4">
                <h2
                  className="text-5xl lg:text-6xl font-light text-white leading-[1.1]"
                >
                  Your week, finally<br />making sense.
                </h2>
                <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
                  Three quiet touchpoints repeat every seven days. They are simple on purpose so you stay focused on
                  the work instead of another flashy dashboard.
                </p>
              </div>

              <div className="space-y-4">
                {cadenceSteps.map((step) => (
                  <div
                    key={step.id}
                    className="flex items-start gap-4 border border-white/10 rounded-2xl bg-white/5 p-5 hover:bg-white/10 transition-colors"
                  >
                    <div className="text-2xl font-light text-teal-200 min-w-[3rem]">{step.id}</div>
                    <div className="space-y-1">
                      <p className="text-lg text-slate-50">{step.title}</p>
                      <p className="text-sm text-slate-300">{step.description}</p>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>


            </div>

            <div className="w-full lg:w-5/12 flex flex-col gap-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
                  <span>Weekly focus digest</span>
                  <span className="text-teal-200/80">3 blocks queued</span>
                </div>
                <div className="mt-6 space-y-5">
                  {focusBlocks.map((block) => (
                    <div key={block.title} className="flex items-center justify-between">
                      <div>
                        <p className="text-base text-slate-50 font-medium">{block.title}</p>
                        <p className="text-sm text-slate-300">{block.detail}</p>
                      </div>
                      <span className="text-sm text-slate-300/80">{block.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-[#1F2B3A]/80 p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Readiness pulse</p>
                  <span className="text-teal-200/80 text-xs uppercase tracking-[0.3em]">Updated Friday</span>
                </div>
                {readinessStats.map((stat) => (
                  <div key={stat.subject} className="flex items-center justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0">
                    <div>
                      <p className="text-sm text-slate-300">{stat.subject}</p>
                      <p className="text-2xl font-semibold text-slate-50">{stat.score}</p>
                    </div>
                    <span className="text-sm text-teal-200/80">{stat.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}