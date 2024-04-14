import React from "react";

const Response = ({ response }: { response: string }) => {
  return (
    <div className="bg-gray-600 w-full max-h-[70 vh] min-h-60 rounded-md p-5 mb-10">
      {response ? response : "Ask me anything about world hunger"}
    </div>
  );
};

export default Response;
