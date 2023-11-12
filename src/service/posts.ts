import { SimplePost } from "@/model/post";
import { client, urlFor } from "./sanity";

const simplePostProjection = `
  ...,
  "username": author->username,
  "userImage": author->image,
  "image": photo,
  "likes": likes[]->username,
  "text": comments[0].comment,
  "comments": count(comments),
  "id":_id,
  "createdAt":_createdAt
`;
export async function getFollowingPostsOf(username: string) {
  return client
    .fetch(
      `
    *[_type == "post" && author->username == "${username}"
      || author._ref in *[_type == "user" && username == "${username}"].following[]._ref]
      | order(_createdAt desc){${simplePostProjection}}
  `
    )
    .then((posts) =>
      posts.map((post: SimplePost) => ({ ...post, image: urlFor(post.image) }))
    );
}

export async function getPost(id: string) {
  return client
    .fetch(
      `*[_type == "post" && _id == "${id}"][0]{
      ...,
      "username": author -> username,
      "userImage": author -> image,
      "image": photo,
      "likes": likes[] -> username,
      comments[]{comment, "username": author->username, "image":author->image},
      "id":_id,
      "createdAt":_createdAt
    }`
      // 찾고자 하는 type는 post 이고, id 가 " "에 해당하는 포스트를 가져올 것이고, 배열을 리턴 받으니까 [0]째 아이템을 읽어 올 것이다
      // 기본적은 내용은 그대로 쓸건데, username, userImage은 author 에 있는 username 으로 가져올꺼고
      // image 는 photh 에 있는거를 쓸거고
      // likes 는 누가 이걸 좋아하는지 배열로 받을려고 해. 그래서 likes는 그 안에 있는 username 으로 바꿔서 배열을 받을거야
      // comment는 배열로 가져올건데 그 중에 뭘 가져올거냐면, comment 와 username, image 가져 올거야
    )
    .then((post) => ({ ...post, image: urlFor(post.image) }));
  // 쿼리가 잘되면 전달받은 post를 다른걸로 바꾸어 줄건데, post 다른건 그대로 쓰고 image의 photo 만 좀 바꿀꺼야
  //
}
