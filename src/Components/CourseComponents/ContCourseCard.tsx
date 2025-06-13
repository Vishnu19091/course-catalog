interface CourseCardProps {
  name: string;
  image: string;
  url: string;
}

export default function CourseCard({ name, image, url }: CourseCardProps) {
  return (
    <a
      href={url}
      className="flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-gray-400 hover:border-blue-600 border-b-[5px] p-4 transition-all bg-white hover:bg-blue-100 hover:scale-105"
    >
      <img src={image} className="w-10 h-10" />
      <p className="mobile:text-[12px] lmobile:text-[15px] tablet:text-[15px] text-xl text-center font-bold w-[105%]">
        {name}
      </p>
    </a>
  );
}
