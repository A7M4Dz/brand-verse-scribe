
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
          Crafting Digital Experiences That Drive Results
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          I'm a Senior Product Designer with 8+ years transforming complex problems into intuitive solutions. 
          Currently leading design innovation at Fortune 500 companies, I bridge user needs with business objectives through data-driven design.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            View My Work
          </button>
          <button className="border-2 border-slate-300 hover:border-emerald-600 text-slate-700 hover:text-emerald-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
