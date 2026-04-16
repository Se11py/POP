"use client";

import React from "react";
import Navbar from "@/components/Layout/Navbar";
import { useAuth } from "@clerk/nextjs";

export default function Dashboard() {
  const { isLoaded, userId } = useAuth();

  if (!isLoaded || !userId) {
    return <div className="text-white text-center p-20">Loading...</div>;
  }

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <div id="webcrumbs" className="max-w-[1440px] mx-auto p-6 bg-gray-900 text-white">
        <div className="flex flex-col md:flex-row gap-6">
          <aside className="w-full md:w-80 bg-gray-800 rounded-lg p-6 h-fit shrink-0">
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4 text-purple-400">Grade 7</h2>
              <div className="space-y-3">
                <details className="group">
                  <summary className="flex items-center justify-between p-3 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-blue-400">calculate</span>
                      <span className="font-medium">Mathematics</span>
                    </div>
                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                  </summary>
                  <div className="mt-2 ml-6 space-y-2">
                    <div className="p-2 rounded hover:bg-gray-700 cursor-pointer transition-colors">
                      <span className="text-sm">Algebra Basics</span>
                      <div className="w-full bg-gray-600 rounded-full h-1.5 mt-1">
                        <div className="bg-green-500 h-1.5 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    <div className="p-2 rounded hover:bg-gray-700 cursor-pointer transition-colors">
                      <span className="text-sm">Geometry</span>
                      <div className="w-full bg-gray-600 rounded-full h-1.5 mt-1">
                        <div className="bg-green-500 h-1.5 rounded-full w-1/2"></div>
                      </div>
                    </div>
                    <div className="p-2 rounded hover:bg-gray-700 cursor-pointer transition-colors">
                      <span className="text-sm">Fractions</span>
                      <div className="w-full bg-gray-600 rounded-full h-1.5 mt-1">
                        <div className="bg-yellow-500 h-1.5 rounded-full w-1/4"></div>
                      </div>
                    </div>
                  </div>
                </details>
                
                <details className="group">
                  <summary className="flex items-center justify-between p-3 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-green-400">science</span>
                      <span className="font-medium">Science</span>
                    </div>
                    <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                  </summary>
                  <div className="mt-2 ml-6 space-y-2">
                    <div className="p-2 rounded hover:bg-gray-700 cursor-pointer transition-colors">
                      <span className="text-sm">Physics</span>
                      <div className="w-full bg-gray-600 rounded-full h-1.5 mt-1">
                        <div className="bg-green-500 h-1.5 rounded-full w-2/3"></div>
                      </div>
                    </div>
                    <div className="p-2 rounded hover:bg-gray-700 cursor-pointer transition-colors">
                      <span className="text-sm">Chemistry</span>
                      <div className="w-full bg-gray-600 rounded-full h-1.5 mt-1">
                        <div className="bg-yellow-500 h-1.5 rounded-full w-1/3"></div>
                      </div>
                    </div>
                    <div className="p-2 rounded hover:bg-gray-700 cursor-pointer transition-colors">
                      <span className="text-sm">Biology</span>
                      <div className="w-full bg-gray-600 rounded-full h-1.5 mt-1">
                        <div className="bg-red-500 h-1.5 rounded-full w-1/6"></div>
                      </div>
                    </div>
                  </div>
                </details>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4 text-purple-400">Quick Stats</h3>
              <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-300">Weekly Streak</span>
                    <span className="material-symbols-outlined text-orange-400">local_fire_department</span>
                  </div>
                  <div className="text-2xl font-bold text-orange-400">12 days</div>
                </div>
                
                <div className="bg-gray-700 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-300">Lessons Completed</span>
                    <span className="material-symbols-outlined text-green-400">check_circle</span>
                  </div>
                  <div className="text-2xl font-bold text-green-400">24/32</div>
                </div>
              </div>
            </div>
          </aside>
          
          <main className="flex-1 w-full overflow-x-hidden">
            <div className="mb-6">
              <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
                <span>Grade 7</span>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span>Mathematics</span>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span className="text-white">Algebra Basics</span>
              </nav>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <h1 className="text-3xl font-bold">Algebra Basics</h1>
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 shrink-0">
                    <svg className="w-16 h-16 transform -rotate-90">
                      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="none" className="text-gray-700"/>
                      <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="none" strokeDasharray="175.9" strokeDashoffset="44" className="text-purple-500"/>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-bold">75%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Progress Dashboard</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-300">Variables</span>
                      <span className="material-symbols-outlined text-green-400">check_circle</span>
                    </div>
                    <div className="relative w-12 h-12 mx-auto">
                      <svg className="w-12 h-12 transform -rotate-90">
                        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3" fill="none" className="text-gray-600"/>
                        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="125.6" strokeDashoffset="0" className="text-green-500"/>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold">100%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-300">Equations</span>
                      <span className="material-symbols-outlined text-yellow-400">schedule</span>
                    </div>
                    <div className="relative w-12 h-12 mx-auto">
                      <svg className="w-12 h-12 transform -rotate-90">
                        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3" fill="none" className="text-gray-600"/>
                        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="125.6" strokeDashoffset="62.8" className="text-yellow-500"/>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold">50%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-300">Functions</span>
                      <span className="material-symbols-outlined text-red-400">radio_button_unchecked</span>
                    </div>
                    <div className="relative w-12 h-12 mx-auto">
                      <svg className="w-12 h-12 transform -rotate-90">
                        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3" fill="none" className="text-gray-600"/>
                        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="125.6" strokeDashoffset="125.6" className="text-red-500"/>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold">0%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-300">Graphing</span>
                      <span className="material-symbols-outlined text-red-400">radio_button_unchecked</span>
                    </div>
                    <div className="relative w-12 h-12 mx-auto">
                      <svg className="w-12 h-12 transform -rotate-90">
                        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3" fill="none" className="text-gray-600"/>
                        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="125.6" strokeDashoffset="125.6" className="text-red-500"/>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xs font-bold">0%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4">Lessons</h2>
                  <div className="space-y-4">
                    <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer border-l-4 border-green-500">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-green-500 rounded-full flex shrink-0 items-center justify-center">
                            <span className="material-symbols-outlined text-white">check</span>
                          </div>
                          <div>
                            <h3 className="font-medium">Introduction to Variables</h3>
                            <p className="text-sm text-gray-400 line-clamp-1">Learn the basics of algebraic variables</p>
                            <div className="flex items-center gap-4 mt-2">
                              <span className="text-xs bg-blue-600 px-2 py-1 rounded">Video</span>
                              <span className="text-xs text-gray-400">15 min</span>
                              <span className="text-xs text-gray-400">Easy</span>
                            </div>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-gray-400 hidden sm:block">arrow_forward_ios</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer border-l-4 border-green-500">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-green-500 rounded-full flex shrink-0 items-center justify-center">
                            <span className="material-symbols-outlined text-white">check</span>
                          </div>
                          <div>
                            <h3 className="font-medium">Basic Operations with Variables</h3>
                            <p className="text-sm text-gray-400 line-clamp-1">Addition and subtraction with variables</p>
                            <div className="flex items-center gap-4 mt-2">
                              <span className="text-xs bg-purple-600 px-2 py-1 rounded">Practice</span>
                              <span className="text-xs text-gray-400">20 min</span>
                              <span className="text-xs text-gray-400">Easy</span>
                            </div>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-gray-400 hidden sm:block">arrow_forward_ios</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer border-l-4 border-yellow-500">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-yellow-500 rounded-full flex shrink-0 items-center justify-center">
                            <span className="material-symbols-outlined text-white">play_arrow</span>
                          </div>
                          <div>
                            <h3 className="font-medium">Solving Simple Equations</h3>
                            <p className="text-sm text-gray-400 line-clamp-1">One-step and two-step equations</p>
                            <div className="flex items-center gap-4 mt-2">
                              <span className="text-xs bg-blue-600 px-2 py-1 rounded">Video</span>
                              <span className="text-xs text-gray-400">25 min</span>
                              <span className="text-xs text-gray-400">Medium</span>
                            </div>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-gray-400 hidden sm:block">arrow_forward_ios</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer border-l-4 border-gray-500">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-gray-500 rounded-full flex shrink-0 items-center justify-center">
                            <span className="material-symbols-outlined text-white">lock</span>
                          </div>
                          <div>
                            <h3 className="font-medium text-gray-400">Multi-step Equations</h3>
                            <p className="text-sm text-gray-500 line-clamp-1">Complete previous lessons to unlock</p>
                            <div className="flex items-center gap-4 mt-2">
                              <span className="text-xs bg-green-600 px-2 py-1 rounded">Quiz</span>
                              <span className="text-xs text-gray-500">30 min</span>
                              <span className="text-xs text-gray-500">Hard</span>
                            </div>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-gray-400 hidden sm:block">arrow_forward_ios</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="flex border-b border-gray-700 mb-4 overflow-x-auto">
                    <button className="px-4 py-2 text-purple-400 border-b-2 border-purple-400 font-medium shrink-0">Resources</button>
                    <button className="px-4 py-2 text-gray-400 hover:text-white transition-colors shrink-0">Practice</button>
                    <button className="px-4 py-2 text-gray-400 hover:text-white transition-colors shrink-0">Guides</button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-blue-400">video_library</span>
                        <div>
                          <h4 className="font-medium">Video Tutorial</h4>
                          <p className="text-sm text-gray-400">Variables Explained</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-green-400">quiz</span>
                        <div>
                          <h4 className="font-medium">Practice Quiz</h4>
                          <p className="text-sm text-gray-400">10 Questions</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-purple-400">description</span>
                        <div>
                          <h4 className="font-medium">Study Guide</h4>
                          <p className="text-sm text-gray-400">Algebra Formulas</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-orange-400">calculate</span>
                        <div>
                          <h4 className="font-medium">Calculator</h4>
                          <p className="text-sm text-gray-400">Algebra Helper</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
                    <h3 className="font-semibold mb-2">Achievement Unlocked!</h3>
                    <p className="text-sm text-purple-100">Complete 5 more lessons to earn the "Algebra Master" badge</p>
                    <div className="w-full bg-purple-800 rounded-full h-2 mt-3">
                      <div className="bg-purple-300 h-2 rounded-full w-3/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}