import { OptForm } from "./Form";

export function Container() {
  return (
    <div className="flex flex-col mobile:w-screen lmobile:max-w-[80%] tablet:max-w-[80%] desktop:max-w-[65%] mx-auto items-center mobile:bg-none lmobile:bg-white rounded-2xl gap-6 mobile:p-2 tablet:p-8 tablet:h-[35rem] mobile:h-screen mt-5">
      <div className="w-full flex justify-between self-start">
        <div className="flex gap-2 items-center">
          <img
            src="/assets/zeppe.png"
            className="h-10 w-10 border-[3px] border-blue-300 rounded-xl p-1"
          />
          <h1 className="font-bold text-black text-2xl mobile:hidden tablet:block">
            Zeppe Learn
          </h1>
        </div>
        <button className="border border-[#adadad] rounded-xl px-6 py-2 hover:bg-gray-100 transition-colors duration-300 ease-in-out mobile:scale-[0.75] tablet:scale-[0.85] cursor-pointer">
          Skip
        </button>
      </div>
      <h1 className="self-start font-bold mobile:text-[17px] tablet:text-lg text-black">
        Enter your Email ID
      </h1>
      <OptForm />
    </div>
  );
}
