import React from "react";
import bunnyLogo from "../../assets/icons/BunnyCDN.png";
import { AlertTriangle, Clock, Calendar } from "lucide-react";
import {AWSIcon}from "../../assets/icons/serviceicons/ServiceIcons"

/* ================= PAGE ================= */
export default function UpcomingPayments() {
  return (
    <div className="w-full h-full bg-[#F8FAFC]">
      {/* ================= HEADER ================= */}
      <div className="mb-[2.66vh]">
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
          Upcoming Payments
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
          Manage and track your payment schedules
        </p>
      </div>

      {/* ================= STAT CARDS ================= */}
      <div className="grid grid-cols-4 gap-[1.11vw]">
        <StatCard title="Total Due (30 Days)" value="$8,869" variant="total" />
        <StatCard title="Overdue" value="3" variant="overdue" />
        <StatCard title="Due This Week" value="2" variant="week" />
        <StatCard title="Scheduled" value="2" variant="scheduled" />
      </div>

      {/* ================= OVERDUE ================= */}
      <div className="mt-[3.55vh]">
        <OverdueSection />
      </div>

      {/* ================= DUE THIS WEEK ================= */}
      <div className="mt-[3.55vh]">
        <DueThisWeekSection />
      </div>

      {/* ================= UPCOMING ================= */}
      <div className="mt-[3.55vh]">
        <UpcomingSection />
      </div>
    </div>
  );
}

const OverdueIcon = () => (
  <svg width="2.77vw" height="4.44vh" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="12" fill="#DC2828" fillOpacity="0.1" />
    <path
      d="M20 14.9915L26.275 25.8332H13.725L20 14.9915ZM12.2833 25C11.6416 26.1082 12.4416 27.5 13.725 27.5H26.275C27.5583 27.5 28.3583 26.1082 27.7166 25L21.4416 14.1582C20.7999 13.0498 19.1999 13.0498 18.5583 14.1582L12.2833 25ZM19.1666 19.1665V20.8332C19.1666 21.2915 19.5416 21.6665 20 21.6665C20.4583 21.6665 20.8333 21.2915 20.8333 20.8332V19.1665C20.8333 18.7082 20.4583 18.3332 20 18.3332C19.5416 18.3332 19.1666 18.7082 19.1666 19.1665ZM19.1666 23.3332H20.8333V25H19.1666V23.3332Z"
      fill="#DC2828"
    />
  </svg>
);

const DueThisWeekIcon = () => (
  <svg width="2.77vw" height="4.44vh" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="12" fill="#F59F0A" fillOpacity="0.1" />
    <path
      d="M20 26.6667C23.6667 26.6667 26.6667 23.6667 26.6667 20C26.6667 16.3333 23.6667 13.3333 20 13.3333C16.3333 13.3333 13.3333 16.3333 13.3333 20C13.3333 23.6667 16.3333 26.6667 20 26.6667ZM20 11.6667C24.5833 11.6667 28.3333 15.4167 28.3333 20C28.3333 24.5833 24.5833 28.3333 20 28.3333C15.4167 28.3333 11.6667 24.5833 11.6667 20C11.6667 15.4167 15.4167 11.6667 20 11.6667ZM24.1667 21.5833L23.5833 22.6667L19.1667 20.25V15.8333H20.4167V19.5L24.1667 21.5833Z"
      fill="#F59F0A"
    />
  </svg>
);

const UpcomingIcon = () => (
  <svg width="2.77vw" height="4.44vh" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="12" fill="#E7F6FE" />
    <path d="M16.667 11.667V15" stroke="#00B7FF" strokeWidth="1.6667" strokeLinecap="round" />
    <path d="M23.333 11.667V15" stroke="#00B7FF" strokeWidth="1.6667" strokeLinecap="round" />
    <path
      d="M25.8333 13.3333H14.1667C13.2462 13.3333 12.5 14.0794 12.5 15V26.6667C12.5 27.5872 13.2462 28.3333 14.1667 28.3333H25.8333C26.7538 28.3333 27.5 27.5872 27.5 26.6667V15C27.5 14.0794 26.7538 13.3333 25.8333 13.3333Z"
      stroke="#00B7FF"
      strokeWidth="1.6667"
    />
    <path d="M12.5 18.3333H27.5" stroke="#00B7FF" strokeWidth="1.6667" />
  </svg>
);

