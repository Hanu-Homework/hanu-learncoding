import CourseLesson from "./lesson";

interface CourseModule {
  id: string;
  name: string;
  lessons: CourseLesson[];
}

export default CourseModule;
