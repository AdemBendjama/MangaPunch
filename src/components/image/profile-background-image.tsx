import Image from "next/image";
function ProfileBackgroundImage() {
  return (
    <Image
      src="/assets/images/profile.jpg"
      alt="profile background page"
      width={1920}
      height={300}
      unoptimized={true}
      className="object-cover object-profile absolute w-full h-full -z-10"
    />
  );
}

export default ProfileBackgroundImage;
