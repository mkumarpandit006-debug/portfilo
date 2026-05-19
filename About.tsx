import { motion } from 'motion/react';
import { Code, Layout, Cpu } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-neon-purple text-sm font-mono uppercase tracking-[0.3em] font-bold mb-4">
            System.About()
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-sans text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">Me</span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-transparent mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 relative"
          >
            <div className="aspect-[4/5] rounded-2xl glass-panel p-2 neon-glow-blue">
              <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#0a0a20] to-[#1a1a3a] border border-white/5 overflow-hidden relative flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom_right,white,transparent)]" />
                <Cpu className="w-32 h-32 text-neon-blue mb-6 opacity-80" />
                <h3 className="text-2xl font-bold text-white tracking-widest font-mono">MAHANAND</h3>
                <p className="text-neon-purple font-mono text-sm mt-2">BCA_STUDENT.obj</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-7 flex flex-col gap-6"
          >
            <div className="glass-panel p-8 rounded-2xl hover:border-neon-purple/50 transition-colors duration-500">
              <p className="text-lg text-gray-300 leading-relaxed">
                Hello! I'm <strong className="text-white">Mahanand</strong>, a passionate BCA student and aspiring Frontend Developer. 
                I specialize in crafting immersive, interactive, and visually striking web interfaces that leave a lasting impression.
              </p>
              <br />
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey into web development started with a curiosity for how things work on the screen. Today, I combine my love for 
                modern UI/UX design with clean, efficient code to build futuristic digital experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass p-6 rounded-xl border border-white/5 hover:bg-white/5 transition-colors group">
                <Layout className="w-8 h-8 text-neon-blue mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold mb-2">Modern UI/UX</h4>
                <p className="text-sm text-gray-400">Designing interfaces that are not just usable, but delightful and beautiful.</p>
              </div>
              <div className="glass p-6 rounded-xl border border-white/5 hover:bg-white/5 transition-colors group">
                <Code className="w-8 h-8 text-neon-pink mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold mb-2">Clean Code</h4>
                <p className="text-sm text-gray-400">Writing maintainable, scalable, and highly performant frontend architecture.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
