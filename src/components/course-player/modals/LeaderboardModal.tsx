'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LeaderboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentProgress: number;
}

const getAliMessage = (progress: number) => {
  if (progress < 30) return {
    text: "يا بطل، لسه في البداية؟ شد حيلك وعايز أشوفك في الليدر بورد قريب.. الكورس ده مستقبلك يا صديقي! 💪",
    emoji: "💪"
  };
  if (progress < 70) return {
    text: `عاش يا صديقي.. أداءك في الكورس ده أفضل من ${progress}% من باقي الطلبة. كمل عايز أشوف اسمك في الليدر بورد هنا.. وحش! 🔥`,
    emoji: "🔥"
  };
  return {
    text: "قربنا نخلص يا وحش! مجهود عظيم، استمر بنفس الحماس لحد النهاية وعايزك تقفل الكورس ده بامتياز.. بالتوفيق يا بطل! 🚀",
    emoji: "🚀"
  };
};

export const LeaderboardModal = ({ isOpen, onClose, studentProgress }: LeaderboardModalProps) => {
  const message = getAliMessage(studentProgress);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1100] flex items-center justify-center px-4 py-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="relative bg-white w-full max-w-md rounded-[40px] shadow-2xl overflow-hidden flex flex-col max-h-full"
          >
            <div className="p-6 md:p-8 text-center overflow-y-auto flex-1 custom-scrollbar">
              <p className="text-[#485293] font-medium text-sm mb-1">Course Name Shown Here</p>
              <h3 className="text-[#485293] text-2xl font-bold mb-6">Leaderboard</h3>

              {/* Ali Shahin Message Section */}
              <div className="bg-[#F5F9FA] p-5 md:p-6 rounded-[24px] mb-6 relative flex items-start text-right">
                <p className="text-[#485293] text-[14px] md:text-[15px] leading-relaxed flex-1 ml-4">
                  {message.text}
                </p>
                <span className="text-3xl md:text-4xl mt-1">{message.emoji}</span>
              </div>

              {/* Leaderboard List Placeholder */}
              <div className="space-y-3 mb-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className={`h-14 rounded-xl border transition-colors flex-shrink-0 ${i === 1 ? 'bg-blue-50 border-blue-100' : 'bg-white border-gray-100'}`}>
                    <div className="w-full h-full flex items-center px-4 justify-between">
                       <div className="flex items-center space-x-3">
                         <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${i <= 3 ? 'bg-yellow-400 text-white' : 'bg-gray-100 text-gray-500'}`}>
                           {i}
                         </span>
                         <div className="w-8 h-8 rounded-full bg-gray-200" />
                         <div className="h-3 w-20 md:w-24 bg-gray-100 rounded" />
                       </div>
                       <div className="h-3 w-8 md:w-10 bg-gray-100 rounded" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-white border-t border-gray-50">
              <button
                onClick={onClose}
                className="w-full py-4 bg-gray-100 text-gray-600 font-bold rounded-2xl hover:bg-gray-200 transition-colors active:scale-95"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
