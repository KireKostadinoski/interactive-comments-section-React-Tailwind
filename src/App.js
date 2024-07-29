// App.js
import React from "react";
import Comments from "./components/comments/comment"; // Adjust the import path as needed
import Replies from "./components/replies/replies"; // Adjust the import path as needed
import data from "./data.json"; // Import data
import TextArea from "./components/textarea/textarea";
import CurrentUser from "./components/currentUser/currentUser";

const App = () => {
  
  const specificComment = data.comments[1];
  const replies =
    specificComment.replies.length > 0 ? [specificComment.replies[0]] : [];
  const secondReply =
    specificComment.replies.length > 1 ? specificComment.replies[1] : null;

  return (
    <div className="flex flex-col items-end  bg-VeryLightGray px-2 py-2">
      <Comments />

      <div className="border-s-2 border-gray-300 lg:border-none flex flex-col justify-between items-end mb-5">
        <Replies replies={replies} />

        {secondReply && <CurrentUser reply={secondReply} />}
      </div>

      <TextArea />
    </div>
  );
};

export default App;
