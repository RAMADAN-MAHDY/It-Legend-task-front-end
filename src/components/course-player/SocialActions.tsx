import React from "react";
import { ThumbsUp, Share2, Bookmark, Twitter, Youtube ,Facebook ,Linkedin } from "lucide-react";
import { Button } from "../ui/Button";

export default function SocialActions() {
  return (
    <div className="flex items-center justify-between text-[#333333] mt-8">
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="icon" className="rounded-full">
          <Facebook className="w-4 h-4" />
        </Button>
        <Button variant="outline" size="icon" className="rounded-full">
          <Twitter className="w-4 h-4" />
        </Button>
        <Button variant="outline" size="icon" className="rounded-full">
          <Linkedin className="w-4 h-4" />
        </Button>
        <Button variant="outline" size="icon" className="rounded-full">
          <Youtube className="w-4 h-4" />
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="sm" className="space-x-2">
          <ThumbsUp className="w-4 h-4" />
          <span>Like</span>
        </Button>
        <Button variant="ghost" size="sm" className="space-x-2">
          <Share2 className="w-4 h-4" />
          <span>Share</span>
        </Button>
        <Button variant="ghost" size="sm" className="space-x-2">
          <Bookmark className="w-4 h-4" />
          <span>Bookmark</span>
        </Button>
      </div>
    </div>
  );
};
