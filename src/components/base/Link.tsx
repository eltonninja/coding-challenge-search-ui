import { PropsWithChildren, AnchorHTMLAttributes } from "react";

type LinkProps = PropsWithChildren<
  Partial<AnchorHTMLAttributes<HTMLAnchorElement>> & {
    href: string;
  }
>;

export const Link = ({ href, children, ...others }: LinkProps) => {
  return (
    <a
      href={href}
      {...others}
    >
      {children}
    </a>
  );
};

Link.defaultProps = {
  target: "_blank",
  rel: "noopener noreferrer",
};
