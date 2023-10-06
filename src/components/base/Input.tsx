import { InputHTMLAttributes } from "react";

type InputProps = Partial<InputHTMLAttributes<HTMLInputElement>> & {
  value: string;
};
export const Input = ({
  value,
  onChange,
  onKeyDown,
  ...others
}: InputProps) => {
  return (
    <input
      type="text"
      placeholder="Search for financial topics..."
      className="flex-grow p-2 border rounded-l-md focus:outline-none focus:border-blue-100"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      {...others}
    />
  );
};
