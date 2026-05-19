import { motion } from 'motion/react';
import { Download, ArrowRight } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';

export default function Hero() {
  const typewrittenText = useTypewriter([
    'Frontend Developer',
    'BCA Student',
    'UI/UX Enthusiast',
    'Creative Coder'
  ], 80, 50, 2000);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="text-neon-blue font-mono text-sm uppercase tracking-[0.3em] font-bold">
            System.Initialize()
          </div>
          <h1 className="text-6xl md:text-7xl font-sans font-bold tracking-tight leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">Mahanand</span>
          </h1>
          
          <div className="h-10">
            <p className="text-xl md:text-2xl text-slate-400 font-medium">
              I am a <span className="text-white font-semibold">{typewrittenText}</span>
              <span className="animate-pulse ml-1 text-neon-blue">|</span>
            </p>
          </div>

          <p className="text-slate-400 max-w-lg mt-4 leading-relaxed">
            Frontend Developer & BCA Student crafting immersive digital experiences with modern tech stacks.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#projects" className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2563eb] hover:bg-[#3b82f6] text-white rounded-xl font-bold shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all">
              <span>View Projects</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="#resume" className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl font-bold transition-all">
              <span>Get Resume</span>
              <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* 3D Elements / Profile Art */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center items-center h-[500px]"
        >
          {/* Abstract Floating Profile Representation */}
          <motion.div 
            animate={{ 
              y: [-15, 15, -15],
              rotateZ: [0, 5, -5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-neon-blue/30 animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border border-neon-purple/50 animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#2563eb] to-[#7e22ce] flex items-center justify-center p-2 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
               <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden relative">
                  <div className="text-7xl font-bold text-white opacity-20 font-mono">M</div>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-full h-1 bg-neon-blue/20 blur-sm transform -rotate-45"></div>
                  </div>
               </div>
            </div>
          </motion.div>
          
          {/* Floating decorative elements */}
          <motion.div 
            animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute top-10 right-10 w-16 h-16 rounded-2xl glass-panel border border-neon-blue/30 rotate-12 flex items-center justify-center neon-glow-blue"
          >
             <span className="text-neon-blue font-bold text-xl">&lt;/&gt;</span>
          </motion.div>
          
          <motion.div 
            animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-10 left-10 w-20 h-20 rounded-full glass border border-neon-pink/30 flex items-center justify-center backdrop-blur-md"
          >
             <span className="text-neon-pink font-bold">JS</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest font-mono">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border-2 border-gray-500 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-neon-blue rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
