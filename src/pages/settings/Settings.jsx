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

/* ================= PAGE ================= */

export default function Settings() {
  const { isMobile, isTablet } = useResponsive();

 const containerStyle = {
  width: '100%',
  backgroundColor: '#F8FAFC',
  padding: isMobile || isTablet ? '0' : '0.22vh 0',
  fontFamily: "'Rethink Sans', sans-serif",
  marginTop: isMobile ? '44px' : '0',   // ⭐ push below navbar
};


  const contentPadding = isMobile || isTablet ? '0 1.5vw' : '0';

  return (
    <div style={containerStyle}>
      {/* ================= PAGE HEADER ================= */}
      <div style={{ 
        marginBottom: isMobile ? '2.5vh' : '3.55vh', 
        padding: isMobile || isTablet ? '0 4vw' : '0' 
      }}>
        <h1
          style={{
            fontFamily: "Rethink Sans, sans-serif",
            fontWeight: 600,
            fontSize: isMobile ? '6vw' : isTablet ? '4vw' : '2.08vw',
            lineHeight: isMobile ? '7vw' : isTablet ? '5vw' : '4vh',
            letterSpacing: isMobile ? '-0.1vw' : '-0.052vw',
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
            fontSize: isMobile ? '3.5vw' : isTablet ? '2.2vw' : '1.11vw',
            lineHeight: isMobile ? '5vw' : isTablet ? '3vw' : '2.66vh',
            color: "rgba(130, 138, 150, 1)",
          }}
        >
          Manage your API connections, alerts, and access control
        </p>
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '3vh' : '1.66vw',
        maxWidth: '110vw',
        padding: contentPadding,
      }}>
        
        {/* ================= API CONNECTIONS CARD ================= */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: isMobile ? '0' : isTablet ? '2vw' : '0.75rem',
            border: isMobile ? 'none' : '1px solid #E2E8F0',
            padding: isMobile ? '3vw' : isTablet ? '2vw' : '1.66vw',
            width: isMobile || isTablet ? '100%' : '55.55vw',
            height: isMobile ? 'auto' : isTablet ? 'auto' : '62.22vh',
          }}
        >
          {/* CARD HEADER */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: isMobile ? '3vw' : '0.83vw',
            marginBottom: isMobile ? '3vh' : '2.66vh',
          }}>
            <div style={{ marginTop: '0.44vh' }}>
              <div style={{ 
                width: isMobile ? '10vw' : isTablet ? '5vw' : '2.5vw',
                height: isMobile ? '10vw' : isTablet ? '5vw' : '2.5vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <ApiKeyIcon size={isMobile ? 32 : 36} />
              </div>
            </div>

            <div>
              <h2 style={{
                fontSize: isMobile ? '4.5vw' : isTablet ? '3vw' : '1.25vw',
                fontWeight: 600,
                color: '#0F172A',
                lineHeight: isMobile ? '6vw' : '3.11vh',
              }}>
                API Connections
              </h2>
              <p style={{
  fontFamily: "'Rethink Sans', sans-serif",
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 400,
  color: 'rgba(130, 138, 150, 1)',
}}>
  Manage service integrations
</p>

            </div>
          </div>

          {/* LIST */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? '2.5vh' : '1.77vh',
          }}>
            {apiConnections.map((item, i) => (
              <APIConnectionItem 
                key={i} 
                item={item} 
                isMobile={isMobile} 
                isTablet={isTablet} 
              />
            ))}
          </div>
        </div>

        {/* ================= ALERTS CARD ================= */}
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: isMobile ? '0' : isTablet ? '2vw' : '0.75rem',
            border: isMobile ? 'none' : '1px solid #E2E8F0',
            padding: isMobile ? '3vw' : isTablet ? '2vw' : '1.66vw',
            width: isMobile || isTablet ? '100%' : '55.55vw',
            height: isMobile ? 'auto' : isTablet ? 'auto' : '62.22vh',
          }}
        >
          {/* HEADER */}
          <div style={{
            display: 'flex',
            gap: isMobile ? '3vw' : '0.83vw',
            marginBottom: isMobile ? '3vh' : '2.66vh',
          }}>
            <div style={{ marginTop: '0.44vh' }}>
              <div style={{ 
                width: isMobile ? '10vw' : isTablet ? '5vw' : '2.5vw',
                height: isMobile ? '10vw' : isTablet ? '5vw' : '2.5vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <AlertIcon />
              </div>
            </div>

            <div>
              <h2 style={{
                fontSize: isMobile ? '4.5vw' : isTablet ? '3vw' : '1.25vw',
                fontWeight: 600,
                color: '#0F172A',
                marginBottom: '0.44vh',
              }}>
                Alerts & Notifications
              </h2>
            <p style={{
  fontFamily: "'Rethink Sans', sans-serif",
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: 400,
  color: 'rgba(130, 138, 150, 1)',
}}>
  Configure your notification preferences
</p>

            </div>
          </div>

          {/* LIST */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? '2vh' : '1.77vh',
          }}>
            {alerts.map((item, i) => (
              <AlertItem 
                key={i} 
                item={item} 
                isMobile={isMobile} 
                isTablet={isTablet} 
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

/* ================= API CONNECTION ITEM ================= */
const APIConnectionItem = ({ item, isMobile, isTablet }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      border: '1px solid #E2E8F0',
      borderRadius: isMobile ? '3vw' : isTablet ? '2vw' : '0.75rem',
      padding: isMobile ? '3vw' : isTablet ? '2vw 2.5vw' : '1.77vh 1.11vw',
      height: isMobile ? 'auto' : isTablet ? 'auto' : '8.22vh',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: isMobile ? '3vw' : '1.11vw',
      }}>
        <div style={{
          width: isMobile ? '12vw' : isTablet ? '6vw' : '2.77vw',
          height: isMobile ? '12vw' : isTablet ? '6vw' : '4.44vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: isMobile ? '2.5vw' : isTablet ? '1.5vw' : '0.5rem',
          backgroundColor: '#F3F5F7',
        }}>
          {item.icon}
        </div>

        <div>
         <p style={{
  fontFamily: "'Rethink Sans', sans-serif",
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 500,
  color: 'rgba(15, 23, 41, 1)',
}}>
  {item.name}
</p>

       <p style={{
  fontFamily: "'Rethink Sans', sans-serif",
  fontSize: '12px',
  lineHeight: '16px',
  fontWeight: 400,
  color: 'rgba(101, 117, 139, 1)',
}}>
  {item.time}
</p>

        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        {item.status === "connected" ? (
          <ConnectedBadge />
        ) : (
          <DisconnectedBadge />
        )}
      </div>
    </div>
  );
};

/* ================= ALERT ITEM ================= */
const AlertItem = ({ item, isMobile, isTablet }) => {
  const [enabled, setEnabled] = React.useState(item.enabled);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: isMobile ? '2vh 0' : '1vh 0',
      borderBottom: isMobile ? '1px solid #E2E8F0' : 'none',
    }}>
      <div style={{ flex: 1, paddingRight: isMobile ? '3vw' : '1vw' }}>
    <p style={{
  fontFamily: "'Rethink Sans', sans-serif",
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 500,
  color: 'rgba(15, 23, 41, 1)',
}}>
  {item.title}
