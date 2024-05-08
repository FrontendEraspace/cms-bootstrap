import { HTMLProps, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface FlexProps extends HTMLProps<HTMLDivElement> {
  dir?: "column" | "row";
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  items?: "start" | "end" | "center" | "stretch";
  justify?: "start" | "end" | "center" | "between" | "around" | "evenly";
  className?: string;
}

export default function Flex(props: PropsWithChildren<FlexProps>) {
  const { dir = "row", className, gap, items, justify, children, ...otherProps } = props;

  const flexGap = gap ? `gap-${gap}` : undefined;
  const alignItems = items && `items-${items}`;
  const justifyContent = justify && `justify-${justify}`;

  return (
    <div
      className={twMerge(
        "flex",
        flexGap,
        alignItems,
        justifyContent,
        dir === "row" ? "flex-row" : "flex-col",
        className
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
}
