import { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Instagram, Send, Mail, MapPin } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate sending
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ name: '', email: '', message: '' });
      alert("Message sent successfully (Simulation).");
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-neon-blue text-sm font-mono uppercase tracking-[0.3em] font-bold mb-4">
            // Connect
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-sans text-white">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink">Touch</span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-transparent mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center gap-8"
          >
            <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-white/20 transition-colors">
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I'm currently looking for new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-neon-blue border border-neon-blue/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Email</h4>
                    <a href="mailto:hello@mahanand.com" className="hover:text-neon-blue transition-colors">hello@mahanand.com</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-gray-300">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-neon-purple border border-neon-purple/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Location</h4>
                    <p>Earth, Milky Way</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full glass border border-white/5 flex items-center justify-center hover:scale-110 hover:border-emerald-500/50 hover:text-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full glass border border-white/5 flex items-center justify-center hover:scale-110 hover:border-blue-500/50 hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full glass border border-white/5 flex items-center justify-center hover:scale-110 hover:border-pink-500/50 hover:text-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-2xl flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-pink/50 focus:ring-1 focus:ring-neon-pink/50 transition-all placeholder:text-gray-600"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-pink/50 focus:ring-1 focus:ring-neon-pink/50 transition-all placeholder:text-gray-600"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Message</label>
                <textarea 
                  id="message" 
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-neon-pink/50 focus:ring-1 focus:ring-neon-pink/50 transition-all placeholder:text-gray-600 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={cn(
                  "relative mt-2 flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-white overflow-hidden transition-all duration-300",
                  isSubmitting ? "bg-white/10 cursor-not-allowed" : "bg-gradient-to-r from-neon-purple to-neon-pink hover:shadow-[0_0_20px_rgba(255,0,127,0.4)] active:scale-[0.98]"
                )}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
