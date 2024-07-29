// Replies.js
// Replies.js
import React from "react";
import minusIcon from "../../images/icon-minus.svg";
import plusIcon from "../../images/icon-plus.svg";
import replyIcon from "../../images/icon-reply.svg";
import userImage from "../../images/avatars/image-ramsesmiron.png";
import replyUserImage from "../../images/avatars/image-juliusomo.png";



// Update component code accordingly

const Replies = ({ replies }) => {


  function openReply(){
    const replyDiv1 = document.getElementById('replyDiv1');

    replyDiv1.classList.toggle('hidden')
  }

  return (
    <div className="flex flex-col justify-between items-center">
      {replies.map((reply) => (
        <div
          key={reply.id}
          className="flex flex-col space-y-4 bg-White rounded-xl w-[95%] lg:w-[45%] p-5 mb-4 lg:relative lg:ps-20"
        >
          <div className="flex flex-row items-center space-x-4">
            <img
              src={userImage}
              alt={reply.user.username}
              className="w-10 h-10 rounded-full"
            />
            <h4 className="text-DarkBlue font-bold">{reply.user.username}</h4>
            <p className="text-gray-500">{reply.createdAt}</p>
          </div>
          <div>
            <p className="text-gray-500" >
              <span className="text-ModerateBlue font-bold">
                @{reply.replyingTo}
              </span>{" "}
              {reply.content}
            </p>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row justify-between bg-VeryLightGray rounded-lg w-24 h-8 lg:flex lg:flex-col lg:justify-self-center lg:items-center lg:w-10 lg:h-24 lg:py-3 lg:absolute lg:left-5 lg:top-8">
              <div className="flex justify-center items-center w-1/3 cursor-pointer">
                <img src={minusIcon} alt="Minus" />
              </div>
              <div className="flex justify-center items-center w-1/3 cursor-pointer">
                <h4 className="text-ModerateBlue font-bold">{reply.score}</h4>
              </div>
              <div className="flex justify-center items-center w-1/3 cursor-pointer">
                <img src={plusIcon} alt="Plus" />
              </div>
            </div>
            <div className="flex flex-row items-center space-x-2 cursor-pointer lg:absolute lg:right-5 lg:top-5 hover:opacity-75 duration-75" onClick={openReply}>
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

      <div className="flex flex-row justify-between space-x-4 bg-White rounded-xl w-[95%] lg:w-[45%] p-5 mb-4 hidden" id="replyDiv1">
        <img src={replyUserImage} alt="" className="w-10 h-10" />

        <textarea
          type="text"
          placeholder="Add a comment..."
          className=" p-5 w-full h-32 border-2 border-gray-300 rounded-lg placeholder:text-gray-300"
        />
        <div className="flex justify-center items-center bg-ModerateBlue text-White px-3 py-1 rounded-lg cursor-pointer h-10 hover:opacity-70 duration-100">
          REPLY
        </div>
      </div>
    </div>
  );
};

export default Replies;
