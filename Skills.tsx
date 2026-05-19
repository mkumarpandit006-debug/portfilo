import { motion } from 'motion/react';
import { Tilt } from 'react-tilt';
import { cn } from '../lib/utils';

const skills = [
  { name: 'HTML5', icon: '🌐', color: 'from-orange-500/20 to-orange-500/5', border: 'hover:border-orange-500/50', glow: 'group-hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]' },
  { name: 'CSS3', icon: '🎨', color: 'from-blue-500/20 to-blue-500/5', border: 'hover:border-blue-500/50', glow: 'group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]' },
  { name: 'JavaScript', icon: '⚡', color: 'from-yellow-400/20 to-yellow-400/5', border: 'hover:border-yellow-400/50', glow: 'group-hover:shadow-[0_0_15px_rgba(250,204,21,0.5)]' },
  { name: 'SQL', icon: '🗄️', color: 'from-cyan-500/20 to-cyan-500/5', border: 'hover:border-cyan-500/50', glow: 'group-hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]' },
  { name: 'C', icon: '⚙️', color: 'from-indigo-500/20 to-indigo-500/5', border: 'hover:border-indigo-500/50', glow: 'group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]' },
  { name: 'C++', icon: '🚀', color: 'from-blue-600/20 to-blue-600/5', border: 'hover:border-blue-600/50', glow: 'group-hover:shadow-[0_0_15px_rgba(37,99,235,0.5)]' },
];

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.05,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-neon-blue text-sm font-mono uppercase tracking-[0.3em] font-bold mb-4">
            // Tech Stack
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-sans text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">Skills</span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-transparent mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Tilt options={defaultOptions} className="w-full h-full cursor-pointer">
                <div className={cn(
                  "group relative w-full aspect-square rounded-2xl glass-panel flex flex-col items-center justify-center p-6 gap-4 transition-all duration-300",
                  skill.border,
                  skill.glow
                )}>
                  {/* Background Gradient */}
                  <div className={cn(
                    "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br",
                    skill.color
                  )} />
                  
                  <div className="text-5xl z-10 filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white z-10 tracking-wider">
                    {skill.name}
                  </h3>
                  
                  {/* Decorative corner accents */}
                  <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/20 group-hover:border-white/60 transition-colors" />
                  <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/20 group-hover:border-white/60 transition-colors" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/20 group-hover:border-white/60 transition-colors" />
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/20 group-hover:border-white/60 transition-colors" />
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
