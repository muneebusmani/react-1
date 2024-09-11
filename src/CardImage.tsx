interface ImageProps {
  src: string;
  className?: string;
}
export const CardImage: React.FC<ImageProps> = (props) => {
  return (
    <>
      <img
        src={props.src}
        className={`w-full h-auto object-contain ${props.className}`}
      />
    </>
  );
};
