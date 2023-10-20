import React from "react";
import cls from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import Button from "shared/ui/Button";

const Header = () => {
  const navigate = useNavigate();
  const onExit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/auth");
  };
  return (
    <header className={cls.header}>
      <nav>
        <Link to={"/posts"}>Posts</Link>
        <Link to={"/profile"}>Profile</Link>
        <Button type="button" onClick={onExit}>
          Exit
        </Button>
      </nav>
    </header>
  );
};

export default Header;
