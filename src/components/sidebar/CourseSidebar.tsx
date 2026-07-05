import React from "react";
import { Lock, FileText, HelpCircle, Clock } from "lucide-react";
import { Section } from "@/types";
import { cn } from "@/lib/utils";

interface CourseSidebarProps {
  sections: Section[];
}

export const CourseSidebar: React.FC<CourseSidebarProps> = ({ sections }) => {
  return (
    <div className="sticky top-8 space-y-6">
      <div className="bg-white rounded-xl border border-zinc-100 p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-4">Topics for This Course</h3>
        <div className="space-y-2">
          <div className="h-1 w-full bg-zinc-100 rounded-full overflow-hidden">
            <div className="h-full w-[12%] bg-emerald-500" />
          </div>
          <p className="text-[10px] text-zinc-400 text-right">12%</p>
        </div>
      </div>

      <div className="space-y-4">
        {sections.map((section) => (
          <div
            key={section.id}
            className="bg-white rounded-xl border border-zinc-100 overflow-hidden"
          >
            <div className="p-5 border-b border-zinc-50">
              <h4 className="font-bold text-zinc-900 mb-1">{section.title}</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">
                {section.description}
              </p>
            </div>
            <div className="divide-y divide-zinc-50">
              {section.lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className={cn(
                    "p-4 flex items-start justify-between group cursor-pointer transition-colors",
                    lesson.isLocked ? "bg-zinc-50/30" : "hover:bg-blue-50/30"
                  )}
                >
                  <div className="flex items-start space-x-3">
                    <FileText className={cn(
                      "w-4 h-4 mt-0.5",
                      lesson.isLocked ? "text-zinc-300" : "text-zinc-400"
                    )} />
                    <div className="space-y-1">
                      <p className={cn(
                        "text-xs font-medium",
                        lesson.isLocked ? "text-zinc-400" : "text-zinc-700"
                      )}>
                        {lesson.title}
                      </p>
                      {lesson.questionsCount && (
                        <div className="flex items-center space-x-3 text-[10px]">
                          <span className="text-emerald-500 font-semibold uppercase">
                            {lesson.questionsCount} Question
                          </span>
                          <span className="text-rose-500 font-semibold uppercase">
                            {lesson.duration}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  {lesson.isLocked ? (
                    <Lock className="w-3.5 h-3.5 text-zinc-300" />
                  ) : (
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
