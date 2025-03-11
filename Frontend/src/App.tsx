import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { CodeEditor } from './components/CodeEditor';
import { VisualizationView } from './components/VisualizationView';
import { FullscreenDialog } from './components/FullscreenDialog';

function App() {
  const [code, setCode] = useState('');
  const [visualization, setVisualization] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches);
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleVisualize = () => {
    const demoVisualization = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Complex Binary Search Visualization</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @keyframes highlight {
            0%, 100% { background-color: #3b82f6; }
            50% { background-color: #ef4444; }
        }

        @keyframes shrink {
            0% { width: 100%; }
            100% { width: 35%; }
        }

        @keyframes movePointer {
            0% { left: 10%; }
            25% { left: 30%; }
            50% { left: 50%; }
            75% { left: 70%; }
            100% { left: 90%; }
        }

        .search-range {
            animation: shrink 6s infinite alternate ease-in-out;
        }

        .element {
            animation: highlight 3s infinite alternate ease-in-out;
        }

        .pointer {
            animation: movePointer 6s infinite alternate ease-in-out;
        }

        @media (prefers-color-scheme: dark) {
            .element { background-color: #60a5fa; }
            .search-range { border-color: #4b5563; }
            .pointer { background-color: #facc15; }
        }
    </style>
</head>
<body class="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
    <h1 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-5">Binary Search Visualization</h1>

    <div class="relative w-full max-w-lg">
        <!-- Pointer that moves across the elements -->
        <div class="absolute -top-8 left-10 w-6 h-6 bg-yellow-400 dark:bg-yellow-500 pointer rounded-full"></div>

        <div class="relative flex justify-center items-center w-full p-3 border border-gray-400 dark:border-gray-600 rounded-lg search-range">
            <div class="flex gap-2">
                <div class="w-12 h-12 flex items-center justify-center bg-blue-500 text-white font-bold rounded">1</div>
                <div class="w-12 h-12 flex items-center justify-center bg-blue-500 text-white font-bold rounded element">2</div>
                <div class="w-12 h-12 flex items-center justify-center bg-blue-500 text-white font-bold rounded">3</div>
                <div class="w-12 h-12 flex items-center justify-center bg-blue-500 text-white font-bold rounded element">4</div>
                <div class="w-12 h-12 flex items-center justify-center bg-blue-500 text-white font-bold rounded">5</div>
                <div class="w-12 h-12 flex items-center justify-center bg-blue-500 text-white font-bold rounded element">6</div>
                <div class="w-12 h-12 flex items-center justify-center bg-blue-500 text-white font-bold rounded">7</div>
            </div>
        </div>
    </div>
</body>
</html>

    `;
    setVisualization(demoVisualization);
  };

  const handleClear = () => {
    setCode('');
    setVisualization('');
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (visualization) {
      handleVisualize();
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDark ? 'bg-gradient-to-br from-slate-900 to-slate-800' : 'bg-gradient-to-br from-slate-100 to-white'
    }`}>
      {isFullscreen && (
        <FullscreenDialog
          isDark={isDark}
          visualization={visualization}
          onClose={toggleFullscreen}
        />
      )}

      <Header isDark={isDark} onThemeToggle={toggleTheme} />

      <main className="max-w-7xl mx-auto px-4 py-6 sm:py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="space-y-4">
            <CodeEditor
              isDark={isDark}
              code={code}
              onCodeChange={setCode}
              onVisualize={handleVisualize}
              onClear={handleClear}
            />
          </div>
          <div className="space-y-4">
            <VisualizationView
              isDark={isDark}
              visualization={visualization}
              onFullscreen={toggleFullscreen}
            />
          </div>
        </div>
      </main>
      <div className='flex items-center justify-center px-2 text-xs text-gray-400'>Code Atopsy could make mistakes</div>
    </div>
  );
}

export default App;