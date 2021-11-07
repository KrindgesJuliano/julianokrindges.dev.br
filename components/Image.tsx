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
  return `https://imagesnext.pixel13image.workers.dev?width=${width}&quality=${quality}&image=https://julianokrindges.dev.br${src}`;
};

export default function Img({ src, alt, width, height, layout }: ImageProps) {
  const props = { src, alt, width, height, layout };
  if (process.env.NODE_ENV === "development") {
    return <Image unoptimized={true} {...props} />;
  } else {
    return <Image {...props} loader={cloudflareImageLoader} />;
  }
}