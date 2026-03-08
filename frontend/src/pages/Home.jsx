import React from 'react';
import { personalInfo, researchInterests, education, awards } from '../data/mock';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Mail, Linkedin, Award, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-4 ring-gray-100">
                  <img 
                    src={personalInfo.profilePhoto} 
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-xl border-4 border-white">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>

            {/* Hero Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                {personalInfo.name}
              </h1>
              <p className="text-xl md:text-2xl text-purple-700 font-medium mb-3">
                {personalInfo.title} · {personalInfo.institution}
              </p>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
                Researching early toxicity forecasting, cyberbullying detection, and interpretable AI
                for proactive online safety.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href={`mailto:${personalInfo.email}`}>
                  <Button className="bg-purple-700 hover:bg-purple-800 text-white shadow-md hover:shadow-lg transition-all">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Me
                  </Button>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-2 border-purple-700 text-purple-700 hover:bg-purple-50 shadow-sm hover:shadow-md transition-all">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </a>
                <Link to="/publications">
                  <Button variant="outline" className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 shadow-sm hover:shadow-md transition-all">
                    View Publications
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-gray-200 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Introduction</CardTitle>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-700 to-amber-600 mt-2"></div>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-5">
                  I am a PhD student in Computer Science at the University at Albany, SUNY, working with the
                  Albany Lab for Privacy and Security (ALPS) under the supervision of Dr. Pradeep K. Atrey.
                  My research focuses on forecasting toxicity escalation in online conversations, with the goal of
                  building early-warning systems that support safer social media environments.
                </p>
                <p className="text-gray-700 leading-relaxed mb-5">
                  Unlike traditional moderation systems that detect harmful content only after it appears, my work
                  studies how toxic situations develop over time. By combining textual cues with temporal and
                  structural signals, I aim to design interpretable models that can predict harmful conversation
                  trajectories before they fully unfold.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  My long-term goal is to contribute to proactive trust-and-safety technologies that enable earlier
                  intervention against cyberbullying, harassment, and coordinated online harm.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Interests Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Research Interests</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-700 to-amber-600 mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                My research spans multiple domains in AI, machine learning, and online safety
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {researchInterests.map((interest) => (
                <Card key={interest.id} className="overflow-hidden border-gray-200 bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    <img 
                      src={interest.image} 
                      alt={interest.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg">{interest.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-700 text-sm leading-relaxed">{interest.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-gray-200 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Education</CardTitle>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-700 to-amber-600 mt-2"></div>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {education.map((edu) => (
                    <div key={edu.id} className="border-l-4 border-amber-500 pl-8 py-3 hover:border-amber-600 transition-colors">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
                      <p className="text-purple-700 font-medium text-lg mb-1">{edu.institution}</p>
                      <p className="text-gray-500 text-sm mb-2">{edu.period}</p>
                      {edu.focus && (
                        <p className="text-gray-600 mt-3 text-sm leading-relaxed italic">{edu.focus}</p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-gray-200 shadow-lg bg-white">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-8 h-8 text-amber-600" />
                  <CardTitle className="text-3xl text-gray-900">Honors & Awards</CardTitle>
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-700 to-amber-600"></div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {awards.map((award) => (
                    <div key={award.id} className="flex items-start gap-4 p-5 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center flex-shrink-0 shadow-md">
                        <Award className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{award.title}</h3>
                        <p className="text-purple-700 font-medium">{award.organization}</p>
                        <p className="text-gray-500 text-sm mt-1">{award.year}</p>
                        <p className="text-gray-600 text-sm mt-2">{award.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-gray-200 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-3xl text-gray-900">Get In Touch</CardTitle>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-700 to-amber-600 mt-2 mb-3"></div>
                <CardDescription className="text-lg text-gray-600">
                  Feel free to reach out for collaboration, research discussions, or project opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  <a href={`mailto:${personalInfo.email}`}>
                    <Button className="bg-purple-700 hover:bg-purple-800 text-white shadow-md hover:shadow-lg transition-all">
                      <Mail className="w-4 h-4 mr-2" />
                      {personalInfo.email}
                    </Button>
                  </a>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-2 border-purple-700 text-purple-700 hover:bg-purple-50 shadow-sm hover:shadow-md transition-all">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn Profile
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;