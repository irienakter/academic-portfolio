import React from 'react';
import { publications } from '../data/mock';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { BookOpen, ExternalLink, FileText, Award } from 'lucide-react';

const Publications = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4 flex items-center justify-center gap-3">
            <BookOpen className="w-10 h-10 text-amber-600" />
            Publications
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Peer-reviewed research contributions in toxicity forecasting and online safety
          </p>
        </div>

        {/* Conference Papers Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-8 h-8 text-purple-700" />
            <h2 className="text-3xl font-bold text-purple-900">Conference Papers</h2>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card key={pub.id} className="border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <Badge className="bg-amber-500 text-white hover:bg-amber-600 mb-3">
                        {pub.year}
                      </Badge>
                      <CardTitle className="text-2xl text-purple-900 mb-2 leading-tight">
                        {pub.title}
                      </CardTitle>
                      <p className="text-gray-700 font-medium mb-2">{pub.authors}</p>
                      <p className="text-purple-700 font-semibold">{pub.venue}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* Abstract */}
                  <div className="mb-6 p-4 bg-purple-50 rounded-lg border border-purple-100">
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-bold text-purple-900">Abstract: </span>
                      {pub.abstract}
                    </p>
                  </div>

                  {/* Keywords */}
                  {pub.keywords && (
                    <div className="mb-6">
                      <h3 className="font-bold text-purple-900 mb-3">Keywords:</h3>
                      <div className="flex flex-wrap gap-2">
                        {pub.keywords.map((keyword, idx) => (
                          <Badge key={idx} variant="outline" className="border-purple-300 text-purple-700">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Links */}
                  <div>
                    <h3 className="font-bold text-purple-900 mb-3">Access:</h3>
                    <div className="flex flex-wrap gap-3">
                      {pub.links.ieee && (
                        <a href={pub.links.ieee} target="_blank" rel="noopener noreferrer">
                          <Button className="bg-purple-700 hover:bg-purple-800 text-white">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View on IEEE Xplore
                          </Button>
                        </a>
                      )}
                      {pub.links.pdf && (
                        <a href={pub.links.pdf} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className="border-amber-400 text-amber-700 hover:bg-amber-50">
                            <FileText className="w-4 h-4 mr-2" />
                            Download PDF
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Citation Information */}
        <Card className="border-purple-200 shadow-lg bg-gradient-to-br from-purple-50 to-white">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-900">How to Cite</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              For the official BibTeX citation, please use the "Cite This" option on IEEE Xplore. 
              If you reference this work in your research, please cite the published conference paper.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Publications;