
import React from 'react';
import { ExternalLink, Award } from 'lucide-react';

interface EducationItem {
  year: string;
  institution: string;
  degree: string;
  field: string;
  logoUrl: string;
  institutionUrl: string;
  gpa?: string;
  honors?: string[];
}

interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  logoUrl?: string;
  status?: string;
  credentialId?: string;
  relevance?: string;
}

const educationData: EducationItem[] = [
  {
    year: "2024",
    institution: "King Saud University",
    degree: "Bachelor of Business Administration (BBA)",
    field: "Human Resources Management",
    gpa: "Excellent",
    honors: ["Dean's List", "HR Excellence Award"],
    logoUrl: "/lovable-uploads/e8f13d9e-41e4-4aa1-a8c7-0a31908e58a8.png",
    institutionUrl: "https://ksu.edu.sa/en"
  }
];

const certificationData: CertificationItem[] = [
  {
    name: "CIPD Level 5",
    issuer: "Tharwah",
    date: "In Progress",
    status: "under_process",
    relevance: "Advanced HR Practice",
    credentialId: "TH-2024-HR"
  },
  {
    name: "HR Analytics & Automation",
    issuer: "Professional Development",
    date: "2024",
    relevance: "Data-Driven HR",
    credentialId: "PD-2024-HA"
  },
  {
    name: "Talent Development Specialist",
    issuer: "HR Institute",
    date: "2024",
    relevance: "Leadership Development",
    credentialId: "HRI-2024-TD"
  },
  {
    name: "Workforce Planning & Strategy",
    issuer: "Business Academy",
    date: "2023",
    relevance: "Strategic HR",
    credentialId: "BA-2023-WP"
  }
];

