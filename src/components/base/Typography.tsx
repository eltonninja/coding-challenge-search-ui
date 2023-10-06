import { PropsWithChildren } from "react";

type TypographyProps = PropsWithChildren & {
  component: keyof JSX.IntrinsicElements;
  className?: string;
};

export const Typography = ({
  component,
  children,
  className,
}: TypographyProps) => {
  const Component = component;
  return <Component className={className}>{children}</Component>;
};
