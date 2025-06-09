
import React from 'react';

interface EducationItem {
  year: string;
  institution: string;
  degree: string;
  field: string;
  logoUrl: string;
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
    logoUrl: "/lovable-uploads/e8f13d9e-41e4-4aa1-a8c7-0a31908e58a8.png"
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
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-linkedin-light-gray via-gray-50 to-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">Education & Certifications</h2>
          <p className="text-lg sm:text-xl text-linkedin-gray max-w-2xl mx-auto">
            Continuously expanding knowledge and expertise in human resources and talent development.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center lg:text-left">Education</h3>
            <div className="space-y-6">
              {educationData.map((item, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg border-4 border-white flex-shrink-0 overflow-hidden">
                      <img 
                        src={item.logoUrl} 
                        alt={`${item.institution} logo`}
                        className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                        <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-0">{item.degree}</h4>
                        <span className="text-linkedin-blue font-semibold text-lg">{item.year}</span>
                      </div>
                      <p className="text-linkedin-blue font-bold text-lg mb-2">{item.institution}</p>
                      <p className="text-linkedin-gray text-lg">{item.field}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center lg:text-left">Certifications</h3>
            <div className="space-y-4">
              {certificationData.map((item, index) => (
                <div key={index} className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border hover:shadow-2xl transition-all duration-300 transform hover:scale-105 ${
                  item.status === 'under_process' 
                    ? 'border-linkedin-blue bg-gradient-to-r from-linkedin-blue/5 to-blue-50' 
                    : 'border-gray-100'
                }`}>
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                      item.status === 'under_process'
                        ? 'bg-gradient-to-br from-linkedin-blue to-blue-600 text-white shadow-lg'
                        : 'bg-linkedin-blue text-white'
                    }`}>
                      {item.issuer.substring(0, 2).toUpperCase()}
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                        <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 sm:mb-0">
                          {item.name}
                          {item.status === 'under_process' && (
                            <span className="ml-2 inline-block px-3 py-1 bg-linkedin-blue text-white text-xs font-semibold rounded-full">
                              In Progress
                            </span>
                          )}
                        </h4>
                        <span className={`font-semibold text-sm sm:text-base ${
                          item.status === 'under_process' ? 'text-linkedin-blue' : 'text-linkedin-blue'
                        }`}>{item.date}</span>
                      </div>
                      <p className="text-linkedin-gray font-medium text-base sm:text-lg">{item.issuer}</p>
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
