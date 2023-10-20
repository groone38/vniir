export interface Comments {
  id: number;
  body: string;
  postId: number;
  user: {
    id: number;
    username: string;
  };
}

export interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number | null;
  tags: string[];
  reactions: number;
  comments: Comments[];
}

export interface IPosts {
  posts: IPost[];
}

export interface CreatePost {
  title: string;
  userId: string | null;
}
