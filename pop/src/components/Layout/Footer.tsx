import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0B0B14] pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Column 1: Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-xs tracking-[0.45em] uppercase text-teal-200/70">POP</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              The student-led revision hub for ANS. Built by alumni, funded by community, free for everyone.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.48 2h.165zm-4.43 2.163c-.826.04-1.273.198-1.574.315-.41.16-.705.35-.988.633-.283.283-.473.578-.633.988-.117.301-.275.748-.315 1.574-.04.86-.046 1.12-.046 3.586 0 2.463.005 2.725.046 3.586.04.826.198 1.273.315 1.574.16.41.35.705.633.988.283.283.578.473.988.633.301.117.748.275 1.574.315.86.04 1.12.046 3.586.046 2.463 0 2.725-.005 3.586-.046.826-.04 1.273-.198 1.574-.315.41-.16.705-.35.988-.633.283-.283.473-.578.633-.988.117-.301.275-.748.315-1.574.04-.86.046-1.12.046-3.586 0-2.463-.005-2.725-.046-3.586-.04-.826-.198-1.273-.315-1.574-.16-.41-.35-.705-.633-.988-.283-.283-.578-.473-.988-.633-.301-.117-.748-.275-1.574-.315-.86-.04-1.12-.046-3.586-.046-2.463 0-2.725.005-3.586.046zM12.333 6.667a5.333 5.333 0 110 10.666 5.333 5.333 0 010-10.666zm0 1.6a3.733 3.733 0 100 7.466 3.733 3.733 0 000-7.466zm5.333-3.2a1.067 1.067 0 110 2.134 1.067 1.067 0 010-2.134z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link href="/resources/notes" className="text-slate-400 hover:text-teal-200 transition-colors text-sm">Study Notes</Link></li>
              <li><Link href="/resources/mocks" className="text-slate-400 hover:text-teal-200 transition-colors text-sm">Mock Papers</Link></li>
              <li><Link href="/resources/classes" className="text-slate-400 hover:text-teal-200 transition-colors text-sm">Live Classes</Link></li>
              <li><Link href="/resources/clinics" className="text-slate-400 hover:text-teal-200 transition-colors text-sm">Clinics</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-slate-400 hover:text-teal-200 transition-colors text-sm">About Us</Link></li>
              <li><Link href="/team" className="text-slate-400 hover:text-teal-200 transition-colors text-sm">Our Team</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-teal-200 transition-colors text-sm">Contact</Link></li>
              <li><Link href="/privacy" className="text-slate-400 hover:text-teal-200 transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 4: Human Note */}
          <div className="relative">
            <blockquote className="text-sm text-slate-300 italic leading-relaxed border-l-2 border-teal-500/30 pl-4 py-1">
              "We built this because we remember how stressful mocks were. If we can save you even one late night of panic, it's worth it."
            </blockquote>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-xs text-slate-500">The Alumni Team</span>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} POP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;