interface CourseBlockProps {
  name: string;
  image: string;
}

export function CourseBlock({ name, image }: CourseBlockProps) {
  if (!name || !image) return null;

  return (
    <div className="flex flex-row gap-4 bg-white hover:bg-blue-100 border-2 border-b-[5px] border-gray-400 hover:border-blue-600 rounded-2xl p-4 w-full h-[3.5rem]  items-center hover:scale-105 transition-all ease-in-out duration-200">
      <figure>
        <img src={image} width={40} height={40} className="rounded-lg" />
      </figure>
      <p className="font-[600] text-black">{name}</p>
    </div>
  );
}
