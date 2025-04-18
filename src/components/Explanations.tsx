import React from 'react';
import { motion } from 'framer-motion';
import { Code, FlaskRound as Flask, TestTube, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ExplanationProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ExplanationCard: React.FC<ExplanationProps> = ({ icon, title, description, delay }) => {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className={`flex flex-col sm:flex-row items-center sm:items-start gap-4 p-5 rounded-lg ${
        theme === 'dark' 
          ? 'bg-gray-800 border border-purple-700' 
          : 'bg-amber-100 border border-amber-300'
      } hover:shadow-lg transition-shadow duration-300`}
    >
      <div className={`flex-shrink-0 p-3 rounded-full ${
        theme === 'dark' 
          ? 'bg-purple-900 text-gold-500' 
          : 'bg-amber-200 text-amber-800'
      }`}>
        {icon}
      </div>
      <div>
        <h3 className={`font-serif text-xl font-bold mb-2 ${
          theme === 'dark' ? 'text-gold-500' : 'text-amber-800'
        }`}>
          {title}
        </h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

const Explanations: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section className="py-12">
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`font-serif text-3xl text-center font-bold mb-12 ${
          theme === 'dark' ? 'text-gold-500' : 'text-amber-800'
        }`}
      >
        <span className="inline-block mr-2">✦</span>
        Os Conhecimentos Arcanos
        <span className="inline-block ml-2">✦</span>
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ExplanationCard
          icon={<Code size={32} />}
          title="O que é Programação?"
          description="Assim como elfos moldam armas com precisão, os programadores moldam instruções para que máquinas executem tarefas. Programar é traduzir ideias em feitiços digitais."
          delay={0.3}
        />
        
        <ExplanationCard
          icon={<Flask size={32} />}
          title="O que é Elixir?"
          description="Criado sobre a runa sagrada da máquina virtual BEAM, Elixir é uma linguagem funcional, mágica e concisa, ideal para arquiteturas resilientes."
          delay={0.5}
        />
        
        <ExplanationCard
          icon={<TestTube size={32} />}
          title="O que é TDD (Test Driven Development)?"
          description="Como um alquimista que testa seus feitiços antes de usá-los em batalha, o TDD ensina a escrever testes antes do código, garantindo segurança em cada conjuração."
          delay={0.7}
        />
        
        <ExplanationCard
          icon={<Users size={32} />}
          title="O que é um Coding Dojo?"
          description="Um santuário de prática onde aprendizes e mestres compartilham desafios. Todos codificam juntos, em turnos, com foco em aprendizado, cooperação e evolução mágica."
          delay={0.9}
        />
      </div>
    </section>
  );
};

export default Explanations;