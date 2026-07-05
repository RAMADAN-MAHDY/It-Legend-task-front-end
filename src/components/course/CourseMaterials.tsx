import React from "react";
import { Clock, BookOpen, Users, Globe } from "lucide-react";
import { Card, CardContent } from "../ui/Card";

interface CourseMaterialsProps {
  duration: string;
  lessons: number;
  enrolled: number;
  language: string;
}

export const CourseMaterials: React.FC<CourseMaterialsProps> = ({
  duration,
  lessons,
  enrolled,
  language,
}) => {
  const items = [
    { label: "Duration:", value: duration, icon: Clock },
    { label: "Lessons:", value: lessons, icon: BookOpen },
    { label: "Enrolled:", value: `${enrolled} students`, icon: Users },
    { label: "Language:", value: language, icon: Globe },
  ];

  return (
    <div className="mb-12">
      <h2 className="text-xl font-bold mb-4">Course Materials</h2>
      <Card>
        <CardContent className="p-6 grid grid-cols-2 gap-y-6 gap-x-12">
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-zinc-500">{item.label}</p>
                <p className="font-semibold">{item.value}</p>
              </div>
            </div>
          ))}
          {/* Duplicating for design similarity as seen in image */}
          {items.map((item, index) => (
            <div key={`dup-${index}`} className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-zinc-500">{item.label}</p>
                <p className="font-semibold">{item.value}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
