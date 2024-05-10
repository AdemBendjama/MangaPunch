import { NextArrowIcon } from "@/components/icons/next-arrow-icon";
import { PrevArrowIcon } from "@/components/icons/prev-arrow-icon";

interface arrowProps {
  className?: string;
  type: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

function SlideArrow({ className, type, onClick, style }: arrowProps) {
  const arrow =
    (type === "next" && (
      <div className="absolute right-5 top-1/2" onClick={onClick}>
        <NextArrowIcon />
      </div>
    )) ||
    (type === "prev" && (
      <div className="absolute left-5 top-1/2 z-10" onClick={onClick}>
        <PrevArrowIcon />
      </div>
    ));
  return arrow;
}

export default SlideArrow;
