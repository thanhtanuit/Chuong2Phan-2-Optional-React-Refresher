import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import { useState } from "react";
import Modal from "./Modal";
function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  function addPostHandler(postData) {
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
