import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Ticket,
    Users,
    ShoppingBag,
    Wallet,
    Settings,
    Search,
    Bell,
    Sun,
    Moon,
    Menu,
    X
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { clsx } from 'clsx';

interface MainLayoutProps {
    children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return document.documentElement.classList.contains('dark') ||
                localStorage.getItem('theme') === 'dark';
        }
        return false;
    });
    const location = useLocation();

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode(!isDarkMode);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const navItems = [
        { icon: LayoutDashboard, label: 'Vue d\'ensemble', path: '/' },
        { icon: Ticket, label: 'Billetterie', path: '/ticketing' },
        { icon: Users, label: 'Adhérents', path: '/members' },
        { icon: ShoppingBag, label: 'Boutique', path: '/shop' },
        { icon: Wallet, label: 'Trésorerie', path: '/finance' },
        { icon: Settings, label: 'Paramètres', path: '/settings' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans transition-colors duration-300">
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={clsx(
                    "fixed top-0 left-0 z-50 h-screen w-64 transform border-r border-slate-200 bg-white/80 backdrop-blur-xl transition-transform duration-300 lg:translate-x-0 dark:border-slate-800 dark:bg-slate-900/80",
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex h-16 items-center justify-between px-6 border-b border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2 font-bold text-xl text-indigo-600 dark:text-indigo-400">
                        <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
                            B
                        </div>
                        <span>BeeBle</span>
                    </div>
                    <button onClick={toggleSidebar} className="lg:hidden text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
                        <X size={20} />
                    </button>
                </div>

                <nav className="p-4 space-y-1">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsSidebarOpen(false)}
                                className={clsx(
                                    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                                    isActive
                                        ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400"
                                        : "text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800"
                                )}
                            >
                                <item.icon size={20} strokeWidth={1.5} />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-3 px-4 py-2">
                        <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 flex-shrink-0" />
                        <div className="overflow-hidden">
                            <p className="text-sm font-medium truncate">Admin BDE</p>
                            <p className="text-xs text-slate-500 truncate dark:text-slate-400">admin@bde-esiee.fr</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="lg:pl-64 min-h-screen flex flex-col">
                {/* Header */}
                <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white/80 px-4 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleSidebar}
                            className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg dark:text-slate-400 dark:hover:bg-slate-800"
                        >
                            <Menu size={20} />
                        </button>
                        <div className="hidden md:flex items-center gap-2 w-full max-w-md">
                            <div className="relative w-64">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500 dark:text-slate-400" />
                                <Input
                                    placeholder="Rechercher..."
                                    className="pl-9 bg-slate-50 border-transparent focus:bg-white dark:bg-slate-800 dark:focus:bg-slate-950"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-4">
                        <Button variant="ghost" size="sm" className="rounded-full w-10 h-10 p-0">
                            <Bell size={20} strokeWidth={1.5} />
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="rounded-full w-10 h-10 p-0"
                            onClick={toggleTheme}
                        >
                            {isDarkMode ? <Sun size={20} strokeWidth={1.5} /> : <Moon size={20} strokeWidth={1.5} />}
                        </Button>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 p-4 sm:p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
