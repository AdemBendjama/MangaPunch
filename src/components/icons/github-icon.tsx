import { SVGProps } from "react";
const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M27.5 38.5v-7.333a8.8 8.8 0 0 0-1.833-6.417c5.5 0 11-3.666 11-10.083a9.905 9.905 0 0 0-1.834-6.417 13.559 13.559 0 0 0 0-6.417s-1.833 0-5.5 2.75a39.454 39.454 0 0 0-14.666 0c-3.667-2.75-5.5-2.75-5.5-2.75a12.683 12.683 0 0 0 0 6.417 9.905 9.905 0 0 0-1.834 6.417c0 6.417 5.5 10.083 11 10.083a8.645 8.645 0 0 0-1.558 3.025 8.824 8.824 0 0 0-.275 3.392V38.5"
    />
    <path
      className={`${props.className}`}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M16.5 31.167C8.232 34.833 7.333 27.5 3.667 27.5"
    />
  </svg>
);
export default GithubIcon;
