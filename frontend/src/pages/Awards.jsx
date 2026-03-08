import React from 'react';
import { awards } from '../data/mock';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Award, Calendar, Trophy } from 'lucide-react';

const Awards = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Trophy className="w-10 h-10 text-amber-600" />
            Honors & Awards
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-700 to-amber-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recognition & Academic Achievements
          </p>
        </div>

        {/* Awards Grid */}
        <div className="max-w-4xl mx-auto space-y-6">
          {awards.map((award) => (
            <Card key={award.id} className="border-gray-200 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-md">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-gray-900 mb-2">{award.title}</CardTitle>
                    <p className="text-purple-700 font-semibold text-lg mb-2">{award.organization}</p>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{award.year}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed pl-20">{award.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;