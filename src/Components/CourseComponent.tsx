import { BlueButton, RedButton } from "./Buttons";
import { NavigationBar } from "./NavigationBar";
import ContinueCourseCardList from "./CourseCardList";
import CourseSection from "./CourseList";
import ModalFilterButton from "./ModalWindow";

export function Your_course_block() {
  const academicCourses = [
    { name: "Math - CBSE", image: "/assets/Algebra.png" },
    { name: "Biology - CBSE", image: "/assets/Biology.png" },
    { name: "Biology - CBSE", image: "/assets/Biology.png" },
    { name: "Math - CBSE", image: "/assets/Algebra.png" },
  ];

  const jeeCourses = [
    { name: "Physics - JEE", image: "/assets/Physics.png" },
    { name: "Chemistry - JEE", image: "/assets/Chemistry.png" },
    { name: "Maths - JEE", image: "/assets/Physics.png" },
  ];

  const CBSECourses = [
    { name: "Physics - JEE", image: "/assets/Physics.png" },
    { name: "Chemistry - JEE", image: "/assets/Chemistry.png" },
    { name: "Maths - JEE", image: "/assets/Physics.png" },
  ];

  const noofCourses =
    academicCourses.length + jeeCourses.length + CBSECourses.length;

  return (
    <div>
      <NavigationBar />
      <ContinueCourseCardList />
      <div>
        <div className="flex flex-row justify-between items-center mx-0 my-6">
          <p className="font-bold text-xl">Your Courses {noofCourses}</p>
          <ModalFilterButton />
        </div>
        <div className=" bg-gray-200 rounded-xl py-1">
          <CourseSection title="Academic Courses" courses={academicCourses} />
          <CourseSection title="JEE Courses" courses={jeeCourses} />
          <CourseSection title="JEE Courses" courses={CBSECourses} />
        </div>
      </div>
      <div className="flex flex-row gap-10 mt-10 w-full justify-between">
        <BlueButton name="Apply Filters" />
        <RedButton name="Clear" />
      </div>
    </div>
  );
}
