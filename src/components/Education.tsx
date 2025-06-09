
import React from 'react';

interface EducationItem {
  year: string;
  institution: string;
  degree: string;
  field: string;
  institutionInitials: string;
}

interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  issuerInitials: string;
}

const educationData: EducationItem[] = [
  {
    year: "2016",
    institution: "Design University",
    degree: "Master of Fine Arts",
    field: "Interaction Design",
    institutionInitials: "DU"
  },
  {
    year: "2014",
    institution: "State University",
    degree: "Bachelor of Science",
    field: "Computer Science",
    institutionInitials: "SU"
  }
];

const certificationData: CertificationItem[] = [
  {
    name: "Google UX Design Professional Certificate",
    issuer: "Google/Coursera",
    date: "2023",
    issuerInitials: "G"
  },
  {
    name: "Design Systems Certification",
    issuer: "Design+Research",
    date: "2022",
    issuerInitials: "D+"
  },
  {
    name: "Figma Advanced Prototyping",
    issuer: "Figma Academy",
    date: "2022",
    issuerInitials: "F"
  },
  {
    name: "Human-Computer Interaction",
    issuer: "Stanford Online",
    date: "2021",
    issuerInitials: "S"
  }
];

const Education = () => {
  return (
    <section className="py-20 bg-linkedin-light-gray px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Education & Certifications</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Education</h3>
            <div className="space-y-6">
              {educationData.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-linkedin-blue text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {item.institutionInitials}
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-bold text-slate-900">{item.degree}</h4>
                        <span className="text-linkedin-blue font-semibold text-sm">{item.year}</span>
                      </div>
                      <p className="text-linkedin-gray font-semibold mb-1">{item.institution}</p>
                      <p className="text-linkedin-gray">{item.field}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Certifications</h3>
            <div className="space-y-4">
              {certificationData.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-linkedin-blue text-white rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0">
                      {item.issuerInitials}
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-lg font-bold text-slate-900 mb-1">{item.name}</h4>
                      <div className="flex justify-between items-center">
                        <p className="text-linkedin-gray font-medium">{item.issuer}</p>
                        <span className="text-linkedin-blue font-semibold text-sm">{item.date}</span>
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
