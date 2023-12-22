import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import { useEffect, useState } from "react";
import Modal from "./Modal";
function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("http://localhost:5000/vite/GetVites");
      const resData = await response.json();
      setPosts(resData.data);
    }
    fetchPosts();
  }, []);
  function addPostHandler(postData) {
    fetch("http://localhost:5000/vite/PostVite", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}

      <ul className={classes.posts}>
        {posts.map((e) => {
          return <Post author={e.author} body={e.body} />;
        })}
      </ul>
    </>
  );
}

export default PostsList;
