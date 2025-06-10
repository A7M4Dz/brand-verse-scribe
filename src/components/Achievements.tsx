
import React from 'react';
import { BarChart3, Workflow, TrendingUp, Users } from 'lucide-react';

interface AchievementItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  image: string;
  category: string;
  impact: string;
  metrics: string[];
  skills: string[];
}

const achievementsData: AchievementItem[] = [
  {
    id: 'powerbi-dashboard',
    title: 'Power BI Analytics Dashboard',
    description: 'Developed comprehensive HR analytics dashboards for workforce insights and strategic decision-making, resulting in 40% faster data-driven decisions.',
    icon: BarChart3,
    image: '/lovable-uploads/powerbi-dashboard-template.png',
    category: 'Data Analytics',
    impact: '40% faster decision-making',
    metrics: ['40% efficiency gain', '15+ KPIs tracked', '100+ users'],
    skills: ['Power BI', 'Data Visualization', 'HR Analytics', 'SQL']
  },
  {
    id: 'workflow-automation',
    title: 'N8N Workflow Automation',
    description: 'Automated HR processes and workflows to improve efficiency and reduce manual tasks, saving 20+ hours weekly across the HR department.',
    icon: Workflow,
    image: '/lovable-uploads/n8n-workflow-template.png',
    category: 'Process Automation',
    impact: '20+ hours saved weekly',
    metrics: ['80% manual reduction', '5 workflows automated', '25% cost savings'],
    skills: ['N8N', 'Process Design', 'API Integration', 'Automation']
  }
];