const AuthOIcon = () => (
  <svg width="2.77vw" height="4.44vh" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="14" fill="#FFFFFF" />
    <rect x="14" y="22" width="20" height="16" rx="3" fill="#FACC15" />
    <rect x="18" y="14" width="12" height="10" rx="6" fill="#FACC15" />
    <circle cx="24" cy="30" r="2" fill="#9A3412" />
    <rect x="23.4" y="30" width="1.2" height="4" fill="#9A3412" />
    <circle cx="33" cy="17" r="4" fill="#F59E0B" />
    <rect x="33" y="17" width="7" height="2" rx="1" fill="#F59E0B" />
    <rect x="38" y="15.8" width="1.6" height="4.4" rx="0.8" fill="#F59E0B" />
  </svg>
);

const GoDaddyLogo = () => (
  <svg width="2.22vw" height="3.55vh" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_107_312)">
      <path d="M23.0031 3.30423C20.2317 1.57263 16.5831 1.98518 13.329 4.02988C10.085 1.98518 6.43421 1.57263 3.66613 3.30423C-0.712617 6.04066 -1.24498 13.088 2.47819 19.0458C5.22254 23.4381 9.51425 26.0118 13.3346 25.9643C17.155 26.0118 21.4467 23.4381 24.1911 19.0458C27.9097 13.088 27.3819 6.04066 23.0031 3.30423ZM4.49124 17.7878C3.72353 16.5707 3.1443 15.2446 2.7732 13.8544C2.44349 12.6475 2.31742 11.3942 2.4002 10.1459C2.56635 7.94407 3.46267 6.22942 4.92301 5.31728C6.38334 4.40513 8.31388 4.34975 10.3699 5.16582C10.6784 5.28902 10.9836 5.43143 11.2865 5.58855C10.144 6.6303 9.15057 7.82458 8.33422 9.13766C6.07364 12.7546 5.38417 16.7795 6.17311 19.9884C5.54403 19.3098 4.98088 18.5729 4.49124 17.7878ZM23.8972 13.8532C23.5256 15.2433 22.9464 16.5694 22.1791 17.7866C21.6891 18.5729 21.126 19.3113 20.4973 19.9918C21.2026 17.1152 20.7233 13.591 18.994 10.286C18.9664 10.2316 18.9276 10.1836 18.8803 10.145C18.8329 10.1065 18.778 10.0784 18.7191 10.0624C18.6602 10.0464 18.5986 10.043 18.5383 10.0523C18.478 10.0616 18.4203 10.0835 18.3689 10.1165L12.9775 13.4848C12.9283 13.5154 12.8856 13.5555 12.852 13.6027C12.8183 13.6499 12.7943 13.7032 12.7813 13.7597C12.7682 13.8162 12.7665 13.8747 12.7761 13.9319C12.7857 13.989 12.8065 14.0437 12.8373 14.0928L13.6285 15.3576C13.6591 15.4068 13.6991 15.4494 13.7461 15.4831C13.7932 15.5167 13.8465 15.5407 13.9029 15.5538C13.9593 15.5668 14.0177 15.5685 14.0748 15.5589C14.1318 15.5493 14.1864 15.5286 14.2355 15.4978L17.7303 13.3141C17.8434 13.6532 17.9564 13.9923 18.0412 14.3313C18.3708 15.5366 18.4972 16.7884 18.4153 18.0353C18.2491 20.236 17.3528 21.9506 15.8925 22.8639C15.1392 23.3244 14.2762 23.5743 13.3934 23.5873H13.2815C12.3987 23.5745 11.5355 23.3247 10.7824 22.8639C9.32097 21.9506 8.42465 20.236 8.25849 18.0353C8.17622 16.787 8.30228 15.5337 8.63149 14.3268C9.38899 11.5346 10.9548 9.0285 13.1323 7.12348C14.0713 6.29926 15.1408 5.63692 16.2971 5.16356C18.3475 4.34749 20.2814 4.40174 21.7429 5.31502C23.2043 6.22829 24.0995 7.94181 24.2657 10.1436C24.3495 11.392 24.225 12.6457 23.8972 13.8532Z" fill="#1BDBDB"/>
    </g>
    <defs><clipPath id="clip0_107_312"><rect width="26.6679" height="26.6679" fill="white" /></clipPath></defs>
  </svg>
);

