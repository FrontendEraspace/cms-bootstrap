import { forwardRef, HTMLProps, ReactElement, ReactNode } from "react";

interface Props extends HTMLProps<HTMLDivElement> {
  children?: ReactNode | ReactElement | ReactElement[];
  as?: "div" | "span";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Box(props: Props, ref: any) {
  const { children, as = "div", ...otherProps } = props;

  if (as === "span")
    return (
      <span ref={ref} {...otherProps}>
        {children}
      </span>
    );

  return (
    <div {...otherProps} ref={ref}>
      {children}
    </div>
  );
}

export default forwardRef(Box);
