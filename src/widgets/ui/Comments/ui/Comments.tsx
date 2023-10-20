import React from "react";

interface IComments {
  comments: string;
}

const Comments = ({ comments }: IComments) => {
  return <p>{comments}</p>;
};

export default Comments;
