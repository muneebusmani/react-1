import { NavBar } from "@/components/custom/Nav/NavBar";
import { AnimeCarousel } from "@/components/custom/Carousel/AnimeCarousel";
import AnimeList from "@/animecollection.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
interface ListInterFace {
  image: string;
  title: string;
  description: string;
  content: string;
  footer_url: string;
}
export const App = () => {
  return (
    <>
      <NavBar />
      <Carousel>
        <CarouselContent>
          {AnimeList.map((list: ListInterFace) => (
            <CarouselItem className="basis-1/6">
              <AnimeCarousel
                image={list.image}
                title={list.title}
                description={list.description}
              ></AnimeCarousel>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};
