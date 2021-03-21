import React from "react";

// redux stuff
import { Provider } from "react-redux";
import store from "store/Store";

// importing components
import { Posts, PostsForm } from "components";

function App() {
  return (
    <Provider store={store}>
      <div style={{ width: "90%", margin: "auto" }}>
        <PostsForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
