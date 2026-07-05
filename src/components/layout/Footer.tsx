import React from "react";
import { BookOpen, Twitter, Youtube, Earth, Share2 } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-white">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">EduFlow</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Empowering learners worldwide with expert-led courses and community-driven education.
            </p>
            <div className="flex items-center space-x-4">
              <Share2 className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
              <Earth className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">All Courses</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Learning Paths</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Certifications</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mentors</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Subscribe</h4>
            <p className="text-sm mb-6">Get the latest updates and course offers.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="bg-zinc-900 border-zinc-800 text-sm px-4 py-2 rounded-l-lg focus:outline-none w-full"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2024 EduFlow LMS. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
