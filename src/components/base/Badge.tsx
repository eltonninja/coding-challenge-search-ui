type BadgeProps = {
  label: string;
  className?: string;
};
export const Badge = ({ label, className }: BadgeProps) => {
  return (
    <span
      className={`mt-2 inline-block bg-gray-200 text-gray-800 text-xs px-2 rounded-full ${
        className || ""
      }`}
    >
      {label}
    </span>
  );
};
