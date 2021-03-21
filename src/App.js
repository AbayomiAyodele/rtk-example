import React from "react";

// importing components
import { Posts, PostsForm } from "components";

function App() {
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <PostsForm />
      <hr />
      <Posts />
    </div>
  );
}

export default App;
