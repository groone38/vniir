import { Outlet } from "react-router-dom";
import cls from "./Layout.module.scss";
import Header from "widgets/ui/Header";

const Layout = () => {
  return (
    <div className={cls.wrapper}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
