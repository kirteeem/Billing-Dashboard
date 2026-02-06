import React from "react";
import { Search, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import bunnyLogo from "../../assets/icons/BunnyCDN.png";
import vimeoLogo from "../../assets/icons/Vimeo.png";

/* ================= ICON COMPONENTS ================= */
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


export const FigmaIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="12" fill="#F3F5F7" />

    <g clipPath="url(#clip0)">
      <path
        d="M19.375 39.75C22.35 39.75 24.75 37.35 24.75 34.375V29H19.375C16.4 29 14 31.4 14 34.375C14 37.35 16.4 39.75 19.375 39.75Z"
        fill="#0ACF83"
      />
      <path
        d="M14 23.625C14 20.65 16.4 18.25 19.375 18.25H24.75V29H19.375C16.4 29 14 26.6 14 23.625Z"
        fill="#A259FF"
      />
      <path
        d="M14 12.875C14 9.9 16.4 7.5 19.375 7.5H24.75V18.25H19.375C16.4 18.25 14 15.85 14 12.875Z"
        fill="#F24E1E"
      />
      <path
        d="M24.75 7.5H30.125C33.1 7.5 35.5 9.9 35.5 12.875C35.5 15.85 33.1 18.25 30.125 18.25H24.75V7.5Z"
        fill="#FF7262"
      />
      <path
        d="M35.5 23.625C35.5 26.6 33.1 29 30.125 29C27.15 29 24.75 26.6 24.75 23.625C24.75 20.65 27.15 18.25 30.125 18.25C33.1 18.25 35.5 20.65 35.5 23.625Z"
        fill="#1ABCFE"
      />
    </g>

    <defs>
      <clipPath id="clip0">
        <rect width="32" height="32" fill="white" transform="translate(8 8)" />
      </clipPath>
    </defs>
  </svg>
);

export const GithubIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="12" fill="#F3F5F7" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 8C15.716 8 9 14.716 9 23c0 6.627 4.293 12.247 10.253 14.232.75.14 1.023-.325 1.023-.72v-2.52c-4.17.907-5.05-1.742-5.05-1.742-.682-1.733-1.666-2.195-1.666-2.195-1.36-.93.103-.91.103-.91 1.503.106 2.293 1.543 2.293 1.543 1.336 2.29 3.505 1.63 4.36 1.247.136-.967.523-1.63.95-2.005-3.33-.38-6.83-1.665-6.83-7.41 0-1.64.586-2.982 1.543-4.03-.155-.38-.668-1.91.147-3.98 0 0 1.26-.402 4.13 1.54A14.4 14.4 0 0 1 24 14.2c1.28.006 2.57.173 3.775.507 2.868-1.942 4.127-1.54 4.127-1.54.817 2.07.305 3.6.15 3.98.96 1.048 1.54 2.39 1.54 4.03 0 5.76-3.505 7.025-6.846 7.398.537.463 1.017 1.375 1.017 2.77v4.107c0 .398.27.864 1.03.718C34.71 35.24 39 29.62 39 23 39 14.716 32.284 8 24 8Z"
      fill="#181616"
    />
  </svg>
);

export const AdobeIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" rx="12" fill="#F3F5F7" />
    <path
      d="M12 10h9.6L12 38V10ZM36 10H26.4L36 38V10ZM22.8 22.6L28.1 38h-3.4l-1.9-4.6h-4.4l2.4-10.8Z"
      fill="#E11D2E"
    />
  </svg>
);

