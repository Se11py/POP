"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useAuth, UserButton, SignInButton } from '@clerk/nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const { userId } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 700 && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileOpen]);

  useEffect(() => {
    const onTouch = () => setIsTouch(true);
    window.addEventListener('touchstart', onTouch, { once: true });
    return () => window.removeEventListener('touchstart', onTouch);
  }, []);

  let hoverTimeout: NodeJS.Timeout | null = null;
  const openDropdown = () => {
    if (!isTouch) {
      if (hoverTimeout) clearTimeout(hoverTimeout);
      setDropdownOpen(true);
    }
  };
  const closeDropdown = () => {
    if (!isTouch) {
      if (hoverTimeout) clearTimeout(hoverTimeout);
      hoverTimeout = setTimeout(() => setDropdownOpen(false), 180);
    }
  };
  const cancelCloseDropdown = () => {
    if (!isTouch) {
      if (hoverTimeout) clearTimeout(hoverTimeout);
    }
  };
  const toggleDropdown = () => setDropdownOpen(v => !v);

  useEffect(() => {
    const handleClick = (e: MouseEvent | TouchEvent) => {
      if (dropdownOpen && dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [dropdownOpen]);

  return (
    <nav className="navbar bg-[#0F0F1E] border-b border-gray-800 text-white">
      <div className="container navbar-container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="navbar-logo">
          <Link href="/" className="logo-link flex items-center gap-2">
            <span className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">POP</span>
          </Link>
        </div>
        
        <div 
          className="navbar-mobile-toggle md:hidden cursor-pointer" 
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </div>

        <div className={`md:flex items-center gap-8 ${mobileOpen ? 'absolute top-16 left-0 right-0 bg-[#1A1A2E] p-4 flex flex-col z-50' : 'hidden'}`}>
          <Link href="#features" className="hover:text-pink-400 transition" onClick={() => setMobileOpen(false)}>Features</Link>
          <Link href="#about" className="hover:text-pink-400 transition" onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/classes" className="hover:text-pink-400 transition" onClick={() => setMobileOpen(false)}>Classes</Link>
          
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-1 hover:text-pink-400 transition"
              onClick={() => isTouch && toggleDropdown()}
              onMouseEnter={openDropdown}
              onMouseLeave={closeDropdown}
            >
              Tools
              <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {dropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 bg-[#252538] rounded-lg shadow-xl py-2 min-w-[160px] z-50"
                onMouseEnter={cancelCloseDropdown}
                onMouseLeave={closeDropdown}
              >
                <button
                  className="w-full text-left px-4 py-2 hover:bg-[#1A1A2E] transition text-purple-400"
                  onClick={() => { setDropdownOpen(false); setMobileOpen(false); router.push('/flashcards'); }}
                >
                  Flashcards
                </button>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-[#1A1A2E] transition text-purple-400"
                  onClick={() => { setDropdownOpen(false); setMobileOpen(false); router.push('/jamboard'); }}
                >
                  Jamboard
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4">
          {!userId ? (
            <SignInButton mode="modal">
              <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition shadow-lg">
                Sign In
              </button>
            </SignInButton>
          ) : (
            <UserButton />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;