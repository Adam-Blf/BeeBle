import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Dashboard } from './pages/Dashboard';
import { Shop } from './pages/Shop';
import { Merch } from './pages/Merch';
import { Members } from './pages/Members';

// Placeholder components for other routes
const Placeholder = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center h-[60vh] text-slate-500">
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    <p>Cette fonctionnalité est en cours de développement.</p>
  </div>
);

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/members" element={<Members />} />
          <Route path="/finance" element={<Placeholder title="Trésorerie" />} />
          <Route path="/settings" element={<Placeholder title="Paramètres" />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
