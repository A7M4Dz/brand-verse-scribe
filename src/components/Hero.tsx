
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Photo Area */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-linkedin-light-gray rounded-full shadow-lg flex items-center justify-center border-4 border-white">
            <div className="text-linkedin-gray text-4xl font-bold">
              JD
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
          Transforming Organizations Through Strategic Talent Development
        </h1>
        
        <p className="text-xl md:text-2xl text-linkedin-gray mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
          HR Professional with 2+ years driving workforce excellence at leading organizations like Aramco and Flynas. 
          Specialized in automation, analytics, and scalable training solutions that deliver measurable business impact.
        </p>
        
        <div className="flex justify-center gap-4">
          <button className="bg-linkedin-blue hover:bg-linkedin-blue-hover text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md">
            View My Work
          </button>
          <button className="border-2 border-linkedin-blue hover:bg-linkedin-blue hover:text-white text-linkedin-blue px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-md">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
