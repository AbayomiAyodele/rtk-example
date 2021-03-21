import React, { useState } from "react";

// redux stuff
import { useDispatch } from "react-redux";
import { createPost } from "store/postsSlice";

const PostsForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // form submit function - prevents default form action & makes post request
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({ title, body }));
  };

  return (
    <>
      <h1>Add Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>Title: </label>
          <br />
          <input
            type='text'
            name='title'
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>

        <br />

        <div>
          <label htmlFor='body'>Body: </label>
          <br />
          <textarea
            name='body'
            value={body}
            onChange={({ target }) => setBody(target.value)}
          />
        </div>

        <br />

        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default PostsForm;
