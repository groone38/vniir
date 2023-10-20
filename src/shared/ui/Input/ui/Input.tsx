import React from "react";
import cls from "./Input.module.scss";

interface IInput extends React.HTMLAttributes<HTMLInputElement> {
  title?: string;
  type?: string;
  value?: string;
}

const Input = ({ title, type, value, ...props }: IInput) => {
  return (
    <label htmlFor={props.id} className={cls.input}>
      {title}
      <input
        type={type}
        name={props.id}
        id={props.id}
        {...props}
        value={value}
      />
    </label>
  );
};

export default Input;
