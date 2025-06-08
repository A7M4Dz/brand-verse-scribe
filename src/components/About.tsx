
import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-8 text-center">About Me</h2>
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12">
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            With a decade of experience spanning startups to enterprise, I specialize in creating user-centered designs that solve real business challenges. 
            My expertise lies in transforming complex workflows into seamless digital experiences through strategic research, prototyping, and cross-functional collaboration.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            I'm passionate about mentoring emerging designers and advocating for inclusive design practices that make technology accessible to everyone. 
            When I'm not designing, you'll find me exploring new cities, photography, or contributing to open-source design systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
