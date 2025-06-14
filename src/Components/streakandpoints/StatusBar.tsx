export function StatusBar() {
  const cur_xp = 120;
  let streak = 4;
  let health = 4;
  return (
    <div className="flex justify-between flex-row my-8">
      <p className="mobile:text-[17px] lmobile:text-[17px] tablet:text-xl font-medium">
        <span className="text-blue-800 mobile:text-[17px] lmobile:text-[17px] tablet:text-xl italic font-extrabold">
          +XP
        </span>{" "}
        {cur_xp}
      </p>

      <div className="flex flex-row gap-2">
        <p className="mobile:text-[17px] lmobile:text-[17px] tablet:text-xl">
          ⚡ {streak}
        </p>
        <p className="mobile:text-[17px] lmobile:text-[17px] tablet:text-xl">
          ❤️ {health}
        </p>
      </div>
    </div>
  );
}
