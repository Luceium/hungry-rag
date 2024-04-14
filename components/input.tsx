"use client";
import React, { FormEvent, useState } from "react";

const Input = ({ handleQuery }: { handleQuery: Function }) => {
  const [input, setInput] = useState("");

  return (
    <div className="join w-full">
      <input
        type="text"
        placeholder="Type here"
        className="input w-full bg-gray-700 rounded-lg p-2 join-item"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleQuery(input);
        }}
      />
      <button
        className="btn btn-primary p-2 join-item rounded-lg"
        onClick={() => handleQuery(input)}
      >
        Ask
      </button>
    </div>
  );
};

export default Input;
