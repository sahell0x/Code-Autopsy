import { Terminal, Maximize2 } from 'lucide-react';

interface VisualizationViewProps {
  isDark: boolean;
  visualization: string;
  onFullscreen: () => void;
}

export function VisualizationView({ isDark, visualization, onFullscreen }: VisualizationViewProps) {
  return (
    <div className={`${
      isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white/50 border-slate-200'
    } backdrop-blur rounded-xl border p-4 sm:p-6 transition-colors duration-200`}>
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="flex items-center space-x-3">
          <Terminal className={`h-5 w-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
          <h2 className={`text-base sm:text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Visualization
          </h2>
        </div>
        <div className="flex items-center space-x-3">
          <div className={`invisible px-3 py-1 rounded-full text-xs sm:text-sm ${
            isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-600'
          }`}>
          </div>
          {visualization && (
            <button
              onClick={onFullscreen}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isDark 
                  ? 'hover:bg-slate-700 text-slate-300' 
                  : 'hover:bg-slate-100 text-slate-700'
              }`}
            >
              <Maximize2 className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
      <div 
        className={`h-[400px] sm:h-[474px] border rounded-lg overflow-auto p-4 transition-colors duration-200 ${
          isDark 
            ? 'bg-slate-900/50 border-slate-700' 
            : 'bg-slate-50 border-slate-200'
        }`}
        dangerouslySetInnerHTML={{ __html: visualization }}
      />
    </div>
  );
}