import React from 'react';
import { education } from '../data/mock';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

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
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card key={edu.id} className="border-gray-200 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center flex-shrink-0 shadow-md">
                    {index === 0 ? (
                      <GraduationCap className="w-8 h-8 text-white" />
                    ) : (
                      <BookOpen className="w-8 h-8 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-gray-900 mb-2">{edu.degree}</CardTitle>
                    <p className="text-purple-700 font-semibold text-lg mb-2">{edu.institution}</p>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {edu.focus && (
                  <div className="border-l-4 border-amber-500 pl-6 py-3 bg-gray-50 rounded-r-lg">
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-semibold text-gray-900">Focus: </span>
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