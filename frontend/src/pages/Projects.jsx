import React from 'react';
import { projects } from '../data/mock';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { FolderCode, ExternalLink, Calendar } from 'lucide-react';

const Projects = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4 flex items-center justify-center gap-3">
            <FolderCode className="w-10 h-10 text-amber-600" />
            Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Selected supervised and independent research projects focused on proactive online safety, toxicity forecasting, and cyberbullying detection.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project) => (
            <Card key={project.id} className="border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-purple-900 mb-2">{project.title}</CardTitle>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{project.period}</span>
                    </div>
                  </div>
                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-purple-700 hover:bg-purple-800 text-white">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Watch Demo
                      </Button>
                    </a>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <h3 className="font-bold text-purple-900 mb-3">Key Features & Contributions:</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm leading-relaxed">
                        <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0 mt-2"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                {project.technologies && (
                  <div>
                    <h3 className="font-bold text-purple-900 mb-3">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
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

export default Projects;