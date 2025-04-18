import React from 'react';
import { motion } from 'framer-motion';
import { Wand2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className={`py-12 text-center ${
        theme === 'dark' 
          ? 'border-t border-purple-800' 
          : 'border-t border-amber-300'
      }`}
    >
      <div className={`max-w-3xl mx-auto p-6 rounded-lg ${
        theme === 'dark' 
          ? 'bg-gradient-to-r from-purple-900/40 via-gray-800/40 to-purple-900/40 border border-purple-700' 
          : 'bg-gradient-to-r from-amber-200/40 via-amber-100/40 to-amber-200/40 border border-amber-300'
      }`}>
        <div className="flex justify-center mb-4">
          <Wand2 
            size={32} 
            className={`${theme === 'dark' ? 'text-gold-500' : 'text-amber-700'}`} 
          />
        </div>
        
        <p className="font-serif text-lg mb-2">
          <span className={theme === 'dark' ? 'text-gold-500' : 'text-amber-800'}>
            🧙‍♂️
          </span> Que este Grimório seja o início de sua jornada pela sabedoria funcional.
        </p>
        
        <p className="font-serif text-lg">
          Pratique, compartilhe e conjure sabedoria com seus irmãos de código.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;