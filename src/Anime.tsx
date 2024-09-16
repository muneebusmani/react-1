import { CardImage } from "./CardImage";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./components/ui/card";

interface AnimeProps {
  image: string;
  title: string;
  description: string;
}
export const Anime: React.FC<AnimeProps> = (props) => {
  return (
    <Card className="w-auto h-full">
      <CardHeader className="p-0 text-center">
        <CardImage src={props.image}></CardImage>
        <CardTitle className="px-6 pt-3">{props.title}</CardTitle>
        <CardDescription className="px-6 pb-6">
          {props.description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