const Achievements = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-linkedin-light-gray px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-32 w-36 h-36 border border-linkedin-blue rounded-full"></div>
        <div className="absolute bottom-32 right-24 w-28 h-28 border border-linkedin-blue/60 rounded-lg rotate-45"></div>
        <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-linkedin-blue/10 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-linkedin-blue/5 rounded-lg rotate-12"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-linkedin-blue to-blue-600 bg-clip-text text-transparent font-bold text-lg tracking-wide uppercase flex items-center gap-2 justify-center">
              <TrendingUp className="w-6 h-6 text-linkedin-blue" />
              Portfolio Highlights
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Proven <span className="bg-gradient-to-r from-linkedin-blue to-blue-600 bg-clip-text text-transparent">Impact</span> & Results
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-linkedin-gray max-w-4xl mx-auto leading-relaxed">
            Delivering measurable business value through innovative HR technology solutions and strategic process improvements
          </p>
          
          {/* Key metrics for hiring managers */}
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200/60 hover:border-linkedin-blue/40 transition-all duration-500 group">
              <Users className="w-8 h-8 text-linkedin-blue mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl font-bold text-linkedin-blue mb-2">100+</div>
              <div className="text-slate-600 font-medium text-sm">Users Impacted</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200/60 hover:border-linkedin-blue/40 transition-all duration-500 group">
              <TrendingUp className="w-8 h-8 text-linkedin-blue mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl font-bold text-linkedin-blue mb-2">40%</div>
              <div className="text-slate-600 font-medium text-sm">Efficiency Boost</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200/60 hover:border-linkedin-blue/40 transition-all duration-500 group">
              <BarChart3 className="w-8 h-8 text-linkedin-blue mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl font-bold text-linkedin-blue mb-2">20+</div>
              <div className="text-slate-600 font-medium text-sm">Hours Saved Weekly</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200/60 hover:border-linkedin-blue/40 transition-all duration-500 group">
              <Workflow className="w-8 h-8 text-linkedin-blue mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <div className="text-2xl font-bold text-linkedin-blue mb-2">80%</div>
              <div className="text-slate-600 font-medium text-sm">Process Automation</div>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {achievementsData.map((achievement, index) => {
            const IconComponent = achievement.icon;
            
            return (
              <div
                key={achievement.id}
                className="group bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-slate-200/60 hover:border-linkedin-blue/40 hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.02] hover:-translate-y-3 relative"
              >
                {/* Premium background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-linkedin-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Enhanced image/template preview */}
                <div className="relative h-56 sm:h-64 lg:h-72 bg-gradient-to-br from-linkedin-blue/10 to-blue-50 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Premium icon with background */}
                      <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 bg-gradient-to-br from-linkedin-blue to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
                        <IconComponent className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 text-white" />
                      </div>
                      
                      {/* Enhanced floating particles with 3s timing */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                        <div className="absolute -top-3 -right-3 w-3 h-3 bg-linkedin-blue rounded-full animate-[ping_3s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
                        <div className="absolute -bottom-3 -left-3 w-2 h-2 bg-blue-400 rounded-full animate-[ping_3s_cubic-bezier(0.4,0,0.6,1)_infinite] delay-1000"></div>
                        <div className="absolute top-6 -right-6 w-1.5 h-1.5 bg-linkedin-blue rounded-full animate-[ping_3s_cubic-bezier(0.4,0,0.6,1)_infinite] delay-500"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced background pattern */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                    <div className="absolute top-6 left-6 w-10 h-10 border border-linkedin-blue rounded-lg transform rotate-12"></div>
                    <div className="absolute bottom-8 right-8 w-8 h-8 border border-blue-400 rounded-full"></div>
                    <div className="absolute top-1/2 left-8 w-6 h-6 bg-linkedin-blue/20 rounded-sm transform -rotate-12"></div>
                    <div className="absolute top-12 right-16 w-4 h-4 bg-blue-400/30 rounded-full"></div>
                  </div>
                </div>
                
                {/* Enhanced content section */}
                <div className="p-8 sm:p-10 lg:p-12 relative z-10">
                  <div className="mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="inline-block px-4 py-2 bg-gradient-to-r from-linkedin-blue/10 to-blue-600/10 text-linkedin-blue text-sm font-semibold rounded-full group-hover:from-linkedin-blue/20 group-hover:to-blue-600/20 transition-all duration-500">
                        {achievement.category}
                      </span>
                      <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 text-sm font-semibold rounded-full">
                        {achievement.impact}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 group-hover:text-linkedin-blue transition-colors duration-500 leading-tight">
                      {achievement.title}
                    </h3>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed text-lg sm:text-xl lg:text-2xl group-hover:text-slate-700 transition-colors duration-500 mb-6">
                    {achievement.description}
                  </p>
                  
                  {/* Metrics showcase for hiring managers */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">Key Metrics</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {achievement.metrics.map((metric, metricIndex) => (
                        <div 
                          key={metricIndex}
                          className="bg-gradient-to-r from-linkedin-blue/5 to-blue-600/5 border border-linkedin-blue/20 rounded-xl p-3 text-center group-hover:from-linkedin-blue/10 group-hover:to-blue-600/10 transition-all duration-500"
                        >
                          <span className="text-linkedin-blue font-semibold text-sm">
                            {metric}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Skills showcase */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {achievement.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="bg-gradient-to-r from-linkedin-blue/10 to-blue-600/10 text-linkedin-blue px-3 py-2 rounded-full text-sm font-medium border border-linkedin-blue/20 group-hover:from-linkedin-blue/20 group-hover:to-blue-600/20 transition-all duration-500 transform group-hover:scale-105"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Enhanced bottom indicator */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0">
                    <div className="flex items-center justify-center gap-3 text-linkedin-blue font-semibold bg-gradient-to-r from-linkedin-blue/10 to-blue-600/10 backdrop-blur-sm rounded-full px-6 py-3 border border-linkedin-blue/30 shadow-lg">
                      <span className="text-lg">Project Details</span>
                      <div className="w-6 h-6 rounded-full bg-linkedin-blue/20 flex items-center justify-center">
                        <div className="w-2 h-2 bg-linkedin-blue rounded-full animate-bounce"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
