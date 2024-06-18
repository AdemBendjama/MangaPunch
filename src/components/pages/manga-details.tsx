import MangaBackgroundImage from "../image/manga-background-image";
import MangaMetaData from "../ui/manga-details/manga-meta-data";
import MangaSection from "../ui/manga-details/manga-section";

function MangaDetails() {
  return (
    <div className="text-foreground">
      <MangaBackgroundImage />
      <MangaMetaData />
      <MangaSection />
    </div>
  );
}

export default MangaDetails;
