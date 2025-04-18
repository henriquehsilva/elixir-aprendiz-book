import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Scroll, BookMarked, ChevronDown, ChevronUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { exercises } from '../data/exercisesData';

interface ExerciseItemProps {
  number: number;
  title: string;
  description: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const ExerciseItem: React.FC<ExerciseItemProps> = ({ 
  number, 
  title, 
  description, 
  isOpen, 
  onToggle,
  index
}) => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.4 }}
      className={`mb-4 rounded-lg overflow-hidden ${
        theme === 'dark' 
          ? 'bg-gray-800 border border-purple-700' 
          : 'bg-amber-100 border border-amber-300'
      }`}
    >
      <button
        onClick={onToggle}
        className={`w-full px-5 py-4 flex items-center justify-between text-left transition-colors ${
          isOpen ? (
            theme === 'dark' 
              ? 'bg-purple-900' 
              : 'bg-amber-200'
          ) : ''
        }`}
      >
        <div className="flex items-center">
          <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full mr-3 ${
            theme === 'dark' 
              ? 'bg-gold-500 text-purple-900' 
              : 'bg-amber-800 text-amber-100'
          } font-bold`}>
            {number}
          </span>
          <h3 className={`font-serif font-bold ${
            theme === 'dark' ? 'text-gold-500' : 'text-amber-800'
          }`}>
            {title}
          </h3>
        </div>
        {isOpen ? (
          <ChevronUp size={20} />
        ) : (
          <ChevronDown size={20} />
        )}
      </button>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="px-5 py-4"
        >
          <div className="flex gap-2 items-start">
            <BookMarked 
              size={18} 
              className={theme === 'dark' ? 'text-purple-400' : 'text-amber-600'} 
            />
            <p>{description}</p>
          </div>
          
          <div className={`mt-4 p-4 rounded-lg ${
            theme === 'dark' 
              ? 'bg-gray-900 border border-purple-800' 
              : 'bg-amber-50 border border-amber-300'
          }`}>
            <div className="font-mono text-xs sm:text-sm">
              <span className={theme === 'dark' ? 'text-green-400' : 'text-green-600'}>
                # Exemplo de código Elixir
              </span>
              <pre className={`mt-2 ${
                theme === 'dark' ? 'text-purple-300' : 'text-purple-700'
              }`}>
                {`defmodule Magia do
  def ${title.toLowerCase().replace(/\s/g, '_')}(${title.includes('Contador') ? 'lista' : 'valor'}) do
    # Seu código mágico aqui
  end
end`}
              </pre>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

const ExerciseList: React.FC = () => {
  const { theme } = useTheme();
  const [openExercise, setOpenExercise] = useState<number | null>(null);
  
  const handleToggle = (id: number) => {
    setOpenExercise(openExercise === id ? null : id);
  };
  
  return (
    <section className="py-12">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center mb-12"
      >
        <Scroll 
          size={28} 
          className={`mr-3 ${theme === 'dark' ? 'text-gold-500' : 'text-amber-700'}`} 
        />
        <h2 className={`font-serif text-3xl font-bold ${
          theme === 'dark' ? 'text-gold-500' : 'text-amber-800'
        }`}>
          Desafios do Grimório
        </h2>
      </motion.div>
      
      <div className={`p-5 rounded-lg mb-6 ${
        theme === 'dark' 
          ? 'bg-purple-900/30 border border-purple-700' 
          : 'bg-amber-200/50 border border-amber-300'
      }`}>
        <p className="text-center">
          Selecione um desafio para revelar o encantamento a ser dominado
        </p>
      </div>
      
      <div className="divide-y divide-transparent">
        {exercises.map((exercise, index) => (
          <ExerciseItem
            key={exercise.id}
            number={exercise.id}
            title={exercise.title}
            description={exercise.description}
            isOpen={openExercise === exercise.id}
            onToggle={() => handleToggle(exercise.id)}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ExerciseList;