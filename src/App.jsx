import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import HeroSpline from './components/HeroSpline';
import AttendanceCard from './components/AttendanceCard';
import CardsGrid from './components/CardsGrid';

function Topbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-[#780000] to-[#b68b00]" />
          <span className="font-semibold text-white">IILM Student Portal</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-sm text-white/80 hover:text-white">Light</button>
          <button className="text-sm px-3 py-1.5 rounded-lg bg-amber-500/20 border border-amber-400/30 text-amber-300 hover:bg-amber-500/30 transition">Login</button>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1f] text-white">
      <Topbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex gap-6">
        <Sidebar />
        <main className="flex-1 space-y-6">
          <HeroSpline />

          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <CardsGrid />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <h3 className="text-lg font-semibold">Announcements</h3>
                <ul className="mt-3 list-disc list-inside text-white/80 space-y-1 text-sm">
                  <li>Mid-semester exams begin on 21 Nov. Timetable released.</li>
                  <li>New assignments uploaded for Data Structures and OS.</li>
                  <li>Workshop: AI Ethics this Friday, 2 PM, Auditorium.</li>
                </ul>
              </motion.div>
            </div>
            <AttendanceCard present={88} />
          </section>
        </main>
      </div>
    </div>
  );
}
