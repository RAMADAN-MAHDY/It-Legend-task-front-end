'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, HelpCircle, Send } from 'lucide-react';

interface AskQuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AskQuestionModal = ({ isOpen, onClose }: AskQuestionModalProps) => {
  const [question, setQuestion] = useState('');

  // حفظ واسترجاع المسودة من sessionStorage
  useEffect(() => {
    const draft = sessionStorage.getItem('question_draft');
    if (draft) setQuestion(draft);
  }, []);

  useEffect(() => {
    sessionStorage.setItem('question_draft', question);
  }, [question]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed h-[300px] mt-[200px] inset-0 z-[1100] flex items-center justify-center px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-2xl rounded-[32px] overflow-hidden shadow-2xl"
          >
            <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center bg-[#F5F9FA]">
              <h3 className="text-2xl font-bold text-gray-900">Ask a Question</h3>
              <button onClick={onClose} className="p-2 hover:bg-gray-200 rounded-full transition-colors">
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>
            
            <div className="p-8">
              <div className="mb-6 p-4 bg-blue-50 rounded-2xl flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#41b69d] flex items-center justify-center text-white flex-shrink-0">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-blue-800 font-medium">نصيحة من م. علي شاهين:</p>
                  <p className="text-sm text-blue-600">اسأل بوضوح عشان أقدر أجاوبك بدقة يا بطل! 😉</p>
                </div>
              </div>

              <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full h-[200px] p-6 text-lg font-light bg-white border-none rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.06)] focus:ring-2 focus:ring-[#41b69d]/20 transition-all outline-none resize-none"
                placeholder="Write your question here..."
              />
              
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => {
                    alert('Question Sent! We will get back to you soon.');
                    setQuestion('');
                    onClose();
                  }}
                  className="px-8 py-4 bg-[#41b69d] text-white font-bold text-lg rounded-2xl flex items-center space-x-3 hover:bg-[#38a089] transition-all shadow-lg active:scale-95"
                >
                  <span>Send Question</span>
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
