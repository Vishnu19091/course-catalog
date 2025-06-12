import { CourseBlock } from "./BlockComponent";

interface Course {
  name: string;
  image: string;
}

interface CourseSectionProp {
  title: string;
  courses: Course[];
}

export default function CourseSection({ title, courses }: CourseSectionProp) {
  return (
    <div className="flex flex-col gap-2 mx-auto w-full bg-gray-200 p-4 m-2 rounded-xl justify-center items-center">
      <h1 className="self-start text-gray-500 font-extrabold">{title}</h1>
      <div className="grid grid-cols-2 gap-x-7 gap-y-4 w-[95%]">
        {courses.map(
          (course, index) =>
            course.name &&
            course.image && (
              <CourseBlock
                key={`${course.name}-${index}`}
                name={course.name}
                image={course.image}
              />
            )
        )}
      </div>
    </div>
  );
}
