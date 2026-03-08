import React from 'react';
import { news } from '../data/mock';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Newspaper, Calendar, ExternalLink, Users, Award } from 'lucide-react';

const News = () => {
  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Newspaper className="w-10 h-10 text-purple-700" />
            News & Media Coverage
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-700 to-amber-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Research highlights and media features
          </p>
        </div>

        {/* News Articles */}
        <div className="max-w-5xl mx-auto space-y-8">
          {news.map((article) => (
            <Card key={article.id} className="border-gray-200 shadow-lg bg-white hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Featured Image */}
              <div className="relative h-64 md:h-80 overflow-hidden bg-gray-100">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <Badge className="bg-purple-700 text-white hover:bg-purple-800 mb-3">
                    {article.category}
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    {article.title}
                  </h2>
                </div>
              </div>

              <CardHeader>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    <span>{article.source}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                {/* Excerpt */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {article.excerpt}
                </p>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-purple-700 to-amber-600 rounded"></span>
                    Key Highlights
                  </h3>
                  <ul className="space-y-3">
                    {article.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                        <span className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0 mt-2"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Co-Authors */}
                {article.coAuthors && (
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Users className="w-5 h-5 text-purple-700" />
                      Co-Authors
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {article.coAuthors.map((author, idx) => (
                        <Badge key={idx} variant="outline" className="border-purple-300 text-purple-700">
                          {author}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Read More Button */}
                <div className="flex gap-3">
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white shadow-md hover:shadow-lg transition-all">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Read Full Article
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note */}
        <div className="max-w-5xl mx-auto mt-12">
          <Card className="border-purple-200 bg-purple-50">
            <CardContent className="p-6">
              <p className="text-gray-700 text-center">
                <span className="font-semibold text-purple-900">More news coming soon!</span> Stay tuned for updates on research breakthroughs and academic achievements.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default News;
