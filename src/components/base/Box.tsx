import { HTMLAttributes, PropsWithChildren } from "react";

type BoxProps = PropsWithChildren<Partial<HTMLAttributes<HTMLDivElement>>>;

export const Box = ({ className, children, ...others }: BoxProps) => {
  return (
    <div className={className} {...others}>
      {children}
    </div>
  );
};
