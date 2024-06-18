import Image from "next/image";
function ProfileBackgroundImage() {
  return (
    <Image
      src="https://drive.usercontent.google.com/download?id=1dQbU-UtYOcZxMQG6a0En4zc28EHdvUHh&authuser=0"
      alt="profile background page"
      width={1920}
      height={300}
      className="object-cover object-profile absolute w-full h-full -z-10"
    />
  );
}

export default ProfileBackgroundImage;
