'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Clock } from 'lucide-react';

interface ExamModalProps {
  isOpen: boolean;
  onClose: () => void;
  examId: string;
}

const examData = {
  questions: [
    {
      id: 1,
      text: "Among the following status of India, which one has the oldest rock formations in the country?",
      options: ["Asam", "Bahar", "Kamaltake", "Utter Pardesh"],
      correctIndex: 1
    },
    {
      id: 2,
      text: "What is the capital of India?",
      options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
      correctIndex: 1
    },
    {
      id: 3,
      text: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctIndex: 1
    },
    {
      id: 4,
      text: "Who wrote 'Romeo and Juliet'?",
      options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Leo Tolstoy"],
      correctIndex: 1
    },
    {
      id: 5,
      text: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correctIndex: 3
    }
  ]
};

export const ExamModal = ({ isOpen, onClose, examId }: ExamModalProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  // Load progress from localStorage
  useEffect(() => {
    if (isOpen) {
      const saved = localStorage.getItem(`exam_progress_${examId}`);
      if (saved) {
        const { savedAnswers, savedQuestion, savedTime } = JSON.parse(saved);
        setAnswers(savedAnswers || {});
        setCurrentQuestion(savedQuestion || 0);
        setTimeLeft(savedTime || 600);
      }
    }
  }, [isOpen, examId]);

  // Save progress to localStorage
  useEffect(() => {
    if (isOpen) {
      const progress = {
        savedAnswers: answers,
        savedQuestion: currentQuestion,
        savedTime: timeLeft
      };
      localStorage.setItem(`exam_progress_${examId}`, JSON.stringify(progress));
    }
  }, [answers, currentQuestion, timeLeft, isOpen, examId]);

  // Timer logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isOpen, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleOptionSelect = (optionIndex: number) => {
    setAnswers({ ...answers, [currentQuestion]: optionIndex });
  };

  if (!isOpen) return null;

  const question = examData.questions[currentQuestion];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed inset-0 z-[1000] bg-[#4F6AF0] flex flex-col font-sans"
      >
        {/* Header Section */}
        <div className="px-6 pt-8 pb-10 flex flex-col items-center">
          <div className="w-full flex justify-between items-center mb-8">
            <button onClick={onClose} className="text-white p-1">
              <ChevronLeft className="w-8 h-8" />
            </button>
            <div className="bg-[#FFD700] px-4 py-2 rounded-xl flex items-center space-x-2 shadow-lg">
              <Clock className="w-5 h-5 text-white" />
              <span className="text-white font-bold text-lg">{formatTime(timeLeft)}</span>
            </div>
            <div className="w-8" /> {/* Spacer */}
          </div>

          {/* Question Navigation */}
          <div className="flex space-x-3">
            {examData.questions.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentQuestion(idx)}
                className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                  currentQuestion === idx
                    ? 'bg-white text-[#4F6AF0] border-white font-bold scale-110'
                    : answers[idx] !== undefined
                    ? 'bg-white/40 text-white border-transparent'
                    : 'border-white/50 text-white'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Question Body */}
        <div className="flex-1 bg-white rounded-t-[40px] px-8 pt-12 pb-8 shadow-2xl overflow-y-auto">
          <div className="max-w-2xl mx-auto">
            <h4 className="text-gray-900 text-xl font-bold mb-8 flex">
              <span className="mr-2">{currentQuestion + 1}.</span>
              {question.text}
            </h4>

            <div className="space-y-4">
              {question.options.map((option, idx) => {
                const isSelected = answers[currentQuestion] === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(idx)}
                    className={`w-full flex items-center p-4 rounded-2xl border-2 transition-all ${
                      isSelected
                        ? 'bg-[#4F6AF0] border-[#4F6AF0] text-white shadow-lg'
                        : 'bg-white border-gray-100 text-gray-700 hover:border-gray-200 shadow-sm'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center mr-4 transition-colors ${
                      isSelected ? 'bg-white/20 border-white' : 'border-gray-300'
                    }`}>
                      {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                    <span className="text-lg font-medium">{option}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-12 flex justify-between">
              <button
                disabled={currentQuestion === 0}
                onClick={() => setCurrentQuestion((p) => p - 1)}
                className="px-8 py-3 rounded-xl border-2 border-gray-200 text-gray-500 font-bold disabled:opacity-30"
              >
                Previous
              </button>
              <button
                onClick={() => {
                  if (currentQuestion < examData.questions.length - 1) {
                    setCurrentQuestion((p) => p + 1);
                  } else {
                    alert('Exam Submitted Successfully!');
                    onClose();
                  }
                }}
                className="px-10 py-3 rounded-xl bg-[#4F6AF0] text-white font-bold shadow-lg hover:bg-[#3D56D1] transition-colors"
              >
                {currentQuestion === examData.questions.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
