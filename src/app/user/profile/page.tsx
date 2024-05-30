import Image from "next/image";

function UserProfilePage() {
  return (
    <>
      <div className="h-[18.75rem] relative shadow-slide-inner-bg">
        <Image
          src="https://drive.usercontent.google.com/download?id=1dQbU-UtYOcZxMQG6a0En4zc28EHdvUHh&authuser=0"
          alt="profile background page"
          fill={true}
          className="object-cover -z-10"
        />
        <div className="h-full ml-[7.5rem] flex items-end">
          <div className="w-[13rem] h-[13rem] relative">
            <Image
              src="/assets/images/footer.png"
              alt="footer image"
              fill={true}
              className="object-contain"
            />
          </div>
          <span className="font-bold text-3xl pb-[1rem]">@Nader2020</span>
        </div>
      </div>
    </>
  );
}

export default UserProfilePage;
