import React from "react";
import styles from "./Button.module.scss";
import clsx from "clsx"; // クラス名を動的に切り替えるために使用

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  theme?: "primary" | "secondary";
};

export const Button = ({
  children,
  className,
  onClick,
  theme = "primary",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        styles.button,
        {
          [styles.primary]: theme === "primary",
          [styles.secondary]: theme === "secondary",
        },
        className
      )}
    >
      {children}
    </button>
  );
};
