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
    <>
      <Card>
        <CardHeader>
          <CardImage src={props.image}></CardImage>
          <CardTitle>{props.title}</CardTitle>
          <CardDescription>{props.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            {props.content}
            Torako Koshi is the epitome of perfection. With her peerless beauty,
            top-notch grades, and position as student council president, her
            popularity in school is unrivaled. However, she harbors a dark
            secret—she was a delinquent back in middle school—and this is
            something she conceals to the best of her abilities. Unfortunately,
            when she meets the mysterious deer girl Noko Shikanoko, Torako's
            hidden shame is constantly on the precipice of being exposed due to
            Shikanoko's rather weird antics. To maintain the reputation she
            worked so hard for, Torako must go along with Shikanoko's whims,
            even going so far as to become president of the newly established
            Deer Club. All her efforts will be rewarded if she can prevent the
            menacing doe from accidentally blurting out damaging details about
            her personal history that will undoubtedly unleash Torako's greatest
            nightmare.
          </p>
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
    </>
  );
};
