import { Search, Bell, Sun, Moon } from 'lucide-react';
import { useTheme } from '../theme-provider';

export function Navbar() {
    const { theme, setTheme } = useTheme();

    return (
        <nav className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-light-primary/80 dark:bg-dark-primary/80 backdrop-blur-xl transition-all duration-300">
            <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Pages / Dashboard</span>
                <h2 className="text-2xl font-bold text-light-text dark:text-dark-text">Main Dashboard</h2>
            </div>

            <div className="flex items-center gap-4 bg-white dark:bg-dark-card p-2.5 rounded-full shadow-sm shadow-gray-100 dark:shadow-none">
                {/* Search */}
                <div className="relative flex items-center bg-light-primary dark:bg-dark-primary rounded-full px-4 py-2">
                    <Search className="w-4 h-4 text-gray-400 mr-2" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent border-none outline-none text-sm text-light-text dark:text-dark-text placeholder-gray-400 w-32 sm:w-48"
                    />
                </div>

                {/* Notifications */}
                <button className="p-1 text-gray-400 hover:text-brand-DEFAULT transition-colors">
                    <Bell className="w-5 h-5" />
                </button>

                {/* Theme Toggle */}
                <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="p-1 text-gray-400 hover:text-brand-DEFAULT transition-colors"
                >
                    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>

                {/* Avatar Placeholder */}
                <div className="w-10 h-10 rounded-full bg-brand-DEFAULT text-white flex items-center justify-center font-bold text-sm">
                    AP
                </div>
            </div>
        </nav>
    );
}
