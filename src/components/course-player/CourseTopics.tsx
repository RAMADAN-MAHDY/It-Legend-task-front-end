'use client';

import React, { useState } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDown, FileText, Lock, FileJson } from 'lucide-react';
import { motion } from 'framer-motion';
import { PDFModal, ExamModal } from './modals';

export const TopicHeader = () => {
  const progressValue = 63;

  return (
    <header className="mb-10 sm:mt-[-400px]">
      <h2 className="text-4xl font-semibold mb-5">Topics for This Course</h2>
      <div className="relative pt-12">
        {/* مؤشر موقع الطالب (You) */}
        <motion.div 
          initial={{ left: 0, opacity: 0 }}
          whileInView={{ left: `${progressValue}%`, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute top-0 -translate-x-1/2 flex flex-col items-center"
        >
          <div className="w-10 h-10 rounded-full border-2 border-[#C8C8C8] flex items-center justify-center text-[#485293] font-semibold text-sm bg-white mb-2 relative">
            You
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#C8C8C8]"></div>
          </div>
        </motion.div>

        {/* شريط التقدم الخلفي */}
        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
          {/* شريط التقدم المتحرك */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: `${progressValue}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="h-full bg-[#6ABD8A] rounded-full"
          />
        </div>

        {/* نسبة التقدم النصية */}
        <motion.div 
          initial={{ left: 0, opacity: 0 }}
          whileInView={{ left: `${progressValue}%`, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-2 -translate-x-1/2 text-[#485293] font-semibold text-sm absolute"
        >
          {progressValue}%
        </motion.div>
      </div>
    </header>
  );
};
 
const desktopTopics = [
  {
    id: '1',
    title: 'Week 1-4',
    description: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
    items: [
      { title: 'Introduction', type: 'video', locked: false },
      { title: 'Course Overview Video', type: 'video', locked: false },
      { title: 'Course Overview Exam', type: 'pdf', url: '/assets/Ramadan Mahdy7.pdf' , questions: 0, duration: '10 MINUTES' },
      { title: 'Course Exercise / Reference Files', locked: false },
      { title: 'Code Editor Installation', locked: false },
      { title: 'Embedding PHP in HTML', type: 'exam', examId: 'exam_2',},
    ],
  },
  {
    id: '2',
    title: 'Week 5-8',
    description: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
    items: [
      { title: 'Defining Functions', type: 'video', locked: true },
      { title: 'Function Parameters', type: 'video', locked: true },
      { title: 'Return Values From Functions', type: 'exam', examId: 'exam_2', questions: 2, duration: '10 MINUTES' },
      { title: 'Global Variable and Scope', type: 'video', locked: true },
      { title: 'Newer Way of creating a Constant', locked: true },
      { title: 'Constants', type: 'video', locked: true },
    ],
  },
    {
    id: '3',
    title: 'Week 5-8',
    description: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
    items: [
      { title: 'Defining Functions', type: 'video', locked: true },
      { title: 'Function Parameters', type: 'video', locked: true },
      { title: 'Return Values From Functions', type: 'exam', examId: 'exam_2', questions: 2, duration: '10 MINUTES' },
      { title: 'Global Variable and Scope', type: 'video', locked: true },
      { title: 'Newer Way of creating a Constant', type: 'pdf', url: '/assets/Ramadan Mahdy7.pdf', locked: true },
      { title: 'Constants', type: 'video', locked: true },
    ],
  },
];

const mobileTopics = [
  {
    id: '1',
    title: 'Course Introduction',
    items: [
      { title: 'Introduction', type: 'video', locked: true, progress: 63 },
      { title: 'Course Overview', type: 'video', locked: false },
      { title: 'Course Overview Exam', type: 'pdf', url: '/assets/Ramadan Mahdy7.pdf' , questions: 0, duration: '10 MINUTES' },
      { title: 'Course Exercise / Reference Files', locked: true },
      { title: 'Code Editor Installation (Optional if you have one)', locked: true },
      { title: 'Embedding PHP in HTML', type: 'exam', examId: 'exam_1', locked: false },
    ],
  },
  {
    id: '2',
    title: 'JavaScript Language Basics',
    items: [
      { title: 'Defining Functions', type: 'video', locked: true },
      { title: 'Function Parameters', type: 'video', locked: true },
      { title: 'Return Values From Functions', type: 'exam', examId: 'exam_2', questions: 0, duration: '10 MINUTES' },
      { title: 'Global Variable and Scope', type: 'video', locked: true },
      { title: 'Newer Way of creating a Constant', type: 'pdf', url: '/assets/Ramadan Mahdy7.pdf', locked: true },
      { title: 'Constants', type: 'video', locked: true },
    ],
  },
  {
    id: '3',
    title: 'Components & Databinding',
    description: 'Advanced story telling techniques for writers: Personas, Characters & Plots',
    items: [
      { title: 'Defining Functions', type: 'video', locked: true },
      { title: 'Function Parameters', type: 'video', locked: true },
      { title: 'Return Values From Functions', type: 'exam', examId: 'exam_3', questions: 0, duration: '10 MINUTES' },
      { title: 'Global Variable and Scope', type: 'video', locked: true },
      { title: 'Newer Way of creating a Constant', type: 'pdf', url: '/assets/Ramadan Mahdy7.pdf', locked: true },
      { title: 'Constants', type: 'video', locked: true },
    ],
  },
];

export const CourseTopics = () => {
  const [activePdf, setActivePdf] = useState<{ title: string; url: string } | null>(null);
  const [activeExam, setActiveExam] = useState<string | null>(null);

  const handleItemClick = (item: any) => {
    if (item.locked) return;
    
    if (item.type === 'pdf') {
      setActivePdf({ title: item.title, url: item.url });
    } else if (item.type === 'exam') {
      setActiveExam(item.examId);
    }
  };

  return (
    <section className="bg-white">
      {/* Mobile Layout (Visible on small screens) */}
      <div className="lg:hidden divide-y divide-gray-100">
        {mobileTopics.map((topic) => (
          <Disclosure key={topic.id} as="div" className="py-2" defaultOpen={topic.id === '1'}>
            {({ open }) => (
              <>
                <DisclosureButton className="w-full flex justify-between items-center py-4 px-2 text-left">
                  <h3 className="text-[22px] font-bold text-[#483434] opacity-90">{topic.title}</h3>
                  <span className="text-2xl text-gray-400 font-light">{open ? '−' : '+'}</span>
                </DisclosureButton>
                
                <DisclosurePanel className="pb-4">
                  <div className="divide-y divide-gray-50">
                    {topic.items.map((item, idx) => (
                      <div 
                        key={idx} 
                        onClick={() => handleItemClick(item)}
                        className={`py-5 flex justify-between items-center group relative ${!item.locked ? 'cursor-pointer hover:bg-gray-50' : ''}`}
                      >
                        <div className="flex items-center space-x-4">
                          <FileText className="w-5 h-5 text-gray-400" />
                          <span className="text-[17px] text-[#483434] opacity-80 font-medium">{item.title}</span>
                        </div>

                        <div className="flex items-center space-x-3">
                          {('progress' in item && item.progress !== undefined) && (
                            <div className="flex flex-col items-center mr-4">
                              <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[10px] text-[#485293] font-bold bg-white mb-1 shadow-sm">
                                You
                              </div>
                              <span className="text-[#485293] text-[12px] font-bold">{item.progress}%</span>
                            </div>
                          )}

                          {!item.locked && (
                            <div className="flex flex-col items-end space-y-1">
                              {item.questions !== undefined && (
                                <span className="bg-[#F2FAF8] text-[#40C1CE] px-3 py-1 text-[12px] font-bold rounded-sm">
                                  {item.questions} QUESTION
                                </span>
                              )}
                              {item.duration && (
                                <span className="bg-[#FDF2F4] text-[#E55891] px-3 py-1 text-[12px] font-bold rounded-sm">
                                  {item.duration}
                                </span>
                              )}
                            </div>
                          )}

                          {item.locked && (
                            <Lock className="w-5 h-5 text-gray-300" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        ))}
      </div>

      {/* Desktop Layout (Visible on large screens) */}
      <div className="hidden lg:block space-y-5">
        {desktopTopics.map((topic) => (
          <Disclosure key={topic.id} as="div" className="border rounded-lg overflow-hidden" defaultOpen={true}>
            {({ open }) => (
              <>
                <DisclosureButton className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold text-gray-900">{topic.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{topic.description}</p>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${open ? 'rotate-180' : ''}`} />
                </DisclosureButton>
                
                <DisclosurePanel className="px-5 pb-5">
                  <div className="divide-y divide-gray-100">
                    {topic.items.map((item, idx) => (
                      <div 
                        key={idx} 
                        onClick={() => handleItemClick(item)}
                        className={`py-4 flex justify-between items-center group ${!item.locked ? 'cursor-pointer hover:bg-gray-50 px-2 -mx-2 rounded-md transition-colors' : ''}`}
                      >
                        <div className="flex items-center text-gray-600">
                          {item.type === 'pdf' ? <FileText className="w-4 h-4 mr-3 text-red-500" /> : 
                           item.type === 'exam' ? <FileJson className="w-4 h-4 mr-3 text-blue-500" /> :
                           <FileText className="w-4 h-4 mr-3" />}
                          <span className="text-[15px]">{item.title}</span>
                        </div>
                        <div className="flex items-center">
                          {item.locked ? (
                            <Lock className="w-4 h-4 text-gray-400" />
                          ) : (
                            <div className="flex space-x-2">
                              {item.questions !== undefined && (
                                <span className="bg-[#F2FAF8] text-[#40C1CE] px-2 py-0.5 text-[11px] font-semibold">
                                  {item.questions} QUESTION
                                </span>
                              )}
                              {item.duration && (
                                <span className="bg-[#FDF2F4] text-[#E55891] px-2 py-0.5 text-[11px] font-semibold">
                                  {item.duration}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        ))}
      </div>

      {/* PDF Modal */}
      <PDFModal 
        isOpen={!!activePdf} 
        onClose={() => setActivePdf(null)} 
        title={activePdf?.title || ''} 
        pdfUrl={activePdf?.url || ''} 
      />

      {/* Exam Modal */}
      <ExamModal 
        isOpen={!!activeExam} 
        onClose={() => setActiveExam(null)} 
        examId={activeExam || ''} 
      />
    </section>
  );
};
