import { OptForm } from "./Form";

export function Container() {
  return (
    <div className="flex flex-col max-w-[65%] mx-auto items-center bg-white rounded-2xl gap-6 p-8 h-[35rem]">
      <div className="w-full flex justify-between self-start">
        <div className="flex gap-2 items-center">
          <img
            src="/assets/zeppe.png"
            className="h-10 w-10 border-[3px] border-blue-300 rounded-xl p-1"
          />
          <h1 className="font-bold text-black text-2xl">Zeppe Learn</h1>
        </div>
        <button className="border border-[#adadad] rounded-xl px-6 py-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out">
          Skip
        </button>
      </div>
      <h1 className="self-start font-bold text-lg text-black">
        Enter your Email ID
      </h1>
      <OptForm />
    </div>
  );
}
