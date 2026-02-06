import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Settings from "./pages/settings/Settings";
import Invoices from "./pages/invoices/Invoices";
import UpcomingPayments from "./pages/payments/UpCommingPayments";

export default function App() {
  return (
    <div className="flex w-screen h-screen bg-[#F8FAFC] overflow-hidden">
      
      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* RIGHT CONTENT */}
      <main
        className="
          flex-1
          h-screen
          overflow-y-auto
          px-[1.67vw]
          pt-[3.2vh]
        "
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/upcoming-payments" element={<UpcomingPayments />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
