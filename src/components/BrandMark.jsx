export const BrandMark = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-label="ZD logo"
      role="img"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="brandMarkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#20b2a6" />
          <stop offset="100%" stopColor="#0f766e" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="18" fill="url(#brandMarkGradient)" />
      <text
        x="50%"
        y="56%"
        textAnchor="middle"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="24"
        fontWeight="800"
        fill="#ffffff"
      >
        ZD.
      </text>
    </svg>
  );
};