import { Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    Ticket,
    Users,
    ShoppingBag,
    Wallet,
    Settings,
    Menu,
    X
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { useState } from 'react';

const sidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Ticket, label: 'Billetterie', path: '/ticketing' },
    { icon: Users, label: 'Adhérents', path: '/members' },
    { icon: ShoppingBag, label: 'Boutique', path: '/shop' },
    { icon: Wallet, label: 'Trésorerie', path: '/finance' },
    { icon: Settings, label: 'Réglages', path: '/settings' },
];

export function Sidebar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white dark:bg-dark-card shadow-md"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={cn(
                "fixed top-0 left-0 z-40 h-screen w-64 transition-transform duration-300 ease-in-out lg:translate-x-0 bg-white dark:bg-dark-card border-r border-gray-100 dark:border-gray-800",
                isOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="h-full px-3 py-4 overflow-y-auto">
                    <div className="flex items-center justify-center mb-10 mt-4">
                        <h1 className="text-2xl font-bold text-brand-DEFAULT">BeeBle</h1>
                    </div>

                    <ul className="space-y-2 font-medium">
                        {sidebarItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <li key={item.path}>
                                    <Link
                                        to={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "flex items-center p-3 rounded-xl transition-all duration-200 group",
                                            isActive
                                                ? "bg-brand-DEFAULT text-white shadow-lg shadow-brand-DEFAULT/30"
                                                : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-brand-DEFAULT dark:hover:text-white"
                                        )}
                                    >
                                        <item.icon className={cn(
                                            "w-5 h-5 transition-colors",
                                            isActive ? "text-white" : "group-hover:text-brand-DEFAULT dark:group-hover:text-white"
                                        )} />
                                        <span className="ml-3">{item.label}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </aside>
        </>
    );
}
