import { Course, Comment } from "../types";

export const courses: Course[] = [
  {
    id: "seo-basics",
    title: "Starting SEO as your Home",
    duration: "3 weeks",
    lessonsCount: 12,
    enrolledCount: 65,
    language: "English",
    instructor: {
      name: "John Doe",
      avatar: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional+instructor+avatar&image_size=square",
    },
    sections: [
      {
        id: "week-1-4",
        title: "Week 1-4",
        description: "Advanced storytelling techniques for writers: Personas, Characters & Plots",
        lessons: [
          { id: "l1", title: "Introduction", duration: "10:00", isLocked: false },
          { id: "l2", title: "Course Overview", duration: "15:00", isLocked: false },
          { id: "l3", title: "Course Overview", duration: "10:00", isLocked: false, questionsCount: 2 },
          { id: "l4", title: "Course Exercise / Reference Files", duration: "05:00", isLocked: false },
          { id: "l5", title: "Code Editor Installation", duration: "20:00", isLocked: false },
          { id: "l6", title: "Embedding PHP in HTML", duration: "12:00", isLocked: false },
        ],
      },
      {
        id: "week-5-8",
        title: "Week 5-8",
        description: "Advanced storytelling techniques for writers: Personas, Characters & Plots",
        lessons: [
          { id: "l7", title: "Defining Functions", duration: "18:00", isLocked: true },
          { id: "l8", title: "Function Parameters", duration: "22:00", isLocked: true },
          { id: "l9", title: "Return Values from Functions", duration: "15:00", isLocked: true, questionsCount: 2 },
          { id: "l10", title: "Global Variable and Scope", duration: "14:00", isLocked: true },
          { id: "l11", title: "Newer Way of Creating a Constant", duration: "10:00", isLocked: true },
          { id: "l12", title: "Constants", duration: "08:00", isLocked: true },
        ],
      },
    ],
  },
];

export const comments: Comment[] = [
  {
    id: 1,
    name: "Student Name Goes Here",
    date: "Oct 18, 2023",
    text: "Great course content and structure. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=student+avatar+1&image_size=square",
  },
  {
    id: 2,
    name: "Student Name Goes Here",
    date: "Oct 15, 2023",
    text: "Great course content and structure. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=student+avatar+2&image_size=square",
  },
  {
    id: 3,
    name: "Student Name Goes Here",
    date: "Oct 12, 2023",
    text: "Great course content and structure. Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=student+avatar+3&image_size=square",
  },
];
