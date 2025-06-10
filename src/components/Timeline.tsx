
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
  metrics?: string;
  skills?: string[];
}

const timelineData: TimelineItem[] = [
  {
    dateRange: "Jan 2025 – Present",
    company: "Flynas",
    title: "Talent Development Officer",
    achievement: "Driving workforce development by automating key HR workflows and building analytics dashboards that improved decision-making efficiency by 40%.",
    metrics: "40% efficiency improvement",
    skills: ["HR Analytics", "Process Automation", "Talent Development"],
    isCurrent: true,
    logoUrl: "/lovable-uploads/d40ea9b9-3717-4f29-a72b-7e0a169ca268.png",
    companyUrl: "https://www.flynas.com/en"
  },
  {
    dateRange: "Aug 2024 – Dec 2024",
    company: "Aramco",
    title: "HR Intern",
    achievement: "Supported onboarding and training processes for 100+ employees at Juymah site, streamlining orientation procedures and reducing time-to-productivity by 25%.",
    metrics: "100+ employees, 25% productivity boost",
    skills: ["Employee Onboarding", "Training Programs", "Process Optimization"],
    logoUrl: "/lovable-uploads/1b2fa2fb-689d-4d66-8047-64ed538b0780.png",
    companyUrl: "https://www.aramco.com/en"
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-slate-50 to-linkedin-light-gray px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background pattern for professionalism */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-linkedin-blue rounded-full"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 border border-linkedin-blue/60 rounded-lg rotate-45"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-linkedin-blue/10 rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-linkedin-blue to-blue-600 bg-clip-text text-transparent font-bold text-lg tracking-wide uppercase">
              Professional Journey
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
            Proven <span className="bg-gradient-to-r from-linkedin-blue to-blue-600 bg-clip-text text-transparent">Track Record</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-linkedin-gray max-w-4xl mx-auto leading-relaxed">
            Delivering measurable results across leading organizations in Saudi Arabia's dynamic business landscape
          </p>
          
          {/* Professional metrics highlight */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200/60">
              <div className="text-2xl font-bold text-linkedin-blue mb-1">40%</div>
              <div className="text-slate-600 font-medium text-sm">Efficiency Improvement</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200/60">
              <div className="text-2xl font-bold text-linkedin-blue mb-1">100+</div>
              <div className="text-slate-600 font-medium text-sm">Employees Impacted</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-slate-200/60">
              <div className="text-2xl font-bold text-linkedin-blue mb-1">25%</div>
              <div className="text-slate-600 font-medium text-sm">Productivity Boost</div>
            </div>
          </div>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Professional timeline line with 5s pulse */}
          <div className="hidden sm:block absolute left-10 lg:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-linkedin-blue via-linkedin-blue/40 to-transparent rounded-full shadow-sm"></div>
          
          <div className="space-y-6 sm:space-y-8">
            {timelineData.map((item, index) => (
              <div 
                key={index} 
                className="relative group"
              >
                {/* Timeline connector with 5s pulse frequency */}
                <div className={`hidden sm:block absolute left-8 lg:left-10 top-8 w-6 h-6 rounded-full border-4 border-white shadow-xl transition-all duration-700 ${
                  item.isCurrent 
                    ? 'bg-linkedin-blue animate-[pulse_5s_cubic-bezier(0.4,0,0.6,1)_infinite] scale-110 ring-4 ring-linkedin-blue/20' 
                    : 'bg-slate-400 group-hover:bg-linkedin-blue group-hover:scale-110'
                }`}></div>

                {/* Enhanced experience card with professional focus */}
                <a 
                  href={item.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block ml-0 sm:ml-24 lg:ml-28"
                >
                  <div className="bg-white/95 backdrop-blur-sm hover:bg-white border border-slate-200/60 hover:border-linkedin-blue/40 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.02] hover:-translate-y-2 cursor-pointer group relative overflow-hidden">
                    {/* Subtle background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-linkedin-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Header section with enhanced layout */}
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8 mb-6 relative z-10">
                      {/* Enhanced company logo */}
                      <div className="relative flex-shrink-0 mx-auto lg:mx-0">
                        <div className="relative">
                          {/* Professional background ring with 5s pulse */}
                          <div className={`absolute inset-0 rounded-full transition-all duration-700 ${
                            item.isCurrent 
                              ? 'bg-gradient-to-br from-linkedin-blue/20 to-blue-600/20 animate-[pulse_5s_cubic-bezier(0.4,0,0.6,1)_infinite] scale-125' 
                              : 'bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-linkedin-blue/20 group-hover:to-blue-600/20 group-hover:scale-125'
                          }`}></div>
                          
                          {/* Logo container with premium styling */}
                          <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white/90 overflow-hidden transition-all duration-700 group-hover:scale-110 group-hover:shadow-3xl group-hover:border-linkedin-blue/30 group-hover:rotate-2">
                            <img 
                              src={item.logoUrl} 
                              alt={`${item.company} logo`}
                              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain transition-all duration-700 group-hover:scale-110"
                            />
                            
                            {/* Premium hover glow */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-linkedin-blue/0 to-linkedin-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                          </div>
                          
                          {/* Professional external link indicator */}
                          <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-linkedin-blue to-blue-600 rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100 group-hover:rotate-12">
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Enhanced company info with professional styling */}
                      <div className="flex-grow text-center lg:text-left">
                        <div className="space-y-2 mb-4">
                          <div className="space-y-2">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-tight group-hover:text-linkedin-blue transition-colors duration-500">
                              {item.title}
                            </h3>
                            <p className="text-lg sm:text-xl lg:text-2xl text-linkedin-blue font-bold group-hover:text-linkedin-blue-hover transition-all duration-500 transform group-hover:scale-105">
                              {item.company}
                            </p>
                            {/* Metrics highlight for hiring managers */}
                            <div className="inline-block bg-gradient-to-r from-linkedin-blue/10 to-blue-600/10 px-3 py-1.5 rounded-full border border-linkedin-blue/20">
                              <span className="text-linkedin-blue font-semibold text-sm">
                                {item.metrics}
                              </span>
                            </div>
                          </div>
                          <div className="flex justify-center lg:justify-start">
                            <span className={`inline-block text-sm sm:text-base font-bold px-4 py-2 rounded-xl transition-all duration-500 transform group-hover:scale-105 shadow-lg ${
                              item.isCurrent 
                                ? 'bg-gradient-to-r from-linkedin-blue to-blue-600 text-white shadow-xl animate-[pulse_5s_cubic-bezier(0.4,0,0.6,1)_infinite]' 
                                : 'bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 group-hover:from-linkedin-blue group-hover:to-blue-600 group-hover:text-white group-hover:shadow-xl'
                            }`}>
                              {item.dateRange}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced achievement section */}
                    <div className="relative z-10 mb-6">
                      <p className="text-slate-600 leading-relaxed text-base sm:text-lg lg:text-xl group-hover:text-slate-700 transition-all duration-500 transform group-hover:translate-x-2 mb-4">
                        {item.achievement}
                      </p>
                      
                      {/* Skills showcase for hiring managers */}
                      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                        {item.skills?.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="bg-gradient-to-r from-linkedin-blue/10 to-blue-600/10 text-linkedin-blue px-3 py-1 rounded-full text-xs font-medium border border-linkedin-blue/20 group-hover:from-linkedin-blue/20 group-hover:to-blue-600/20 transition-all duration-500 transform group-hover:scale-105"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Premium hover effect indicator */}
                    <div className="relative z-10 flex items-center justify-center lg:justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0">
                      <div className="flex items-center gap-3 bg-gradient-to-r from-linkedin-blue/15 to-blue-600/15 backdrop-blur-sm rounded-full px-4 py-2 border border-linkedin-blue/30 shadow-lg">
                        <span className="text-linkedin-blue font-semibold text-sm">
                          View Company Profile
                        </span>
                        <ExternalLink className="w-4 h-4 text-linkedin-blue animate-bounce" />
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
