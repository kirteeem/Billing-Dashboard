import React from "react";
import {
  SlackIcon,
  AWSIcon,
  GithubIcon,
  GoogleIcon,
  StripeIcon,
  ApiKeyIcon,
  ConnectedBadge,
  DisconnectedBadge
} from "../../assets/icons/serviceicons/ServiceIcons";

/* ================= DATA ================= */

const apiConnections = [
  {
    name: "Amazon Web Services",
    time: "Last sync: 2 hours ago",
    icon: <AWSIcon />,
    status: "connected",
  },
  {
    name: "Stripe",
    time: "Last sync: 1 hour ago",
    icon: <StripeIcon />,
    status: "connected",
  },
  {
    name: "GitHub",
    time: "Last sync: 30 min ago",
    icon: <GithubIcon />,
    status: "connected",
  },
  {
    name: "Slack",
    time: "Last sync: 15 min ago",
    icon: <SlackIcon />,
    status: "connected",
  },
  {
    name: "Google Workspace",
    time: "Last sync: Never",
    icon: <GoogleIcon />,
    status: "disconnected",
  },
];

const alerts = [
  { title: "Payment due reminders", desc: "3 days before due date", enabled: true },
  { title: "Overdue notifications", desc: "Immediate alert when payment is overdue", enabled: true },
  { title: "Spend threshold alerts", desc: "Alert when monthly spend exceeds $15,000", enabled: false },
  { title: "New invoice received", desc: "When a new invoice is generated", enabled: true },
  { title: "Subscription renewal", desc: "7 days before renewal", enabled: true },
];

/* ================= PAGE ================= */

export default function Settings() {
  return (
    <div
      className="w-full bg-[#F8FAFC] py-2"
      style={{ fontFamily: "'Rethink Sans', sans-serif" }}
    >
      {/* ================= PAGE HEADER ================= */}
      <div className="mb-6">
        <h1 className="text-[30px] leading-[36px] font-semibold text-[#0F1729]">
          Settings
        </h1>
        <p className="mt-2 text-base text-[#828A96]">
          Manage your API connections, alerts, and access control
        </p>
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="flex gap-6 max-w-[1585px]">
        {/* ================= API CONNECTIONS CARD ================= */}
        <div
          className="bg-white rounded-xl border border-[#E2E8F0] p-6"
         style={{ width: "800px", height: "560px" }}

        >
          {/* CARD HEADER */}
          <div className="flex items-start gap-3 mb-6">
            <ApiKeyIcon size={36} />
            <div>
              <h2 className="text-[18px] font-semibold text-[#0F172A] leading-[28px]">
                API Connections
              </h2>
              <p className="text-sm text-[#64748B]">
                Manage service integrations
              </p>
            </div>
          </div>

          {/* LIST */}
          <div className="flex flex-col gap-4">
            {apiConnections.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between border border-[#E2E8F0] rounded-xl px-4 py-4 h-[74px]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#F3F5F7]">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-[15px] font-medium text-[#0F172A]">
                      {item.name}
                    </p>
                    <p className="text-[13px] text-[#64748B]">
                      {item.time}
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
  {item.status === "connected" ? (
    <ConnectedBadge />
  ) : (
    <DisconnectedBadge />
  )}
</div>

              </div>
            ))}
          </div>
        </div>

        {/* ================= ALERTS CARD ================= */}
        <div
          className="bg-white rounded-xl border border-[#E2E8F0] p-6"
          style={{ width: "800px", height: "560px" }}

        >
          <h2 className="text-[18px] font-semibold text-[#0F172A] mb-1">
            Alerts & Notifications
          </h2>
          <p className="text-sm text-[#64748B] mb-6">
            Configure your notification preferences
          </p>

          <div className="flex flex-col gap-6">
            {alerts.map((item, i) => (
              <div key={i} className="flex justify-between items-center">
                <div>
                  <p className="text-[15px] font-medium text-[#0F172A]">
                    {item.title}
                  </p>
                  <p className="text-[13px] text-[#64748B]">
                    {item.desc}
                  </p>
                </div>

                <div
                  className={`w-11 h-6 rounded-full p-1 transition ${
                    item.enabled ? "bg-[#0EA5E9]" : "bg-[#E5E7EB]"
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full transition-transform ${
                      item.enabled ? "translate-x-5" : ""
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