const SlackIcon = () => (
  <svg width="2.77vw" height="4.44vh" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#F3F5F7" />
    <g clipPath="url(#clip0_107_484)">
      <path d="M12.3452 23.0664C12.3452 24.5935 11.0997 25.8407 9.57245 25.8407C8.04536 25.8407 6.79828 24.5935 6.79828 23.0664C6.79828 21.5393 8.04557 20.292 9.57265 20.292H12.3454L12.3452 23.0664ZM13.7429 23.0664C13.7429 21.5393 14.9902 20.292 16.5172 20.292C18.0443 20.292 19.2916 21.5391 19.2916 23.0664V30.0112C19.2916 31.5382 18.0445 32.7855 16.5172 32.7855C14.9902 32.7855 13.7429 31.5382 13.7429 30.0112V23.0664Z" fill="#DE1C59" />
      <path d="M16.5172 11.9282C14.9902 11.9282 13.7429 10.6828 13.7429 9.15551C13.7429 7.62843 14.9902 6.38135 16.5172 6.38135C18.0443 6.38135 19.2916 7.62864 19.2916 9.15572V11.9284L16.5172 11.9282ZM16.5172 13.3259C18.0443 13.3259 19.2916 14.5732 19.2916 16.1003C19.2916 17.6274 18.0445 18.8747 16.5172 18.8747H9.57245C8.04536 18.8747 6.79828 17.6276 6.79828 16.1003C6.79828 14.5732 8.04557 13.3259 9.57265 13.3259H16.5172Z" fill="#35C5F0" />
      <path d="M27.6555 16.1003C27.6555 14.5732 28.9009 13.3259 30.4282 13.3259C31.9553 13.3259 33.2026 14.5732 33.2026 16.1003C33.2026 17.6274 31.9553 18.8747 30.4282 18.8747H27.6555V16.1003ZM26.2578 16.1003C26.2578 17.6274 25.0105 18.8747 23.4834 18.8747C21.9563 18.8747 20.709 17.6276 20.709 16.1003V9.15551C20.709 7.62843 21.9561 6.38135 23.4834 6.38135C25.0105 6.38135 26.2578 7.62864 26.2578 9.15572V16.1003Z" fill="#2EB57D" />
      <path d="M23.4834 27.2385C25.0105 27.2385 26.2578 28.4839 26.2578 30.0112C26.2578 31.5382 25.0105 32.7855 23.4834 32.7855C21.9563 32.7855 20.709 31.5382 20.709 30.0112V27.2385H23.4834ZM23.4834 25.8407C21.9563 25.8407 20.709 24.5935 20.709 23.0664C20.709 21.5393 21.9561 20.292 23.4834 20.292H30.4282C31.9553 20.292 33.2026 21.5391 33.2026 23.0664C33.2026 24.5935 31.9553 25.8407 30.4282 25.8407H23.4834Z" fill="#EBB02E" />
    </g>
    <defs><clipPath id="clip0_107_484"><rect width="26.6667" height="26.6667" fill="white" transform="translate(6.66669 6.25)" /></clipPath></defs>
  </svg>
);


/* ================= STAT CARD ================= */
function StatCard({ title, value, variant }) {
  const isTotal = variant === "total";

  const iconMap = {
    overdue: <OverdueIcon />,
    week: <DueThisWeekIcon />,
    scheduled: <UpcomingIcon />,
  };

  return (
    <div
      className={`w-full h-[11.77vh] rounded-xl px-[1.66vw] py-[1.77vh] flex items-center justify-between border border-[#E5EAF0]
        ${isTotal ? "bg-gradient-to-r from-[#DEF3FD] to-[#F5FDFF]" : "bg-white"}
      `}
    >
      <div>
        <div className="text-[0.97vw] text-[rgba(130,138,150,1)]">
          {title}
        </div>

        <div
          className={`mt-[0.11vh] font-semibold ${
            isTotal ? "text-[1.94vw]" : "text-[1.66vw]"
          }`}
        >
          {value}
        </div>
      </div>

      {!isTotal && (
        <div className="-mt-[0.22vh]">
          {iconMap[variant]}
        </div>
      )}
    </div>
  );
}

