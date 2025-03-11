import { Terminal, Minimize2 } from 'lucide-react';

interface FullscreenDialogProps {
  isDark: boolean;
  visualization: string;
  onClose: () => void;
}

export function FullscreenDialog({ isDark, visualization, onClose }: FullscreenDialogProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className={`fixed inset-4 sm:inset-6 md:inset-8 ${
        isDark ? 'bg-slate-800' : 'bg-white'
      } rounded-2xl shadow-2xl flex flex-col`}>
        <div className={`flex items-center justify-between p-4 sm:p-6 border-b ${
          isDark ? 'border-slate-700' : 'border-slate-200'
        }`}>
          <div className="flex items-center space-x-3">
            <Terminal className={`h-5 w-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
            <h2 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Visualization
            </h2>
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              isDark 
                ? 'hover:bg-slate-700 text-slate-300' 
                : 'hover:bg-slate-100 text-slate-700'
            }`}
          >
            <Minimize2 className="h-5 w-5" />
          </button>
        </div>
        <div className={`flex-1 overflow-auto p-4 sm:p-6 ${
          isDark ? 'bg-slate-900/50' : 'bg-slate-50'
        }`}>
          <div dangerouslySetInnerHTML={{ __html: visualization }} />
        </div>
      </div>
    </div>
  );
}