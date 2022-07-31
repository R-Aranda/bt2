import React from "react";

const PostsIndexContainer = ({ posts }) => {
  let postList = posts.map((post) => {
    return (
      <div key={post.id}>
        <div className="callout primary">
          <h3 className="post-header">{post.attributes.title}</h3>
          <p>{post.attributes.body}</p>
          <p>{post.attributes.created_at}</p>
        </div>
      </div>
    );
  });
  return (
    <div>
      <ul>{postList}</ul>
    </div>
  );
};

export default PostsIndexContainer;
