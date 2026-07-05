import React from "react";
import Link from "next/link";
import { BookOpen, Search, User, Menu } from "lucide-react";
import { Button } from "../ui/Button";

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-5000 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-zinc-900 tracking-tight">EduFlow</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/courses" className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors">
                Courses
              </Link>
              <Link href="#" className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors">
                Learning Paths
              </Link>
              <Link href="#" className="text-sm font-medium text-zinc-600 hover:text-blue-600 transition-colors">
                Mentors
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center relative">
              <Search className="absolute left-3 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-9 pr-4 py-1.5 text-sm rounded-full border border-zinc-200 bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all"
              />
            </div>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
            <div className="h-8 w-[1px] bg-zinc-100 hidden sm:block" />
            <Button variant="ghost" className="hidden sm:flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Login</span>
            </Button>
            <Button className="rounded-full px-6">Join for Free</Button>
          </div>
        </div>
      </div>
    </header>
  );
};