const AuthOIcon = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  <svg width="32" height="32" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_107_312)">
      <path d="M23.0031 3.30423C20.2317 1.57263 16.5831 1.98518 13.329 4.02988C10.085 1.98518 6.43421 1.57263 3.66613 3.30423C-0.712617 6.04066 -1.24498 13.088 2.47819 19.0458C5.22254 23.4381 9.51425 26.0118 13.3346 25.9643C17.155 26.0118 21.4467 23.4381 24.1911 19.0458C27.9097 13.088 27.3819 6.04066 23.0031 3.30423ZM4.49124 17.7878C3.72353 16.5707 3.1443 15.2446 2.7732 13.8544C2.44349 12.6475 2.31742 11.3942 2.4002 10.1459C2.56635 7.94407 3.46267 6.22942 4.92301 5.31728C6.38334 4.40513 8.31388 4.34975 10.3699 5.16582C10.6784 5.28902 10.9836 5.43143 11.2865 5.58855C10.144 6.6303 9.15057 7.82458 8.33422 9.13766C6.07364 12.7546 5.38417 16.7795 6.17311 19.9884C5.54403 19.3098 4.98088 18.5729 4.49124 17.7878ZM23.8972 13.8532C23.5256 15.2433 22.9464 16.5694 22.1791 17.7866C21.6891 18.5729 21.126 19.3113 20.4973 19.9918C21.2026 17.1152 20.7233 13.591 18.994 10.286C18.9664 10.2316 18.9276 10.1836 18.8803 10.145C18.8329 10.1065 18.778 10.0784 18.7191 10.0624C18.6602 10.0464 18.5986 10.043 18.5383 10.0523C18.478 10.0616 18.4203 10.0835 18.3689 10.1165L12.9775 13.4848C12.9283 13.5154 12.8856 13.5555 12.852 13.6027C12.8183 13.6499 12.7943 13.7032 12.7813 13.7597C12.7682 13.8162 12.7665 13.8747 12.7761 13.9319C12.7857 13.989 12.8065 14.0437 12.8373 14.0928L13.6285 15.3576C13.6591 15.4068 13.6991 15.4494 13.7461 15.4831C13.7932 15.5167 13.8465 15.5407 13.9029 15.5538C13.9593 15.5668 14.0177 15.5685 14.0748 15.5589C14.1318 15.5493 14.1864 15.5286 14.2355 15.4978L17.7303 13.3141C17.8434 13.6532 17.9564 13.9923 18.0412 14.3313C18.3708 15.5366 18.4972 16.7884 18.4153 18.0353C18.2491 20.236 17.3528 21.9506 15.8925 22.8639C15.1392 23.3244 14.2762 23.5743 13.3934 23.5873H13.2815C12.3987 23.5745 11.5355 23.3247 10.7824 22.8639C9.32097 21.9506 8.42465 20.236 8.25849 18.0353C8.17622 16.787 8.30228 15.5337 8.63149 14.3268C9.38899 11.5346 10.9548 9.0285 13.1323 7.12348C14.0713 6.29926 15.1408 5.63692 16.2971 5.16356C18.3475 4.34749 20.2814 4.40174 21.7429 5.31502C23.2043 6.22829 24.0995 7.94181 24.2657 10.1436C24.3495 11.392 24.225 12.6457 23.8972 13.8532Z" fill="#1BDBDB"/>
    </g>
    <defs><clipPath id="clip0_107_312"><rect width="26.6679" height="26.6679" fill="white" /></clipPath></defs>
  </svg>
);

const SlackIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
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

const AWSIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="10" fill="#F3F5F7" />
    <g clipPath="url(#clip0_107_152)">
      <g clipPath="url(#clip1_107_152)">
        <path d="M14.245 17.4078C14.245 17.7324 14.2801 17.9955 14.3415 18.1885C14.4117 18.3815 14.4994 18.592 14.6222 18.8201C14.6661 18.8903 14.6836 18.9605 14.6836 19.0219C14.6836 19.1096 14.631 19.1973 14.5169 19.2851L13.9643 19.6535C13.8853 19.7061 13.8064 19.7324 13.7362 19.7324C13.6485 19.7324 13.5607 19.6886 13.473 19.6096C13.3502 19.478 13.2449 19.3377 13.1572 19.1973C13.0695 19.0482 12.9818 18.8815 12.8853 18.6798C12.201 19.4868 11.3413 19.8903 10.3062 19.8903C9.56933 19.8903 8.98158 19.6798 8.55174 19.2587C8.1219 18.8377 7.90259 18.2762 7.90259 17.5745C7.90259 16.8288 8.16576 16.2235 8.70087 15.7673C9.23598 15.3112 9.94654 15.0831 10.8501 15.0831C11.1484 15.0831 11.4554 15.1094 11.78 15.1533C12.1045 15.1971 12.4379 15.2673 12.7888 15.3463V14.7059C12.7888 14.0392 12.6484 13.5743 12.3765 13.3023C12.0958 13.0304 11.6221 12.8988 10.9466 12.8988C10.6396 12.8988 10.3238 12.9339 9.99918 13.0128C9.6746 13.0918 9.35879 13.1883 9.05176 13.3111C8.91141 13.3725 8.80614 13.4076 8.74473 13.4251C8.68333 13.4427 8.63946 13.4515 8.60437 13.4515C8.48156 13.4515 8.42016 13.3637 8.42016 13.1795V12.7497C8.42016 12.6093 8.4377 12.504 8.48156 12.4426C8.52542 12.3812 8.60437 12.3198 8.72719 12.2584C9.03422 12.1005 9.40266 11.9689 9.8325 11.8637C10.2623 11.7496 10.7185 11.697 11.201 11.697C12.2449 11.697 13.0081 11.9338 13.4993 12.4075C13.9818 12.8813 14.2274 13.6006 14.2274 14.5655V17.4078H14.245ZM10.6834 18.7412C10.9729 18.7412 11.2712 18.6885 11.587 18.5833C11.9028 18.478 12.1835 18.285 12.4203 18.0218C12.5607 17.8552 12.666 17.6709 12.7186 17.4604C12.7712 17.2499 12.8063 16.9955 12.8063 16.6972V16.3288C12.5519 16.2674 12.28 16.2147 11.9993 16.1796C11.7186 16.1446 11.4466 16.127 11.1747 16.127C10.5869 16.127 10.1571 16.2411 9.86759 16.4779C9.5781 16.7148 9.43775 17.0481 9.43775 17.4867C9.43775 17.899 9.54301 18.2061 9.76232 18.4166C9.97286 18.6359 10.2799 18.7412 10.6834 18.7412ZM17.7276 19.6886C17.5697 19.6886 17.4644 19.6623 17.3943 19.6009C17.3241 19.5482 17.2627 19.4254 17.21 19.2587L15.1485 12.4777C15.0959 12.3023 15.0696 12.1882 15.0696 12.1268C15.0696 11.9865 15.1398 11.9075 15.2801 11.9075H16.1398C16.3065 11.9075 16.4205 11.9338 16.4819 11.9952C16.5521 12.0479 16.6047 12.1707 16.6574 12.3374L18.1311 18.1447L19.4996 12.3374C19.5435 12.1619 19.5961 12.0479 19.6663 11.9952C19.7365 11.9426 19.8593 11.9075 20.0172 11.9075H20.719C20.8856 11.9075 20.9997 11.9338 21.0699 11.9952C21.14 12.0479 21.2014 12.1707 21.2365 12.3374L22.6226 18.2148L24.1402 12.3374C24.1928 12.1619 24.2542 12.0479 24.3156 11.9952C24.3858 11.9426 24.4998 11.9075 24.6577 11.9075H25.4736C25.6139 11.9075 25.6929 11.9777 25.6929 12.1268C25.6929 12.1707 25.6841 12.2146 25.6753 12.2672C25.6666 12.3198 25.649 12.39 25.6139 12.4865L23.4998 19.2675C23.4472 19.443 23.3858 19.557 23.3156 19.6096C23.2454 19.6623 23.1314 19.6974 22.9822 19.6974H22.2278C22.0611 19.6974 21.9471 19.671 21.8769 19.6096C21.8067 19.5482 21.7453 19.4342 21.7102 19.2587L20.3505 13.6006L18.9996 19.25C18.9557 19.4254 18.9031 19.5395 18.8329 19.6009C18.7627 19.6623 18.6399 19.6886 18.482 19.6886H17.7276ZM29 19.9254C28.5439 19.9254 28.0877 19.8728 27.6491 19.7675C27.2105 19.6623 26.8684 19.5482 26.6403 19.4166C26.4999 19.3377 26.4034 19.25 26.3683 19.171C26.3333 19.0921 26.3157 19.0043 26.3157 18.9254V18.478C26.3157 18.2938 26.3859 18.2061 26.5175 18.2061C26.5701 18.2061 26.6227 18.2148 26.6754 18.2324C26.728 18.2499 26.807 18.285 26.8947 18.3201C27.1929 18.4517 27.5175 18.557 27.8596 18.6271C28.2105 18.6973 28.5527 18.7324 28.9035 18.7324C29.4562 18.7324 29.8861 18.6359 30.1843 18.4429C30.4826 18.2499 30.6405 17.9692 30.6405 17.6095C30.6405 17.3639 30.5615 17.1622 30.4036 16.9955C30.2457 16.8288 29.9475 16.6797 29.5176 16.5393L28.2456 16.1446C27.6052 15.9428 27.1315 15.6445 26.8421 15.2498C26.5526 14.8638 26.4034 14.434 26.4034 13.9778C26.4034 13.6094 26.4824 13.2848 26.6403 13.0041C26.7982 12.7234 27.0087 12.4777 27.2719 12.2847C27.5351 12.083 27.8333 11.9338 28.1842 11.8286C28.5351 11.7233 28.9035 11.6794 29.2895 11.6794C29.4825 11.6794 29.6843 11.6882 29.8773 11.7145C30.079 11.7408 30.2633 11.7759 30.4475 11.811C30.6229 11.8549 30.7896 11.8988 30.9475 11.9514C31.1054 12.004 31.2282 12.0567 31.3159 12.1093C31.4388 12.1795 31.5265 12.2496 31.5791 12.3286C31.6317 12.3988 31.6581 12.4953 31.6581 12.6181V13.0304C31.6581 13.2146 31.5879 13.3111 31.4563 13.3111C31.3861 13.3111 31.2721 13.276 31.1229 13.2058C30.6229 12.9777 30.0615 12.8637 29.4387 12.8637C28.9386 12.8637 28.5439 12.9427 28.2719 13.1093C28 13.276 27.8596 13.5304 27.8596 13.8901C27.8596 14.1357 27.9474 14.3462 28.1228 14.5129C28.2983 14.6796 28.6228 14.8463 29.0878 14.9954L30.3334 15.3901C30.965 15.5919 31.4212 15.8726 31.6931 16.2323C31.9651 16.5919 32.0967 17.0042 32.0967 17.4604C32.0967 17.8376 32.0177 18.1797 31.8686 18.478C31.7107 18.7763 31.5002 19.0394 31.2282 19.25C30.9563 19.4693 30.6317 19.6272 30.2545 19.7412C29.8597 19.864 29.4474 19.9254 29 19.9254Z" fill="#252F3E" />
        <path d="M30.6575 24.1889C27.7714 26.3206 23.5782 27.4522 19.9728 27.4522C14.9199 27.4522 10.3671 25.5837 6.92831 22.4783C6.65637 22.2327 6.90199 21.8993 7.22657 22.0923C10.946 24.2503 15.534 25.5574 20.2798 25.5574C23.4817 25.5574 26.9994 24.8907 30.2364 23.5222C30.7189 23.3029 31.1312 23.838 30.6575 24.1889Z" fill="#FF9900" />
        <path d="M31.8591 22.8205C31.4907 22.3467 29.4204 22.5924 28.4818 22.7064C28.2011 22.7415 28.1572 22.4959 28.4116 22.3117C30.0608 21.1537 32.7715 21.4871 33.0873 21.873C33.4031 22.2678 32.9996 24.9784 31.4556 26.2768C31.2188 26.4785 30.9907 26.3732 31.096 26.1101C31.4468 25.2416 32.2276 23.2854 31.8591 22.8205Z" fill="#FF9900" />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_107_152"><rect width="26.6679" height="26.6679" fill="white" transform="translate(6.66626 6.24951)" /></clipPath>
      <clipPath id="clip1_107_152"><rect width="26.6679" height="15.9656" fill="white" transform="translate(6.66602 11.583)" /></clipPath>
    </defs>
  </svg>
);

