import { motion } from 'framer-motion';
import { FileText, BookOpen, ClipboardCheck } from 'lucide-react';

export default function CardsGrid() {
  const cards = [
    {
      title: 'Grades',
      desc: 'View current and previous semester performance, CGPA, and highlights for backlogs.',
      icon: BookOpen,
      color: 'from-[#780000] to-[#b68b00]'
    },
    {
      title: 'Assignments',
      desc: 'Keep up with due dates, submission status, and download assignment PDFs.',
      icon: ClipboardCheck,
      color: 'from-[#001f54] to-[#b68b00]'
    },
    {
      title: 'PYQs',
      desc: 'Browse and download previous year question papers for quick revision.',
      icon: FileText,
      color: 'from-[#0a0f1f] to-[#780000]'
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {cards.map((c, i) => (
        <motion.div
          key={c.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: i * 0.05 }}
          className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg text-white p-5`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-20`} />
          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <c.icon className="h-6 w-6 text-amber-400" />
              <h3 className="text-lg font-semibold">{c.title}</h3>
            </div>
            <p className="mt-2 text-sm text-white/80">{c.desc}</p>
            <button className="mt-4 px-4 py-2 rounded-lg bg-amber-500/20 border border-amber-400/30 text-amber-300 hover:bg-amber-500/30 transition">Open</button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
