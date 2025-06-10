
import React from 'react';
import { BarChart3, Workflow } from 'lucide-react';

interface AchievementItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  image: string;
  category: string;
}

const achievementsData: AchievementItem[] = [
  {
    id: 'powerbi-dashboard',
    title: 'Power BI Analytics Dashboard',
    description: 'Developed comprehensive HR analytics dashboards for workforce insights and strategic decision-making.',
    icon: BarChart3,
    image: '/lovable-uploads/powerbi-dashboard-template.png',
    category: 'Data Analytics'
  },
  {
    id: 'workflow-automation',
    title: 'N8N Workflow Automation',
    description: 'Automated HR processes and workflows to improve efficiency and reduce manual tasks.',
    icon: Workflow,
    image: '/lovable-uploads/n8n-workflow-template.png',
    category: 'Process Automation'
  }
];

const Achievements = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-linkedin-light-gray px-3 sm:px-4 lg:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 sm:mb-6 tracking-tight">
            Key Achievements
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-linkedin-gray max-w-3xl mx-auto leading-relaxed">
            Delivering impactful solutions through data analytics and process automation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {achievementsData.map((achievement, index) => {
            const IconComponent = achievement.icon;
            
            return (
              <div
                key={achievement.id}
                className="group bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-slate-200/60 hover:border-linkedin-blue/40 hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.02] hover:-translate-y-2"
              >
                {/* Image/Template Preview */}
                <div className="relative h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-linkedin-blue/10 to-blue-50 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Icon with background */}
                      <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-linkedin-blue to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
                        <IconComponent className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-white" />
                      </div>
                      
                      {/* Floating particles */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                        <div className="absolute -top-2 -right-2 w-2 h-2 bg-linkedin-blue rounded-full animate-[ping_3s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
                        <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-[ping_3s_cubic-bezier(0.4,0,0.6,1)_infinite] delay-1000"></div>
                        <div className="absolute top-4 -right-4 w-1 h-1 bg-linkedin-blue rounded-full animate-[ping_3s_cubic-bezier(0.4,0,0.6,1)_infinite] delay-500"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                    <div className="absolute top-4 left-4 w-8 h-8 border border-linkedin-blue rounded-lg transform rotate-12"></div>
                    <div className="absolute bottom-6 right-6 w-6 h-6 border border-blue-400 rounded-full"></div>
                    <div className="absolute top-1/2 left-6 w-4 h-4 bg-linkedin-blue/20 rounded-sm transform -rotate-12"></div>
                    <div className="absolute top-8 right-12 w-3 h-3 bg-blue-400/30 rounded-full"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 sm:p-8">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-linkedin-blue/10 to-blue-600/10 text-linkedin-blue text-sm font-semibold rounded-full mb-3 group-hover:from-linkedin-blue/20 group-hover:to-blue-600/20 transition-all duration-500">
                      {achievement.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-3 group-hover:text-linkedin-blue transition-colors duration-500">
                      {achievement.title}
                    </h3>
                  </div>
                  
                  <p className="text-slate-600 leading-relaxed text-base sm:text-lg group-hover:text-slate-700 transition-colors duration-500">
                    {achievement.description}
                  </p>
                  
                  {/* Bottom indicator */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <div className="flex items-center gap-2 text-linkedin-blue font-medium">
                      <span className="text-sm">View Details</span>
                      <div className="w-4 h-4 rounded-full bg-linkedin-blue/20 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-linkedin-blue rounded-full animate-bounce"></div>
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
