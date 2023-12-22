import { useState } from "react";
import MainHeader from "./components/MainHeader";
import Post from "./components/Post";
import PostsList from "./components/PostsList";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState();

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }
  return (
    <main>
      <MainHeader onCreatePost={showModalHandler} />
      <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
    </main>
  );
}
