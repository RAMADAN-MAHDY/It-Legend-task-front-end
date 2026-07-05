export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isLocked: boolean;
  questionsCount?: number;
}

export interface Section {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  duration: string;
  lessonsCount: number;
  enrolledCount: number;
  language: string;
  instructor: {
    name: string;
    avatar: string;
  };
  videoUrl?: string;
  sections: Section[];
}

export interface Comment {
  id: number;
  name: string;
  date: string;
  text: string;
  avatar?: string;
}
