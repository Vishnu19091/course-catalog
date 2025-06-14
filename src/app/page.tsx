import { Your_course_block } from "Components/CourseComponents/CourseComponent";
import "./globals.css";
import { StatusBar } from "Components/streakandpoints/StatusBar";

export default function Home() {
  return (
    <div>
      <StatusBar />
      <Your_course_block />
    </div>
  );
}
