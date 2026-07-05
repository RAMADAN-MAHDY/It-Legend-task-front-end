'use client';

import React, { useState } from "react";
import { VideoPlayer } from "./VideoPlayer";
import { NavButtons } from "./NavButtons";
import { CourseMaterials } from "./CourseMaterials";
import { CourseTopics, TopicHeader } from "./CourseTopics";
import { Comments } from "./Comments";
import  SocialActions  from './SocialActions';
export const CoursePlayerContainer = () => {
  const [isWide, setIsWide] = useState(false);

  return (
    <main 
      className={`max-w-7xl mx-auto px-5 py-4 lg:grid lg:gap-x-[70px] ${
        isWide 
        ? "lg:grid-cols-1" 
        : "lg:grid-cols-[64%_auto] lg:grid-rows-[auto_auto_auto]"
      }`}
    >
      {/* Main Video View */}
      <div className={`lg:order-1 sticky top-0 lg:relative z-[100] bg-white pt-2 lg:pt-0 ${isWide ? "lg:col-span-1" : "lg:col-start-1"}`}>
        <VideoPlayer isWide={isWide} onToggleWide={() => setIsWide(!isWide)} />
      </div>

      {/* Materials & Nav Section */}
      <div className={`lg:order-2 pb-9 ${isWide ? "lg:col-span-1" : "lg:col-start-1"}`}>
        <div className={`sm:hidden`}>
        <NavButtons />
        </div>

         <div className={`sm:block hidden`}>
        <SocialActions />
        </div>

        <CourseMaterials />
      </div>

      {/* Topics Sidebar */}
      <div id="course-topics" className={`lg:order-3 ${isWide ? "lg:col-span-1 lg:mt-10" : "lg:row-span-3 lg:col-start-2"}`}>
        <TopicHeader />
        <CourseTopics />
      </div>

      {/* Comments Section */}
      <div id="course-comments" className={`lg:order-4 pt-9 ${isWide ? "lg:col-span-1" : "lg:col-start-1"}`}>
        <Comments />
      </div>
    </main>
  );
};
