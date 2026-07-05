import React from 'react';
import { Clock, BookOpen, Users, Globe, List, DollarSign, User, FileText } from 'lucide-react';

export const CourseMaterials = () => {
  return (
    <section className="mt-10">
      <h2 className="text-4xl font-semibold mb-10">Course Materials</h2>
      <div className="bg-white p-3 md:p-8 shadow-[0_0_20px_rgba(0,0,0,0.06)] grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
        <div className="space-y-4">
          <MaterialItem icon={<User className="w-5 h-5" />} label="Instructor" value="Edward Norton" />
          <MaterialItem icon={<Clock className="w-5 h-5" />} label="Duration" value="3 weeks" />
          <MaterialItem icon={<BookOpen className="w-5 h-5" />} label="Lessons" value="8" />
          <MaterialItem icon={<Users className="w-5 h-5" />} label="Enrolled" value="65 students" />
          <MaterialItem icon={<Globe className="w-5 h-5" />} label="Language" value="English" />
        </div>
        <div className="space-y-4 md:border-l sm:block hidden md:pl-12 border-gray-100">
          <MaterialItem icon={<User className="w-5 h-5" />} label="Instructor" value="Edward Norton" />
          <MaterialItem icon={<Clock className="w-5 h-5" />} label="Duration" value="3 weeks" />
          <MaterialItem icon={<BookOpen className="w-5 h-5" />} label="Lessons" value="8" />
          <MaterialItem icon={<Users className="w-5 h-5" />} label="Enrolled" value="65 students" />
          <MaterialItem icon={<Globe className="w-5 h-5" />} label="Language" value="English" />
        </div>
      </div>
    </section>
  );
};

const MaterialItem = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className={`flex justify-between items-center py-4 border-b border-gray-50 last:border-0 text-[20px] text-gray-600 ${label == "Instructor" ? "sm:hidden block" : ""}`}>
    <div className="flex items-center">
      <span className="mr-3">{icon}</span>
      <span>{label} :</span>
    </div>
    <span className="font-medium">{value}</span>
  </div>
);
