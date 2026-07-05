'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface PDFModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  pdfUrl: string;
}

export const PDFModal = ({ isOpen, onClose, title, pdfUrl }: PDFModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[1200] bg-black flex flex-col"
        >
          <header className="flex items-center justify-between px-6 py-4 bg-gray-900 text-white">
            <h3 className="text-lg font-medium">{title}</h3>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <X className="w-6 h-6" />
            </button>
          </header>
          <div className="flex-1 bg-gray-800">
            <iframe
              src={`${pdfUrl}#toolbar=0`}
              className="w-full h-full border-none"
              title="PDF Viewer"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
