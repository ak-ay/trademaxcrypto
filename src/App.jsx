import React, { useState, useEffect } from "react";
import HeroSection from './components/HeroSection';
import CryptoTicker from './components/CryptoTicker';
import AboutCourse from './components/AboutCourse';
import TradingView from './components/TradingView';
import Footer from './components/Footer';
import Loader from './components/Loader';
import trademaxLogo from './assets/trademax-logo.png';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Dynamic Trademax Logo Background - z-[1] */}
      <div className="fixed inset-0 z-[1] pointer-events-none select-none">
        {/* Main large logo: slow spin, gentle scale pulse */}
        <img
          src={trademaxLogo}
          alt="Trademax Logo Background Main"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] opacity-30 blur"
          style={{
            animation: 'trademaxSpin 90s linear infinite, trademaxPulse 18s ease-in-out infinite',
            zIndex: 0
          }}
          draggable={false}
          aria-hidden="true"
        />
        {/* Top right logo: diagonal drift, fade in/out */}
        <img
          src={trademaxLogo}
          alt="Trademax Logo Background Drift"
          className="absolute right-[10%] top-[12%] w-[350px] h-[350px] opacity-18 blur-md"
          style={{
            animation: 'trademaxDrift 38s ease-in-out infinite, trademaxFade 22s ease-in-out infinite',
            zIndex: 0
          }}
          draggable={false}
          aria-hidden="true"
        />
        {/* Bottom left logo: scale, rotate, fade */}
        <img
          src={trademaxLogo}
          alt="Trademax Logo Background Scale"
          className="absolute left-[8%] bottom-[8%] w-[300px] h-[300px] opacity-14 blur-md"
          style={{
            animation: 'trademaxScale 28s ease-in-out infinite, trademaxSpinReverse 60s linear infinite, trademaxFade 18s ease-in-out infinite',
            zIndex: 0
          }}
          draggable={false}
          aria-hidden="true"
        />
        {/* Subtle color overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 via-blue-500/10 to-purple-500/10 mix-blend-lighten" />
      </div>
      {/* Animated Blobs/Gradients - z-[2] */}
      <div className="fixed inset-0 z-[2] pointer-events-none select-none">
        <div className="absolute w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl top-1/4 left-1/4 animate-pulse-slow" />
        <div className="absolute w-80 h-80 bg-blue-500/20 rounded-full blur-3xl bottom-1/4 right-1/4 animate-pulse-slow" />
      </div>
      {/* Fixed Crypto Ticker - Always visible */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <CryptoTicker />
      </div>

      {/* Main Content with proper spacing */}
      <div className="relative z-10 pt-16"> {/* Account for fixed ticker */}
        <HeroSection />
        <AboutCourse />
        <TradingView />
        <Footer />
      </div>

      {/* Custom keyframes for background animation */}
      <style>{`
        @keyframes trademaxSpin { 0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); } 100% { transform: translate(-50%, -50%) rotate(360deg) scale(1.04); } }
        @keyframes trademaxSpinReverse { 0% { transform: rotate(0deg); } 100% { transform: rotate(-360deg); } }
        @keyframes trademaxPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.04); } }
        @keyframes trademaxDrift { 0%, 100% { right: 10%; top: 12%; } 50% { right: 14%; top: 18%; } }
        @keyframes trademaxScale { 0%, 100% { transform: scale(1) rotate(0deg); } 50% { transform: scale(1.08) rotate(8deg); } }
        @keyframes trademaxFade { 0%, 100% { opacity: 0.14; } 50% { opacity: 0.28; } }
        @keyframes pulse-slow { 0%, 100% { opacity: 0.7; } 50% { opacity: 1; } }
        .animate-pulse-slow { animation: pulse-slow 12s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default App; 