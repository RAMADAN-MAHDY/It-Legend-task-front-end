'use client';

import React, { useState } from 'react';
import { List, MessageSquare, HelpCircle, Trophy } from 'lucide-react';
import { AskQuestionModal, LeaderboardModal } from './modals';

export const NavButtons = () => {
  const [isAskModalOpen, setIsAskModalOpen] = useState(false);
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="flex space-x-4 my-10 md:mt-10 md:mb-14">
      {/* Curriculum / Topics */}
      <NavButton 
        icon={<List className="w-[18px] h-[18px]" />} 
        onClick={() => scrollToSection('course-topics')}
        title="Curriculum"
      />
      
      {/* Comments */}
      <NavButton 
        icon={<MessageSquare className="w-[18px] h-[18px]" />} 
        onClick={() => scrollToSection('course-comments')}
        title="Comments"
      />
      
      {/* Ask a Question */}
      <NavButton 
        icon={<HelpCircle className="w-[18px] h-[18px]" />} 
        onClick={() => setIsAskModalOpen(true)}
        title="Ask a Question"
      />

      {/* Leaderboard */}
      <NavButton 
        icon={<Trophy className="w-[18px] h-[18px]" />} 
        onClick={() => setIsLeaderboardOpen(true)}
        title="Leaderboard"
      />

      {/* Modals */}
      <AskQuestionModal 
        isOpen={isAskModalOpen} 
        onClose={() => setIsAskModalOpen(false)} 
      />
      <LeaderboardModal 
        isOpen={isLeaderboardOpen} 
        onClose={() => setIsLeaderboardOpen(false)} 
        studentProgress={63}
      />
    </section>
  );
};

const NavButton = ({ icon, onClick, title }: { icon: React.ReactNode; onClick: () => void; title: string }) => (
  <button 
    onClick={onClick}
    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors shadow-none outline-none group relative"
    title={title}
  >
    {icon}
    <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all bg-gray-800 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap">
      {title}
    </span>
  </button>
);
