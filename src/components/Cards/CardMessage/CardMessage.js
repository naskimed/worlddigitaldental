import React, { useState } from "react";
import "./CardMessage.css";

const MessageForm = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendClick = () => {
    // Handle sending the message (you can implement this part)
    console.log("Subject:", subject);
    console.log("Message:", message);

    // Reset the form after sending
    setSubject("");
    setMessage("");
  };

  return (
    <div className="bg-white p-4 shadow-lg rounded-lg" id="bg-white">
        <div className="rounded-t bg-white mb-0 px-6 py-6"
        style={{backgroundColor:"#14939C15"}}
        id="bg-white"
        >
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Nouveau message</h6>
          </div>
        </div>
      <br></br>
      <div className="mb-6">
        <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
          Sujet
        </label>
        <input
          type="text"
          id="subject"
          className="border rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
          value={subject}
          onChange={handleSubjectChange}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
          Message
        </label>
        <textarea
          id="message"
          className="border rounded-md px-4 py-2 w-full resize-none focus:outline-none focus:border-blue-500"
          rows="10"
          value={message}
          onChange={handleMessageChange}
        ></textarea>
      </div>
      <button
        className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
        onClick={handleSendClick}
      >
        Envoyer
      </button>
    </div>
  );
};

export default MessageForm;
