import Input from "@/components/input";
import Response from "@/components/response";
import { FormEvent } from "react";

export default function Chat() {
  return (
    <div className="flex w-full min-h-screen items-center justify-center flex-col">
      <div>
        <Response />
        <Input />
      </div>
    </div>
  );
}
