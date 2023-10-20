import React, { useEffect } from "react";
import cls from "./Post.module.scss";
import { useAppDispatch, useAppSelector } from "app/providers/store";
import { getPost } from "features/model/reducers/Posts/PostsSlice";
import { getUser } from "features/model/reducers/Users/UsersSlice";
import { useParams } from "react-router-dom";
import PostCard from "widgets/ui/PostCard";
import Comments from "widgets/ui/Comments";
import Loader from "shared/ui/Loader";

const Post = () => {
  const { post_id } = useParams();
  const post = useAppSelector((state) => state.posts.post);
  const user = useAppSelector((state) => state.users.user);
  const loading = useAppSelector((state) => state.users.loading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPost(post_id)).then((res) => {
      dispatch(getUser(res.payload["userId"]));
    });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section>
          <PostCard
            body={post?.body!}
            reactions={post?.reactions!}
            tags={post?.tags!}
            userId={post?.userId!}
            id={post?.id!}
          >
            <p>
              <strong>Full name:</strong> {user?.firstName} {user?.maidenName}{" "}
              {user?.maidenName}
            </p>
          </PostCard>

          <div className={cls.comments}>
            <span>Комментарии поста: </span>
            {post?.comments.map((item) => (
              <div key={item.id}>
                <Comments comments={item.body} />
                <hr />
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Post;
