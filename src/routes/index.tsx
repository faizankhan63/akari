import { HashRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/dashboard';

function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/bye" element={<div>bye</div>} />
      </Routes>
    </HashRouter>
  );
}

export default AppRouter;
