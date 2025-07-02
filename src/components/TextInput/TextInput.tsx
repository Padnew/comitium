import clsx from "clsx";

type TextInputProps = React.ButtonHTMLAttributes<HTMLInputElement> & {
  variant?: "default" | "sensitive";
};

export const TextInput: React.FC<TextInputProps> = ({
  variant = "default",
  className,
  children,
  ...props
}) => {
  const base =
    "px-4 py-2 rounded font-medium transition-colors border border-radius-2px";
  const variants = {
    default: "bg-grey-300 text-black focus:bg-grey-200",
    sensitive: "bg-grey-300 text-black focus:bg-grey-200",
  };

  return (
    <input
      type={variant == "sensitive" ? "password" : "text"}
      className={clsx(base, variants[variant], className)}
      {...props}
    />
  );
};
