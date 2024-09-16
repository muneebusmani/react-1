import { CardImage } from "./CardImage";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./components/ui/card";

interface AnimeFullProps {
  image: string;
  title: string;
  description: string;
  content: string;
  footer_url: string;
}
export const Anime: React.FC<AnimeFullProps> = (props) => {
  return (
    <Card className="w-auto h-full">
      <CardHeader className="p-0 text-center">
        <CardImage src={props.image}></CardImage>
        <CardTitle className="px-6 pt-3">{props.title}</CardTitle>
        <CardDescription className="px-6 pb-6">
          {props.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{props.content}</p>
      </CardContent>
      <CardFooter>
        <iframe
          width="420"
          height="236"
          className="border-0"
          // src="https://www.youtube.com/embed/kgM53bfd_L0?si=5O1yxwNb-mJfsudC"
          src={props.footer_url}
          title="YouTube video player"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </CardFooter>
    </Card>
  );
};
