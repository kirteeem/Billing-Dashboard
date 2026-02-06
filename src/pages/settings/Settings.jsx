import React from "react";
import {
  SlackIcon,
  AWSIcon,
  GithubIcon,
  GoogleIcon,
  StripeIcon,
  ApiKeyIcon,
  ConnectedBadge,
  DisconnectedBadge,
  AlertIcon
} from "../../assets/icons/serviceicons/ServiceIcons";

/* ================= DATA ================= */

const apiConnections = [
  { name: "Amazon Web Services", time: "Last sync: 2 hours ago", icon: <AWSIcon />, status: "connected" },
  { name: "Stripe", time: "Last sync: 1 hour ago", icon: <StripeIcon />, status: "connected" },
  { name: "GitHub", time: "Last sync: 30 min ago", icon: <GithubIcon />, status: "connected" },
  { name: "Slack", time: "Last sync: 15 min ago", icon: <SlackIcon />, status: "connected" },
  { name: "Google Workspace", time: "Last sync: Never", icon: <GoogleIcon />, status: "disconnected" },
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
      className="w-full bg-[#F8FAFC] py-[0.22vh]"
      style={{ fontFamily: "'Rethink Sans', sans-serif" }}
    >
      {/* ================= PAGE HEADER ================= */}
      <div style={{ marginBottom: "3.55vh" }}>
        <h1
          style={{
            fontFamily: "Rethink Sans, sans-serif",
            fontWeight: 600,
            fontSize: "2.08vw",
            lineHeight: "4vh",
            letterSpacing: "-0.052vw",
            color: "rgba(15, 23, 41, 1)",
          }}
        >
          Settings
        </h1>

        <p
          style={{
            marginTop: "0.66vh",
            fontFamily: "Rethink Sans, sans-serif",
            fontWeight: 400,
            fontSize: "1.11vw",
            lineHeight: "2.66vh",
            color: "rgba(130, 138, 150, 1)",
          }}
        >
          Manage your API connections, alerts, and access control
        </p>
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="flex gap-[1.66vw] max-w-[110vw]">
        
        {/* ================= API CONNECTIONS CARD ================= */}
        <div
          className="bg-white rounded-xl border border-[#E2E8F0] p-[1.66vw]"
          style={{ width: "55.55vw", height: "62.22vh" }}
        >
          {/* CARD HEADER */}
          <div className="flex items-start gap-[0.83vw] mb-[2.66vh]">
            <div className="mt-[0.44vh]">
              {/* Note: If ApiKeyIcon doesn't accept viewport units for 'size', 
                  wrap it in a div with vw/vh dimensions */}
              <ApiKeyIcon size={36} /> 
            </div>

            <div>
              <h2 className="text-[1.25vw] font-semibold text-[#0F172A] leading-[3.11vh]">
                API Connections
              </h2>
              <p className="text-[0.97vw] text-[#64748B]">
                Manage service integrations
              </p>
            </div>
          </div>

          {/* LIST */}
          <div className="flex flex-col gap-[1.77vh]">
            {apiConnections.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between border border-[#E2E8F0] rounded-xl px-[1.11vw] py-[1.77vh] h-[8.22vh]"
              >
                <div className="flex items-center gap-[1.11vw]">
                  <div className="w-[2.77vw] h-[4.44vh] flex items-center justify-center rounded-lg bg-[#F3F5F7]">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-[1.04vw] font-medium text-[#0F172A]">
                      {item.name}
                    </p>
                    <p className="text-[0.9vw] text-[#64748B]">
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
          className="bg-white rounded-xl border border-[#E2E8F0] p-[1.66vw]"
          style={{ width: "55.55vw", height: "62.22vh" }}
        >
          {/* HEADER */}
          <div className="flex gap-[0.83vw] mb-[2.66vh]">
            <div className="mt-[0.44vh]">
              <AlertIcon />
            </div>

            <div>
              <h2 className="text-[1.25vw] font-semibold text-[#0F172A] mb-[0.44vh]">
                Alerts & Notifications
              </h2>
              <p className="text-[0.97vw] text-[#64748B]">
                Configure your notification preferences
              </p>
            </div>
          </div>

          {/* LIST */}
          <div className="flex flex-col gap-[1.77vh]">
            {alerts.map((item, i) => (
              <div key={i} className="flex justify-between items-center py-[1vh]">
                <div>
                  <p className="text-[1.04vw] font-medium text-[#0F172A]">
                    {item.title}
                  </p>
                  <p className="text-[0.9vw] text-[#64748B]">
                    {item.desc}
                  </p>
                </div>

                {/* TOGGLE SWITCH */}
                <div
                  className={`w-[3.05vw] h-[2.66vh] rounded-full p-[0.27vh] transition ${
                    item.enabled ? "bg-[#0EA5E9]" : "bg-[#E5E7EB]"
                  }`}
                >
                  <div
                    className={`w-[1.11vw] h-[2.11vh] bg-white rounded-full transition-transform ${
                      item.enabled ? "translate-x-[1.38vw]" : ""
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