import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Component from "./Component";
import Post from "./Post";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Post postID={1} />
      <Post postID={1000} />
    </div>
  );
}

export default App;
