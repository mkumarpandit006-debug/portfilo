export default function Footer() {
  return (
    <footer className="py-8 relative border-t border-white/5 mt-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center gap-4">
        <div className="text-2xl font-bold font-mono tracking-tighter opacity-50">
          <span className="text-white">&lt;</span>
          <span className="text-cyan-500 text-shadow-sm">Maha</span>
          <span className="text-white">nand /&gt;</span>
        </div>
        
        <p className="text-xs text-gray-500 font-mono text-center">
          Designed & Built with <span className="text-pink-500 align-middle">❤️</span> by Mahanand<br/>
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
