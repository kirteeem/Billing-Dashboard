import React from "react";
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

/* ================= RESPONSIVE HOOK ================= */
const useResponsive = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [isTablet, setIsTablet] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isMobile, isTablet };
};

export default function Invoices() {
  const { isMobile, isTablet } = useResponsive();

 const containerStyle = {
  width: '100%',
  minHeight: '100vh',
  backgroundColor: '#F8FAFC',
  padding: isMobile || isTablet ? '0' : undefined,
  marginTop: isMobile ? '44px' : '0',
};

  const contentPadding = isMobile || isTablet ? '0 4vw' : '0';

  return (
    <div style={containerStyle}>
      {/* ================= HEADER ================= */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: isMobile ? 'flex-start' : 'center',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '2vh' : '0',
        padding: contentPadding,
      }}>
        <div style={{ marginBottom: isMobile ? '0' : isTablet ? '2vh' : '3.2vh' }}>
          <h1
            style={{
              fontFamily: "Rethink Sans, sans-serif",
              fontWeight: 600,
              fontSize: isMobile ? '26px' : isTablet ? '28px' : '2.08vw',
              lineHeight: isMobile ? '32px' : isTablet ? '36px' : '2.5vw',
              letterSpacing: isMobile ? '-0.1vw' : '-0.052vw',
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
              fontSize: isMobile ? '16px' : isTablet ? '16px' : '1.11vw',
              lineHeight: isMobile ? '22px' : isTablet ? '22px' : '1.67vw',
              color: "rgba(130, 138, 150, 1)",
            }}
          >
            View and manage all your invoices
          </p>
        </div>

       <button
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    width: isMobile ? '100%' : 'auto',
    height: '40px',
    padding: '0 16px',
    borderRadius: '8px',
    backgroundColor: '#0EA5E9',
    fontFamily: "'Rethink Sans', sans-serif",
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 500,
    color: '#FFFFFF',
    border: 'none',
    cursor: 'pointer',
  }}
>
  <Download size={16} />
  Export All
