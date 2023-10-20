import React from "react";
import cls from "./ErrorMessage.module.scss";

interface IErrorMeessage {
  message: string;
}

const ErrorMeessage = ({ message }: IErrorMeessage) => {
  return <p className={cls.error}>{message}</p>;
};

export default ErrorMeessage;
