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
    <>
      <Card>
        <CardHeader>
          <CardImage src={props.image}></CardImage>
          <CardTitle>{props.title}</CardTitle>
          <CardDescription>{props.description}</CardDescription>
        </CardHeader>
      </Card>
    </>
  );
};
