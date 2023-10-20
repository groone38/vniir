import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/posts");
  }, []);
  return <></>;
};

export default Home;
