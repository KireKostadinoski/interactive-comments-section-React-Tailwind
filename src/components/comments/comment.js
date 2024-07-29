import React from "react";
import minusIcon from "../../images/icon-minus.svg";
import plusIcon from "../../images/icon-plus.svg";
import replyIcon from "../../images/icon-reply.svg";
import userImage from "../../images/avatars/image-juliusomo.png";
import data from "../../data.json";
import userAvatar from "../../images/avatars/image-amyrobson.png"
// Update component code accordingly


const Comment = () => {
  function openReply() {
    const replyDiv = document.getElementById("replyDiv");

    replyDiv.classList.toggle("hidden");
  }

  return (
    <div className="flex flex-col justify-between items-center">
      {data.comments.map((comment) => (
        <div
          key={comment.id}
          className="flex flex-col space-y-4 bg-White rounded-xl w-full lg:w-[50%] p-5 mb-4 lg:relative lg:ps-20"
        >
          <div className="flex flex-row items-center space-x-4">
            <img
              src={userAvatar}
              alt={comment.user.username}
              className="w-10 h-10 rounded-full"
            />
            <h4 className="text-DarkBlue font-bold">{comment.user.username}</h4>
            <p className="text-gray-500">{comment.createdAt}</p>
          </div>
          <div>
            <p className="text-gray-500">{comment.content}</p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row justify-between bg-VeryLightGray rounded-lg w-24 h-8 lg:flex lg:flex-col lg:justify-self-center lg:items-center lg:w-10 lg:h-24 lg:py-3 lg:absolute lg:left-5 lg:top-8">
              <div className="flex justify-center items-center w-1/3 cursor-pointer">
                <img src={minusIcon} alt="Minus" />
              </div>
              <div className="flex justify-center items-center w-1/3 cursor-pointer">
                <h4 className="text-ModerateBlue font-bold">{comment.score}</h4>
              </div>
              <div className="flex justify-center items-center w-1/3 cursor-pointer">
                <img src={plusIcon} alt="Plus" />
              </div>
            </div>
            <div
              className="flex flex-row items-center space-x-2 cursor-pointer lg:absolute lg:right-5 lg:top-5 hover:opacity-75 duration-75"
              onClick={openReply}
            >
              <div>
                <img src={replyIcon} alt="Reply" />
              </div>
              <div>
                <h3 className="text-ModerateBlue text-lg font-semibold">
                  Reply
                </h3>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div
        className="flex flex-row justify-between space-x-4 bg-White rounded-xl w-[95%] lg:w-[50%] p-5 mb-4 hidden"
        id="replyDiv"
      >
        <img src={userImage} alt="" className="w-10 h-10" />

        <textarea
          type="text"
          placeholder="Add a comment..."
          className=" p-5 w-full h-32 border-2 border-gray-300 rounded-lg placeholder:text-gray-300 cursor-pointer"
        />
        <div className="flex justify-center items-center bg-ModerateBlue text-White px-3 py-1 rounded-lg cursor-pointer h-10 hover:opacity-70 duration-100">
          REPLY
        </div>
      </div>
    </div>
  );
};

export default Comment;