/* ================= SECTION WRAPPER ================= */
function SectionWrapper({ title, icon, variant = "default", children }) {
  const titleColor =
    variant === "overdue"
      ? "text-[#DC2828]"
      : "text-[#0F172A]";

  return (
    <div className="w-full border border-[#E5EAF0] rounded-xl bg-white px-[1.66vw] py-[2.66vh]">
      <div className="flex items-center gap-[0.83vw] mb-[1.77vh]">
        {icon}
        <span
          className={`font-semibold text-[1.25vw] leading-[3.11vh] ${titleColor}`}
          style={{ fontFamily: "Rethink Sans" }}
        >
          {title}
        </span>
      </div>

      <div className="space-y-[1.33vh]">{children}</div>
    </div>
  );
}

/* ================= PAYMENT ROW ================= */
function PaymentRow({ icon, name, date, amount, status, theme }) {
  const themeMap = {
    red: "bg-[#FFF5F5] border-[#FECACA] text-red-500",
    yellow: "bg-[#FFF9ED] border-[#FED7AA] text-orange-500",
    blue: "bg-white border-[#E5EAF0] text-gray-500",
  };

  return (
    <div
      className={`h-[9.55vh] rounded-xl border px-[1.66vw] flex items-center justify-between ${themeMap[theme]}`}
    >
      <div className="flex items-center gap-[1.11vw]">
        <div className="w-[2.77vw] h-[4.44vh] rounded-lg bg-white flex items-center justify-center">
          {icon}
        </div>

        <div className="flex flex-col">
          <span
            style={{
              fontFamily: "Rethink Sans",
              fontWeight: 500,
              fontSize: "1.11vw",
              lineHeight: "2.66vh",
              color: "rgba(15, 23, 41, 1)",
            }}
          >
            {name}
          </span>
          <span
            style={{
              fontFamily: "Rethink Sans",
              fontWeight: 400,
              fontSize: "0.97vw",
              lineHeight: "2.22vh",
              color: "rgba(130, 138, 150, 1)",
            }}
          >
            {date}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-[4.16vw]">
        <div className="text-right">
          <div className="font-semibold text-[#0F1729] text-[1.11vw]">{amount}</div>
          <div
            style={{
              fontFamily: "Rethink Sans",
              fontWeight: 500,
              fontSize: "0.83vw",
              lineHeight: "1.77vh",
              color:
                theme === "red"
                  ? "rgba(220, 40, 40, 1)"
                  : theme === "yellow"
                  ? "rgba(245, 159, 10, 1)"
                  : "rgba(130, 138, 150, 1)",
            }}
          >
            {status}
          </div>
        </div>

        <button className="h-[4.44vh] px-[1.11vw] rounded-lg bg-[#0EA5E9] hover:bg-[#38BDF8] transition-colors duration-200 text-white text-[0.97vw] font-medium">
          Pay Now
        </button>
      </div>
    </div>
  );
}

/* ================= SECTIONS ================= */
function OverdueSection() {
  return (
    <SectionWrapper title="Overdue" icon={<OverdueIcon />} variant="overdue">
      <PaymentRow icon={<AuthOIcon />} name="Auth0" date="Due Jan 28, 2026" amount="$450" status="6 days overdue" theme="red" />
    </SectionWrapper>
  );
}

function DueThisWeekSection() {
  return (
    <SectionWrapper title="Due This Week" icon={<DueThisWeekIcon />}>
      <PaymentRow icon={<GoDaddyLogo />} name="GoDaddy" date="Due Feb 3, 2026" amount="$890" status="Due today" theme="yellow" />
      <PaymentRow icon={<img src={bunnyLogo} alt="Bunny CDN" className="w-[1.66vw] h-[2.66vh]" />} name="Bunny CDN" date="Due Feb 5, 2026" amount="$195" status="2 days" theme="yellow" />
    </SectionWrapper>
  );
}

function UpcomingSection() {
  return (
    <SectionWrapper title="Upcoming" icon={<UpcomingIcon />}>
      <PaymentRow icon={<SlackIcon />} name="Slack" date="Due Feb 10, 2026" amount="$1,250" status="7 days" theme="blue" />
      <PaymentRow icon={<AWSIcon />} name="Amazon Web Services" date="Due Feb 15, 2026" amount="$4,920" status="12 days" theme="blue" />
    </SectionWrapper>
  );
}