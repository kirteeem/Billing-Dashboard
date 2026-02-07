import DashboardCards from "./DashboardCards";
import DashboardTable from "./DashboardTable";

export default function Dashboard() {
  return (
    <section className="w-full flex flex-col px-4 md:px-0 mt-12 md:mt-0">


      {/* ===== DASHBOARD HEADER ===== */}
      <div className="mb-4 md:mb-[3.2vh]">
        
        <h1
          className="text-2xl md:text-[2.08vw]"
          style={{
            fontFamily: "Rethink Sans, sans-serif",
            fontWeight: 600,
            // Desktop values (md:)
            // fontSize: "2.08vw",        ≈ 30px
            lineHeight: "1.2",            // Mobile fallback
            letterSpacing: "-0.02em",      // Mobile fallback
            color: "rgba(15, 23, 41, 1)",
          }}
          // Note: Tailwind "md:text-[2.08vw]" ensures your desktop look is preserved
        >
          Dashboard
        </h1>

        <p
          className="text-sm md:text-[1.11vw] mt-1 md:mt-[0.6vh]"
          style={{
            fontFamily: "Rethink Sans, sans-serif",
            fontWeight: 400,
            // Desktop values (md:)
            // fontSize: "1.11vw",        ≈ 16px
            lineHeight: "1.5",            // Mobile fallback
            color: "rgba(130, 138, 150, 1)",
          }}
        >
          Your subscription and billing overview
        </p>

      </div>

      {/* ===== DASHBOARD CARDS & TABLE ===== */}
      <div className="flex flex-col gap-6 w-full">
        <DashboardCards />
        
        {/* Container for the table to allow horizontal scrolling on tiny phones if needed */}
        <div className="w-full overflow-x-auto pb-4">
            <DashboardTable/>
        </div>
      </div>

    </section>
  );
}