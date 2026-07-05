import React from "react";
import { notFound } from "next/navigation";
import { courses } from "@/data/courses";
import { PlayerHeader } from "@/components/course-player/PlayerHeader";
import { CoursePlayerContainer } from "@/components/course-player/CoursePlayerContainer";

interface PageProps {
  params: Promise<{
    courseId: string;
  }>;
}

export default async function CourseDetailsPage({ params }: PageProps) {
  const { courseId } = await params;
  const course = courses.find((c) => c.id === courseId);

  // Note: We are using the static design components as requested, 
  // but we can still use the course data if needed. 
  // For now, we follow the source project's static content exactly.

  if (!course && courseId !== "seo-home") { // Allowing a demo ID
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <PlayerHeader />
      <CoursePlayerContainer />
    </div>
  );
}
