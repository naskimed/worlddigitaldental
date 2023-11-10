import React from "react";

// components

import MessageForm from "components/Cards/CardMessage/CardMessage";

export default function Messages() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
          style={{backgroundColor:"#ffffff00"}}
          >
            <MessageForm />
          </div>
        </div>
      </div>
    </>
  );
}
