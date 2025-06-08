
import React from 'react';

interface TimelineItem {
  year: string;
  company: string;
  title: string;
  achievement: string;
  isCurrent?: boolean;
}

const timelineData: TimelineItem[] = [
  {
    year: "2022",
    company: "TechCorp Inc.",
    title: "Senior Product Designer",
    achievement: "Led design transformation resulting in 40% increase in user engagement across 3 product lines.",
    isCurrent: true
  },
  {
    year: "2020",
    company: "InnovateLabs",
    title: "Product Designer",
    achievement: "Redesigned core platform reducing user onboarding time by 60% and improving retention by 25%."
  },
  {
    year: "2018",
    company: "StartupX",
    title: "UX/UI Designer",
    achievement: "Built design system from scratch supporting 5 products and establishing company design standards."
  },
  {
    year: "2016",
    company: "DesignStudio",
    title: "Junior Designer",
    achievement: "Contributed to 15+ client projects including award-winning mobile app with 2M+ downloads."
  }
];

const Timeline = () => {
  return (
    <section className="py-20 bg-slate-50 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Career Journey</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-300"></div>
          
          {timelineData.map((item, index) => (
            <div key={index} className="relative flex items-start mb-12 last:mb-0">
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0">
                <div className={`w-4 h-4 rounded-full border-4 border-white ${
                  item.isCurrent 
                    ? 'bg-emerald-600 animate-pulse shadow-lg shadow-emerald-600/50' 
                    : 'bg-slate-400'
                }`}></div>
              </div>
              
              {/* Content */}
              <div className="ml-8 bg-white rounded-lg p-6 shadow-sm border border-slate-200 flex-grow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-slate-800">
                    {item.title}
                  </h3>
                  <span className="text-emerald-600 font-medium">{item.year}</span>
                </div>
                <p className="text-lg text-slate-600 mb-2 font-medium">{item.company}</p>
                <p className="text-slate-700 leading-relaxed">{item.achievement}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
