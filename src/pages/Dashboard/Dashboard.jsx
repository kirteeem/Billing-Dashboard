import DashboardCards from "./DashboardCards";
import DashboardTable from "./DashboardTable";

export default function Dashboard() {
  return (
    <section className="w-full flex flex-col">

      {/* ===== DASHBOARD HEADER ===== */}
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
          Dashboard
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
          Your subscription and billing overview
        </p>

      </div>

      {/* ===== DASHBOARD CARDS ===== */}
      <DashboardCards />
      <DashboardTable/>

    </section>
  );
}
