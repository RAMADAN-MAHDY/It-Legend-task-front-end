import React from "react";
import { Button } from "../ui/Button";
import { Comment } from "@/types";

interface CommentsSectionProps {
  comments: Comment[];
}

export const CommentsSection: React.FC<CommentsSectionProps> = ({ comments }) => {
  return (
    <div className="space-y-8">
      <h2 className="text-xl font-bold">Comments</h2>
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-4">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-zinc-200">
              <img
                src={comment.avatar}
                alt={comment.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 border-b border-zinc-100 pb-6">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">{comment.name}</h4>
                <span className="text-xs text-zinc-400">{comment.date}</span>
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed">
                {comment.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 space-y-4">
        <textarea
          placeholder="Write a comment..."
          className="w-full min-h-[120px] p-4 rounded-xl border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 transition-all resize-none"
        />
        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg px-6 py-2">
          Submit Review →
        </Button>
      </div>
    </div>
  );
};
