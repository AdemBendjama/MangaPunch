import { SVGProps } from "react";
const ChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      className={`${props.className}`}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="m10 22.5 6-6-6-6"
    />
  </svg>
);
export default ChevronRight;
