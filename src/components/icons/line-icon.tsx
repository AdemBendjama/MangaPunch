import { SVGProps } from "react";
const LineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 153 3"
    fill="none"
    {...props}
  >
    <path className={`${props.className}`} strokeWidth={2} d="M.5 1h150" />
  </svg>
);
export default LineIcon;
