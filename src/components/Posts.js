import React, { useEffect } from "react";

// redux stuff
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "store/postsSlice";

const Posts = () => {
  // hooking into app state to get dispatch fn, and posts state
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.postsState);

  // fetching 100 posts on component mount
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <>
      <h1>Posts</h1>

      {/* mapping through all posts & returning a div with relevant info */}
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};

export default Posts;
