
import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@designer.com',
      href: 'mailto:hello@designer.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/designer',
      href: 'https://linkedin.com/in/designer'
    }
  ];

  return (
    <section className="py-20 bg-slate-800 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Ready to collaborate on your next project? I'm always excited to discuss new opportunities and creative challenges.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <a
                key={index}
                href={method.href}
                className="group bg-slate-700 hover:bg-emerald-600 rounded-lg p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <IconComponent className="w-8 h-8 text-emerald-400 group-hover:text-white mx-auto mb-4 transition-colors duration-300" />
                <h3 className="text-lg font-semibold text-white mb-2">{method.label}</h3>
                <p className="text-slate-300 group-hover:text-emerald-100 transition-colors duration-300">
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
