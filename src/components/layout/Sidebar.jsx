import { useState } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import swaayattLogo from "../../assets/images/Swaayatt.png";
import bunnyLogo from "../../assets/icons/BunnyCDN.png";
import vimeoLogo from "../../assets/icons/Vimeo.png";
import { Settings as SettingsIcon } from "lucide-react";


import {
  LayoutGrid,
  Layers,
  FileText,
  Calendar,
  Settings,
  ChevronRight,
  LogOut,
} from "lucide-react";

const GoDaddyLogo = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip_gd)">
      <path d="M17.2517 2.47795C15.1732 1.17931 12.4369 1.48871 9.99646 3.02216C7.56362 1.48871 4.82562 1.17931 2.74965 2.47795C-0.534255 4.53018 -0.933512 9.81546 1.85874 14.2836C3.91691 17.5777 7.13554 19.5078 10.0007 19.4722C12.8658 19.5078 16.0845 17.5777 18.1426 14.2836C20.9315 9.81546 20.5356 4.53018 17.2517 2.47795ZM3.36846 13.3401C2.7927 12.4274 2.3583 11.4328 2.07999 10.3902C1.83271 9.48512 1.73817 8.54513 1.80025 7.60895C1.92486 5.95767 2.59707 4.67174 3.69227 3.98767C4.78747 3.30359 6.23531 3.26205 7.77723 3.87408C8.00865 3.96648 8.23752 4.07328 8.4647 4.19111C7.60786 4.97239 6.8628 5.86806 6.25056 6.85282C4.55521 9.56539 4.03812 12.584 4.6298 14.9905C4.15802 14.4816 3.73567 13.929 3.36846 13.3401ZM17.9223 10.3893C17.6436 11.4319 17.2092 12.4264 16.6338 13.3393C16.2663 13.929 15.8439 14.4827 15.3724 14.9931C15.9014 12.8357 15.542 10.1927 14.245 7.71406C14.2243 7.67324 14.1953 7.63722 14.1598 7.60833C14.1242 7.57944 14.0831 7.55831 14.0389 7.54633C13.9947 7.53435 13.9485 7.53177 13.9033 7.53876C13.858 7.54575 13.8148 7.56215 13.7763 7.58691L9.73283 10.113C9.69595 10.136 9.66397 10.1661 9.63872 10.2015C9.61347 10.2368 9.59545 10.2769 9.58568 10.3192C9.57592 10.3616 9.57461 10.4054 9.58182 10.4483C9.58903 10.4912 9.60463 10.5322 9.62772 10.569L10.2211 11.5176C10.244 11.5544 10.274 11.5864 10.3093 11.6116C10.3446 11.6369 10.3846 11.6549 10.4269 11.6647C10.4692 11.6744 10.513 11.6758 10.5558 11.6686C10.5986 11.6614 10.6395 11.6458 10.6763 11.6227L13.2973 9.98499C13.3821 10.2393 13.4669 10.4936 13.5304 10.7479C13.7777 11.6518 13.8725 12.5906 13.811 13.5257C13.6864 15.1762 13.0142 16.4621 11.919 17.147C11.3541 17.4924 10.7068 17.6798 10.0448 17.6895H9.96085C9.29878 17.68 8.65145 17.4926 8.08664 17.147C6.99059 16.4621 6.31838 15.1762 6.19377 13.5257C6.13207 12.5896 6.22661 11.6497 6.4735 10.7445C7.0416 8.65043 8.21594 6.77096 9.84896 5.34226C10.5532 4.72412 11.3553 4.22739 12.2225 3.87238C13.7601 3.26036 15.2105 3.30105 16.3066 3.98597C17.4026 4.6709 18.074 5.95598 18.1986 7.60726C18.2615 8.54353 18.1681 9.48373 17.9223 10.3893Z" fill="#1BDBDB"/>
    </g>
    <defs><clipPath id="clip_gd"><rect width="20" height="20" fill="white"/></clipPath></defs>
  </svg>
);

