import Input from "@/components/input";
import { FormEvent } from "react";

export default function Chat() {
  return (
    <div className="flex w-full min-h-screen items-center justify-center flex-col">
      <div>
        <div className="bg-gray-600 w-full max-h-[70 vh] min-h-60 rounded-md p-5 mb-10">
          hi
        </div>
        <Input />
      </div>
    </div>
  );
}
