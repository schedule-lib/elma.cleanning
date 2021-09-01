/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/require-default-props */
import Image, { ImageProps } from "next/image";
import { forwardRef } from "react";

interface IMyAnchorToLogoProps extends ImageProps {}

const MyAnchorToLogo = forwardRef<HTMLAnchorElement, ImageProps>(
  ({ alt, ...props }: IMyAnchorToLogoProps, ref) => {
    return (
      <a ref={ref}>
        <Image {...props} alt={alt} />
      </a>
    );
  }
);

MyAnchorToLogo.displayName = "MyAnchorToLogo";

export { MyAnchorToLogo };
