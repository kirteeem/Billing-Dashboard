import {
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

export default function DashboardCards() {
  return (
  <div
  className="flex gap-[1.67vw]"
  style={{ height: "14.6vh" }}
>

      {/* FIRST CARD */}
      <Card
        title="Total Monthly Spend"
        value="$11,309"
        highlight
        compact
        width="28.1vw"
        icon={
          <svg
            viewBox="0 0 40 40"
            className="w-[4vh] h-[4vh]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="40" height="40" rx="12" fill="#E7F6FE" />
            <path
              d="M20 11.6667V28.3334"
              stroke="#0A76A9"
              strokeWidth="1.6667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M24.1667 14.1667H17.9167
                 C17.1431 14.1667 16.4013 14.474 15.8543 15.021
                 C15.3073 15.568 15 16.3099 15 17.0834
                 C15 17.857 15.3073 18.5988 15.8543 19.1458
                 C16.4013 19.6928 17.1431 20.0001 17.9167 20.0001
                 H22.0833
                 C22.8569 20.0001 23.5987 20.3074 24.1457 20.8544
                 C24.6927 21.4013 25 22.1432 25 22.9167
                 C25 23.6903 24.6927 24.4322 24.1457 24.9791
                 C23.5987 25.5261 22.8569 25.8334 22.0833 25.8334
                 H15"
              stroke="#0A76A9"
              strokeWidth="1.6667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        }
      />

      {/* SECOND CARD */}
      <Card
        title="Upcoming Payments"
        value="$7,705"
        shiftUp
        width="28.1vw"
        icon={
          <svg
            viewBox="0 0 40 40"
            className="w-[4vh] h-[4vh]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="40" height="40" rx="12" fill="#E7F6FE" />
            <path d="M16.667 11.6667V15.0001" stroke="#0A76A9" strokeWidth="1.6667" strokeLinecap="round" />
            <path d="M23.333 11.6667V15.0001" stroke="#0A76A9" strokeWidth="1.6667" strokeLinecap="round" />
            <path d="M25.8333 13.3333H14.1667C13.2462 13.3333 12.5 14.0794 12.5 14.9999V26.6666C12.5 27.5871 13.2462 28.3333 14.1667 28.3333H25.8333C26.7538 28.3333 27.5 27.5871 27.5 26.6666V14.9999C27.5 14.0794 26.7538 13.3333 25.8333 13.3333Z" stroke="#0A76A9" strokeWidth="1.6667" />
            <path d="M12.5 18.3333H27.5" stroke="#0A76A9" strokeWidth="1.6667" />
          </svg>
        }
      />

      {/* THIRD CARD */}
<Card
  title="Largest Cost Driver"
  width="28.1vw"
  value={
    <div className="flex flex-col">

      {/* TOP ROW */}
      <div className="flex items-center gap-[0.56vw]">
        {/* CLOUD ICON (FRONT) */}
        <svg
          viewBox="0 0 24 24"
          className="w-[1.39vw] h-[1.39vw] flex-shrink-0"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 18h10a4 4 0 0 0 0-8 6 6 0 0 0-11.5-1.5A4.5 4.5 0 0 0 7 18Z"
            fill="#F1F5F9"
            stroke="#CBD5E1"
            strokeWidth="1"
          />
        </svg>

        {/* AMAZON TEXT */}
        <span
          style={{
            fontFamily: "Rethink Sans, sans-serif",
            fontWeight: 700,
            fontSize: "1.39vw",
            lineHeight: "1.6vw",
            letterSpacing: "-0.04em",
            color: "rgb(15, 23, 41)",
            display: "flex",
            alignItems: "center",
          }}
        >
          Amazon Web Services
        </span>
      </div>

      {/* SUB TEXT (INSIDE SAME BLOCK) */}
      <span
        style={{
          marginTop: "0.6vh",
          fontFamily: "Rethink Sans, sans-serif",
          fontWeight: 500,
          fontSize: "0.9vw",
          lineHeight: "1.3vw",
          color: "#0099FF",
        }}
      >
        $4,850/mo
      </span>

    </div>
  }
  icon={
    /* BACK TREND ICON */
    <svg
      viewBox="0 0 40 40"
      className="w-[4vh] h-[4vh]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="12" fill="#E7F6FE" />
      <path
        d="M28.3337 15.8333L21.2503 22.9166L17.0837 18.7499L11.667 24.1666"
        stroke="#0A76A9"
        strokeWidth="1.6667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.333 15.8333H28.333V20.8333"
        stroke="#0A76A9"
        strokeWidth="1.6667"
        strokeLinecap="round"
      />
    </svg>
  }
/>




      {/* FOURTH CARD */}
     <Card
  title="Overdue / Action Required"
  value="1"
  danger
  narrow
  width="20.7vw"
  icon={
    <svg
      viewBox="0 0 40 40"
      className="w-[4vh] h-[4vh]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="12" fill="#E7F6FE" />
      <path
        d="M28.108 25.0001L21.4414 13.3334C21.296 13.0769 21.0852 12.8636 20.8305 12.7152C20.5757 12.5667 20.2862 12.4885 19.9914 12.4885C19.6965 12.4885 19.407 12.5667 19.1523 12.7152C18.8975 12.8636 18.6867 13.0769 18.5414 13.3334L11.8747 25.0001C11.7278 25.2546 11.6507 25.5434 11.6514 25.8372C11.652 26.131 11.7303 26.4195 11.8784 26.6733C12.0265 26.9271 12.239 27.1373 12.4944 27.2825C12.7499 27.4277 13.0392 27.5027 13.333 27.5001H26.6664C26.9588 27.4998 27.246 27.4226 27.4991 27.2762C27.7522 27.1298 27.9624 26.9193 28.1085 26.666C28.2545 26.4127 28.3314 26.1254 28.3313 25.833C28.3312 25.5406 28.2542 25.2533 28.108 25.0001Z"
        stroke="#0A76A9"
        strokeWidth="1.6667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 17.5V20.8333"
        stroke="#0A76A9"
        strokeWidth="1.6667"
        strokeLinecap="round"
      />
      <path
        d="M20 24.1667H20.0083"
        stroke="#0A76A9"
        strokeWidth="1.6667"
        strokeLinecap="round"
      />
    </svg>
  }
/>

    </div>
  );
}

/* -------------------------------- */
/* CARD COMPONENT                   */
/* -------------------------------- */

function Card({ title, value, sub, icon, highlight, danger, compact, shiftUp, narrow, width }) {
  return (
    <div
      className={`
        flex
        flex-col
        justify-between
        rounded-[0.75vw]
        border
        bg-white
        ${highlight ? "bg-gradient-to-r from-[rgb(222,243,253)] to-[rgb(245,253,255)]" : ""}
        ${danger ? "border-red-200" : "border-gray-200"}
      `}
     style={{
  height: compact ? "14.9vh" : "15.2vh",
  padding: compact ? "1.25vw" : "1.6vw",
  width: width || "auto",
}}

    >
      {/* TOP ROW */}
      <div className="flex items-start justify-between">
       <p
  style={{
    fontFamily: "Rethink Sans",
    fontWeight: 500,
   fontSize: "0.97vw",
lineHeight: "1.39vw",

    color: "rgba(130, 138, 150, 1)",
  }}
>
  {title}
</p>


        <div className="w-[4vh] h-[4vh] rounded-full bg-[#E6F4FF] flex items-center justify-center">
          {icon}
        </div>
      </div>

      {/* VALUE BLOCK */}
   <div className={`${compact ? "mt-[-0.6vh]" : ""} pb-[0.6vh]`}>


        <h2
          className={`text-[1.8vw] font-semibold text-gray-900 leading-tight ${
            shiftUp ? "mb-[3vh]" : ""
          }`}
        >
          {value}
        </h2>

        {/* SUB TEXT FOR NON-HIGHLIGHT CARDS (3rd CARD FIX) */}
        {sub && !highlight && (
         <p className="mt-[0.6vh] text-[0.9vw] font-medium text-[#0099FF] leading-tight">

            {sub}
          </p>
        )}

        {/* GROWTH INDICATOR (FIRST CARD ONLY) */}
        {highlight && (
          <div className="mt-[0.4vh] flex items-center gap-[0.4vw] text-[0.8vw]">
            <svg
              viewBox="0 0 24 24"
              className="w-[1vw] h-[1vw]"
              fill="none"
              stroke="rgb(34,197,94)"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 16 L9 10 L13 14 L21 6" />
              <path d="M21 6 V10" />
              <path d="M21 6 H17" />
            </svg>

            <span className="text-green-600 font-medium">3.1%</span>
            <span className="text-gray-500">vs last month</span>
          </div>
        )}
      </div>
    </div>
  );
}