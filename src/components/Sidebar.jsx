import { Home, BarChart2, Book, ClipboardList, FileDown, Settings, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Sidebar() {
  const menu = [
    { icon: Home, label: 'Dashboard' },
    { icon: BarChart2, label: 'Attendance' },
    { icon: Book, label: 'Grades' },
    { icon: ClipboardList, label: 'Assignments' },
    { icon: FileDown, label: 'PYQs' },
    { icon: User, label: 'Profile' },
    { icon: Settings, label: 'Settings' },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-64 bg-gradient-to-b from-[#2a1a1f] via-[#0a0f1f] to-[#0a0f1f] text-white/90 border-r border-white/10">
      <div className="px-6 py-6 border-b border-white/10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-maroon-600 to-amber-500 shadow-lg shadow-amber-500/20 flex items-center justify-center font-bold">IU</div>
          <div>
            <div className="text-lg font-semibold tracking-wide">IILM University</div>
            <div className="text-xs text-white/60">Gurugram</div>
          </div>
        </motion.div>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menu.map((item, idx) => (
          <motion.button
            key={item.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 * idx }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition group"
          >
            <item.icon className="h-5 w-5 text-amber-400 group-hover:scale-110 transition" />
            <span>{item.label}</span>
          </motion.button>
        ))}
      </nav>

      <div className="p-4 border-t border-white/10">
        <div className="bg-white/5 rounded-xl p-4 text-sm">
          <div className="font-medium">Logged in as</div>
          <div className="text-white/70">student@iilm.edu.in</div>
        </div>
      </div>
    </aside>
  );
}
