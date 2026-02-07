import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Subscription from "./pages/subscriptions/Subscriptions";
import Settings from "./pages/settings/Settings";
import Invoices from "./pages/invoices/Invoices";
import UpcomingPayments from "./pages/payments/UpCommingPayments";
import AmazonAWS from "./pages/services/AmazonAWS";

export default function App() {
  return (
    <div className="flex w-screen h-screen bg-[#F8FAFC]">
      
      {/* SIDEBAR + MOBILE HEADER */}
      {/* IMPORTANT: must render on all devices */}
      <Sidebar />

      {/* RIGHT CONTENT */}
      <main
        id="app-scroll"
        className="
          flex-1
          h-screen
          overflow-y-auto
          px-0 md:px-[1.8vw]
          py-6
        "
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/subscriptions" element={<Subscription />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/upcoming-payments" element={<UpcomingPayments />} />
          <Route path="/services/aws" element={<AmazonAWS />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}
