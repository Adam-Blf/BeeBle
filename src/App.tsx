import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';
import { Layout } from './components/layout/Layout';

import Dashboard from './pages/Dashboard';
import Ticketing from './pages/Ticketing';
const Members = () => <div className="text-light-text dark:text-dark-text">Members Content</div>;
import Shop from './pages/Shop';
const Finance = () => <div className="text-light-text dark:text-dark-text">Finance Content</div>;
const Settings = () => <div className="text-light-text dark:text-dark-text">Settings Content</div>;

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="ticketing" element={<Ticketing />} />
            <Route path="members" element={<Members />} />
            <Route path="shop" element={<Shop />} />
            <Route path="finance" element={<Finance />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
