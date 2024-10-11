import React, { ReactElement, ReactNode } from "react";

export const findChild = <TComp = ReactElement>(
  children: ReactNode | ReactNode[],
  comp: unknown
): TComp | undefined => {
  return React.Children.toArray(children).find(
    (child): child is ReactElement => {
      return React.isValidElement(child) && child.type === comp;
    }
  ) as TComp | undefined;
};
