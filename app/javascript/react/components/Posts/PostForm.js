import React from "react";

const PostForm = ({ inputs, handleChange, handleSubmit }) => {
  // debugger;
  return (
    <div className="grid-x grid-padding-x align-center">
      <div className="medium-8 cell">
        <div className="form-box">
          <form onSubmit={handleSubmit} className="post-form">
            <h2>Submit a new Post</h2>
            <input
              type="text"
              onChange={handleChange}
              name="title"
              value={inputs.title}
              placeholder="Post Title"
            />
            <textarea
              type="text"
              rows="3"
              onChange={handleChange}
              name="body"
              value={inputs.body}
              placeholder="Post Description"
            />

            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
