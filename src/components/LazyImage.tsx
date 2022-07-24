import { Image } from "@chakra-ui/react";

type LazyImageProps = {
  src: string;
  width?: number | string;
  height?: number | string;
  rounded?: string;
};

const LazyImage = (props: LazyImageProps) => {
  const { src, width, height, rounded } = props;

  return (
    <Image
      src={src}
      objectFit="contain"
      alt="cover image"
      width={width}
      height={height}
      rounded={rounded}
      loading="lazy"
    />
  );
};

export default LazyImage;
