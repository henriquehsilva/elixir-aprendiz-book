import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import Cover from './Cover';
import Explanations from './Explanations';
import ExerciseList from './ExerciseList';
import Footer from './Footer';
import ThemeToggle from './ThemeToggle';

const Grimoire: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen transition-colors duration-700 ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-purple-950 to-gray-900 text-gray-100' 
        : 'bg-gradient-to-b from-amber-50 to-amber-100 text-gray-800'
    }`}>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ThemeToggle />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={`rounded-lg overflow-hidden shadow-2xl ${
            theme === 'dark' 
              ? 'bg-gray-900 border-2 border-gold-500' 
              : 'bg-amber-50 border border-amber-700'
          }`}
        >
          {/* Magical border effect */}
          <div className={`relative ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900' 
              : 'bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200'
          } p-1 sm:p-2`}>
            <div className={`${
              theme === 'dark' 
                ? 'bg-gray-900' 
                : 'bg-amber-50'
            } p-4 sm:p-8`}>
              <Cover />
              <Explanations />
              <ExerciseList />
              <Footer />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Grimoire;