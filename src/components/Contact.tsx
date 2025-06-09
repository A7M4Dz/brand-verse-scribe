
import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/yourprofile',
      href: 'https://linkedin.com/in/yourprofile',
      isLinkedIn: true
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@yourname.com',
      href: 'mailto:hello@yourname.com',
      isLinkedIn: false
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      isLinkedIn: false
    }
  ];

  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-8">Let's Connect</h2>
        <p className="text-xl text-linkedin-gray mb-12 max-w-2xl mx-auto font-medium">
          Ready to collaborate on your next project? I'm always excited to discuss new opportunities and creative challenges.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <a
                key={index}
                href={method.href}
                className={`group bg-white border-2 border-gray-200 rounded-xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                  method.isLinkedIn 
                    ? 'hover:bg-linkedin-blue hover:border-linkedin-blue' 
                    : 'hover:border-linkedin-blue'
                }`}
              >
                <IconComponent className={`w-8 h-8 mx-auto mb-4 transition-colors duration-300 ${
                  method.isLinkedIn 
                    ? 'text-linkedin-blue group-hover:text-white' 
                    : 'text-linkedin-blue'
                }`} />
                <h3 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                  method.isLinkedIn 
                    ? 'text-slate-900 group-hover:text-white' 
                    : 'text-slate-900'
                }`}>{method.label}</h3>
                <p className={`transition-colors duration-300 ${
                  method.isLinkedIn 
                    ? 'text-linkedin-gray group-hover:text-blue-100' 
                    : 'text-linkedin-gray'
                }`}>
                  {method.value}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
