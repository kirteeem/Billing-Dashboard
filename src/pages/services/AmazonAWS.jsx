import { ArrowLeft, Search, Download } from "lucide-react";
import {AWSIcon, BackArrowIcon, OpenServiceIcon,InvoiceUserIcon} from "../../assets/icons/serviceicons/ServiceIcons"

// TableRow component
function TableRow({ invoice, amount, date, status }) {
  const getStatusStyles = (status) => {
    switch (status) {
      case "Paid":
        return "bg-[#E7F8EE] text-[#16A34A]";
      case "Pending":
        return "bg-[#FEF3C7] text-[#D97706]";
      case "Overdue":
        return "bg-[#FEE2E2] text-[#DC2626]";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <>
      <div className="flex px-[0.83vw] items-center hover:bg-[#F9FAFB] transition-colors">
        <div className="w-[10.85vw] h-[5.56vh] flex items-center text-[0.73vw] font-medium text-[#111827]">
          {invoice}
        </div>
        <div className="w-[20.99vw] h-[5.56vh]"></div>
        <div className="w-[11.25vw] h-[5.56vh] flex items-center text-[0.73vw] font-semibold text-[#111827]">
          {amount}
        </div>
        <div className="w-[14.43vw] h-[5.56vh] flex items-center text-[0.73vw] text-[#6B7280]">
          {date}
        </div>
        <div className="w-[13.68vw] h-[5.56vh] flex items-center pl-[0.5vw]">
          <span className={`inline-flex items-center gap-[0.41vw] px-[0.83vw] py-[0.44vh] rounded-full text-[0.73vw] font-medium ${getStatusStyles(status)}`}>
            <span className={`w-[0.41vw] h-[0.66vh] rounded-full ${status === 'Paid' ? 'bg-[#16A34A]' : status === 'Pending' ? 'bg-[#D97706]' : 'bg-[#DC2626]'}`} />
            {status}
          </span>
        </div>
        <div className="w-[11.26vw] h-[5.56vh] flex items-center justify-end gap-[1.2vw] pr-0">
          <button className="text-[0.73vw] text-[rgba(0,183,255,1)] hover:text-[#2563EB] font-medium">
            View
          </button>
          <button className="flex items-center gap-[0.25vw] text-[0.73vw] text-[rgba(0,183,255,1)] hover:text-[#2563EB] font-medium">
            Download
            <Download size={12} />
          </button>
        </div>
      </div>
      <div className="w-full h-px bg-[#E5E7EB]" />
    </>
  );
}

export default function AwsBillingPage() {
  return (
    <div className="w-full min-h-screen bg-[#F8FAFC]">
      
      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between mb-[2.66vh]">
        <div className="flex items-center">
          
          {/* BACK BUTTON */}
          <button className="w-[2.5vw] h-[4vh] rounded-full border border-[#E5E7EB] flex items-center justify-center mr-[0.83vw]">
            <BackArrowIcon />
          </button>

          {/* AWS ICON */}
          <div className="w-[4.44vw] h-[7.11vh] flex items-center justify-center mr-[1.11vw]">
            <div className="scale-125">
              <AWSIcon />
            </div>
          </div>

          {/* TITLE */}
          <h1
            style={{
              fontFamily: "Rethink Sans, sans-serif",
              fontWeight: 600,
              fontSize: "2.08vw",
              lineHeight: "2.5vw",
              letterSpacing: "-0.052vw",
              color: "rgba(15, 23, 41, 1)",
            }}
          >
            Amazon Web Services
          </h1>
        </div>

        {/* ================= RIGHT BUTTON ================= */}
        <button className="w-[10.07vw] h-[4.22vh] flex items-center justify-center gap-[0.55vw]
                           rounded-[0.69vw] border border-[#E5E7EB]
                           text-[0.97vw] font-medium text-[#0F1729]
                           bg-white transition
                           hover:bg-[#F8FAFC] hover:border-[#CBD5E1]">
          <OpenServiceIcon />
          Open Service
        </button>
      </div>

      {/* ================= STATS CARDS ================= */}
      <div className="flex gap-[1.11vw] mb-[2.66vh]">

        {[
          { label: "Current Plan", value: "Enterprise" },
          { label: "Billing Cycle", value: "monthly" },
          { label: "Monthly Cost", value: "$4,850" },
          { label: "Next Billing", value: "Feb 15, 2026" },
        ].map((item, i) => (
          <div
            key={i}
            className="w-[21.11vw] h-[11.66vh] bg-white rounded-[0.83vw]
                       border border-[#E5E7EB]
                       px-[1.25vw] pt-[2.22vh]"
          >
            <p
              style={{
                fontFamily: "Rethink Sans, sans-serif",
                fontWeight: 500,
                fontSize: "0.97vw",
                lineHeight: "2.22vh",
                color: "rgba(101, 117, 139, 1)",
              }}
            >
              {item.label}
            </p>
            <p
              className="mt-[0.44vh]"
              style={{
                fontFamily: "Rethink Sans, sans-serif",
                fontWeight: 600,
                fontSize: "1.25vw",
                lineHeight: "3.11vh",
                color: "rgba(15, 23, 41, 1)",
              }}
            >
              {item.value}
            </p>
          </div>
        ))}

        {/* ================= STATUS CARD ================= */}
        <div
          className="w-[21.11vw] h-[11.66vh] bg-white rounded-[0.83vw]
                     border border-[#E5E7EB]
                     px-[1.11vw] pt-[1.77vh]"
        >
          <p
            style={{
              fontFamily: "Rethink Sans, sans-serif",
              fontWeight: 500,
              fontSize: "0.97vw",
              lineHeight: "2.22vh",
              color: "rgba(101, 117, 139, 1)",
            }}
          >
            Status
          </p>
          <div className="mt-[0.88vh]">
            <span className="inline-flex items-center gap-[0.41vw]
                             px-[0.83vw] py-[0.44vh]
                             rounded-full bg-[#E7F8EE]
                             text-[#16A34A]
                             text-[0.97vw] font-medium">
              <span className="w-[0.41vw] h-[0.66vh] bg-[#16A34A] rounded-full" />
              Active
            </span>
          </div>
        </div>
      </div>

      {/* ================= ALL INVOICES CARD ================= */}
      <div className="bg-white rounded-[0.97vw] border border-[#E5E7EB] px-[1.38vw] py-[1.77vh]">

        {/* ================= HEADER ROW ================= */}
        <div className="flex items-center justify-between mb-[1.77vh]">
          <div className="flex items-center gap-[0.69vw]">
            <div className="w-[2.5vw] h-[4vh] rounded-[0.69vw] bg-[#EFF6FF] flex items-center justify-center">
              <InvoiceUserIcon/>
            </div>
            <div>
              <p className="text-[1.04vw] font-semibold text-[#111827]">
                All Invoices
              </p>
              <p className="text-[0.83vw] text-[#6B7280]">
                Complete billing history for Amazon Web Services
              </p>
            </div>
          </div>

          <div className="flex items-center gap-[0.83vw]">
            <div className="flex items-center gap-[0.55vw] px-[0.83vw] h-[4.33vh] border border-slate-200 rounded-lg bg-white min-w-[19.44vw] max-w-[31.11vw]">
              <Search size={16} color="#828A96" />
              <input
                type="text"
                placeholder="Search subscriptions..."
                className="w-full h-full text-[0.97vw] outline-none border-none placeholder:text-[#828A96]"
                style={{ fontFamily: "'Rethink Sans', sans-serif" }}
              />
            </div>

            <button className="h-[4vh] px-[0.97vw] rounded-[0.55vw] border border-[#E5E7EB] text-[0.9vw] flex items-center gap-[0.41vw]">
              Export All <Download size={14} />
            </button>
          </div>
        </div>

        {/* ================= TABLE ================= */}
        <div className="bg-white rounded-[0.83vw] border border-[#E5E7EB] overflow-hidden w-full">

          {/* TABLE HEADER */}
          <div className="bg-[#FCFCFD] px-[0.83vw]">
            <div className="flex text-[#65758B] text-[0.62vw] uppercase font-medium">
              <div className="w-[10.85vw] h-[5.56vh] flex items-center">Invoice</div>
              <div className="w-[20.99vw] h-[5.56vh]"></div>
              <div className="w-[11.25vw] h-[5.56vh] flex items-center">Amount</div>
              <div className="w-[14.43vw] h-[5.56vh] flex items-center">Due Date</div>
              <div className="w-[13.68vw] h-[5.56vh] flex items-center pl-[0.5vw]">Status</div>
              <div className="w-[11.26vw] h-[5.56vh] flex items-center justify-end pr-0">
                Actions
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-[#E5E7EB]" />

          {/* ================= ROWS ================= */}
          {[
            ["INV-009", "$4,920", "Feb 15, 2026", "Pending"],
            ["INV-008", "$4,920", "Feb 15, 2026", "Pending"],
            ["INV-009", "$4,850", "Feb 10, 2026", "Pending"],
            ["INV-007", "$4,850", "Jan 28, 2026", "Paid"],
            ["INV-006", "$4,850", "Jan 18, 2026", "Paid"],
            ["INV-005", "$4,850", "Jan 15, 2026", "Paid"],
            ["INV-004", "$4,850", "Dec 15, 2025", "Paid"],
            ["INV-003", "$4,850", "Nov 15, 2025", "Paid"],
            ["INV-002", "$4,850", "Oct 15, 2025", "Paid"],
            ["INV-001", "$4,850", "Sep 15, 2025", "Paid"],
          ].map((row, i) => (
            <TableRow
              key={i}
              invoice={row[0]}
              amount={row[1]}
              date={row[2]}
              status={row[3]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}