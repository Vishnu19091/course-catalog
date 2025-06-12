interface CourseCardProps {
  name: string;
  image: string;
  url: string;
}

export default function CourseCard({ name, image, url }: CourseCardProps) {
  return (
    <a
      href={url}
      className="flex flex-col items-center justify-center gap-4 rounded-xl border border-gray-400 border-b-[5px] p-4 shadow-sm hover:shadow-md transition-all bg-white"
    >
      <img src={image} className="w-10 h-10" />
      <p className="text-xl text-center font-normal">{name}</p>
    </a>
  );
}
