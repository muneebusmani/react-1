interface ImageProps {
  src: string;
}
export const CardImage: React.FC<ImageProps> = (props) => {
  return (
    <>
      <img src={props.src} className="w-[16%]" />
    </>
  );
};
