import React from "react";
import cls from "./PostCard.module.scss";
import { Link } from "react-router-dom";

interface IPostCard {
  id: number;
  body: string;
  reactions: number;
  tags: string[];
  userId: number | null;
  children?: JSX.Element;
}

const PostCard = ({
  id,
  body,
  reactions,
  tags = [],
  userId,
  children,
}: IPostCard) => {
  return (
    <div className={cls.card}>
      <p>
        <strong>Text:</strong> {body}
      </p>
      <hr />
      <div className={cls.card__info}>
        <p>
          <strong>ID user:</strong> {userId}
        </p>
        <p>
          <strong>Likes:</strong> {reactions}
        </p>
      </div>
      <hr />
      <div className={cls.card__footer}>
        <p>
          <strong>Tags:</strong>{" "}
          {tags.map((item) => {
            if (item !== tags[tags.length - 1]) {
              return <span key={item}>{item}, </span>;
            } else {
              return <span key={item}>{item}</span>;
            }
          })}
        </p>
        {children}
      </div>
    </div>
  );
};

export default PostCard;
