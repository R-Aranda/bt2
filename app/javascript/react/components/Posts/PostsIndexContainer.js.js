import React from "react";

const PostsIndexContainer = ({ posts }) => {
  let postList = posts.map((post) => {
    return (
      <li key={post.id}>
        <h3>{post.attributes.title}</h3>
        <p>{post.attributes.body}</p>
      </li>
    );
  });
  return (
    <div>
      <ul>{postList}</ul>
    </div>
  );
};

export default PostsIndexContainer;