/* ================= MAIN COMPONENT ================= */

export default function Subscriptions() {
  return (
    <div className="w-full py-2" style={{ fontFamily: "'Rethink Sans', sans-serif" }}>
      {/* HEADER */}
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
          Subscriptions
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
          Manage all your active services and subscriptions
        </p>

      </div>

      {/* SEARCH + ACTIONS */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="flex items-center gap-2 px-3 h-[39px] border border-slate-200 rounded-lg bg-white flex-1 min-w-[280px] max-w-[448px]">
          <Search size={16} color="#828A96" />
          <input
            type="text"
            placeholder="Search subscriptions..."
            className="w-full h-full text-sm outline-none border-none placeholder:text-[#828A96]"
            style={{ fontFamily: "'Rethink Sans', sans-serif" }}
          />
        </div>

        <button className="flex items-center justify-center gap-2 px-4 h-[38px] border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
          <FilterIcon />
          <span className="text-sm font-medium" style={{ fontFamily: "'Rethink Sans', sans-serif" }}>Filter</span>
        </button>

        <button className="flex items-center justify-center gap-2 px-4 h-[38px] border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
          <ArrowUpDown size={16} color="#0F1729" />
          <span className="text-sm font-medium" style={{ fontFamily: "'Rethink Sans', sans-serif" }}>Sort</span>
        </button>
      </div>

      {/* CARDS GRID - FULLY RESPONSIVE */}
      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-5">
        {data.map((item) => (
          <SubscriptionCard key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
}

const PngIcon = ({ src, alt }) => (
  <div className="w-10 h-10 rounded-lg bg-[#F3F5F7] flex items-center justify-center flex-shrink-0">
    <img src={src} alt={alt} className="w-6 h-6 object-contain" />
  </div>
);

/* ================= CARD - FULLY RESPONSIVE ================= */

function SubscriptionCard({ name, plan, amount, billingDate, status }) {
  const renderIcon = () => {
    switch (name) {
      case "Amazon Web Services":
        return <AWSIcon />;
      case "GoDaddy":
        return <GoDaddyLogo />;
      case "Slack":
        return <SlackIcon />;
      case "Auth0":
        return <AuthOIcon />;
      case "Bunny CDN":
        return <PngIcon src={bunnyLogo} alt="Bunny CDN" />;
      case "Vimeo":
        return <PngIcon src={vimeoLogo} alt="Vimeo" />;
      case "GitHub":
        return <GithubIcon />;
      case "Adobe Creative Cloud":
        return <AdobeIcon />;
      case "Figma":
        return <FigmaIcon />;
      default:
        return (
          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
            <span className="text-slate-400 text-xs font-semibold">{name.charAt(0)}</span>
          </div>
        );
    }
  };

  return (
    <div 
      className="border border-slate-200 rounded-xl flex flex-col justify-between p-6 hover:shadow-md transition-shadow bg-white min-h-[179px]"
      style={{ fontFamily: "'Rethink Sans', sans-serif" }}
    >
      {/* TOP */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0 flex-1">
          {renderIcon()}
          <div className="min-w-0 flex-1">
            <p className="text-base leading-6 font-semibold text-[#0F1729] truncate">
              {name}
            </p>
            <p className="text-sm leading-5 font-normal text-[#828A96] truncate">
              {plan}
            </p>
          </div>
        </div>
        <StatusBadge status={status} />
      </div>

      {/* DIVIDER */}
      <div className="border-t border-slate-200 my-4" />

      {/* BOTTOM */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-2xl leading-8 font-bold text-[#0F1729]">
            ${amount}
          </p>
          <p className="text-xs leading-4 font-normal text-[#828A96]">
            per month
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs leading-4 font-normal text-[#828A96]">
            Next billing
          </p>
          <p className="text-sm leading-5 font-medium text-[#0F1729] whitespace-nowrap">
            {billingDate}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ================= STATUS BADGES ================= */

function StatusBadge({ status }) {
  const configs = {
    Active: {
      bg: "bg-green-50",
      text: "text-green-600",
      dot: "bg-green-600",
    },
    Pending: {
      bg: "bg-yellow-50",
      text: "text-yellow-600",
      dot: "bg-yellow-600",
    },
    Overdue: {
      bg: "bg-red-50",
      text: "text-red-600",
      dot: "bg-red-600",
    },
  };

  const config = configs[status] || configs.Active;

  return (
    <div
      className={`flex items-center gap-2 px-3 h-6 rounded-full ${config.bg} flex-shrink-0`}
      style={{ fontFamily: "'Rethink Sans', sans-serif" }}
    >
      <div className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
      <span className={`text-xs font-semibold ${config.text} whitespace-nowrap`}>{status}</span>
    </div>
  );
}

/* ================= MOCK DATA ================= */

const data = [
  {
    name: "Amazon Web Services",
    plan: "Enterprise",
    amount: "4,850",
    billingDate: "Feb 15, 2026",
    status: "Active",
  },
  {
    name: "GoDaddy",
    plan: "Ultimate",
    amount: "25",
    billingDate: "Aug 20, 2026",
    status: "Active",
  },
  {
    name: "Bunny CDN",
    plan: "Volume Network",
    amount: "189",
    billingDate: "Feb 5, 2026",
    status: "Active",
  },
  {
    name: "Vimeo",
    plan: "Enterprise",
    amount: "625",
    billingDate: "Jun 1, 2026",
    status: "Active",
  },
  {
    name: "Slack",
    plan: "Business+",
    amount: "1,250",
    billingDate: "Feb 10, 2026",
    status: "Active",
  },
  {
    name: "GitHub",
    plan: "Enterprise",
    amount: "2,100",
    billingDate: "Feb 8, 2026",
    status: "Active",
  },
  {
    name: "Adobe Creative Cloud",
    plan: "Pro",
    amount: "890",
    billingDate: "Feb 3, 2026",
    status: "Pending",
  },
  {
    name: "Auth0",
    plan: "Professional",
    amount: "450",
    billingDate: "Jan 28, 2026",
    status: "Overdue",
  },
  {
    name: "Figma",
    plan: "Organization",
    amount: "450",
    billingDate: "Nov 15, 2026",
    status: "Active",
  },
];