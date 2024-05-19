/* eslint-disable react/prop-types */
import { Image } from "@nextui-org/react";

const NextImage = ({
  className = "",
  alt = "Image not found",
  src,
  ...rest
}) => {
  return (
    <Image
      {...rest}
      className={`opacity-100 z-0 ${className || "w-[50px] rounded-md h-auto"}`}
      alt={alt}
      src={
        src ||
        "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
      }
    />
  );
};

export default NextImage;
