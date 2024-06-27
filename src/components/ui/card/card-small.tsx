"use client";
import Image from "next/image";
import { Button } from "../button";
import ArrowRightIcon from "@/components/icons/arrow-right-icon";
import StarIcon from "@/components/icons/star-icon";
import Link from "next/link";
import { useState } from "react";
import { CardWithForm } from "../card-modal/card-modal";
import EllipsisIcon from "@/components/icons/ellipsis-icon";
import { useRouter } from "next/navigation";

function CardSmall({
  hover,
  coverImage,
  id,
  title,
}: {
  hover?: boolean;
  coverImage: string;
  id: number;
  title: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col gap-[0.5rem]">
      <div className="lg:h-[240px] md:h-[26vw] xs:h-[31vw] h-[45.5vw] rounded-[0.375rem] overflow-hidden relative">
        <Image
          src={coverImage}
          alt="cover image"
          fill={true}
          sizes="(min-width: 1024px) 150px, (min-width: 768px) 16vw,(min-width: 480px) 20vw, 28vw"
          className="object-cover lg:z-auto z-10 cursor-pointer"
          onClick={() => router.push(`/manga/${id}`)}
        />
        {hover && (
          <>
            <div
              className="absolute w-full h-full
                lg:hidden flex flex-col justify-between text-card-hover font-semibold"
            >
              <div
                className="z-20 sm:p-[0.25rem] p-[0.25rem] rounded-[0.375rem] 
              self-end bg-primary mt-[0.25rem] mr-[0.25rem] 
              shadow-menu-drop"
                onClick={handleEditClick}
              >
                <EllipsisIcon className="sm:w-[1.5rem] sm:h-[1.5rem] w-[1rem] h-[1rem] stroke-primary-foreground" />
              </div>
              <div className="z-20 bg-card-description flex justify-between items-center sm:p-[0.5rem] py-[0.375rem] px-[0.25rem]">
                <div className="flex gap-[0.125rem]">
                  <StarIcon className="w-[0.75rem] h-[0.75rem]" />
                  <div className="sm:text-[0.875rem] sm:leading-[0.875rem] sm:h-[0.875rem] text-[0.75rem] leading-[0.75rem] h-[0.75rem] mt-[0.0625rem] text-justify">
                    8
                  </div>
                </div>
                <div className="sm:text-[0.875rem] sm:leading-[0.875rem] sm:h-[0.875rem] text-[0.75rem] leading-[0.75rem] h-[0.75rem]">
                  1113/1150
                </div>
              </div>
            </div>
            <div
              className="absolute opacity-0 hover:lg:opacity-100
                lg:flex hidden flex-col justify-between w-full h-full
                p-[1rem] text-card-hover hover:lg:bg-black hover:lg:bg-opacity-65
                transition-all duration-200 ease-in-out"
            >
              <div className="flex flex-col items-center gap-[1rem] pt-[1rem] font-semibold">
                <div className="flex gap-[0.25rem]">
                  <StarIcon className="w-[1.75rem] h-[1.75rem]" />
                  <div className="text-[2rem] leading-[2rem] pt-[0.125rem] text-justify">
                    8
                  </div>
                </div>
                <div className="text-[1.375rem] leading-[1.375rem]">5/160</div>
              </div>
              <div className="flex gap-[0.5rem] h-[2rem]">
                <Button
                  className="w-2/3 h-full border-2 border-card-hover font-bold"
                  variant="ghost"
                  onClick={handleEditClick}
                >
                  Edit
                </Button>
                <Button
                  className="w-1/3 h-full p-[0.5rem] border-2 border-card-hover"
                  variant="ghost"
                >
                  <Link href={`/manga/${id}`}>
                    <ArrowRightIcon className="stroke-card-hover w-[1rem] h-[1rem]" />
                  </Link>
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
      <Link href={`/manga/${id}`}>
        <span className="font-semibold sm:text-sm text-xs sm:min-h-[2.5rem] min-h-[2rem] text-muted-foreground w-full overflow-hidden text-ellipsis line-clamp-2">
          {title}
        </span>
      </Link>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default CardSmall;

const Modal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <div
      className={`${!isOpen ? "hidden opacity-0" : "opacity-100"}
        transition-all duration-1000 ease-in-out 
        fixed w-screen min-h-screen inset-0 
        flex items-center justify-center z-50`}
    >
      <CardWithForm onClose={onClose} />
      <div
        className="fixed inset-0 bg-black opacity-50 -z-10"
        onClick={onClose}
      />
    </div>
  );
};
