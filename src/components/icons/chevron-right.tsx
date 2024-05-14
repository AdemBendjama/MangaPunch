import { SVGProps } from "react";
const ChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={3}
    className="lucide lucide-chevron-right"
    width={props.width} // Adjust width based on props
    height={props.height} // Adjust height based on props
    viewBox="0 0 24 24" // Set viewBox for scaling
    {...props}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);
export default ChevronRight;
