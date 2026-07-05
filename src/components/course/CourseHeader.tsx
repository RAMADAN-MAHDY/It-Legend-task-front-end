import React from "react";
import { Play, ChevronRight } from "lucide-react";
import { Button } from "../ui/Button";

interface CourseHeaderProps {
  title: string;
}

export const CourseHeader: React.FC<CourseHeaderProps> = ({ title }) => {
  return (
    <div className="space-y-4 mb-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm text-zinc-500 space-x-2">
        <span>Home</span>
        <ChevronRight className="w-4 h-4" />
        <span>Courses</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-zinc-900 font-medium">Course Details</span>
      </nav>

      <h1 className="text-3xl font-bold text-zinc-900">{title}</h1>

      {/* Video Placeholder */}
      <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-900 group">
        <img
          src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=educational+video+background+with+instructor&image_size=landscape_16_9"
          alt="Course Video"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            size="icon"
            className="w-16 h-16 rounded-full bg-white text-blue-600 hover:bg-zinc-100 shadow-xl"
          >
            <Play className="w-8 h-8 fill-current" />
          </Button>
        </div>

        {/* Floating Avatars */}
        <div className="absolute bottom-6 right-6 flex -space-x-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-lg bg-zinc-200"
            >
              <img
                src={`https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=instructor+face+${i}&image_size=square`}
                alt={`Instructor ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
