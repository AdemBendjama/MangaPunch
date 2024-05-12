import { SVGProps } from "react";
const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={43}
    height={44}
    fill="none"
    {...props}
  >
    <path
      className={`${props.className}`}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M28.667 14.666c2.85 0 5.585 1.16 7.601 3.222a11.131 11.131 0 0 1 3.149 7.778V38.5H32.25V25.666a3.71 3.71 0 0 0-1.05-2.592A3.542 3.542 0 0 0 28.668 22c-.95 0-1.862.386-2.534 1.074a3.71 3.71 0 0 0-1.05 2.592V38.5h-7.166V25.666c0-2.917 1.132-5.715 3.148-7.778a10.628 10.628 0 0 1 7.602-3.222ZM10.75 16.5H3.583v22h7.167v-22ZM7.167 11c1.979 0 3.583-1.642 3.583-3.667S9.146 3.666 7.167 3.666c-1.98 0-3.584 1.642-3.584 3.667S5.188 11 7.167 11Z"
    />
  </svg>
);
export default LinkedinIcon;
