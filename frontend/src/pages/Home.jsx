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
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-purple-50 border-b border-purple-100">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <img 
                    src={personalInfo.profilePhoto} 
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg border-4 border-white">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>

            {/* Hero Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-900 mb-4">
                {personalInfo.name}
              </h1>
              <p className="text-xl md:text-2xl text-purple-700 mb-2">
                {personalInfo.title} · {personalInfo.institution}
              </p>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl">
                Researching early toxicity forecasting, cyberbullying detection, and interpretable AI
                for proactive online safety.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <a href={`mailto:${personalInfo.email}`}>
                  <Button className="bg-purple-700 hover:bg-purple-800 text-white">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Me
                  </Button>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </a>
                <Link to="/publications">
                  <Button variant="outline" className="border-amber-400 text-amber-700 hover:bg-amber-50">
                    View Publications
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl text-purple-900">Introduction</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                I am a PhD student in Computer Science at the University at Albany, SUNY, working with the
                Albany Lab for Privacy and Security (ALPS) under the supervision of Dr. Pradeep K. Atrey.
                My research focuses on forecasting toxicity escalation in online conversations, with the goal of
                building early-warning systems that support safer social media environments.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
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
      </section>

      {/* Research Interests Grid */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4 text-center">Research Interests</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            My research spans multiple domains in AI, machine learning, and online safety
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchInterests.map((interest) => (
              <Card key={interest.id} className="overflow-hidden border-purple-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={interest.image} 
                    alt={interest.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-purple-900">{interest.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">{interest.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="border-purple-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl text-purple-900">Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.id} className="border-l-4 border-amber-400 pl-6 py-2">
                    <h3 className="text-xl font-bold text-purple-900">{edu.degree}</h3>
                    <p className="text-purple-700 font-medium">{edu.institution}</p>
                    <p className="text-gray-500 text-sm">{edu.period}</p>
                    {edu.focus && (
                      <p className="text-gray-600 mt-2 text-sm italic">{edu.focus}</p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-white">
        <div className="container mx-auto px-4">
          <Card className="border-amber-300 shadow-lg">
            <CardHeader>
              <CardTitle className="text-3xl text-purple-900 flex items-center gap-3">
                <Award className="w-8 h-8 text-amber-600" />
                Honors & Awards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {awards.map((award) => (
                  <div key={award.id} className="flex items-start gap-4 p-4 bg-white rounded-lg border border-amber-200">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-purple-900">{award.title}</h3>
                      <p className="text-purple-700">{award.organization}</p>
                      <p className="text-gray-500 text-sm">{award.year}</p>
                      <p className="text-gray-600 text-sm mt-1">{award.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="border-purple-200 shadow-lg bg-gradient-to-br from-purple-50 to-white">
            <CardHeader>
              <CardTitle className="text-3xl text-purple-900">Get In Touch</CardTitle>
              <CardDescription className="text-lg text-gray-600">
                Feel free to reach out for collaboration, research discussions, or project opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <a href={`mailto:${personalInfo.email}`}>
                  <Button className="bg-purple-700 hover:bg-purple-800 text-white">
                    <Mail className="w-4 h-4 mr-2" />
                    {personalInfo.email}
                  </Button>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn Profile
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;