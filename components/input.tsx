"use client";
import chatService from "@/app/chatService";
import React, { FormEvent } from "react";

const Input = () => {
  return (
    <form onSubmit={chatService} className="join">
      <input
        type="text"
        placeholder="Type here"
        className="input w-full max-w-xs bg-gray-700 rounded-lg p-2 join-item"
      />
      <button className="btn btn-primary p-2 join-item rounded-lg">Ask</button>
    </form>
  );
};

export default Input;
