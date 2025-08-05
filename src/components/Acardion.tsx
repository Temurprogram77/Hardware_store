import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

interface Review {
  key: number;
  quiz: string;
  answer: string;
}

interface Props {
  quiz: Review;
}

const Acardion: React.FC<Props> = ({ quiz }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(prev => !prev);

  return (
    <div className="border-b border-gray-200 py-5">
      {/* Header */}
      <div
        onClick={toggleAccordion}
        className="flex justify-between items-center cursor-pointer"
      >
        <span className="text-sm font-medium text-gray-800">{quiz.quiz}</span>
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-500 text-xl"
        >
          {isOpen ? <FaMinus /> : <FaPlus />}
        </motion.div>
      </div>

      {/* Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-sm text-gray-500 leading-6 mt-2">{quiz.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Acardion;
