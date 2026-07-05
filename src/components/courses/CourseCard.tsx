"use client"
import React from "react";
import Link from "next/link";
import { Clock, BookOpen, Users } from "lucide-react";
import { Course } from "@/types";
import { Card, CardContent, CardFooter } from "../ui/Card";
import { Badge } from "../ui/Badge";

import { motion } from "framer-motion";

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/courses/${course.id}`}>
        <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-zinc-100 h-full flex flex-col">
        <div className="aspect-video relative overflow-hidden bg-zinc-100">
          <img
            src={`https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(course.title + " course cover")}&image_size=landscape_4_3`}
            alt={course.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="success" className="shadow-sm">Featured</Badge>
          </div>
        </div>
        <CardContent className="p-5">
          <h3 className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-blue-600 transition-colors">
            {course.title}
          </h3>
          <div className="flex items-center space-x-2 text-sm text-zinc-500 mb-4">
            <div className="w-6 h-6 rounded-full overflow-hidden bg-zinc-200">
              <img src={course.instructor.avatar} alt={course.instructor.name} />
            </div>
            <span>{course.instructor.name}</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center text-xs text-zinc-500">
              <Clock className="w-3.5 h-3.5 mr-1.5" />
              {course.duration}
            </div>
            <div className="flex items-center text-xs text-zinc-500">
              <BookOpen className="w-3.5 h-3.5 mr-1.5" />
              {course.lessonsCount} Lessons
            </div>
          </div>
        </CardContent>
        <CardFooter className="px-5 py-4 bg-zinc-50/50 border-t border-zinc-50 flex items-center justify-between">
          <div className="flex items-center text-xs font-medium text-zinc-600">
            <Users className="w-3.5 h-3.5 mr-1.5" />
            {course.enrolledCount} Students
          </div>
          <span className="text-sm font-bold text-blue-600">Free</span>
        </CardFooter>
      </Card>
      </Link>
    </motion.div>
  );
};
