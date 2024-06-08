import { SVGProps } from "react";
const SortIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 18 18"
    fill="none"
    stroke="currentColor"
    {...props}
  >
    <path
      fill="currentColor"
      d="m8 1 5.196 5.25H2.804L8 1ZM8 14 2.804 8.75h10.392L8 14Z"
    />
  </svg>
);
export default SortIcon;
