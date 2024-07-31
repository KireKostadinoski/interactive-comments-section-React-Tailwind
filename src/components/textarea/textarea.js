// TextArea.js
import React from "react";
import userImage from "../../images/avatars/image-juliusomo.png";

// Update component code accordingly


const TextArea = () => {
  return (
  
  <div className="w-full lg:flex lg:justify-center">
  <div className="flex flex-col space-y-4 bg-White rounded-xl w-full lg:w-[50%] p-5 mb-4"> 
     <div><textarea type="text" placeholder="Add a comment..."  className="cursor-pointer p-5 w-full h-32 border-2 border-gray-300 rounded-lg placeholder:text-gray-300"/>

     </div>
     <div className="flex flex-row justify-between items-center">
        <img src={userImage} alt="" className="w-10 h-10"/>
        <div className="flex justify-center items-center bg-ModerateBlue text-White px-3 py-1 rounded-lg cursor-pointer hover:opacity-75 duration-75">
            SEND
        </div>
     </div>
  </div>
  </div>

  )
};

export default TextArea;
