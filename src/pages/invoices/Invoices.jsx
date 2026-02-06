import { Search, Filter, Download } from "lucide-react";

export const FilterIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.6666 2H1.33325L6.66659 8.30667V12.6667L9.33325 14V8.30667L14.6666 2Z"
      stroke="#0F1729"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export default function Invoices() {
  return (
 <div className="w-full h-full bg-[#F8FAFC]">






      {/* ================= HEADER ================= */}
    <div className="flex justify-between items-center">

          <div style={{ marginBottom: "3.2vh" }}>
        
        <h1
          style={{
            fontFamily: "Rethink Sans, sans-serif",
            fontWeight: 600,
            fontSize: "2.08vw",        // ≈ 30px
            lineHeight: "2.5vw",       // ≈ 36px
            letterSpacing: "-0.052vw", // ≈ -0.75px
            color: "rgba(15, 23, 41, 1)",
          }}
        >
          Invoices
        </h1>

        <p
          style={{
            marginTop: "0.6vh",
            fontFamily: "Rethink Sans, sans-serif",
            fontWeight: 400,
            fontSize: "1.11vw",        // ≈ 16px
            lineHeight: "1.67vw",      // ≈ 24px
            color: "rgba(130, 138, 150, 1)",
          }}
        >
         View and manage all your invoices
        </p>

        

      </div>

       <button
  className="
    flex items-center justify-center gap-[0.42vw]
    w-[6.09vw] h-[3.33vh]
    rounded-[0.5vw]
    bg-[#0EA5E9]
    text-white
    text-[0.75vw] font-medium
    transition-colors duration-150
    hover:bg-[#38BDF8]
  "
  style={{ fontFamily: "'Rethink Sans', sans-serif" }}
>
  <Download size={14} />
  Export All
</button>

      </div>
      
      

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-3 gap-[1.5vw] mb-[3vh]">
        <StatCard title="Total Paid" amount="$8,869" color="text-green-500" />
        <StatCard title="Pending" amount="$7,255" color="text-yellow-500" />
        <StatCard title="Overdue" amount="$450" color="text-red-500" />
      </div>


      {/* ================= SEARCH & FILTER ================= */}
       <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="flex items-center gap-2 px-3 h-[39px] border border-slate-200 rounded-lg bg-white flex-1 min-w-[280px] max-w-[448px]">
                <Search size={16} color="#828A96" />
                <input
                  type="text"
                  placeholder="Search invoices..."
                  className="w-full h-full text-sm outline-none border-none placeholder:text-[#828A96]"
                  style={{ fontFamily: "'Rethink Sans', sans-serif" }}
                />
              </div>

        <button
  className="
    flex items-center justify-center gap-2
    px-4 h-[38px]
    border border-slate-200
    rounded-lg
    bg-white
    transition-colors duration-150
    hover:bg-[#F1F5F9]
  "
>
  <FilterIcon />
  <span
    className="text-sm font-medium"
    style={{ fontFamily: "'Rethink Sans', sans-serif" }}
  >
    Filter
  </span>
</button>

      </div>

      {/* ================= STATUS TABS ================= */}
    {/* ================= STATUS TABS ================= */}
{/* ================= STATUS TABS ================= */}
{/* ================= STATUS TABS ================= */}
<div className="flex gap-[0.42vw] mb-[2vh]">
  {/* ALL (ACTIVE) */}
  <button
    className="
      w-[2.5vw] h-[3.15vh]
      flex items-center justify-center
      rounded-full
      text-[0.7vw] font-medium
      bg-[#0EA5E9] text-white
    "
    style={{ fontFamily: "'Rethink Sans', sans-serif" }}
  >
    All
  </button>

  {/* PAID */}
  <button
    className="
      w-[3.23vw] h-[3.15vh]
      flex items-center justify-center
      rounded-full
      border border-[#E2E8F0]
      text-[0.7vw] font-medium text-[#64748B]
      transition-all duration-200
      hover:border-[#CBD5E1]
      hover:text-[#0F172A]
      hover:shadow-[0_1px_2px_rgba(0,0,0,0.06)]
    "
    style={{ fontFamily: "'Rethink Sans', sans-serif" }}
  >
    Paid
  </button>

  {/* PENDING (hover look reference) */}
  <button
       className="
      w-[4.69vw] h-[3.15vh]
      flex items-center justify-center
      rounded-full
      border border-[#E2E8F0]
      text-[0.7vw] font-medium text-[#64748B]
      transition-all duration-200
      hover:border-[#CBD5E1]
      hover:text-[#0F172A]
      hover:shadow-[0_1px_2px_rgba(0,0,0,0.06)]
    "
    style={{ fontFamily: "'Rethink Sans', sans-serif" }}
  >
    Pending
  </button>

  {/* OVERDUE */}
  <button
    className="
      w-[4.69vw] h-[3.15vh]
      flex items-center justify-center
      rounded-full
      border border-[#E2E8F0]
      text-[0.7vw] font-medium text-[#64748B]
      transition-all duration-200
      hover:border-[#CBD5E1]
      hover:text-[#0F172A]
      hover:shadow-[0_1px_2px_rgba(0,0,0,0.06)]
    "
    style={{ fontFamily: "'Rethink Sans', sans-serif" }}
  >
    Overdue
  </button>
</div>




      {/* ================= TABLE ================= */}
      {/* ================= TABLE ================= */}
{/* ================= TABLE ================= */}
      {/* ================= TABLE ================= */}
      <div className="bg-white rounded-[0.6vw] border overflow-hidden w-[82.45vw]">

        {/* HEADER */}
        <div className="bg-[#FCFCFD] px-[0.83vw]">
          <div className="flex text-[#65758B] text-[0.62vw] uppercase font-medium">
            <div className="w-[10.85vw] h-[5.56vh] flex items-center">Invoice</div>
            <div className="w-[20.99vw] h-[5.56vh] flex items-center">Service</div>
            <div className="w-[11.25vw] h-[5.56vh] flex items-center">Amount</div>
            <div className="w-[14.43vw] h-[5.56vh] flex items-center">Due Date</div>
            <div className="w-[13.68vw] h-[5.56vh] flex items-center pl-[0.5vw]">Status</div>
            <div className="w-[11.26vw] h-[5.56vh] flex items-center justify-end pr-[2.7vw]">
              Actions
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-[#E5E7EB]" />

        {/* ================= 10 ROWS ================= */}
        {[
          ["INV-008", "Amazon Web Services", "$4,920", "Feb 15, 2026", "Pending"],
          ["INV-009", "Slack", "$1,250", "Feb 10, 2026", "Pending"],
          ["INV-007", "Auth0", "$450", "Jan 28, 2026", "Overdue"],
          ["INV-005", "Notion", "$480", "Jan 18, 2026", "Paid"],
          ["INV-001", "Amazon Web Services", "$4,850", "Jan 15, 2026", "Paid"],
          ["INV-002", "Amazon Web Services", "$4,850", "Jan 15, 2026", "Paid"],
          ["INV-003", "Amazon Web Services", "$4,850", "Jan 15, 2026", "Paid"],
          ["INV-004", "Amazon Web Services", "$4,850", "Jan 15, 2026", "Paid"],
          ["INV-005", "Amazon Web Services", "$4,850", "Jan 15, 2026", "Paid"],
          ["INV-006", "Amazon Web Services", "$4,850", "Jan 15, 2026", "Paid"],
        ].map((row, i) => (
          <TableRow
            key={i}
            invoice={row[0]}
            service={row[1]}
            amount={row[2]}
            date={row[3]}
            status={row[4]}
          />
        ))}
      </div>
    </div>
  );
}

/* ================= STAT CARD ================= */
const StatCard = ({ title, amount, color }) => (
  <div className="bg-white border rounded-[0.6vw] p-[1.5vw]">
    <p className="text-[0.7vw] text-[#64748B] mb-[0.5vh]">{title}</p>
    <h2 className={`text-[1.2vw] font-semibold ${color}`}>{amount}</h2>
  </div>
);

/* ================= TABLE ROW ================= */
const TableRow = ({ invoice, service, amount, date, status }) => {
  const statusMap = {
    Pending: {
      bg: "bg-[#FFF7E6]",
      text: "text-[#F59E0B]",
      dot: "bg-[#F59E0B]",
    },
    Overdue: {
      bg: "bg-[#FEECEC]",
      text: "text-[#EF4444]",
      dot: "bg-[#EF4444]",
    },
    Paid: {
      bg: "bg-[#ECFDF3]",
      text: "text-[#22C55E]",
      dot: "bg-[#22C55E]",
    },
  };

  return (
    <>
      <div className="hover:bg-[#F8FAFC] transition-colors">
        <div className="px-[0.83vw] flex items-center h-[5.56vh] text-[0.73vw]">
          <div className="w-[10.85vw]">{invoice}</div>
          <div className="w-[20.99vw]">{service}</div>
          <div className="w-[11.25vw] font-semibold">{amount}</div>
          <div className="w-[14.43vw] text-[#828A96]">{date}</div>

          <div className="w-[13.68vw] pl-[0.5vw]">
            <span className={`inline-flex items-center gap-[0.4vw] px-[0.9vw] py-[0.45vh] rounded-full ${statusMap[status].bg}`}>
              <span className={`w-[0.42vw] h-[0.42vw] rounded-full ${statusMap[status].dot}`} />
              <span className={`text-[0.7vw] font-medium ${statusMap[status].text}`}>
                {status}
              </span>
            </span>
          </div>

          <div className="w-[11.26vw] flex justify-end pr-[2.7vw] text-[#0EA5E9] gap-[1vw]">
            <button>View</button>
            <button className="flex items-center gap-1">
              Download <Download size={12} />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-[#E5E7EB]" />
    </>
  );
};