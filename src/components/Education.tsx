
import React from 'react';

interface EducationItem {
  year: string;
  institution: string;
  degree: string;
  field: string;
}

interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
}

const educationData: EducationItem[] = [
  {
    year: "2016",
    institution: "Design University",
    degree: "Master of Fine Arts",
    field: "Interaction Design"
  },
  {
    year: "2014",
    institution: "State University",
    degree: "Bachelor of Science",
    field: "Computer Science"
  }
];

const certificationData: CertificationItem[] = [
  {
    name: "Google UX Design Professional Certificate",
    issuer: "Google/Coursera",
    date: "2023"
  },
  {
    name: "Design Systems Certification",
    issuer: "Design+Research",
    date: "2022"
  },
  {
    name: "Figma Advanced Prototyping",
    issuer: "Figma Academy",
    date: "2022"
  },
  {
    name: "Human-Computer Interaction",
    issuer: "Stanford Online",
    date: "2021"
  }
];

const Education = () => {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Education & Certifications</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Education</h3>
            <div className="space-y-6">
              {educationData.map((item, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-slate-800">{item.degree}</h4>
                    <span className="text-emerald-600 font-medium">{item.year}</span>
                  </div>
                  <p className="text-slate-600 font-medium">{item.institution}</p>
                  <p className="text-slate-700">{item.field}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Certifications</h3>
            <div className="space-y-4">
              {certificationData.map((item, index) => (
                <div key={index} className="bg-slate-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-slate-800 mb-1">{item.name}</h4>
                  <div className="flex justify-between items-center">
                    <p className="text-slate-600">{item.issuer}</p>
                    <span className="text-emerald-600 font-medium">{item.date}</span>
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
