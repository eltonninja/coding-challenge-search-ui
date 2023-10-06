import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import clsx from "clsx";

type ButtonVariantType = "primary" | "secondary" | "tertiary";
type SearchButtonProps = PropsWithChildren<
  Partial<ButtonHTMLAttributes<HTMLButtonElement>> & {
    variant: ButtonVariantType;
  }
>;
export const Button = ({ onClick, variant, className, children, ...others }: SearchButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx([
        className,
        "px-4 rounded-r-md",
        { "bg-blue-500 text-white": variant === "primary" },
        { "bg-blue-600 text-white": variant === "secondary" },
        { "bg-blue-700 text-white": variant === "tertiary" },
      ])}
      {...others}
    >
      {children}
    </button>
  );
};
