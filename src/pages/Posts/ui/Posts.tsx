import React, { useEffect } from "react";
import cls from "./Posts.module.scss";
import { useAppDispatch, useAppSelector } from "app/providers/store";
import { getPosts } from "features/model/reducers/Posts/PostsSlice";
import PostCard from "widgets/ui/PostCard";
import CreatePostForm from "features/ui/CreatePostForm";
import { Link } from "react-router-dom";
import Loader from "shared/ui/Loader";

const Posts = () => {
  const data = useAppSelector((state) => state.posts.posts);
  const loading = useAppSelector((state) => state.posts.loading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className={cls.main}>
          <CreatePostForm />
          <div className={cls.cards}>
            {data.map((item) => (
              <Link key={item.id} to={`/posts/${item.id}`}>
                <PostCard
                  id={item.id}
                  body={item.body}
                  reactions={item.reactions}
                  tags={item.tags}
                  userId={item.userId}
                />
              </Link>
            ))}
          </div>
        </main>
      )}
    </>
  );
};

export default Posts;
