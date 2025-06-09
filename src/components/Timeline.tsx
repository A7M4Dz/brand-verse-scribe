
import React from 'react';

interface TimelineItem {
  dateRange: string;
  company: string;
  title: string;
  achievement: string;
  isCurrent?: boolean;
  logoUrl: string;
}

const timelineData: TimelineItem[] = [
  {
    dateRange: "Jan 2024 – Present",
    company: "Flynas",
    title: "Talent Development Officer",
    achievement: "Driving workforce development by automating key HR workflows and building analytics dashboards that improved decision-making efficiency by 40%.",
    isCurrent: true,
    logoUrl: "/lovable-uploads/d40ea9b9-3717-4f29-a72b-7e0a169ca268.png"
  },
  {
    dateRange: "Aug 2024 – Dec 2024",
    company: "Aramco",
    title: "HR Intern",
    achievement: "Supported onboarding and training processes for 100+ employees at Juymah site, streamlining orientation procedures and reducing time-to-productivity by 25%.",
    logoUrl: "/lovable-uploads/1b2fa2fb-689d-4d66-8047-64ed538b0780.png"
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-linkedin-light-gray px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">Experience</h2>
          <p className="text-lg sm:text-xl text-linkedin-gray max-w-2xl mx-auto">
            Building expertise across leading organizations in the Kingdom of Saudi Arabia.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line - hidden on mobile */}
          <div className="hidden sm:block absolute left-8 lg:left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-linkedin-blue via-linkedin-blue/50 to-linkedin-blue opacity-30"></div>
          
          {timelineData.map((item, index) => (
            <div key={index} className="relative flex flex-col sm:flex-row items-start mb-12 last:mb-0 group hover:bg-white/50 p-4 sm:p-6 lg:p-8 rounded-2xl transition-all duration-300 hover:shadow-xl">
              {/* Company Avatar */}
              <div className="relative z-10 flex-shrink-0 mb-4 sm:mb-0 sm:mr-8 self-center sm:self-start">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-2xl flex items-center justify-center shadow-xl border-4 border-white overflow-hidden transition-transform duration-300 group-hover:scale-110">
                  <img 
                    src={item.logoUrl} 
                    alt={`${item.company} logo`}
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain"
                  />
                </div>
                {/* Timeline dot - hidden on mobile */}
                <div className={`hidden sm:block absolute -left-3 lg:-left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 lg:w-5 lg:h-5 rounded-full border-4 border-white shadow-lg ${
                  item.isCurrent 
                    ? 'bg-linkedin-blue animate-pulse-blue' 
                    : 'bg-gray-400'
                }`}></div>
              </div>
              
              {/* Content */}
              <div className="flex-grow text-center sm:text-left">
                {/* Date range */}
                <div className="text-sm sm:text-base font-semibold text-linkedin-blue mb-3 bg-linkedin-blue/10 px-4 py-2 rounded-full inline-block">
                  {item.dateRange}
                </div>
                
                {/* Title and Company */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-lg sm:text-xl lg:text-2xl text-linkedin-blue font-bold mb-4">{item.company}</p>
                
                {/* Achievement */}
                <p className="text-linkedin-gray leading-relaxed text-base sm:text-lg lg:text-xl">{item.achievement}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
