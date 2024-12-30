"use client";
import SortOptions from "@/components/ui/filter-controls/sort-options";
import MangaManager from "@/components/ui/manga-manager/manga-manager";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GET_MANGA_IDS } from "@/lib/queries";
import { useQuery } from "@tanstack/react-query";
import { fetchLibrary } from "@/actions/library_actions";
import { Loader2 } from "lucide-react";

function LibraryDashboard() {
  const {
    data: libraryData,
    isLoading,
    isFetching,
    error,
  } = useQuery({
    queryKey: ["library"],
    queryFn: () => fetchLibrary(),
  });

  if (isLoading || isFetching)
    return (
      <div className="flex w-full py-20 items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  if (error || !libraryData) return;
  return (
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
                  ids: libraryData.map((item) => item.id),
                }}
                data={libraryData}
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
                  ids: libraryData
                    .filter((item) => item.status === "reading")
                    .map((item) => item.id),
                }}
                data={libraryData}
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
                  ids: libraryData
                    .filter((item) => item.status === "planning")
                    .map((item) => item.id),
                }}
                data={libraryData}
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
                  ids: libraryData
                    .filter((item) => item.status === "completed")
                    .map((item) => item.id),
                }}
                data={libraryData}
                cardType="small"
                hover
                infiniteScroll
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default LibraryDashboard;
