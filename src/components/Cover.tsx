import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Cover: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="text-center py-16 sm:py-24 relative"
    >
      {/* Magical particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${theme === 'dark' ? 'bg-gold-500' : 'bg-amber-700'} opacity-70`}
            initial={{ 
              x: Math.random() * 100 - 50 + '%', 
              y: Math.random() * 100 - 50 + '%',
              scale: 0
            }}
            animate={{ 
              x: [null, Math.random() * 100 - 50 + '%'],
              y: [null, Math.random() * 100 - 50 + '%'],
              scale: [0, 1, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3 + Math.random() * 7,
              repeatType: 'reverse'
            }}
          />
        ))}
      </div>
      
      <div className="flex justify-center mb-6">
        <motion.div
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 0.95, 1]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          className="relative"
        >
          <BookOpen 
            size={64} 
            className={`${theme === 'dark' ? 'text-gold-500' : 'text-amber-700'}`} 
          />
          <Sparkles 
            size={24} 
            className={`absolute -top-2 -right-2 ${theme === 'dark' ? 'text-purple-400' : 'text-amber-500'} animate-pulse`} 
          />
        </motion.div>
      </div>
      
      <h1 className={`font-serif text-4xl sm:text-6xl font-bold mb-4 ${theme === 'dark' ? 'text-gold-500' : 'text-amber-800'}`}>
        O GRIMÓRIO DO APRENDIZ
      </h1>
      
      <h2 className="font-serif text-2xl sm:text-3xl mb-8">
        Uma Jornada Encantada pela Programação com Elixir
      </h2>
      
      <motion.p 
        className="max-w-3xl mx-auto text-lg sm:text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Aprenda os encantamentos da programação funcional com desafios místicos, 
        códigos mágicos e práticas ancestrais como TDD e Coding Dojo.
      </motion.p>
      
      <motion.div 
        className={`w-32 h-1 mx-auto mt-8 ${theme === 'dark' ? 'bg-gold-500' : 'bg-amber-700'}`}
        initial={{ width: 0 }}
        animate={{ width: 128 }}
        transition={{ delay: 1, duration: 0.8 }}
      />
    </motion.section>
  );
};

export default Cover;