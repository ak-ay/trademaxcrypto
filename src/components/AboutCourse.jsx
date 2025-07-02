import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Users, Award, Zap, Shield, TrendingUp } from 'lucide-react';

const AboutCourse = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "From basics to advanced strategies, covering technical analysis, risk management, and market psychology."
    },
    {
      icon: Clock,
      title: "Self-Paced Learning",
      description: "Learn at your own speed with lifetime access to all course materials and updates."
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from professional traders with years of experience in cryptocurrency markets."
    },
    {
      icon: Award,
      title: "Certification",
      description: "Earn a certificate upon completion to showcase your trading knowledge and skills."
    },
    {
      icon: Zap,
      title: "Live Trading Sessions",
      description: "Watch real-time trading demonstrations and learn from live market analysis."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Master essential risk management techniques to protect your capital."
    }
  ];

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Why Choose</span>
            <br />
            <span className="text-white">Our Course?</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Our comprehensive crypto trading course is designed to take you from complete beginner to confident trader, 
            with proven strategies and expert guidance every step of the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="modern-card group"
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-muted leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Course Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">100%</div>
            <div className="text-muted">Free Forever</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-muted">Community Support</div>
          </div>
        </motion.div>
        
        

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-slate-400 mt-16">
          {[
            { icon: Shield, text: "ISO Registered Academy" },
            { icon: Users, text: "Professional Trading Education" },
            { icon: TrendingUp, text: "Proven Trading Strategies" }
          ].map((item, index) => (
            <div 
              key={item.text}
              className="flex items-center"
            >
              <item.icon className="w-4 h-4 mr-2 text-emerald-400" />
              <span className="text-sm">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919895822500"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed z-50 bottom-8 right-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
        style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.25)' }}
      >
        {/* WhatsApp SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="white">
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.584 2.236 6.393L4 29l7.828-2.205A12.94 12.94 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.917c-1.97 0-3.89-.514-5.56-1.486l-.396-.234-4.65 1.308 1.242-4.53-.258-.418A9.93 9.93 0 016.083 15c0-5.478 4.456-9.917 9.917-9.917S25.917 9.522 25.917 15 21.461 25.917 16 25.917zm5.13-7.13c-.28-.14-1.65-.815-1.905-.908-.255-.093-.44-.14-.625.14-.185.28-.715.908-.875 1.093-.16.185-.325.21-.605.07-.28-.14-1.18-.435-2.25-1.385-.83-.74-1.39-1.653-1.55-1.933-.16-.28-.017-.43.123-.57.127-.127.28-.33.42-.495.14-.165.187-.28.28-.465.093-.185.047-.35-.023-.49-.07-.14-.625-1.51-.855-2.07-.225-.54-.455-.47-.625-.48-.16-.007-.35-.01-.54-.01-.19 0-.5.07-.765.35-.265.28-1.01.99-1.01 2.415 0 1.425 1.035 2.8 1.18 2.995.14.19 2.04 3.12 5.01 4.25.7.24 1.25.38 1.68.485.705.18 1.345.155 1.85.095.565-.065 1.65-.675 1.885-1.33.235-.655.235-1.215.165-1.33-.07-.115-.255-.185-.535-.325z"/>
        </svg>
      </a>
    </section>
  );
};


export default AboutCourse; 
