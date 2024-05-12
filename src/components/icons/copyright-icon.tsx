import { SVGProps } from "react";
const CopyrightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={14}
    fill="none"
    {...props}
  >
    <g
      className={`${props.className}`}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <path d="M7.5 12.833a5.833 5.833 0 1 0 0-11.666 5.833 5.833 0 0 0 0 11.666Z" />
      <path d="M9.25 5.456a2.333 2.333 0 1 0 0 3.087" />
    </g>
  </svg>
);
export default CopyrightIcon;
