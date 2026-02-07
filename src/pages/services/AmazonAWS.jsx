import React from "react";
import { ArrowLeft, Search, Download } from "lucide-react";
import {AWSIcon, BackArrowIcon, OpenServiceIcon,InvoiceUserIcon} from "../../assets/icons/serviceicons/ServiceIcons"

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

// TableRow component
function TableRow({ invoice, amount, date, status, isMobile, isTablet }) {
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

  const getStatusDotColor = (status) => {
    switch (status) {
      case "Paid":
        return "bg-[#16A34A]";
      case "Pending":
        return "bg-[#D97706]";
      case "Overdue":
        return "bg-[#DC2626]";
      default:
        return "bg-gray-600";
    }
  };

  if (isMobile) {
    // Mobile card layout
    return (
      <div style={{
        padding: '4vw',
        borderBottom: '1px solid #E5E7EB',
        fontFamily: "'Rethink Sans', sans-serif",
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2vw' }}>
          <div>
            <span style={{ fontSize: '3vw', color: '#6B7280' }}>Invoice</span>
            <p style={{ fontSize: '4vw', fontWeight: 600, color: '#111827', marginTop: '1vw' }}>{invoice}</p>
          </div>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1.5vw',
            padding: '1.5vw 3vw',
            borderRadius: '9999px',
            fontSize: '2.8vw',
            fontWeight: 500,
            height: 'fit-content',
          }}
            className={getStatusStyles(status)}
          >
            <span style={{ 
              width: '1.5vw', 
              height: '1.5vw', 
              borderRadius: '50%',
            }}
              className={getStatusDotColor(status)}
            />
            {status}
          </span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3vw' }}>
          <div>
            <span style={{ fontSize: '3vw', color: '#6B7280' }}>Amount</span>
            <p style={{ fontSize: '4.5vw', fontWeight: 600, color: '#111827', marginTop: '1vw' }}>{amount}</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '3vw', color: '#6B7280' }}>Due Date</span>
            <p style={{ fontSize: '3.5vw', color: '#6B7280', marginTop: '1vw' }}>{date}</p>
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
    );
  }

  // Desktop and tablet layout
  return (
    <>
      <div style={{
        display: 'flex',
        padding: isTablet ? '0 3vw' : '0 0.83vw',
        alignItems: 'center',
        transition: 'background-color 0.2s',
        fontFamily: "'Rethink Sans', sans-serif",
      }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#F9FAFB'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
      >
       <div style={{ 
  width: isTablet ? '15%' : '10.85vw', 
  height: '5.56vh', 
  display: 'flex', 
  alignItems: 'center',

  fontFamily: "'Rethink Sans', sans-serif",
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 400,
  color: 'rgba(15, 23, 41, 1)',
}}>
  {invoice}
</div>

        <div style={{ width: isTablet ? '20%' : '20.99vw', height: '5.56vh' }}></div>
        <div style={{ 
  width: isTablet ? '15%' : '11.25vw',
  height: '5.56vh',
  display: 'flex',
  alignItems: 'center',

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
  height: '5.56vh',
  display: 'flex',
  alignItems: 'center',

  fontFamily: "'Rethink Sans', sans-serif",
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 400,
  color: 'rgba(130, 138, 150, 1)',
}}>
  {date}
</div>

        <div style={{ 
          width: isTablet ? '20%' : '13.68vw', 
          height: '5.56vh', 
          display: 'flex', 
          alignItems: 'center', 
          paddingLeft: '0.5vw' 
        }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: isTablet ? '1vw' : '0.41vw',
            padding: isTablet ? '0.8vh 1.5vw' : '0.44vh 0.83vw',
            borderRadius: '9999px',
            fontSize: isTablet ? '1.5vh' : '0.73vw',
            fontWeight: 500,
          }}
            className={getStatusStyles(status)}
          >
            <span style={{
              width: isTablet ? '1vw' : '0.41vw',
              height: isTablet ? '1vw' : '0.66vh',
              borderRadius: '50%',
            }}
              className={getStatusDotColor(status)}
            />
            {status}
          </span>
        </div>
        <div style={{ 
          width: isTablet ? '10%' : '11.26vw', 
          height: '5.56vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'flex-end', 
          gap: isTablet ? '2vw' : '1.2vw',
        }}>
          <button style={{
            fontSize: '14px',
            lineHeight: '20px',
            color: 'rgba(0,183,255,1)',
            fontWeight: 500,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: "'Rethink Sans', sans-serif",
          }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#2563EB'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0,183,255,1)'}
          >
            View
          </button>
           <button style={{
            fontSize: '14px',
            lineHeight: '20px',
            color: 'rgba(0,183,255,1)',
            fontWeight: 500,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontFamily: "'Rethink Sans', sans-serif",
          }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#2563EB'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(0,183,255,1)'}
          >
            Download
          </button>
        </div>
      </div>
      <div style={{ width: '100%', height: '1px', backgroundColor: '#E5E7EB' }} />
    </>
  );
}

export default function AwsBillingPage() {
  const { isMobile, isTablet } = useResponsive();

  const containerStyle = {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#F8FAFC',
    padding: isMobile || isTablet ? '0' : undefined,
  };

  const contentPadding = isMobile || isTablet ? '0 4vw' : '0';

  return (
    <div style={containerStyle}>
      
      {/* ================= HEADER ================= */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: isMobile ? '2vh' : '2.66vh',
        padding: contentPadding,
        flexWrap: isMobile ? 'wrap' : 'nowrap',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', flex: isMobile ? '1 1 100%' : 'auto' }}>
          
          {/* BACK BUTTON */}
          <button style={{
            width: isMobile ? '10vw' : isTablet ? '4vw' : '2.5vw',
            height: isMobile ? '10vw' : isTablet ? '4vw' : '4vh',
            borderRadius: '50%',
            border: '1px solid #E5E7EB',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: isMobile ? '3vw' : '0.83vw',
            background: 'white',
            cursor: 'pointer',
          }}>
            <BackArrowIcon />
          </button>

          {/* AWS ICON */}
          <div style={{
            width: isMobile ? '12vw' : isTablet ? '6vw' : '4.44vw',
            height: isMobile ? '12vw' : isTablet ? '6vw' : '7.11vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: isMobile ? '3vw' : '1.11vw',
          }}>
            <div style={{ transform: isMobile ? 'scale(1)' : 'scale(1.25)' }}>
              <AWSIcon />
            </div>
          </div>

          {/* TITLE */}
          <h1 style={{
            fontFamily: "Rethink Sans, sans-serif",
            fontWeight: 600,
            fontSize: isMobile ? '5vw' : isTablet ? '3.5vw' : '2.08vw',
            lineHeight: isMobile ? '6vw' : isTablet ? '4.5vw' : '2.5vw',
            letterSpacing: '-0.052vw',
            color: 'rgba(15, 23, 41, 1)',
          }}>
            Amazon Web Services
          </h1>
        </div>

        {/* ================= RIGHT BUTTON ================= */}
        {!isMobile && (
          <button style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  borderRadius: '8px',
  border: '1px solid #E5E7EB',
  backgroundColor: 'white',
  padding: '0 16px',
  height: '40px',

  fontFamily: "'Rethink Sans', sans-serif",
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 500,
  color: 'rgba(15, 23, 41, 1)',
  cursor: 'pointer',
}}>
  <OpenServiceIcon />
  Open Service
</button>

        )}
      </div>

      {/* ================= STATS CARDS ================= */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)',
        gap: isMobile ? '3vw' : '1.11vw',
        marginBottom: isMobile ? '3vh' : '2.66vh',
        padding: contentPadding,
      }}>
        {[
          { label: "Current Plan", value: "Enterprise" },
          { label: "Billing Cycle", value: "monthly" },
          { label: "Monthly Cost", value: "$4,850" },
          { label: "Next Billing", value: "Feb 15, 2026" },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              width: '100%',
              height: isMobile ? 'auto' : '11.66vh',
              backgroundColor: 'white',
              borderRadius: isMobile ? '3vw' : isTablet ? '2vw' : '0.83vw',
              border: '1px solid #E5E7EB',
              padding: isMobile ? '4vw' : isTablet ? '2.5vw 2vw' : '2.22vh 1.25vw',
            }}
          >
            <p style={{
              fontFamily: "Rethink Sans, sans-serif",
              fontWeight: 500,
              fontSize: isMobile ? '3.2vw' : isTablet ? '2vw' : '0.97vw',
              lineHeight: isMobile ? '4.5vw' : '2.22vh',
              color: 'rgba(101, 117, 139, 1)',
            }}>
              {item.label}
            </p>
            <p style={{
              marginTop: '0.44vh',
              fontFamily: "Rethink Sans, sans-serif",
              fontWeight: 600,
              fontSize: isMobile ? '4.5vw' : isTablet ? '2.8vw' : '1.25vw',
              lineHeight: isMobile ? '6vw' : '3.11vh',
              color: 'rgba(15, 23, 41, 1)',
            }}>
              {item.value}
            </p>
          </div>
        ))}

        {/* ================= STATUS CARD ================= */}
        <div style={{
          width: '100%',
          height: isMobile ? 'auto' : '11.66vh',
          backgroundColor: 'white',
          borderRadius: isMobile ? '3vw' : isTablet ? '2vw' : '0.83vw',
          border: '1px solid #E5E7EB',
          padding: isMobile ? '4vw' : isTablet ? '2vw' : '1.77vh 1.11vw',
        }}>
          <p style={{
            fontFamily: "Rethink Sans, sans-serif",
            fontWeight: 500,
            fontSize: isMobile ? '3.2vw' : isTablet ? '2vw' : '0.97vw',
            lineHeight: isMobile ? '4.5vw' : '2.22vh',
            color: 'rgba(101, 117, 139, 1)',
          }}>
            Status
          </p>
          <div style={{ marginTop: isMobile ? '2vw' : '0.88vh' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: isMobile ? '2vw' : '0.41vw',
              padding: isMobile ? '2vw 3.5vw' : isTablet ? '0.8vh 1.5vw' : '0.44vh 0.83vw',
              borderRadius: '9999px',
              backgroundColor: '#E7F8EE',
              color: '#16A34A',
              fontSize: isMobile ? '3.5vw' : isTablet ? '1.8vw' : '0.97vw',
              fontWeight: 500,
              fontFamily: "'Rethink Sans', sans-serif",
            }}>
              <span style={{
                width: isMobile ? '2vw' : '0.41vw',
                height: isMobile ? '2vw' : '0.66vh',
                backgroundColor: '#16A34A',
                borderRadius: '50%',
              }} />
              Active
            </span>
          </div>
        </div>
      </div>

      {/* ================= ALL INVOICES CARD ================= */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: isMobile ? '0' : isTablet ? '2vw' : '0.97vw',
        border: isMobile ? 'none' : '1px solid #E5E7EB',
        padding: isMobile ? '4vw' : isTablet ? '3vw' : '1.77vh 1.38vw',
        margin: isMobile || isTablet ? '0 1.5vw' : '0',
        width: isMobile || isTablet ? 'calc(100% - 3vw)' : 'auto',
      }}>

        {/* ================= HEADER ROW ================= */}
        <div style={{
          display: 'flex',
          alignItems: isMobile ? 'flex-start' : 'center',
          justifyContent: 'space-between',
          marginBottom: isMobile ? '3vh' : '1.77vh',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '3vw' : '0',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '3vw' : '0.69vw',
          }}>
            <div style={{
              width: isMobile ? '10vw' : isTablet ? '4vw' : '2.5vw',
              height: isMobile ? '10vw' : isTablet ? '4vw' : '4vh',
              borderRadius: isMobile ? '2.5vw' : '0.69vw',
              backgroundColor: '#EFF6FF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <InvoiceUserIcon/>
            </div>
            <div>
             <p style={{
  fontFamily: "'Rethink Sans', sans-serif",
  fontSize: '18px',
  lineHeight: '28px',
  fontWeight: 600,
  letterSpacing: '-0.45px',
  color: 'rgba(15, 23, 41, 1)',
}}>
  All Invoices
</p>

             <p style={{
  fontFamily: "'Rethink Sans', sans-serif",
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 400,
  color: 'rgba(130, 138, 150, 1)',
}}>
  Complete billing history for Amazon Web Services
</p>

            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: isMobile ? '2vw' : '0.83vw',
            width: isMobile ? '100%' : 'auto',
            marginTop: isMobile ? '2vh' : '0',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.55vw',
              padding: isMobile ? '0 3vw' : '0 0.83vw',
              height: isMobile ? '10vw' : isTablet ? '5vh' : '4.33vh',
              border: '1px solid rgb(226, 232, 240)',
              borderRadius: isMobile ? '2.5vw' : '0.5rem',
              backgroundColor: 'white',
              flex: 1,
              minWidth: isMobile ? '100%' : '19.44vw',
              maxWidth: isMobile ? '100%' : '31.11vw',
            }}>
              <Search size={isMobile ? 18 : 16} color="#828A96" />
              <input
                type="text"
                placeholder="Search invoices..."
                style={{
                  width: '100%',
                  height: '100%',
                  fontSize: isMobile ? '3.5vw' : isTablet ? '2vw' : '0.97vw',
                  outline: 'none',
                  border: 'none',
                  fontFamily: "'Rethink Sans', sans-serif",
                }}
              />
            </div>

            {!isMobile && (
              <button style={{
  height: '40px',
  padding: '0 16px',
  borderRadius: '8px',
  border: '1px solid #E5E7EB',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  background: 'white',
  cursor: 'pointer',

  fontFamily: "'Rethink Sans', sans-serif",
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 500,
  color: 'rgba(15, 23, 41, 1)',
}}>
  Export All
  <Download size={14} />
</button>

            )}
          </div>
        </div>

        {/* ================= TABLE ================= */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: isMobile ? '0' : '0.83vw',
          border: '1px solid #E5E7EB',
          overflow: isMobile ? 'visible' : 'hidden',
          width: '100%',
        }}>

          {/* TABLE HEADER - Hide on mobile */}
          {!isMobile && (
            <>
              <div style={{ backgroundColor: '#FCFCFD', padding: isTablet ? '0 3vw' : '0 0.83vw' }}>
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

                  <div style={{ width: isTablet ? '15%' : '10.85vw', height: '5.56vh', display: 'flex', alignItems: 'center' }}>Invoice</div>
                  <div style={{ width: isTablet ? '20%' : '20.99vw', height: '5.56vh' }}></div>
                  <div style={{ width: isTablet ? '15%' : '11.25vw', height: '5.56vh', display: 'flex', alignItems: 'center' }}>Amount</div>
                  <div style={{ width: isTablet ? '20%' : '14.43vw', height: '5.56vh', display: 'flex', alignItems: 'center' }}>Due Date</div>
                  <div style={{ width: isTablet ? '20%' : '13.68vw', height: '5.56vh', display: 'flex', alignItems: 'center', paddingLeft: '0.5vw' }}>Status</div>
                  <div style={{ width: isTablet ? '10%' : '11.26vw', height: '5.56vh', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    Actions
                  </div>
                </div>
              </div>
              <div style={{ width: '100%', height: '1px', backgroundColor: '#E5E7EB' }} />
            </>
          )}

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
              isMobile={isMobile}
              isTablet={isTablet}
            />
          ))}
        </div>
      </div>
    </div>
  );
}