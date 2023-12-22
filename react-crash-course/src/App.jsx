import React from "react";
import Post from "./components/Post";

export default function App() {
  return (
    <main>
      <Post author="Maximilian" body="React.js is awesome!" />
      <Post author="Manuel" body="Check out the full course!" />
    </main>
  );
}
