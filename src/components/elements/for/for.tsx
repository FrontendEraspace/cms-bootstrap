import { ReactNode } from "react";

type ForProps<T> = {
  each: T[];
  children: (item: T, index: number) => ReactNode;
};

function For<T>(props: ForProps<T>) {
  const { each, children } = props;
  return each.map((value, index) => children(value, index));
}

export default For;
