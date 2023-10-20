import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Layout from "pages/Layout";
import Home from "pages/Home/Home";
import Loader from "shared/ui/Loader";

const Posts = lazy(() => import("../../../pages/Posts"));
const Post = lazy(() => import("../../../pages/Post"));
const Profile = lazy(() => import("../../../pages/Profile"));
const Login = lazy(() => import("../../../pages/Login"));

const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:post_id" element={<Post />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
        <Route path="/auth" element={<Login />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
