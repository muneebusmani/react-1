import { Anime } from "./Anime";
import AnimeList from "./animecollection.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./components/ui/carousel";

export const App = () => {
  return (
    <>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-[10]">
            <Anime
              image={AnimeList[0].image}
              title={AnimeList[0].title}
              description={AnimeList[0].description}
            ></Anime>
          </CarouselItem>
          <CarouselItem className="basis-[10]">
            <Anime
              image={AnimeList[1].image}
              title={AnimeList[1].title}
              description={AnimeList[1].description}
            ></Anime>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </>
  );
};
