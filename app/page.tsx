"use client";
import Input from "@/components/input";
import Response from "@/components/response";
import { useState } from "react";

export default function Chat() {
  const [response, setResponse] = useState("");

  const handleQuery = async (input: string) => {
    let resp = await fetch("/api/chatService?query=" + input)
      .then((res) => res.json())
      .then((data) => data.data);

    console.log(resp);
    setResponse(resp);
  };

  return (
    <div className="flex w-full min-h-screen items-center justify-center flex-col">
      <div className="max-w-[50vw]">
        <Response response={response} />
        <Input handleQuery={handleQuery} />
      </div>
    </div>
  );
}
