import { SVGProps } from "react";
const MailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={44}
    fill="none"
    {...props}
  >
    <path
      className={`${props.className}`}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M36.667 9.166H7.333a3.667 3.667 0 0 0-3.666 3.667v22A3.667 3.667 0 0 0 7.333 38.5h29.334a3.667 3.667 0 0 0 3.666-3.667v-22a3.667 3.667 0 0 0-3.666-3.667Z"
    />
    <path
      className={`${props.className}`}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="m40.333 14.666-16.445 10.45a3.557 3.557 0 0 1-3.776 0L3.667 14.666"
    />
  </svg>
);
export default MailIcon;
