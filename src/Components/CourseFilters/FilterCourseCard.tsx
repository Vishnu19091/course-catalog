interface FilterCard {
  name: string;
  selected: boolean;
  onClick: () => void;
}

export function FilterCourseCard({ name, selected, onClick }: FilterCard) {
  return (
    <>
      <button
        onClick={onClick}
        className={`border-2 border-b-[5px] rounded-xl px-4 py-2 transition-all bg-white cursor-pointer
        ${
          selected
            ? "border-blue-600 bg-blue-100 scale-105"
            : "border-gray-400 hover:border-blue-600 hover:bg-blue-100 hover:scale-105"
        }`}
      >
        {name}
      </button>
    </>
  );
}
