import React from "react";
import { courses } from "@/data/courses";
import { CourseCard } from "@/components/courses/CourseCard";
import { Input } from "@/components/ui/Input";
import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-zinc-50/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 mb-2">Explore Courses</h1>
            <p className="text-zinc-500">Discover your next favorite course from our expert instructors.</p>
          </div>
          
          <div className="flex items-center space-x-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <Input 
                placeholder="Search courses..." 
                className="pl-10 bg-white border-zinc-200"
              />
            </div>
            <Button variant="outline" size="icon">
              <SlidersHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
          {/* Duplicating for UI richness */}
          {[1, 2, 3, 4, 5].map((i) => (
            <CourseCard 
              key={`dup-${i}`} 
              course={{
                ...courses[0],
                id: `course-${i}`,
                title: `${courses[0].title} - Level ${i + 1}`
              }} 
            />
          ))}
        </div>
      </div>
    </main>
  );
}
