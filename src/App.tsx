import React, { useState } from 'react';
import Grimoire from './components/Grimoire';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading grimoire
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {isLoading ? (
        <div className="min-h-screen flex items-center justify-center bg-purple-950">
          <div className="text-center">
            <div className="inline-block relative">
              <div className="w-16 h-16 border-4 border-t-gold-500 border-r-purple-300 border-b-gold-500 border-l-purple-300 rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-gold-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            <p className="text-gold-500 mt-4 font-serif">Carregando o Grimório...</p>
          </div>
        </div>
      ) : (
        <Grimoire />
      )}
    </ThemeProvider>
  );
}

export default App;