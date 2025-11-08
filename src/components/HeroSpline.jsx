import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function HeroSpline() {
  return (
    <section className="relative h-[320px] sm:h-[380px] lg:h-[460px] rounded-3xl overflow-hidden bg-[#0a0f1f]">
      <Spline
        scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f1f]/40 to-[#0a0f1f]" />

      <div className="absolute inset-0 flex items-end p-6 sm:p-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">IILM University Gurugram</h1>
          <p className="mt-2 text-white/80 max-w-xl">Your personalized student portal with attendance, grades, assignments, feedback, and resources — all in one futuristic dashboard.</p>
        </motion.div>
      </div>
    </section>
  );
}
