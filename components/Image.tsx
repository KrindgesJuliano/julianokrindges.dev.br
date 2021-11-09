import Image, { ImageProps } from "next/image";

interface Loader {
  src: string;
  width: number;
  quality?: number;
}

const cloudflareImageLoader = ({ src, width, quality }: Loader) => {
  if (!quality) {
    quality = 75;
  }
  return `${src}`;
};

export default function Img(props: ImageProps) {
  if (process.env.NODE_ENV === "development") {
    return <Image unoptimized={true} {...props} />;
  } else {
    return <Image {...props} loader={cloudflareImageLoader} />;
  }
}
