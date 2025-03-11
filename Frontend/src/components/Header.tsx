import { Terminal, Sun, Moon } from "lucide-react";

interface HeaderProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

export function Header({ isDark, onThemeToggle }: HeaderProps) {
  return (
    <header
      className={`${
        isDark
          ? "bg-slate-800/50 border-slate-700"
          : "bg-white/50 border-slate-200"
      } backdrop-blur-lg border-b transition-colors duration-200 sticky top-0 z-40`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
          <div className="flex items-center space-x-4">
            <div
              className={`p-2 ${
                isDark ? "bg-blue-500/10" : "bg-blue-100"
              } rounded-lg`}
            >
              <Terminal
                className={`h-6 w-6 sm:h-8 sm:w-8 ${
                  isDark ? "text-blue-400" : "text-blue-600"
                }`}
              />
            </div>
            <div>
              <h1
                className={`text-xl sm:text-2xl font-bold ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Code Autopsy
              </h1>
              <p
                className={`text-xs sm:text-sm ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Your code had the high ground… until AI visualized it.
              </p>
            </div>
          </div>
          <div className="text-right">
            <button
              onClick={onThemeToggle}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isDark
                  ? "bg-slate-700 hover:bg-slate-600 text-slate-300"
                  : "bg-slate-200 hover:bg-slate-300 text-slate-700"
              }`}
            >
              {isDark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
