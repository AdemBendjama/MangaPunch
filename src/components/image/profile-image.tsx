import Image from "next/image";
function ProfileImage() {
  return (
    <div className="h-full sm:ml-[7.5rem] ml-[0.5rem] sm:mr-0 mr-[0.5rem] flex items-end">
      <div className="sm:min-w-[13rem] sm:min-h-[13rem] xs:min-w-[10rem] xs:min-h-[10rem] min-w-[7rem] min-h-[7rem] relative">
        <Image
          src="/assets/images/footer.png"
          alt="footer image"
          fill={true}
          unoptimized={true}
          className="object-contain"
        />
      </div>
      <span className="font-bold sm:text-3xl xs:text-lg text-base sm:pb-[1rem] pb-[0.5rem] text-white dark:text-foreground overflow-hidden">
        @PoliceISwearToGod
      </span>
    </div>
  );
}

export default ProfileImage;
