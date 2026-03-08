import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';
import { GraduationCap } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/education', label: 'Education' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/publications', label: 'Publications' },
    { path: '/awards', label: 'Honors & Awards' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <GraduationCap className="w-6 h-6 text-gold-400" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-purple-900">{personalInfo.name}</h1>
              <p className="text-xs text-purple-600">{personalInfo.title}</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button 
                  variant={location.pathname === item.path ? 'default' : 'ghost'}
                  className={location.pathname === item.path 
                    ? 'bg-purple-700 text-white hover:bg-purple-800' 
                    : 'text-purple-700 hover:text-purple-900 hover:bg-purple-50'}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <nav className="flex md:hidden items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button 
                  variant={location.pathname === item.path ? 'default' : 'ghost'}
                  size="sm"
                  className={location.pathname === item.path 
                    ? 'bg-purple-700 text-white hover:bg-purple-800' 
                    : 'text-purple-700 hover:text-purple-900 hover:bg-purple-50'}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;