function DashboardIcon({ active, hovered }) {
  const color =
    active || hovered ? "#007AFF" : "rgba(130,138,150,1)";

  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M7.5 2.5H3.33333C2.8731 2.5 2.5 2.8731 2.5 3.33333V9.16667C2.5 9.6269 2.8731 10 3.33333 10H7.5C7.96024 10 8.33333 9.6269 8.33333 9.16667V3.33333C8.33333 2.8731 7.96024 2.5 7.5 2.5Z"
        stroke={color} strokeWidth="1.66667" />
      <path d="M16.667 2.5H12.5003C12.0401 2.5 11.667 2.8731 11.667 3.33333V5.83333C11.667 6.29357 12.0401 6.66667 12.5003 6.66667H16.667C17.1272 6.66667 17.5003 6.29357 17.5003 5.83333V3.33333C17.5003 2.8731 17.1272 2.5 16.667 2.5Z"
        stroke={color} strokeWidth="1.66667" />
      <path d="M16.667 10H12.5003C12.0401 10 11.667 10.3731 11.667 10.8333V16.6667C11.667 17.1269 12.0401 17.5 12.5003 17.5H16.667C17.1272 17.5 17.5003 17.1269 17.5003 16.6667V10.8333C17.5003 10.3731 17.1272 10 16.667 10Z"
        stroke={color} strokeWidth="1.66667" />
      <path d="M7.5 13.3333H3.33333C2.8731 13.3333 2.5 13.7063 2.5 14.1666V16.6666C2.5 17.1268 2.8731 17.4999 3.33333 17.4999H7.5C7.96024 17.4999 8.33333 17.1268 8.33333 16.6666V14.1666C8.33333 13.7063 7.96024 13.3333 7.5 13.3333Z"
        stroke={color} strokeWidth="1.66667" />
    </svg>
  );
}

