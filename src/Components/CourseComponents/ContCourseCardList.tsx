import CourseCard from "./ContCourseCard";

interface Course {
  name: string;
  url: string;
  image: string;
}

export default function ContinueCourseCardList() {
  const courses: Course[] = [
    {
      name: "Chemistry - CBSEk12",
      url: "#",
      image: "/assets/Chemistry.png",
    },
    {
      name: "Biology - CBSE - k12",
      url: "#",
      image: "/assets/Biology.png",
    },
    {
      name: "Algebra - CBSE - k12",
      url: "#",
      image: "/assets/Algebra.png",
    },
    {
      name: "React - CBSE - k12",
      url: "#",
      image: "/assets/React.png",
    },
  ];

  return (
    <div className="mx-auto max-w-full p-4">
      <h2 className="mobile:text-[15px] lmobile:text-[17px] tablet:text-xl font-semibold mb-4">
        Continue Learning ({courses.length})
      </h2>
      <div className="grid desktop:grid-cols-4 ldesktop:grid-cols-4 laptop:grid-cols-4 mobile:grid-cols-3 lmobile:grid-cols-2 tablet:grid-cols-2 gap-4">
        {courses.map(
          (course, idx) =>
            course.name &&
            course.image &&
            course.url && (
              <CourseCard
                key={idx}
                name={course.name}
                url={course.url}
                image={course.image}
              />
            )
        )}
      </div>
    </div>
  );
}
