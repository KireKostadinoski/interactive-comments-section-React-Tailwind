import React, { useRef } from "react";
import minusIcon from "../../images/icon-minus.svg";
import plusIcon from "../../images/icon-plus.svg";
import editIcon from "../../images/icon-edit.svg";
import deleteIcon from "../../images/icon-delete.svg";
import userImage from "../../images/avatars/image-juliusomo.png"



const CurrentUser = ({ reply }) => {
  const commentToEditRef = useRef(null);
  const updateBtnRef = useRef(null);

  function editContent() {
    commentToEditRef.current.setAttribute('contentEditable', 'true');
    commentToEditRef.current.classList.add('bg-gray-200');
    updateBtnRef.current.classList.remove('hidden');
  }

  function updateEditedComment() {
    const editedComment = commentToEditRef.current.innerHTML;

    commentToEditRef.current.setAttribute('contentEditable', 'false');
    commentToEditRef.current.classList.remove('bg-gray-200');
    updateBtnRef.current.classList.add('hidden');
  }

  function openModalWindow(){
    const modal = document.getElementById('modal');

    modal.classList.remove('hidden')
  }


  function closeModalWindow(){
    const modal = document.getElementById('modal');

    modal.classList.add('hidden')
  }


  
  return (
    <div className="w-full flex flex-col justify-center items-center relative">
      <div className="flex flex-col space-y-4 bg-White rounded-xl w-[95%] lg:w-[45%] p-5 mb-4 lg:relative lg:ps-20">
        <div className="flex flex-row items-center space-x-4">
          <img
            src={userImage}
            alt={reply.user.username}
            className="w-10 h-10 rounded-full"
          />
          <h4 className="text-DarkBlue font-bold">{reply.user.username}</h4>
          <div className="bg-ModerateBlue text-white px-2 rounded-lg flex flex-row justify-center items-center">
            you
          </div>
          <p className="text-gray-500">{reply.createdAt}</p>
        </div>
        <div>
          <p className="text-gray-500 rounded-lg p-3" ref={commentToEditRef}>
            <span className="text-ModerateBlue font-bold">
              @{reply.replyingTo}
            </span> {reply.content}</p>
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
          <div className="flex flex-row items-center space-x-5 cursor-pointer lg:absolute lg:right-5 lg:top-5">
            <div className="flex flex-row justify-center items-center space-x-2 hover:opacity-75 duration-75" onClick={openModalWindow}>
              <div>
                <img src={deleteIcon} alt="Delete" />
              </div>
              <div>
                <h3 className="text-SoftRed text-lg font-semibold">Delete</h3>
              </div>
            </div>

            <div className="flex flex-row justify-center items-center space-x-2 hover:opacity-75 duration-75" onClick={editContent}>
              <div>
                <img src={editIcon} alt="Edit" />
              </div>
              <div>
                <h3 className="text-ModerateBlue text-lg font-semibold">
                 Edit
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end hidden" ref={updateBtnRef}>
          <div className="bg-ModerateBlue text-white px-2 py-1 rounded-lg cursor-pointer" onClick={updateEditedComment}>
            UPDATE
          </div>
        </div>
      </div>
      <div className="w-screen h-screen bg-black bg-opacity-70 fixed top-0 left-0 flex justify-center items-center hidden " id="modal">
        <div className="bg-white w-[90%] lg:w-[20%] p-5 rounded-lg flex flex-col space-y-2">
          <h1 className="text-2xl ">Delete comment</h1>
          <p className="text-GrayishBlue">
            Are you sure want to delete this comment? This wil remove comment and can't be undone. 
          </p>
          <div className="flex flex-row justify-between ">
            <div className="bg-GrayishBlue px-4 py-2 text-White rounded-lg cursor-pointer" onClick={closeModalWindow}>
              NO, CANCEL
            </div>
            <div className="bg-SoftRed px-4 py-2 text-White rounded-lg cursor-pointer">
              YES, DELETE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentUser;
