import { Routes, Route } from "react-router-dom";

import Splash from "./pages/splash";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Accounts from "./pages/accounts";
import Payments from "./pages/payments";
import Cards from "./pages/cards";
import Notifications from "./pages/notifications";
import Profile from "./pages/profile";
import SettingsPage from "./pages/settings";
import Transactions from "./pages/transactions";
import ScanQR from "./pages/scanqr";
import Services from "./pages/services";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/services" element={<Services />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/scan" element={<ScanQR />} />
    </Routes>
  );
}

export default App;
