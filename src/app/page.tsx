"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Star, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { courses } from "@/data/courses";
import { CourseCard } from "@/components/courses/CourseCard";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-blue-50/50 -z-10" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/50 to-transparent -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-blue-600 bg-blue-50 border-blue-100">
              New: AI & Machine Learning Tracks 🚀
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-zinc-900 leading-[1.1] mb-8">
              Unlock Your Potential with <span className="text-blue-600">Expert-Led</span> Courses.
            </h1>
            <p className="text-xl text-zinc-600 mb-10 leading-relaxed max-w-2xl">
              Join 10,000+ students worldwide learning the most in-demand skills in tech, design, and business from industry leaders.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/courses">
                <Button size="lg" className="rounded-full px-10 h-14 text-lg">
                  Explore Courses
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="rounded-full px-10 h-14 text-lg bg-white">
                View Learning Paths
              </Button>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-12 flex items-center space-x-8 text-sm text-zinc-500"
            >
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-blue-600" />
                <span>65k+ Students</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2 text-amber-400 fill-amber-400" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center">
                <Zap className="w-5 h-5 mr-2 text-emerald-500" />
                <span>Fast Progress</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-24 bg-zinc-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-4">Featured Courses</h2>
              <p className="text-zinc-500">Hand-picked courses to help you start your journey.</p>
            </div>
            <Link href="/courses" className="text-blue-600 font-semibold flex items-center hover:underline">
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.slice(0, 3).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
            {/* Filling up space if only one course */}
            {courses.length < 3 && [1, 2].map(i => (
              <CourseCard 
                key={`home-dup-${i}`} 
                course={{
                  ...courses[0],
                  id: `home-course-${i}`,
                  title: `${courses[0].title} - Level ${i + 1}`
                }} 
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Badge({ children, variant = "default", className }: { children: React.ReactNode, variant?: string, className?: string }) {
  const variants: Record<string, string> = {
    default: "bg-zinc-900 text-zinc-50",
    secondary: "bg-zinc-100 text-zinc-900",
  };
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
