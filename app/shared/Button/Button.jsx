"use client";

import clsx from "clsx";
import Spinner from "../Spinner/Spinner";

const variants = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300",
  danger: "bg-red-500 text-white hover:bg-red-600",
  outline: "border border-gray-300 text-gray-600 hover:bg-gray-100",
};

const sizes = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};

const Button = ({
  children,
  type = "button",
  onClick,
  disabled = false,
  loading = false,
  variant = "primary",
  size = "md",
  className = "",
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded font-medium transition duration-200 cursor-pointer min-w-32",
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        (disabled || loading) && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          {iconLeft && <span className="inline-flex">{iconLeft}</span>}
          {children}
          {iconRight && <span className="inline-flex">{iconRight}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
