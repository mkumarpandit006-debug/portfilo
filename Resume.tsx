import { motion } from 'motion/react';
import { Download, FileText } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-8 md:p-16 rounded-3xl relative overflow-hidden group text-center"
        >
          {/* Animated Background Highlights */}
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-spin-slow pointer-events-none opacity-20">
             <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0_300deg,#00f3ff_360deg)]" />
          </div>
          <div className="absolute inset-2 bg-deep-navy rounded-[1.3rem] z-0" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 rounded-full glass flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 neon-glow-blue border border-neon-blue/30">
              <FileText className="w-10 h-10 text-neon-blue" />
            </div>

            <h2 className="text-neon-blue text-sm font-mono uppercase tracking-[0.3em] font-bold mb-4">
              // Documentation
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold font-sans text-white mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">Resume</span>
            </h3>
            
            <p className="text-slate-400 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
              Want to know more about my experience, education, and skills in detail? Download my complete resume.
            </p>

            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#" 
              className="relative inline-flex items-center justify-center gap-3 px-10 py-4 text-base font-bold text-white bg-[#2563eb] rounded-xl overflow-hidden transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:bg-[#3b82f6]"
            >
              <Download className="w-5 h-5 animate-bounce" />
              Download CV
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
