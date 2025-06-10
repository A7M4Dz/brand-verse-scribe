
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface TimelineItem {
  dateRange: string;
  company: string;
  title: string;
  achievement: string;
  isCurrent?: boolean;
  logoUrl: string;
  companyUrl: string;
}

const timelineData: TimelineItem[] = [
  {
    dateRange: "Jan 2025 – Present",
    company: "Flynas",
    title: "Talent Development Officer",
    achievement: "Driving workforce development by automating key HR workflows and building analytics dashboards that improved decision-making efficiency by 40%.",
    isCurrent: true,
    logoUrl: "/lovable-uploads/d40ea9b9-3717-4f29-a72b-7e0a169ca268.png",
    companyUrl: "https://www.flynas.com/en"
  },
  {
    dateRange: "Aug 2024 – Dec 2024",
    company: "Aramco",
    title: "HR Intern",
    achievement: "Supported onboarding and training processes for 100+ employees at Juymah site, streamlining orientation procedures and reducing time-to-productivity by 25%.",
    logoUrl: "/lovable-uploads/1b2fa2fb-689d-4d66-8047-64ed538b0780.png",
    companyUrl: "https://www.aramco.com/en"
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-slate-50 to-linkedin-light-gray px-3 sm:px-4 lg:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 sm:mb-6 tracking-tight">
            Professional Experience
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-linkedin-gray max-w-3xl mx-auto leading-relaxed">
            Building expertise across leading organizations in the Kingdom of Saudi Arabia
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Modern timeline line */}
          <div className="hidden sm:block absolute left-8 lg:left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-linkedin-blue via-linkedin-blue/40 to-transparent rounded-full shadow-sm"></div>
          
          <div className="space-y-6 sm:space-y-8">
            {timelineData.map((item, index) => (
              <div 
                key={index} 
                className="relative group"
              >
                {/* Timeline connector */}
                <div className={`hidden sm:block absolute left-6 lg:left-8 top-10 w-5 h-5 rounded-full border-4 border-white shadow-lg transition-all duration-500 ${
                  item.isCurrent 
                    ? 'bg-linkedin-blue animate-pulse-blue scale-110' 
                    : 'bg-slate-400 group-hover:bg-linkedin-blue group-hover:scale-110'
                }`}></div>

                {/* Experience card */}
                <a 
                  href={item.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block ml-0 sm:ml-20 lg:ml-24"
                >
                  <div className="bg-white/95 backdrop-blur-sm hover:bg-white border border-slate-200/60 hover:border-linkedin-blue/40 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.03] hover:-translate-y-2 cursor-pointer group">
                    {/* Header section */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 mb-6 sm:mb-8">
                      {/* Company logo */}
                      <div className="relative flex-shrink-0 mx-auto sm:mx-0">
                        <div className="relative">
                          {/* Animated background ring */}
                          <div className={`absolute inset-0 rounded-full transition-all duration-700 ${
                            item.isCurrent 
                              ? 'bg-gradient-to-br from-linkedin-blue/20 to-blue-600/20 animate-pulse-blue scale-125' 
                              : 'bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-linkedin-blue/20 group-hover:to-blue-600/20 group-hover:scale-125'
                          }`}></div>
                          
                          {/* Logo container */}
                          <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white/80 overflow-hidden transition-all duration-700 group-hover:scale-110 group-hover:shadow-3xl group-hover:border-linkedin-blue/30 group-hover:rotate-3">
                            <img 
                              src={item.logoUrl} 
                              alt={`${item.company} logo`}
                              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-18 lg:h-18 object-contain transition-all duration-700 group-hover:scale-110"
                            />
                            
                            {/* Hover glow effect */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-linkedin-blue/0 to-linkedin-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                          </div>
                          
                          {/* External link indicator with animation */}
                          <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-linkedin-blue to-blue-600 rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100 group-hover:rotate-12">
                            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                          
                          {/* Floating particles animation */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                            <div className="absolute top-2 right-4 w-1 h-1 bg-linkedin-blue rounded-full animate-ping delay-100"></div>
                            <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping delay-300"></div>
                            <div className="absolute top-6 left-2 w-0.5 h-0.5 bg-linkedin-blue rounded-full animate-ping delay-500"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Company info */}
                      <div className="flex-grow text-center sm:text-left">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4 mb-4">
                          <div className="space-y-2">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-linkedin-blue transition-colors duration-500">
                              {item.title}
                            </h3>
                            <p className="text-lg sm:text-xl lg:text-2xl text-linkedin-blue font-bold group-hover:text-linkedin-blue-hover transition-all duration-500 transform group-hover:scale-105">
                              {item.company}
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <span className={`inline-block text-sm sm:text-base font-bold px-4 sm:px-5 py-2 sm:py-3 rounded-2xl transition-all duration-500 transform group-hover:scale-105 ${
                              item.isCurrent 
                                ? 'bg-gradient-to-r from-linkedin-blue to-blue-600 text-white shadow-xl animate-pulse-blue' 
                                : 'bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 group-hover:from-linkedin-blue group-hover:to-blue-600 group-hover:text-white group-hover:shadow-xl'
                            }`}>
                              {item.dateRange}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Achievement */}
                    <div className="px-2 sm:px-0">
                      <p className="text-slate-600 leading-relaxed text-base sm:text-lg lg:text-xl group-hover:text-slate-700 transition-all duration-500 transform group-hover:translate-x-1">
                        {item.achievement}
                      </p>
                    </div>

                    {/* Enhanced hover effect indicator */}
                    <div className="mt-6 sm:mt-8 flex items-center justify-center sm:justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0">
                      <div className="flex items-center gap-3 bg-gradient-to-r from-linkedin-blue/10 to-blue-600/10 backdrop-blur-sm rounded-full px-4 py-2 border border-linkedin-blue/20">
                        <span className="text-sm sm:text-base text-linkedin-blue font-semibold">
                          Visit Company Website
                        </span>
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-linkedin-blue animate-bounce" />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
