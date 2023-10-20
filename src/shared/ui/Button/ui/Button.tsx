import React from "react";
import cls from "./Button.module.scss";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  Children?: string;
}

const Button = ({ disabled, children, ...props }: IButton) => {
  return (
    <button
      type={props.type}
      disabled={disabled}
      {...props}
      className={cls.button}
    >
      {children}
    </button>
  );
};

export default Button;
