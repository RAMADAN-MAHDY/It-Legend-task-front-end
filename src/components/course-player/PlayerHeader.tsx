import React from 'react';
import { ChevronRight } from 'lucide-react';

export const PlayerHeader = () => {
  return (
    <header className="py-2.5 ">
      <div className="max-w-7xl px-5 mx-auto bg-[#F5F9FA]">
        <nav className="flex items-center text-xl mb-6">
          <ol className="flex items-center space-x-2 text-gray-600">
            <li>Home</li>
            <li className="flex items-center">
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              <span>Courses</span>
            </li>
            <li className="flex items-center text-gray-900 font-medium">
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
              <span>Course Details</span>
            </li>
          </ol>
        </nav>
        <h1 className="text-[50px] font-semibold text-gray-900 mt-6 leading-tight">
          Starting SEO as your Home
        </h1>
      </div>
    </header>
  );
};