</button>

      </div>

      {/* ================= STATS ================= */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
        gap: isMobile ? '3vw' : isTablet ? '16px' : '1.5vw',
        marginBottom: isMobile ? '3vh' : '3vh',
        padding: contentPadding,
        marginTop: isMobile ? '3vh' : isTablet ? '2vh' : '0',
      }}>
        <StatCard title="Total Paid" amount="$8,869" color="text-green-500" isMobile={isMobile} isTablet={isTablet} />
        <StatCard title="Pending" amount="$7,255" color="text-yellow-500" isMobile={isMobile} isTablet={isTablet} />
        <StatCard title="Overdue" amount="$450" color="text-red-500" isMobile={isMobile} isTablet={isTablet} />
      </div>

      {/* ================= SEARCH & FILTER ================= */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: isMobile ? '2vw' : '0.75rem',
        marginBottom: '1.5rem',
        padding: contentPadding,
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: isMobile ? '0 3vw' : '0 0.75rem',
          height: isMobile ? '10vw' : '39px',
          border: '1px solid rgb(226, 232, 240)',
          borderRadius: isMobile ? '2.5vw' : '0.5rem',
          backgroundColor: 'white',
          flex: 1,
          minWidth: isMobile ? '100%' : '280px',
          maxWidth: isMobile ? '100%' : '448px',
        }}>
          <Search size={isMobile ? 18 : 16} color="#828A96" />
          <input
            type="text"
            placeholder="Search invoices..."
            style={{
              width: '100%',
              height: '100%',
              fontSize: isMobile ? '3.5vw' : '0.875rem',
              outline: 'none',
              border: 'none',
              fontFamily: "'Rethink Sans', sans-serif",
            }}
          />
        </div>

        {!isMobile && (
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0 1rem',
              height: '38px',
              border: '1px solid rgb(226, 232, 240)',
              borderRadius: '0.5rem',
              backgroundColor: 'white',
              cursor: 'pointer',
              transition: 'background-color 0.15s',
              fontFamily: "'Rethink Sans', sans-serif",
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F1F5F9'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
          >
            <FilterIcon />
            <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>
              Filter
            </span>
          </button>
        )}
      </div>

      {/* ================= STATUS TABS ================= */}
      <div style={{
        display: 'flex',
        gap: isMobile ? '2vw' : isTablet ? '8px' : '0.42vw',
        marginBottom: '2vh',
        padding: contentPadding,
        overflowX: isMobile ? 'auto' : 'visible',
        WebkitOverflowScrolling: 'touch',
      }}>
        <TabButton active isMobile={isMobile} isTablet={isTablet}>All</TabButton>
        <TabButton isMobile={isMobile} isTablet={isTablet}>Paid</TabButton>
        <TabButton isMobile={isMobile} isTablet={isTablet}>Pending</TabButton>
        <TabButton isMobile={isMobile} isTablet={isTablet}>Overdue</TabButton>
      </div>

      {/* ================= TABLE ================= */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: isMobile ? '0' : isTablet ? '12px' : '0.6vw',
        border: isMobile ? 'none' : '1px solid #E5E7EB',
        overflow: 'hidden',
        width: isMobile || isTablet ? 'calc(100% - 8vw)' : '100%',
        margin: isMobile || isTablet ? '0 4vw' : '0',
      }}>
        {/* HEADER - Hide on mobile */}
        {!isMobile && (
          <>
            <div style={{ backgroundColor: '#FCFCFD', padding: isTablet ? '0 20px' : '0 0.83vw' }}>
             <div style={{ 
  display: 'flex',
  fontFamily: "'Rethink Sans', sans-serif",
  fontWeight: 500,
  fontSize: '12px',
  lineHeight: '16px',
  letterSpacing: '0.6px',
  textTransform: 'uppercase',
  color: 'rgba(101,117,139,1)',
}}>

                <div style={{ width: isTablet ? '15%' : '10.85vw', height: isTablet ? '48px' : '5.56vh', display: 'flex', alignItems: 'center' }}>Invoice</div>
                <div style={{ width: isTablet ? '25%' : '20.99vw', height: isTablet ? '48px' : '5.56vh', display: 'flex', alignItems: 'center' }}>Service</div>
                <div style={{ width: isTablet ? '15%' : '11.25vw', height: isTablet ? '48px' : '5.56vh', display: 'flex', alignItems: 'center' }}>Amount</div>
                <div style={{ width: isTablet ? '20%' : '14.43vw', height: isTablet ? '48px' : '5.56vh', display: 'flex', alignItems: 'center' }}>Due Date</div>
                <div style={{ width: isTablet ? '15%' : '13.68vw', height: isTablet ? '48px' : '5.56vh', display: 'flex', alignItems: 'center', paddingLeft: isTablet ? '8px' : '0.5vw' }}>Status</div>
                <div style={{ width: isTablet ? '10%' : '11.26vw', height: isTablet ? '48px' : '5.56vh', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>Actions</div>
              </div>
            </div>
            <div style={{ width: '100%', height: '1px', backgroundColor: '#E5E7EB' }} />
          </>
        )}

        {/* ================= ROWS ================= */}
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
            isMobile={isMobile}
            isTablet={isTablet}
          />
        ))}
      </div>
    </div>
  );
}

/* ================= STAT CARD ================= */
const StatCard = ({ title, amount, color, isMobile, isTablet }) => (
  <div style={{
    backgroundColor: 'white',
    border: '1px solid #E5E7EB',
    borderRadius: isMobile ? '3vw' : isTablet ? '12px' : '0.6vw',
    padding: isMobile ? '4vw' : isTablet ? '20px' : '1.5vw',
    fontFamily: "'Rethink Sans', sans-serif",
  }}>
    {/* TITLE */}
    <p style={{ 
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: 500,
      color: 'rgba(101,117,139,1)',
      marginBottom: '4px'
    }}>
      {title}
    </p>

    {/* AMOUNT */}
    <h2 style={{
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 700,
      color:
        color === 'text-green-500'
          ? 'rgba(33,196,93,1)'
          : color === 'text-yellow-500'
          ? '#F59E0B'
          : '#EF4444',
    }}>
      {amount}
    </h2>
  </div>
);