</p>

      <p style={{
  fontFamily: "'Rethink Sans', sans-serif",
  fontSize: '12px',
  lineHeight: '16px',
  fontWeight: 400,
  color: 'rgba(101, 117, 139, 1)',
}}>
  {item.desc}
</p>

      </div>

      {/* TOGGLE SWITCH */}
      <button
        onClick={() => setEnabled(!enabled)}
        style={{
          width: isMobile ? '12vw' : isTablet ? '8vw' : '3.05vw',
          height: isMobile ? '6.5vw' : isTablet ? '4vw' : '2.66vh',
          borderRadius: '9999px',
          padding: isMobile ? '0.8vw' : '0.27vh',
          backgroundColor: enabled ? '#0EA5E9' : '#E5E7EB',
          transition: 'background-color 0.2s',
          border: 'none',
          cursor: 'pointer',
          position: 'relative',
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: isMobile ? '5vw' : isTablet ? '3.2vw' : '1.11vw',
            height: isMobile ? '5vw' : isTablet ? '3.2vw' : '2.11vh',
            backgroundColor: 'white',
            borderRadius: '50%',
            transition: 'transform 0.2s',
            transform: enabled 
              ? isMobile 
                ? 'translateX(5.5vw)' 
                : isTablet 
                  ? 'translateX(4.3vw)' 
                  : 'translateX(1.38vw)'
              : 'translateX(0)',
          }}
        />
      </button>
    </div>
  );
};