import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { CodeEditor } from './components/CodeEditor';
import { VisualizationView } from './components/VisualizationView';
import { FullscreenDialog } from './components/FullscreenDialog';
import { AGENT_END_POINT } from './constants/apiConstants';
import axios from 'axios';
import cantVisualizeHTML from './constants/cantVisualizeHTML';
import loaderHTML from './constants/loaderHTML';

function App() {
  const [code, setCode] = useState<string>('');
  const [visualization, setVisualization] = useState<string>('');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isLoading,setIsLoading] = useState<boolean>(false);
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

  const handleVisualize = async() => {
    try{
      if(code.trim()){

        setVisualization(loaderHTML);
        setIsLoading(true);

        const response:any =await axios.post(AGENT_END_POINT,{
          data:code.trim(),
        });
        setVisualization(response.data.htmlData);
      }
        

    }catch{
      setVisualization(cantVisualizeHTML);
    }finally{
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setCode('');
    setVisualization('');
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
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
              isLoading={isLoading}
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