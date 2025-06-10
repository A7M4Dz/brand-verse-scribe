
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface EducationItem {
  year: string;
  institution: string;
  degree: string;
  field: string;
  logoUrl: string;
  institutionUrl: string;
}

interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  logoUrl?: string;
  status?: string;
}

const educationData: EducationItem[] = [
  {
    year: "2024",
    institution: "King Saud University",
    degree: "Bachelor of Business Administration (BBA)",
    field: "Human Resources Management",
    logoUrl: "/lovable-uploads/e8f13d9e-41e4-4aa1-a8c7-0a31908e58a8.png",
    institutionUrl: "https://ksu.edu.sa/en"
  }
];

const certificationData: CertificationItem[] = [
  {
    name: "CIPD Level 5",
    issuer: "Tharwah",
    date: "In Progress",
    status: "under_process"
  },
  {
    name: "HR Analytics & Automation",
    issuer: "Professional Development",
    date: "2024"
  },
  {
    name: "Talent Development Specialist",
    issuer: "HR Institute",
    date: "2024"
  },
  {
    name: "Workforce Planning & Strategy",
    issuer: "Business Academy",
    date: "2023"
  }
];

const Education = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-linkedin-light-gray via-slate-50 to-white px-3 sm:px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 sm:mb-6 tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-linkedin-gray max-w-3xl mx-auto leading-relaxed">
            Continuously expanding knowledge and expertise in human resources and talent development
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8 text-center lg:text-left">
              Education
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {educationData.map((item, index) => (
                <a
                  key={index}
                  href={item.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="bg-white/95 backdrop-blur-sm hover:bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-200/60 hover:border-linkedin-blue/40 hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.03] hover:-translate-y-2 cursor-pointer">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
                      <div className="relative flex-shrink-0">
                        <div className="relative">
                          {/* Animated background ring */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-linkedin-blue/20 group-hover:to-blue-600/20 transition-all duration-700 group-hover:scale-125"></div>
                          
                          {/* Logo container */}
                          <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white/80 overflow-hidden transition-all duration-700 group-hover:scale-110 group-hover:shadow-3xl group-hover:border-linkedin-blue/30 group-hover:-rotate-3">
                            <img 
                              src={item.logoUrl} 
                              alt={`${item.institution} logo`}
                              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-18 lg:h-18 object-contain transition-all duration-700 group-hover:scale-110"
                            />
                            
                            {/* Hover glow effect */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-linkedin-blue/0 to-linkedin-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                          </div>
                          
                          {/* External link indicator */}
                          <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-linkedin-blue to-blue-600 rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100 group-hover:-rotate-12">
                            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                          
                          {/* Floating particles */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                            <div className="absolute top-3 right-5 w-1 h-1 bg-linkedin-blue rounded-full animate-ping delay-200"></div>
                            <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping delay-400"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-grow text-center sm:text-left">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4 mb-4">
                          <div className="space-y-2">
                            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 group-hover:text-linkedin-blue transition-all duration-500 transform group-hover:scale-105">
                              {item.degree}
                            </h4>
                            <p className="text-linkedin-blue font-bold text-base sm:text-lg lg:text-xl group-hover:text-linkedin-blue-hover transition-all duration-500">
                              {item.institution}
                            </p>
                            <p className="text-slate-600 text-sm sm:text-base lg:text-lg group-hover:text-slate-700 transition-colors duration-500">
                              {item.field}
                            </p>
                          </div>
                          <span className="text-linkedin-blue font-bold text-base sm:text-lg bg-gradient-to-r from-linkedin-blue/10 to-blue-600/10 px-4 py-2 rounded-2xl group-hover:from-linkedin-blue/20 group-hover:to-blue-600/20 transition-all duration-500 transform group-hover:scale-105">
                            {item.year}
                          </span>
                        </div>
                        
                        {/* Enhanced hover effect indicator */}
                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                          <div className="flex items-center justify-center sm:justify-start gap-2 bg-gradient-to-r from-linkedin-blue/10 to-blue-600/10 backdrop-blur-sm rounded-full px-3 py-2 border border-linkedin-blue/20 w-fit">
                            <span className="text-xs sm:text-sm text-linkedin-blue font-medium">
                              Visit University Website
                            </span>
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-linkedin-blue animate-bounce" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8 text-center lg:text-left">
              Certifications
            </h3>
            <div className="space-y-4 sm:space-y-5">
              {certificationData.map((item, index) => (
                <div key={index} className={`group bg-white/95 backdrop-blur-sm rounded-3xl p-5 sm:p-6 lg:p-8 shadow-xl border hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.02] hover:-translate-y-1 ${
                  item.status === 'under_process' 
                    ? 'border-linkedin-blue/40 bg-gradient-to-r from-linkedin-blue/15 to-blue-50/60 hover:from-linkedin-blue/25 hover:to-blue-50/80' 
                    : 'border-slate-200/60 hover:border-linkedin-blue/40 hover:bg-white'
                }`}>
                  <div className="flex items-start gap-4 sm:gap-5 lg:gap-6">
                    <div className="relative">
                      {/* Animated logo container */}
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center font-bold text-sm sm:text-base flex-shrink-0 transition-all duration-700 transform group-hover:scale-110 group-hover:rotate-6 ${
                        item.status === 'under_process'
                          ? 'bg-gradient-to-br from-linkedin-blue to-blue-600 text-white shadow-xl animate-pulse-blue'
                          : 'bg-gradient-to-br from-linkedin-blue to-blue-500 text-white shadow-lg group-hover:shadow-xl'
                      }`}>
                        {item.issuer.substring(0, 2).toUpperCase()}
                      </div>
                      
                      {/* Floating particles for in-progress items */}
                      {item.status === 'under_process' && (
                        <div className="absolute inset-0">
                          <div className="absolute -top-1 -right-1 w-2 h-2 bg-linkedin-blue rounded-full animate-ping"></div>
                          <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-500"></div>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-grow min-w-0">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-3 mb-3">
                        <div className="space-y-1">
                          <h4 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 leading-tight group-hover:text-linkedin-blue transition-colors duration-500">
                            {item.name}
                            {item.status === 'under_process' && (
                              <span className="ml-3 inline-block px-3 py-1 bg-gradient-to-r from-linkedin-blue to-blue-600 text-white text-xs font-bold rounded-full shadow-md animate-pulse-blue transform scale-95 group-hover:scale-100 transition-transform duration-300">
                                In Progress
                              </span>
                            )}
                          </h4>
                          <p className="text-slate-600 font-medium text-sm sm:text-base lg:text-lg group-hover:text-slate-700 transition-colors duration-500">
                            {item.issuer}
                          </p>
                        </div>
                        <span className={`font-bold text-sm sm:text-base lg:text-lg flex-shrink-0 transition-all duration-500 transform group-hover:scale-105 ${
                          item.status === 'under_process' ? 'text-linkedin-blue' : 'text-linkedin-blue group-hover:text-linkedin-blue-hover'
                        }`}>
                          {item.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
