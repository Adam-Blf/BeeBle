import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';

export function Layout() {
    return (
        <div className="flex h-screen overflow-hidden bg-light-primary dark:bg-dark-primary transition-colors duration-300">
            <Sidebar />

            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden lg:ml-64">
                <Navbar />

                <main className="w-full flex-grow p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