const AmazonLogo = () => (
  <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip_amz)">
      <path d="M5.68444 4.36856C5.68444 4.61198 5.71075 4.80935 5.7568 4.95409C5.80943 5.09883 5.87522 5.25672 5.96733 5.42777C6.00022 5.4804 6.01338 5.53304 6.01338 5.57909C6.01338 5.64488 5.97391 5.71067 5.88838 5.77646L5.47391 6.05277C5.4147 6.09225 5.35549 6.11198 5.30286 6.11198C5.23707 6.11198 5.17128 6.07909 5.10549 6.01988C5.01338 5.92119 4.93444 5.81593 4.86865 5.71067C4.80286 5.59883 4.73707 5.47383 4.6647 5.32251C4.15154 5.92777 3.5068 6.2304 2.73049 6.2304C2.17786 6.2304 1.73707 6.07251 1.4147 5.75672C1.09233 5.44093 0.927856 5.01988 0.927856 4.49356C0.927856 3.93435 1.12522 3.4804 1.52654 3.1383C1.92786 2.79619 2.46075 2.62514 3.13838 2.62514C3.36207 2.62514 3.59233 2.64488 3.83575 2.67777C4.07917 2.71067 4.32917 2.7633 4.59233 2.82251V2.34225C4.59233 1.84225 4.48707 1.49356 4.28312 1.28961C4.07259 1.08567 3.71733 0.986983 3.21075 0.986983C2.98049 0.986983 2.74365 1.0133 2.50022 1.07251C2.2568 1.13172 2.01996 1.20409 1.7897 1.29619C1.68444 1.34225 1.60549 1.36856 1.55944 1.38172C1.51338 1.39488 1.48049 1.40146 1.45417 1.40146C1.36207 1.40146 1.31601 1.33567 1.31601 1.19751V0.875141C1.31601 0.769878 1.32917 0.690931 1.36207 0.644878C1.39496 0.598826 1.45417 0.552773 1.54628 0.50672C1.77654 0.388299 2.05286 0.289615 2.37522 0.210668C2.69759 0.125141 3.0397 0.0856677 3.40154 0.0856677C4.18444 0.0856677 4.7568 0.263299 5.12522 0.618562C5.48707 0.973825 5.67128 1.5133 5.67128 2.23698V4.36856H5.68444ZM3.01338 5.36856C3.23049 5.36856 3.45417 5.32909 3.69101 5.25014C3.92786 5.17119 4.13838 5.02646 4.31601 4.82909C4.42128 4.70409 4.50022 4.56593 4.5397 4.40804C4.57917 4.25014 4.60549 4.05935 4.60549 3.83567V3.55935C4.4147 3.5133 4.21075 3.47383 4.00022 3.44751C3.7897 3.42119 3.58575 3.40804 3.3818 3.40804C2.94101 3.40804 2.61865 3.49356 2.40154 3.67119C2.18444 3.84883 2.07917 4.09883 2.07917 4.42777C2.07917 4.73698 2.15812 4.96725 2.32259 5.12514C2.48049 5.28961 2.71075 5.36856 3.01338 5.36856ZM8.29628 6.07909C8.17786 6.07909 8.09891 6.05935 8.04628 6.0133C7.99365 5.97383 7.94759 5.88172 7.90812 5.75672L6.36207 0.671194C6.32259 0.539615 6.30286 0.454089 6.30286 0.408036C6.30286 0.302773 6.35549 0.243562 6.46075 0.243562H7.10549C7.23049 0.243562 7.31601 0.263299 7.36207 0.309352C7.4147 0.348826 7.45417 0.440931 7.49365 0.565931L8.59891 4.92119L9.62522 0.565931C9.65812 0.434352 9.69759 0.348826 9.75022 0.309352C9.80286 0.269878 9.89496 0.243562 10.0134 0.243562H10.5397C10.6647 0.243562 10.7502 0.263299 10.8029 0.309352C10.8555 0.348826 10.9015 0.440931 10.9279 0.565931L11.9673 4.97382L13.1055 0.565931C13.145 0.434352 13.191 0.348826 13.2371 0.309352C13.2897 0.269878 13.3752 0.243562 13.4936 0.243562H14.1055C14.2107 0.243562 14.27 0.296194 14.27 0.408036C14.27 0.440931 14.2634 0.473826 14.2568 0.513299C14.2502 0.552773 14.2371 0.605404 14.2107 0.677773L12.6252 5.7633C12.5857 5.89488 12.5397 5.9804 12.4871 6.01988C12.4344 6.05935 12.3489 6.08567 12.2371 6.08567H11.6713C11.5463 6.08567 11.4607 6.06593 11.4081 6.01988C11.3555 5.97382 11.3094 5.8883 11.2831 5.75672L10.2634 1.5133L9.25023 5.75014C9.21733 5.88172 9.17786 5.96725 9.12522 6.0133C9.07259 6.05935 8.98049 6.07909 8.86207 6.07909H8.29628ZM16.7502 6.25672C16.4081 6.25672 16.066 6.21725 15.7371 6.1383C15.4081 6.05935 15.1515 5.97383 14.9805 5.87514C14.8752 5.81593 14.8029 5.75014 14.7765 5.69093C14.7502 5.63172 14.7371 5.56593 14.7371 5.50672V5.17119C14.7371 5.03304 14.7897 4.96725 14.8884 4.96725C14.9279 4.96725 14.9673 4.97383 15.0068 4.98698C15.0463 5.00014 15.1055 5.02646 15.1713 5.05277C15.395 5.15146 15.6384 5.2304 15.895 5.28304C16.1581 5.33567 16.4147 5.36198 16.6779 5.36198C17.0923 5.36198 17.4147 5.28961 17.6384 5.14488C17.8621 5.00014 17.9805 4.78961 17.9805 4.51988C17.9805 4.33567 17.9213 4.18435 17.8029 4.05935C17.6844 3.93435 17.4607 3.82251 17.1384 3.71725L16.1844 3.42119C15.7042 3.26988 15.3489 3.04619 15.1318 2.75014C14.9147 2.46067 14.8029 2.1383 14.8029 1.79619C14.8029 1.51988 14.8621 1.27646 14.9805 1.06593C15.0989 0.855404 15.2568 0.671194 15.4542 0.526457C15.6515 0.375141 15.8752 0.263299 16.1384 0.184352C16.4015 0.105404 16.6779 0.0725098 16.9673 0.0725098C17.1121 0.0725098 17.2634 0.0790887 17.4081 0.0988256C17.5594 0.118562 17.6976 0.144878 17.8358 0.171194C17.9673 0.204089 18.0923 0.236983 18.2107 0.276457C18.3292 0.315931 18.4213 0.355404 18.4871 0.394878C18.5792 0.44751 18.645 0.500141 18.6844 0.559352C18.7239 0.611983 18.7436 0.684352 18.7436 0.776457V1.08567C18.7436 1.22383 18.691 1.29619 18.5923 1.29619C18.5397 1.29619 18.4542 1.26988 18.3423 1.21725C17.9673 1.04619 17.5463 0.960668 17.0792 0.960668C16.7042 0.960668 16.4081 1.01988 16.2042 1.14488C16.0002 1.26988 15.895 1.46067 15.895 1.7304C15.895 1.91461 15.9607 2.07251 16.0923 2.19751C16.2239 2.32251 16.4673 2.44751 16.816 2.55935L17.7502 2.8554C18.2239 3.00672 18.566 3.21725 18.77 3.48698C18.9739 3.75672 19.0726 4.06593 19.0726 4.40804C19.0726 4.69093 19.0134 4.94751 18.9015 5.17119C18.7831 5.39488 18.6252 5.59225 18.4213 5.75014C18.2173 5.91461 17.9739 6.03304 17.691 6.11856C17.395 6.21067 17.0858 6.25672 16.7502 6.25672Z" fill="#252F3E"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M17.9937 9.45397C15.8292 11.0527 12.6845 11.9013 9.98051 11.9013C6.19104 11.9013 2.77657 10.5 0.197618 8.17108C-0.00632931 7.98687 0.177881 7.73687 0.421302 7.88161C3.21078 9.50003 6.65156 10.4803 10.2108 10.4803C12.6121 10.4803 15.2502 9.98029 17.6779 8.95397C18.0397 8.7895 18.3489 9.19082 17.9937 9.45397Z" fill="#FF9900"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M18.8948 8.42779C18.6185 8.07253 17.0659 8.25674 16.3619 8.34227C16.1514 8.36858 16.1185 8.18437 16.3093 8.04622C17.5461 7.17779 19.579 7.42779 19.8159 7.71727C20.0527 8.01332 19.7501 10.0462 18.5922 11.0199C18.4146 11.1712 18.2435 11.0923 18.3224 10.8949C18.5856 10.2436 19.1711 8.77648 18.8948 8.42779Z" fill="#FF9900"/>
    </g>
    <defs><clipPath id="clip_amz"><rect width="20" height="11.9737" fill="white"/></clipPath></defs>
  </svg>
);

