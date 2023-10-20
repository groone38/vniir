import React from "react";
import Button from "shared/ui/Button";
import Input from "shared/ui/Input";
import { useState } from "react";
import { useAppDispatch } from "app/providers/store";
import { createPost, getPosts } from "features/model/reducers/Posts/PostsSlice";
import cls from "./CreatePostForm.module.scss";

const CreatePostForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      const userId = localStorage.getItem("userId");
      const data = {
        title: value,
        userId,
      };
      dispatch(createPost(data)).then(() => dispatch(getPosts()));
    }
  };
  return (
    <form onSubmit={onSubmitHandler} className={cls.form}>
      <Input
        type="text"
        title="Create post: "
        id="create"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
      <div className={cls.form__btn}>
        <Button type="submit">create post</Button>
      </div>
    </form>
  );
};

export default CreatePostForm;
