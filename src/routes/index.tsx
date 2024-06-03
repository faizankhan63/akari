import { HashRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import AutoListing from '../pages/auto-listing';
import AccountManager from '../pages/account-manager';
import CsvPage from '../pages/csv';
import Settings from '../pages/settings';
import Login from '../pages/auth/login';
import ForgotPassword from '../pages/auth/forgot-password';

function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/auto-listing" element={<AutoListing />} />
        <Route path="/account-manager" element={<AccountManager />} />
        <Route path="/csv" element={<CsvPage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRouter;
