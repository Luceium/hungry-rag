import Image from "next/image";

export default function Chat() {
  return (
    <div className="flex w-full min-h-screen items-center justify-center flex-col">
      
      <div>
        <div className="bg-gray-600 w-full"></div>
        <form className="inline-block">
          <input type="text" placeholder="Type here" className="input w-full max-w-xs bg-gray-700 rounded p-2" />
          <button className="btn btn-primary">Ask</button>
        </form>
        
      </div>
    </div>
  );
}
 