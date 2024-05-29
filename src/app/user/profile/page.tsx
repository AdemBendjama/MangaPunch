import Image from "next/image";

function UserProfilePage() {
  return (
    <>
      <div className="h-[18.75rem] relative">
        <Image
          src="https://drive.usercontent.google.com/download?id=1dQbU-UtYOcZxMQG6a0En4zc28EHdvUHh&authuser=0"
          alt="profile background page"
          fill={true}
          className="object-cover"
        />
      </div>
    </>
  );
}

export default UserProfilePage;
