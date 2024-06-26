import CardRegularLoading from "../card/card-regular-loading";
import CardLargeLoading from "../card/card-large-loading";
import CardSmallLoading from "../card/card-small-loading";
function MangaLoading({
  perPage,
  cardType,
}: {
  perPage: number;
  cardType: "large" | "regular" | "small";
}) {
  return (
    <>
      {Array.from({ length: perPage }).map((_, index) => {
        switch (cardType) {
          case "large":
            return <CardLargeLoading key={index} />;
          case "regular":
            return <CardRegularLoading key={index} />;
          case "small":
            return <CardSmallLoading key={index} />;
        }
      })}
    </>
  );
}

export default MangaLoading;