/* ================= TAB BUTTON ================= */
const TabButton = ({ active, children, isMobile, isTablet }) => {
  const baseStyle = {
    padding: isMobile ? '2vw 4vw' : isTablet ? '8px 16px' : '0',
    height: isMobile ? '8vw' : isTablet ? '32px' : '3.15vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '9999px',
    fontSize: isMobile ? '3vw' : isTablet ? '14px' : '0.7vw',
    fontWeight: 500,
    fontFamily: "'Rethink Sans', sans-serif",
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
    whiteSpace: 'nowrap',
    minWidth: isMobile ? 'auto' : isTablet ? 'auto' : active ? '2.5vw' : children === 'Paid' ? '3.23vw' : '4.69vw',
  };

  if (active) {
    return (
      <button style={{
        ...baseStyle,
        backgroundColor: '#0EA5E9',
        color: 'white',
      }}>
        {children}
      </button>
    );
  }

  return (
    <button
      style={{
        ...baseStyle,
        border: '1px solid #E2E8F0',
        backgroundColor: 'white',
        color: '#64748B',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#CBD5E1';
        e.currentTarget.style.color = '#0F172A';
        e.currentTarget.style.boxShadow = '0 1px 2px rgba(0,0,0,0.06)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#E2E8F0';
        e.currentTarget.style.color = '#64748B';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {children}
    </button>
  );
};

/* ================= TABLE ROW ================= */
const TableRow = ({ invoice, service, amount, date, status, isMobile, isTablet }) => {
  const statusMap = {
    Pending: {
      bg: "#FFF7E6",
      text: "#F59E0B",
      dot: "#F59E0B",
    },
    Overdue: {
      bg: "#FEECEC",
      text: "#EF4444",
      dot: "#EF4444",
    },
    Paid: {
      bg: "#ECFDF3",
      text: "#22C55E",
      dot: "#22C55E",
    },
  };

  if (isMobile) {
    // Mobile card layout
    return (
      <>
        <div style={{
          padding: '4vw',
          borderBottom: '1px solid #E5E7EB',
          fontFamily: "'Rethink Sans', sans-serif",
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2vw' }}>
            <div>
              <span style={{ fontSize: '3vw', color: '#64748B' }}>Invoice</span>
              <p style={{ fontSize: '4vw', fontWeight: 600, color: '#0F172A', marginTop: '1vw' }}>{invoice}</p>
            </div>
<span
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "5px",
    height: "24px",
    padding: "0 10px",
    borderRadius: "9999px",
    backgroundColor: statusMap[status].bg,
  }}
>
  <span
    style={{
      width: "6px",
      height: "6px",
      borderRadius: "50%",
      backgroundColor: statusMap[status].dot,
      flexShrink: 0,
    }}
  />

  <span
    style={{
      fontFamily: "'Rethink Sans', sans-serif",
      fontSize: "12px",
      fontWeight: 600,
      color: statusMap[status].text,
      lineHeight: "16px",
      whiteSpace: "nowrap",
    }}
  >
    {status}
  </span>
</span>


          </div>

          <div style={{ marginBottom: '3vw' }}>
            <span style={{ fontSize: '3vw', color: '#64748B' }}>Service</span>
            <p style={{ fontSize: '3.8vw', fontWeight: 500, color: '#0F172A', marginTop: '1vw' }}>{service}</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3vw' }}>
            <div>
              <span style={{ fontSize: '3vw', color: '#64748B' }}>Amount</span>
              <p style={{ fontSize: '4.5vw', fontWeight: 600, color: '#0F172A', marginTop: '1vw' }}>{amount}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '3vw', color: '#64748B' }}>Due Date</span>
              <p style={{ fontSize: '3.5vw', color: '#828A96', marginTop: '1vw' }}>{date}</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '3vw', marginTop: '3vw' }}>
            <button style={{
              flex: 1,
              padding: '3vw',
              fontSize: '3.5vw',
              fontWeight: 500,
              color: '#0EA5E9',
              backgroundColor: '#F0F9FF',
              border: '1px solid #BAE6FD',
              borderRadius: '2vw',
              cursor: 'pointer',
              fontFamily: "'Rethink Sans', sans-serif",
            }}>
              View
            </button>
            <button style={{
              flex: 1,
              padding: '3vw',
              fontSize: '3.5vw',
              fontWeight: 500,
              color: '#0EA5E9',
              backgroundColor: '#F0F9FF',
              border: '1px solid #BAE6FD',
              borderRadius: '2vw',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.5vw',
              fontFamily: "'Rethink Sans', sans-serif",
            }}>
              Download
              <Download size={14} />
            </button>
          </div>
        </div>
      </>
    );
  }

  // Desktop and tablet layout
  return (
    <>
      <div style={{
        transition: 'background-color 0.2s',
        fontFamily: "'Rethink Sans', sans-serif",
      }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F8FAFC'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
      >
        <div style={{
          padding: isTablet ? '0 20px' : '0 0.83vw',
          display: 'flex',
          alignItems: 'center',
          height: isTablet ? '56px' : '5.56vh',
          fontSize: isTablet ? '14px' : '0.73vw',
        }}>
          <div style={{
  width: isTablet ? '15%' : '10.85vw',
  fontFamily: "'Rethink Sans', sans-serif",
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 400,
  color: 'rgba(15, 23, 41, 1)',
}}>
  {invoice}
</div>

<div style={{
  width: isTablet ? '25%' : '20.99vw',
  fontFamily: "'Rethink Sans', sans-serif",
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 400,
  color: 'rgba(15, 23, 41, 1)',
}}>
  {service}
</div>

         <div style={{
  width: isTablet ? '15%' : '11.25vw',
  fontFamily: "'Rethink Sans', sans-serif",
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 600,
  color: 'rgba(15, 23, 41, 1)',
}}>
  {amount}
</div>

        <div style={{
  width: isTablet ? '20%' : '14.43vw',
  fontFamily: "'Rethink Sans', sans-serif",
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 400,
  color: 'rgba(130, 138, 150, 1)',
}}>
  {date}
</div>


          <div style={{ width: isTablet ? '15%' : '13.68vw', paddingLeft: isTablet ? '8px' : '0.5vw' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: isTablet ? '6px' : '0.4vw',
              padding: isTablet ? '4px 12px' : '0.45vh 0.9vw',
              borderRadius: '9999px',
              backgroundColor: statusMap[status].bg,
            }}>
              <span style={{
                width: isTablet ? '6px' : '0.42vw',
                height: isTablet ? '6px' : '0.42vw',
                borderRadius: '50%',
                backgroundColor: statusMap[status].dot,
              }} />
              <span style={{
                fontSize: isTablet ? '12px' : '0.7vw',
                fontWeight: 600,
                color: statusMap[status].text,
              }}>
                {status}
              </span>
            </span>
          </div>

          <div style={{
            width: isTablet ? '10%' : '11.26vw',
            height: isTablet ? '56px' : '5.56vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: isTablet ? '16px' : '1.2vw',
          }}>
          <button style={{
  fontFamily: "'Rethink Sans', sans-serif",
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 500,
  color: 'rgba(0,183,255,1)',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
}}
onMouseEnter={(e) => e.currentTarget.style.color = '#2563EB'}
onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0,183,255,1)'}
>
  View
</button>


           <button style={{
  fontFamily: "'Rethink Sans', sans-serif",
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 500,
  color: 'rgba(0,183,255,1)',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
}}
onMouseEnter={(e) => e.currentTarget.style.color = '#2563EB'}
onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0,183,255,1)'}
>
  Download
</button>

          </div>
        </div>
      </div>

      <div style={{ width: '100%', height: '1px', backgroundColor: '#E5E7EB' }} />
    </>
  );
};