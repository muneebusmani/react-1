import { Anime } from "./Anime";
import AnimeList from "./animecollection.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./components/ui/carousel";
import { NavBar } from "./NavBar";

export const App = () => {
  return (
    <>
      <NavBar />
      <Carousel>
        <CarouselContent>
          {AnimeList.map((list) => (
            <CarouselItem className="basis-1/6">
              <Anime
                image={list.image}
                title={list.title}
                description={list.description}
              ></Anime>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};
