"use client";
import React, { FormEvent, useState } from "react";

const Input = () => {
  const [input, setInput] = useState("");

  return (
    <div className="join">
      <input
        type="text"
        placeholder="Type here"
        className="input w-full max-w-xs bg-gray-700 rounded-lg p-2 join-item"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        className="btn btn-primary p-2 join-item rounded-lg"
        onClick={() => fetch("/api/chatService?query=" + input)}
      >
        Ask
      </button>
    </div>
  );
};

export default Input;
