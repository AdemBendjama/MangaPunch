import { SVGProps } from "react";
const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 17"
    width={props.width}
    height={props.height}
    fill="none"
    {...props}
  >
    <path
      className={props.className}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 8.166h13M10 3.5l4.667 4.667L10 12.833"
    />
  </svg>
);
export default ArrowRightIcon;
