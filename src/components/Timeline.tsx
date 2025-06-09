
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
    <section id="timeline" className="py-20 bg-white px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Experience</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-linkedin-blue opacity-30"></div>
          
          {timelineData.map((item, index) => (
            <div key={index} className="relative flex items-start mb-12 last:mb-0 group hover:bg-linkedin-light-gray p-4 rounded-xl transition-all duration-300">
              {/* Company Avatar */}
              <div className="relative z-10 flex-shrink-0 mr-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md border-4 border-white overflow-hidden transition-transform duration-300 group-hover:scale-110">
                  <img 
                    src={item.logoUrl} 
                    alt={`${item.company} logo`}
                    className="w-8 h-8 object-contain"
                    srcSet={`${item.logoUrl} 2x`}
                  />
                </div>
                {/* Timeline dot */}
                <div className={`absolute -left-1 top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full border-4 border-white ${
                  item.isCurrent 
                    ? 'bg-linkedin-blue animate-pulse-blue shadow-lg' 
                    : 'bg-gray-400'
                }`}></div>
              </div>
              
              {/* Content */}
              <div className="flex-grow">
                {/* Date range */}
                <div className="text-sm font-medium text-linkedin-gray mb-2">
                  {item.dateRange}
                </div>
                
                {/* Title and Company */}
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-lg text-linkedin-blue font-semibold mb-3">{item.company}</p>
                
                {/* Achievement */}
                <p className="text-linkedin-gray leading-relaxed">{item.achievement}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
