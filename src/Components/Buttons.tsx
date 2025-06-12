export function Filter() {
  return (
    <>
      <button className="flex flex-row border-[2px] border-[#0088ff] gap-2 rounded-xl px-3 py-1.5 hover:cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0088ff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <path d="M6 4v4" />
          <path d="M6 12v8" />
          <path d="M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <path d="M12 4v10" />
          <path d="M12 18v2" />
          <path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <path d="M18 4v1" />
          <path d="M18 9v11" />
        </svg>
        <p className="text-lg font-[600] text-[#0088ff]">Filters</p>
      </button>
    </>
  );
}

interface ButtonProp {
  name: string;
}

export function BlueButton({ name }: ButtonProp) {
  return (
    <>
      <button className="bg-blue-600 border-b-[5px] border-b-blue-800 rounded-2xl text-white font-[600] px-12 py-2.5 hover:scale-110 transition-all duration-300 cursor-pointer">
        {name}
      </button>
    </>
  );
}

export function RedButton({ name }: ButtonProp) {
  return (
    <>
      <button className="bg-red-600 border-b-[5px] border-b-red-800 rounded-2xl text-white font-[600] px-12 py-2.5 hover:scale-110 transition-all duration-300 cursor-pointer">
        {name}
      </button>
    </>
  );
}
