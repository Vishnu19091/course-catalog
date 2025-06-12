import CourseCard from "./CourseCard";

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
      <h2 className="text-xl font-semibold mb-4">
        Continue Learning ({courses.length})
      </h2>
      <div className="grid grid-cols-4 gap-4">
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