export default function Sidebar() {
  return (
    <>
      <aside className="sticky top-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="px-6 pt-6">
          
          {/* LOGO & BRAND */}
<div className="flex items-center gap-3 mb-8">
  <img
    src={swaayattLogo}
    alt="Swaayatt Robots"
    className="w-10 h-10 object-contain"
  />

  {/* BRAND TEXT */}
  <div
    className="flex flex-col justify-center"
    style={{
      width: "89.69px",
      height: "32px",
    }}
  >
    {/* SWAAYATT */}
<span
  style={{
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 700,
    fontSize: "12.75px",
    lineHeight: "128%",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "rgba(33, 33, 33, 1)",
  }}
>
  SWAAYATT
</span>

{/* ROBOTS */}
<span
  style={{
    fontFamily: "Montserrat, sans-serif",
    fontWeight: 900,
    fontSize: "12.75px",
    lineHeight: "128%",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: "rgba(33, 33, 33, 1)",
  }}
>
  ROBOTS
</span>


  </div>
</div>

{/* EDGE-TO-EDGE DIVIDER BELOW LOGO */}
<div
  style={{
    height: "1px",
    backgroundColor: "rgba(227, 231, 237, 1)",
    marginLeft: "-24px",
    marginRight: "-24px",
    marginBottom: "24px",
  }}
/>



          {/* PRIMARY NAVIGATION */}
         <nav className="mb-8">
  <ul className="flex flex-col gap-1">
<NavItem
  to="/"
  icon={(active, hovered) => (
    <DashboardIcon active={active} hovered={hovered} />
  )}
  label="Dashboard"
/>


<NavItem
  to="/subscriptions"
  icon={(active, hovered) => (
    <Layers
      size={18}
      className={
        active || hovered
          ? "text-[#007AFF]"
          : "text-[rgba(130,138,150,1)]"
      }
    />
  )}
  label="Subscriptions"
/>

<NavItem
  to="/invoices"
  icon={(active, hovered) => (
    <FileText
      size={18}
      className={
        active || hovered
          ? "text-[#007AFF]"
          : "text-[rgba(130,138,150,1)]"
      }
    />
  )}
  label="Invoices"
/>

<NavItem
  to=
  "/upcoming-payments"
  icon={(active, hovered) => (
    <Calendar
      size={18}
      className={
        active || hovered
          ? "text-[#007AFF]"
          : "text-[rgba(130,138,150,1)]"
      }
    />
  )}
  label="Upcoming Payments"
/>

<NavItem
  to="/settings"
  icon={(active, hovered) => (
    <SettingsIcon
      size={18}
      className={
        active || hovered
          ? "text-[#007AFF]"
          : "text-[rgba(130,138,150,1)]"
      }
    />
  )}
  label="Settings"
/>



  </ul>
</nav>

<div
  style={{
    width: "12vw",        // same visual width as ~231px
    height: "0.08vh",
    backgroundColor: "rgba(227, 231, 237, 1)",
    marginBottom: "1.5vh",
  }}
/>


          {/* CONNECTED SERVICES SECTION */}
          <div className="flex flex-col">
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 500,
              fontSize: '12px',
              lineHeight: '16px',
              letterSpacing: '0.06em',
              color: 'rgba(157, 169, 184, 1)',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              Connected Services
            </p>
            <div className="flex flex-col">
              <ServiceItem name="Amazon AWS" icon={<AmazonLogo />} />
              <ServiceItem name="Go Daddy" icon={<GoDaddyLogo />} />
              <ServiceItem name="Bunny CDN" image={bunnyLogo} />
              <ServiceItem name="Vimeo" image={vimeoLogo} />
            </div>
          </div>
        </div>

        <div className="flex-grow" />

        {/* USER PROFILE CARD */}
<div
  style={{
    width: "100%",
    height: "1px",
    backgroundColor: "rgba(227, 231, 237, 1)",
    marginBottom: "10px",
  }}
/>

<div className="px-4 pb-6">
  <div className="flex items-center justify-between bg-sky-50 rounded-xl px-4 py-3">
    <div className="flex items-center gap-3">
      
      {/* AVATAR */}
      <div
        className="w-9 h-9 rounded-full bg-sky-500 text-white flex items-center justify-center"
        style={{
          fontFamily: "Rethink Sans, sans-serif",
          fontWeight: 500,
          fontSize: "14px",
          lineHeight: "20px",
        }}
      >
        JD
      </div>

      {/* NAME + ROLE */}
      <div className="flex flex-col">
        {/* NAME */}
        <span
          style={{
            fontFamily: "Rethink Sans, sans-serif",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "0%",
            color: "rgba(15, 23, 41, 1)", 
          }}
        >
          John Doe
        </span>

        {/* ROLE */}
        <span
          style={{
            fontFamily: "Rethink Sans, sans-serif",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "16px",
            letterSpacing: "0%",
            color: "rgba(130, 138, 150, 1)", 
          }}
        >
          Admin
        </span>
      </div>
    </div>

    {/* LOGOUT ICON */}
    <LogOut
      size={16}
      className="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
    />
  </div>
</div>

      </aside>
    </>
  );
}

