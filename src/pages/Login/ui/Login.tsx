import React, { useState } from "react";
import cls from "./Login.module.scss";
import { useAppDispatch, useAppSelector } from "app/providers/store";
import { auth } from "features/model/reducers/Users/UsersSlice";
import { useNavigate } from "react-router-dom";
import Input from "shared/ui/Input";
import Button from "shared/ui/Button";
import ErrorMeessage from "shared/ui/ErrorMessage/ui/ErrorMeessage";
import Loader from "shared/ui/Loader";

const Login = () => {
  const [value, setValue] = useState({
    login: "",
    password: "",
  });

  const error = useAppSelector((state) => state.users.error);
  const loading = useAppSelector((state) => state.users.loading);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onChangeValueHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setValue({
      ...value,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(auth(value)).then(() => navigate("/posts"));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={cls.wrappe}>
          {error && <ErrorMeessage message={error} />}
          <form onSubmit={onSubmitHandler} className={cls.login}>
            <Input
              type="text"
              title="Login: "
              id="login"
              value={value.login}
              onChange={onChangeValueHandler}
            />
            <Input
              type="password"
              title="Password: "
              id="password"
              value={value.password}
              onChange={onChangeValueHandler}
            />
            <Button type="submit">Авторизоваться</Button>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
