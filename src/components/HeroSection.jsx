import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, Play, BarChart3, TrendingUp, Shield, Users, Star, CheckCircle, Award, BookOpen, Target, Users2, Zap, Clock, ExternalLink } from 'lucide-react';
import arunProfile from '../assets/arun-murali-profile.jpg';
import trademaxLogo from '../assets/trademax-logo.png';
import deltaLogo from '../assets/delta-exchange-logo.png';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate random candlestick data
  const generateCandlesticks = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: i * 25 + 20,
      open: Math.random() * 60 + 20,
      close: Math.random() * 60 + 20,
      high: Math.random() * 80 + 40,
      low: Math.random() * 40 + 10,
      isGreen: Math.random() > 0.5
    }));
  };

  const candlesticks = generateCandlesticks(12);

  return (
    <section className="relative min-h-screen bg-transparent overflow-hidden">
      {/* Refined Trading Background */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" className="w-full h-full">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#6366f1" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Refined Candlestick Chart */}
        <div className="absolute top-20 left-10 w-96 h-48 opacity-8">
          <svg viewBox="0 0 400 200" className="w-full h-full">
            {candlesticks.map((candle, index) => (
              <motion.g
                key={candle.id}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.6, 0.6, 0],
                }}
                transition={{
                  duration: 4,
                  delay: index * 0.3,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                <rect 
                  x={candle.x} 
                  y={Math.min(candle.open, candle.close)} 
                  width="3" 
                  height={Math.abs(candle.close - candle.open)} 
                  fill={candle.isGreen ? "#10b981" : "#ef4444"}
                  opacity="0.7"
                />
                <rect 
                  x={candle.x + 1} 
                  y={candle.low} 
                  width="1" 
                  height={candle.high - candle.low} 
                  fill={candle.isGreen ? "#10b981" : "#ef4444"}
                  opacity="0.5"
                />
              </motion.g>
            ))}
          </svg>
        </div>

        {/* Refined Price Chart */}
        <div className="absolute top-40 right-20 w-96 h-48 opacity-8">
          <svg viewBox="0 0 400 200" className="w-full h-full">
            <defs>
              <linearGradient id="priceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <motion.path 
              d="M0,150 L50,120 L100,100 L150,80 L200,60 L250,40 L300,30 L350,20 L400,10" 
              fill="none" 
              stroke="#6366f1" 
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />
            <motion.path 
              d="M0,150 L50,120 L100,100 L150,80 L200,60 L250,40 L300,30 L350,20 L400,10 L400,200 L0,200 Z" 
              fill="url(#priceGradient)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.2, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </svg>
        </div>

        {/* Refined Volume Bars */}
        <div className="absolute bottom-40 left-1/4 w-96 h-48 opacity-8">
          <svg viewBox="0 0 400 200" className="w-full h-full">
            {Array.from({ length: 12 }, (_, i) => (
              <motion.rect
                key={i}
                x={i * 30 + 20}
                y={150}
                width="6"
                height={Math.random() * 80 + 20}
                fill="#6366f1"
                opacity="0.4"
                initial={{ scaleY: 0 }}
                animate={{ 
                  scaleY: [0, 1, 0.8, 1],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              />
            ))}
          </svg>
        </div>

        {/* Subtle Floating Elements */}
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-6 h-6 opacity-6"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 1
            }}
          >
            <svg viewBox="0 0 24 24" className="w-full h-full">
              {i % 2 === 0 ? (
                <circle cx="12" cy="12" r="10" fill="none" stroke="#6366f1" strokeWidth="1"/>
              ) : (
                <rect x="4" y="4" width="16" height="16" fill="none" stroke="#8b5cf6" strokeWidth="1"/>
              )}
            </svg>
          </motion.div>
        ))}

        {/* Subtle Price Lines */}
        <motion.div 
          className="absolute top-1/2 left-0 w-full h-px opacity-10"
          animate={{
            x: [-100, 100],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatDelay: 4
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
        </motion.div>

        <motion.div 
          className="absolute top-1/3 right-0 w-full h-px opacity-10"
          animate={{
            x: [100, -100],
            opacity: [0, 0.3, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatDelay: 3
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        </motion.div>

        {/* Subtle Mouse Follow Effect */}
        <motion.div
          className="absolute w-48 h-48 opacity-3 pointer-events-none"
          style={{
            left: mousePosition.x - 96,
            top: mousePosition.y - 96,
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <svg viewBox="0 0 192 192" className="w-full h-full">
            <circle cx="96" cy="96" r="90" fill="none" stroke="#6366f1" strokeWidth="1" opacity="0.3"/>
            <circle cx="96" cy="96" r="60" fill="none" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.2"/>
          </svg>
        </motion.div>

        {/* Subtle Particles */}
        {Array.from({ length: 15 }, (_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-emerald-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            {/* Trademax Logo & Branding */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1, ease: "easeInOut" }}
              className="flex items-center justify-center mb-8"
            >
              <div className="relative group">
                {/* Logo Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                {/* Logo Container */}
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 flex items-center space-x-4">
                  <img 
                    src={trademaxLogo} 
                    alt="Trademax Academy Logo"
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="flex items-center" style={{display: 'none'}}>
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">T</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-bold text-white">Trademax Academy</div>
                    <div className="text-sm text-emerald-400 font-medium">Kerala's Number 1 Trading Academy</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
              className="inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-8"
            >
              <motion.div 
                className="w-2 h-2 bg-emerald-400 rounded-full mr-2"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <span className="text-sm font-medium text-emerald-400">Professional Trading Academy</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            >
              <span className="text-white">Master</span>
              <br />
              <motion.span 
                className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Crypto Trading
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
              className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Learn professional crypto trading strategies from industry experts. 
              Master technical analysis, risk management, and market psychology.
            </motion.p>

            {/* Course Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {[
                { icon: CheckCircle, text: "12+ Hours of Content", color: "emerald" },
                { icon: CheckCircle, text: "Live Trading Sessions", color: "blue" },
                { icon: CheckCircle, text: "Risk Management Guide", color: "purple" },
                { icon: CheckCircle, text: "Community Access", color: "emerald" }
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -5,
                    rotateY: 15,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                  }}
                  className="flex items-center px-4 py-2 bg-slate-800/30 rounded-full border border-slate-700/50 cursor-pointer transition-all duration-300"
                >
                  <item.icon className={`w-4 h-4 mr-2 text-${item.color}-400`} />
                  <span className="text-sm text-slate-300">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Mentor Section - Revolutionary Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.0, ease: "easeInOut" }}
            className="mb-16"
          >
            {/* Revolutionary Layout Container */}
            <div className="relative overflow-hidden">
              {/* Innovative Background */}
              <div className="absolute inset-0 pointer-events-none">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-black/30 backdrop-blur-xl border border-white/10"
                  animate={{
                    background: [
                      "linear-gradient(135deg, #0f172a99 0%, #1e293b66 50%, #0000004d 100%)",
                      "linear-gradient(135deg, #0000004d 0%, #0f172a99 50%, #1e293b66 100%)",
                      "linear-gradient(135deg, #0f172a99 0%, #1e293b66 50%, #0000004d 100%)"
                    ]
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
                {/* Geometric Pattern Overlay */}
                <motion.div 
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")`
                  }}
                  animate={{
                    transform: ['translateX(0px)', 'translateX(-30px)', 'translateX(0px)']
                  }}
                  transition={{ duration: 20, repeat: Infinity }}
                />
              </div>

              <div className="relative z-10 p-8 lg:p-16">
                {/* Revolutionary Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 1.6, ease: "easeInOut" }}
                  className="text-center mb-16"
                >
                  <motion.div
                    className="inline-block mb-8"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="relative">
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full blur-xl opacity-30"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-full px-8 py-4">
                        <span className="text-white/90 font-bold tracking-wider uppercase text-sm">Meet Your Mentor</span>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.8 }}
                    className="text-6xl lg:text-8xl font-black mb-8 tracking-tighter"
                  >
                    <motion.span 
                      className="text-white"
                      animate={{
                        filter: [
                          "brightness(1)",
                          "brightness(1.2)",
                          "brightness(1)"
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      ARUN
                    </motion.span>
                    <br />
                    <motion.span 
                      className="relative"
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                      }}
                      transition={{ duration: 5, repeat: Infinity }}
                    >
                      <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent" style={{ backgroundSize: '200% 200%' }}>
                        MURALI
                      </span>
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-blue-400/20 to-purple-400/20 blur-xl"
                        animate={{
                          opacity: [0.2, 0.4, 0.2]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </motion.span>
                  </motion.h2>
                </motion.div>

                {/* Revolutionary Content Layout */}
                <div className="max-w-7xl mx-auto">
                  {/* Split Layout Design */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Left Side - Background Image Carousel */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1, delay: 2.0 }}
                      className="relative"
                    >
                      {/* Carousel Container */}
                      <motion.div
                        className="relative mx-auto w-80 h-[500px] lg:w-96 lg:h-[600px] rounded-3xl overflow-hidden bg-black/30 backdrop-blur-xl border border-white/10 shadow-xl"
                        style={{
                          background: "linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(59, 130, 246, 0.08) 50%, rgba(139, 92, 246, 0.08) 100%)"
                        }}
                        whileHover={{ 
                          scale: 1.02,
                          transition: { duration: 0.3 }
                        }}
                      >
                        {/* Background Image */}
                        <motion.div
                          className="absolute inset-0"
                          style={{
                            backgroundImage: `url(${arunProfile})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            opacity: 0.85
                          }}
                          animate={{
                            scale: [1, 1.05, 1],
                            filter: [
                              "brightness(0.8) contrast(1.1)",
                              "brightness(0.9) contrast(1.2)",
                              "brightness(0.8) contrast(1.1)"
                            ]
                          }}
                          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        />
                        
                        {/* Gradient Overlay - make more transparent */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"
                          animate={{
                            opacity: [0.4, 0.5, 0.4]
                          }}
                          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        />
                        
                        {/* Content Overlay */}
                        <div className="relative z-10 h-full flex flex-col justify-end p-8">
                          {/* Name Animation */}
                          <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 2.4, ease: "easeInOut" }}
                            className="mb-4"
                          >
                            <motion.h2 
                              className="text-4xl lg:text-5xl font-black text-white mb-2"
                              animate={{
                                textShadow: [
                                  "0 0 20px rgba(255,255,255,0.3)",
                                  "0 0 40px rgba(255,255,255,0.5)",
                                  "0 0 20px rgba(255,255,255,0.3)"
                                ]
                              }}
                              transition={{ duration: 4, repeat: Infinity }}
                            >
                              ARUN MURALI
                            </motion.h2>
                            <motion.p 
                              className="text-lg text-white/90 font-medium"
                              animate={{
                                opacity: [0.8, 1, 0.8]
                              }}
                              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                            >
                              Professional Crypto Trader & Educator
                            </motion.p>
                          </motion.div>
                          
                          {/* Stats Carousel */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 2.6, ease: "easeInOut" }}
                            className="grid grid-cols-3 gap-4 mb-6"
                          >
                            {[
                              { value: "10K+", label: "Students", color: "emerald" },
                              { value: "8+", label: "Years", color: "blue" },
                              { value: "4.9", label: "Rating", color: "purple" }
                            ].map((stat, index) => (
                              <motion.div
                                key={stat.label}
                                className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                                animate={{
                                  y: [0, -6, 0],
                                  opacity: [0.8, 1, 0.8]
                                }}
                                transition={{ 
                                  duration: 6, 
                                  repeat: Infinity, 
                                  delay: index * 0.7,
                                  ease: "easeInOut"
                                }}
                                whileHover={{
                                  scale: 1.04,
                                  backgroundColor: "rgba(255,255,255,0.13)",
                                  transition: { duration: 0.3, ease: "easeInOut" }
                                }}
                              >
                                <motion.div 
                                  className={`text-2xl font-bold text-${stat.color}-400 mb-1`}
                                  animate={{
                                    scale: [1, 1.1, 1]
                                  }}
                                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                                >
                                  {stat.value}
                                </motion.div>
                                <div className="text-xs text-white/70 font-medium">{stat.label}</div>
                              </motion.div>
                            ))}
                          </motion.div>
                          
                          {/* Description */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 2.8, ease: "easeInOut" }}
                            className="mb-6"
                          >
                            <motion.p 
                              className="text-sm text-white/80 leading-relaxed"
                              animate={{
                                opacity: [0.7, 0.9, 0.7]
                              }}
                              transition={{ duration: 5, repeat: Infinity }}
                            >
                              With over <span className="text-emerald-400 font-bold">8 years</span> of professional trading experience, 
                              helping thousands master cryptocurrency markets through proven strategies.
                            </motion.p>
                          </motion.div>
                          
                          {/* Floating Elements */}
                          <motion.div
                            className="absolute top-6 right-6 w-12 h-12 bg-emerald-500/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                            animate={{
                              y: [0, -10, 0],
                              rotate: [0, 5, -5, 0]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            whileHover={{ scale: 1.2, rotate: 360 }}
                          >
                            <span className="text-white font-bold text-sm">✓</span>
                          </motion.div>
                          
                          <motion.div
                            className="absolute top-6 left-6 w-10 h-10 bg-blue-500/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                            animate={{
                              y: [0, 10, 0],
                              rotate: [0, -5, 5, 0]
                            }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            whileHover={{ scale: 1.2, rotate: -360 }}
                          >
                            <span className="text-white font-bold text-xs">★</span>
                          </motion.div>
                        </div>
                        
                        {/* Subtle Border Glow */}
                        <motion.div
                          className="absolute inset-0 rounded-3xl"
                          animate={{
                            boxShadow: [
                              "0 0 30px rgba(16, 185, 129, 0.2)",
                              "0 0 50px rgba(59, 130, 246, 0.3)",
                              "0 0 30px rgba(16, 185, 129, 0.2)"
                            ]
                          }}
                          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        />
                      </motion.div>
                    </motion.div>

                    {/* Right Side - Content */}
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1, delay: 2.2 }}
                      className="space-y-8"
                    >
                      {/* Title & Description */}
                      <div>
                        <motion.h3 
                          className="text-4xl lg:text-5xl font-bold text-white mb-6"
                          animate={{
                            textShadow: [
                              "0 0 20px rgba(255,255,255,0.1)",
                              "0 0 40px rgba(255,255,255,0.2)",
                              "0 0 20px rgba(255,255,255,0.1)"
                            ]
                          }}
                          transition={{ duration: 4, repeat: Infinity }}
                        >
                          Professional Crypto Trader & Educator
                        </motion.h3>
                        <p className="text-xl text-white/80 leading-relaxed mb-6">
                          With over <span className="text-emerald-400 font-bold">8 years</span> of professional trading experience, 
                          Arun Murali has helped thousands of traders master cryptocurrency markets through 
                          proven strategies and comprehensive risk management techniques.
                        </p>
                        <p className="text-lg text-white/60 leading-relaxed">
                          As the founder of <span className="text-blue-400 font-bold">Trademax Academy</span>, 
                          he combines deep market knowledge with practical teaching methods to ensure 
                          every student develops the skills needed for successful trading.
                        </p>
                      </div>

                      {/* Expertise Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          "Technical Analysis", "Risk Management", "Market Psychology", "Portfolio Strategy"
                        ].map((skill, index) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 2.4 + index * 0.1 }}
                            className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-black/50 transition-all duration-300"
                            whileHover={{ 
                              scale: 1.05,
                              y: -5,
                              borderColor: "rgba(16, 185, 129, 0.5)",
                              boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                            }}
                          >
                            <div className="text-white/90 font-semibold text-sm">{skill}</div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Stats Row */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 2.8 }}
                        className="grid grid-cols-3 gap-4"
                      >
                        <div className="text-center p-4 bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl">
                          <div className="text-2xl font-black text-emerald-400 mb-1">8+</div>
                          <div className="text-xs text-white/60">Years Experience</div>
                        </div>
                        <div className="text-center p-4 bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl">
                          <div className="text-2xl font-black text-purple-400 mb-1">24/7</div>
                          <div className="text-xs text-white/60">Support</div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Bottom CTA Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 1.6, ease: "easeInOut" }}
                    className="text-center"
                  >
                    <motion.a
                      href="https://www.trademaxacademy.com/courses/DECODING-COMMODITY-MARKET-6850f9b6a613e956f6ec485c"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative px-16 py-6 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold text-xl rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border border-emerald-400/20 overflow-hidden inline-block"
                      whileHover={{ 
                        scale: 1.05,
                        y: -5
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        style={{ backgroundSize: '200% 200%' }}
                      />
                      <span className="relative flex items-center">
                        Start Learning Now
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="ml-4 w-7 h-7 group-hover:translate-x-2 transition-transform" />
                        </motion.div>
                      </span>
                    </motion.a>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Delta Exchange Partnership Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.4, ease: "easeInOut" }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden">
              {/* Delta Logo Background Effect */}
              <div className="absolute top-4 right-4 opacity-5">
                <img 
                  src={deltaLogo} 
                  alt="Delta Exchange"
                  className="w-32 h-32 object-contain"
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
              
              <div className="text-center mb-8">
                {/* Delta Exchange Logo & Branding */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.8 }}
                  className="flex items-center justify-center mb-6"
                >
                  <div className="relative group">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    <div className="relative bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 rounded-xl p-3 flex items-center space-x-3">
                      <img 
                        src={deltaLogo} 
                        alt="Delta Exchange Logo"
                        className="w-10 h-10 object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="flex items-center" style={{display: 'none'}}>
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">Δ</span>
                        </div>
                      </div>
                      <div className="text-left">
                        <div className="text-lg font-bold text-white">Delta Exchange</div>
                        <div className="text-xs text-blue-400 font-medium">Official Partner</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <h2 className="text-3xl font-bold text-white mb-4">Recommended Trading Platform</h2>
                <p className="text-slate-300 text-lg">Start your trading journey with our trusted partner</p>
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">Delta Exchange</h3>
                  <p className="text-slate-300 mb-6 text-lg">
                    Trade Bitcoin and Ethereum futures & options with 24/7 markets, 
                    efficient margining, and INR settlement. Perfect for Indian traders 
                    looking to access global crypto markets.
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
                    <div className="flex items-center text-blue-400">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="font-bold">FIU Registered</span>
                    </div>
                    <div className="flex items-center text-blue-400">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="font-bold">INR Settlement</span>
                    </div>
                    <div className="flex items-center text-blue-400">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      <span className="font-bold">24/7 Trading</span>
                    </div>
                  </div>
                </div>
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 15
                  }}
                  className="flex-shrink-0"
                >
                  <a 
                    href="https://www.delta.exchange/?code=RGGFSM" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-400/20"
                  >
                    <span>Start Trading on Delta</span>
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>

         
          {/* Brand Partnership Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 2.0, ease: "easeInOut" }}
            className="mt-12 pt-8 border-t border-slate-700/30"
          >
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-slate-300 mb-4">Trusted by Industry Leaders</h3>
            </div>
            <div className="flex justify-center items-center space-x-8">
              {/* Trademax Academy */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 bg-slate-800/30 rounded-lg p-3 border border-slate-700/30"
              >
                <img 
                  src={trademaxLogo} 
                  alt="Trademax Academy"
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="flex items-center" style={{display: 'none'}}>
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-blue-500 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">T</span>
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-white">Trademax Academy</div>
                  <div className="text-xs text-emerald-400">Kerala's Number 1 Trading Academy</div>
                </div>
              </motion.div>

              {/* Partnership Separator */}
              <div className="text-slate-500 text-sm">×</div>

              {/* Delta Exchange */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3 bg-slate-800/30 rounded-lg p-3 border border-slate-700/30"
              >
                <img 
                  src={deltaLogo} 
                  alt="Delta Exchange"
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="flex items-center" style={{display: 'none'}}>
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded flex items-center justify-center">
                    <span className="text-white font-bold text-xs">Δ</span>
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-white">Delta Exchange</div>
                  <div className="text-xs text-blue-400">Trading Platform</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 