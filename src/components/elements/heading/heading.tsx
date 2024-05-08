import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingFontSize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";

interface HeadingProps {
  id?: string;
  as?: HeadingType;
  className?: string;
  size?: HeadingFontSize;
}

const FONT_SIZES: { [key in HeadingFontSize]: string } = {
  sm: "text-base",
  md: "text-lg",
  lg: "text-xl",
  xl: "text-2xl",
  "2xl": "text-[32px] leading-none",
  "3xl": "text-4xl",
};

export default function Heading(props: PropsWithChildren<HeadingProps>) {
  const { children, as = "h2", className, size = "md", ...otherProps } = props;

  const fontSize = FONT_SIZES[size];

  const classNames = twMerge("font-bold tracking-normal", fontSize, className);

  switch (as) {
    case "h1":
      return (
        <h1 {...otherProps} className={classNames}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 {...otherProps} className={classNames}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 {...otherProps} className={classNames}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 {...otherProps} className={classNames}>
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5 {...otherProps} className={classNames}>
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6 {...otherProps} className={classNames}>
          {children}
        </h6>
      );
    default:
      throw new Error("Invalid heading level type");
  }
}
