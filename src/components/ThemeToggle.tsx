import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <motion.button
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      onClick={toggleTheme}
      className={`fixed top-4 right-4 z-50 p-3 rounded-full ${
        theme === 'dark' 
          ? 'bg-gray-800 border border-purple-700 hover:bg-gray-700' 
          : 'bg-amber-100 border border-amber-300 hover:bg-amber-200'
      } transition-colors duration-300`}
      aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
    >
      {theme === 'dark' ? (
        <Sun className="text-gold-500" size={20} />
      ) : (
        <Moon className="text-amber-700" size={20} />
      )}
    </motion.button>
  );
};

export default ThemeToggle;