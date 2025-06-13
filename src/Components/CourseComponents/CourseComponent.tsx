import { NavigationBar } from "Components/Navigation/NavigationBar";
import ContinueCourseCardList from "./ContCourseCardList";
import CourseSection from "./YourCourseList";
import ModalFilterButton from "Components/ModalWindow";

export function Your_course_block() {
  {
    /* 
    ::::::::::::::::: CREATES Course component by giving name and
   image path by creating in a arrayObject ::::::::::::::::: 
   */
  }
  const academicCourses = [
    { name: "Math - Academic Course", image: "/assets/Algebra.png" },
    { name: "Biology - Academic Course", image: "/assets/Biology.png" },
    { name: "Biology - Academic Course", image: "/assets/Biology.png" },
    { name: "Math - Academic Course", image: "/assets/Algebra.png" },
  ];

  const jeeCourses = [
    { name: "Physics - JEE", image: "/assets/Physics.png" },
    { name: "Chemistry - JEE", image: "/assets/Chemistry.png" },
    { name: "Maths - JEE", image: "/assets/Algebra.png" },
  ];

  const CBSECourses = [
    { name: "Chemistry - CBSE", image: "/assets/Chemistry.png" },
    { name: "Physics - CBSE", image: "/assets/Physics.png" },
    { name: "Maths - CBSE", image: "/assets/Algebra.png" },
  ];

  // :::::: Display No.Of Course user enrolled ::::::
  const noofCourses =
    academicCourses.length + jeeCourses.length + CBSECourses.length;

  return (
    <div>
      <NavigationBar />
      <ContinueCourseCardList />
      <div>
        <div className="flex flex-row justify-between items-center mx-0 my-6">
          <p className="font-bold mobile:text-[17px] lmobile:text-[17px] tablet:text-xl">
            Your Courses ({noofCourses})
          </p>
          <ModalFilterButton />
        </div>
        <div className=" bg-gray-200 rounded-xl py-1">
          <CourseSection title="Academic Courses" courses={academicCourses} />
          <CourseSection title="JEE Courses" courses={jeeCourses} />
          <CourseSection title="CBSE Courses" courses={CBSECourses} />
        </div>
      </div>
    </div>
  );
}
