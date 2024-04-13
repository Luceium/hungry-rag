import Input from "@/components/input";
import { FormEvent } from "react";
import { useChat } from "@vectara/react-chatbot/lib";
import { ReactChatbot } from "@vectara/react-chatbot";




export default function Chat() {
  const {
    sendMessage,
    activeMessage,
    messageHistory,
    isLoading,
    isStreamingResponse,
    hasError,
    startNewConversation
  } = useChat(
    DEFAULT_CUSTOMER_ID,
    DEFAULT_CORPUS_IDS,
    DEFAULT_API_KEY,
    true // Enable streaming, false otherwise. Defaults to true.
  );
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
