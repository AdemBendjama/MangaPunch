import { ArrowIcon } from "@/components/icons/arrow-icon";

interface arrowProps {
  className?: string;
  type: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  slide: string;
}

function SlideArrow({ className, type, onClick, style, slide }: arrowProps) {
  let nextClassName = "";
  let prevClassName = "";
  if (slide === "slideShow") {
    nextClassName = "absolute right-3 top-[45%]";
    prevClassName = "absolute left-2 top-[45%] z-10";
  } else if (slide === "slideCategory") {
    nextClassName =
      "absolute lg:right-[-6vw] sm:right-[-8vw] right-[-8vw] lg:top-[10vw] sm:top-[12vw] top-[24vw]";
    prevClassName =
      "absolute lg:left-[-6vw] sm:left-[-8vw] left-[-8vw] lg:top-[10vw] sm:top-[12vw] top-[24vw] z-10";
  }

  let disabled = "";
  if (className !== undefined) {
    const classes = className.split(" ");

    // Check if the third class exists
    const hasThirdClass = classes.length >= 3 && classes[2] !== "";
    disabled = hasThirdClass
      ? "opacity-0 transition-all duration-300 ease-in-out -z-10"
      : "opacity-100 transition-all duration-300 ease-in-out";
  }

  const arrow =
    (type === "next" && (
      <div className={`${nextClassName} ${disabled} z-`} onClick={onClick}>
        <ArrowIcon type={type} />
      </div>
    )) ||
    (type === "prev" && (
      <div className={`${prevClassName} ${disabled}`} onClick={onClick}>
        <ArrowIcon type={type} />
      </div>
    ));
  return arrow;
}

export default SlideArrow;
