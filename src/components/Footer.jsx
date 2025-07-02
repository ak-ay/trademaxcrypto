import React from 'react';
import trademaxLogo from '../assets/trademax-logo.png';

const Footer = () => (
  <footer className="bg-black/80 py-8 flex flex-col items-center justify-center">
    <img src={trademaxLogo} alt="Trademax Academy Logo" className="w-12 h-12 mb-2 rounded-lg shadow bg-white/10 p-1" />
    <div className="text-lg font-bold text-white mb-2">Trademax Academy</div>
    <div className="flex gap-4 mt-2">
      <a href="https://www.instagram.com/trademaxacademy?igsh=dG5ybWd3bzcyaXF2" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
        {/* Instagram SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75h9A3.75 3.75 0 0120.25 7.5v9a3.75 3.75 0 01-3.75 3.75h-9A3.75 3.75 0 013.75 16.5v-9A3.75 3.75 0 017.5 3.75zm9.75 2.25v.008m-7.5 4.492a3 3 0 106 0 3 3 0 00-6 0z" />
        </svg>
      </a>
      <a href="https://youtube.com/@trademaxacademy?si=4J8gqi0AoKxDVC4T" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-9 h-9 bg-slate-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
        {/* YouTube SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
          <path d="M23.498 6.186a2.994 2.994 0 0 0-2.108-2.116C19.403 3.5 12 3.5 12 3.5s-7.403 0-9.39.57A2.994 2.994 0 0 0 .502 6.186C0 8.174 0 12 0 12s0 3.826.502 5.814a2.994 2.994 0 0 0 2.108 2.116C4.597 20.5 12 20.5 12 20.5s7.403 0 9.39-.57a2.994 2.994 0 0 0 2.108-2.116C24 15.826 24 12 24 12s0-3.826-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      </a>
    </div>
    <div className="text-sm text-gray-300 mt-2">trademaxacademy@gmail.com</div>
    <div className="text-xs text-gray-400 mt-4">© 2024 Trademax Academy. All rights reserved.</div>
  </footer>
);

export default Footer; 