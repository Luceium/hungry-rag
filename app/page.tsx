"use client";
import Input from "@/components/input";
import Response from "@/components/response";
import { useState } from "react";

export default function Chat() {
  const [response, setResponse] = useState("");

  return (
    <div className="flex w-full min-h-screen items-center justify-center flex-col">
      <div>
        <Response response={response} />
        <Input />
      </div>
    </div>
  );
}
