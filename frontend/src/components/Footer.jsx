import React from 'react';
import { personalInfo } from '../data/mock';
import { Mail, Linkedin, GraduationCap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-purple-200 bg-gradient-to-br from-purple-50 to-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-gold-400" />
              </div>
              <div>
                <h3 className="font-bold text-purple-900">{personalInfo.name}</h3>
                <p className="text-sm text-purple-600">{personalInfo.title}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              {personalInfo.institution}
            </p>
            <p className="text-sm text-gray-600">
              {personalInfo.lab}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-purple-900 mb-4">Research Focus</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Toxicity Forecasting</li>
              <li>• Cyberbullying Detection</li>
              <li>• Online Safety & Moderation</li>
              <li>• Interpretable AI</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-purple-900 mb-4">Connect</h3>
            <div className="space-y-3">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-purple-700 transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                {personalInfo.email}
              </a>
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-purple-700 transition-colors group"
              >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} {personalInfo.name} · Academic Portfolio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;