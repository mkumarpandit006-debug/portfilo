import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Tilt } from 'react-tilt';
import { cn } from '../lib/utils';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern futuristic 3D portfolio website showcasing my frontend development skills with smooth animations and glassmorphism UI.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
    color: 'neon-blue'
  },
  {
    title: 'Weather App',
    description: 'Real-time weather application fetching data from a REST API. Features dynamic backgrounds based on weather conditions.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'API'],
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=2070&auto=format&fit=crop',
    color: 'neon-purple'
  },
  {
    title: 'E-book Website',
    description: 'A digital library platform where users can browse, read, and download e-books. Includes a responsive reading interface.',
    tech: ['React', 'CSS Grid', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1526243741027-444d633d7365?q=80&w=2071&auto=format&fit=crop',
    color: 'neon-pink'
  },
  {
    title: 'Calculator App',
    description: 'A sleek, neon-themed calculator with glassmorphism design. Supports advanced math operations and keyboard inputs.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=2000&auto=format&fit=crop',
    color: 'neon-blue'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-neon-pink text-sm font-mono uppercase tracking-[0.3em] font-bold mb-4">
            // Work
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-sans text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">Projects</span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-pink to-transparent mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Tilt options={{ max: 10, scale: 1.02, speed: 400 }} className="h-full">
                <div className={cn(
                    "group relative h-full rounded-2xl glass-panel overflow-hidden border border-white/10 flex flex-col transition-all duration-500",
                    project.color === 'neon-blue' ? 'hover:border-neon-blue/50 hover:shadow-[0_0_25px_rgba(0,243,255,0.2)]' : 
                    project.color === 'neon-purple' ? 'hover:border-neon-purple/50 hover:shadow-[0_0_25px_rgba(188,19,254,0.2)]' :
                    'hover:border-neon-pink/50 hover:shadow-[0_0_25px_rgba(255,0,127,0.2)]'
                )}>
                  
                  {/* Image Container */}
                  <div className="relative h-60 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10" />
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Content Container */}
                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 flex-1 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t) => (
                        <span key={t} className="px-3 py-1 text-xs font-mono rounded-full glass border border-white/10 text-gray-300">
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4 mt-auto">
                      <a href="#" className="flex-1 flex justify-center items-center gap-2 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm font-medium">
                        <ExternalLink size={16} className="text-neon-blue" />
                        Live Demo
                      </a>
                      <a href="#" className="flex-1 flex justify-center items-center gap-2 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm font-medium">
                        <Github size={16} className={project.color === 'neon-pink' ? 'text-neon-pink' : 'text-neon-purple'} />
                        GitHub
                      </a>
                    </div>
                  </div>

                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
