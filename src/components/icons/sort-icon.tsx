import { SVGProps } from "react";
const SortIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    {...props}
  >
    <path fill="currentColor" d="m8 1 5 5H3l5-5ZM8 15l-5-5h10l-5 5Z" />
  </svg>
);
export default SortIcon;
