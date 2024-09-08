"use client";
import ProfileBackgroundImage from "@/components/image/profile-background-image";
import ProfileImage from "@/components/image/profile-image";
import CardSmall from "@/components/ui/card/card-small";
import FilterControls from "@/components/ui/filter-controls/filter-controls";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function Library() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return;
  }

  if (status === "unauthenticated") {
    router.replace("/auth/signin");
  }

  if (status === "authenticated") {
    return (
      <div className="text-foreground">
        <div className="h-[18.75rem] relative shadow-slide-inner-bg">
          <ProfileBackgroundImage />
          <ProfileImage username={session.user.name} />
        </div>
        <div className="dark:bg-background-secondary flex flex-col gap-[1rem] bg-background pt-[1rem] pb-[10rem] lg:mx-auto lg:w-[63rem] lg:px-[0] sm:px-[3rem] px-[1rem]">
          <div className="flex flex-col gap-[0.625rem]">
            <FilterControls />
            <div className="grid lg:grid-cols-[repeat(6,_150px)] md:grid-cols-[repeat(5,_16vw)] xs:grid-cols-[repeat(4,_20vw)] grid-cols-[repeat(3,_28vw)] gap-y-[0.625rem] justify-between items-stretch">
              <CardSmall
                hover={true}
                id={30013}
                coverImage="https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30013-ulXvn0lzWvsz.jpg"
                title="One Piece"
              />
              <CardSmall
                hover={true}
                id={30013}
                coverImage="https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30013-ulXvn0lzWvsz.jpg"
                title="One Piece"
              />
              <CardSmall
                hover={true}
                id={30013}
                coverImage="https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30013-ulXvn0lzWvsz.jpg"
                title="One Piece"
              />
              <CardSmall
                hover={true}
                id={30013}
                coverImage="https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30013-ulXvn0lzWvsz.jpg"
                title="One Piece"
              />
              <CardSmall
                hover={true}
                id={30013}
                coverImage="https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30013-ulXvn0lzWvsz.jpg"
                title="One Piece"
              />
              <CardSmall
                hover={true}
                id={30013}
                coverImage="https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30013-ulXvn0lzWvsz.jpg"
                title="One Piece"
              />
              <CardSmall
                hover={true}
                id={30013}
                coverImage="https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30013-ulXvn0lzWvsz.jpg"
                title="One Piece"
              />
              <CardSmall
                hover={true}
                id={30013}
                coverImage="https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30013-ulXvn0lzWvsz.jpg"
                title="One Piece"
              />
              <CardSmall
                hover={true}
                id={30013}
                coverImage="https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30013-ulXvn0lzWvsz.jpg"
                title="One Piece"
              />
              <CardSmall
                hover={true}
                id={30013}
                coverImage="https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30013-ulXvn0lzWvsz.jpg"
                title="One Piece"
              />
              <CardSmall
                hover={true}
                id={30013}
                coverImage="https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30013-ulXvn0lzWvsz.jpg"
                title="One Piece"
              />
              <CardSmall
                hover={true}
                id={30013}
                coverImage="https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx30013-ulXvn0lzWvsz.jpg"
                title="One Piece"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Library;