function NavItem({ to, icon, label }) {
  const [hovered, setHovered] = useState(false);

  return (
    <NavLink
      to={to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all
        ${isActive ? "bg-[#F1FAFE]" : "hover:bg-[#F1FAFE]"}`
      }
      style={{ height: "32px" }}
    >
      {({ isActive }) => (
        <>
          {/* ICON */}
          <span className="w-[18px] h-[18px] flex items-center justify-center">
            {icon(isActive, hovered)}
          </span>

          {/* TEXT */}
          <span
            className={`transition-colors ${
              isActive || hovered
                ? "text-[#007AFF]"
                : "text-[rgba(130,138,150,1)]"
            }`}
            style={{
              fontFamily: "Rethink Sans, sans-serif",
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "20px",
            }}
          >
            {label}
          </span>
        </>
      )}
    </NavLink>
  );
}


function ServiceItem({ name, icon, image }) {
  return (
    <div
      className="flex items-center justify-between px-3 cursor-pointer group transition-all"
      style={{
        height: "32px",
      }}
    >
      <div className="flex items-center gap-3">
        {/* ICON */}
        <div className="w-[18px] h-[18px] flex items-center justify-center overflow-hidden">
          {icon ? (
            icon
          ) : (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-contain"
            />
          )}
        </div>

        {/* TEXT */}
        <span
          style={{
            fontFamily: "Rethink Sans, sans-serif",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "0%",
            color: "rgba(130, 138, 150, 1)",
            display: "flex",
            alignItems: "center",
          }}
          className="group-hover:text-gray-900"
        >
          {name}
        </span>
      </div>

      {/* CHEVRON */}
      <ChevronRight
        size={14}
        className="text-gray-300 group-hover:text-gray-500"
      />
    </div>
  );
}