const Education = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-linkedin-light-gray via-slate-50 to-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Professional background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 right-24 w-40 h-40 border border-linkedin-blue rounded-full"></div>
        <div className="absolute bottom-32 left-24 w-28 h-28 border border-linkedin-blue/60 rounded-lg rotate-12"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-linkedin-blue/10 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 sm:mb-20">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-linkedin-blue to-blue-600 bg-clip-text text-transparent font-bold text-lg tracking-wide uppercase">
              Academic Excellence
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Credentials & <span className="bg-gradient-to-r from-linkedin-blue to-blue-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-linkedin-gray max-w-4xl mx-auto leading-relaxed">
            Combining strong academic foundation with industry-recognized certifications for comprehensive HR expertise
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Enhanced Education Section */}
          <div className="space-y-8">
            <div className="text-center lg:text-left mb-10">
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 flex items-center justify-center lg:justify-start gap-3">
                <Award className="w-8 h-8 text-linkedin-blue" />
                Education
              </h3>
              <p className="text-lg text-linkedin-gray">Premier academic foundation in HR management</p>
            </div>
            
            <div className="space-y-6">
              {educationData.map((item, index) => (
                <a
                  key={index}
                  href={item.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="bg-white/95 backdrop-blur-sm hover:bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-xl border border-slate-200/60 hover:border-linkedin-blue/40 hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.02] hover:-translate-y-3 cursor-pointer relative overflow-hidden">
                    {/* Premium background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-linkedin-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-10 relative z-10">
                      <div className="relative flex-shrink-0">
                        <div className="relative">
                          {/* Enhanced background ring */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-linkedin-blue/20 group-hover:to-blue-600/20 transition-all duration-700 group-hover:scale-125"></div>
                          
                          {/* Premium logo container */}
                          <div className="relative w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white/90 overflow-hidden transition-all duration-700 group-hover:scale-110 group-hover:shadow-3xl group-hover:border-linkedin-blue/30 group-hover:-rotate-2">
                            <img 
                              src={item.logoUrl} 
                              alt={`${item.institution} logo`}
                              className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain transition-all duration-700 group-hover:scale-110"
                            />
                            
                            {/* Premium hover glow */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-linkedin-blue/0 to-linkedin-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                          </div>
                          
                          {/* Enhanced external link indicator */}
                          <div className="absolute -top-3 -right-3 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-linkedin-blue to-blue-600 rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100 group-hover:-rotate-12">
                            <ExternalLink className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-grow text-center sm:text-left">
                        <div className="space-y-4 mb-6">
                          <div className="space-y-3">
                            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 group-hover:text-linkedin-blue transition-all duration-500 transform group-hover:scale-105 leading-tight">
                              {item.degree}
                            </h4>
                            <p className="text-linkedin-blue font-bold text-xl sm:text-2xl lg:text-3xl group-hover:text-linkedin-blue-hover transition-all duration-500">
                              {item.institution}
                            </p>
                            <p className="text-slate-600 text-lg sm:text-xl lg:text-2xl group-hover:text-slate-700 transition-colors duration-500">
                              {item.field}
                            </p>
                            
                            {/* GPA and honors for hiring managers */}
                            <div className="flex flex-wrap gap-3 justify-center sm:justify-start mt-4">
                              <span className="bg-gradient-to-r from-linkedin-blue/10 to-blue-600/10 text-linkedin-blue px-4 py-2 rounded-full text-sm font-semibold border border-linkedin-blue/20">
                                {item.gpa}
                              </span>
                              {item.honors?.map((honor, honorIndex) => (
                                <span 
                                  key={honorIndex}
                                  className="bg-gradient-to-r from-linkedin-blue/10 to-blue-600/10 text-linkedin-blue px-4 py-2 rounded-full text-sm font-medium border border-linkedin-blue/20"
                                >
                                  {honor}
                                </span>
                              ))}
                            </div>
                          </div>
                          <span className="inline-block text-linkedin-blue font-bold text-lg sm:text-xl bg-gradient-to-r from-linkedin-blue/10 to-blue-600/10 px-6 py-3 rounded-2xl group-hover:from-linkedin-blue/20 group-hover:to-blue-600/20 transition-all duration-500 transform group-hover:scale-105 shadow-lg">
                            {item.year}
                          </span>
                        </div>
                        
                        {/* Enhanced hover effect indicator */}
                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0">
                          <div className="flex items-center justify-center sm:justify-start gap-3 bg-gradient-to-r from-linkedin-blue/15 to-blue-600/15 backdrop-blur-sm rounded-full px-6 py-3 border border-linkedin-blue/30 w-fit shadow-lg">
                            <span className="text-linkedin-blue font-semibold">
                              Visit University Website
                            </span>
                            <ExternalLink className="w-5 h-5 text-linkedin-blue animate-bounce" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Certifications Section */}
          <div className="space-y-8">
            <div className="text-center lg:text-left mb-10">
              <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 flex items-center justify-center lg:justify-start gap-3">
                <Award className="w-8 h-8 text-linkedin-blue" />
                Certifications
              </h3>
              <p className="text-lg text-linkedin-gray">Industry-recognized professional credentials</p>
            </div>
            
            <div className="space-y-6">
              {certificationData.map((item, index) => (
                <div key={index} className={`group bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.02] hover:-translate-y-2 relative overflow-hidden ${
                  item.status === 'under_process' 
                    ? 'border-linkedin-blue/40 bg-gradient-to-r from-linkedin-blue/15 to-blue-50/60 hover:from-linkedin-blue/25 hover:to-blue-50/80' 
                    : 'border-slate-200/60 hover:border-linkedin-blue/40 hover:bg-white'
                }`}>
                  {/* Premium background for in-progress items */}
                  {item.status === 'under_process' && (
                    <div className="absolute inset-0 bg-gradient-to-br from-linkedin-blue/10 to-transparent opacity-50"></div>
                  )}
                  
                  <div className="flex items-start gap-6 sm:gap-8 lg:gap-10 relative z-10">
                    <div className="relative">
                      {/* Enhanced logo container with 3s pulse */}
                      <div className={`w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center font-bold text-lg flex-shrink-0 transition-all duration-700 transform group-hover:scale-110 group-hover:rotate-6 shadow-xl ${
                        item.status === 'under_process'
                          ? 'bg-gradient-to-br from-linkedin-blue to-blue-600 text-white shadow-xl animate-[pulse_3s_cubic-bezier(0.4,0,0.6,1)_infinite]'
                          : 'bg-gradient-to-br from-linkedin-blue to-blue-500 text-white shadow-lg group-hover:shadow-xl'
                      }`}>
                        {item.issuer.substring(0, 2).toUpperCase()}
                      </div>
                      
                      {/* Enhanced floating particles for in-progress items with 3s delay */}
                      {item.status === 'under_process' && (
                        <div className="absolute inset-0">
                          <div className="absolute -top-2 -right-2 w-3 h-3 bg-linkedin-blue rounded-full animate-[ping_3s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
                          <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-blue-400 rounded-full animate-[ping_3s_cubic-bezier(0.4,0,0.6,1)_infinite] delay-1000"></div>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-grow min-w-0">
                      <div className="space-y-4 mb-6">
                        <div className="space-y-2">
                          <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 leading-tight group-hover:text-linkedin-blue transition-colors duration-500">
                            {item.name}
                            {item.status === 'under_process' && (
                              <span className="ml-4 inline-block px-4 py-2 bg-gradient-to-r from-linkedin-blue to-blue-600 text-white text-sm font-bold rounded-full shadow-md animate-[pulse_3s_cubic-bezier(0.4,0,0.6,1)_infinite] transform scale-95 group-hover:scale-100 transition-transform duration-300">
                                In Progress
                              </span>
                            )}
                          </h4>
                          <p className="text-slate-600 font-medium text-lg sm:text-xl lg:text-2xl group-hover:text-slate-700 transition-colors duration-500">
                            {item.issuer}
                          </p>
                          
                          {/* Professional details for hiring managers */}
                          <div className="flex flex-wrap gap-3 mt-3">
                            <span className="bg-gradient-to-r from-linkedin-blue/10 to-blue-600/10 text-linkedin-blue px-3 py-1 rounded-full text-sm font-medium border border-linkedin-blue/20">
                              {item.relevance}
                            </span>
                            <span className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm font-medium">
                              ID: {item.credentialId}
                            </span>
                          </div>
                        </div>
                        <span className={`inline-block font-bold text-lg sm:text-xl lg:text-2xl transition-all duration-500 transform group-hover:scale-105 ${
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
