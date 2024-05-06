const MoonIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      className={`${props.className}`}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"
    />
  </svg>
);
export default MoonIcon;
