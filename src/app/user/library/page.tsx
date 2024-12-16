"use client";
import ProfileBackgroundImage from "@/components/image/profile-background-image";
import ProfileImage from "@/components/image/profile-image";
import SortOptions from "@/components/ui/filter-controls/sort-options";
import MangaManager from "@/components/ui/manga-manager/manga-manager";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GET_MANGA_IDS } from "@/lib/queries";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export type LibraryData = {
  id: number;
  status: "planning" | "reading" | "completed";
  chapter: number;
  rating: number;
};
const data: LibraryData[] = [
  { id: 30000, status: "planning", chapter: 125, rating: 7 },
  { id: 30001, status: "reading", chapter: 78, rating: 8 },
  { id: 30002, status: "completed", chapter: 200, rating: 9 },
  { id: 30003, status: "planning", chapter: 54, rating: 5 },
  { id: 30004, status: "reading", chapter: 30, rating: 6 },
  { id: 30005, status: "completed", chapter: 150, rating: 10 },
  { id: 30006, status: "planning", chapter: 60, rating: 4 },
  { id: 30007, status: "reading", chapter: 112, rating: 8 },
  { id: 30008, status: "completed", chapter: 95, rating: 7 },
  { id: 30009, status: "planning", chapter: 41, rating: 6 },
  { id: 30010, status: "reading", chapter: 89, rating: 9 },
  { id: 30011, status: "completed", chapter: 210, rating: 8 },
  { id: 30012, status: "planning", chapter: 72, rating: 5 },
  { id: 30013, status: "reading", chapter: 34, rating: 6 },
  { id: 30014, status: "completed", chapter: 140, rating: 10 },
  { id: 30015, status: "planning", chapter: 80, rating: 4 },
  { id: 30016, status: "reading", chapter: 56, rating: 7 },
  { id: 30017, status: "completed", chapter: 175, rating: 9 },
  { id: 30018, status: "planning", chapter: 90, rating: 6 },
  { id: 30019, status: "reading", chapter: 20, rating: 5 },
  { id: 30020, status: "completed", chapter: 190, rating: 10 },
  { id: 30021, status: "planning", chapter: 85, rating: 8 },
  { id: 30022, status: "reading", chapter: 65, rating: 7 },
  { id: 30023, status: "completed", chapter: 115, rating: 9 },
  { id: 30024, status: "planning", chapter: 47, rating: 5 },
  { id: 30025, status: "reading", chapter: 132, rating: 8 },
  { id: 30026, status: "completed", chapter: 220, rating: 10 },
  { id: 30027, status: "planning", chapter: 53, rating: 4 },
  { id: 30028, status: "reading", chapter: 76, rating: 7 },
  { id: 30029, status: "completed", chapter: 160, rating: 9 },
  { id: 30030, status: "planning", chapter: 67, rating: 6 },
  { id: 30031, status: "reading", chapter: 99, rating: 8 },
  { id: 30032, status: "completed", chapter: 180, rating: 10 },
  { id: 30033, status: "planning", chapter: 73, rating: 5 },
  { id: 30034, status: "reading", chapter: 38, rating: 6 },
  { id: 30035, status: "completed", chapter: 110, rating: 9 },
  { id: 30036, status: "planning", chapter: 61, rating: 4 },
  { id: 30037, status: "reading", chapter: 84, rating: 7 },
  { id: 30038, status: "completed", chapter: 135, rating: 10 },
  { id: 30039, status: "planning", chapter: 48, rating: 6 },
  { id: 30040, status: "reading", chapter: 77, rating: 9 },
  { id: 30041, status: "completed", chapter: 145, rating: 8 },
  { id: 30042, status: "planning", chapter: 92, rating: 5 },
  { id: 30043, status: "reading", chapter: 44, rating: 6 },
  { id: 30044, status: "completed", chapter: 170, rating: 10 },
  { id: 30045, status: "planning", chapter: 36, rating: 4 },
  { id: 30046, status: "reading", chapter: 118, rating: 8 },
  { id: 30047, status: "completed", chapter: 195, rating: 9 },
  { id: 30048, status: "planning", chapter: 83, rating: 6 },
  { id: 30049, status: "reading", chapter: 71, rating: 7 },
  { id: 30050, status: "completed", chapter: 125, rating: 9 },
];

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
            <Tabs defaultValue="all">
              <div className="flex items-center justify-between mb-6">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="reading">Reading</TabsTrigger>
                  <TabsTrigger value="planning">Planning</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                <SortOptions />
              </div>
              <TabsContent value="all">
                <div className="grid lg:grid-cols-[repeat(6,_150px)] md:grid-cols-[repeat(5,_16vw)] xs:grid-cols-[repeat(4,_20vw)] grid-cols-[repeat(3,_28vw)] gap-y-[0.625rem] justify-between items-stretch">
                  <MangaManager
                    query={GET_MANGA_IDS}
                    perPage={18}
                    variables={{
                      ids: data.map((item) => item.id),
                    }}
                    data={data}
                    cardType="small"
                    hover
                    infiniteScroll
                  />
                </div>
              </TabsContent>
              <TabsContent value="reading">
                <div className="grid lg:grid-cols-[repeat(6,_150px)] md:grid-cols-[repeat(5,_16vw)] xs:grid-cols-[repeat(4,_20vw)] grid-cols-[repeat(3,_28vw)] gap-y-[0.625rem] justify-between items-stretch">
                  <MangaManager
                    query={GET_MANGA_IDS}
                    perPage={18}
                    variables={{
                      ids: data
                        .filter((item) => item.status === "reading")
                        .map((item) => item.id),
                    }}
                    data={data}
                    cardType="small"
                    hover
                    infiniteScroll
                  />
                </div>
              </TabsContent>
              <TabsContent value="planning">
                <div className="grid lg:grid-cols-[repeat(6,_150px)] md:grid-cols-[repeat(5,_16vw)] xs:grid-cols-[repeat(4,_20vw)] grid-cols-[repeat(3,_28vw)] gap-y-[0.625rem] justify-between items-stretch">
                  <MangaManager
                    query={GET_MANGA_IDS}
                    perPage={18}
                    variables={{
                      ids: data
                        .filter((item) => item.status === "planning")
                        .map((item) => item.id),
                    }}
                    data={data}
                    cardType="small"
                    hover
                    infiniteScroll
                  />
                </div>
              </TabsContent>
              <TabsContent value="completed">
                <div className="grid lg:grid-cols-[repeat(6,_150px)] md:grid-cols-[repeat(5,_16vw)] xs:grid-cols-[repeat(4,_20vw)] grid-cols-[repeat(3,_28vw)] gap-y-[0.625rem] justify-between items-stretch">
                  <MangaManager
                    query={GET_MANGA_IDS}
                    perPage={18}
                    variables={{
                      ids: data
                        .filter((item) => item.status === "completed")
                        .map((item) => item.id),
                    }}
                    data={data}
                    cardType="small"
                    hover
                    infiniteScroll
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default Library;
