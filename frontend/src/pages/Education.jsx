import React from 'react';
import { education } from '../data/mock';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <GraduationCap className="w-10 h-10 text-purple-700" />
            Education
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-700 to-amber-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Academic Background & Qualifications
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-5xl mx-auto space-y-10">
          {education.map((edu, index) => (
            <Card key={edu.id} className="border-gray-200 shadow-xl bg-white hover:shadow-2xl transition-all duration-300 overflow-hidden">
              {/* University Brand Header */}
              <div className={`h-2 ${index === 0 ? 'bg-gradient-to-r from-amber-500 to-purple-700' : 'bg-gradient-to-r from-teal-600 to-amber-500'}`}></div>
              
              <CardHeader className="pb-4">
                <div className="flex items-start gap-8">
                  {/* University Logo - Larger and More Prominent */}
                  <div className="flex-shrink-0">
                    <div className={`w-32 h-32 rounded-xl flex items-center justify-center p-4 shadow-lg ${
                      index === 0 
                        ? 'bg-gradient-to-br from-amber-50 to-purple-50 border-2 border-amber-400' 
                        : 'bg-gradient-to-br from-teal-50 to-amber-50 border-2 border-teal-400'
                    }`}>
                      <img 
                        src={edu.logo} 
                        alt={`${edu.institution} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Education Details */}
                  <div className="flex-1 pt-2">
                    <CardTitle className="text-3xl text-gray-900 mb-3 font-bold">{edu.degree}</CardTitle>
                    <p className={`font-bold text-xl mb-3 ${
                      index === 0 ? 'text-purple-700' : 'text-teal-700'
                    }`}>
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-5 h-5" />
                      <span className="text-base font-medium">{edu.period}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                {edu.focus && (
                  <div className={`border-l-4 pl-6 py-4 rounded-r-lg ${
                    index === 0 
                      ? 'border-amber-500 bg-amber-50' 
                      : 'border-teal-500 bg-teal-50'
                  }`}>
                    <p className="text-gray-800 leading-relaxed text-base">
                      <span className="font-bold text-gray-900">Research Focus: </span>
                      {edu.focus}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;