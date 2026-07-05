'use client';

import React, { useRef } from 'react';
import { Maximize, Monitor } from 'lucide-react';

interface VideoPlayerProps {
  isWide?: boolean;
  onToggleWide?: () => void;
}

export const VideoPlayer = ({ isWide, onToggleWide }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleFullscreen = async () => {
    if (!videoRef.current) return;

    try {
      const video = videoRef.current;
      
      if (video.requestFullscreen) {
        await video.requestFullscreen();
      } else if ((video as any).webkitRequestFullscreen) {
        await (video as any).webkitRequestFullscreen();
      } else if ((video as any).msRequestFullscreen) {
        await (video as any).msRequestFullscreen();
      }

      // محاولة قفل الاتجاه إلى الوضع الأفقي في الموبايل
      const orientation = window.screen && (window.screen.orientation as any);
      if (orientation && orientation.lock) {
        try {
          await orientation.lock('landscape');
        } catch (err) {
          console.warn('Orientation lock failed:', err);
        }
      }

      // إضافة مستمع لحدث الخروج من وضع ملء الشاشة لإرجاع الوضع الطبيعي
      const handleExitFullscreen = () => {
        if (!document.fullscreenElement && ! (document as any).webkitFullscreenElement) {
          const currentOrientation = window.screen && (window.screen.orientation as any);
          if (currentOrientation && currentOrientation.unlock) {
            currentOrientation.unlock();
          }
          document.removeEventListener('fullscreenchange', handleExitFullscreen);
          document.removeEventListener('webkitfullscreenchange', handleExitFullscreen);
        }
      };

      document.addEventListener('fullscreenchange', handleExitFullscreen);
      document.addEventListener('webkitfullscreenchange', handleExitFullscreen);
      
    } catch (err) {
      console.error('Error attempting to enable full-screen mode:', err);
    }
  };

  return (
    <div className="w-full relative group bg-black rounded-lg overflow-hidden shadow-sm">
      <video
        ref={videoRef}
        src="/assets/course-player/preview/preview.mp4"
        className="w-full aspect-video block"
        controls
        playsInline
        webkit-playsinline="true"
        poster="/assets/course-player/photo/coursemedia/course cover.png"
        preload="metadata"
      />
      
      {/* أزرار التحكم في الزاوية */}
      <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        {/* زر Wide Mode المخصص (للدسكتوب فقط) */}
        <button
          onClick={onToggleWide}
          className="hidden lg:flex bg-black/50 hover:bg-black/70 text-white p-2 rounded-full items-center justify-center transition-colors"
          title={isWide ? "Normal Mode" : "Wide Mode"}
        >
          <Monitor className={`w-5 h-5 ${isWide ? 'text-[#41b69d]' : ''}`} />
        </button>

        {/* زر Maximize المخصص */}
        <button
          onClick={handleFullscreen}
          className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full flex items-center justify-center transition-colors"
          title="Maximize"
        >
          <Maximize className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
