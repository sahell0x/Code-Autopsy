import { Code2, Play, Trash2 } from 'lucide-react';

interface CodeEditorProps {
  isDark: boolean;
  code: string;
  isLoading : boolean;
  onCodeChange: (code: string) => void;
  onVisualize: () => void;
  onClear: () => void;
}

export function CodeEditor({ isDark, isLoading, code, onCodeChange, onVisualize, onClear }: CodeEditorProps) {
  return (
    <div className={`${
      isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white/50 border-slate-200'
    } backdrop-blur rounded-xl border p-4 sm:p-6 transition-colors duration-200`}>
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <div className="flex items-center space-x-3">
          <Code2 className={`h-5 w-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
          <h2 className={`text-base sm:text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Code Input
          </h2>
        </div>
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
      </div>
      <textarea
        value={code}
        onChange={(e) => onCodeChange(e.target.value)}
        className={`scrollbar-none w-full h-[300px] sm:h-[400px] p-4 font-mono text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-colors duration-200 ${
          isDark 
            ? 'bg-slate-900/50 text-slate-300 border-slate-700' 
            : 'bg-slate-50 text-slate-900 border-slate-200'
        }`}
        placeholder="// Paste your code here..."
        spellCheck="false"
      />
      <div className="flex flex-col sm:flex-row gap-3 sm:space-x-4 mt-4 sm:mt-6">
        <button
          onClick={onVisualize}
          disabled={isLoading}
          className="flex items-center justify-center px-6 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 group w-full sm:w-auto"
        >
          <Play className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
          Visualize
        </button>
        <button
          onClick={onClear}
          className={`flex items-center justify-center px-6 py-2.5 rounded-lg transition-colors duration-200 w-full sm:w-auto ${
            isDark 
              ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' 
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          <Trash2 className="h-5 w-5 mr-2" />
          Clear All
        </button>
      </div>
    </div>
  );
}