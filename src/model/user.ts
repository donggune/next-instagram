export type User = {
  name: string;
  username: string;
  email: string;
  image?: string;
};

export type SimpleUser = Pick<User, "username" | "image">;

export type DetailUser = User & {
  following: SimpleUser[];
  followers: SimpleUser[];
  bookmarks: string[];
};

// user type을 그대로 쓸건데, following 을 number type으로 가져올래
export type ProfileUser = User & {
  following: number;
  followers: number;
};
